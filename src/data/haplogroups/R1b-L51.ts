/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-L51.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_L51: Haplogroup = {
  id: "R1b-L51",
  name: "R1b-L51",
  type: "Y-DNA",
  parent: "R1b-L23",
  children: ["R1b-L11"],
  formed: "~4,100 BCE",
  mrca: "~3,700 BCE",
  origin: {
    region: "Central Europe or Eastern Europe",
    period: "Late Neolithic / Copper Age",
    coordinates: [20, 48],
  },
  description:
    "R1b-L51 is the immediate ancestor of the primary Western European paternal lineages. While its parent L23 was dominant in the Pontic steppe, L51 represents the branch that migrated westward into the Danube valley and Central Europe. This clade underwent a severe bottleneck before expanding explosively with the Bell Beaker culture, eventually leading to the lineages that account for the majority of men in Western Europe today.",
  interestingFact:
    "L51 marks the genetic 'frontier' of the R1b expansion into Europe; it is rare in the east but becomes nearly universal in the west through its descendant L11.",
  distribution: [
    { ethnicity: "Western Europeans", region: "Western Europe", percentage: 60 },
  ],
  statistics: {
    modernFrequency: "~8% of global male population",
    peakRegion: "Western Europe",
    estimatedCarriers: 300_000_000,
  },
  tags: ["Bronze Age", "Expansion", "Central Europe", "Western Europe", "Ancestral"],
  references: [
    "Myres et al. (2011) — A major Y-chromosome haplogroup R1b Holocene era founder effect in Central and Western Europe. European Journal of Human Genetics.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_L51;
