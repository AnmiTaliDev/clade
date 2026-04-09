import type { Haplogroup } from "@/types/haplogroup";

const Q: Haplogroup = {
  id: "Q",
  name: "Q",
  type: "Y-DNA",
  parent: "P",
  children: ["Q1", "Q1a"],
  formed: "~35,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "Central Asia / Siberia",
    period: "Upper Paleolithic",
    coordinates: [85, 55],
  },
  description:
    "Haplogroup Q is the patrilineal haplogroup of almost all indigenous peoples of the Americas. It originated in Central or North Asia and migrated across the Bering land bridge approximately 15,000–20,000 years ago, founding all pre-Columbian populations of North, Central, and South America. The founding American subclade Q1a-M3 is found at frequencies approaching 100% in many South American groups such as the Maya, Quechua, and Guaraní. Outside the Americas, Q is found at very high frequencies among some Siberian groups — particularly the Kets (93%) and Selkups (66%) of the Yenisei region — and at low frequencies across Central Asia and South Asia.",
  interestingFact:
    "The Kets of Siberia — a small indigenous group of roughly 1,000 people living along the Yenisei River — carry haplogroup Q at ~93% frequency and speak a language isolate that some linguists tentatively link to the Na-Dené languages of North America, providing a possible linguistic echo of the ancient migration across the Bering land bridge.",
  distribution: [
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 90 },
    { ethnicity: "Kets", region: "Siberia", percentage: 93 },
    { ethnicity: "Maya", region: "Mesoamerica", percentage: 95 },
    { ethnicity: "Quechua", region: "South America", percentage: 98 },
    { ethnicity: "Navajo", region: "North America", percentage: 80 },
    { ethnicity: "Chukchi", region: "Siberia", percentage: 20 },
    { ethnicity: "Selkups", region: "Siberia", percentage: 66 },
  ],
  clans: [
    { type: "tribe", name: "Kets", region: "Siberia", note: "Small Yenisei River group with ~93% Q frequency and possible linguistic links to North American Na-Dené peoples" },
    { type: "dynasty", name: "Aztec ruling class", region: "Mesoamerica", note: "Q1a was the dominant haplogroup among pre-Columbian Mesoamerican elites" },
    { type: "tribe", name: "Maya", region: "Mesoamerica", note: "Q1a-M3 approaches 95% frequency among Maya populations" },
    { type: "tribe", name: "Inca", region: "South America", note: "Q1a was the characteristic haplogroup of the Andean civilizations including the Inca Empire" },
  ],
  statistics: {
    modernFrequency: "~5% of global male population (via Native Americans)",
    peakRegion: "Americas / Siberia",
    estimatedCarriers: 180_000_000,
  },
  tags: ["Americas", "Native Americans", "Siberia", "Bering land bridge", "Paleolithic", "Indigenous"],
  references: [
    "Lell et al. (2002) — The dual origin and Siberian affinities of Native American Y chromosomes. American Journal of Human Genetics 70(1), 192–206.",
    "Raff & Bolnick (2014) — Does mitochondrial haplogroup X indicate ancient trans-Atlantic migration to the Americas? A critical re-evaluation. PaleoAmerica 1(4), 297–304.",
    "Hammer et al. (2001) — Hierarchical patterns of global human Y-chromosome diversity. Molecular Biology and Evolution 18, 1189–1203.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default Q;
