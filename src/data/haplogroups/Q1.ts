import type { Haplogroup } from "@/types/haplogroup";

const Q1: Haplogroup = {
  id: "Q1",
  name: "Q1",
  type: "Y-DNA",
  parent: "Q",
  children: ["Q1a"],
  formed: "~20,000 BCE",
  mrca: "~15,000 BCE",
  origin: {
    region: "Siberia / Beringia",
    period: "Upper Paleolithic",
    coordinates: [150, 65],
  },
  description:
    "Haplogroup Q1 is the subclade of Q that contains virtually all Native American patrilineal lineages. Q1a-M3, the principal American subclade, was carried by the founding population that crossed the Bering land bridge during the Last Glacial Maximum and rapidly spread through the entire length of the Americas. Q1 is also found among Siberian peoples such as the Kets, Selkups, and Yeniseian-speaking groups, providing a genetic link between Native Americans and their Asian ancestors. The close phylogenetic relationship of Q1 to P and R situates it within the broader Palaeolithic expansion of northern Eurasian populations.",
  interestingFact:
    "Q1a-M3 is found at near-fixation (approaching 100%) in several South American indigenous groups including the Quechua of Peru and the Guaraní of Paraguay, indicating that the entire male ancestry of these populations traces back to a single founding lineage that crossed into the Americas approximately 15,000–20,000 years ago.",
  distribution: [
    { ethnicity: "Quechua", region: "South America (Andes)", percentage: 98, sampleSize: 200 },
    { ethnicity: "Guaraní", region: "South America", percentage: 95, sampleSize: 150 },
    { ethnicity: "Maya", region: "Mesoamerica", percentage: 90, sampleSize: 250 },
    { ethnicity: "Navajo", region: "North America", percentage: 80, sampleSize: 150 },
    { ethnicity: "Kets", region: "Siberia", percentage: 90, sampleSize: 50 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 85, sampleSize: 1000 },
  ],
  clans: [
    { type: "dynasty", name: "Inca Empire", region: "South America (Andes)", note: "Q1a was the dominant patrilineal lineage of the Andean civilisations, including the ruling Sapa Inca lineage" },
    { type: "tribe", name: "Kets", region: "Siberia (Yenisei River)", note: "Yenisei River group carrying Q1 at ~90%, the closest Asian relatives of Native Americans" },
  ],
  statistics: {
    modernFrequency: "~4% of global male population",
    peakRegion: "Americas",
    estimatedCarriers: 140_000_000,
  },
  tags: ["Americas", "Native Americans", "Siberia", "Beringia", "Paleolithic", "Indigenous", "Inca", "Maya"],
  references: [
    "Lell et al. (2002) — The dual origin and Siberian affinities of Native American Y chromosomes. American Journal of Human Genetics 70(1), 192–206.",
    "Zegura et al. (2004) — High-resolution SNPs and microsatellite haplotypes point to a single, recent entry of Native American Y chromosomes into the Americas. Molecular Biology and Evolution 21(1), 164–175.",
    "Tamm et al. (2007) — Beringian standstill and spread of Native American founders. PLOS ONE 2(9), e829.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default Q1;
