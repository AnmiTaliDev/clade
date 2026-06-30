import type { Haplogroup } from "@/types/haplogroup";

const R1b_Z2103: Haplogroup = {
  id: "R1b-Z2103",
  name: "R1b1a1b1b1 (Z2103)",
  type: "Y-DNA",
  parent: "R1b-L23",
  children: [],
  formed: "~4,200 BCE",
  mrca: "~3,800 BCE",
  origin: {
    region: "Pontic-Caspian Steppe / South Caucasus",
    period: "Copper Age (Yamnaya)",
    coordinates: [48, 44],
  },
  description:
    "R1b-Z2103 is the eastern branch of R1b-L23, the sister clade of L51 that gave rise to Western European R1b. While L51 moved westward into Europe, Z2103 remained predominantly in the region of the Pontic steppe, South Caucasus, Anatolia, and the Balkans. It is found today at meaningful frequencies in Armenia (~20–25%), Georgia, Turkey, the Balkans (particularly Albania and Kosovo), and among the Bashkirs of the Urals. Ancient DNA has confirmed Z2103 in Yamnaya horizon burials, making it a direct genetic link to the Bronze Age steppe pastoralists who did not participate in the Western European Bell Beaker expansion.",
  interestingFact:
    "R1b-Z2103 has been found in ancient DNA from Yamnaya-culture graves in Russia and Ukraine, meaning that some of the very men who drove the Bronze Age steppe expansion are directly ancestral to modern Armenians, Albanians, and South Caucasian populations — a genetic connection across 5,000 years of history.",
  distribution: [
    { ethnicity: "Armenians", region: "South Caucasus", percentage: 22, sampleSize: 400 },
    { ethnicity: "Albanians", region: "Balkans", percentage: 15, sampleSize: 300 },
    { ethnicity: "Kosovars", region: "Balkans", percentage: 18, sampleSize: 200 },
    { ethnicity: "Bashkirs", region: "Urals", percentage: 14, sampleSize: 250 },
    { ethnicity: "Turks (Anatolia)", region: "Near East", percentage: 6, sampleSize: 600 },
    { ethnicity: "Georgians", region: "South Caucasus", percentage: 5, sampleSize: 400 },
  ],
  clans: [
    { type: "tribe", name: "Yamnaya pastoralists", region: "Pontic Steppe", note: "Z2103 has been confirmed in Yamnaya-culture burials — the eastern steppe branch that did not expand into Western Europe" },
  ],
  statistics: {
    modernFrequency: "~0.5% of global male population",
    peakRegion: "South Caucasus / Balkans",
    estimatedCarriers: 20_000_000,
  },
  tags: ["Yamnaya", "Steppe", "Bronze Age", "Indo-European", "Caucasus", "Balkans", "Eastern Europe"],
  references: [
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211.",
    "Allentoft et al. (2015) — Population genomics of Bronze Age Eurasia. Nature 522, 167–172.",
    "Lazaridis et al. (2016) — Genomic insights into the origin of farming in the ancient Near East. Nature 536, 419–424.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default R1b_Z2103;
