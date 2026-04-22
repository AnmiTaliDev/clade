/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup L (M20).
 */

import type { Haplogroup } from "@/types/haplogroup";

const L: Haplogroup = {
  id: "L",
  name: "L (M20)",
  type: "Y-DNA",
  parent: "LT",
  children: [],
  formed: "~40,000 BCE",
  mrca: "~22,000 BCE",
  origin: {
    region: "South Asia or West Asia",
    period: "Upper Paleolithic",
    coordinates: [70, 30],
  },
  description:
    "Haplogroup L is a significant paternal lineage primarily found in South Asia, West Asia, and to a lesser extent, the Middle East and Europe. It is strongly associated with the early agriculturalists of the Indus Valley and is one of the primary genetic signatures of the Indus Valley Civilization. Its presence in Southern India among Dravidian-speaking populations suggest a long-term presence in the Indian subcontinent, potentially linked to the spread of Neolithic farming from the Fertile Crescent toward the east.",
  interestingFact:
    "Haplogroup L is significantly more common in 'caste' populations than in 'tribal' groups within India, supporting the theory that its spread was linked to later Neolithic migrations and the establishment of organized agricultural societies.",
  distribution: [
    { ethnicity: "Baloch", region: "South Asia", percentage: 28, sampleSize: 150 },
    { ethnicity: "Druze", region: "Middle East", percentage: 35, sampleSize: 100 },
    { ethnicity: "Southern Indians (Dravidian)", region: "South Asia", percentage: 19, sampleSize: 400 },
    { ethnicity: "Pashtuns (North)", region: "Central Asia", percentage: 25, sampleSize: 120 },
    { ethnicity: "Chechens", region: "Caucasus", percentage: 14, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~1.5% of global male population",
    peakRegion: "South Asia / Middle East",
    estimatedCarriers: 60_000_000,
  },
  tags: ["South Asia", "Indus Valley", "Neolithic", "Dravidian", "Middle East"],
  references: [
    "Sengupta et al. (2006) — Polarity and Temporality of High-Resolution Y-Chromosome Distributions in India. American Journal of Human Genetics 78(2), 202–221.",
    "Mahal & Matsoukas (2018) — The Genetic History of Admixture in the Indian Subcontinent. Frontiers in Genetics 9, 220.",
    "Underhill et al. (2001) — The phylogeography of Y chromosome binary haplotypes and the origins of modern human populations. Annals of Human Genetics 65, 43–62.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default L;
