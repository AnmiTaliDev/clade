/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1a-M417.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1a_M417: Haplogroup = {
  id: "R1a-M417",
  name: "R1a-M417",
  type: "Y-DNA",
  parent: "R1a",
  children: ["R1a-Z282", "R1a-Z93"],
  formed: "~3,500 BCE",
  mrca: "~3,500 BCE",
  origin: {
    region: "Eastern Europe (Pontic Steppe)",
    period: "Copper Age / Early Bronze Age",
    coordinates: [35, 48],
  },
  description:
    "R1a-M417 is the most critical bottleneck and expansion node in the history of haplogroup R1a. Nearly all living carriers of R1a belong to this subclade, which arose approximately 5,500 years ago in the Pontic-Caspian steppe. It represents the core lineage of the Corded Ware and Yamnaya cultures, which carried Indo-European languages across Eurasia. M417 marks the point where R1a split into its two massive branches: the European Z282 and the Asian Z93.",
  interestingFact:
    "The expansion of M417 is so explosive that its phylogenetic tree looks like a 'starburst', indicating a period of extremely rapid population growth linked to the adoption of mobile pastoralism and the wheel in the early Bronze Age.",
  distribution: [
    { ethnicity: "Eastern Europeans", region: "Europe", percentage: 50 },
    { ethnicity: "Central Asians", region: "Central Asia", percentage: 30 },
    { ethnicity: "South Asians (North)", region: "South Asia", percentage: 25 },
  ],
  statistics: {
    modernFrequency: "~7% of global male population",
    peakRegion: "Eastern Europe / Central Asia",
    estimatedCarriers: 280_000_000,
  },
  tags: ["Indo-European", "Bronze Age", "Corded Ware", "Steppe", "Expansion"],
  references: [
    "Underhill et al. (2015) — The phylogenetic and geographic structure of Y-chromosome haplogroup R1a. European Journal of Human Genetics.",
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1a_M417;
