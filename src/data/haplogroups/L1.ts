import type { Haplogroup } from "@/types/haplogroup";

const L1: Haplogroup = {
  id: "L1",
  name: "L1 (mtDNA)",
  type: "mtDNA",
  parent: "L_mt",
  children: [],
  formed: "~130,000 BCE",
  mrca: "~110,000 BCE",
  origin: {
    region: "West / Central Africa",
    period: "Middle Paleolithic",
    coordinates: [15, 3],
  },
  description:
    "Mitochondrial haplogroup L1 is a deeply rooted African lineage found primarily in West and Central Africa, with elevated frequencies among Central African Pygmy populations. L1 is particularly common among the Aka, Baka, and Biaka Pygmies of Central Africa, where it reaches 40–50% frequency. Alongside L0, L1 represents one of the oldest surviving branches of the human mitochondrial tree and is essentially absent outside Africa. Its distribution overlaps significantly with that of central African hunter-gatherer populations who have maintained genetic continuity in the Congo Basin region for tens of thousands of years.",
  interestingFact:
    "Haplogroup L1 is found at exceptionally high frequencies among the Aka and Biaka Pygmies of Central Africa, populations that are among the world's most ancient in terms of genetic divergence from other humans. Their L1 lineages preserve a maternal heritage stretching back more than 100,000 years in the Congo Basin rainforest.",
  distribution: [
    { ethnicity: "Aka Pygmies", region: "Central Africa", percentage: 50, sampleSize: 100 },
    { ethnicity: "Biaka Pygmies", region: "Central Africa", percentage: 45, sampleSize: 80 },
    { ethnicity: "Mende", region: "West Africa", percentage: 25, sampleSize: 200 },
    { ethnicity: "West Africans (average)", region: "West Africa", percentage: 15, sampleSize: 800 },
    { ethnicity: "Central Africans (average)", region: "Central Africa", percentage: 20, sampleSize: 500 },
  ],
  statistics: {
    modernFrequency: "~4% of global female population",
    peakRegion: "Central Africa / Congo Basin",
    estimatedCarriers: 150_000_000,
  },
  tags: ["mtDNA", "Africa", "Pygmies", "West Africa", "Central Africa", "Paleolithic", "Maternal lineage"],
  references: [
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Batini et al. (2011) — Insights into the demographic history of African Pygmies from complete mitochondrial genomes. Molecular Biology and Evolution 28(2), 1099–1110.",
    "Soares et al. (2012) — The expansion of mtDNA haplogroup L3 within and out of Africa. Molecular Biology and Evolution 29(3), 915–927.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default L1;
