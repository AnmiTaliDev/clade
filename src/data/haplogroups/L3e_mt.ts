/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup L3e.
 */

import type { Haplogroup } from "@/types/haplogroup";

const L3e_mt: Haplogroup = {
  id: "L3e_mt",
  name: "L3e",
  type: "mtDNA",
  parent: "L3",
  children: [],
  formed: "~60,000 BCE",
  mrca: "~38,000 BCE",
  origin: {
    region: "West Africa / Congo Basin",
    period: "Middle Stone Age",
    coordinates: [20, 0],
  },
  description:
    "Haplogroup L3e is a major subclade of L3 and one of the most common L3 branches in sub-Saharan Africa. L3e is found at high frequencies across a broad swath of Africa from West Africa through Central Africa to East Africa, reflecting ancient population movements across the continent. It is particularly common among Bantu-speaking populations that spread from the Congo Basin across sub-Saharan Africa over the last 3,000–4,000 years. L3e is also one of the most common mtDNA haplogroups in the African diaspora of the Americas.",
  interestingFact:
    "L3e1 is among the most frequent African mtDNA haplogroups worldwide, with estimates suggesting it may be carried by over 40 million women. The Bantu expansion that carried L3e from Central Africa to Eastern and Southern Africa between 3000 BCE and 1000 CE represents one of the most dramatic demographic events in African prehistory, comparable in scale to the Neolithic spread across Eurasia.",
  distribution: [
    { ethnicity: "Zulu / Nguni (South Africa)", region: "Southern Africa", percentage: 15, sampleSize: 200 },
    { ethnicity: "Luba (DR Congo)", region: "Central Africa", percentage: 18, sampleSize: 150 },
    { ethnicity: "Kikuyu (Kenya)", region: "East Africa", percentage: 12, sampleSize: 200 },
    { ethnicity: "Yoruba (Nigeria)", region: "West Africa", percentage: 10, sampleSize: 250 },
    { ethnicity: "African Americans", region: "North America", percentage: 7, sampleSize: 500 },
    { ethnicity: "Afro-Brazilians", region: "South America", percentage: 9, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~3-4% globally; 10-18% in Bantu Africa",
    peakRegion: "Central Africa / Bantu-speaking populations",
    estimatedCarriers: 40_000_000,
  },
  tags: ["Central Africa", "Bantu", "West Africa", "East Africa", "African diaspora", "Sub-Saharan", "mtDNA"],
  references: [
    "Salas et al. (2002) — The making of the African mtDNA landscape. American Journal of Human Genetics 71(5), 1082–1111.",
    "Tishkoff et al. (2009) — The genetic structure and history of Africans and African Americans. Science 324(5930), 1035–1044.",
    "Bandelt et al. (2001) — Phylogeography of the human mitochondrial haplogroup L3e. Annals of Human Genetics 65(6), 549–563.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default L3e_mt;
