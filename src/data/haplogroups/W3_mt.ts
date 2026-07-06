/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup W3.
 */

import type { Haplogroup } from "@/types/haplogroup";

const W3_mt: Haplogroup = {
  id: "W3_mt",
  name: "W3 (mtDNA)",
  type: "mtDNA",
  parent: "W_mt",
  children: [],
  formed: "~15,000 BCE",
  mrca: "~8,000 BCE",
  origin: {
    region: "Near East / South Asia",
    period: "Epipaleolithic / Neolithic",
    coordinates: [55, 30],
  },
  description:
    "Mitochondrial haplogroup W3 is a subclade of W distributed across the Near East, South Asia, and parts of Europe. W3 is found at 1–4% frequencies in Iran, Pakistan, northwestern India, and the Arabian Peninsula, with lower frequencies in Eastern Europe and Central Asia. Like its parent W, W3 originated in the Near East or South Asian corridor and was likely carried westward along with other W subclades during Neolithic expansions. W3 contributes to the complex mix of Near Eastern and South Asian maternal lineages found across the ancient Silk Road corridor and may reflect population movements associated with the spread of agriculture and later Bronze Age migrations.",
  interestingFact:
    "Haplogroup W3 traces the ancient genetic connections between the Near East and South Asia — a corridor that was the pathway for some of humanity's most transformative cultural exchanges, including the spread of agriculture, domesticated animals, and the Indo-Iranian languages that eventually gave rise to the Indo-European language family.",
  distribution: [
    { ethnicity: "Iranians", region: "Near East", percentage: 3, sampleSize: 350 },
    { ethnicity: "Pakistanis", region: "South Asia", percentage: 2.5, sampleSize: 400 },
    { ethnicity: "North Indians", region: "South Asia", percentage: 2, sampleSize: 500 },
    { ethnicity: "Afghans", region: "Central Asia", percentage: 3, sampleSize: 200 },
    { ethnicity: "Georgians", region: "Caucasus", percentage: 2, sampleSize: 200 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 1.5, sampleSize: 350 },
  ],
  statistics: {
    modernFrequency: "~1–4% in Near East and South Asia; rare in Europe",
    peakRegion: "Iran / Pakistan",
    estimatedCarriers: 7_000_000,
  },
  tags: ["mtDNA", "Near East", "South Asia", "Iran", "W-branch", "Neolithic", "Silk Road"],
  references: [
    "Quintana-Murci et al. (2004) — Where West Meets East: The Complex mtDNA Landscape of the Southwest and Central Asian Corridor. American Journal of Human Genetics 74(5), 827–845.",
    "Metspalu et al. (2004) — Most of the extant mtDNA boundaries in south and southwest Asia were likely shaped during the initial settlement of Eurasia. BMC Genetics 5:26.",
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default W3_mt;
