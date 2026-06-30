import type { Haplogroup } from "@/types/haplogroup";

const D1b: Haplogroup = {
  id: "D1b",
  name: "D1b (M55)",
  type: "Y-DNA",
  parent: "D1",
  children: [],
  formed: "~45,000 BCE",
  mrca: "~30,000 BCE",
  origin: { region: "East Asia (pre-Japan)", period: "Upper Paleolithic", coordinates: [130, 35] },
  description: "Haplogroup D1b (M55), formerly classified as D2, is the defining Y-chromosome lineage of the ancient Jomon people of Japan — the pre-agricultural hunter-gatherers who inhabited the Japanese archipelago from at least 16,000 BCE until the arrival of Yayoi farmers around 300 BCE. Today, D1b accounts for approximately 30–40% of Japanese male lineages, reflecting the substantial Jomon genetic contribution to the modern Japanese gene pool. D1b is virtually absent outside Japan, having survived in genetic isolation on the islands while the related D1a branch remained in mainland Asia.",
  interestingFact: "The Ainu people of Hokkaido, the indigenous group most directly descended from the Jomon, carry D1b at frequencies exceeding 80% — the highest in the world — making them a living window into the ancient Jomon genetic heritage that predates agriculture in Japan by over 12,000 years.",
  distribution: [
    { ethnicity: "Japanese", region: "East Asia (Japan)", percentage: 35, sampleSize: 1000 },
    { ethnicity: "Ainu (Hokkaido)", region: "East Asia (Japan)", percentage: 82, sampleSize: 150 },
    { ethnicity: "Ryukyuans", region: "East Asia (Japan)", percentage: 55, sampleSize: 200 },
  ],
  statistics: { modernFrequency: "~0.5% of global male population", peakRegion: "Japan (Ainu)", estimatedCarriers: 20_000_000 },
  tags: ["Japan", "Jomon", "Ainu", "Ryukyu", "Paleolithic", "East Asia", "Hunter-gatherer"],
  references: ["Hammer et al. (2006) — Dual origins of the Japanese: common ground for hunter-gatherer and farmer Y chromosomes. Journal of Human Genetics 51(1), 47–58."],
  featured: true,
  addedAt: "2026-06-30",
};
export default D1b;
