/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup L3c.
 */

import type { Haplogroup } from "@/types/haplogroup";

const L3c_mt: Haplogroup = {
  id: "L3c_mt",
  name: "L3c (mtDNA)",
  type: "mtDNA",
  parent: "L3",
  children: [],
  formed: "~55,000 BCE",
  mrca: "~40,000 BCE",
  origin: {
    region: "East Africa",
    period: "Late Middle Stone Age / Early Late Stone Age",
    coordinates: [37, 5],
  },
  description:
    "Mitochondrial haplogroup L3c is an East African subclade of L3 found primarily in Ethiopia, Somalia, Sudan, and the Great Lakes region of East Africa. L3c is found at 2–6% frequencies in these populations and represents one of several L3 subclades that diversified in East Africa before the major Out-of-Africa migration. L3 as a whole is particularly significant because it is the parent haplogroup of both the M and N macrohaplogroups, which together encompass nearly all non-African mtDNA diversity. L3c reflects the deep diversity of L3 that remained in Africa while some L3 lineages (M and N) expanded out of Africa to populate the rest of the world.",
  interestingFact:
    "L3c belongs to one of the most pivotal branches in human evolution: the L3 haplogroup gave rise to all the mtDNA lineages found outside Africa today. While L3c stayed in East Africa, its 'cousins' — the M and N super-haplogroups — left Africa approximately 70,000 years ago and eventually populated every continent on Earth.",
  distribution: [
    { ethnicity: "Ethiopians (Amhara)", region: "East Africa", percentage: 5, sampleSize: 300 },
    { ethnicity: "Somalis", region: "East Africa", percentage: 4, sampleSize: 200 },
    { ethnicity: "Sudanese", region: "East Africa", percentage: 3, sampleSize: 250 },
    { ethnicity: "Kenyans", region: "East Africa", percentage: 3, sampleSize: 280 },
    { ethnicity: "Tanzanians", region: "East Africa", percentage: 2, sampleSize: 250 },
  ],
  statistics: {
    modernFrequency: "~2–6% in East Africa",
    peakRegion: "Ethiopia / Horn of Africa",
    estimatedCarriers: 5_000_000,
  },
  tags: ["mtDNA", "East Africa", "Ethiopia", "Horn of Africa", "L3-branch", "African lineage"],
  references: [
    "Gonder et al. (2007) — Whole-mtDNA genome sequence analysis of ancient African lineages. Molecular Biology and Evolution 24(3), 757–768.",
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Soares et al. (2012) — The expansion of mtDNA haplogroup L3 within and out of Africa. Molecular Biology and Evolution 29(3), 915–927.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default L3c_mt;
