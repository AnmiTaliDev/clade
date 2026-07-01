/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup L0f.
 */

import type { Haplogroup } from "@/types/haplogroup";

const L0f_mt: Haplogroup = {
  id: "L0f_mt",
  name: "L0f",
  type: "mtDNA",
  parent: "L0",
  children: [],
  formed: "~100,000 BCE",
  mrca: "~60,000 BCE",
  origin: {
    region: "East Africa (Tanzania / Mozambique)",
    period: "Middle Stone Age",
    coordinates: [35, -8],
  },
  description:
    "Haplogroup L0f is one of the deep branches of L0, the oldest macrohaplogroup in the human mtDNA tree. L0f is found in Tanzania and Mozambique among Khoisan-related populations and various East African groups. It represents one of the most ancient surviving maternal lineages in humanity, diverging from the main L0 trunk hundreds of thousands of years ago. L0f and its sister lineages in L0 provide evidence for the extraordinary depth of genetic diversity in sub-Saharan Africa, particularly in East and Southern Africa.",
  interestingFact:
    "L0 is the oldest surviving human mtDNA macrohaplogroup, and its deep branches like L0f represent some of the most ancient maternal lineages on Earth. The coalescence date of L0 with the rest of the human mtDNA tree coincides with estimates for the emergence of anatomically modern Homo sapiens in Africa, making L0 and its sub-branches direct witnesses to the earliest period of modern human evolution in Africa.",
  distribution: [
    { ethnicity: "Tanzanian hunter-gatherers (Sandawe)", region: "East Africa", percentage: 12, sampleSize: 100 },
    { ethnicity: "Tanzanian pastoralists", region: "East Africa", percentage: 5, sampleSize: 150 },
    { ethnicity: "Mozambicans", region: "East Africa", percentage: 4, sampleSize: 100 },
    { ethnicity: "East Africans (average)", region: "East Africa", percentage: 2, sampleSize: 500 },
  ],
  statistics: {
    modernFrequency: "~0.3% globally; ~3-12% in East African hunter-gatherers",
    peakRegion: "East Africa (Tanzania)",
    estimatedCarriers: 2_000_000,
  },
  tags: ["East Africa", "Tanzania", "Khoisan", "Ancient", "Hunter-gatherer", "L0", "mtDNA"],
  references: [
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Gonder et al. (2007) — Whole-mtDNA genome sequence analysis of ancient African lineages. Molecular Biology and Evolution 24(3), 757–768.",
  ],
  featured: false,
  addedAt: "2026-07-01",
};

export default L0f_mt;
