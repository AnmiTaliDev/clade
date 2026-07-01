/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup M2.
 */

import type { Haplogroup } from "@/types/haplogroup";

const M2_mt: Haplogroup = {
  id: "M2_mt",
  name: "M2",
  type: "mtDNA",
  parent: "M_mt",
  children: [],
  formed: "~50,000 BCE",
  mrca: "~35,000 BCE",
  origin: {
    region: "South Asia (Indian Subcontinent)",
    period: "Upper Paleolithic",
    coordinates: [78, 20],
  },
  description:
    "Haplogroup M2 is one of the major South Asian M-derived lineages, found across the Indian subcontinent with particular concentration in tribal and lower-caste populations of India and Sri Lanka. M2 belongs to the deep Indian-specific M lineages that arose from the early coastal migration of modern humans into South Asia approximately 60,000–65,000 years ago. It is among the oldest surviving maternal lineages in South Asia and is found at elevated frequencies in populations considered to be descended from the earliest settlers of the subcontinent, such as the Andamanese, various scheduled tribes, and dravidian-speaking groups.",
  interestingFact:
    "M2 and related deep Indian M lineages are found at their highest frequencies in the Andaman Islanders (Jarawa, Onge) — hunter-gatherer populations isolated on the Andaman Islands for possibly 60,000 years. These populations carry M lineages at near-100% frequency, representing a near-unchanged maternal genetic heritage from the original Out-of-Africa coastal migrants who first populated South Asia.",
  distribution: [
    { ethnicity: "South Indian tribals", region: "South Asia", percentage: 20, sampleSize: 200 },
    { ethnicity: "Sri Lankans", region: "South Asia", percentage: 8, sampleSize: 250 },
    { ethnicity: "Pakistanis", region: "South Asia", percentage: 6, sampleSize: 200 },
    { ethnicity: "Andamanese", region: "South Asia (Islands)", percentage: 40, sampleSize: 80 },
    { ethnicity: "Dravidian populations (average)", region: "South Asia", percentage: 12, sampleSize: 500 },
  ],
  statistics: {
    modernFrequency: "~1% globally; ~8-20% in South Asian tribal populations",
    peakRegion: "South Asia (Deccan / Sri Lanka)",
    estimatedCarriers: 15_000_000,
  },
  tags: ["South Asia", "India", "Dravidian", "Tribal", "Paleolithic", "Coastal migration", "Andaman", "mtDNA"],
  references: [
    "Kivisild et al. (2003) — The genetic heritage of the earliest settlers persists both in Indian tribal and caste populations. American Journal of Human Genetics 72(2), 313–332.",
    "Thangaraj et al. (2005) — Reconstructing the origin of Andaman Islanders. Science 308(5724), 996.",
    "Palanichamy et al. (2004) — Phylogeny of mitochondrial DNA macrohaplogroup N in India. American Journal of Human Genetics 75(6), 966–978.",
  ],
  featured: false,
  addedAt: "2026-07-01",
};

export default M2_mt;
