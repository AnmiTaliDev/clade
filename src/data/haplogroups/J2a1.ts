import type { Haplogroup } from "@/types/haplogroup";

const J2a1: Haplogroup = {
  id: "J2a1",
  name: "J2a1 (L26)",
  type: "Y-DNA",
  parent: "J2a",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~7,000 BCE",
  origin: { region: "Near East / Anatolia", period: "Epipaleolithic / Neolithic", coordinates: [36, 38] },
  description: "Haplogroup J2a1 (L26) is the principal subclade of J2a and arguably the most widespread and diverse J2 branch, containing dozens of sub-branches found across the Near East, Caucasus, Mediterranean, and South Asia. L26 is found at high frequencies in Anatolia, the Caucasus (Georgia, Armenia), Iran, Lebanon, and among various South Asian populations. It is also notable among Ashkenazi Jews, who carry J2a1 at elevated frequencies. J2a1 appears to have expanded primarily during the Neolithic and Bronze Age periods, associated with the spread of early farming and subsequently with the urban Bronze Age civilizations of the Near East.",
  interestingFact: "J2a1 has been proposed as a genetic marker of the spread of the Neolithic 'package' (farming, pottery, and animal husbandry) from the Fertile Crescent into Anatolia and the Mediterranean — ancient DNA evidence from Neolithic farming sites in Europe and the Near East has repeatedly recovered J2a1, suggesting Neolithic farmers were disproportionately J2a1 carriers.",
  distribution: [
    { ethnicity: "Turks", region: "West Asia", percentage: 18, sampleSize: 600 },
    { ethnicity: "Iranians", region: "West Asia", percentage: 18, sampleSize: 500 },
    { ethnicity: "Georgians", region: "Caucasus", percentage: 20, sampleSize: 500 },
    { ethnicity: "Armenians", region: "Caucasus / West Asia", percentage: 15, sampleSize: 400 },
    { ethnicity: "Ashkenazi Jews", region: "Europe / Israel", percentage: 12, sampleSize: 500 },
  ],
  statistics: { modernFrequency: "~3% of global male population", peakRegion: "Near East / Caucasus", estimatedCarriers: 120_000_000 },
  tags: ["Near East", "Caucasus", "Georgia", "Turkey", "Iran", "Ashkenazi", "Neolithic", "Mediterranean"],
  references: ["Di Giacomo et al. (2004) — Y chromosomal haplogroup J as a signature of the post-neolithic colonization of Europe. Human Genetics 115(5), 357–371."],
  featured: false,
  addedAt: "2026-06-30",
};
export default J2a1;
