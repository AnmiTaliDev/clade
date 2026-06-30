/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup A2.
 */

import type { Haplogroup } from "@/types/haplogroup";

const A2_mt: Haplogroup = {
  id: "A2_mt",
  name: "A2",
  type: "mtDNA",
  parent: "A_mt",
  children: [],
  formed: "~15,000 BCE",
  mrca: "~12,000 BCE",
  origin: {
    region: "Beringia / Americas",
    period: "Late Upper Paleolithic",
    coordinates: [-150, 65],
  },
  description:
    "Haplogroup A2 (mtDNA) is the dominant Native American subclade of haplogroup A, one of the four founding mitochondrial lineages of the Indigenous peoples of the Americas (along with B2, C1, and D1). A2 is found across the entire length of the Americas, from Alaska and Canada in the north to Patagonia in the south, reflecting its presence in the founding Beringian population that crossed into the Americas approximately 15,000–20,000 years ago. A2 is the most common founding haplogroup in North America and is found at particularly high frequencies in populations of the Canadian Arctic and among the Athabascan-speaking peoples.",
  interestingFact:
    "A2 is the defining mtDNA haplogroup of the Na-Dene linguistic group — including the Athabascan-speaking peoples of northwestern North America and the Apache and Navajo of the southwestern United States. The distinctive distribution of A2 relative to other founding haplogroups has been used as evidence supporting a second, later wave of migration from Beringia (the Na-Dene migration), separate from the initial peopling of the Americas.",
  distribution: [
    { ethnicity: "Navajo", region: "North America (Southwest)", percentage: 60, sampleSize: 150 },
    { ethnicity: "Apache", region: "North America (Southwest)", percentage: 55, sampleSize: 100 },
    { ethnicity: "Athabascans", region: "North America (Northwest)", percentage: 70, sampleSize: 120 },
    { ethnicity: "Aleut", region: "North America (Alaska)", percentage: 45, sampleSize: 100 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 20, sampleSize: 800 },
    { ethnicity: "Quechua", region: "South America (Andes)", percentage: 15, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~15-20% in Native American populations",
    peakRegion: "North America / Arctic",
    estimatedCarriers: 15_000_000,
  },
  tags: ["Americas", "Native Americans", "Beringia", "Na-Dene", "Athabascan", "Navajo", "Apache", "Founding lineage", "mtDNA"],
  references: [
    "Achilli et al. (2008) — The phylogeny of the four pan-American MtDNA haplogroups: implications for evolutionary and disease studies. PLOS ONE 3(3), e1764.",
    "Perego et al. (2010) — The initial peopling of the Americas: a growing number of founding mitochondrial genomes from Beringia. Genome Research 20(9), 1174–1179.",
    "Schurr et al. (1990) — Amerindian mitochondrial DNAs have rare Asian mutations at high frequencies, suggesting they derived from four primary maternal lineages. American Journal of Human Genetics 46(3), 613–623.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default A2_mt;
