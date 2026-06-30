import type { Haplogroup } from "@/types/haplogroup";

const B4_mt: Haplogroup = {
  id: "B4_mt",
  name: "B4 (mtDNA)",
  type: "mtDNA",
  parent: "B_mt",
  children: ["B4a_mt"],
  formed: "~50,000 BCE",
  mrca: "~30,000 BCE",
  origin: { region: "East Asia / Southeast Asia", period: "Upper Paleolithic", coordinates: [110, 25] },
  description: "Haplogroup B4 is the most common and diverse subclade of mtDNA haplogroup B, broadly distributed across East Asia, Southeast Asia, and the Pacific islands. It contains the sub-branch B4a1a1, which is the major maternal lineage associated with the Austronesian expansion from Taiwan into the Pacific and Indian Ocean islands. B4 lineages are abundant in Taiwan, the Philippines, Indonesia, and throughout Polynesia and Micronesia. It was also among the founding Native American maternal lineages, particularly B2, which entered the Americas via Beringia.",
  interestingFact: "B4a1a1 — the 'Polynesian motif' — is found in nearly all Polynesian populations and most Micronesian groups, representing the maternal genetic signature of the extraordinary Austronesian seafaring expansion that colonized Pacific islands as remote as Hawaii, Easter Island, and New Zealand over the last 3,000 years.",
  distribution: [
    { ethnicity: "Han Chinese (South)", region: "East/Southeast Asia", percentage: 12, sampleSize: 2000 },
    { ethnicity: "Taiwanese aboriginal", region: "East Asia", percentage: 20, sampleSize: 400 },
    { ethnicity: "Filipinos", region: "Southeast Asia", percentage: 15, sampleSize: 500 },
    { ethnicity: "Polynesians", region: "Pacific", percentage: 70, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~3% of global female population", peakRegion: "East Asia / Pacific", estimatedCarriers: 60_000_000 },
  tags: ["East Asia", "Southeast Asia", "Pacific", "Austronesian", "Polynesia", "Americas"],
  references: ["Soares et al. (2011) — Ancient voyaging and Polynesian origins. American Journal of Human Genetics 88(2), 239–247."],
  featured: false,
  addedAt: "2026-06-30",
};
export default B4_mt;
