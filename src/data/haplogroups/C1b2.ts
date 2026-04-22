/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1b2 (B477).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1b2: Haplogroup = {
  id: "C1b2",
  name: "C1b2 (B477)",
  type: "Y-DNA",
  parent: "C1b",
  children: ["C1b2a", "C1b2b"],
  formed: "~46,000 BCE",
  mrca: "~45,000 BCE",
  origin: {
    region: "Southeast Asia / Sundaland",
    period: "Upper Paleolithic",
    coordinates: [115, 5],
  },
  description:
    "Haplogroup C1b2 (B477) is the primary paternal lineage associated with the settlement of Sahul (the prehistoric continent comprising Australia and New Guinea). Arising in Southeast Asia or the now-submerged continent of Sundaland, its carriers migrated eastward nearly 50,000 years ago. It serves as the common ancestor to the major lineages of Indigenous Australians and many populations across Melanesia and Polynesia. C1b2 is a critical genetic marker for one of the most significant maritime migrations in human history.",
  interestingFact:
    "C1b2 is the defining paternal lineage of the initial peopling of the Pacific, and its early split into Australian and Oceanian branches mirrors the geographical separation of these regions following the rising of sea levels at the end of the last Ice Age.",
  distribution: [
    { ethnicity: "Aboriginal Australians", region: "Australia", percentage: 45 },
    { ethnicity: "Papuans", region: "Oceania", percentage: 30 },
    { ethnicity: "Polynesians", region: "Oceania", percentage: 15 },
    { ethnicity: "Eastern Indonesians", region: "Southeast Asia", percentage: 10 },
  ],
  statistics: {
    modernFrequency: "~0.4% of global male population",
    peakRegion: "Australia / Oceania",
    estimatedCarriers: 18_000_000,
  },
  tags: ["Oceania", "Australia", "Sahul", "Maritime", "Paleolithic", "Indigenous"],
  references: [
    "Karafet et al. (2010) — Major east-west division underlies Y chromosome stratification across Indonesia. Molecular Biology and Evolution 27(8), 1833–1844.",
    "Bergström et al. (2016) — Deep roots for Aboriginal Australian Y chromosomes. Current Biology 26(6), 809–813.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1b2;
