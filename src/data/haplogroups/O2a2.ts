import type { Haplogroup } from "@/types/haplogroup";

const O2a2: Haplogroup = {
  id: "O2a2",
  name: "O2a2 (M7)",
  type: "Y-DNA",
  parent: "O2a",
  children: ["O2a2b"],
  formed: "~20,000 BCE",
  mrca: "~8,000 BCE",
  origin: {
    region: "South China / Mainland Southeast Asia",
    period: "Neolithic",
    coordinates: [110, 22],
  },
  description:
    "Haplogroup O2a2 (M7) is a subclade of O2a found primarily in mainland Southeast Asia and southern China. It is particularly associated with Austroasiatic and Tai-Kadai-speaking populations of the region. O2a2 shows high frequencies among certain groups in southern China, Vietnam, and adjacent areas, reflecting its role in the demographic history of the transition zone between southern Chinese and mainland Southeast Asian populations.",
  interestingFact:
    "O2a2 (M7) represents a distinct demographic signal within the broader O2a expansion — its carriers show a distribution skewed toward the mainland Southeast Asian lowlands and coastal South China, suggesting a population that spread primarily through river valley and coastal routes rather than the highland paths taken by some related O2 subclades.",
  distribution: [
    { ethnicity: "Khmer", region: "Southeast Asia", percentage: 20, sampleSize: 300 },
    { ethnicity: "Vietnamese", region: "Southeast Asia", percentage: 15, sampleSize: 500 },
    { ethnicity: "Zhuang (South China)", region: "South China", percentage: 18, sampleSize: 300 },
    { ethnicity: "Dai (Yunnan)", region: "South China", percentage: 12, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~1% of global male population",
    peakRegion: "Mainland Southeast Asia",
    estimatedCarriers: 40_000_000,
  },
  tags: ["Southeast Asia", "Austroasiatic", "South China", "Neolithic"],
  references: [
    "Shi et al. (2005) — Y-chromosome evidence of earliest modern human settlement in East Asia. BMC Biology 3, 5.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default O2a2;
