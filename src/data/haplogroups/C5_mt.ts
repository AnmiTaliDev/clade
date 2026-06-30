import type { Haplogroup } from "@/types/haplogroup";

const C5_mt: Haplogroup = {
  id: "C5_mt",
  name: "C5 (mtDNA)",
  type: "mtDNA",
  parent: "C_mt",
  children: [],
  formed: "~25,000 BCE",
  mrca: "~12,000 BCE",
  origin: { region: "South Asia / Central Asia", period: "Upper Paleolithic", coordinates: [72, 30] },
  description: "Haplogroup C5 (mtDNA) is a subclade of haplogroup C found primarily in South Asia and Central Asia, particularly in Pakistan, northwestern India, and Afghanistan. It is also present at lower frequencies among some Tibetan and East Asian populations. C5 represents a southern branch of the haplogroup C radiation that likely entered South Asia from Central Asia during the Upper Paleolithic or Mesolithic periods. Its presence in the Indian subcontinent is notable as most other C subclades are characteristic of either the Americas or Siberia.",
  interestingFact: "C5 is one of the rare C subclades found in South Asia rather than Northeast Asia or the Americas, making it an important lineage for understanding the complex prehistory of migrations through Central Asia and into the Indian subcontinent.",
  distribution: [
    { ethnicity: "Pakistanis", region: "South Asia", percentage: 3, sampleSize: 600 },
    { ethnicity: "NW Indians", region: "South Asia", percentage: 2, sampleSize: 800 },
    { ethnicity: "Afghans", region: "Central / South Asia", percentage: 4, sampleSize: 300 },
    { ethnicity: "Tibetans", region: "East Asia / High Asia", percentage: 3, sampleSize: 300 },
  ],
  statistics: { modernFrequency: "~0.3% of global female population", peakRegion: "South Asia / Central Asia", estimatedCarriers: 6_000_000 },
  tags: ["South Asia", "Central Asia", "Pakistan", "Afghanistan", "Tibet", "Paleolithic"],
  references: ["Metspalu et al. (2004) — Most of the extant mtDNA boundaries in south and southwest Asia were likely shaped during the initial settlement of Eurasia by anatomically modern humans. BMC Genetics 5, 26."],
  featured: false,
  addedAt: "2026-06-30",
};
export default C5_mt;
