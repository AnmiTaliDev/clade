import type { Haplogroup } from "@/types/haplogroup";

const DE: Haplogroup = {
  id: "DE",
  name: "DE",
  type: "Y-DNA",
  parent: "CT",
  children: ["D", "E"],
  formed: "~70,000 BCE",
  mrca: "~65,000 BCE",
  origin: {
    region: "Africa or Southwest Asia",
    period: "Upper Paleolithic",
    coordinates: [40, 10],
  },
  description:
    "DE is the ancestor of haplogroups D and E. Haplogroup D is found mainly in East Asia (Japan, Tibet) and the Andaman Islands, while haplogroup E is the predominant Y-DNA lineage in Africa. The DE ancestor may have lived in Africa or may represent an early out-of-Africa movement that partially returned. DE and its descendants represent some of the deepest human patrilineal lineages outside haplogroup A.",
  interestingFact:
    "Haplogroup D is found at high frequencies in Japan (35–40%) and among Tibetans (~50%), while its sibling branch E dominates sub-Saharan Africa. This dramatic geographic separation from a single ancestor reflects ancient migration patterns during the Upper Paleolithic.",
  distribution: [
    { ethnicity: "Japanese", region: "East Asia", percentage: 38, sampleSize: 1000 },
    { ethnicity: "Tibetans", region: "East Asia", percentage: 50, sampleSize: 300 },
    { ethnicity: "Yoruba", region: "West Africa", percentage: 80, sampleSize: 500 },
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 65, sampleSize: 400 },
    { ethnicity: "Somalis", region: "East Africa", percentage: 77, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "~30% of global male population",
    peakRegion: "Sub-Saharan Africa / East Asia",
    estimatedCarriers: 1_100_000_000,
  },
  tags: ["Africa", "East Asia", "Japan", "Tibet", "Paleolithic"],
  references: [
    "Hammer et al. (2009) — Out of Africa and back again: nested cladistic analysis of human Y chromosome variation. Molecular Biology and Evolution 15(4), 427–441.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default DE;
