import type { Haplogroup } from "@/types/haplogroup";

const F_mt: Haplogroup = {
  id: "F_mt",
  name: "F (mtDNA)",
  type: "mtDNA",
  parent: "R_mt",
  children: [],
  formed: "~55,000 BCE",
  mrca: "~50,000 BCE",
  origin: {
    region: "Southeast Asia / South China",
    period: "Upper Paleolithic",
    coordinates: [108, 22],
  },
  description:
    "Mitochondrial haplogroup F is an R-derived lineage concentrated in East and Southeast Asia, with highest frequencies in Vietnam, southern China, and among some Tibetan populations. F1 is especially common in Southeast Asia, while F2 is found across a broader range of East Asian populations. F is closely related to B and together they form the East Asian core of the R macrohaplogroup. Ancient DNA has confirmed F's presence in prehistoric East Asian populations, and its distribution broadly overlaps with the spread of Austroasiatic and Tai-Kadai-speaking peoples across mainland Southeast Asia.",
  interestingFact:
    "Haplogroup F reaches its highest frequencies in Vietnam (~20%) and among the Li people of Hainan Island (~30%), populations considered to be among the earliest inhabitants of mainland Southeast Asia who have maintained relatively undiluted lineages since the initial settlement of the region.",
  distribution: [
    { ethnicity: "Vietnamese", region: "Southeast Asia", percentage: 20, sampleSize: 500 },
    { ethnicity: "Li (Hainan)", region: "East Asia", percentage: 30, sampleSize: 100 },
    { ethnicity: "Han Chinese (South)", region: "East Asia", percentage: 10, sampleSize: 1000 },
    { ethnicity: "Tibetans", region: "Central Asia / East Asia", percentage: 12, sampleSize: 300 },
    { ethnicity: "Thai", region: "Southeast Asia", percentage: 8, sampleSize: 400 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 4, sampleSize: 600 },
  ],
  statistics: {
    modernFrequency: "~4% of global female population",
    peakRegion: "Southeast Asia / South China",
    estimatedCarriers: 150_000_000,
  },
  tags: ["mtDNA", "East Asia", "Southeast Asia", "Vietnam", "Paleolithic", "Maternal lineage"],
  references: [
    "Kivisild et al. (2002) — The emerging limbs and twigs of the East Asian mtDNA tree. Molecular Biology and Evolution 19(10), 1737–1751.",
    "Macaulay et al. (2005) — Single, rapid coastal settlement of Asia revealed by analysis of complete mitochondrial genomes. Science 308(5724), 1034–1036.",
    "Qin et al. (2010) — Mitochondrial DNA diversity in the Chinese Kazak population. Forensic Science International: Genetics 4(5), e131–e134.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default F_mt;
