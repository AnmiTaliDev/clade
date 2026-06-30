import type { Haplogroup } from "@/types/haplogroup";

const H6_mt: Haplogroup = {
  id: "H6_mt",
  name: "H6 (mtDNA)",
  type: "mtDNA",
  parent: "H_mt",
  children: [],
  formed: "~15,000 BCE",
  mrca: "~10,000 BCE",
  origin: { region: "Central Asia / Eastern Europe", period: "Mesolithic", coordinates: [55, 50] },
  description: "Haplogroup H6 is an H subclade with a distinctly eastern distribution compared to H1 and H3, found predominantly in Eastern Europe, the Caucasus, and Central Asia. It reaches notable frequencies in Russia, Ukraine, and among several Central Asian populations including Uzbeks and Kazakh groups. H6 was present among Bronze Age steppe populations (Yamnaya, Andronovo) and may have spread westward with Indo-European-associated migrations during the Bronze Age.",
  interestingFact: "Ancient DNA analyses have recovered H6 from Bronze Age steppe cultures, suggesting it was part of the mitochondrial diversity carried by the Yamnaya and Andronovo pastoralists whose migrations reshaped the genetic landscape of Europe and Central Asia approximately 5,000 years ago.",
  distribution: [
    { ethnicity: "Russians", region: "Eastern Europe", percentage: 3, sampleSize: 1200 },
    { ethnicity: "Ukrainians", region: "Eastern Europe", percentage: 3, sampleSize: 500 },
    { ethnicity: "Uzbeks", region: "Central Asia", percentage: 4, sampleSize: 300 },
    { ethnicity: "Caucasians (general)", region: "Caucasus", percentage: 3, sampleSize: 600 },
  ],
  statistics: { modernFrequency: "~0.5% of global female population", peakRegion: "Eastern Europe / Central Asia", estimatedCarriers: 10_000_000 },
  tags: ["Eastern Europe", "Central Asia", "Bronze Age", "Steppe", "Indo-European"],
  references: ["Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211."],
  featured: false,
  addedAt: "2026-06-30",
};
export default H6_mt;
