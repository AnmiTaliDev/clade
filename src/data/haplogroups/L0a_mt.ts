import type { Haplogroup } from "@/types/haplogroup";

const L0a_mt: Haplogroup = {
  id: "L0a_mt",
  name: "L0a (mtDNA)",
  type: "mtDNA",
  parent: "L0",
  children: [],
  formed: "~100,000 BCE",
  mrca: "~60,000 BCE",
  origin: { region: "East Africa", period: "Middle Stone Age", coordinates: [38, 5] },
  description: "Haplogroup L0a is a subclade of L0, one of the earliest-branching lineages in the human mtDNA tree. L0a is distributed primarily in East Africa, particularly in Ethiopia, Kenya, Tanzania, and Somalia, and is also found in the Horn of Africa and among some populations of Southern Africa. As part of the L0 clade, L0a represents extremely ancient maternal lineages that diverged among African populations long before the major Out of Africa dispersal. Its diversity and age make it an important marker for studying the earliest chapters of modern human evolution in Africa.",
  interestingFact: "L0a, along with the Khoisan-associated L0d and L0k, belongs to the most deeply-branching lineages in the entire human mtDNA tree — the MRCA of L0 and all other human mtDNA lineages (the 'Mitochondrial Eve') was an African woman who lived approximately 150,000–200,000 years ago, and L0a carries some of the earliest diverging branches from this common ancestor.",
  distribution: [
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 8, sampleSize: 400 },
    { ethnicity: "Kenyans", region: "East Africa", percentage: 6, sampleSize: 300 },
    { ethnicity: "Tanzanians", region: "East Africa", percentage: 7, sampleSize: 300 },
    { ethnicity: "Somalis", region: "East Africa / Horn of Africa", percentage: 5, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~0.5% of global female population", peakRegion: "East Africa", estimatedCarriers: 10_000_000 },
  tags: ["East Africa", "Ethiopia", "Kenya", "Africa", "Ancient", "Mitochondrial Eve"],
  references: ["Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140."],
  featured: false,
  addedAt: "2026-06-30",
};
export default L0a_mt;
