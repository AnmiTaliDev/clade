/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C2 (M217).
 */

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
    "C2 (C-M217) is the predominant Y-DNA haplogroup in Mongolia and among Turkic and Mongolic peoples of Central and Northeast Asia. It represents a massive expansion of paternal lineages that dominated the Eurasian steppe. Its descendants participated in some of the most significant migrations and imperial expansions in human history, spanning from the borders of Europe to the shores of the Pacific and even into North America.",
  interestingFact:
    "C2 is the most widespread branch of haplogroup C, having successfully adapted to the harsh environments of the North Asian steppe and forest-steppe zones.",
  distribution: [
    {
      ethnicity: "Mongols",
      region: "East Asia / Central Asia",
      percentage: 58,
      sampleSize: 500,
    },
    {
      ethnicity: "Kazakhs",
      region: "Central Asia",
      percentage: 40,
      sampleSize: 600,
    },
    {
      ethnicity: "Buryats",
      region: "Siberia",
      percentage: 72,
      sampleSize: 300,
    },
  ],
  statistics: {
    modernFrequency: "~3% of global male population",
    peakRegion: "Mongolia / Kazakhstan",
    estimatedCarriers: 100_000_000,
  },
  tags: ["Mongols", "Central Asia", "Steppe", "Turkic", "Paleolithic"],
  references: [
    "Zerjal et al. (2003) — The Genetic Legacy of the Mongols. American Journal of Human Genetics 72(3), 717–721.",
  ],
  featured: true,
  addedAt: "2026-04-22",
};

export default C2;
