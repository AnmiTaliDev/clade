import type { Haplogroup } from "@/types/haplogroup";

const C2a1: Haplogroup = {
  id: "C2a1",
  name: "C2a1 (M93)",
  type: "Y-DNA",
  parent: "C2a",
  children: ["C2a1a"],
  formed: "~25,000 BCE",
  mrca: "~15,000 BCE",
  origin: {
    region: "East Asia",
    period: "Upper Paleolithic",
    coordinates: [120, 35],
  },
  description:
    "Haplogroup C2a1 (C-M93) is the principal East Asian subclade of C2a and is found at low but consistent frequencies across China, Korea, and Japan. In Japan, C2a1 is particularly associated with the Yayoi agricultural migrants who arrived from the Korean Peninsula around 900 BCE, rather than with the earlier Jomon hunter-gatherers. Ancient DNA from sites across the Korean Peninsula and Yellow River valley has confirmed C2a1's presence in Neolithic and Bronze Age sedentary populations, suggesting this lineage was spread by early agricultural communities of continental East Asia rather than steppe pastoralists.",
  interestingFact:
    "C2a1 is one of the few haplogroup C lineages firmly associated with sedentary agricultural populations rather than nomadic pastoralists — ancient DNA confirms its presence in Chinese Neolithic farming sites along the Yellow River, making it a genetic marker of early East Asian civilisation rather than steppe expansion.",
  distribution: [
    { ethnicity: "Koreans", region: "East Asia", percentage: 5, sampleSize: 800 },
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 3, sampleSize: 2000 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 3, sampleSize: 1000 },
    { ethnicity: "Vietnamese", region: "Southeast Asia", percentage: 2, sampleSize: 500 },
    { ethnicity: "Manchu", region: "East Asia", percentage: 4, sampleSize: 150 },
  ],
  statistics: {
    modernFrequency: "~0.8% of global male population",
    peakRegion: "Korea / North China",
    estimatedCarriers: 30_000_000,
  },
  tags: ["East Asia", "Japan", "Korea", "China", "Neolithic", "Agriculture"],
  references: [
    "Wei et al. (2018) — Phylogenetic analysis of the Y-chromosome haplogroup C2b-F1067 suggests a paternal link between East Asian and Amerindian populations. PLOS ONE 13(5), e0197744.",
    "Hammer et al. (2006) — Population structure of Y chromosome SNP haplogroups in the United States and forensic implications for constructing Y chromosome STR databases. Forensic Science International 164(1), 45–55.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1;
