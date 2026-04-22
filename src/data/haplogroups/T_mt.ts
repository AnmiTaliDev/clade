/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup T (Tara).
 */

import type { Haplogroup } from "@/types/haplogroup";

const T_mt: Haplogroup = {
  id: "T_mt",
  name: "T (mtDNA)",
  type: "mtDNA",
  parent: "JT_mt",
  children: [],
  formed: "~27,000 BCE",
  mrca: "~19,000 BCE",
  origin: {
    region: "Near East",
    period: "Upper Paleolithic",
    coordinates: [40, 35],
  },
  description:
    "Mitochondrial haplogroup T, commonly known as 'Tara' in popular genetic genealogy, is a major maternal lineage found throughout Europe, the Near East, and parts of Central Asia. Along with its sister clade J, it was one of the founding lineages of the Neolithic farmers who brought agriculture to Europe. Haplogroup T is characterized by its high diversity in the Near East and its presence in several significant ancient populations, including the Yamna culture of the Pontic-Caspian steppe.",
  interestingFact:
    "The last Russian Tsar, Nicholas II, belonged to haplogroup T. Since mitochondrial DNA is inherited only from the mother, this means the lineage includes many European royals descended from the 15th-century noblewoman Barbara of Celje.",
  distribution: [
    { ethnicity: "Udmurts", region: "Eastern Europe", percentage: 39, sampleSize: 100 },
    { ethnicity: "Dutch", region: "Western Europe", percentage: 12, sampleSize: 300 },
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 10, sampleSize: 250 },
    { ethnicity: "Chechens", region: "Caucasus", percentage: 12, sampleSize: 150 },
    { ethnicity: "Iranians", region: "Middle East", percentage: 8, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~10% of native Europeans",
    peakRegion: "Eastern Europe / Near East",
    estimatedCarriers: 120_000_000,
  },
  tags: ["mtDNA", "Neolithic", "Yamna", "Europe", "Royalty"],
  references: [
    "Soares et al. (2010) — The archaeogenetics of Europe. Current Biology 20(4), R174–R183.",
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211.",
    "Sykes (2001) — The Seven Daughters of Eve. W. W. Norton & Company.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default T_mt;
