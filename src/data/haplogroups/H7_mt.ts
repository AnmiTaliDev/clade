import type { Haplogroup } from "@/types/haplogroup";

const H7_mt: Haplogroup = {
  id: "H7_mt",
  name: "H7 (mtDNA)",
  type: "mtDNA",
  parent: "H_mt",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Near East / South Asia", period: "Mesolithic", coordinates: [48, 32] },
  description: "Haplogroup H7 is an H subclade with its highest frequencies in the Near East and South Asia, particularly in the Arabian Peninsula, Iran, and the Indian subcontinent. It extends into Central Asia and is found at low frequencies in parts of Europe. H7 represents an eastward extension of the H radiation beyond the typical European range of H1 and H3, and was likely part of the genetic diversity brought into South Asia through ancient population movements from the Near East.",
  interestingFact: "H7 is one of the rare H subclades found at notable frequencies in South Asia, reflecting westward connections between the Indian subcontinent and the Near East through the ancient populations of the Iranian plateau and Central Asian corridor.",
  distribution: [
    { ethnicity: "Arabians", region: "Middle East", percentage: 5, sampleSize: 400 },
    { ethnicity: "Iranians", region: "West Asia", percentage: 4, sampleSize: 500 },
    { ethnicity: "South Asians (Pakistan/NW India)", region: "South Asia", percentage: 3, sampleSize: 600 },
    { ethnicity: "Central Asians", region: "Central Asia", percentage: 2, sampleSize: 400 },
  ],
  statistics: { modernFrequency: "~0.4% of global female population", peakRegion: "Arabian Peninsula / Iran", estimatedCarriers: 8_000_000 },
  tags: ["Near East", "South Asia", "Arabia", "Iran", "Mesolithic"],
  references: ["Abu-Amero et al. (2008) — Mitochondrial DNA structure in the Arabian Peninsula. BMC Evolutionary Biology 8, 45."],
  featured: false,
  addedAt: "2026-06-30",
};
export default H7_mt;
