
export interface Aircraft {
  slug: string;
  type: string;
  limit: string;
  category: string;
  manufacturer: string;
  modelSeries: string;
  description: string;
}

export const aircraftDatabase: Aircraft[] = [
  {
    slug: "cessna-150-152",
    type: "Cessna 150/152",
    limit: "12 KTS",
    category: "General Aviation",
    manufacturer: "Textron Aviation",
    modelSeries: "150/152 Commuter",
    description: "The classic primary trainer. Its light weight makes it susceptible to crosswind drift, requiring precise control inputs."
  },
  {
    slug: "cessna-172",
    type: "Cessna 172 Skyhawk",
    limit: "15 KTS",
    category: "General Aviation",
    manufacturer: "Textron Aviation",
    modelSeries: "172 Skyhawk",
    description: "The world's most popular flight trainer. Robust handling and predictable crosswind characteristics."
  },
  {
    slug: "cessna-182",
    type: "Cessna 182 Skylane",
    limit: "15 KTS",
    category: "General Aviation",
    manufacturer: "Textron Aviation",
    modelSeries: "182 Skylane",
    description: "A more powerful, heavier version of the Skyhawk. Better stability in turbulence but same demonstrated limit."
  },
  {
    slug: "piper-pa28",
    type: "Piper PA-28-161 Warrior",
    limit: "17 KTS",
    category: "General Aviation",
    manufacturer: "Piper Aircraft",
    modelSeries: "PA-28 Cherokee",
    description: "The low-wing alternative to the Cessna 172. Low-wing configuration offers excellent ground handling in crosswinds."
  },
  {
    slug: "cirrus-sr22",
    type: "Cirrus SR22",
    limit: "20 KTS",
    category: "High Performance",
    manufacturer: "Cirrus Aircraft",
    modelSeries: "SR-Series",
    description: "A modern high-performance aircraft. Features a high demonstrated crosswind limit and advanced avionics."
  },
  {
    slug: "airbus-a320",
    type: "Airbus A320",
    limit: "33 KTS",
    category: "Commercial",
    manufacturer: "Airbus",
    modelSeries: "A320 Family",
    description: "The workhorse of short-to-medium haul commercial aviation. Fly-by-wire controls provide excellent stability."
  },
  {
    slug: "boeing-737-800",
    type: "Boeing 737-800",
    limit: "33 KTS",
    category: "Commercial",
    manufacturer: "Boeing",
    modelSeries: "737 Next Generation",
    description: "One of the most widely used narrow-body airliners. Known for robust crosswind landing capabilities."
  }
];

export function getAircraftBySlug(slug: string): Aircraft | undefined {
  return aircraftDatabase.find(ac => ac.slug === slug);
}
