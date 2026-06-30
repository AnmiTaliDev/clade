import type { Haplogroup } from "@/types/haplogroup";

const H11_mt: Haplogroup = {
  id: "H11_mt",
  name: "H11",
  type: "mtDNA",
  parent: "H_mt",
  children: [],
  formed: "~13,000 BCE",
  mrca: "~9,000 BCE",
  origin: {
    region: "Central Europe / Alps",
    period: "Late Upper Paleolithic",
    coordinates: [12, 47],
  },
  description:
    "Haplogroup H11 is a rare subclade of H found at low frequencies in Central and Western Europe. It has been detected in populations of Germany, Austria, Switzerland, and the British Isles, suggesting an Alpine refugium origin. H11 appears to be one of the lineages that survived the Last Glacial Maximum in Central European refugia and later re-expanded northward as the ice sheets retreated.",
  interestingFact:
    "H11 shares a derived mutation with the famous Tyrolean Iceman 'Ötzi' (who belonged to K1f), in that both appear to be part of the ancient European maternal gene pool that predates the Neolithic farming expansion from the Near East.",
  distribution: [
    {
      ethnicity: "Germans",
      region: "Central Europe",
      percentage: 1.2,
      sampleSize: 400,
    },
    {
      ethnicity: "Austrians",
      region: "Central Europe",
      percentage: 1.5,
      sampleSize: 200,
    },
    {
      ethnicity: "British",
      region: "Northwestern Europe",
      percentage: 0.8,
      sampleSize: 500,
    },
    {
      ethnicity: "French",
      region: "Western Europe",
      percentage: 0.7,
      sampleSize: 300,
    },
  ],
  statistics: {
    modernFrequency: "~0.5% in Central and Western Europe",
    peakRegion: "Alpine Region / Central Europe",
    estimatedCarriers: 4_500_000,
  },
  tags: ["Central Europe", "Alps", "Paleolithic", "Western Europe", "mtDNA"],
  references: [
    "Pereira et al. (2005) — High-resolution mtDNA evidence for the late-glacial resettlement of Europe from an Iberian refugium. Genome Research 15(1), 19–24.",
    "Roostalu et al. (2007) — Origin and expansion of haplogroup H, the dominant human mitochondrial DNA lineage in West Eurasia. Molecular Biology and Evolution 24(11), 2669–2680.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default H11_mt;
