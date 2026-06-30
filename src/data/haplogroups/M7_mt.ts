import type { Haplogroup } from "@/types/haplogroup";

const M7_mt: Haplogroup = {
  id: "M7_mt",
  name: "M7 (mtDNA)",
  type: "mtDNA",
  parent: "M_mt",
  children: [],
  formed: "~60,000 BCE",
  mrca: "~35,000 BCE",
  origin: { region: "Southeast Asia / South China", period: "Upper Paleolithic", coordinates: [108, 22] },
  description: "Haplogroup M7 is a major subclade of mtDNA haplogroup M, distributed predominantly in East Asia, Southeast Asia, and the Pacific. It is particularly common in Japan, southern China, Taiwan, and Southeast Asian populations. M7 consists of several sub-branches (M7a, M7b, M7c) with distinct geographic distributions. M7a is concentrated in Japan and the Ryukyu Islands, M7b is widespread in southern China and Southeast Asia, and M7c is found in South and Southeast Asia. M7 is among the founding lineages of Austronesian populations in Taiwan.",
  interestingFact: "M7a is one of the rarest mtDNA haplogroups in mainland East Asia but among the most common in the Ryukyu Islands of Japan — suggesting that Ryukyuan people are a distinct genetic group that preserves ancient Southeast Asian lineages that were largely replaced on the Japanese mainland during the Yayoi migration.",
  distribution: [
    { ethnicity: "Japanese", region: "East Asia", percentage: 10, sampleSize: 1000 },
    { ethnicity: "Southern Chinese", region: "East/SE Asia", percentage: 8, sampleSize: 1000 },
    { ethnicity: "Taiwanese aboriginal", region: "East Asia", percentage: 12, sampleSize: 400 },
    { ethnicity: "Southeast Asians", region: "Southeast Asia", percentage: 5, sampleSize: 1000 },
  ],
  statistics: { modernFrequency: "~2% of global female population", peakRegion: "East Asia / Southeast Asia", estimatedCarriers: 40_000_000 },
  tags: ["East Asia", "Southeast Asia", "Japan", "Taiwan", "Ryukyu", "Austronesian"],
  references: ["Kivisild et al. (2002) — The emerging limbs and twigs of the East Asian mtDNA tree. Molecular Biology and Evolution 19(10), 1737–1751."],
  featured: false,
  addedAt: "2026-06-30",
};
export default M7_mt;
