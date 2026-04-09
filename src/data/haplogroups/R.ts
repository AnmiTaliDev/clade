import type { Haplogroup } from "@/types/haplogroup";

const R: Haplogroup = {
  id: "R",
  name: "R",
  type: "Y-DNA",
  parent: "P",
  children: ["R1", "R2"],
  formed: "~28,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "Central Asia",
    period: "Upper Paleolithic",
    coordinates: [70, 42],
  },
  description:
    "Haplogroup R is the parent of R1 (which contains R1a and R1b, dominant across Europe and South Asia) and R2 (found mainly in South Asia and Central Asia). R likely originated in Central Asia during the Upper Paleolithic and expanded dramatically with the Bronze Age steppe migrations. It is the most numerically dominant Y-DNA macro-haplogroup in Eurasia today.",
  interestingFact:
    "R1a and R1b together are carried by an estimated 600–700 million men, making haplogroup R arguably the most successful paternal lineage radiation in the last 30,000 years of human history.",
  distribution: [
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 55, sampleSize: 5000 },
    { ethnicity: "South Asians (average)", region: "South Asia", percentage: 35, sampleSize: 3000 },
    { ethnicity: "Central Asians (average)", region: "Central Asia", percentage: 35, sampleSize: 2000 },
  ],
  statistics: {
    modernFrequency: "~17% of global male population",
    peakRegion: "Europe / South Asia",
    estimatedCarriers: 650_000_000,
  },
  tags: ["Eurasian", "Indo-European", "Steppe", "Bronze Age", "Europe", "South Asia"],
  references: [
    "Underhill et al. (2010) — Separating the post-Glacial coancestry of European and Asian Y chromosomes within haplogroup R1a. European Journal of Human Genetics 18, 479–484.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default R;
