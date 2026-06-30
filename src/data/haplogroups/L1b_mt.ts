import type { Haplogroup } from "@/types/haplogroup";

const L1b_mt: Haplogroup = {
  id: "L1b_mt",
  name: "L1b (mtDNA)",
  type: "mtDNA",
  parent: "L1",
  children: [],
  formed: "~80,000 BCE",
  mrca: "~40,000 BCE",
  origin: { region: "West Africa", period: "Middle / Late Stone Age", coordinates: [0, 10] },
  description: "Haplogroup L1b is a subclade of L1 distributed primarily in West Africa and West Central Africa, particularly in populations from Senegal, Guinea, Nigeria, Cameroon, and Gabon. It is found at significant frequencies among several West African ethnic groups including Wolof, Fula, and Yoruba. L1b is also present in the African diaspora in the Americas and Caribbean due to the trans-Atlantic slave trade, and has been detected in some Afro-European populations. As part of the deep L1 clade, L1b represents some of the oldest surviving sub-Saharan African maternal lineages.",
  interestingFact: "L1b can serve as a 'genetic tracer' for West African ancestry in the Americas — genomic studies of African-American and Afro-Caribbean populations often recover L1b at frequencies consistent with West African origin, helping researchers reconstruct the origins of enslaved people brought to the New World during the 16th–19th centuries.",
  distribution: [
    { ethnicity: "Wolof (Senegal)", region: "West Africa", percentage: 15, sampleSize: 200 },
    { ethnicity: "Nigerians", region: "West Africa", percentage: 8, sampleSize: 500 },
    { ethnicity: "Cameroonians", region: "West Africa", percentage: 10, sampleSize: 300 },
    { ethnicity: "African Americans", region: "North America", percentage: 5, sampleSize: 800 },
  ],
  statistics: { modernFrequency: "~1% of global female population", peakRegion: "West Africa", estimatedCarriers: 20_000_000 },
  tags: ["West Africa", "Senegal", "Nigeria", "Cameroon", "African diaspora", "Americas"],
  references: ["Salas et al. (2002) — The making of the African mtDNA landscape. American Journal of Human Genetics 71(5), 1082–1111."],
  featured: false,
  addedAt: "2026-06-30",
};
export default L1b_mt;
