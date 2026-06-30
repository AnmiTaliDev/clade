import type { Haplogroup } from "@/types/haplogroup";

const J2a: Haplogroup = {
  id: "J2a",
  name: "J2a (M410)",
  type: "Y-DNA",
  parent: "J2",
  children: ["J2a1"],
  formed: "~19,000 BCE",
  mrca: "~12,000 BCE",
  origin: { region: "Near East / Fertile Crescent", period: "Epipaleolithic", coordinates: [40, 36] },
  description: "Haplogroup J2a (M410) is the dominant subclade of J2, broadly distributed across the Mediterranean, Near East, Caucasus, and South Asia. It is particularly common in Turkey, Iran, the Levant, Greece, Italy, and among South Asian populations (especially upper-caste Indians and Pakistanis). J2a was a key lineage in the Neolithic expansion from Anatolia and the Near East into Europe and South Asia. Ancient DNA has recovered J2a from Bronze Age Anatolian and Levantine samples, and it appears to have been carried by early Neolithic farmers and Bronze Age urban populations alike.",
  interestingFact: "J2a has been found in ancient Bronze Age samples from the Near East and Anatolia including from populations associated with the earliest urban civilizations — Sumerians, early Anatolians, and Bronze Age Levantines. Its broad distribution from the Mediterranean to South Asia may reflect the spread of Neolithic and Bronze Age agricultural populations and the trade networks they established.",
  distribution: [
    { ethnicity: "Turks", region: "West Asia", percentage: 25, sampleSize: 600 },
    { ethnicity: "Iranians", region: "West Asia", percentage: 22, sampleSize: 500 },
    { ethnicity: "Greeks", region: "Southern Europe", percentage: 20, sampleSize: 400 },
    { ethnicity: "Italians", region: "Southern Europe", percentage: 15, sampleSize: 600 },
    { ethnicity: "South Asians (upper caste)", region: "South Asia", percentage: 10, sampleSize: 600 },
  ],
  statistics: { modernFrequency: "~4% of global male population", peakRegion: "Near East / Mediterranean", estimatedCarriers: 160_000_000 },
  tags: ["Near East", "Mediterranean", "Turkey", "Iran", "Greece", "Italy", "South Asia", "Neolithic", "Bronze Age"],
  references: ["Semino et al. (2004) — Origin, diffusion, and differentiation of Y-chromosome haplogroups E and J. American Journal of Human Genetics 74(5), 1023–1034."],
  featured: false,
  addedAt: "2026-06-30",
};
export default J2a;
