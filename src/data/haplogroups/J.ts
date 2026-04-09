import type { Haplogroup } from "@/types/haplogroup";

const J: Haplogroup = {
  id: "J",
  name: "J",
  type: "Y-DNA",
  parent: "IJ",
  children: ["J1", "J2"],
  formed: "~30,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "Near East / Fertile Crescent",
    period: "Upper Paleolithic",
    coordinates: [38, 32],
  },
  description:
    "Haplogroup J is the common ancestor of J1 and J2, two major lineages strongly associated with the Near East, Arabian Peninsula, and Mediterranean. J1 is particularly dominant among Arab and Semitic populations, while J2 spread with Neolithic farmers into the Mediterranean and Caucasus. J as a whole is a characteristic marker of populations originating in or connected to the Fertile Crescent.",
  interestingFact:
    "Haplogroup J1-P58, a major subclade of J1, is found in roughly 40–50% of Arab men and has been connected by some researchers to the historical expansion of Semitic-speaking peoples across the Near East and North Africa.",
  distribution: [
    { ethnicity: "Arabs (average)", region: "Middle East", percentage: 40, sampleSize: 1500 },
    { ethnicity: "Jews (average)", region: "Middle East / Diaspora", percentage: 35, sampleSize: 800 },
    { ethnicity: "Turks", region: "Anatolia", percentage: 28, sampleSize: 600 },
    { ethnicity: "Iranians", region: "Middle East", percentage: 25, sampleSize: 500 },
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 18, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~9% of global male population",
    peakRegion: "Arabian Peninsula / Near East",
    estimatedCarriers: 340_000_000,
  },
  tags: ["Near East", "Semitic", "Neolithic", "Mediterranean", "Arabian Peninsula"],
  references: [
    "Semino et al. (2004) — Origin, diffusion, and differentiation of Y-chromosome haplogroups E and J. American Journal of Human Genetics 74(5), 1023–1034.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default J;
