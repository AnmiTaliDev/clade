/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-L23.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_L23: Haplogroup = {
  id: "R1b-L23",
  name: "R1b-L23",
  type: "Y-DNA",
  parent: "R1b-M269",
  children: ["R1b-L51", "R1b-Z2103"],
  formed: "~4,500 BCE",
  mrca: "~4,300 BCE",
  origin: {
    region: "Pontic-Caspian Steppe",
    period: "Copper Age (Yamnaya)",
    coordinates: [45, 48],
  },
  description:
    "R1b-L23 is the primary lineage found in the ancient Yamnaya culture remains. It represents the first major expansion of R1b across the Eurasian steppe. From this node, the lineage split into two massive branches: the western L51 (which would dominate Western Europe) and the eastern Z2103 (which remained common in the steppe, Caucasus, and Near East). L23 is the direct genetic link between the Bronze Age steppe pastoralists and the modern populations of Europe and West Asia.",
  interestingFact:
    "Ancient DNA analysis of Yamnaya burials from Russia and Ukraine shows that nearly all males belonged to haplogroup R1b-L23, confirming it as the founding lineage of the Indo-European steppe expansion.",
  distribution: [
    { ethnicity: "Armenians", region: "Caucasus", percentage: 25 },
    { ethnicity: "Bashkirs", region: "Urals", percentage: 20 },
    { ethnicity: "Europeans (Total)", region: "Europe", percentage: 60, note: "via L51 branch" },
  ],
  statistics: {
    modernFrequency: "~8% of global male population",
    peakRegion: "Western Europe / Caucasus",
    estimatedCarriers: 300_000_000,
  },
  tags: ["Yamnaya", "Steppe", "Bronze Age", "Indo-European", "Ancestral"],
  references: [
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature.",
    "Allentoft et al. (2015) — Population genomics of Bronze Age Eurasia. Nature.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_L23;
