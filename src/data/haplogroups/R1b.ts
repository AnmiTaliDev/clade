import type { Haplogroup } from "@/types/haplogroup";

const R1b: Haplogroup = {
  id: "R1b",
  name: "R1b",
  type: "Y-DNA",
  parent: "R1",
  children: ["R1b1", "R1b1a", "R1b1a2"],
  formed: "~22,500 BCE",
  mrca: "~4,000 BCE",
  origin: {
    region: "Western Eurasia (likely Pontic Steppe or Near East)",
    period: "Upper Paleolithic",
    coordinates: [45, 35],
  },
  description:
    "R1b is the most common Y-chromosome haplogroup in Western Europe, reaching frequencies above 80% in Ireland, Wales, and parts of Spain. It arrived in Western Europe with the Bronze Age steppe migrations around 2500 BCE and largely replaced earlier Neolithic farmer lineages. The dominant European subclade is R1b-L11 (P312 and U106), while African and Middle Eastern branches represent older lineages.",
  interestingFact:
    "In Ireland and Wales, R1b reaches frequencies of 80–90%, one of the highest concentrations of any Y-DNA haplogroup in any region on Earth. Ancient DNA from the Yamnaya horizon shows R1b at the core of the steppe ancestry that transformed European genetics in the Chalcolithic.",
  distribution: [
    { ethnicity: "Irish", region: "Western Europe", percentage: 84, sampleSize: 500 },
    { ethnicity: "Welsh", region: "Western Europe", percentage: 82, sampleSize: 250 },
    { ethnicity: "Basques", region: "Western Europe", percentage: 87, sampleSize: 200 },
    { ethnicity: "English", region: "Western Europe", percentage: 68, sampleSize: 800 },
    { ethnicity: "French", region: "Western Europe", percentage: 60, sampleSize: 600 },
    { ethnicity: "Spanish", region: "Western Europe", percentage: 70, sampleSize: 700 },
    { ethnicity: "Germans", region: "Central Europe", percentage: 45, sampleSize: 900 },
    { ethnicity: "Armenians", region: "Caucasus", percentage: 30, sampleSize: 300 },
    { ethnicity: "Hausa", region: "West Africa", percentage: 10, sampleSize: 400 },
  ],
  clans: [
    { type: "dynasty", name: "House of Habsburg", region: "Central Europe", note: "Confirmed R1b-U152 by aDNA analysis of remains" },
    { type: "clan", name: "Bell Beaker culture", region: "Western Europe", note: "Bronze Age culture strongly associated with R1b expansion into Europe" },
    { type: "tribe", name: "Celts", region: "Western Europe", note: "Historical Celtic peoples are predominantly R1b" },
  ],
  statistics: {
    modernFrequency: "~9% of global male population",
    peakRegion: "Western Europe",
    estimatedCarriers: 340_000_000,
  },
  tags: ["Indo-European", "Celtic", "Steppe", "Bronze Age", "Western Europe", "Bell Beaker"],
  references: [
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211.",
    "Olalde et al. (2018) — The Beaker phenomenon and the genomic transformation of northwest Europe. Nature 555, 190–196.",
    "Balaresque et al. (2010) — A predominantly neolithic origin for European paternal lineages. PLoS Biology 8(1).",
  ],
  featured: true,
  addedAt: "2026-04-09",
};

export default R1b;
