import type { Haplogroup } from "@/types/haplogroup";

const NO: Haplogroup = {
  id: "NO",
  name: "NO",
  type: "Y-DNA",
  parent: "K",
  children: ["N", "O"],
  formed: "~40,000 BCE",
  mrca: "~38,000 BCE",
  origin: {
    region: "East Asia or Southeast Asia",
    period: "Upper Paleolithic",
    coordinates: [100, 30],
  },
  description:
    "NO is the ancestral haplogroup of both N and O. Haplogroup O is the dominant lineage across East Asia and Southeast Asia, carried by the majority of Han Chinese, Japanese, Korean, and Southeast Asian men. Haplogroup N spread northward and westward through Siberia and into Northern Europe, and is characteristic of Uralic-speaking peoples such as Finns and Yakuts. Together, NO accounts for roughly 30% of the global male population.",
  interestingFact:
    "Despite their geographic separation — O dominant in East/Southeast Asia and N dominant in Siberia and Northern Europe — both descend from a common ancestor who lived around 40,000 years ago, likely somewhere in East or Southeast Asia.",
  distribution: [
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 70, sampleSize: 2000 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 53, sampleSize: 1000 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 75, sampleSize: 800 },
    { ethnicity: "Yakuts", region: "Siberia", percentage: 90, sampleSize: 300 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 60, sampleSize: 700 },
  ],
  statistics: {
    modernFrequency: "~30% of global male population",
    peakRegion: "East Asia / Siberia",
    estimatedCarriers: 1_150_000_000,
  },
  tags: ["East Asia", "Siberia", "Uralic", "Paleolithic", "Northern Europe"],
  references: [
    "Karafet et al. (2008) — New binary polymorphisms reshape and increase resolution of the human Y chromosomal haplogroup tree. Genome Research 18, 830–838.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default NO;
