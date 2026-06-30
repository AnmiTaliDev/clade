import type { Haplogroup } from "@/types/haplogroup";

const U5_mt: Haplogroup = {
  id: "U5_mt",
  name: "U5 (mtDNA)",
  type: "mtDNA",
  parent: "U_mt",
  children: ["U5a_mt", "U5b_mt"],
  formed: "~35,000 BCE",
  mrca: "~28,000 BCE",
  origin: {
    region: "Europe",
    period: "Upper Paleolithic",
    coordinates: [15, 47],
  },
  description:
    "Mitochondrial haplogroup U5 is the oldest surviving maternal lineage in Europe, predating the Last Glacial Maximum and the Neolithic agricultural expansion. It was carried by the first anatomically modern humans — the Cro-Magnon hunter-gatherers — who entered Europe approximately 43,000–45,000 years ago. U5 dominated the European maternal gene pool throughout the Mesolithic and was substantially diluted by the arrival of Neolithic farmers (~7,000 BCE) and Bronze Age steppe migrants (~3,000 BCE), but it persists today in populations that preserve the strongest Mesolithic ancestry. U5a is widespread across Europe while U5b is concentrated in the western refugia. The Saami of Scandinavia carry U5b at extraordinarily high frequencies (~48%), reflecting their largely unbroken Mesolithic descent.",
  interestingFact:
    "Ancient DNA studies have found U5 in nearly every European Mesolithic skeleton tested — from Spain to Russia — confirming that U5 was the dominant or sole maternal lineage across Europe for roughly 30,000 years before the Neolithic, making it one of the longest-lasting geographically dominant haplogroups in human prehistory.",
  distribution: [
    { ethnicity: "Saami", region: "Northern Europe", percentage: 48, sampleSize: 200 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 20, sampleSize: 400 },
    { ethnicity: "Estonians", region: "Northern Europe", percentage: 18, sampleSize: 300 },
    { ethnicity: "Swedes", region: "Northern Europe", percentage: 12, sampleSize: 400 },
    { ethnicity: "Basques", region: "Western Europe", percentage: 12, sampleSize: 200 },
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 9, sampleSize: 5000 },
  ],
  statistics: {
    modernFrequency: "~9% of European female population",
    peakRegion: "Northern Europe / Saami",
    estimatedCarriers: 38_000_000,
  },
  tags: ["mtDNA", "Europe", "Mesolithic", "Hunter-gatherer", "Saami", "Paleolithic", "Cro-Magnon", "Maternal lineage"],
  references: [
    "Bramanti et al. (2009) — Genetic discontinuity between local hunter-gatherers and central Europe's first farmers. Science 326(5949), 137–140.",
    "Malyarchuk et al. (2010) — The peopling of Europe from the mitochondrial haplogroup U5 perspective. PLOS ONE 5(4), e10285.",
    "Haak et al. (2005) — Ancient DNA from the first European farmers in 7500-year-old Neolithic sites. Science 310(5750), 1016–1018.",
    "Lazaridis et al. (2014) — Ancient human genomes suggest three ancestral populations for present-day Europeans. Nature 513, 409–413.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default U5_mt;
