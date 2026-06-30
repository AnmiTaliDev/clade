import type { Haplogroup } from "@/types/haplogroup";

const G2a2: Haplogroup = {
  id: "G2a2",
  name: "G2a2 (L30)",
  type: "Y-DNA",
  parent: "G2a",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Near East / Anatolia", period: "Epipaleolithic / Neolithic", coordinates: [34, 38] },
  description: "Haplogroup G2a2 (L30) is a major subclade of G2a that includes the famous Ötzi the Iceman and is widespread in the Caucasus and Mediterranean. G2a2b (the Ötzi subclade) was dominant among Neolithic European farmers based on ancient DNA evidence. G2a2 is found today at its highest frequencies in the Caucasus (Georgia, Armenia, Azerbaijan) and among some Mediterranean populations. It represents one of the key patrilineal lineages of the early European farming cultures, particularly the Anatolian farmers who first brought agriculture to Europe around 7,000–6,000 BCE.",
  interestingFact: "Multiple independent ancient DNA studies have found G2a2 at very high frequencies (60–100%) in skeletal remains from early Neolithic farming sites across Europe — from Spain to Hungary — demonstrating that Anatolian G2a2 men were among the primary patrilineal founders of European agriculture, before being largely replaced by Bronze Age steppe migrants.",
  distribution: [
    { ethnicity: "Georgians", region: "Caucasus", percentage: 25, sampleSize: 500 },
    { ethnicity: "Armenians", region: "Caucasus / West Asia", percentage: 10, sampleSize: 400 },
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 9, sampleSize: 400 },
    { ethnicity: "Iranians", region: "West Asia", percentage: 5, sampleSize: 500 },
  ],
  statistics: { modernFrequency: "~1% of global male population", peakRegion: "Caucasus", estimatedCarriers: 40_000_000 },
  tags: ["Caucasus", "Georgia", "Neolithic", "Europe", "Sardinia", "Ötzi", "Ancient DNA"],
  references: ["Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211."],
  featured: false,
  addedAt: "2026-06-30",
};
export default G2a2;
