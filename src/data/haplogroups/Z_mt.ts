import type { Haplogroup } from "@/types/haplogroup";

const Z_mt: Haplogroup = {
  id: "Z_mt",
  name: "Z (mtDNA)",
  type: "mtDNA",
  parent: "M_mt",
  children: ["Z1_mt"],
  formed: "~25,000 BCE",
  mrca: "~18,000 BCE",
  origin: {
    region: "Northeast Asia",
    period: "Upper Paleolithic",
    coordinates: [128, 45],
  },
  description:
    "Mitochondrial haplogroup Z is a rare M-derived lineage with a curious disjunct distribution spanning Northeast Asia — particularly Korea, Manchuria, and Siberia — and, surprisingly, the Saami of Scandinavia. Korean and Manchu populations carry Z at 4–6%, while Siberian groups such as the Koryak and Nganasan carry it at somewhat higher frequencies. The presence of Z among the Saami (~4%) is considered a genetic trace of the ancient eastward origins of proto-Saami ancestors who migrated from northeastern Asia into northern Fennoscandia during the post-glacial period. Z's low global frequency and scattered distribution make it one of the more enigmatic lineages in the human mtDNA tree.",
  interestingFact:
    "Haplogroup Z's presence among both the Saami of Scandinavia and the Koryak of Siberia — populations separated by thousands of kilometres — is a genetic fingerprint of the ancient migration that brought the ancestors of the Saami from northeastern Asia to the northernmost reaches of Europe at the end of the last Ice Age.",
  distribution: [
    { ethnicity: "Koreans", region: "East Asia", percentage: 5, sampleSize: 600 },
    { ethnicity: "Manchu", region: "East Asia", percentage: 6, sampleSize: 150 },
    { ethnicity: "Koryak", region: "Siberia", percentage: 8, sampleSize: 80 },
    { ethnicity: "Nganasan", region: "Siberia", percentage: 10, sampleSize: 60 },
    { ethnicity: "Saami", region: "Northern Europe", percentage: 4, sampleSize: 200 },
    { ethnicity: "Mongolians", region: "Central Asia", percentage: 3, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~1% of global female population",
    peakRegion: "Northeast Asia / Siberia",
    estimatedCarriers: 30_000_000,
  },
  tags: ["mtDNA", "East Asia", "Siberia", "Northeast Asia", "Saami", "Paleolithic", "Maternal lineage"],
  references: [
    "Derenko et al. (2010) — Complete mitochondrial DNA analysis of eastern Eurasian haplogroups rarely found in populations of northern Asia and eastern Europe. PLOS ONE 5(12), e14105.",
    "Kong et al. (2006) — Mitochondrial DNA sequence polymorphisms of four southern Chinese populations. Human Biology 78(3), 337–355.",
    "Malyarchuk et al. (2010) — The peopling of Europe from the mitochondrial haplogroup U5 perspective. PLOS ONE 5(4), e10285.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default Z_mt;
