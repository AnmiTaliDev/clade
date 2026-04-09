import type { Haplogroup } from "@/types/haplogroup";

const R_mt: Haplogroup = {
  id: "R_mt",
  name: "R (mtDNA)",
  type: "mtDNA",
  parent: "N_mt",
  children: ["HV", "JT_mt", "U_mt"],
  formed: "~60,000 BCE",
  mrca: "~55,000 BCE",
  origin: {
    region: "Near East / South Asia",
    period: "Upper Paleolithic",
    coordinates: [52, 28],
  },
  description:
    "Mitochondrial haplogroup R (distinct from Y-DNA R) is a major branch of N that gave rise to the most common European maternal lineages. Its descendants include H and V (via HV), J and T (via JT), and U (which includes K). Collectively, R's descendants account for the majority of European, Near Eastern, and many Central and South Asian maternal lineages.",
  interestingFact:
    "The descendant branches of R (particularly H, U, J, and T) together account for roughly 80–90% of all European maternal DNA — making the R ancestor one of the most matrilineally influential humans in Eurasian prehistory.",
  distribution: [
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 80, sampleSize: 5000 },
    { ethnicity: "Near Easterners (average)", region: "Middle East", percentage: 55, sampleSize: 2000 },
  ],
  statistics: {
    modernFrequency: "~35% of global female population (as ancestor)",
    peakRegion: "Europe / Near East",
    estimatedCarriers: 1_300_000_000,
  },
  tags: ["mtDNA", "Europe", "Near East", "Maternal lineage", "Ancestral"],
  references: [
    "Torroni et al. (2006) — Harvesting the fruit of the human mtDNA tree. Trends in Genetics 22(6), 339–345.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default R_mt;
