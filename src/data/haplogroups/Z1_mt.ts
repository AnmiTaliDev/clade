/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup Z1.
 */

import type { Haplogroup } from "@/types/haplogroup";

const Z1_mt: Haplogroup = {
  id: "Z1_mt",
  name: "Z1",
  type: "mtDNA",
  parent: "Z_mt",
  children: [],
  formed: "~18,000 BCE",
  mrca: "~12,000 BCE",
  origin: {
    region: "Siberia / Northeast Asia",
    period: "Late Upper Paleolithic",
    coordinates: [120, 55],
  },
  description:
    "Haplogroup Z1 is a subclade of Z, itself a rare M-derived haplogroup distributed across Siberia, East Asia, and some European populations. Z1 is found in populations of Siberia, Korea, and Finland, and the presence of Z lineages in both Siberia and Scandinavia (particularly the Saami) has been interpreted as evidence of ancient population contact between northeastern Siberia and the circum-Arctic peoples of Europe. Z has been associated with early circum-Arctic populations and those who expanded along the coastal tundra environments north of the Last Glacial Maximum ice sheets.",
  interestingFact:
    "The presence of haplogroup Z (including Z1) in both northeastern Siberia and among the Saami of Scandinavia has been used to argue for ancient contacts between Siberian and Scandinavian populations — possibly linked to the late Paleolithic or Mesolithic spread of cultures around the Arctic fringe. The Saami carry Z at ~1–2%, a frequency remarkable for a haplogroup otherwise concentrated in Siberia, pointing to an ancient gene flow event from the east.",
  distribution: [
    { ethnicity: "Evenks (Siberia)", region: "Siberia", percentage: 15, sampleSize: 100 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 2, sampleSize: 600 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 1.5, sampleSize: 1000 },
    { ethnicity: "Saami", region: "Northern Europe", percentage: 2, sampleSize: 200 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 0.5, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~0.2% globally; ~2-15% in Siberian populations",
    peakRegion: "Siberia / Northeast Asia",
    estimatedCarriers: 2_000_000,
  },
  tags: ["Siberia", "Korea", "Japan", "Saami", "Arctic", "Paleolithic", "circum-Arctic", "mtDNA"],
  references: [
    "Derenko et al. (2007) — Mitochondrial DNA variation in two South Siberian Aboriginal populations. Human Biology 79(4), 349–373.",
    "Malyarchuk et al. (2010) — The peopling of Europe from the mitochondrial haplogroup U5 perspective. PLOS ONE 5(4), e10285.",
  ],
  featured: false,
  addedAt: "2026-07-01",
};

export default Z1_mt;
