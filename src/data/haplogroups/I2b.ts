import type { Haplogroup } from "@/types/haplogroup";

const I2b: Haplogroup = {
  id: "I2b",
  name: "I2b (M223)",
  type: "Y-DNA",
  parent: "I2",
  children: [],
  formed: "~15,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Western / Central Europe", period: "Epipaleolithic", coordinates: [8, 52] },
  description: "Haplogroup I2b (M223) is a subclade of I2 found primarily in Western and Central Europe, with notable frequencies in Germany, England, Scandinavia, and the Netherlands. It is distinct from I2a and represents an ancient European hunter-gatherer lineage that survived the Neolithic farming transition. I2b is sometimes called 'I2-Isles' as it has elevated frequency in the British Isles relative to continental Europe, though it is found throughout Northern and Central Europe. Ancient DNA has recovered I2b from Mesolithic hunter-gatherers, placing its origin firmly in the pre-Neolithic European substrate.",
  interestingFact: "I2b shows a distinctive pattern of higher frequency in northwestern Europe (especially England and the Netherlands) compared to Mediterranean Europe — the opposite pattern from I2a1 (Sardinian) and I2a2 (Dinaric/Balkan). This geographic distribution suggests I2b was part of the genetic legacy of ancient North Sea coastal populations of the Mesolithic period.",
  distribution: [
    { ethnicity: "English", region: "Northwestern Europe", percentage: 8, sampleSize: 800 },
    { ethnicity: "Germans", region: "Central Europe", percentage: 5, sampleSize: 800 },
    { ethnicity: "Dutch", region: "Northwestern Europe", percentage: 6, sampleSize: 500 },
    { ethnicity: "Scandinavians", region: "Northern Europe", percentage: 4, sampleSize: 700 },
  ],
  statistics: { modernFrequency: "~0.5% of global male population", peakRegion: "Northwestern Europe", estimatedCarriers: 20_000_000 },
  tags: ["Western Europe", "England", "Germany", "Mesolithic", "Northwestern Europe", "Hunter-gatherer"],
  references: ["Rootsi et al. (2004) — Phylogeography of Y-chromosome haplogroup I reveals distinct domains of prehistoric gene flow in europe. American Journal of Human Genetics 75(1), 128–137."],
  featured: false,
  addedAt: "2026-06-30",
};
export default I2b;
