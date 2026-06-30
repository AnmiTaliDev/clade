import type { Haplogroup } from "@/types/haplogroup";

const C2a1a3a1b: Haplogroup = {
  id: "C2a1a3a1b",
  name: "C2a1a3a1b",
  type: "Y-DNA",
  parent: "C2a1a3a1",
  children: ["C2a1a3a1b1"],
  formed: "~4,000 BCE",
  mrca: "~3,000 BCE",
  origin: {
    region: "South China",
    period: "Neolithic",
    coordinates: [113, 22],
  },
  description:
    "C2a1a3a1b is an intermediate subclade of C2a1a3a1 (F5481), sister to C2a1a3a1a (FT224144). It defines a branch leading to C2a1a3a1b1 (FT411734) and represents a divergence within the southern East Asian C2a1a3a lineage during the late Neolithic or early Bronze Age. Its distribution overlaps with that of other southern C2a branches in South China and adjacent Southeast Asian populations.",
  interestingFact:
    "The nested structure C2a1a3a1 → C2a1a3a1b → C2a1a3a1b1 illustrates how successive population bottlenecks in small, geographically isolated communities can produce a 'ladder-like' phylogeny — each step represents a founder event within southern Chinese diversity.",
  distribution: [
    { ethnicity: "Han Chinese (South)", region: "South China", percentage: 0.5, sampleSize: 500 },
  ],
  statistics: {
    modernFrequency: "<0.01% of global male population",
    peakRegion: "South China",
    estimatedCarriers: 200_000,
  },
  tags: ["South China", "Neolithic", "East Asia"],
  references: [
    "YFull YTree — Haplogroup C2a1a3a1 phylogeny.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1a3a1b;
