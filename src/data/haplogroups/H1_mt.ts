import type { Haplogroup } from "@/types/haplogroup";

const H1_mt: Haplogroup = {
  id: "H1_mt",
  name: "H1 (mtDNA)",
  type: "mtDNA",
  parent: "H_mt",
  children: ["H1a_mt", "H1b_mt"],
  formed: "~10,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Iberian Peninsula / Western Europe", period: "Mesolithic", coordinates: [-5, 40] },
  description: "Haplogroup H1 is the most common subclade of mtDNA H in Europe, comprising roughly 6–9% of all European women. It is especially dominant in the Iberian Peninsula (Spain, Portugal), Sardinia, and along the Atlantic façade of Europe. H1 was a major component of Western European Mesolithic hunter-gatherer populations and expanded dramatically with the post-glacial recolonisation of Europe from an Iberian refugium after the Last Glacial Maximum. It is also found in North Africa and the Near East.",
  interestingFact: "H1 is the single most common mitochondrial haplogroup subclade in Europe. Studies on ancient DNA from the Paleolithic and Mesolithic show H1 was present among hunter-gatherers in the Iberian Peninsula before farming arrived — making it one of the oldest continuous female lineages in Western Europe.",
  distribution: [
    { ethnicity: "Basques", region: "Western Europe", percentage: 27, sampleSize: 300 },
    { ethnicity: "Iberians (Spain/Portugal)", region: "Western Europe", percentage: 20, sampleSize: 1000 },
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 22, sampleSize: 500 },
    { ethnicity: "Irish", region: "Western Europe", percentage: 15, sampleSize: 400 },
    { ethnicity: "Berbers (North Africa)", region: "North Africa", percentage: 18, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~6% of global female population", peakRegion: "Iberian Peninsula / Atlantic Europe", estimatedCarriers: 120_000_000 },
  tags: ["Europe", "Mesolithic", "Iberia", "Atlantic", "Hunter-gatherer", "Ice Age refugium"],
  references: ["Pereira et al. (2005) — The diversity present in 5140 human mitochondrial genomes. American Journal of Human Genetics 76(3), 516–524.", "Rootsi et al. (2012) — Distinguishing the co-ancestries of haplogroup G Y-chromosomes in the populations of Europe and the Caucasus. European Journal of Human Genetics."],
  featured: false,
  addedAt: "2026-06-30",
};
export default H1_mt;
