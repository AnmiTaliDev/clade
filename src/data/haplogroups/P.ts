import type { Haplogroup } from "@/types/haplogroup";

const P: Haplogroup = {
  id: "P",
  name: "P",
  type: "Y-DNA",
  parent: "K",
  children: ["Q", "R"],
  formed: "~35,000 BCE",
  mrca: "~32,000 BCE",
  origin: {
    region: "Central Asia or South Asia",
    period: "Upper Paleolithic",
    coordinates: [65, 35],
  },
  description:
    "Haplogroup P is the immediate ancestor of Q and R, two of the most widespread and consequential Y-DNA haplogroups in human history. Q is associated with the peopling of the Americas and is dominant among many Siberian and some Central Asian populations. R gave rise to R1a and R1b, which together dominate Europe, South Asia, and parts of Central Asia. P likely originated in Central or South Asia during the Upper Paleolithic.",
  interestingFact:
    "The two children of P — Q and R — together account for the paternal ancestry of both all indigenous Americans (Q) and the majority of European and South Asian men (R). Their common P ancestor lived roughly 35,000 years ago, likely in Central Asia.",
  distribution: [],
  statistics: {
    modernFrequency: "~50% of global male population (as ancestor)",
    peakRegion: "Eurasia / Americas",
    estimatedCarriers: 1_900_000_000,
  },
  tags: ["Eurasian", "Ancestral", "Paleolithic", "Americas"],
  references: [
    "Karafet et al. (2008) — New binary polymorphisms reshape and increase resolution of the human Y chromosomal haplogroup tree. Genome Research 18, 830–838.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default P;
