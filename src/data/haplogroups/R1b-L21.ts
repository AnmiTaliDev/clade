/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-L21.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_L21: Haplogroup = {
  id: "R1b-L21",
  name: "R1b-L21",
  type: "Y-DNA",
  parent: "R1b-P312",
  children: [],
  formed: "~2,500 BCE",
  mrca: "~2,400 BCE",
  origin: {
    region: "Central or Western Europe",
    period: "Bronze Age (Bell Beaker)",
    coordinates: [5, 48],
  },
  description:
    "R1b-L21 is the signature paternal lineage of the Atlantic Celtic world. It is found at its highest frequencies in Ireland, Scotland, Wales, Brittany, and Cornwall. This marker spread with the Bell Beaker phenomenon into Northwest Europe, where it became the dominant lineage. It represents the specific branch of R1b that successfully colonized the British Isles during the early Bronze Age, effectively replacing earlier Neolithic male lineages.",
  interestingFact:
    "In parts of Western Ireland, over 90% of men carry the L21 marker, making it one of the most concentrated paternal lineages in the world. It is also found in significant frequencies in regions of North and West France (Brittany), tracing the historical Celtic connections across the English Channel.",
  distribution: [
    { ethnicity: "Irish", region: "Western Europe", percentage: 80, sampleSize: 500 },
    { ethnicity: "Scottish", region: "Western Europe", percentage: 70, sampleSize: 400 },
    { ethnicity: "Welsh", region: "Western Europe", percentage: 75, sampleSize: 300 },
    { ethnicity: "Bretons", region: "Western Europe", percentage: 60, sampleSize: 200 },
    { ethnicity: "Cornish", region: "Western Europe", percentage: 65, sampleSize: 150 },
  ],
  statistics: {
    modernFrequency: "~1.5% of global male population",
    peakRegion: "British Isles / Brittany",
    estimatedCarriers: 60_000_000,
  },
  tags: ["Celtic", "Atlantic", "British Isles", "Ireland", "Bell Beaker", "Bronze Age"],
  references: [
    "Olalde et al. (2018) — The Beaker phenomenon and the genomic transformation of northwest Europe. Nature.",
    "Busby et al. (2012) — The peopling of Europe and the cautionary tale of Y chromosome lineage R-M269. Proceedings of the Royal Society B.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_L21;
