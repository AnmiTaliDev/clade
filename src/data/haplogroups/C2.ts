import type { Haplogroup } from "@/types/haplogroup";

const C2: Haplogroup = {
  id: "C2",
  name: "C2 (C-M217)",
  type: "Y-DNA",
  parent: "C",
  children: ["C2a", "C2b"],
  formed: "~30,000 BCE",
  mrca: "~5,000 BCE",
  origin: {
    region: "Central Asia / Mongolia",
    period: "Upper Paleolithic",
    coordinates: [105, 48],
  },
  description:
    "C2 (C-M217) is the predominant Y-DNA haplogroup in Mongolia and among Turkic and Mongolic peoples of Central and Northeast Asia. It is most famous for containing the lineage of Genghis Khan and the House of Borjigin, identified as C2b1a1-F3918 (also called 'Star Cluster'). This Mongolian star cluster accounts for roughly 0.5% of all men alive today, making it one of the most successful patrilineages in human history.",
  interestingFact:
    "The 'Star Cluster' subclade of C2, likely descended from Genghis Khan or his direct ancestors, is carried by an estimated 16 million men alive today — approximately 0.5% of the global male population — the largest known patrilineal expansion from a single individual.",
  distribution: [
    { ethnicity: "Mongols", region: "East Asia / Central Asia", percentage: 58, sampleSize: 500 },
    { ethnicity: "Kazakhs", region: "Central Asia", percentage: 40, sampleSize: 600 },
    { ethnicity: "Kyrgyz", region: "Central Asia", percentage: 10, sampleSize: 200 },
    { ethnicity: "Buryats", region: "Siberia", percentage: 72, sampleSize: 300 },
    { ethnicity: "Manchus", region: "Northeast China", percentage: 35, sampleSize: 200 },
    { ethnicity: "Hazara", region: "South Asia", percentage: 37, sampleSize: 150 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 5, sampleSize: 800 },
  ],
  clans: [
    { type: "dynasty", name: "House of Borjigin", region: "Mongolia", note: "Ruling clan of Genghis Khan, confirmed C2b1a1-F3918 (Star Cluster)" },
    { type: "ru", name: "Kerey / Kerei", region: "Kazakhstan", note: "Major Kazakh zhuz (clan confederation) with high C2 frequency" },
    { type: "clan", name: "Naiman", region: "Central Asia", note: "Historic Turkic-Mongolic tribal confederation with significant C2" },
    { type: "tribe", name: "Borjigin", region: "Mongolia", note: "Founding clan of the Mongol Empire" },
    { type: "ru", name: "Tore", region: "Kazakhstan / Central Asia", note: "Descendants of Genghis Khan in Kazakh tradition, high Star Cluster frequency" },
  ],
  statistics: {
    modernFrequency: "~3% of global male population",
    peakRegion: "Mongolia / Kazakhstan",
    estimatedCarriers: 100_000_000,
  },
  tags: ["Mongols", "Central Asia", "Genghis Khan", "Steppe", "Turkic", "Kazakhs", "Bronze Age"],
  references: [
    "Zerjal et al. (2003) — The Genetic Legacy of the Mongols. American Journal of Human Genetics 72(3), 717–721.",
    "Wei et al. (2018) — Phylogenetic analysis of the Y-chromosome haplogroup C2b-F1067. PLOS ONE.",
    "Balaresque et al. (2015) — Y-chromosome descent clusters and male differential reproductive success. European Journal of Human Genetics.",
  ],
  featured: true,
  addedAt: "2026-04-09",
};

export default C2;
