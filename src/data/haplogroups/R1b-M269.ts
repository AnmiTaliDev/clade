/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-M269.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_M269: Haplogroup = {
  id: "R1b-M269",
  name: "R1b-M269",
  type: "Y-DNA",
  parent: "R1b",
  children: ["R1b-L23"],
  formed: "~11,000 BCE",
  mrca: "~4,500 BCE",
  origin: {
    region: "Near East or Pontic Steppe",
    period: "Mesolithic",
    coordinates: [40, 40],
  },
  description:
    "R1b-M269 is the most common Y-DNA lineage in Europe, particularly in the West. It is the defining marker for the massive expansion of Indo-European speakers during the Bronze Age. Arising long before its expansion, it underwent a dramatic bottleneck followed by an explosive star-like radiation around 3000-2500 BCE. Its descendants colonized almost all of Western Europe, replacing the previous Neolithic farmer lineages and creating the modern genetic landscape of countries like Ireland, France, and Spain.",
  interestingFact:
    "The majority of Western European men (roughly 110 million) descend from a single M269-carrying population that lived only about 4,500 to 5,000 years ago, coinciding with the rise of the Yamnaya and Bell Beaker cultures.",
  distribution: [
    { ethnicity: "Western Europeans (Average)", region: "Western Europe", percentage: 60 },
    { ethnicity: "Irish", region: "Western Europe", percentage: 80, sampleSize: 500 },
    { ethnicity: "British", region: "Western Europe", percentage: 70, sampleSize: 1000 },
    { ethnicity: "Spanish", region: "Western Europe", percentage: 65, sampleSize: 700 },
    { ethnicity: "Armenians", region: "Caucasus", percentage: 25, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~8% of global male population",
    peakRegion: "Western Europe",
    estimatedCarriers: 300_000_000,
  },
  tags: ["Indo-European", "Bronze Age", "Yamnaya", "Western Europe", "Expansion"],
  references: [
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature.",
    "Balaresque et al. (2010) — A predominantly neolithic origin for European paternal lineages. PLoS Biology.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_M269;
