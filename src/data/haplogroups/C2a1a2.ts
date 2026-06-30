import type { Haplogroup } from "@/types/haplogroup";

const C2a1a2: Haplogroup = {
  id: "C2a1a2",
  name: "C2a1a2 (M86)",
  type: "Y-DNA",
  parent: "C2a1a",
  children: [],
  formed: "~15,000 BCE",
  mrca: "~7,000 BCE",
  origin: {
    region: "Northern China / Inner Mongolia",
    period: "Mesolithic / Neolithic",
    coordinates: [115, 41],
  },
  description:
    "C2a1a2 (M86) is a branch of C2a1a found primarily in northern Chinese populations and among Mongolian and Mongolian-adjacent groups of the Inner Mongolian plateau. Unlike its sister clade C2a1a1 (M77), which is associated with Korean and Tungusic groups, C2a1a2 has a more northwesterly distribution and appears in populations spanning the transition zone between the North China Plain and the southern Mongolian steppe. It is carried at moderate frequencies among Han Chinese in northern China and among some Mongolian sub-groups, suggesting a role in the early demographic history of the Yellow River basin and its northern frontier.",
  interestingFact:
    "C2a1a2 (M86) marks a distinct lineage from the classic Mongolic C2b branch — it is a southern, sedentary-associated C2 lineage that was absorbed into early Chinese agricultural populations rather than remaining among steppe pastoralists.",
  distribution: [
    { ethnicity: "Han Chinese (North)", region: "East Asia", percentage: 3, sampleSize: 800 },
    { ethnicity: "Inner Mongols", region: "East Asia (China)", percentage: 4, sampleSize: 200 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 1, sampleSize: 800 },
    { ethnicity: "Tungusic groups", region: "Northeast Asia", percentage: 2, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~0.2% of global male population",
    peakRegion: "Northern China / Inner Mongolia",
    estimatedCarriers: 7_000_000,
  },
  tags: ["East Asia", "China", "Inner Mongolia", "Neolithic", "Yellow River"],
  references: [
    "Wei et al. (2018) — Phylogenetic analysis of the Y-chromosome haplogroup C2b-F1067. PLOS ONE 13(5), e0197744.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1a2;
