import type { Haplogroup } from "@/types/haplogroup";

const G: Haplogroup = {
  id: "G",
  name: "G",
  type: "Y-DNA",
  parent: "F",
  children: ["G1", "G2"],
  formed: "~48,000 BCE",
  mrca: "~30,000 BCE",
  origin: {
    region: "Near East / South Caucasus",
    period: "Upper Paleolithic",
    coordinates: [44, 38],
  },
  description:
    "Haplogroup G is strongly associated with Caucasian populations — particularly Georgians, Armenians, and Ossetes — and with Neolithic farmers who carried agriculture from Anatolia into Europe. The subclade G2a was the dominant haplogroup of early European Neolithic farmers, and ancient DNA studies have confirmed its presence across Neolithic sites in Central Europe, France, and Iberia. G2a was subsequently diluted by incoming Yamnaya steppe pastoralists and later Bronze Age migrations, but survives today at highest frequencies in the South Caucasus and isolated refugia such as Sardinia. Famous ancient carriers include the Tyrolean Iceman Ötzi (~3300 BCE) and numerous Neolithic farmers from France, Hungary, and Germany.",
  interestingFact:
    "Ötzi the Iceman — a 5,300-year-old mummy discovered in the Alps — belongs to haplogroup G2a2b, and his closest modern relatives are found among Sardinians and Corsicans, populations that preserved Neolithic farmer ancestry relatively undiluted by later Bronze Age steppe migrations.",
  distribution: [
    { ethnicity: "Georgians", region: "South Caucasus", percentage: 45 },
    { ethnicity: "Armenians", region: "South Caucasus", percentage: 11 },
    { ethnicity: "Ossetes", region: "North Caucasus", percentage: 60 },
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 10 },
    { ethnicity: "Iranians", region: "Near East", percentage: 8 },
    { ethnicity: "Pashtuns", region: "South Asia / Central Asia", percentage: 12 },
    { ethnicity: "Hazara", region: "South Asia", percentage: 15 },
    { ethnicity: "South Caucasus (average)", region: "South Caucasus", percentage: 35 },
  ],
  clans: [
    { type: "tribe", name: "Neolithic Anatolian Farmers", region: "Europe", note: "G2a-carrying agriculturalists who spread farming from Anatolia into Central and Western Europe beginning ~9,000 years ago" },
    { type: "dynasty", name: "Ötzi's people", region: "Alpine Neolithic", note: "Late Neolithic Alpine population represented by the Tyrolean Iceman, G2a2b lineage" },
  ],
  statistics: {
    modernFrequency: "~2% of global male population",
    peakRegion: "South Caucasus",
    estimatedCarriers: 75_000_000,
  },
  tags: ["Caucasus", "Neolithic", "Georgia", "Ötzi", "Near East", "Anatolia"],
  references: [
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211.",
    "Keller et al. (2012) — New insights into the Tyrolean Iceman's origin and phenotype as inferred by whole-genome sequencing. Nature Communications 3, 698.",
    "Lazaridis et al. (2016) — Genomic insights into the origin of farming in the ancient Near East. Nature 536, 419–424.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default G;
