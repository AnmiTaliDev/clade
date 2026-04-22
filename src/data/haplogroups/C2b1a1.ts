/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C2b1a1 (Star Cluster).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C2b1a1: Haplogroup = {
  id: "C2b1a1",
  name: "C2b1a1 (Star Cluster)",
  type: "Y-DNA",
  parent: "C2b",
  children: [],
  formed: "~1,000 BCE",
  mrca: "~800 CE",
  origin: {
    region: "Mongolia",
    period: "Iron Age / Medieval",
    coordinates: [105, 48],
  },
  description:
    "Haplogroup C2b1a1-F3918, famously known as the 'Star Cluster', is a specific paternal lineage that underwent an unprecedented expansion across Eurasia during the 13th century. It is strongly associated with the House of Borjigin, the ruling clan of the Mongol Empire founded by Genghis Khan. The lineage is characterized by a very recent common ancestor and a massive number of descendants, reflecting the high social status and reproductive success of the Mongol ruling elite during and after the imperial expansion.",
  interestingFact:
    "A landmark 2003 study estimated that roughly 16 million men in Eurasia — about 0.5% of the global male population — are direct patrilineal descendants of the single individual who founded this 'Star Cluster', traditionally identified as Genghis Khan or one of his immediate paternal ancestors.",
  distribution: [
    { ethnicity: "Mongols", region: "East Asia / Central Asia", percentage: 35, sampleSize: 500 },
    { ethnicity: "Hazara", region: "South Asia", percentage: 33, sampleSize: 150 },
    { ethnicity: "Kazakhs (Tore)", region: "Central Asia", percentage: 70, sampleSize: 100, source: "Royal clan descendants" },
    { ethnicity: "Buryats", region: "Siberia", percentage: 20, sampleSize: 300 },
    { ethnicity: "Central Asians (Total)", region: "Eurasia", percentage: 8, sampleSize: 2123 },
  ],
  clans: [
    { type: "dynasty", name: "House of Borjigin", region: "Mongolia", note: "The imperial clan of Genghis Khan" },
    { type: "ru", name: "Tore", region: "Kazakhstan", note: "Kazakh aristocratic group claiming direct descent from Genghis Khan" },
    { type: "clan", name: "Kerey", region: "Central Asia", note: "Major clan with high Star Cluster frequency" },
  ],
  statistics: {
    modernFrequency: "~0.5% of global male population",
    peakRegion: "Mongolia / Kazakhstan",
    estimatedCarriers: 16_000_000,
  },
  tags: ["Genghis Khan", "Mongol Empire", "Star Cluster", "Steppe", "Dynasty", "Eurasia"],
  references: [
    "Zerjal et al. (2003) — The Genetic Legacy of the Mongols. American Journal of Human Genetics 72(3), 717–721.",
    "Balaresque et al. (2015) — Y-chromosome descent clusters and male differential reproductive success. European Journal of Human Genetics.",
  ],
  featured: true,
  addedAt: "2026-04-22",
};

export default C2b1a1;
