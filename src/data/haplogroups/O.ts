import type { Haplogroup } from "@/types/haplogroup";

const O: Haplogroup = {
  id: "O",
  name: "O",
  type: "Y-DNA",
  parent: "NO",
  children: ["O1", "O2"],
  formed: "~40,000 BCE",
  mrca: "~34,000 BCE",
  origin: {
    region: "Southeast Asia / South China",
    period: "Upper Paleolithic",
    coordinates: [108, 22],
  },
  description:
    "Haplogroup O is the overwhelmingly dominant Y-DNA haplogroup in East and Southeast Asia, accounting for 60–80% of men in China, Japan, Korea, Vietnam, Thailand, Malaysia, and the Philippines. The haplogroup split into two main branches: O1, which is associated with the Austronesian expansion from Taiwan into the Pacific and Southeast Asia, and O2, which dominates among Han Chinese, Koreans, Japanese, and Vietnamese populations. The common ancestor of all O lineages lived approximately 40,000 years ago in Southeast Asia, making haplogroup O one of the most geographically coherent examples of a paternal lineage linked to a specific geographic and cultural sphere.",
  interestingFact:
    "The geographic expansion of O2 tracks almost perfectly with the spread of rice agriculture from the Yangtze River valley roughly 7,000–4,000 years ago, making it one of the most striking documented examples of demic diffusion — the spread of genes alongside agricultural technology rather than merely the adoption of farming practices.",
  distribution: [
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 70 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 76 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 53 },
    { ethnicity: "Vietnamese", region: "Southeast Asia", percentage: 70 },
    { ethnicity: "Thai", region: "Southeast Asia", percentage: 58 },
    { ethnicity: "Malay", region: "Southeast Asia", percentage: 58 },
    { ethnicity: "Filipino", region: "Southeast Asia", percentage: 60 },
  ],
  statistics: {
    modernFrequency: "~25% of global male population",
    peakRegion: "East Asia",
    estimatedCarriers: 950_000_000,
  },
  tags: ["East Asia", "Southeast Asia", "Neolithic", "Rice farming", "Han", "Korea", "Japan", "Austronesian"],
  references: [
    "Shi et al. (2005) — Y-chromosome evidence of earliest modern human settlement in East Asia and multiple origins of Tibetan and Japanese populations. BMC Biology 3, 5.",
    "Zhong et al. (2011) — Extended Y chromosome investigation suggests postglacial migrations of modern humans into East Asia via the northern route. Molecular Biology and Evolution 28(1), 717–727.",
    "Blench & Ross (2008) — The contribution of linguistics to the study of haplogroup O in the Asian Pacific. The Peopling of East Asia: Putting Together Archaeology, Linguistics and Genetics.",
  ],
  featured: true,
  addedAt: "2026-04-09",
};

export default O;
