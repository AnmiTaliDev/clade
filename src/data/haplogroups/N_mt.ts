import type { Haplogroup } from "@/types/haplogroup";

const N_mt: Haplogroup = {
  id: "N_mt",
  name: "N (mtDNA)",
  type: "mtDNA",
  parent: "L3",
  children: ["R_mt"],
  formed: "~65,000 BCE",
  mrca: "~60,000 BCE",
  origin: {
    region: "Near East / South Asia",
    period: "Upper Paleolithic",
    coordinates: [50, 25],
  },
  description:
    "Mitochondrial haplogroup N (not to be confused with Y-DNA haplogroup N) is one of the two major out-of-Africa maternal lineages, alongside M. From N descended haplogroup R (which gave rise to H, U, J, T, and many other European lineages), as well as several other distinctive branches. N lineages are found across Eurasia, Oceania, and the Americas.",
  interestingFact:
    "N and M are the two daughters of L3 that together account for all non-African maternal lineages. They likely represent two distinct waves or routes of the Out-of-Africa migration — or perhaps a single migration that rapidly diverged upon entering Eurasia.",
  distribution: [
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 55, sampleSize: 5000 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 50, sampleSize: 2000 },
  ],
  statistics: {
    modernFrequency: "~45% of global female population (as ancestor)",
    peakRegion: "Europe / Near East / Americas",
    estimatedCarriers: 1_700_000_000,
  },
  tags: ["mtDNA", "Out of Africa", "Eurasian", "Maternal lineage", "Ancestral"],
  references: [
    "Macaulay et al. (2005) — Single, rapid coastal settlement of Asia revealed by analysis of complete mitochondrial genomes. Science 308(5724), 1034–1036.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default N_mt;
