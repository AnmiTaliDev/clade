/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup T (M184).
 */

import type { Haplogroup } from "@/types/haplogroup";

const T: Haplogroup = {
  id: "T",
  name: "T (M184)",
  type: "Y-DNA",
  parent: "LT",
  children: [],
  formed: "~40,000 BCE",
  mrca: "~24,000 BCE",
  origin: {
    region: "Near East",
    period: "Upper Paleolithic",
    coordinates: [35, 32],
  },
  description:
    "Haplogroup T is a paternal lineage that, while globally rare, exhibits a unique and patchy distribution with high-frequency hotspots in East Africa, the Middle East, and parts of Southern Europe. It is considered one of the primary lineages that moved into Europe with the first Neolithic farmers from the Levant. T is particularly notable for its high concentration among certain Somali clans and its presence in both Jewish and Mediterranean populations, suggesting a complex history of maritime and terrestrial migrations across the ancient world.",
  interestingFact:
    "Thomas Jefferson, the third President of the United States, was found to belong to a European branch of Haplogroup T, specifically T-L206, which likely arrived in the British Isles during the Roman period or earlier Neolithic expansions.",
  distribution: [
    { ethnicity: "Somalis (Dir & Isaaq)", region: "East Africa", percentage: 80, sampleSize: 200 },
    { ethnicity: "Djiboutians", region: "East Africa", percentage: 50, sampleSize: 100 },
    { ethnicity: "Sicilians (Sciacca)", region: "Southern Europe", percentage: 18, sampleSize: 150 },
    { ethnicity: "Sephardic Jews", region: "Middle East", percentage: 15, sampleSize: 300 },
    { ethnicity: "Emiratis", region: "Middle East", percentage: 19, sampleSize: 120 },
  ],
  statistics: {
    modernFrequency: "~1% of global male population",
    peakRegion: "Horn of Africa / Middle East",
    estimatedCarriers: 40_000_000,
  },
  tags: ["Near East", "Neolithic", "Maritime", "East Africa", "Mediterranean"],
  references: [
    "Mendez et al. (2011) — Haplogroup T, the first case of a presidential Y chromosome of Near Eastern origin in the United States. Journal of Genetic Genealogy 7, 1–11.",
    "King et al. (2011) — The coming of the Greeks to Provence and Algeria: Y-chromosome models of archaic Greek colonization. PLOS ONE 6(3), e17644.",
    "Underhill et al. (2001) — The phylogeography of Y chromosome binary haplotypes and the origins of modern human populations. Annals of Human Genetics 65, 43–62.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default T;
