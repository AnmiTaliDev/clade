import type { Haplogroup } from "@/types/haplogroup";

const I: Haplogroup = {
  id: "I",
  name: "I",
  type: "Y-DNA",
  parent: "IJ",
  children: ["I1", "I2"],
  formed: "~40,000 BCE",
  mrca: "~28,000 BCE",
  origin: {
    region: "Western / Central Europe",
    period: "Upper Paleolithic",
    coordinates: [15, 48],
  },
  description:
    "Haplogroup I is the oldest major Y-DNA haplogroup in Europe, predating both Neolithic farmers (who arrived from Anatolia ~9,000 years ago) and Bronze Age steppe migrants (who arrived ~4,500 years ago). It was likely the dominant haplogroup among European Mesolithic hunter-gatherers and survived the successive population turnovers that reshaped European ancestry. The two main branches diverged dramatically in their distributions: I1 became the signature haplogroup of Scandinavia and Northern Europe, while I2 dominates in Southeastern Europe, particularly in the Balkans. Both branches preserve ancient pre-Neolithic European paternal lineages.",
  interestingFact:
    "Ancient DNA recovered from European hunter-gatherers dating back 37,000 years has revealed haplogroup I lineages, making it the most ancient known continuous European paternal lineage — predating the invention of agriculture in Europe by over 30,000 years.",
  distribution: [
    { ethnicity: "Swedes", region: "Northern Europe", percentage: 37 },
    { ethnicity: "Norwegians", region: "Northern Europe", percentage: 32 },
    { ethnicity: "Danes", region: "Northern Europe", percentage: 34 },
    { ethnicity: "Bosniaks", region: "Southeastern Europe", percentage: 71 },
    { ethnicity: "Croats", region: "Southeastern Europe", percentage: 38 },
    { ethnicity: "Serbs", region: "Southeastern Europe", percentage: 35 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 29 },
    { ethnicity: "English", region: "Western Europe", percentage: 18 },
  ],
  statistics: {
    modernFrequency: "~7% of global male population",
    peakRegion: "Northern and Southeastern Europe",
    estimatedCarriers: 260_000_000,
  },
  tags: ["Europe", "Hunter-gatherer", "Mesolithic", "Paleolithic", "Scandinavia", "Balkans"],
  references: [
    "Fu et al. (2016) — The genetic history of Ice Age Europe. Nature 534, 200–205.",
    "Rootsi et al. (2004) — Phylogeography of Y-chromosome haplogroup I reveals distinct domains of prehistoric gene flow in Europe. American Journal of Human Genetics 75(1), 128–137.",
    "Olalde et al. (2019) — The genomic history of the Iberian Peninsula over the past 8000 years. Science 363(6432), 1230–1234.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default I;
