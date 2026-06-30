import type { Haplogroup } from "@/types/haplogroup";

const O2a2b1: Haplogroup = {
  id: "O2a2b1",
  name: "O2a2b1 (M134)",
  type: "Y-DNA",
  parent: "O2a2b",
  children: [],
  formed: "~10,000 BCE",
  mrca: "~4,000 BCE",
  origin: {
    region: "Central China / Yangtze–Yellow River interzone",
    period: "Neolithic",
    coordinates: [112, 32],
  },
  description:
    "Haplogroup O2a2b1 (M134) is a major subclade of O2a2b found at high frequencies among Han Chinese, Tibetans, and several other Sino-Tibetan-speaking populations. Its M134 marker defines one of the most populous Y-chromosome lineages in Sino-Tibetan language family groups. O2a2b1 is found at significant frequencies across central, northern, and southwestern China, among ethnic Tibetans, Yi, Bai, Naxi, and other Tibeto-Burman groups, and among Korean and Japanese populations at lower frequencies. Its distribution closely correlates with the spread of Sino-Tibetan languages from the Yellow River valley, making it one of the strongest genetic markers of the Sino-Tibetan linguistic expansion.",
  interestingFact:
    "O2a2b1 (M134) is found at ~25–30% among Tibetans, whose ancestors diverged from Yellow River valley populations approximately 5,000–6,000 years ago. This haplogroup thus connects modern Tibetan Buddhist monks in the high-altitude monasteries of the Himalayas with their lowland Chinese kin through a shared patrilineal lineage that predates the Tibetan plateau's settlement.",
  distribution: [
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 22, sampleSize: 2000 },
    { ethnicity: "Tibetans", region: "Central Asia / Himalayas", percentage: 28, sampleSize: 300 },
    { ethnicity: "Yi", region: "Southwest China", percentage: 35, sampleSize: 200 },
    { ethnicity: "Bai", region: "Yunnan (China)", percentage: 30, sampleSize: 150 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 8, sampleSize: 600 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 5, sampleSize: 1000 },
  ],
  statistics: {
    modernFrequency: "~5% of global male population",
    peakRegion: "China / Tibet",
    estimatedCarriers: 190_000_000,
  },
  tags: ["Han Chinese", "Tibetans", "Sino-Tibetan", "China", "Neolithic", "Yellow River", "Himalayas"],
  references: [
    "Shi et al. (2005) — Y-chromosome evidence of earliest modern human settlement in East Asia. BMC Biology 3, 5.",
    "Zhong et al. (2011) — Extended Y chromosome investigation suggests postglacial migrations of modern humans into East Asia. Molecular Biology and Evolution 28(1), 717–727.",
    "Peng et al. (2014) — The deep population history of northern East Asia from the Late Pleistocene to the Holocene. Cell 162(1), 47–57.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default O2a2b1;
