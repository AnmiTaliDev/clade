import type { Haplogroup } from "@/types/haplogroup";

const C1_mt: Haplogroup = {
  id: "C1_mt",
  name: "C1 (mtDNA)",
  type: "mtDNA",
  parent: "C_mt",
  children: ["C1b_mt", "C1c_mt", "C1d_mt"],
  formed: "~30,000 BCE",
  mrca: "~18,000 BCE",
  origin: { region: "Northeast Asia / Beringia", period: "Upper Paleolithic", coordinates: [160, 60] },
  description: "Haplogroup C1 (mtDNA) is the dominant subclade of haplogroup C in the Americas, making it one of the five founding Native American maternal lineages. C1 entered the Americas via Beringia during the Last Glacial Maximum and diversified into C1b, C1c, C1d, and C1e sub-branches as populations spread throughout North and South America. It is found at high frequencies in many Native American tribes from Alaska to Patagonia. In Asia, C1 is present in Siberian and Arctic populations, confirming its Beringian origin.",
  interestingFact: "C1b, C1c, and C1d are found exclusively in the Americas — these American-specific sub-branches arose after the founding population crossed Beringia, making them genetic signatures of the initial peopling of the New World approximately 15,000–20,000 years ago.",
  distribution: [
    { ethnicity: "Native North Americans", region: "North America", percentage: 15, sampleSize: 800 },
    { ethnicity: "Native South Americans", region: "South America", percentage: 20, sampleSize: 700 },
    { ethnicity: "Siberians (Siberian Yupik)", region: "Northeast Asia", percentage: 10, sampleSize: 200 },
    { ethnicity: "Inuit / Arctic peoples", region: "Arctic", percentage: 8, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~1% of global female population", peakRegion: "Americas / Northeast Asia", estimatedCarriers: 20_000_000 },
  tags: ["Americas", "Siberia", "Beringia", "Native American", "Arctic", "Paleolithic"],
  references: ["Perego et al. (2010) — The initial peopling of the Americas: a growing number of founding mitochondrial genomes from Beringia. Genome Research 20(9), 1174–1179."],
  featured: false,
  addedAt: "2026-06-30",
};
export default C1_mt;
