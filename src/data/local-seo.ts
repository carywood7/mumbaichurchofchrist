import type { Congregation } from "./congregations";

const SITE = "https://mumbaichurchofchrist.com";

export const localTitles: Record<string, string> = {
  colaba: "Church in Colaba, Mumbai",
  vashi: "Church in Vashi, Navi Mumbai",
  "vasai-east": "Church in Vasai East",
  "mira-road": "Church in Mira Road – Kanakia",
  "mira-road-poonam-sagar": "Church in Mira Road – Poonam Sagar",
  goregaon: "Church in Goregaon West",
  dharavi: "Church in Dharavi, Mumbai",
  govandi: "Church in Govandi West",
  nallasopara: "Church in Nallasopara East"
};

export const regionalSEO: Record<string, {
  title: string;
  heading: string;
  emphasis: string;
  description: string;
  answer: string;
}> = {
  all: {
    title: "Find a Church Near You in Mumbai & Navi Mumbai",
    heading: "Find a church near you.",
    emphasis: "Grow in Christ.",
    description: "Find Churches of Christ across Mumbai, Navi Mumbai, Mira Road, Vasai and Nallasopara. Explore worship timings, locations and Bible study enquiries.",
    answer: "Looking for a Christian church near you? Use this directory to search by locality, region or worship language. Each congregation has its own meeting arrangements."
  },
  mumbai: {
    title: "Churches of Christ in Mumbai",
    heading: "Churches of Christ in Mumbai.",
    emphasis: "Find your congregation.",
    description: "Explore Churches of Christ in Colaba, Dharavi, Govandi and Goregaon. Find published meeting locations, worship information and local contacts.",
    answer: "Our Mumbai directory includes congregations in South Mumbai and the suburbs, including Colaba, Dharavi, Govandi and Goregaon. The Colaba congregation meets near Ramu Mandir and Backbay Depot. Check individual profiles for current arrangements."
  },
  "navi-mumbai": {
    title: "Churches of Christ in Navi Mumbai",
    heading: "Churches of Christ in Navi Mumbai.",
    emphasis: "Worship. Learn. Connect.",
    description: "Find a Church of Christ in Navi Mumbai, including the Vashi congregation. Explore Sunday worship timings, meeting directions and Bible study enquiries.",
    answer: "The Vashi Church of Christ meets at St. Lawrence High School in Sector 16A, Vashi. Visitors can check its published Sunday worship timings and directions below."
  }
};

export function localTitle(c: Congregation) {
  return localTitles[c.slug] || `Church in ${c.name}`;
}

export function localDescription(c: Congregation) {
  if (c.detailsStatus || !c.address) {
    return `Explore the Church of Christ in ${c.name}. Learn about Biblical worship, Bible study and congregation information as details become available.`;
  }

  const service = c.gatherings.find(
    g => g.kind === "worship" && g.time
  );

  if (service?.day) {
    return `Visit the Church of Christ in ${c.name}, ${c.region}. ${service.day} worship: ${service.time}. Find meeting directions, contacts and Bible study information.`;
  }

  return `Discover the Church of Christ in ${c.name}, ${c.region}. Find the meeting address, published worship time, directions and local contact information. Confirm the worship day before visiting.`;
}

export function congregationList(
  rows: Congregation[],
  name: string
) {
  return {
    "@type": "ItemList",
    name,
    numberOfItems: rows.length,
    itemListElement: rows.map((c, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "WebPage",
        "@id": `${SITE}/congregations/${c.slug}/#webpage`,
        url: `${SITE}/congregations/${c.slug}/`,
        name: `Church of Christ – ${c.name}`
      }
    }))
  };
}

export function publicChurchEntity(c: Congregation) {
  const phones = c.contacts
    .map(p => p.phone.replace(/\D/g, ""))
    .filter(p => p.length === 10 ||
      (p.length === 12 && p.startsWith("91")))
    .map(p => p.length === 10 ? `+91${p}` : `+${p}`);

  return {
    "@type": "Church",
    name: `Church of Christ – ${c.name}`,
    address: c.address,
    containedInPlace: {
      "@type": "City",
      name: c.region
    },
    ...(phones.length ? {telephone: phones[0]} : {}),
    ...(c.email ? {email: c.email} : {}),
    hasMap: c.mapLink ||
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`,
    ...(c.photos.length ? {
      image: c.photos.map(photo => new URL(photo,SITE).href)
    } : {})
  };
}
