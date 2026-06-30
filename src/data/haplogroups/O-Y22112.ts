import type { Haplogroup } from "@/types/haplogroup";

const O_Y22112: Haplogroup = {
  id: "O-Y22112",
  name: "O-Y22112",
  type: "Y-DNA",
  parent: "O",
  children: [],
  formed: "~35,000 BCE",
  mrca: "~20,000 BCE",
  origin: {
    region: "Southeast Asia / South China",
    period: "Upper Paleolithic",
    coordinates: [106, 18],
  },
  description:
    "O-Y22112 is a basal subclade of haplogroup O (M175), defined by the Y22112 marker identified through population genomic studies. It represents an early-diverging branch within the O haplogroup radiation that does not fall within the major O1 or O2 subclades. Found at low frequencies in Southeast Asia and southern China, O-Y22112 represents a relic lineage of the initial O haplogroup diversification in the Upper Paleolithic.",
  interestingFact:
    "O-Y22112, like other basal O subclades, serves as a genetic waypoint that helps researchers reconstruct the initial dispersal of haplogroup O from its origin in Southeast Asia before the O1 and O2 branches underwent their massive demographic expansions during the Neolithic.",
  distribution: [
    { ethnicity: "Southeast Asian populations", region: "Southeast Asia", percentage: 0.3, sampleSize: 800 },
    { ethnicity: "South Chinese", region: "South China", percentage: 0.2, sampleSize: 500 },
  ],
  statistics: {
    modernFrequency: "<0.05% of global male population",
    peakRegion: "Southeast Asia",
    estimatedCarriers: 1_000_000,
  },
  tags: ["Southeast Asia", "Paleolithic", "Basal", "East Asia"],
  references: [
    "YFull YTree — Haplogroup O (M175) phylogeny.",
    "ISOGG Y-DNA Haplogroup O — 2024 phylogenetic tree.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default O_Y22112;
