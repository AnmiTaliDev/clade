/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup J2a.
 */

import type { Haplogroup } from "@/types/haplogroup";

const J2a_mt: Haplogroup = {
  id: "J2a_mt",
  name: "J2a",
  type: "mtDNA",
  parent: "J2_mt",
  children: [],
  formed: "~13,000 BCE",
  mrca: "~9,000 BCE",
  origin: {
    region: "Near East / Caucasus",
    period: "Epipaleolithic",
    coordinates: [40, 38],
  },
  description:
    "Haplogroup J2a is a subclade of the mtDNA J2 haplogroup, found primarily in the Near East and Caucasus. Unlike the more widespread J1c, J2a has a more restricted distribution and is relatively rare in Europe. It is found at elevated frequencies in populations of the Caucasus, Iran, and the Arabian Peninsula. Ancient DNA research has found J2a in Neolithic Caucasian populations, suggesting it may be associated with the spread of farming cultures from the Caucasus or adjacent regions of the Near East.",
  interestingFact:
    "J2a has been found in ancient samples from Neolithic and Bronze Age populations of the Caucasus, including the Kura-Araxes culture (3500–2000 BCE), an early Bronze Age civilization that expanded from the South Caucasus into Anatolia, the Levant, and Iran.",
  distribution: [
    { ethnicity: "Armenians", region: "Caucasus", percentage: 3, sampleSize: 200 },
    { ethnicity: "Georgians", region: "Caucasus", percentage: 2.5, sampleSize: 180 },
    { ethnicity: "Iranians", region: "Middle East", percentage: 2, sampleSize: 250 },
    { ethnicity: "Saudis", region: "Arabian Peninsula", percentage: 1.5, sampleSize: 200 },
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 0.5, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~0.8% globally; 2–3% in Near East and Caucasus",
    peakRegion: "Caucasus / Near East",
    estimatedCarriers: 8_000_000,
  },
  tags: ["Caucasus", "Near East", "Neolithic", "Kura-Araxes", "Bronze Age", "mtDNA"],
  references: [
    "Fernandes et al. (2018) — The spread of steppe and Iranian-related ancestry in the islands of the western Mediterranean. Nature Ecology and Evolution 4, 334–345.",
    "Lazaridis et al. (2022) — The genetic history of the Southern Arc: A bridge between West Asia and Europe. Science 377(6609), eabm4247.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default J2a_mt;
