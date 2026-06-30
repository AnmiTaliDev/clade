import type { Haplogroup } from "@/types/haplogroup";

const C2b_MF630546: Haplogroup = {
  id: "C2b-MF630546",
  name: "C2b-MF630546",
  type: "Y-DNA",
  parent: "C2b-CTS4660",
  children: [],
  formed: "~6,000 BCE",
  mrca: "~3,000 BCE",
  origin: {
    region: "Eastern Siberia",
    period: "Neolithic",
    coordinates: [115, 56],
  },
  description:
    "C2b-MF630546 is a subclade of C2b-CTS4660 within the Tungusic-Siberian C2b1b branch. The defining marker MF630546 is a GenBank-registered Y-chromosome sequence variant identified in studies of Siberian indigenous populations. This lineage represents a fine-grained subdivision within eastern Siberian C2b diversity, distributed among Tungusic-speaking groups in the Baikal and Amur regions.",
  interestingFact:
    "MF630546 exemplifies how modern Y-chromosome population genomics using whole-sequence data can resolve the internal structure of lineages that were previously treated as undifferentiated, revealing distinct patrilineal sub-communities within historically mobile Siberian hunter-gatherer societies.",
  distribution: [
    { ethnicity: "Evenks", region: "Siberia", percentage: 3, sampleSize: 150 },
    { ethnicity: "Buryats", region: "Siberia", percentage: 2, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "<0.02% of global male population",
    peakRegion: "Eastern Siberia",
    estimatedCarriers: 500_000,
  },
  tags: ["Siberia", "Tungusic", "Evenks", "Neolithic"],
  references: [
    "ISOGG Y-DNA Haplogroup C — 2024 phylogenetic tree.",
    "YFull YTree — Haplogroup C2b1b phylogeny.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2b_MF630546;
