import type { Haplogroup } from "@/types/haplogroup";

const D5_mt: Haplogroup = {
  id: "D5_mt",
  name: "D5 (mtDNA)",
  type: "mtDNA",
  parent: "D_mt",
  children: [],
  formed: "~30,000 BCE",
  mrca: "~12,000 BCE",
  origin: { region: "Southeast Asia / South China", period: "Upper Paleolithic", coordinates: [112, 25] },
  description: "Haplogroup D5 is a subclade of mtDNA D concentrated in Southeast Asia and southern China, with notable frequencies in Vietnamese, Thai, and various Austroasiatic and Tai-Kadai populations. It is also present in Japan at elevated frequencies compared to the continental mainland average. D5 represents a southern lineage of haplogroup D that diversified primarily in Southeast Asia and southern China, in contrast to the more northerly distribution of D4. It has been linked to Neolithic farming expansions in Southeast Asia.",
  interestingFact: "D5 is found at unusually high frequencies among the Ryukyuan people of the Japanese island chain, a group that maintains distinct cultural and genetic identity from mainland Japanese — suggesting that D5 was part of the original genetic substrate of southern Japan before the Yayoi farming migration.",
  distribution: [
    { ethnicity: "Vietnamese", region: "Southeast Asia", percentage: 8, sampleSize: 500 },
    { ethnicity: "Thai", region: "Southeast Asia", percentage: 6, sampleSize: 400 },
    { ethnicity: "Southern Chinese", region: "South China", percentage: 5, sampleSize: 800 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 4, sampleSize: 1000 },
  ],
  statistics: { modernFrequency: "~0.8% of global female population", peakRegion: "Southeast Asia / South China", estimatedCarriers: 16_000_000 },
  tags: ["Southeast Asia", "South China", "Vietnam", "Japan", "Paleolithic", "Neolithic"],
  references: ["Yao et al. (2002) — Phylogeographic differentiation of mitochondrial DNA in Han Chinese. American Journal of Human Genetics 70(3), 635–651."],
  featured: false,
  addedAt: "2026-06-30",
};
export default D5_mt;
