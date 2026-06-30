import type { Haplogroup } from "@/types/haplogroup";

const E1b1b1: Haplogroup = {
  id: "E1b1b1",
  name: "E1b1b1 (M35)",
  type: "Y-DNA",
  parent: "E1b1b",
  children: ["E1b1b1a", "E1b1b1b", "E1b1b1c"],
  formed: "~22,000 BCE",
  mrca: "~14,000 BCE",
  origin: { region: "North Africa / Horn of Africa", period: "Epipaleolithic", coordinates: [38, 14] },
  description: "Haplogroup E1b1b1 (M35) is the most widespread subclade of E1b1b, encompassing the majority of E-lineage carriers in North Africa, the Horn of Africa, the Near East, and Mediterranean Europe. Defined by the M35 marker, it diversified into several major branches: M78 (dominant in Northeast Africa and Mediterranean Europe), M123 (Near Eastern and Ethiopian), and V243 (Arabian). E1b1b1 played a central role in the population history of the Mediterranean region, spreading with Neolithic farmers, Bronze Age migrants, and historical expansion events. Ancient DNA has recovered E1b1b1 in Neolithic Anatolian farmers and Bronze Age Levantine individuals.",
  interestingFact: "E1b1b1 is found in all three of the major human geographic realms it spans — Africa, Asia, and Europe — making it one of the few Y-DNA haplogroups to have achieved truly transcontinental distribution through prehistoric dispersals rather than historical colonialism.",
  distribution: [
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 60, sampleSize: 400 },
    { ethnicity: "Somalis", region: "Horn of Africa", percentage: 75, sampleSize: 300 },
    { ethnicity: "Egyptians", region: "North Africa", percentage: 35, sampleSize: 500 },
    { ethnicity: "Greeks", region: "Southern Europe", percentage: 25, sampleSize: 400 },
    { ethnicity: "Turks", region: "West Asia", percentage: 12, sampleSize: 600 },
  ],
  statistics: { modernFrequency: "~5% of global male population", peakRegion: "Horn of Africa / North Africa", estimatedCarriers: 200_000_000 },
  tags: ["Africa", "North Africa", "Horn of Africa", "Mediterranean", "Neolithic", "Ethiopia", "Somalia"],
  references: ["Underhill et al. (2001) — The phylogeography of Y chromosome binary haplotypes and the origins of modern human populations. Annals of Human Genetics 65(1), 43–62."],
  featured: false,
  addedAt: "2026-06-30",
};
export default E1b1b1;
