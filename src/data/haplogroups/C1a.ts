/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1a (CTS11043).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1a: Haplogroup = {
  id: "C1a",
  name: "C1a (CTS11043)",
  type: "Y-DNA",
  parent: "C1",
  children: ["C1a1", "C1a2"],
  formed: "~44,000 BCE",
  mrca: "~43,000 BCE",
  origin: {
    region: "West Asia or Middle East",
    period: "Upper Paleolithic",
    coordinates: [45, 35],
  },
  description:
    "Haplogroup C1a (CTS11043) is a remarkably diverse lineage that split over 40,000 years ago into two geographically isolated branches that followed very different paths. One branch, C1a1, migrated eastward and became a foundational lineage in Japan. The other, C1a2, migrated westward and became one of the first Homo sapiens lineages to settle in Europe. This ancient split represents one of the most extreme examples of geographical bifurcation in a human paternal lineage.",
  interestingFact:
    "The split between the ancestors of C1a1 (Japan) and C1a2 (Europe) happened so long ago that their modern descendants share no common history other than their shared origin in the Middle East nearly 45,000 years ago.",
  distribution: [
    { ethnicity: "Japanese (C1a1 branch)", region: "East Asia", percentage: 5 },
    { ethnicity: "Europeans (C1a2 branch)", region: "Europe", percentage: 0.1 },
  ],
  statistics: {
    modernFrequency: "<0.1% of global male population",
    peakRegion: "Japan (for C1a1) / Scattered (for C1a2)",
    estimatedCarriers: 4_600_000,
  },
  tags: ["Eurasian", "Paleolithic", "Bifurcation", "Ancestral", "West Asia"],
  references: [
    "Zhong et al. (2010) — Global distribution of Y-chromosome haplogroup C reveals the prehistoric migration routes of African exodus and reconvergence in East Asia. Journal of Human Genetics 55, 428–435.",
    "Fu et al. (2016) — The genetic history of Ice Age Europe. Nature 534, 200–205.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1a;
