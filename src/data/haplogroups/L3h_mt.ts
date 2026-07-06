/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup L3h.
 */

import type { Haplogroup } from "@/types/haplogroup";

const L3h_mt: Haplogroup = {
  id: "L3h_mt",
  name: "L3h (mtDNA)",
  type: "mtDNA",
  parent: "L3",
  children: [],
  formed: "~50,000 BCE",
  mrca: "~35,000 BCE",
  origin: {
    region: "Ethiopia / Northeast Africa",
    period: "Late Stone Age",
    coordinates: [39, 9],
  },
  description:
    "Mitochondrial haplogroup L3h is an Ethiopian-specific subclade of L3 found primarily in the Horn of Africa, particularly in Ethiopia and neighboring regions. L3h is found at moderate frequencies (3–8%) in Ethiopian populations such as the Amhara, Oromo, and Somali, and is particularly associated with the unique genetic heritage of the Ethiopian highland peoples. L3h is one of several Ethiopia-specific L3 lineages that reflect the deep, complex population history of the region — a crossroads of ancient African populations that has maintained extraordinary genetic diversity for tens of thousands of years. Ethiopia's position as a genetic refugium during the last glacial maximum may have contributed to the diversification of L3 lineages including L3h.",
  interestingFact:
    "Ethiopia harbors the highest diversity of L3 subclades of any region in Africa, suggesting that Ethiopia (or nearby East Africa) was the original homeland of L3 before some lineages left Africa. L3h, as an Ethiopia-specific branch, may represent the descendants of populations that remained in the L3 heartland while other lineages spread out across the continent and beyond.",
  distribution: [
    { ethnicity: "Ethiopians (Amhara)", region: "East Africa", percentage: 6, sampleSize: 300 },
    { ethnicity: "Ethiopians (Oromo)", region: "East Africa", percentage: 5, sampleSize: 280 },
    { ethnicity: "Somalis", region: "East Africa", percentage: 4, sampleSize: 200 },
    { ethnicity: "Eritreans", region: "East Africa", percentage: 5, sampleSize: 150 },
    { ethnicity: "Sudanese", region: "East Africa", percentage: 2, sampleSize: 250 },
  ],
  statistics: {
    modernFrequency: "~3–8% in Ethiopia / Horn of Africa",
    peakRegion: "Ethiopian highlands",
    estimatedCarriers: 4_000_000,
  },
  tags: ["mtDNA", "Ethiopia", "Horn of Africa", "East Africa", "L3-branch", "African lineage", "Amhara"],
  references: [
    "Kivisild et al. (2004) — Ethiopian mitochondrial DNA heritage: tracking gene flow across and around the gate of tears. American Journal of Human Genetics 75(5), 752–770.",
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Gonder et al. (2007) — Whole-mtDNA genome sequence analysis of ancient African lineages. Molecular Biology and Evolution 24(3), 757–768.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default L3h_mt;
