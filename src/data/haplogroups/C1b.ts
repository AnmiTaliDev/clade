/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1b (F1370).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1b: Haplogroup = {
  id: "C1b",
  name: "C1b (F1370)",
  type: "Y-DNA",
  parent: "C1",
  children: ["C1b1", "C1b2"],
  formed: "~46,000 BCE",
  mrca: "~45,000 BCE",
  origin: {
    region: "South Asia or Southeast Asia",
    period: "Upper Paleolithic",
    coordinates: [85, 15],
  },
  description:
    "Haplogroup C1b is the most populous and geographically widespread branch of C1. It represents the ancient paternal lineages of the first modern human inhabitants of South Asia, Southeast Asia, and Oceania. C1b split over 45,000 years ago into branches that settled the Indian subcontinent (C1b1) and those that crossed the sea to populate the prehistoric continent of Sahul (C1b2), which included modern-day Australia and New Guinea.",
  interestingFact:
    "C1b is a crucial genetic marker for tracking the 'Southern Route' of human dispersal out of Africa, showing a continuous line of descent from the early hunter-gatherers of South Asia to the indigenous peoples of the Pacific and Australia.",
  distribution: [
    {
      ethnicity: "Oceanian populations (C1b2 branch)",
      region: "Oceania",
      percentage: 30,
    },
    {
      ethnicity: "South Asian populations (C1b1 branch)",
      region: "South Asia",
      percentage: 5,
    },
    {
      ethnicity: "Aboriginal Australians",
      region: "Australia",
      percentage: 45,
    },
  ],
  statistics: {
    modernFrequency: "~0.5% of global male population",
    peakRegion: "Australia / Oceania / South Asia",
    estimatedCarriers: 20_000_000,
  },
  tags: ["South Asia", "Oceania", "Australia", "Paleolithic", "Southern Route"],
  references: [
    "Karafet et al. (2010) — Major east-west division underlies Y chromosome stratification across Indonesia. Molecular Biology and Evolution 27(8), 1833–1844.",
    "Bergström et al. (2016) — Deep roots for Aboriginal Australian Y chromosomes. Current Biology 26(6), 809–813.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1b;
