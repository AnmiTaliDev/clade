/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup J1c.
 */

import type { Haplogroup } from "@/types/haplogroup";

const J1c_mt: Haplogroup = {
  id: "J1c_mt",
  name: "J1c",
  type: "mtDNA",
  parent: "J1_mt",
  children: [],
  formed: "~11,000 BCE",
  mrca: "~7,500 BCE",
  origin: {
    region: "Near East / Anatolia",
    period: "Epipaleolithic / Pre-Pottery Neolithic",
    coordinates: [36, 37],
  },
  description:
    "Haplogroup J1c (also historically called 'Jasmine' in Bryan Sykes's Seven Daughters of Eve framework) is the most common subclade of J1 in Europe and one of the primary mtDNA lineages introduced into Europe by Neolithic farmers from the Near East. J1c accounts for approximately 3–5% of European maternal lineages and is found throughout the continent, with slightly higher frequencies in Western and Central Europe. It was one of the defining maternal haplogroups of the Linearbandkeramik (LBK) Neolithic culture, the first farmers of Central Europe.",
  interestingFact:
    "Bryan Sykes immortalized J1c as 'Jasmine' in his 2001 popular science book 'The Seven Daughters of Eve', hypothesizing that most European J-haplogroup carriers descend from a woman who lived in Syria around 10,000 BCE — one of the earliest and best-known examples of popularizing human deep ancestry. Sykes estimated that about 17% of Europeans belonged to the J clan (J1c plus related lineages).",
  distribution: [
    { ethnicity: "British", region: "Northwestern Europe", percentage: 5, sampleSize: 800 },
    { ethnicity: "Germans", region: "Central Europe", percentage: 4.5, sampleSize: 500 },
    { ethnicity: "Scandinavians", region: "Northern Europe", percentage: 4, sampleSize: 400 },
    { ethnicity: "French", region: "Western Europe", percentage: 4, sampleSize: 400 },
    { ethnicity: "Italians", region: "Southern Europe", percentage: 3.5, sampleSize: 350 },
    { ethnicity: "Syrians", region: "Near East", percentage: 5, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~3–5% in Europe; 1–2% globally",
    peakRegion: "Northwestern Europe / Near East",
    estimatedCarriers: 35_000_000,
  },
  tags: ["Europe", "Near East", "Neolithic", "LBK", "Jasmine", "Anatolian farmers", "mtDNA"],
  references: [
    "Sykes, B. (2001) — The Seven Daughters of Eve. W. W. Norton & Company.",
    "Haak et al. (2010) — Ancient DNA from European early Neolithic farmers reveals their Near Eastern affinities. PLOS Biology 8(11), e1000536.",
    "Richards et al. (2000) — Tracing European founder lineages in the Near Eastern mtDNA pool. American Journal of Human Genetics 67(5), 1251–1276.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default J1c_mt;
