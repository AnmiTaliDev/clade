/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1b1 (AM00694).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1b1: Haplogroup = {
  id: "C1b1",
  name: "C1b1 (AM00694)",
  type: "Y-DNA",
  parent: "C1b",
  children: [],
  formed: "~46,000 BCE",
  mrca: "~40,000 BCE",
  origin: {
    region: "South Asia or West Asia",
    period: "Upper Paleolithic",
    coordinates: [75, 20],
  },
  description:
    "Haplogroup C1b1 (AM00694) is an ancient paternal lineage that represents one of the earliest modern human settlements in South Asia and the Middle East. It is closely associated with the 'Ancient Ancestral South Indians' (AASI), the hunter-gatherer population that occupied the Indian subcontinent before the arrival of Neolithic farmers and Indo-European speakers. Today, C1b1 is found at low frequencies among various tribal and caste groups in India, as well as in pockets across the Arabian Peninsula and Southeast Asia.",
  interestingFact:
    "The 37,000-year-old Kostenki-14 remains from the Russian steppe were found to belong to a basal lineage related to C1b, suggesting that this group once had a much broader distribution across Eurasia during the early Upper Paleolithic.",
  distribution: [
    { ethnicity: "South Indians (Tribal)", region: "South Asia", percentage: 5, sampleSize: 500 },
    { ethnicity: "Vedda", region: "South Asia", percentage: 10, sampleSize: 100 },
    { ethnicity: "Saudis", region: "Middle East", percentage: 0.5, sampleSize: 1500 },
    { ethnicity: "Iraqis", region: "Middle East", percentage: 0.3, sampleSize: 800 },
    { ethnicity: "Indigenous populations", region: "Southeast Asia", percentage: 2, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "<0.1% of global male population",
    peakRegion: "South Asia",
    estimatedCarriers: 2_000_000,
  },
  tags: ["South Asia", "AASI", "India", "Middle East", "Paleolithic", "Ancient DNA"],
  references: [
    "Sengupta et al. (2006) — Polarity and Temporality of High-Resolution Y-Chromosome Distributions in India. American Journal of Human Genetics 78(2), 202–221.",
    "Seguin-Orlando et al. (2014) — Genomic structure in Europeans dating back at least 36,200 years. Science 346, 1113–1118.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1b1;
