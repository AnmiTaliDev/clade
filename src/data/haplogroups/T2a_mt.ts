/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup T2a.
 */

import type { Haplogroup } from "@/types/haplogroup";

const T2a_mt: Haplogroup = {
  id: "T2a_mt",
  name: "T2a (mtDNA)",
  type: "mtDNA",
  parent: "T2_mt",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~8,000 BCE",
  origin: {
    region: "Near East / Anatolia",
    period: "Epipaleolithic / Neolithic",
    coordinates: [35, 38],
  },
  description:
    "Mitochondrial haplogroup T2a is one of the major subclades of T2, broadly distributed across Europe and the Near East as part of the Neolithic farmer expansion from Anatolia. T2a is found at frequencies of 1–4% throughout Europe, with somewhat higher frequencies in southeastern Europe and the Near East. Together with T2b and other T2 subclades, T2a represents one of the Neolithic founder lineages that accompanied the spread of agriculture from Anatolia into Europe beginning around 8,500–9,000 years ago. Ancient DNA studies have found T2a in Neolithic and Bronze Age European samples, confirming its role as a Neolithic introduction.",
  interestingFact:
    "Haplogroup T2a has been found in ancient DNA from multiple Neolithic archaeological cultures across Europe, from the Linearbandkeramik (LBK) farmers of Central Europe to Cardial Ware cultures of the western Mediterranean — evidence that T2a-carrying women were among the pioneering farmers who carried agriculture across the continent.",
  distribution: [
    { ethnicity: "Turks", region: "Near East", percentage: 4, sampleSize: 400 },
    { ethnicity: "Greeks", region: "Southern Europe", percentage: 3, sampleSize: 300 },
    { ethnicity: "Italians", region: "Southern Europe", percentage: 2.5, sampleSize: 400 },
    { ethnicity: "Germans", region: "Central Europe", percentage: 2, sampleSize: 500 },
    { ethnicity: "British", region: "Northwestern Europe", percentage: 1.5, sampleSize: 800 },
    { ethnicity: "Iranians", region: "Near East", percentage: 3, sampleSize: 350 },
  ],
  statistics: {
    modernFrequency: "~1–4% in Europe and Near East",
    peakRegion: "Near East / Southern Europe",
    estimatedCarriers: 14_000_000,
  },
  tags: ["mtDNA", "Near East", "Europe", "Neolithic", "Anatolian farmers", "T-branch", "LBK"],
  references: [
    "Haak et al. (2010) — Ancient DNA from European early Neolithic farmers reveals their Near Eastern affinities. PLOS Biology 8(11), e1000536.",
    "Richards et al. (2000) — Tracing European founder lineages in the Near Eastern mtDNA pool. American Journal of Human Genetics 67(5), 1251–1276.",
    "Bramanti et al. (2009) — Genetic discontinuity between local hunter-gatherers and Central Europe's first farmers. Science 326(5949), 137–140.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default T2a_mt;
