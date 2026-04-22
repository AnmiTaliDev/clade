/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C2b (L1373).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C2b: Haplogroup = {
  id: "C2b",
  name: "C2b (L1373)",
  type: "Y-DNA",
  parent: "C2",
  children: ["C2b1a1"],
  formed: "~30,000 BCE",
  mrca: "~15,000 BCE",
  origin: {
    region: "Central Asia / Siberia",
    period: "Upper Paleolithic",
    coordinates: [100, 52],
  },
  description:
    "Haplogroup C2b (L1373) is the primary northern branch of C2. It is the dominant lineage among Mongolic and Tungusic peoples and is widely distributed across Central Asia and Siberia. This branch is famous for its association with the great nomadic empires of the steppe, and it includes the specific lineage that crossed into North America among Na-Dené speakers.",
  interestingFact:
    "C2b-L1373 is the ancestral lineage for the 'Star Cluster', the most successful reproductive lineage in medieval history.",
  distribution: [
    {
      ethnicity: "Mongols",
      region: "East Asia / Central Asia",
      percentage: 55,
      sampleSize: 500,
    },
    { ethnicity: "Evenks", region: "Siberia", percentage: 60, sampleSize: 150 },
    {
      ethnicity: "Kazakhs",
      region: "Central Asia",
      percentage: 35,
      sampleSize: 600,
    },
    {
      ethnicity: "Dene",
      region: "North America",
      percentage: 10,
      sampleSize: 100,
    },
  ],
  statistics: {
    modernFrequency: "~1.5% of global male population",
    peakRegion: "Mongolia / Siberia",
    estimatedCarriers: 50_000_000,
  },
  tags: ["Central Asia", "Siberia", "Nomadic", "Steppe", "Mongols"],
  references: [
    "Dulik et al. (2012) — Y-chromosome analysis in Athapaskan-speaking populations from central Alaska and western Canada. American Journal of Physical Anthropology.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C2b;
