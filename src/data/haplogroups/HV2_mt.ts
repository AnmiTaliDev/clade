/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup HV2.
 */

import type { Haplogroup } from "@/types/haplogroup";

const HV2_mt: Haplogroup = {
  id: "HV2_mt",
  name: "HV2 (mtDNA)",
  type: "mtDNA",
  parent: "HV",
  children: [],
  formed: "~28,000 BCE",
  mrca: "~18,000 BCE",
  origin: {
    region: "East Africa / Horn of Africa",
    period: "Upper Paleolithic",
    coordinates: [42, 10],
  },
  description:
    "Mitochondrial haplogroup HV2 is an East African and Near Eastern branch of HV, representing one of the oldest lineages of the HV clade. HV2 is found at moderate frequencies in Ethiopia, Somalia, and other Horn of Africa populations, as well as among some Arabian Peninsula groups, suggesting a deep connection between the East African and Near Eastern gene pools. Its presence in Ethiopia at 3–7% reflects the complex migration patterns that linked Africa and the Near East during the Paleolithic and early Holocene. HV2 is considered a marker of ancient populations at the interface of Africa and Eurasia.",
  interestingFact:
    "The presence of HV2 in both Ethiopia and the Arabian Peninsula reflects a bidirectional gene flow across the Red Sea that has occurred repeatedly over tens of thousands of years — a genetic signature of one of humanity's most ancient corridors of migration and cultural exchange.",
  distribution: [
    { ethnicity: "Ethiopians (Amhara)", region: "East Africa", percentage: 5, sampleSize: 300 },
    { ethnicity: "Somalis", region: "East Africa", percentage: 4, sampleSize: 200 },
    { ethnicity: "Yemenis", region: "Near East", percentage: 6, sampleSize: 200 },
    { ethnicity: "Egyptians", region: "North Africa", percentage: 2, sampleSize: 350 },
    { ethnicity: "Saudis", region: "Near East", percentage: 2, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~3–7% in Horn of Africa; 2–6% in Arabian Peninsula",
    peakRegion: "Horn of Africa / Yemen",
    estimatedCarriers: 8_000_000,
  },
  tags: ["mtDNA", "East Africa", "Ethiopia", "Horn of Africa", "Near East", "Arabia", "HV-branch"],
  references: [
    "Musilova et al. (2011) — Population history of the Red Sea — genetic exchanges between the Arabian Peninsula and East Africa signaled in the mitochondrial DNA HV1b2 haplogroup. BMC Evolutionary Biology 11:259.",
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Černý et al. (2011) — Out of Arabia — The settlement of island Soqotra as revealed by mitochondrial and Y chromosome genetic diversity. American Journal of Physical Anthropology 146(3), 439–452.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default HV2_mt;
