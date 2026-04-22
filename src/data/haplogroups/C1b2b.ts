/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1b2b (M347).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1b2b: Haplogroup = {
  id: "C1b2b",
  name: "C1b2b (M347)",
  type: "Y-DNA",
  parent: "C1b2",
  children: [],
  formed: "~44,000 BCE",
  mrca: "~40,000 BCE",
  origin: {
    region: "Australia",
    period: "Upper Paleolithic",
    coordinates: [133, -25],
  },
  description:
    "Haplogroup C1b2b (M347) is the dominant paternal lineage found among Indigenous Australians. It is found almost exclusively on the Australian continent and is estimated to have originated shortly after the initial colonization of Sahul approximately 50,000 years ago. Its extreme isolation from mainland Eurasia for tens of thousands of years has made C1b2b one of the most geographically restricted and ancient continuous lineages in the human population.",
  interestingFact:
    "C1b2b account for approximately 40% to 60% of male lineages among Indigenous Australians, representing a continuous genetic heritage that spans from the first arrival of humans in Australia until the present day, with virtually no presence outside the continent.",
  distribution: [
    { ethnicity: "Aboriginal Australians (Central)", region: "Australia", percentage: 60, sampleSize: 150 },
    { ethnicity: "Aboriginal Australians (Northern)", region: "Australia", percentage: 45, sampleSize: 200 },
    { ethnicity: "Aboriginal Australians (Southern)", region: "Australia", percentage: 35, sampleSize: 100 },
  ],
  statistics: {
    modernFrequency: "~0.1% of global male population",
    peakRegion: "Australia",
    estimatedCarriers: 300_000,
  },
  tags: ["Australia", "Indigenous", "Aboriginal", "Isolation", "Paleolithic", "Ancient"],
  references: [
    "Bergström et al. (2016) — Deep roots for Aboriginal Australian Y chromosomes. Current Biology 26(6), 809–813.",
    "Hudjashov et al. (2007) — Revealing the prehistoric settlement of Australia by Y chromosome and mtDNA analysis. PNAS 104(21), 8726–8730.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1b2b;
