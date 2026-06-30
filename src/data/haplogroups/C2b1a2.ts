import type { Haplogroup } from "@/types/haplogroup";

const C2b1a2: Haplogroup = {
  id: "C2b1a2",
  name: "C2b1a2 (M48)",
  type: "Y-DNA",
  parent: "C2b1a",
  children: ["C2b1a2a"],
  formed: "~5,000 BCE",
  mrca: "~2,000 BCE",
  origin: {
    region: "Mongolia / Baikal region",
    period: "Neolithic / Bronze Age",
    coordinates: [106, 48],
  },
  description:
    "Haplogroup C2b1a2 (C-Z22424) is the sister clade of the Star Cluster (C2b1a1) within C2b1a. It is found at low to moderate frequencies among Mongolian, Buryat, and Kazakh populations but did not undergo the dramatic medieval founder-effect expansion that characterises C2b1a1. C2b1a2 thus represents the 'background' Mongolic C2b1a diversity that existed before and alongside the Genghis Khan lineage expansion. Its carriers are descended from men who shared the same deep C2b1a ancestry as the Borjigin dynasty but whose own patrilineal lines did not achieve the same explosive growth.",
  interestingFact:
    "C2b1a2 is genetically nearly identical to the Star Cluster in terms of deep ancestry, yet it shows none of the extreme demographic expansion of C2b1a1. This contrast — two sister clades with the same ancient origin but completely different modern frequencies — is one of the clearest examples of how political power and reproductive success can dramatically reshape a population's genetic landscape within just a few generations.",
  distribution: [
    { ethnicity: "Mongols", region: "East Asia / Central Asia", percentage: 5, sampleSize: 500 },
    { ethnicity: "Buryats", region: "Siberia", percentage: 6, sampleSize: 300 },
    { ethnicity: "Kazakhs", region: "Central Asia", percentage: 4, sampleSize: 600 },
    { ethnicity: "Inner Mongols", region: "East Asia (China)", percentage: 4, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~0.2% of global male population",
    peakRegion: "Mongolia",
    estimatedCarriers: 7_000_000,
  },
  tags: ["Mongols", "Central Asia", "Mongolia", "Steppe", "Bronze Age"],
  references: [
    "Balaresque et al. (2015) — Y-chromosome descent clusters and male differential reproductive success. European Journal of Human Genetics 23, 1357–1362.",
    "Zerjal et al. (2003) — The Genetic Legacy of the Mongols. American Journal of Human Genetics 72(3), 717–721.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2b1a2;
