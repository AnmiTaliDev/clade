import type { Haplogroup } from "@/types/haplogroup";

const U_mt: Haplogroup = {
  id: "U_mt",
  name: "U (mtDNA)",
  type: "mtDNA",
  parent: "R_mt",
  children: ["K_mt", "U2", "U3", "U4", "U5", "U6", "U8"],
  formed: "~55,000 BCE",
  mrca: "~50,000 BCE",
  origin: {
    region: "Near East / South Asia",
    period: "Upper Paleolithic",
    coordinates: [48, 28],
  },
  description:
    "Mitochondrial haplogroup U is one of the oldest mtDNA haplogroups in Europe and the Near East, and contains several historically important subclades. U5 is considered the most ancient surviving European maternal haplogroup — it was carried by the first anatomically modern humans who entered Europe approximately 45,000 years ago and is still found today at elevated frequencies in the Sami (48%) and other Northern Europeans who preserve Mesolithic hunter-gatherer ancestry. U2e is associated with Yamnaya steppe ancestry and is found across Eastern Europe. Subclade K (U8b) is notably common among Ashkenazi Jews (~32%) and among Druze. U6 spread into North Africa.",
  interestingFact:
    "Haplogroup U5 is the oldest surviving European maternal lineage, originally carried by the hunter-gatherers who first colonised Europe after the Out-of-Africa migration and who are still genetically detectable in modern European populations roughly 45,000 years later — a living thread connecting present-day Europeans to the Ice Age.",
  distribution: [
    { ethnicity: "Sami", region: "Northern Europe", percentage: 48 },
    { ethnicity: "Basques", region: "Western Europe", percentage: 22 },
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 15 },
    { ethnicity: "Near Easterners", region: "Near East", percentage: 12 },
    { ethnicity: "South Asians", region: "South Asia", percentage: 12 },
    { ethnicity: "Berbers", region: "North Africa", percentage: 10 },
  ],
  statistics: {
    modernFrequency: "~11% of global female population",
    peakRegion: "Northern Europe / Near East",
    estimatedCarriers: 420_000_000,
  },
  tags: ["mtDNA", "Europe", "Paleolithic", "Hunter-gatherer", "Sami", "Near East", "Maternal lineage"],
  references: [
    "Torroni et al. (2006) — Harvesting the fruit of the human mtDNA tree. Trends in Genetics 22(6), 339–345.",
    "Bramanti et al. (2009) — Genetic discontinuity between local hunter-gatherers and central Europe's first farmers. Science 326(5949), 137–140.",
    "Malyarchuk et al. (2010) — The peopling of Europe from the mitochondrial haplogroup U5 perspective. PLOS ONE 5(4), e10285.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default U_mt;
