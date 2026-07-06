import type { Haplogroup } from "@/types/haplogroup";

const D_mt: Haplogroup = {
  id: "D_mt",
  name: "D (mtDNA)",
  type: "mtDNA",
  parent: "M_mt",
  children: ["D1_mt", "D2_mt", "D3_mt", "D4_mt", "D5_mt"],
  formed: "~55,000 BCE",
  mrca: "~50,000 BCE",
  origin: {
    region: "East Asia",
    period: "Upper Paleolithic",
    coordinates: [110, 35],
  },
  description:
    "Mitochondrial haplogroup D is one of the most widespread and diverse M-derived lineages in East Asia and northeastern Siberia, and one of the five founding maternal haplogroups of Native Americans. D4 is the predominant subclade in Japan, Korea, and China, while D1 is characteristic of Native American populations. D is common among Tibetans and Mongolians, and its distribution across East Asia, Siberia, and the Americas reflects a deep connection to the Upper Paleolithic migrations that peopled these regions.",
  interestingFact:
    "Haplogroup D4 is the single most common mtDNA haplogroup in Japan, carried by approximately 30% of Japanese women — a reflection of the ancient Jomon and subsequent Yayoi migrations that shaped the Japanese maternal gene pool over the past 3,000 years.",
  distribution: [
    { ethnicity: "Japanese", region: "East Asia", percentage: 30, sampleSize: 1000 },
    { ethnicity: "Koreans", region: "East Asia", percentage: 28, sampleSize: 600 },
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 20, sampleSize: 2000 },
    { ethnicity: "Tibetans", region: "Central Asia / East Asia", percentage: 45, sampleSize: 300 },
    { ethnicity: "Mongolians", region: "Central Asia", percentage: 40, sampleSize: 400 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 10, sampleSize: 800 },
  ],
  statistics: {
    modernFrequency: "~5% of global female population",
    peakRegion: "East Asia / Siberia",
    estimatedCarriers: 190_000_000,
  },
  tags: ["mtDNA", "East Asia", "Japan", "Native Americans", "Siberia", "Maternal lineage", "Paleolithic"],
  references: [
    "Tamm et al. (2007) — Beringian standstill and spread of Native American founders. PLOS ONE 2(9), e829.",
    "Tanaka et al. (2004) — Mitochondrial genome variation in eastern Asia and the peopling of Japan. Genome Research 14(10a), 1832–1850.",
    "Forster et al. (1996) — Origin and evolution of Native American mtDNA variation. American Journal of Human Genetics 59(4), 935–945.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default D_mt;
