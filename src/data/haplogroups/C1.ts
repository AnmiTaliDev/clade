/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1 (F3393).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1: Haplogroup = {
  id: "C1",
  name: "C1 (F3393)",
  type: "Y-DNA",
  parent: "C",
  children: ["C1a", "C1b"],
  formed: "~47,000 BCE",
  mrca: "~45,000 BCE",
  origin: {
    region: "South Asia or Central Asia",
    period: "Upper Paleolithic",
    coordinates: [70, 25],
  },
  description:
    "Haplogroup C1 (F3393) is one of the two primary branches of the ancient macro-haplogroup C. It represents one of the earliest successful human expansions out of Africa, following the southern coastal route. While its descendants are found in geographically disparate regions — from the islands of Japan to the plains of Europe and the deserts of Australia — they all share a common ancestor who lived nearly 50,000 years ago, likely in South Asia. C1 is a testament to the incredible migratory capacity of early modern humans.",
  interestingFact:
    "C1 is unique for its extreme geographical bifurcation: one of its main branches (C1a) split into groups that settled at opposite ends of Eurasia — in Japan and Western Europe — while its other branch (C1b) became the dominant lineage of Indigenous Australians.",
  distribution: [
    { ethnicity: "Oceanian populations", region: "Oceania", percentage: 20 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 5 },
    { ethnicity: "South Asians", region: "South Asia", percentage: 2 },
  ],
  statistics: {
    modernFrequency: "~1% of global male population (excluding C2)",
    peakRegion: "Australia / Oceania / Japan",
    estimatedCarriers: 25_000_000,
  },
  tags: ["Paleolithic", "Coastal migration", "Out of Africa", "Ancestral"],
  references: [
    "Karafet et al. (2010) — Major east-west division underlies Y chromosome stratification across Indonesia. Molecular Biology and Evolution 27(8), 1833–1844.",
    "ISOGG Wiki — Haplogroup C (accessed 2026).",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1;
