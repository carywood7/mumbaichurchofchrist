import { navigation, connectionLinks } from "../data/navigation";

const SITE = "https://mumbaichurchofchrist.com";
const NAME = "Mumbai Church of Christ";

export type Entity = Record<string, unknown>;

const labels = new Map<string,string>();

for (const group of navigation) {
  labels.set(group.href, group.label);

  for (const child of group.children) {
    if (!labels.has(child.href)) labels.set(child.href, child.label);
  }
}

for (const link of connectionLinks) {
  labels.set(link.href, link.label);
}

const collectionRoots = new Set([
  "resources", "insights", "congregations", "events"
]);

export function seoGraph(
  canonical: URL,
  title: string,
  description: string,
  entity?: Entity,
  image?: string
) {
  const parts = canonical.pathname.split("/").filter(Boolean);
  const pageId = canonical.href + "#webpage";
  const entityId = canonical.href + "#main-entity";
  const breadcrumbId = canonical.href + "#breadcrumb";
  const siteId = SITE + "/#website";

  let pageType = "WebPage";

  if (parts[0] === "about") pageType = "AboutPage";
  if (parts[0] === "contact") pageType = "ContactPage";
  if (
    parts.length === 1 && collectionRoots.has(parts[0]) ||
    parts.length === 2 &&
      ["resources","insights"].includes(parts[0]) &&
      parts[1] !== "church-history" ||
    ["/congregations/mumbai/",
     "/congregations/navi-mumbai/",
     "/congregations/mumbai-metropolitan-region/",
     "/events/archive/"].includes(canonical.pathname)
  ) pageType = "CollectionPage";

  const graph: Entity[] = [
    {
      "@type": "WebSite",
      "@id": siteId,
      name: NAME,
      url: SITE + "/",
      inLanguage: "en"
    },
    {
      "@type": pageType,
      "@id": pageId,
      url: canonical.href,
      name: title,
      description,
      inLanguage: "en",
      isPartOf: {"@id": siteId},
      ...(parts.length ? {breadcrumb: {"@id": breadcrumbId}} : {}),
      ...(entity ? {mainEntity: {"@id": entityId}} : {}),
      ...(image ? {primaryImageOfPage:{
        "@type":"ImageObject",
        url:new URL(image,SITE).href
      }} : {})
    }
  ];

  if (parts.length) {
    const items = [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE + "/"
    }];

    parts.forEach((part,i) => {
      const path = "/" + parts.slice(0,i+1).join("/") + "/";

      items.push({
        "@type": "ListItem",
        position: i+2,
        name: i===parts.length-1
          ? title
          : labels.get(path) || part.replace(/-/g," "),
        item: SITE + path
      });
    });

    graph.push({
      "@type":"BreadcrumbList",
      "@id":breadcrumbId,
      itemListElement:items
    });
  }

  if (entity) {
    graph.push({
      ...entity,
      "@id":entityId,
      url:canonical.href,
      ...(entity["@type"]==="Article"
        ? {mainEntityOfPage:{"@id":pageId},inLanguage:"en"}
        : {})
    });
  }

  return {
    "@context":"https://schema.org",
    "@graph":graph
  };
}
