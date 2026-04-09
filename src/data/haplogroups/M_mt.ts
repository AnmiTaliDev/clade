import type { Haplogroup } from "@/types/haplogroup";

const M_mt: Haplogroup = {
  id: "M_mt",
  name: "M (mtDNA)",
  type: "mtDNA",
  parent: "L3",
  children: ["C_mt", "D_mt", "M7", "M8", "Z"],
  formed: "~65,000 BCE",
  mrca: "~60,000 BCE",
  origin: {
    region: "South Asia / coastal migration route",
    period: "Upper Paleolithic",
    coordinates: [75, 15],
  },
  description:
    "Mitochondrial haplogroup M (not to be confused with Y-DNA haplogroup M) is one of the two daughters of L3 — alongside N — that gave rise to all non-African maternal lineages. M is dominant in South Asia, East Asia, and Southeast Asia, and includes a wide array of subclades: C and D are found across Siberia and the Americas; M7 and M8 are prominent in East Asia; G is characteristic of Northeast Asia; and M lineages are found at very high frequencies in South Asian tribal populations. M is rare in Europe, where N-derived haplogroups (particularly H, U, J, and T) dominate.",
  interestingFact:
    "Haplogroup M is found at very high frequencies in South Asian tribal populations — such as the Chenchu, Irula, and Jarawa — who are considered remnants of the original Out-of-Africa coastal migration approximately 60,000 years ago, suggesting these groups have maintained relatively undiluted lineages since the initial peopling of South Asia.",
  distribution: [
    { ethnicity: "South Indians", region: "South Asia", percentage: 60 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 25 },
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 30 },
    { ethnicity: "Tibetans", region: "Central Asia / East Asia", percentage: 40 },
    { ethnicity: "Andamanese", region: "South Asia (Andaman Islands)", percentage: 50 },
    { ethnicity: "Mongolians", region: "East / Central Asia", percentage: 45 },
  ],
  statistics: {
    modernFrequency: "~25% of global female population",
    peakRegion: "South Asia / East Asia",
    estimatedCarriers: 950_000_000,
  },
  tags: ["mtDNA", "South Asia", "East Asia", "Out of Africa", "Coastal migration", "Maternal lineage"],
  references: [
    "Macaulay et al. (2005) — Single, rapid coastal settlement of Asia revealed by analysis of complete mitochondrial genomes. Science 308(5724), 1034–1036.",
    "Quintana-Murci et al. (1999) — Genetic evidence of an early exit of Homo sapiens sapiens from Africa through eastern Africa. Nature Genetics 23, 437–441.",
    "Kivisild et al. (2003) — The genetic heritage of the earliest settlers persists both in Indian tribal and caste populations. American Journal of Human Genetics 72(2), 313–332.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default M_mt;
