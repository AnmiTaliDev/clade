/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1a-Z282.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1a_Z282: Haplogroup = {
  id: "R1a-Z282",
  name: "R1a-Z282",
  type: "Y-DNA",
  parent: "R1a-M417",
  children: [],
  formed: "~3,000 BCE",
  mrca: "~2,800 BCE",
  origin: {
    region: "Eastern Europe (likely Belarus / Western Russia / Ukraine)",
    period: "Early Bronze Age",
    coordinates: [30, 53],
  },
  description:
    "R1a-Z282 is the dominant paternal lineage of Central and Eastern Europe. It emerged within the Corded Ware culture and represents the western expansion of the R1a-M417 node. This marker is found at high frequencies among Slavic, Baltic, and some Germanic peoples. Its distribution closely follows the historical territories of Balto-Slavic speaking populations, and its subclades can distinguish between Northern (Z284) and Eastern (Z280 / M458) European regional groups.",
  interestingFact:
    "The subclade R1a-Z284, a branch of Z282, is the primary Norse/Viking marker within R1a, showing how this originally steppe lineage became integrated into Scandinavian populations long before the Viking Age.",
  distribution: [
    { ethnicity: "Poles", region: "Eastern Europe", percentage: 55, sampleSize: 300 },
    { ethnicity: "Russians", region: "Eastern Europe", percentage: 46, sampleSize: 1200 },
    { ethnicity: "Ukrainians", region: "Eastern Europe", percentage: 50, sampleSize: 500 },
    { ethnicity: "Latvians", region: "Baltic", percentage: 40, sampleSize: 200 },
    { ethnicity: "Norwegians", region: "Scandinavia", percentage: 15, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~3.5% of global male population",
    peakRegion: "Eastern Europe / Baltic",
    estimatedCarriers: 140_000_000,
  },
  tags: ["Slavic", "Baltic", "Viking", "Eastern Europe", "Corded Ware", "Indo-European"],
  references: [
    "Underhill et al. (2015) — The phylogenetic and geographic structure of Y-chromosome haplogroup R1a. European Journal of Human Genetics.",
    "Margaryan et al. (2020) — Population genomics of the Viking world. Nature.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1a_Z282;
