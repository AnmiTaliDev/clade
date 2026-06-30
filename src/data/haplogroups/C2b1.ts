import type { Haplogroup } from "@/types/haplogroup";

const C2b1: Haplogroup = {
  id: "C2b1",
  name: "C2b1 (F3789)",
  type: "Y-DNA",
  parent: "C2b",
  children: ["C2b1a", "C2b1b"],
  formed: "~20,000 BCE",
  mrca: "~12,000 BCE",
  origin: {
    region: "Central Asia / Southern Siberia",
    period: "Upper Paleolithic",
    coordinates: [102, 50],
  },
  description:
    "Haplogroup C2b1 (C-F3789) is the major subclade of C2b and encompasses virtually all Mongolic, Tungusic, and North American indigenous C2 lineages. It splits into two principal branches: C2b1a (M401), which is the Mongolic branch ancestral to the famous 'Star Cluster' associated with Genghis Khan, and C2b1b (Z1338), the Tungusic-Siberian branch found among Evenks, Manchu, Nanai, and other Siberian peoples. C2b1 likely emerged in the Baikal region or southern Siberia during the late Upper Paleolithic and subsequently diversified as its carriers spread across the steppe and taiga zones of northern Eurasia.",
  interestingFact:
    "C2b1 is the ancestor of two entirely different population groups that represent opposite ends of the historical spectrum: the Mongolic nomads who built the largest land empire in history, and the Tungusic forest hunters of Siberia who maintained a completely different lifestyle in the taiga — yet both descend from the same C2b1 ancestor who lived on the Siberian steppe roughly 12,000 years ago.",
  distribution: [
    { ethnicity: "Mongols", region: "East Asia / Central Asia", percentage: 55, sampleSize: 500 },
    { ethnicity: "Buryats", region: "Siberia", percentage: 65, sampleSize: 300 },
    { ethnicity: "Evenks", region: "Siberia", percentage: 55, sampleSize: 150 },
    { ethnicity: "Kazakhs", region: "Central Asia", percentage: 30, sampleSize: 600 },
    { ethnicity: "Manchu", region: "East Asia", percentage: 25, sampleSize: 150 },
  ],
  statistics: {
    modernFrequency: "~2.5% of global male population",
    peakRegion: "Mongolia / Siberia",
    estimatedCarriers: 90_000_000,
  },
  tags: ["Central Asia", "Siberia", "Mongols", "Tungusic", "Steppe", "Paleolithic"],
  references: [
    "Zerjal et al. (2003) — The Genetic Legacy of the Mongols. American Journal of Human Genetics 72(3), 717–721.",
    "Dulik et al. (2012) — Y-chromosome analysis in Athapaskan-speaking populations from central Alaska and western Canada. American Journal of Physical Anthropology 147(4), 533–549.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2b1;
