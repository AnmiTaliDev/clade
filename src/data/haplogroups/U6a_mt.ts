/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup U6a.
 */

import type { Haplogroup } from "@/types/haplogroup";

const U6a_mt: Haplogroup = {
  id: "U6a_mt",
  name: "U6a",
  type: "mtDNA",
  parent: "U6_mt",
  children: [],
  formed: "~25,000 BCE",
  mrca: "~15,000 BCE",
  origin: {
    region: "North Africa / Berber",
    period: "Upper Paleolithic",
    coordinates: [0, 30],
  },
  description:
    "Haplogroup U6a is the most common subclade of U6, the major North African U lineage. U6a is found predominantly among Berber populations of Morocco, Algeria, Tunisia, and the Canary Islands, where it reaches frequencies of 15–25% in some groups. U6a is also found in the Iberian Peninsula, particularly in Andalusia and the Canary Islands, reflecting historical North African gene flow into southwestern Europe. The Canary Islanders (Guanches) carry U6a at particularly high frequencies, connecting them genetically to the North African Berber populations from which they likely descended.",
  interestingFact:
    "The ancient Guanche people of the Canary Islands carried U6a at frequencies of ~80% (detected in ancient DNA from pre-European contact burials), confirming their North African Berber origin. When Spanish explorers arrived in the 14th–15th centuries, they encountered a population that was genetically a North African outlier — the product of an ancient Bronze Age migration from the Maghreb that established what became one of the world's most isolated human populations.",
  distribution: [
    { ethnicity: "Moroccan Berbers", region: "North Africa", percentage: 18, sampleSize: 300 },
    { ethnicity: "Algerian Berbers", region: "North Africa", percentage: 15, sampleSize: 250 },
    { ethnicity: "Canary Islanders (modern)", region: "Atlantic Islands", percentage: 10, sampleSize: 200 },
    { ethnicity: "Spaniards (Andalusia)", region: "Southwestern Europe", percentage: 3, sampleSize: 300 },
    { ethnicity: "Egyptians", region: "North Africa", percentage: 3, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~1% globally; ~10-20% in North African Berbers",
    peakRegion: "North Africa (Maghreb) / Canary Islands",
    estimatedCarriers: 10_000_000,
  },
  tags: ["North Africa", "Berber", "Maghreb", "Canary Islands", "Guanche", "Mediterranean", "mtDNA"],
  references: [
    "González et al. (2003) — Mitochondrial lineage M1 traces an early human backflow to Africa. BMC Genomics 8, 223.",
    "Fregel et al. (2009) — Demographic history of Canary Islands male gene-pool: replacement of native lineages by European. BMC Evolutionary Biology 9, 181.",
  ],
  featured: false,
  addedAt: "2026-07-01",
};

export default U6a_mt;
