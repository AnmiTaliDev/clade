import type { Haplogroup } from "@/types/haplogroup";

const G1: Haplogroup = {
  id: "G1",
  name: "G1 (M285)",
  type: "Y-DNA",
  parent: "G",
  children: [],
  formed: "~22,000 BCE",
  mrca: "~15,000 BCE",
  origin: {
    region: "Near East / Central Asia",
    period: "Upper Paleolithic",
    coordinates: [58, 36],
  },
  description:
    "Haplogroup G1 is the lesser-known of the two main G branches and is concentrated in Central Asia, particularly among the Hazara of Afghanistan (~30%) and several Iranian and Kazakh populations. Unlike G2a — which spread west with Neolithic farmers — G1 appears to have remained anchored in a Central Asian zone. The Hazara carry G1 at elevated frequencies, possibly reflecting ancestry from populations that inhabited the region prior to the Mongol expansion of the 13th century CE. G1 is rare in Europe and East Asia and is generally found at low frequencies wherever it occurs outside its Central Asian core.",
  interestingFact:
    "The high frequency of G1 among the Hazara of Afghanistan (~30%) may preserve a genetic signal from pre-Islamic and pre-Turkic populations of the region, making G1 one of the few lineages linking modern Central Asians to the ancient inhabitants of the Iranian Plateau and surrounding areas.",
  distribution: [
    { ethnicity: "Hazara", region: "Central Asia (Afghanistan)", percentage: 30, sampleSize: 150 },
    { ethnicity: "Iranians", region: "Near East", percentage: 3, sampleSize: 500 },
    { ethnicity: "Kazakhs", region: "Central Asia", percentage: 6, sampleSize: 300 },
    { ethnicity: "Uzbeks", region: "Central Asia", percentage: 5, sampleSize: 200 },
    { ethnicity: "Tajiks", region: "Central Asia", percentage: 4, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~0.5% of global male population",
    peakRegion: "Central Asia / Afghanistan",
    estimatedCarriers: 15_000_000,
  },
  tags: ["Near East", "Central Asia", "Afghanistan", "Hazara", "Upper Paleolithic"],
  references: [
    "Sengupta et al. (2006) — Polarity and temporality of high-resolution Y-chromosome distributions in India identify both indigenous and exogenous expansions and reveal minor genetic influence of Central Asian pastoralists. American Journal of Human Genetics 78(2), 202–221.",
    "Underhill & Kivisild (2007) — Use of Y chromosome and mitochondrial DNA population structure in tracing human migrations. Annual Review of Genetics 41, 539–564.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default G1;
