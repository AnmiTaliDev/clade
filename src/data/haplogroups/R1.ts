import type { Haplogroup } from "@/types/haplogroup";

const R1: Haplogroup = {
  id: "R1",
  name: "R1",
  type: "Y-DNA",
  parent: "R",
  children: ["R1a", "R1b"],
  formed: "~22,500 BCE",
  mrca: "~20,000 BCE",
  origin: {
    region: "Central Asia (likely near modern Kazakhstan / Uzbekistan)",
    period: "Upper Paleolithic",
    coordinates: [65, 44],
  },
  description:
    "R1 is the parent clade of R1a and R1b — the two most widespread Y-DNA haplogroups in Europe and South Asia. R1 likely originated in Central Asia during the last glacial maximum and subsequently expanded with post-glacial population movements and, later, the Bronze Age steppe migrations. The M173 mutation defines R1.",
  interestingFact:
    "The split between R1a and R1b occurred approximately 25,000–22,000 years ago, yet today these two branches dominate entirely different geographic regions — R1b in Western Europe, R1a in Eastern Europe and South Asia — a divergence shaped by Bronze Age migrations thousands of years after the initial split.",
  distribution: [
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 50, sampleSize: 5000 },
  ],
  statistics: {
    modernFrequency: "~17% of global male population",
    peakRegion: "Europe / South Asia / Central Asia",
    estimatedCarriers: 640_000_000,
  },
  tags: ["Eurasian", "Indo-European", "Europe", "Paleolithic"],
  references: [
    "Semino et al. (2000) — The genetic legacy of Paleolithic Homo sapiens sapiens in extant Europeans. Science 290(5494), 1155–1159.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default R1;
