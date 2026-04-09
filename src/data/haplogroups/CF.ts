import type { Haplogroup } from "@/types/haplogroup";

const CF: Haplogroup = {
  id: "CF",
  name: "CF",
  type: "Y-DNA",
  parent: "CT",
  children: ["C", "F"],
  formed: "~68,000 BCE",
  mrca: "~65,000 BCE",
  origin: {
    region: "South Asia or Near East",
    period: "Upper Paleolithic",
    coordinates: [60, 20],
  },
  description:
    "CF is the immediate ancestor of haplogroups C and F. C spread along coastal routes toward South Asia, East Asia, Oceania, and the Americas, while F gave rise to virtually all major Eurasian haplogroups (G, H, IJ, K and its descendants). The CF ancestor likely lived in or near South Asia shortly after the Out-of-Africa migration.",
  interestingFact:
    "CF and DE are the two direct children of CT, representing the primary split of non-African Y-chromosome diversity. Every man alive today outside haplogroup A or B traces his paternal line through either DE or CF.",
  distribution: [],
  statistics: {
    modernFrequency: "~85% of global male population (as ancestor)",
    peakRegion: "Worldwide",
    estimatedCarriers: 3_200_000_000,
  },
  tags: ["Ancestral", "Out of Africa", "Paleolithic", "Eurasian"],
  references: [
    "Karafet et al. (2008) — New binary polymorphisms reshape and increase resolution of the human Y chromosomal haplogroup tree. Genome Research 18, 830–838.",
    "Poznik et al. (2016) — Punctuated bursts in human male demography inferred from 1,244 worldwide Y-chromosome sequences. Nature Genetics 48, 593–599.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default CF;
