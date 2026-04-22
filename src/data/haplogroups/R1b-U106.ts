/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-U106.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_U106: Haplogroup = {
  id: "R1b-U106",
  name: "R1b-U106",
  type: "Y-DNA",
  parent: "R1b-L11",
  children: [],
  formed: "~2,500 BCE",
  mrca: "~2,400 BCE",
  origin: {
    region: "Central Europe or North Sea coast",
    period: "Bronze Age",
    coordinates: [8, 52],
  },
  description:
    "R1b-U106 is the primary Germanic branch of haplogroup R1b. It is found at high frequencies in the Netherlands, Northern Germany, Denmark, and England. While its sister branch P312 dominated Western and Southern Europe, U106 expanded into Northern Europe, where it became a foundational lineage for the Germanic-speaking peoples. It arrived in the British Isles in multiple waves, most notably with the Anglo-Saxon migrations following the collapse of Roman Britain.",
  interestingFact:
    "R1b-U106 is sometimes called the 'Frisian' marker due to its extremely high frequency in the Netherlands and surrounding coastal regions. It is one of the key markers used to distinguish Anglo-Saxon from Briton/Celtic (L21) ancestry in modern English populations.",
  distribution: [
    { ethnicity: "Dutch", region: "Western Europe", percentage: 35, sampleSize: 500 },
    { ethnicity: "Northern Germans", region: "Central Europe", percentage: 30, sampleSize: 600 },
    { ethnicity: "Danes", region: "Scandinavia", percentage: 20, sampleSize: 400 },
    { ethnicity: "English", region: "Western Europe", percentage: 25, sampleSize: 1000 },
    { ethnicity: "Austrians", region: "Central Europe", percentage: 20, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~1.5% of global male population",
    peakRegion: "Netherlands / Northern Germany",
    estimatedCarriers: 55_000_000,
  },
  tags: ["Germanic", "Dutch", "Anglo-Saxon", "North Sea", "Bronze Age", "Western Europe"],
  references: [
    "Myres et al. (2011) — A major Y-chromosome haplogroup R1b Holocene era founder effect in Central and Western Europe. European Journal of Human Genetics.",
    "Schiffels et al. (2016) — Iron Age and Anglo-Saxon genomes from East England reveal British migration history. Nature Communications.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_U106;
