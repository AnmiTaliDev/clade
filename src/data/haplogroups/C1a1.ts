/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1a1 (M8).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1a1: Haplogroup = {
  id: "C1a1",
  name: "C1a1 (M8)",
  type: "Y-DNA",
  parent: "C1a",
  children: [],
  formed: "~45,000 BCE",
  mrca: "~10,000 BCE",
  origin: {
    region: "East Asia (Japan)",
    period: "Upper Paleolithic / Jomon",
    coordinates: [138, 36],
  },
  description:
    "Haplogroup C1a1 (M8) is one of the most distinctive and ancient paternal lineages of Japan. It is widely regarded as a signature lineage of the Jomon people, the indigenous hunter-gatherers who inhabited the Japanese archipelago for over 10,000 years before the arrival of agriculturalists from the mainland. While it exists alongside the more common D-M174 lineage, C1a1 represents a separate and even earlier wave of migration that reached Japan via a coastal route.",
  interestingFact:
    "C1a1 is found almost exclusively in Japan, with its highest frequencies in the Ryukyu Islands and among the Ainu descendants, making it a crucial genetic link to Japan's prehistoric past.",
  distribution: [
    { ethnicity: "Japanese", region: "East Asia", percentage: 5, sampleSize: 1000 },
    { ethnicity: "Ryukyuans", region: "East Asia", percentage: 4, sampleSize: 300 },
    { ethnicity: "Ainu descendants", region: "East Asia", percentage: 3, sampleSize: 50 },
  ],
  statistics: {
    modernFrequency: "~0.1% of global male population",
    peakRegion: "Japan",
    estimatedCarriers: 3_500_000,
  },
  tags: ["Japan", "Jomon", "Indigenous", "East Asia", "Islands"],
  references: [
    "Zhong et al. (2010) — Global distribution of Y-chromosome haplogroup C reveals the prehistoric migration routes of African exodus and reconvergence in East Asia. Journal of Human Genetics 55, 428–435.",
    "Hammer et al. (2006) — Dual origins of the Japanese: common ground for hunter-gatherer and farmer Y chromosomes. Journal of Human Genetics 51, 47–58.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1a1;
