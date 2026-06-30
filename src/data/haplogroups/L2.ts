import type { Haplogroup } from "@/types/haplogroup";

const L2: Haplogroup = {
  id: "L2",
  name: "L2 (mtDNA)",
  type: "mtDNA",
  parent: "L_mt",
  children: [],
  formed: "~70,000 BCE",
  mrca: "~60,000 BCE",
  origin: {
    region: "Sub-Saharan Africa",
    period: "Upper Paleolithic",
    coordinates: [20, 5],
  },
  description:
    "Mitochondrial haplogroup L2 is one of the most widely distributed and abundant African maternal haplogroups, found throughout West, Central, East, and South Africa. It is particularly common in West Africa (25–40%) and is the haplogroup most strongly associated with the diaspora African population worldwide — the transatlantic slave trade predominantly sourced enslaved people from West and Central Africa, the heartland of L2 distribution. L2a is found at high frequencies in many West African ethnic groups and accounts for a substantial proportion of African American maternal lineages. L2 is rarely found outside Africa except in populations of African descent.",
  interestingFact:
    "Haplogroup L2 is the most common maternal lineage among African Americans (~30%), reflecting the West and Central African origins of enslaved populations brought to the Americas. L2 lineages thus trace an unbroken maternal thread across the Middle Passage, connecting modern African Americans to their West African maternal ancestors.",
  distribution: [
    { ethnicity: "Yoruba", region: "West Africa", percentage: 35, sampleSize: 400 },
    { ethnicity: "Fula", region: "West Africa", percentage: 30, sampleSize: 200 },
    { ethnicity: "African Americans", region: "Americas", percentage: 30, sampleSize: 1000 },
    { ethnicity: "Bantus (Central Africa)", region: "Central Africa", percentage: 40, sampleSize: 400 },
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 10, sampleSize: 400 },
    { ethnicity: "West Africans (average)", region: "West Africa", percentage: 30, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~8% of global female population",
    peakRegion: "West / Central Africa",
    estimatedCarriers: 300_000_000,
  },
  tags: ["mtDNA", "Africa", "West Africa", "Diaspora", "African American", "Slave trade", "Maternal lineage"],
  references: [
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Soares et al. (2012) — The expansion of mtDNA haplogroup L3 within and out of Africa. Molecular Biology and Evolution 29(3), 915–927.",
    "Salas et al. (2002) — The making of the African mtDNA landscape. American Journal of Human Genetics 71(5), 1082–1111.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default L2;
