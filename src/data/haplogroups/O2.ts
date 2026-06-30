import type { Haplogroup } from "@/types/haplogroup";

const O2: Haplogroup = {
  id: "O2",
  name: "O2",
  type: "Y-DNA",
  parent: "O",
  children: ["O2a"],
  formed: "~30,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "East Asia / Yangtze River valley",
    period: "Upper Paleolithic",
    coordinates: [112, 28],
  },
  description:
    "Haplogroup O2 is by far the most common Y-DNA haplogroup in East Asia, dominant among Han Chinese (~55%), Koreans (~55%), Japanese (~38%), and Vietnamese (~55%). Its expansion is closely tied to the spread of rice agriculture from the Yangtze River valley beginning approximately 7,000 years ago — one of the most dramatic examples of demic diffusion in human prehistory. O2 effectively defines the paternal genetic landscape of East Asia: carrying Sinitic, Japonic, and Korean cultural and linguistic traditions across the continent. Ancient DNA from Neolithic Chinese sites confirms O2's deep roots in East Asia predating the Bronze Age.",
  interestingFact:
    "The geographic distribution of O2 matches the historical spread of rice cultivation from the Yangtze delta so precisely that population geneticists often use it as a genetic proxy for the demic expansion of early East Asian farmers — the men who carried rice agriculture also carried their Y chromosomes into Korea, Japan, and mainland Southeast Asia.",
  distribution: [
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 55, sampleSize: 2000 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 55, sampleSize: 600 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 38, sampleSize: 1000 },
    { ethnicity: "Vietnamese", region: "Southeast Asia", percentage: 55, sampleSize: 500 },
    { ethnicity: "Manchu", region: "East Asia", percentage: 50, sampleSize: 150 },
    { ethnicity: "Tibetans", region: "Central Asia / East Asia", percentage: 30, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~18% of global male population",
    peakRegion: "East Asia",
    estimatedCarriers: 680_000_000,
  },
  tags: ["East Asia", "Han Chinese", "Korea", "Japan", "Rice farming", "Neolithic", "Demic diffusion"],
  references: [
    "Shi et al. (2005) — Y-chromosome evidence of earliest modern human settlement in East Asia and multiple origins of Tibetan and Japanese populations. BMC Biology 3, 5.",
    "Zhong et al. (2011) — Extended Y chromosome investigation suggests postglacial migrations of modern humans into East Asia via the northern route. Molecular Biology and Evolution 28(1), 717–727.",
    "Hammer et al. (2006) — Population structure of Y chromosome SNP haplogroups in the United States and forensic implications for constructing Y chromosome STR databases. Forensic Science International 164(1), 45–55.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default O2;
