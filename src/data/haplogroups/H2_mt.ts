import type { Haplogroup } from "@/types/haplogroup";

const H2_mt: Haplogroup = {
  id: "H2_mt",
  name: "H2 (mtDNA)",
  type: "mtDNA",
  parent: "H_mt",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Near East / Eastern Europe", period: "Mesolithic", coordinates: [38, 42] },
  description: "Haplogroup H2 is a subclade of mtDNA H2 with a distribution centred on Eastern Europe and the Near East. It reaches notable frequencies in the Caucasus, Turkey, and Iran, and is present at lower frequencies across Central and Eastern Europe. H2a2 is one of its most widespread sub-lineages, found in European populations with Neolithic farmer ancestry. Ancient DNA has confirmed H2 in early Neolithic Anatolian farmers, linking this lineage to the agricultural expansion into Europe.",
  interestingFact: "H2 has been detected in ancient DNA from Neolithic Anatolian farming settlements (~7,000 BCE), placing it among the mtDNA lineages that accompanied the spread of agriculture from the Near East into Europe approximately 8,000 years ago.",
  distribution: [
    { ethnicity: "Armenians", region: "West Asia / Caucasus", percentage: 8, sampleSize: 400 },
    { ethnicity: "Turks", region: "West Asia", percentage: 6, sampleSize: 800 },
    { ethnicity: "Central/Eastern Europeans", region: "Europe", percentage: 3, sampleSize: 1500 },
    { ethnicity: "Iranians", region: "West Asia", percentage: 5, sampleSize: 500 },
  ],
  statistics: { modernFrequency: "~1.5% of global female population", peakRegion: "Caucasus / Near East", estimatedCarriers: 30_000_000 },
  tags: ["Europe", "Near East", "Caucasus", "Neolithic", "Anatolia", "Agriculture"],
  references: ["Haak et al. (2010) — Ancient DNA from European early Neolithic farmers reveals their Near Eastern affinities. PLOS Biology 8(11), e1000536."],
  featured: false,
  addedAt: "2026-06-30",
};
export default H2_mt;
