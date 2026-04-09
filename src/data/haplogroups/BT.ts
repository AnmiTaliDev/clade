import type { Haplogroup } from "@/types/haplogroup";

const BT: Haplogroup = {
  id: "BT",
  name: "BT",
  type: "Y-DNA",
  parent: "A",
  children: ["B", "CT"],
  formed: "~130,000 BCE",
  mrca: "~100,000 BCE",
  origin: {
    region: "Africa",
    period: "Middle Paleolithic",
    coordinates: [25, 5],
  },
  description:
    "BT is the ancestral haplogroup of all non-A lineages. It splits into haplogroup B (found mainly in African hunter-gatherer groups such as the Pygmies) and haplogroup CT, which eventually gave rise to all non-African and most African haplogroups. The BT ancestor likely lived in Africa approximately 130,000 years ago.",
  interestingFact:
    "Every man outside Africa — and the vast majority of men inside Africa who are not Khoisan or archaic hunter-gatherers — descends from the BT ancestor.",
  distribution: [
    { ethnicity: "Biaka Pygmies", region: "Central Africa", percentage: 60, sampleSize: 80 },
    { ethnicity: "Baka Pygmies", region: "Central Africa", percentage: 55, sampleSize: 60 },
  ],
  statistics: {
    modernFrequency: "~99% of global male population (as ancestor)",
    peakRegion: "Worldwide",
    estimatedCarriers: 3_900_000_000,
  },
  tags: ["Root", "Africa", "Ancestral", "Paleolithic"],
  references: [
    "Y Chromosome Consortium (2002) — A Nomenclature System for the Tree of Human Y-Chromosomal Binary Haplogroups. Genome Research 12, 339–348.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default BT;
