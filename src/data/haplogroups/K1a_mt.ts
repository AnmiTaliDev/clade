/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup K1a.
 */

import type { Haplogroup } from "@/types/haplogroup";

const K1a_mt: Haplogroup = {
  id: "K1a_mt",
  name: "K1a",
  type: "mtDNA",
  parent: "K1_mt",
  children: [],
  formed: "~18,000 BCE",
  mrca: "~12,000 BCE",
  origin: {
    region: "Near East / Levant",
    period: "Late Upper Paleolithic / Epipaleolithic",
    coordinates: [35, 33],
  },
  description:
    "Haplogroup K1a is the most common and diverse subclade of K1, containing dozens of subclades and found across Europe, the Near East, and North Africa. K1a is particularly associated with Near Eastern and Jewish populations, and is the primary K subclade found at elevated frequencies in Ashkenazi Jews (~32% of all K in Ashkenazi is K1a1b1a). K1a was spread into Europe predominantly by Neolithic farmers from the Levant and Anatolia and has persisted in European populations since the Neolithic. Its extraordinary diversity suggests it underwent rapid population growth in the Near East before its carriers migrated into Europe.",
  interestingFact:
    "K1a1b1a is one of the four founding Ashkenazi Jewish mtDNA haplogroups (along with K1a9, K2a2a, and N1b2), carried by an estimated one-quarter of all Ashkenazi Jewish women. Genetic studies suggest all four of these founding lineages trace to women who lived in the Near East between 10,000 and 2,000 years ago, and they were established in the Ashkenazi population in Europe within the last 2,000 years.",
  distribution: [
    { ethnicity: "Ashkenazi Jews", region: "Europe / Near East", percentage: 25, sampleSize: 500 },
    { ethnicity: "Sephardic Jews", region: "Near East / Mediterranean", percentage: 10, sampleSize: 300 },
    { ethnicity: "Druze", region: "Near East", percentage: 12, sampleSize: 200 },
    { ethnicity: "Turks", region: "Anatolia", percentage: 6, sampleSize: 250 },
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 3, sampleSize: 1000 },
    { ethnicity: "Egyptians", region: "North Africa", percentage: 4, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~4% globally; up to 25% in Ashkenazi Jews",
    peakRegion: "Near East / Ashkenazi Jewish diaspora",
    estimatedCarriers: 35_000_000,
  },
  tags: ["Ashkenazi", "Near East", "Jewish", "Neolithic", "Levant", "Europe", "mtDNA"],
  references: [
    "Behar et al. (2006) — The matrilineal ancestry of Ashkenazi Jewry: portrait of a recent founder event. American Journal of Human Genetics 78(3), 487–497.",
    "Costa et al. (2013) — A substantial prehistoric European ancestry amongst Ashkenazi maternal lineages. Nature Communications 4, 2543.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default K1a_mt;
