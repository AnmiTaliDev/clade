/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup L2c.
 */

import type { Haplogroup } from "@/types/haplogroup";

const L2c_mt: Haplogroup = {
  id: "L2c_mt",
  name: "L2c",
  type: "mtDNA",
  parent: "L2",
  children: [],
  formed: "~58,000 BCE",
  mrca: "~35,000 BCE",
  origin: {
    region: "West Africa",
    period: "Middle Stone Age",
    coordinates: [0, 10],
  },
  description:
    "Haplogroup L2c is a subclade of L2 found primarily in West Africa, particularly in the Guinea Coast and Senegambian regions. It is part of the Western African L2 diversity that was distributed broadly across the coastal belt of West Africa in prehistoric times. L2c is less common than L2a but represents a distinct branch that survived multiple prehistoric population movements within Africa. Like other L2 subclades, L2c has been found in populations of the African diaspora due to the trans-Atlantic slave trade.",
  interestingFact:
    "Genetic studies of slave trade routes have shown that L2 subclades including L2c carry detectable signatures of specific West African regional origins. Researchers have used the distribution of specific L2 subclades in African-American and Caribbean populations to map the geographic origins of enslaved Africans to specific coastal regions of West Africa, providing genetic evidence to complement historical records.",
  distribution: [
    { ethnicity: "Senegambians", region: "West Africa", percentage: 6, sampleSize: 150 },
    { ethnicity: "Guineans", region: "West Africa", percentage: 5, sampleSize: 120 },
    { ethnicity: "Sierra Leoneans", region: "West Africa", percentage: 4, sampleSize: 100 },
    { ethnicity: "African Americans", region: "North America", percentage: 2, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~0.8% globally; ~4-6% in West Africa",
    peakRegion: "West Africa (Guinea Coast / Senegambia)",
    estimatedCarriers: 7_000_000,
  },
  tags: ["West Africa", "Senegambia", "Guinea", "African diaspora", "Sub-Saharan", "mtDNA"],
  references: [
    "Salas et al. (2002) — The making of the African mtDNA landscape. American Journal of Human Genetics 71(5), 1082–1111.",
    "Salas et al. (2004) — The African diaspora: mitochondrial DNA and the Atlantic slave trade. American Journal of Human Genetics 74(3), 454–465.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default L2c_mt;
