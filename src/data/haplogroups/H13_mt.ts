import type { Haplogroup } from "@/types/haplogroup";

const H13_mt: Haplogroup = {
  id: "H13_mt",
  name: "H13 (mtDNA)",
  type: "mtDNA",
  parent: "H_mt",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Caucasus / Near East", period: "Mesolithic", coordinates: [44, 40] },
  description: "Haplogroup H13 is an H subclade concentrated in the Caucasus, Near East, and Arabian Peninsula. It reaches its highest frequencies among Georgian, Armenian, and other South Caucasian populations, and is also present in the Levant and Arabian Peninsula. H13 appears to have originated in the Caucasus or Near East and has remained regionally concentrated, with limited spread into Eastern Europe and Central Asia.",
  interestingFact: "H13 is one of the most 'Caucasian' of the H subclades — its peak distribution in Georgia and Armenia suggests a long history of relative genetic isolation in the mountainous Caucasus region, where distinct haplogroup clusters have been maintained for thousands of years due to the geographic barriers of the Greater Caucasus range.",
  distribution: [
    { ethnicity: "Georgians", region: "Caucasus", percentage: 7, sampleSize: 400 },
    { ethnicity: "Armenians", region: "Caucasus / West Asia", percentage: 6, sampleSize: 400 },
    { ethnicity: "Levantine Arabs", region: "Near East", percentage: 4, sampleSize: 300 },
    { ethnicity: "Arabians", region: "Arabian Peninsula", percentage: 3, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~0.3% of global female population", peakRegion: "Caucasus", estimatedCarriers: 6_000_000 },
  tags: ["Caucasus", "Near East", "Armenia", "Georgia", "Arabia"],
  references: ["Piras et al. (2012) — Phylogeographic history of haplogroup H in Western Eurasia. PLOS ONE 7(2), e32179."],
  featured: false,
  addedAt: "2026-06-30",
};
export default H13_mt;
