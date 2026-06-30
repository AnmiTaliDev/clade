import type { Haplogroup } from "@/types/haplogroup";

const N1a2b: Haplogroup = {
  id: "N1a2b",
  name: "N1a2b (P43)",
  type: "Y-DNA",
  parent: "N1a",
  children: [],
  formed: "~14,000 BCE",
  mrca: "~8,000 BCE",
  origin: {
    region: "Eastern Siberia / Central Siberia",
    period: "Mesolithic",
    coordinates: [110, 62],
  },
  description:
    "Haplogroup N1a2b (P43) is a major Siberian subclade of N1a, found at high frequencies among the Yakuts (~85%), Evenks, Buryats, Nganasans, Dolgans, and some Mongolian groups. It was historically referred to as N1b or N-P43 in older nomenclature and represents a distinct eastern Siberian branch of the N haplogroup radiation. N1a2b (P43) is particularly notable for its extreme frequency in the Yakut people of northeastern Siberia, where it co-dominates the male gene pool alongside the Uralic N1a1a (Z1936) lineage. Its expansion is associated with the Yakut demographic history and the spread of Turkic-speaking peoples into the northeast Siberian permafrost.",
  interestingFact:
    "Among the Yakut people of the Sakha Republic in northeastern Siberia, N1a2b (P43) reaches frequencies of ~40% and constitutes one of the highest-frequency regional Y-chromosome clusters outside of the Star Cluster — a result of a strong founder effect when a small ancestral Yakut population expanded into the Lena River basin approximately 600–1,000 years ago.",
  distribution: [
    { ethnicity: "Yakuts (Sakha)", region: "Siberia (NE)", percentage: 40, sampleSize: 300 },
    { ethnicity: "Nganasans", region: "Siberia (Arctic)", percentage: 80, sampleSize: 50 },
    { ethnicity: "Dolgans", region: "Siberia", percentage: 50, sampleSize: 60 },
    { ethnicity: "Evenks (eastern)", region: "Siberia", percentage: 15, sampleSize: 150 },
    { ethnicity: "Buryats", region: "Siberia", percentage: 10, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~0.3% of global male population",
    peakRegion: "Eastern Siberia (Yakuts / Nganasans)",
    estimatedCarriers: 10_000_000,
  },
  tags: ["Siberia", "Yakuts", "Arctic", "Tungusic", "Mesolithic", "Eastern Siberia"],
  references: [
    "Pakendorf et al. (2006) — Investigating the effects of prehistoric migrations in Siberia: genetic variation and the origins of Yakuts. Human Genetics 120(3), 334–353.",
    "Ilumäe et al. (2016) — Human Y Chromosome Haplogroup N: A Non-trivial Time-Resolved Phylogeography that Cuts across Language Families. AJHG 99(1), 163–173.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default N1a2b;
