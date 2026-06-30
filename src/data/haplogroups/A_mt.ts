import type { Haplogroup } from "@/types/haplogroup";

const A_mt: Haplogroup = {
  id: "A_mt",
  name: "A (mtDNA)",
  type: "mtDNA",
  parent: "N_mt",
  children: [],
  formed: "~50,000 BCE",
  mrca: "~30,000 BCE",
  origin: {
    region: "East Asia / Beringia",
    period: "Upper Paleolithic",
    coordinates: [130, 50],
  },
  description:
    "Mitochondrial haplogroup A is an N-derived lineage found across East Asia, Siberia, and the Americas. It is one of the five founding maternal haplogroups carried by the first humans to migrate into the Americas through Beringia approximately 15,000–20,000 years ago. A2, the predominant Native American subclade, is distributed across both North and South America, while A subclades in Asia are concentrated in northeastern Siberia (Chukchi, Koryak) and among East Asian populations. The high frequency of A among circum-Arctic peoples suggests it expanded with populations adapted to high-latitude environments.",
  interestingFact:
    "Haplogroup A2 reaches frequencies of 75% or more among the Aleut and some Athabaskan groups, making it one of the most geographically concentrated maternal lineages in the world — a testament to the remarkable genetic uniformity that resulted from the Beringian population bottleneck.",
  distribution: [
    { ethnicity: "Aleut", region: "Arctic (Alaska)", percentage: 75, sampleSize: 100 },
    { ethnicity: "Chukchi", region: "Siberia", percentage: 45, sampleSize: 120 },
    { ethnicity: "Navajo", region: "Americas (Southwest)", percentage: 12, sampleSize: 150 },
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 8, sampleSize: 2000 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 6, sampleSize: 600 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 18, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~3% of global female population",
    peakRegion: "Arctic Americas / Siberia",
    estimatedCarriers: 110_000_000,
  },
  tags: ["mtDNA", "Native Americans", "East Asia", "Siberia", "Beringia", "Arctic", "Paleolithic", "Maternal lineage"],
  references: [
    "Tamm et al. (2007) — Beringian standstill and spread of Native American founders. PLOS ONE 2(9), e829.",
    "Schurr et al. (1990) — Amerindian mitochondrial DNAs have rare Asian mutations at high frequencies, suggesting they derived from four primary maternal lineages. American Journal of Human Genetics 46(3), 613–623.",
    "Volodko et al. (2008) — Mitochondrial genome diversity in Arctic Siberians. Molecular Biology and Evolution 25(9), 2000–2010.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default A_mt;
