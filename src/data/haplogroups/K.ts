import type { Haplogroup } from "@/types/haplogroup";

const K: Haplogroup = {
  id: "K",
  name: "K",
  type: "Y-DNA",
  parent: "F",
  children: ["K2", "LT", "M", "NO", "P"],
  formed: "~50,000 BCE",
  mrca: "~47,000 BCE",
  origin: {
    region: "South Asia or Southeast Asia",
    period: "Upper Paleolithic",
    coordinates: [75, 20],
  },
  description:
    "Haplogroup K is a massive macro-haplogroup that encompasses the majority of all Y-DNA lineages in Eurasia, the Americas, Oceania, and parts of Africa. Its descendant branches include P (ancestral to Q and R — dominant in the Americas and among Indo-Europeans), NO (dominant in East and Southeast Asia and Uralic-speaking peoples), and several other major clades. K represents the second great radiation of paternal lineages after the out-of-Africa migration.",
  interestingFact:
    "Through its descendants Q and R, haplogroup K is carried by both indigenous Americans (via Q) and the majority of Western Europeans (via R1b) — two populations as geographically and culturally distant as possible, yet sharing a common paternal ancestor some 50,000 years ago.",
  distribution: [],
  statistics: {
    modernFrequency: "~70% of global male population (as ancestor)",
    peakRegion: "Eurasia / Americas / Oceania",
    estimatedCarriers: 2_700_000_000,
  },
  tags: ["Eurasian", "Ancestral", "Paleolithic", "Americas", "Oceania"],
  references: [
    "Poznik et al. (2016) — Punctuated bursts in human male demography inferred from 1,244 worldwide Y-chromosome sequences. Nature Genetics 48, 593–599.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default K;
