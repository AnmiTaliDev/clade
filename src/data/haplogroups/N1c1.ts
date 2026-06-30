import type { Haplogroup } from "@/types/haplogroup";

const N1c1: Haplogroup = {
  id: "N1c1",
  name: "N1c1 (M46)",
  type: "Y-DNA",
  parent: "N1c",
  children: ["N1c1a"],
  formed: "~14,000 BCE",
  mrca: "~4,000 BCE",
  origin: { region: "Central Siberia / Baikal region", period: "Epipaleolithic", coordinates: [108, 58] },
  description: "Haplogroup N1c1 (M46), also known as N-Tat after the Tat marker, is one of the most important Y-DNA haplogroups in Northern Eurasia, associated with Uralic-speaking peoples and Siberian populations. It reaches extraordinarily high frequencies among Yakuts (~90%), Nganasans (~75%), Nenets (~75%), and Evenks, and is also found at elevated frequencies among Finno-Ugric Europeans including Finns (~62%), Estonians (~34%), and Latvians (~38%). N1c1 appears to have originated in Central Siberia and spread west with Uralic-speaking populations into Northeastern Europe, and north with proto-Samoyedic peoples into the Arctic.",
  interestingFact: "N1c1 is perhaps the clearest Y-chromosome marker of the Uralic language family expansion — the same migration that brought Finnish, Estonian, Hungarian, and the Samoyed languages to their current locations. Yakuts, who speak a Turkic language but carry ~90% N1c1, acquired this haplogroup from pre-Turkic Uralic or Siberian populations they absorbed during their northward expansion along the Lena River.",
  distribution: [
    { ethnicity: "Yakuts", region: "Siberia (Russia)", percentage: 90, sampleSize: 300 },
    { ethnicity: "Nganasans", region: "Siberia (Russia)", percentage: 75, sampleSize: 100 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 62, sampleSize: 600 },
    { ethnicity: "Estonians", region: "Northern Europe", percentage: 34, sampleSize: 400 },
    { ethnicity: "Latvians", region: "Northern Europe", percentage: 38, sampleSize: 300 },
    { ethnicity: "Nenets", region: "Arctic Siberia", percentage: 75, sampleSize: 150 },
  ],
  statistics: { modernFrequency: "~2% of global male population", peakRegion: "Siberia / Northern Europe", estimatedCarriers: 80_000_000 },
  tags: ["Siberia", "Finland", "Uralic", "Yakuts", "Estonia", "Latvia", "Arctic", "Finno-Ugric", "Paleolithic"],
  references: ["Rootsi et al. (2007) — A counter-clockwise northern route of the Y-chromosome haplogroup N from Southeast Asia towards Europe. European Journal of Human Genetics 15(2), 204–211."],
  featured: true,
  addedAt: "2026-06-30",
};
export default N1c1;
