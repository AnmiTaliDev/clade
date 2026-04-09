import type { Haplogroup } from "@/types/haplogroup";

const E: Haplogroup = {
  id: "E",
  name: "E",
  type: "Y-DNA",
  parent: "DE",
  children: ["E1a", "E1b1a", "E1b1b", "E2"],
  formed: "~50,000 BCE",
  mrca: "~45,000 BCE",
  origin: {
    region: "Sub-Saharan Africa",
    period: "Upper Paleolithic",
    coordinates: [25, 5],
  },
  description:
    "E is the dominant Y-DNA haplogroup in Africa, found in over 80% of sub-Saharan African men. It split into two major branches: E1b1a, which is the characteristic haplogroup of West, Central, and South Africa and was carried into the Americas via the transatlantic slave trade, and E1b1b, which is strongly associated with Afroasiatic-speaking populations of North Africa, the Horn of Africa, and Southern Europe. The spread of E1b1a is closely linked to the Niger-Congo (Bantu) language expansion across sub-Saharan Africa, while E1b1b tracks the dispersal of Afroasiatic speakers including Cushitic, Berber, and Semitic populations.",
  interestingFact:
    "E1b1a is the most common haplogroup among African Americans (~60%), directly reflecting the transatlantic slave trade routes from West and Central Africa — making haplogroup E a living genetic record of one of history's largest forced migrations.",
  distribution: [
    { ethnicity: "Yoruba", region: "West Africa", percentage: 80 },
    { ethnicity: "Zulu", region: "Southern Africa", percentage: 70 },
    { ethnicity: "Hausa", region: "West Africa", percentage: 75 },
    { ethnicity: "Amhara", region: "East Africa", percentage: 55 },
    { ethnicity: "Somalis (E1b1b branch)", region: "Horn of Africa", percentage: 77 },
    { ethnicity: "Berbers", region: "North Africa", percentage: 50 },
    { ethnicity: "North Africans (average)", region: "North Africa", percentage: 70 },
  ],
  statistics: {
    modernFrequency: "~20% of global male population",
    peakRegion: "Sub-Saharan Africa",
    estimatedCarriers: 780_000_000,
  },
  tags: ["Africa", "Niger-Congo", "Afroasiatic", "Bantu", "Neolithic"],
  references: [
    "Underhill & Kivisild (2007) — Use of Y chromosome and mitochondrial DNA population structure in tracing human migrations. Annual Review of Genetics 41, 539–564.",
    "Wood et al. (2005) — Contrasting patterns of Y chromosome and mtDNA variation in Africa: evidence for sex-biased demographic processes. European Journal of Human Genetics 13, 867–876.",
    "Cruciani et al. (2004) — Phylogeographic analysis of haplogroup E3b (E-M215) Y chromosomes reveals multiple migratory events within and out of Africa. American Journal of Human Genetics 74(5), 1014–1022.",
  ],
  featured: true,
  addedAt: "2026-04-09",
};

export default E;
