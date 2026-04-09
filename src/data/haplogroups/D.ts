import type { Haplogroup } from "@/types/haplogroup";

const D: Haplogroup = {
  id: "D",
  name: "D",
  type: "Y-DNA",
  parent: "DE",
  children: ["D1", "D2"],
  formed: "~65,000 BCE",
  mrca: "~40,000 BCE",
  origin: {
    region: "South Asia / coastal route to East Asia",
    period: "Upper Paleolithic",
    coordinates: [80, 20],
  },
  description:
    "Haplogroup D is one of the most geographically puzzling Y-DNA haplogroups. It is found at very high frequencies in Japan (35–40% as D-M55), Tibet (50% as D-M64), and the Andaman Islands (nearly 100% among Andamanese hunter-gatherers as D-M174), yet is almost entirely absent everywhere in between. This striking disjunct distribution is best explained by an ancient coastal migration route during the Upper Paleolithic along the south Asian coastline, followed by the subsequent extinction of intermediate D lineages through genetic drift and replacement by later expanding haplogroups. The Andamanese branch is thought to represent the most ancient surviving remnant of this dispersal.",
  interestingFact:
    "The Andamanese peoples — including the Onge, Jarawa, and Great Andamanese — carry haplogroup D at nearly 100% frequency and are considered one of the most isolated and genetically distinct populations on Earth, preserving a lineage that diverged from other human groups approximately 60,000 years ago.",
  distribution: [
    { ethnicity: "Japanese", region: "East Asia", percentage: 38 },
    { ethnicity: "Tibetans", region: "Central Asia / East Asia", percentage: 50 },
    { ethnicity: "Andamanese", region: "South Asia (Andaman Islands)", percentage: 100 },
    { ethnicity: "Burmese", region: "Southeast Asia", percentage: 8 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 1 },
  ],
  statistics: {
    modernFrequency: "~2% of global male population",
    peakRegion: "Japan / Tibet",
    estimatedCarriers: 75_000_000,
  },
  tags: ["Japan", "Tibet", "Andaman", "Paleolithic", "East Asia", "Coastal migration", "Isolated"],
  references: [
    "Underhill & Kivisild (2007) — Use of Y chromosome and mitochondrial DNA population structure in tracing human migrations. Annual Review of Genetics 41, 539–564.",
    "Thangaraj et al. (2003) — Genetic affinities of the Andaman Islanders, a vanishing human population. Current Biology 13(2), 86–93.",
    "Shi et al. (2008) — Y-chromosome evidence of earliest modern human settlement in East Asia and multiple origins of Tibetan and Japanese populations. BMC Biology 3, 5.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default D;
