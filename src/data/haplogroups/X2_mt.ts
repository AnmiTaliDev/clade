/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup X2.
 */

import type { Haplogroup } from "@/types/haplogroup";

const X2_mt: Haplogroup = {
  id: "X2_mt",
  name: "X2",
  type: "mtDNA",
  parent: "X_mt",
  children: [],
  formed: "~20,000 BCE",
  mrca: "~13,000 BCE",
  origin: {
    region: "Near East",
    period: "Upper Paleolithic",
    coordinates: [38, 35],
  },
  description:
    "Haplogroup X2 is the major subclade of the rare and enigmatic mtDNA haplogroup X. X2 is found across a uniquely wide geographic range: it is present in the Near East, North Africa, the Caucasus, and — most puzzlingly — in certain Native American populations of North America (as subclade X2a), without being found in Siberia or East Asia where genetic continuity between Asia and the Americas would be expected. This transcontinental distribution has made X2 one of the most discussed and debated haplogroups in the study of human prehistory.",
  interestingFact:
    "X2a, the Native American branch of X2, is found predominantly among the Algonquian-speaking peoples of northeastern North America (Ojibwe ~25%) and among the Sioux (15%), but is absent from East Asian and Siberian populations — the expected geographic bridge to the Americas. This unusual distribution has led to controversial hypotheses including a transatlantic migration from Europe or the Near East (the 'Solutrean hypothesis'), though most researchers favor an explanation involving a small Beringian population bottleneck that eliminated X2 from Asian populations after it entered the Americas.",
  distribution: [
    { ethnicity: "Ojibwe", region: "North America", percentage: 25, sampleSize: 80 },
    { ethnicity: "Sioux", region: "North America", percentage: 15, sampleSize: 100 },
    { ethnicity: "Nuu-chah-nulth", region: "North America", percentage: 12, sampleSize: 60 },
    { ethnicity: "Druze", region: "Near East", percentage: 27, sampleSize: 120 },
    { ethnicity: "Georgians", region: "Caucasus", percentage: 8, sampleSize: 150 },
    { ethnicity: "Berbers (Morocco)", region: "North Africa", percentage: 10, sampleSize: 150 },
    { ethnicity: "Ashkenazi Jews", region: "Europe / Near East", percentage: 4, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~0.5% globally; higher in Near East and specific Native American groups",
    peakRegion: "Near East (Druze) / Native North Americans (Ojibwe)",
    estimatedCarriers: 5_000_000,
  },
  tags: ["Near East", "Native Americans", "Druze", "Caucasus", "Transcontinental", "Beringia", "Algonquian", "mtDNA"],
  references: [
    "Brown et al. (1998) — mtDNA haplogroup X: an ancient link between Europe/Western Asia and North America? American Journal of Human Genetics 63(6), 1852–1861.",
    "Reidla et al. (2003) — Origin and diffusion of mtDNA haplogroup X. American Journal of Human Genetics 73(5), 1178–1190.",
    "Perego et al. (2009) — Distinctive Paleo-Indian migration routes from Beringia marked by two rare mtDNA haplogroups. Current Biology 19(1), 1–8.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default X2_mt;
