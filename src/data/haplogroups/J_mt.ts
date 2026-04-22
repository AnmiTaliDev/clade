/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup J (Jasmine).
 */

import type { Haplogroup } from "@/types/haplogroup";

const J_mt: Haplogroup = {
  id: "J_mt",
  name: "J (mtDNA)",
  type: "mtDNA",
  parent: "JT_mt",
  children: [],
  formed: "~43,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "Near East / Caucasus",
    period: "Upper Paleolithic",
    coordinates: [45, 40],
  },
  description:
    "Mitochondrial haplogroup J, often referred to as 'Jasmine' in popular literature, is one of the most significant maternal lineages in Western Eurasia. It is historically famous for its strong correlation with the Neolithic expansion of farming from the Near East into Europe approximately 8,000 to 10,000 years ago. Unlike some other European lineages with deep Paleolithic roots on the continent, J represents a clear genetic marker of the agricultural revolution that transformed European prehistory.",
  interestingFact:
    "Certain polymorphisms within haplogroup J have been linked in scientific studies to increased longevity and specific mitochondrial efficiency, although these traits are often highly dependent on local environmental factors and population history.",
  distribution: [
    { ethnicity: "Bedouins (Arabia)", region: "Middle East", percentage: 25, sampleSize: 150 },
    { ethnicity: "Cornish", region: "Western Europe", percentage: 20, sampleSize: 200 },
    { ethnicity: "Yemenis", region: "Middle East", percentage: 22, sampleSize: 180 },
    { ethnicity: "North Ossetians", region: "Caucasus", percentage: 16, sampleSize: 120 },
    { ethnicity: "Europeans (Average)", region: "Europe", percentage: 11, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~10% of European and Near Eastern populations",
    peakRegion: "Middle East / Europe",
    estimatedCarriers: 180_000_000,
  },
  tags: ["mtDNA", "Neolithic", "Agriculture", "Europe", "Middle East"],
  references: [
    "Soares et al. (2010) — The archaeogenetics of Europe. Current Biology 20(4), R174–R183.",
    "Pala et al. (2012) — Mitochondrial DNA signals of late glacial recolonization of Europe from Near Eastern refugia. American Journal of Human Genetics 90(5), 915–924.",
    "Sykes (2001) — The Seven Daughters of Eve. W. W. Norton & Company.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default J_mt;
