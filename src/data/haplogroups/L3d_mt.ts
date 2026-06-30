/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup L3d.
 */

import type { Haplogroup } from "@/types/haplogroup";

const L3d_mt: Haplogroup = {
  id: "L3d_mt",
  name: "L3d",
  type: "mtDNA",
  parent: "L3",
  children: [],
  formed: "~62,000 BCE",
  mrca: "~40,000 BCE",
  origin: {
    region: "West / Central Africa",
    period: "Middle Stone Age",
    coordinates: [10, 5],
  },
  description:
    "Haplogroup L3d is a subclade of L3 found primarily in West and Central Africa. L3d and its subclades are particularly common in Nigeria, Cameroon, and the Congo Basin. It is also found at elevated frequencies in the African diaspora, especially in Brazil and the Caribbean, reflecting the concentration of enslaved Africans taken from the Gulf of Guinea region. L3d represents one of the key African L3 lineages that remained in sub-Saharan Africa following the divergence that gave rise to the Out of Africa lineages.",
  interestingFact:
    "Approximately 50% of the mtDNA diversity found in modern Afro-Brazilians traces to L3 haplogroups, primarily L3b, L3d, and L3e. Brazilian genetic genealogy studies have used this to show that the majority of African-Brazilian maternal ancestry derives from Bantu-speaking populations of West-Central Africa (principally from modern Angola, Congo, and Nigeria), corresponding to the slave trade routes from those regions to Brazil.",
  distribution: [
    { ethnicity: "Nigerians (Yoruba/Igbo)", region: "West Africa", percentage: 8, sampleSize: 300 },
    { ethnicity: "Cameroonians", region: "Central Africa", percentage: 7, sampleSize: 200 },
    { ethnicity: "Congolese", region: "Central Africa", percentage: 6, sampleSize: 200 },
    { ethnicity: "Afro-Brazilians", region: "South America", percentage: 5, sampleSize: 300 },
    { ethnicity: "Afro-Caribbeans", region: "Caribbean", percentage: 4, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~2% globally; ~7% in West/Central Africa",
    peakRegion: "West Africa / Central Africa",
    estimatedCarriers: 18_000_000,
  },
  tags: ["West Africa", "Central Africa", "Congo", "African diaspora", "Bantu", "Brazil", "mtDNA"],
  references: [
    "Salas et al. (2002) — The making of the African mtDNA landscape. American Journal of Human Genetics 71(5), 1082–1111.",
    "Salas et al. (2004) — The African diaspora: mitochondrial DNA and the Atlantic slave trade. American Journal of Human Genetics 74(3), 454–465.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default L3d_mt;
