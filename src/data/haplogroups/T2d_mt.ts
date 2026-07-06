/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup T2d.
 */

import type { Haplogroup } from "@/types/haplogroup";

const T2d_mt: Haplogroup = {
  id: "T2d_mt",
  name: "T2d (mtDNA)",
  type: "mtDNA",
  parent: "T2_mt",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~7,000 BCE",
  origin: {
    region: "Near East",
    period: "Epipaleolithic / Neolithic",
    coordinates: [38, 35],
  },
  description:
    "Mitochondrial haplogroup T2d is a Near Eastern subclade of T2 found predominantly in the Levant, Arabian Peninsula, and eastern Mediterranean region. T2d has a more restricted distribution than T2a or T2b, remaining most common in the Near East and reaching low frequencies in Europe. Its highest frequencies are found in Levantine Arab populations (2–5%) and Bedouin communities. T2d is considered one of the older Neolithic Near Eastern lineages that either did not participate heavily in the westward agricultural expansion or declined in frequency relative to other T2 subclades during later demographic events.",
  interestingFact:
    "The geographic concentration of T2d in the Levant and Arabian Peninsula contrasts sharply with the predominantly European distribution of T2b, illustrating how different subclades of the same haplogroup T2 followed entirely different paths: T2d stayed close to its Near Eastern homeland while T2b became one of Europe's most widespread Neolithic lineages.",
  distribution: [
    { ethnicity: "Palestinians / Jordanians", region: "Near East", percentage: 4, sampleSize: 250 },
    { ethnicity: "Saudis", region: "Near East", percentage: 3.5, sampleSize: 300 },
    { ethnicity: "Syrians", region: "Near East", percentage: 3, sampleSize: 200 },
    { ethnicity: "Egyptians", region: "North Africa", percentage: 2, sampleSize: 350 },
    { ethnicity: "Turks", region: "Near East", percentage: 1.5, sampleSize: 400 },
    { ethnicity: "Europeans", region: "Europe", percentage: 0.3, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~2–5% in Levant/Arabia; rare in Europe",
    peakRegion: "Levant / Arabian Peninsula",
    estimatedCarriers: 5_000_000,
  },
  tags: ["mtDNA", "Near East", "Levant", "Arabia", "Neolithic", "T-branch"],
  references: [
    "Abu-Amero et al. (2008) — Mitochondrial DNA structure in the Arabian Peninsula. BMC Evolutionary Biology 8:45.",
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Olivieri et al. (2006) — The mtDNA legacy of the Levantine early Upper Palaeolithic in Africa. Science 314(5806), 1767–1770.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default T2d_mt;
