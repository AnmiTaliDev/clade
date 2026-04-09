import type { Haplogroup } from "@/types/haplogroup";

const R1a: Haplogroup = {
  id: "R1a",
  name: "R1a",
  type: "Y-DNA",
  parent: "R1",
  children: ["R1a1", "R1a1a"],
  formed: "~22,000 BCE",
  mrca: "~10,000 BCE",
  origin: {
    region: "Eastern Europe / Central Asia",
    period: "Upper Paleolithic",
    coordinates: [50, 40],
  },
  description:
    "R1a is one of the most widespread Y-DNA haplogroups in Eurasia, found at high frequencies across South Asia, Central Asia, and Eastern Europe. It is strongly associated with the expansion of Indo-European languages and the Yamnaya culture. Two major branches, M417 (European) and Z93 (Asian), diverged approximately 5,800 years ago and account for the vast majority of modern R1a lineages.",
  interestingFact:
    "Ancient DNA studies have confirmed that R1a-M417 was carried by Yamnaya pastoralists of the Pontic-Caspian steppe, who are now known to have contributed significantly to the ancestry of both modern Europeans and South Asians — making R1a a genetic bridge across continents.",
  distribution: [
    { ethnicity: "Poles", region: "Eastern Europe", percentage: 57, sampleSize: 300 },
    { ethnicity: "Ukrainians", region: "Eastern Europe", percentage: 54, sampleSize: 500 },
    { ethnicity: "Russians", region: "Eastern Europe", percentage: 46, sampleSize: 1200 },
    { ethnicity: "Brahmins (India)", region: "South Asia", percentage: 72, sampleSize: 200 },
    { ethnicity: "Kyrgyz", region: "Central Asia", percentage: 63, sampleSize: 150 },
    { ethnicity: "Tajiks", region: "Central Asia", percentage: 64, sampleSize: 180 },
    { ethnicity: "Pashtuns", region: "South Asia / Central Asia", percentage: 51, sampleSize: 250 },
    { ethnicity: "Latvians", region: "Baltic", percentage: 41, sampleSize: 200 },
    { ethnicity: "Lithuanians", region: "Baltic", percentage: 38, sampleSize: 300 },
  ],
  clans: [
    { type: "tribe", name: "Yamnaya", region: "Pontic-Caspian Steppe", note: "Bronze Age pastoralists associated with early R1a expansion" },
    { type: "clan", name: "Andronovo culture", region: "Central Asia", note: "Bronze Age culture linked to R1a-Z93" },
    { type: "dynasty", name: "Rurikids", region: "Eastern Europe", note: "Medieval Varangian/Slavic dynasty, confirmed R1a carriers" },
  ],
  statistics: {
    modernFrequency: "~8% of global male population",
    peakRegion: "South Asia / Eastern Europe",
    estimatedCarriers: 300_000_000,
  },
  tags: ["Indo-European", "Steppe", "Bronze Age", "South Asia", "Eastern Europe", "Slavic", "Vedic"],
  references: [
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211.",
    "Underhill et al. (2015) — The phylogenetic and geographic structure of Y-chromosome haplogroup R1a. European Journal of Human Genetics.",
    "Poznik et al. (2016) — Punctuated bursts in human male demography inferred from 1,244 worldwide Y-chromosome sequences. Nature Genetics.",
  ],
  featured: true,
  addedAt: "2026-04-09",
};

export default R1a;
