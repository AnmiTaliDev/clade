/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1b-DF27.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1b_DF27: Haplogroup = {
  id: "R1b-DF27",
  name: "R1b-DF27",
  type: "Y-DNA",
  parent: "R1b-P312",
  children: [],
  formed: "~2,500 BCE",
  mrca: "~2,400 BCE",
  origin: {
    region: "Iberian Peninsula or Southwest France",
    period: "Bronze Age (Bell Beaker)",
    coordinates: [-1, 43],
  },
  description:
    "R1b-DF27 is the primary paternal lineage of the Iberian Peninsula. It arose within the Bell Beaker population and underwent a massive expansion in Iberia approximately 4,500 years ago. Today, it accounts for a large majority of male lineages in Spain and Portugal and reaches its highest frequency among the Basque people. The spread of DF27 in Iberia is one of the clearest examples of how a single incoming Bronze Age lineage can almost entirely replace previous local male lineages in a specific geographic region.",
  interestingFact:
    "The Basque people, often thought to be descendants of pre-Indo-European hunter-gatherers, actually belong predominantly (up to 70%) to the R1b-DF27 lineage, which arrived in the region only during the Bronze Age. This indicates that while the Basques preserved their ancient language, their paternal ancestry was largely transformed by the Bell Beaker expansion.",
  distribution: [
    { ethnicity: "Basques", region: "Western Europe", percentage: 70, sampleSize: 200 },
    { ethnicity: "Spanish", region: "Western Europe", percentage: 50, sampleSize: 700 },
    { ethnicity: "Portuguese", region: "Western Europe", percentage: 45, sampleSize: 500 },
    { ethnicity: "French (Southwest)", region: "Western Europe", percentage: 20, sampleSize: 300 },
    { ethnicity: "Latin Americans (Iberian descent)", region: "Americas", percentage: 30 },
  ],
  statistics: {
    modernFrequency: "~1% of global male population",
    peakRegion: "Iberian Peninsula",
    estimatedCarriers: 45_000_000,
  },
  tags: ["Iberian", "Spanish", "Basque", "Bell Beaker", "Bronze Age", "Western Europe"],
  references: [
    "Olalde et al. (2019) — The genomic history of the Iberian Peninsula over the past 8000 years. Science.",
    "Solé-Morata et al. (2017) — Analysis of the R1b-DF27 haplogroup shows that a large fraction of Iberian Y-chromosome lineages originated recently in situ. Scientific Reports.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1b_DF27;
