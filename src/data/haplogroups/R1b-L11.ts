/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-L11.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_L11: Haplogroup = {
  id: "R1b-L11",
  name: "R1b-L11",
  type: "Y-DNA",
  parent: "R1b-L51",
  children: ["R1b-P312", "R1b-U106"],
  formed: "~3,300 BCE",
  mrca: "~2,900 BCE",
  origin: {
    region: "Central Europe (likely Bohemia or Bavaria)",
    period: "Late Neolithic / Early Bronze Age",
    coordinates: [13, 49],
  },
  description:
    "R1b-L11 is one of the most significant phylogenetic nodes in European history. It is the immediate ancestor of both the P312 (Italo-Celtic-Iberian) and U106 (Germanic) branches, which together account for the vast majority of all Western European men. This lineage emerged as Indo-European speaking steppe groups moved into the heart of Europe and adopted the Bell Beaker culture, setting the stage for the massive genetic transformation of the continent.",
  interestingFact:
    "L11 represents a pivotal moment in the Indo-European expansion where a single population in Central Europe split into the ancestors of the Germanic and Italo-Celtic peoples, a division that still defines the linguistic and genetic boundaries of Europe today.",
  distribution: [
    { ethnicity: "Western Europeans (Average)", region: "Western Europe", percentage: 60 },
  ],
  statistics: {
    modernFrequency: "~8% of global male population",
    peakRegion: "Western Europe",
    estimatedCarriers: 300_000_000,
  },
  tags: ["Bronze Age", "Bell Beaker", "Central Europe", "Indo-European", "Expansion"],
  references: [
    "Myres et al. (2011) — A major Y-chromosome haplogroup R1b Holocene era founder effect in Central and Western Europe. European Journal of Human Genetics.",
    "Olalde et al. (2018) — The Beaker phenomenon and the genomic transformation of northwest Europe. Nature.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_L11;
