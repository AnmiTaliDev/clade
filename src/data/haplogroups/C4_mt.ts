import type { Haplogroup } from "@/types/haplogroup";

const C4_mt: Haplogroup = {
  id: "C4_mt",
  name: "C4 (mtDNA)",
  type: "mtDNA",
  parent: "C_mt",
  children: [],
  formed: "~25,000 BCE",
  mrca: "~15,000 BCE",
  origin: { region: "South Siberia / Central Asia", period: "Upper Paleolithic", coordinates: [95, 55] },
  description: "Haplogroup C4 (mtDNA) is a subclade of haplogroup C distributed primarily in South Siberia, Central Asia, and Mongolia. It is found at moderate frequencies in Altaic, Tuvan, Buryat, and other South Siberian populations, as well as in some Central Asian groups. Unlike C1 which is characteristic of the Americas, C4 is primarily an Asian lineage. It appears to have originated in the South Siberian or Central Asian region and diversified there, representing an important component of the mtDNA diversity of Inner Asia.",
  interestingFact: "C4 is frequently found in populations associated with the Altai region — a geographic crossroads that ancient genomics has identified as a key staging area for populations that later expanded into Northeast Asia, Siberia, and the Americas.",
  distribution: [
    { ethnicity: "Tuvans", region: "South Siberia", percentage: 12, sampleSize: 300 },
    { ethnicity: "Buryats", region: "South Siberia", percentage: 8, sampleSize: 400 },
    { ethnicity: "Mongolians", region: "Central/East Asia", percentage: 6, sampleSize: 600 },
    { ethnicity: "Altaians", region: "South Siberia", percentage: 10, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~0.5% of global female population", peakRegion: "South Siberia", estimatedCarriers: 10_000_000 },
  tags: ["Siberia", "Central Asia", "Mongolia", "Altai", "Tuva", "Paleolithic"],
  references: ["Derenko et al. (2007) — Phylogeographic analysis of mitochondrial DNA in North Asian populations. American Journal of Human Genetics 81(5), 1025–1041."],
  featured: false,
  addedAt: "2026-06-30",
};
export default C4_mt;
