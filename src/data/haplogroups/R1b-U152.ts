/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-U152.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_U152: Haplogroup = {
  id: "R1b-U152",
  name: "R1b-U152",
  type: "Y-DNA",
  parent: "R1b-P312",
  children: [],
  formed: "~2,500 BCE",
  mrca: "~2,400 BCE",
  origin: {
    region: "Central Europe (Alps / Danube)",
    period: "Bronze Age / Iron Age",
    coordinates: [10, 47],
  },
  description:
    "R1b-U152 is a major paternal lineage found predominantly in Central and Southern Europe. It is strongly associated with the Hallstatt and La Tène Celtic cultures, as well as the ancient Italic peoples, including the Romans. Its distribution peaks in Northern Italy, Switzerland, and Southern Germany. U152 followed the southward expansion of Indo-European speakers from the Alpine region into the Italian peninsula, where it became a foundational marker for the populations of the Roman Republic and Empire.",
  interestingFact:
    "R1b-U152 is often called the 'Italo-Celtic' marker because its distribution closely matches the territories of both the early Celts and the Italic speakers. It has also been identified in ancient remains belonging to the House of Habsburg, the famous European royal dynasty.",
  distribution: [
    { ethnicity: "Northern Italians", region: "Southern Europe", percentage: 40, sampleSize: 500 },
    { ethnicity: "Swiss", region: "Central Europe", percentage: 25, sampleSize: 400 },
    { ethnicity: "French (East)", region: "Western Europe", percentage: 20, sampleSize: 300 },
    { ethnicity: "Corsicans", region: "Southern Europe", percentage: 35, sampleSize: 150 },
    { ethnicity: "Southern Germans", region: "Central Europe", percentage: 15, sampleSize: 600 },
  ],
  statistics: {
    modernFrequency: "~1% of global male population",
    peakRegion: "Italy / Switzerland",
    estimatedCarriers: 40_000_000,
  },
  tags: ["Italic", "Roman", "Celtic", "Hallstatt", "Alpine", "Central Europe"],
  references: [
    "Myres et al. (2011) — A major Y-chromosome haplogroup R1b Holocene era founder effect in Central and Western Europe. European Journal of Human Genetics.",
    "Posth et al. (2021) — The origin and legacy of the Etruscans. Science Advances.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_U152;
