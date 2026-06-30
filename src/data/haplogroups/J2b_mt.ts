/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup J2b.
 */

import type { Haplogroup } from "@/types/haplogroup";

const J2b_mt: Haplogroup = {
  id: "J2b_mt",
  name: "J2b",
  type: "mtDNA",
  parent: "J2_mt",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~8,000 BCE",
  origin: {
    region: "Near East / Anatolia",
    period: "Epipaleolithic",
    coordinates: [35, 37],
  },
  description:
    "Haplogroup J2b is a rare subclade of mtDNA J2, with a distribution centered in the Near East and Mediterranean regions. It is most common in populations of the Levant, Turkey, and parts of Southern Europe, particularly Greece and Italy. J2b has been found in ancient DNA from Neolithic Anatolian samples, indicating its antiquity and connection to early farming populations that migrated from the Near East into Europe. It is rarer than J2a and makes up only a small fraction of total J2 diversity.",
  interestingFact:
    "J2b has been identified in ancient samples from the Chalcolithic period in the Near East, providing evidence that this lineage was part of the diverse maternal gene pool of early complex societies of the Fertile Crescent before the Bronze Age migrations that reshaped the region's genetic landscape.",
  distribution: [
    { ethnicity: "Levantine Arabs", region: "Near East", percentage: 2, sampleSize: 200 },
    { ethnicity: "Turks", region: "Anatolia", percentage: 1.5, sampleSize: 250 },
    { ethnicity: "Greeks", region: "Southern Europe", percentage: 1.2, sampleSize: 200 },
    { ethnicity: "Italians", region: "Southern Europe", percentage: 0.8, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~0.5% in Near East and Mediterranean",
    peakRegion: "Levant / Anatolia",
    estimatedCarriers: 5_000_000,
  },
  tags: ["Near East", "Anatolia", "Levant", "Neolithic", "Mediterranean", "mtDNA"],
  references: [
    "Lazaridis et al. (2016) — Genomic insights into the origin of farming in the ancient Near East. Nature 536, 419–424.",
    "Richards et al. (2000) — Tracing European founder lineages in the Near Eastern mtDNA pool. American Journal of Human Genetics 67(5), 1251–1276.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default J2b_mt;
