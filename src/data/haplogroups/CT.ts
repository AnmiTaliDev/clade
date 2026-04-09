import type { Haplogroup } from "@/types/haplogroup";

const CT: Haplogroup = {
  id: "CT",
  name: "CT",
  type: "Y-DNA",
  parent: "BT",
  children: ["DE", "CF"],
  formed: "~88,000 BCE",
  mrca: "~68,000 BCE",
  origin: {
    region: "Africa (likely East Africa)",
    period: "Middle Paleolithic",
    coordinates: [35, 8],
  },
  description:
    "CT is the immediate ancestor of virtually all haplogroups found outside Africa, and also gave rise to most common lineages within Africa. It splits into three main branches: C (found in coastal East Africa, South Asia, and Australia/Oceania, reflecting early coastal migrations), DE (the ancestral D and E haplogroups), and F (the ancestor of all non-African and most Eurasian haplogroups). The CT ancestor likely lived in East Africa before the Out-of-Africa migration.",
  interestingFact:
    "The CT ancestor is sometimes called 'Y-chromosomal Adam's grandson', as it represents the branching point between lineages that remained predominantly African (DE and its descendants) and those that spread globally via the F branch.",
  distribution: [],
  statistics: {
    modernFrequency: "~98% of global male population (as ancestor)",
    peakRegion: "Worldwide",
    estimatedCarriers: 3_850_000_000,
  },
  tags: ["Root", "Out of Africa", "Ancestral", "Paleolithic"],
  references: [
    "Karmin et al. (2015) — A recent bottleneck of Y chromosome diversity coincides with a global change in culture. Genome Research 25, 459–466.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default CT;
