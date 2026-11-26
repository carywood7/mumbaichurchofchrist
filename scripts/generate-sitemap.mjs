import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync
} from "node:fs";

import { join, relative, resolve } from "node:path";

const SITE = "https://mumbaichurchofchrist.com";
const DIST = resolve("dist");

if (process.env.CI !== "true") {
  console.log(
    "Sitemap generation skipped for local preview."
  );
  process.exit(0);
}

if (!existsSync(DIST)) {
  throw new Error("Production build directory missing.");
}

function walk(directory) {
  return readdirSync(directory, {
    withFileTypes: true
  }).flatMap(entry => {
    const path = join(directory, entry.name);

    return entry.isDirectory()
      ? walk(path)
      : [path];
  });
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const urls = new Set();
const pages = walk(DIST).filter(
  path => path.endsWith("/index.html")
);

for (const page of pages) {

  const html = readFileSync(page, "utf8");

  const robots = html.match(
    /<meta\s+name="robots"\s+content="([^"]+)"/i
  );

  if (!robots) {
    throw new Error(
      "Missing robots metadata: " + relative(DIST, page)
    );
  }

  if (/\bnoindex\b/i.test(robots[1])) {
    continue;
  }

  const canonical = html.match(
    /<link\s+rel="canonical"\s+href="([^"]+)"/i
  );

  if (!canonical) {
    throw new Error(
      "Missing canonical: " + relative(DIST, page)
    );
  }

  const url = new URL(canonical[1]);

  if (url.origin !== SITE || url.search || url.hash) {
    throw new Error(
      "Invalid sitemap canonical: " + url.href
    );
  }

  const route =
    "/" + relative(DIST, page)
      .replace(/index\.html$/, "");

  if (url.pathname !== route) {
    throw new Error(
      "Canonical mismatch: " + url.href
    );
  }

  if (urls.has(url.href)) {
    throw new Error(
      "Duplicate canonical: " + url.href
    );
  }

  urls.add(url.href);
}

if (!urls.size || !urls.has(SITE + "/")) {
  throw new Error("No indexable homepage found.");
}

const sorted = [...urls].sort();

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...sorted.map(url =>
    "  <url><loc>" +
    escapeXml(url) +
    "</loc></url>"
  ),
  "</urlset>",
  ""
].join("\n");

writeFileSync(join(DIST, "sitemap.xml"), xml);

writeFileSync(
  join(DIST, "robots.txt"),
  [
    "User-agent: *",
    "Allow: /",
    "",
    "Sitemap: " + SITE + "/sitemap.xml",
    ""
  ].join("\n")
);

console.log("======================================");
console.log("XML SITEMAP GENERATED");
console.log("HTML pages:", pages.length);
console.log("Indexable URLs:", urls.size);
console.log("Excluded URLs:", pages.length - urls.size);
console.log("Sitemap:", SITE + "/sitemap.xml");
console.log("======================================");
