/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup W1.
 */

import type { Haplogroup } from "@/types/haplogroup";

const W1_mt: Haplogroup = {
  id: "W1_mt",
  name: "W1",
  type: "mtDNA",
  parent: "W_mt",
  children: [],
  formed: "~22,000 BCE",
  mrca: "~15,000 BCE",
  origin: {
    region: "Near East / South Asia",
    period: "Upper Paleolithic",
    coordinates: [60, 28],
  },
  description:
    "Haplogroup W1 is the most common subclade of W, a rare N-derived haplogroup found across Europe, the Near East, and South Asia. W1 has an easterly distribution compared to the overall W lineage, being particularly concentrated in South Asia (India, Pakistan) and Central Asia, with some presence in the Near East and Europe. W1 has been detected in ancient samples from the South Asian Bronze Age, suggesting its antiquity in the subcontinent. It may represent one of the ancestral maternal lineages of populations that entered South Asia from the northwest during or after the Neolithic.",
  interestingFact:
    "W1 and related W lineages have been found in ancient DNA from Bronze Age populations of the Pontic Steppe, suggesting that W was part of the heterogeneous maternal gene pool associated with the Yamnaya and Corded Ware cultures. This makes W1 one of several minor haplogroups that accompanied the major Bronze Age steppe migration that introduced Indo-European languages into Europe and South Asia.",
  distribution: [
    { ethnicity: "Pakistanis", region: "South Asia", percentage: 5, sampleSize: 300 },
    { ethnicity: "North Indians", region: "South Asia", percentage: 3, sampleSize: 500 },
    { ethnicity: "Iranians", region: "Middle East", percentage: 3, sampleSize: 300 },
    { ethnicity: "Central Asians", region: "Central Asia", percentage: 4, sampleSize: 200 },
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 1, sampleSize: 2000 },
  ],
  statistics: {
    modernFrequency: "~0.5% globally; ~3-5% in South Asia",
    peakRegion: "South Asia / Near East",
    estimatedCarriers: 5_000_000,
  },
  tags: ["South Asia", "Near East", "India", "Pakistan", "Steppe", "Bronze Age", "mtDNA"],
  references: [
    "Quintana-Murci et al. (2004) — Where West meets East: the complex mtDNA landscape of the Southwest and Central Asian corridor. American Journal of Human Genetics 74(5), 827–845.",
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211.",
  ],
  featured: false,
  addedAt: "2026-07-01",
};

export default W1_mt;
