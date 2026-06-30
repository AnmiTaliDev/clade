import type { Haplogroup } from "@/types/haplogroup";

const L2a_mt: Haplogroup = {
  id: "L2a_mt",
  name: "L2a (mtDNA)",
  type: "mtDNA",
  parent: "L2",
  children: [],
  formed: "~70,000 BCE",
  mrca: "~40,000 BCE",
  origin: { region: "Sub-Saharan Africa (West/Central)", period: "Late Stone Age", coordinates: [15, 5] },
  description: "Haplogroup L2a is the most common subclade of haplogroup L2 and one of the most abundant mtDNA lineages in sub-Saharan Africa, especially in West and Central Africa. It is the single most common maternal lineage among many West African populations and is broadly distributed from Senegal to Angola. L2a was heavily represented in the trans-Atlantic slave trade, making it the most common African-derived mtDNA lineage in African-American, Afro-Brazilian, and Afro-Caribbean populations. Its broad distribution in Africa and the diaspora makes it one of the most demographically significant mtDNA haplogroups in the world.",
  interestingFact: "L2a is the most common African mtDNA haplogroup in the Americas — genetic studies of African-American populations estimate that L2a accounts for approximately 10–15% of all maternal lineages in populations descended from enslaved West Africans, making it a major marker of the demographic impact of the trans-Atlantic slave trade on the Western Hemisphere.",
  distribution: [
    { ethnicity: "Yoruba (Nigeria)", region: "West Africa", percentage: 20, sampleSize: 500 },
    { ethnicity: "West Africans (general)", region: "West Africa", percentage: 15, sampleSize: 2000 },
    { ethnicity: "African Americans", region: "North America", percentage: 12, sampleSize: 1000 },
    { ethnicity: "Afro-Brazilians", region: "South America", percentage: 10, sampleSize: 800 },
  ],
  statistics: { modernFrequency: "~3% of global female population", peakRegion: "West / Central Africa", estimatedCarriers: 60_000_000 },
  tags: ["West Africa", "Nigeria", "Yoruba", "African diaspora", "Americas", "Slave trade", "Sub-Saharan Africa"],
  references: ["Salas et al. (2002) — The making of the African mtDNA landscape. American Journal of Human Genetics 71(5), 1082–1111."],
  featured: false,
  addedAt: "2026-06-30",
};
export default L2a_mt;
