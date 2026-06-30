import type { Haplogroup } from "@/types/haplogroup";

const C2a1a1: Haplogroup = {
  id: "C2a1a1",
  name: "C2a1a1 (M77)",
  type: "Y-DNA",
  parent: "C2a1a",
  children: [],
  formed: "~15,000 BCE",
  mrca: "~8,000 BCE",
  origin: {
    region: "Korean Peninsula / Manchuria",
    period: "Mesolithic",
    coordinates: [127, 37],
  },
  description:
    "C2a1a1 (M77) is the Korean and Manchurian branch of C2a1a, found at its highest frequencies among Koreans and Manchu-Tungusic populations of northeastern China. It was part of the early population movements that shaped the genetic landscape of the Korean Peninsula and the adjacent Manchurian plain. Ancient DNA evidence associates C2a1a1 with pre-Yayoi Korean populations and the ancestral gene pool that contributed to both the Korean ethnic group and Manchurian linguistic communities.",
  interestingFact:
    "C2a1a1 (M77) is one of the diagnostic Y-chromosome lineages distinguishing the Korean Peninsula's pre-agricultural and early agricultural populations from the later Yayoi migrants who expanded into Japan — it is found at higher rates in mainland Korean populations than among Japanese.",
  distribution: [
    { ethnicity: "Koreans", region: "East Asia", percentage: 4, sampleSize: 800 },
    { ethnicity: "Manchu", region: "East Asia (Manchuria)", percentage: 6, sampleSize: 150 },
    { ethnicity: "Han Chinese (NE)", region: "East Asia", percentage: 2, sampleSize: 500 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 1, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~0.3% of global male population",
    peakRegion: "Korea / Manchuria",
    estimatedCarriers: 10_000_000,
  },
  tags: ["East Asia", "Korea", "Manchuria", "Manchu", "Mesolithic"],
  references: [
    "Wei et al. (2018) — Phylogenetic analysis of the Y-chromosome haplogroup C2b-F1067. PLOS ONE 13(5), e0197744.",
    "Kim et al. (2011) — High frequencies of Y-chromosome haplogroup O2b-SRY465 lineages in Korea. Investigative Genetics 2(1), 10.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1a1;
