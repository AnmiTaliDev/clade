import type { Haplogroup } from "@/types/haplogroup";

const C2a1a: Haplogroup = {
  id: "C2a1a",
  name: "C2a1a (P93)",
  type: "Y-DNA",
  parent: "C2a1",
  children: ["C2a1a1", "C2a1a2", "C2a1a3"],
  formed: "~20,000 BCE",
  mrca: "~12,000 BCE",
  origin: {
    region: "East Asia",
    period: "Upper Paleolithic",
    coordinates: [118, 34],
  },
  description:
    "C2a1a (P93) is the primary subclade of C2a1 and encompasses the vast majority of C2a1 carriers in East Asia. It diversified in the region during the late Paleolithic and Neolithic, giving rise to three main branches distributed across Korea, China, and surrounding areas. C2a1a was part of the demographic expansion of early East Asian populations and is found across sedentary agricultural and semi-agricultural societies.",
  interestingFact:
    "C2a1a (P93) is the common ancestor of virtually all modern East Asian C2a1 lineages — its three descendant branches partition the variation found among Han Chinese, Koreans, Japanese, Manchu, and neighboring populations.",
  distribution: [
    { ethnicity: "Koreans", region: "East Asia", percentage: 5, sampleSize: 800 },
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 3, sampleSize: 2000 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 3, sampleSize: 1000 },
    { ethnicity: "Manchu", region: "East Asia", percentage: 4, sampleSize: 150 },
  ],
  statistics: {
    modernFrequency: "~0.7% of global male population",
    peakRegion: "Korea / North China",
    estimatedCarriers: 25_000_000,
  },
  tags: ["East Asia", "Korea", "China", "Japan", "Neolithic"],
  references: [
    "Wei et al. (2018) — Phylogenetic analysis of the Y-chromosome haplogroup C2b-F1067. PLOS ONE 13(5), e0197744.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1a;
