/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup L1a.
 */

import type { Haplogroup } from "@/types/haplogroup";

const L1a_mt: Haplogroup = {
  id: "L1a_mt",
  name: "L1a",
  type: "mtDNA",
  parent: "L1",
  children: [],
  formed: "~70,000 BCE",
  mrca: "~50,000 BCE",
  origin: {
    region: "East / Central Africa",
    period: "Middle Stone Age",
    coordinates: [30, 0],
  },
  description:
    "Haplogroup L1a is a subclade of L1 predominantly found in East and Central Africa. L1a is characteristic of several East African hunter-gatherer and pastoralist populations, including groups in Tanzania, Kenya, and the Congo Basin. L1a is less common than its sister branches L1b and L1c, which are more strongly associated with West African populations. L1a likely represents an ancient East African lineage that predates the Bantu expansion and has persisted in populations that maintained hunter-gatherer or early pastoralist lifestyles.",
  interestingFact:
    "L1a is found at significant frequencies in the Sandawe of Tanzania — one of only two surviving populations in the world that speak click languages outside the Khoisan family. The Sandawe's distinctive linguistic heritage (their language may be distantly related to Khoisan languages) is paralleled by their genetic distinctiveness, including elevated frequencies of ancient L0 and L1 haplogroups that distinguish them from surrounding Bantu-speaking populations.",
  distribution: [
    { ethnicity: "Sandawe (Tanzania)", region: "East Africa", percentage: 15, sampleSize: 100 },
    { ethnicity: "Hadza (Tanzania)", region: "East Africa", percentage: 8, sampleSize: 80 },
    { ethnicity: "East Africans (Nilotic)", region: "East Africa", percentage: 5, sampleSize: 200 },
    { ethnicity: "Congolese (Bantu)", region: "Central Africa", percentage: 4, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~0.5% globally; ~5-15% in East African hunter-gatherers",
    peakRegion: "East Africa (Tanzania / Kenya)",
    estimatedCarriers: 4_000_000,
  },
  tags: ["East Africa", "Tanzania", "Hunter-gatherer", "Sandawe", "Hadza", "Ancient", "mtDNA"],
  references: [
    "Tishkoff et al. (2009) — The genetic structure and history of Africans and African Americans. Science 324(5930), 1035–1044.",
    "Salas et al. (2002) — The making of the African mtDNA landscape. American Journal of Human Genetics 71(5), 1082–1111.",
  ],
  featured: false,
  addedAt: "2026-07-01",
};

export default L1a_mt;
