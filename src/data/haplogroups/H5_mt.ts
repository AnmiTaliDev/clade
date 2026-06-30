import type { Haplogroup } from "@/types/haplogroup";

const H5_mt: Haplogroup = {
  id: "H5_mt",
  name: "H5 (mtDNA)",
  type: "mtDNA",
  parent: "H_mt",
  children: [],
  formed: "~12,000 BCE",
  mrca: "~9,000 BCE",
  origin: { region: "Near East / Balkans", period: "Mesolithic / Early Neolithic", coordinates: [28, 40] },
  description: "Haplogroup H5 is a subclade of mtDNA H with its core distribution in the Balkans, Near East, and Mediterranean. It is present at moderate frequencies in Greece, Turkey, and the Caucasus, and appears to have expanded with early Neolithic farming populations from Anatolia into Southeastern Europe. H5 was detected in ancient Neolithic European samples, confirming its role in the agricultural demographic expansion. It is also found at lower frequencies across Central and Eastern Europe and in the Arabian Peninsula.",
  interestingFact: "H5 has been detected in several ancient Neolithic individuals from the Balkans and Central Europe dated to 5,000–6,000 BCE, placing it among the lineages that accompanied the first farming communities into Europe.",
  distribution: [
    { ethnicity: "Greeks", region: "Southern Europe", percentage: 5, sampleSize: 600 },
    { ethnicity: "Turks", region: "West Asia", percentage: 5, sampleSize: 800 },
    { ethnicity: "Armenians", region: "Caucasus", percentage: 6, sampleSize: 400 },
    { ethnicity: "Balkan populations", region: "Southern Europe", percentage: 4, sampleSize: 700 },
  ],
  statistics: { modernFrequency: "~1% of global female population", peakRegion: "Balkans / Near East", estimatedCarriers: 20_000_000 },
  tags: ["Europe", "Near East", "Balkans", "Neolithic", "Agriculture", "Anatolia"],
  references: ["Haak et al. (2010) — Ancient DNA from European early Neolithic farmers reveals their Near Eastern affinities. PLOS Biology 8(11), e1000536."],
  featured: false,
  addedAt: "2026-06-30",
};
export default H5_mt;
