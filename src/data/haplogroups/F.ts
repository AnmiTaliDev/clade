import type { Haplogroup } from "@/types/haplogroup";

const F: Haplogroup = {
  id: "F",
  name: "F",
  type: "Y-DNA",
  parent: "CF",
  children: ["G", "H", "IJ", "K"],
  formed: "~65,000 BCE",
  mrca: "~60,000 BCE",
  origin: {
    region: "Southwest Asia or South Asia",
    period: "Upper Paleolithic",
    coordinates: [60, 25],
  },
  description:
    "Haplogroup F is the ancestor of the vast majority of men outside Africa. It gave rise to haplogroups G, H (Y-DNA), IJ (ancestral to I and J), and the enormous K macro-haplogroup which eventually produced most of the major Eurasian lineages including R, Q, N, O, and many others. F represents the primary diversification point of out-of-Africa paternal lineages.",
  interestingFact:
    "Approximately 90% of all non-African men alive today descend from haplogroup F — making its founding ancestor one of the most genetically consequential individuals in human history.",
  distribution: [],
  statistics: {
    modernFrequency: "~90% of non-African male population (as ancestor)",
    peakRegion: "Eurasia / Americas",
    estimatedCarriers: 3_200_000_000,
  },
  tags: ["Eurasian", "Out of Africa", "Ancestral", "Paleolithic"],
  references: [
    "Underhill & Kivisild (2007) — Use of Y chromosome and mitochondrial DNA population structure in tracing human migrations. Annual Review of Genetics 41, 539–564.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default F;
