/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C2a (F1067).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C2a: Haplogroup = {
  id: "C2a",
  name: "C2a (F1067)",
  type: "Y-DNA",
  parent: "C2",
  children: [],
  formed: "~30,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "East Asia (China)",
    period: "Upper Paleolithic",
    coordinates: [115, 35],
  },
  description:
    "Haplogroup C2a (F1067) is the southern branch of C2, predominantly found in East Asia. It reaches its highest frequencies and diversity in China, Korea, and Japan, serving as one of the foundational paternal lineages of the Han Chinese population. Its descendants participated in the expansion of agricultural societies across East Asia.",
  interestingFact:
    "C2a is deeply integrated into the sedentary populations of East Asia and was a major component of early Chinese civilizations along the Yellow River.",
  distribution: [
    {
      ethnicity: "Han Chinese",
      region: "East Asia",
      percentage: 10,
      sampleSize: 2000,
    },
    {
      ethnicity: "Koreans",
      region: "East Asia",
      percentage: 12,
      sampleSize: 800,
    },
    {
      ethnicity: "Japanese",
      region: "East Asia",
      percentage: 3,
      sampleSize: 1000,
    },
  ],
  statistics: {
    modernFrequency: "~1.5% of global male population",
    peakRegion: "East Asia",
    estimatedCarriers: 50_000_000,
  },
  tags: ["East Asia", "China", "Korea", "Japan", "Han"],
  references: [
    "Wei et al. (2018) — Phylogenetic analysis of the Y-chromosome haplogroup C2b-F1067. PLOS ONE.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C2a;
