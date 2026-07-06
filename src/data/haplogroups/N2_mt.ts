/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup N2.
 */

import type { Haplogroup } from "@/types/haplogroup";

const N2_mt: Haplogroup = {
  id: "N2_mt",
  name: "N2 (mtDNA)",
  type: "mtDNA",
  parent: "N_mt",
  children: [],
  formed: "~55,000 BCE",
  mrca: "~40,000 BCE",
  origin: {
    region: "Near East / South Asia",
    period: "Upper Paleolithic",
    coordinates: [55, 25],
  },
  description:
    "Mitochondrial haplogroup N2 is an ancient Near Eastern and South Asian branch of haplogroup N, one of the two major non-African mtDNA macrohaplogroups (alongside M). N2 is found at low frequencies across a broad geographic range spanning the Near East, Central Asia, South Asia, and parts of Southeast Asia, with no single population showing very high concentrations. Its wide but sparse distribution suggests N2 may be an ancient lineage that predates the differentiation of modern Eurasian populations and has persisted at low levels across the region since the initial Out-of-Africa expansion. N2 is sometimes found in populations with deep Near Eastern or ancient Eurasian ancestry.",
  interestingFact:
    "Haplogroup N2's broad but diffuse distribution across Eurasia, without any strong population-specific concentration, may reflect a very ancient lineage that spread with the initial peopling of southern Eurasia but never achieved a strong founder effect in any particular location — a pattern consistent with the earliest, most widespread phases of human expansion out of Africa.",
  distribution: [
    { ethnicity: "Iranians", region: "Near East", percentage: 2, sampleSize: 350 },
    { ethnicity: "Pakistanis", region: "South Asia", percentage: 1.5, sampleSize: 400 },
    { ethnicity: "South Indians", region: "South Asia", percentage: 1, sampleSize: 500 },
    { ethnicity: "Turks", region: "Near East", percentage: 1.5, sampleSize: 400 },
    { ethnicity: "Uzbeks", region: "Central Asia", percentage: 1, sampleSize: 250 },
    { ethnicity: "Thais", region: "Southeast Asia", percentage: 0.5, sampleSize: 350 },
  ],
  statistics: {
    modernFrequency: "~0.5–2% in Near East, South Asia, and Central Asia",
    peakRegion: "Near East / Iran",
    estimatedCarriers: 5_000_000,
  },
  tags: ["mtDNA", "Near East", "South Asia", "Central Asia", "Paleolithic", "N-branch"],
  references: [
    "Quintana-Murci et al. (2004) — Where West Meets East: The Complex mtDNA Landscape of the Southwest and Central Asian Corridor. American Journal of Human Genetics 74(5), 827–845.",
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Metspalu et al. (2004) — Most of the extant mtDNA boundaries in south and southwest Asia were likely shaped during the initial settlement of Eurasia. BMC Genetics 5:26.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default N2_mt;
