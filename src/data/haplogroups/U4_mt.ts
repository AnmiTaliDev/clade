import type { Haplogroup } from "@/types/haplogroup";

const U4_mt: Haplogroup = {
  id: "U4_mt",
  name: "U4 (mtDNA)",
  type: "mtDNA",
  parent: "U_mt",
  children: [],
  formed: "~30,000 BCE",
  mrca: "~20,000 BCE",
  origin: { region: "Eastern Europe / Siberia", period: "Upper Paleolithic", coordinates: [55, 58] },
  description: "Haplogroup U4 is a subclade of mtDNA haplogroup U found primarily in Eastern Europe, Russia, and Siberia. It reaches its highest frequencies in the Volga-Ural region and among various Uralic-speaking peoples (Finns, Estonians, Mordvins, Udmurts, Khanty, Mansi). U4 is found at moderate frequencies throughout Russia and Eastern Europe, and at lower levels in Scandinavia and Central Europe. Ancient DNA has recovered U4 from Mesolithic Eastern European hunter-gatherers, indicating this is one of the oldest mtDNA lineages associated with post-glacial northern Eurasia.",
  interestingFact: "U4 has a notably strong association with Uralic-speaking populations of the Volga-Ural region, including Mordvins, Udmurts, and Mari people — its elevated frequency in these groups compared to neighboring Slavic populations suggests it was more common in the pre-farming hunter-gatherer substrate of Eastern Europe before the Neolithic.",
  distribution: [
    { ethnicity: "Udmurts", region: "Eastern Europe / Urals", percentage: 15, sampleSize: 300 },
    { ethnicity: "Russians", region: "Eastern Europe", percentage: 6, sampleSize: 1200 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 5, sampleSize: 600 },
    { ethnicity: "Ukrainians", region: "Eastern Europe", percentage: 4, sampleSize: 500 },
  ],
  statistics: { modernFrequency: "~1% of global female population", peakRegion: "Eastern Europe / Urals", estimatedCarriers: 20_000_000 },
  tags: ["Eastern Europe", "Siberia", "Uralic", "Russia", "Finland", "Mesolithic"],
  references: ["Tambets et al. (2004) — The western and eastern roots of the Saami — the story of genetic outliers told by mitochondrial DNA and Y chromosomes. American Journal of Human Genetics 74(4), 661–682."],
  featured: false,
  addedAt: "2026-06-30",
};
export default U4_mt;
