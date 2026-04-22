/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1b2a (M38).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1b2a: Haplogroup = {
  id: "C1b2a",
  name: "C1b2a (M38)",
  type: "Y-DNA",
  parent: "C1b2",
  children: [],
  formed: "~44,000 BCE",
  mrca: "~10,000 BCE",
  origin: {
    region: "Melanesia / Eastern Indonesia",
    period: "Upper Paleolithic / Mesolithic",
    coordinates: [135, -5],
  },
  description:
    "Haplogroup C1b2a (M38) is a major paternal lineage found predominantly in the Pacific Islands. It reaches its highest frequencies in Melanesia (especially the Solomon Islands and Fiji), Polynesia (Samoa, Tonga, Maori), and eastern Indonesia (Sumba, Flores, Moluccas). Unlike the Australian branch, C1b2a was deeply involved in the complex migrations through the Indonesian archipelago and into the vast Pacific Ocean, becoming a foundational lineage for many Austronesian-speaking seafaring cultures.",
  interestingFact:
    "C1b2a is found at nearly 40-50% in some populations of Sumba and Flores, marking a genetic boundary between the primarily Asian-derived lineages of Western Indonesia and the Pacific-derived lineages of Eastern Indonesia.",
  distribution: [
    { ethnicity: "Polynesians", region: "Oceania", percentage: 20, sampleSize: 400 },
    { ethnicity: "Eastern Indonesians", region: "Southeast Asia", percentage: 35, sampleSize: 500 },
    { ethnicity: "Solomon Islanders", region: "Oceania", percentage: 40, sampleSize: 150 },
    { ethnicity: "Fijians", region: "Oceania", percentage: 15, sampleSize: 200 },
    { ethnicity: "Papuans (Coastal)", region: "Oceania", percentage: 12, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~0.1% of global male population",
    peakRegion: "Melanesia / Eastern Indonesia",
    estimatedCarriers: 5_000_000,
  },
  tags: ["Oceania", "Melanesia", "Polynesia", "Maritime", "Indonesia", "Pacific"],
  references: [
    "Karafet et al. (2010) — Major east-west division underlies Y chromosome stratification across Indonesia. Molecular Biology and Evolution 27(8), 1833–1844.",
    "Kayser et al. (2006) — Melanesian and Asian origins of Polynesians: mtDNA and Y chromosome evidence. American Journal of Human Genetics 79(1), 64–76.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1b2a;
