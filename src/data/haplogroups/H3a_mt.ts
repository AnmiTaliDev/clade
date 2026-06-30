/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup H3a.
 */

import type { Haplogroup } from "@/types/haplogroup";

const H3a_mt: Haplogroup = {
  id: "H3a_mt",
  name: "H3a",
  type: "mtDNA",
  parent: "H3_mt",
  children: [],
  formed: "~9,000 BCE",
  mrca: "~6,000 BCE",
  origin: {
    region: "Western Europe",
    period: "Mesolithic / Early Neolithic",
    coordinates: [0, 45],
  },
  description:
    "Haplogroup H3a is a subclade of H3, itself a major Western European mtDNA haplogroup. H3 and its subclades are found at highest frequencies in Western Europe, especially in the Iberian Peninsula, Sardinia, and the Atlantic Coast. H3a in particular appears concentrated in these Atlantic-facing populations. Like its parent H3, H3a is believed to have expanded from a Western European refugium after the Last Glacial Maximum and been further spread by Neolithic farmers who themselves absorbed this Mesolithic lineage.",
  interestingFact:
    "H3 is one of the mtDNA lineages found at anomalously high frequency in Sardinia (about 10%), an island population that has retained an unusually large proportion of ancient Neolithic European ancestry due to its relative genetic isolation over millennia.",
  distribution: [
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 5, sampleSize: 200 },
    { ethnicity: "Iberians (Spanish)", region: "Southwestern Europe", percentage: 3, sampleSize: 400 },
    { ethnicity: "Basques", region: "Southwestern Europe", percentage: 4, sampleSize: 200 },
    { ethnicity: "French", region: "Western Europe", percentage: 2.5, sampleSize: 350 },
  ],
  statistics: {
    modernFrequency: "~1% in Western Europe",
    peakRegion: "Western Europe / Atlantic Coast",
    estimatedCarriers: 8_000_000,
  },
  tags: ["Western Europe", "Sardinia", "Iberian", "Neolithic", "Atlantic", "mtDNA"],
  references: [
    "Achilli et al. (2004) — The molecular dissection of mtDNA haplogroup H confirms that the Franco-Cantabrian glacial refuge was a major source for the European gene pool. American Journal of Human Genetics 75(5), 910–918.",
    "Pala et al. (2012) — Mitochondrial DNA signals of late glacial recolonization of Europe from near eastern refugia. American Journal of Human Genetics 90(5), 915–924.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default H3a_mt;
