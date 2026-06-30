import type { Haplogroup } from "@/types/haplogroup";

const U2_mt: Haplogroup = {
  id: "U2_mt",
  name: "U2 (mtDNA)",
  type: "mtDNA",
  parent: "U_mt",
  children: [],
  formed: "~50,000 BCE",
  mrca: "~30,000 BCE",
  origin: { region: "South Asia / Near East", period: "Upper Paleolithic", coordinates: [65, 25] },
  description: "Haplogroup U2 is an ancient subclade of mtDNA haplogroup U, with its highest frequencies in South Asia, particularly in India, Pakistan, and among Roma (Romani) populations of Europe. U2e is the only European sub-branch of U2 and is found at low levels across Europe. The South Asian sub-branches U2a, U2b, and U2c are among the oldest continuously maintained mtDNA lineages on the Indian subcontinent, with roots extending back to the initial peopling of South Asia by anatomically modern humans. Roma populations carry U2 as a relic of their South Asian origin.",
  interestingFact: "The Roma (Romani) people of Europe carry U2 lineages that cluster with those of South Asian populations, providing genetic confirmation that the Roma originated in the Indian subcontinent — likely from a Northwest Indian population — before their migration into the Middle East and Europe approximately 1,500 years ago.",
  distribution: [
    { ethnicity: "South Indians", region: "South Asia", percentage: 5, sampleSize: 1000 },
    { ethnicity: "Pakistanis", region: "South Asia", percentage: 4, sampleSize: 600 },
    { ethnicity: "Roma (Romani)", region: "Europe", percentage: 10, sampleSize: 400 },
    { ethnicity: "North Indians", region: "South Asia", percentage: 3, sampleSize: 1000 },
  ],
  statistics: { modernFrequency: "~1% of global female population", peakRegion: "South Asia", estimatedCarriers: 20_000_000 },
  tags: ["South Asia", "India", "Roma", "Pakistan", "Upper Paleolithic"],
  references: ["Kivisild et al. (1999) — Deep common ancestry of Indian and western-Eurasian mitochondrial DNA lineages. Current Biology 9(22), 1331–1334."],
  featured: false,
  addedAt: "2026-06-30",
};
export default U2_mt;
