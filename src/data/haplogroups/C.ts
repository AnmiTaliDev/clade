import type { Haplogroup } from "@/types/haplogroup";

const C: Haplogroup = {
  id: "C",
  name: "C",
  type: "Y-DNA",
  parent: "CT",
  children: ["C1", "C2"],
  formed: "~65,000 BCE",
  mrca: "~53,000 BCE",
  origin: {
    region: "South Asia / coastal migration route",
    period: "Upper Paleolithic",
    coordinates: [75, 15],
  },
  description:
    "Haplogroup C is one of the oldest non-African haplogroups and is associated with some of the earliest out-of-Africa coastal migrations. Its branches span from South Asia (C-M356) to Australia and Melanesia (C-M38 / C4), the Americas (minor presence), and East/Central Asia (C2 / C-M217). C2 in particular became dominant in Mongolia and among Turkic-Mongolic peoples of Central Asia.",
  interestingFact:
    "The Australian Aboriginal paternal lineage belongs predominantly to haplogroup C4 (a branch of C), reflecting the initial peopling of Australia approximately 50,000 years ago — one of the oldest continuous genetic lineages in any single geographic region.",
  distribution: [
    { ethnicity: "Aboriginal Australians", region: "Australia", percentage: 60, sampleSize: 150 },
    { ethnicity: "Mongols", region: "East Asia / Central Asia", percentage: 60, sampleSize: 500 },
    { ethnicity: "Kazakhs", region: "Central Asia", percentage: 40, sampleSize: 600 },
    { ethnicity: "Papuans", region: "Oceania", percentage: 30, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~5% of global male population",
    peakRegion: "Mongolia / Australia / Oceania",
    estimatedCarriers: 190_000_000,
  },
  tags: ["Oceania", "Central Asia", "Mongols", "Out of Africa", "Coastal migration", "Paleolithic"],
  references: [
    "Karafet et al. (2010) — Major east–west division underlies Y chromosome stratification across Indonesia. Molecular Biology and Evolution 27(8), 1833–1844.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default C;
