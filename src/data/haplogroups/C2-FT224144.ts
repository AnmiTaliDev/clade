import type { Haplogroup } from "@/types/haplogroup";

const C2_FT224144: Haplogroup = {
  id: "C2-FT224144",
  name: "C2-FT224144",
  type: "Y-DNA",
  parent: "C2",
  children: [],
  formed: "~25,000 BCE",
  mrca: "~15,000 BCE",
  origin: {
    region: "Central / East Asia",
    period: "Upper Paleolithic",
    coordinates: [108, 46],
  },
  description:
    "C2-FT224144 is a basal C2 subclade defined by the FT224144 SNP marker, identified through FamilyTreeDNA Big Y whole Y-chromosome sequencing. Like C2-FT411734, it represents an early-diverging branch within C2 that is phylogenetically distinct from the major C2a (East Asian) and C2b (Mongolic/Tungusic) clades. Its exact demographic history and geographic distribution remain under investigation as more sequencing data becomes available.",
  interestingFact:
    "The discovery of basal C2 subclades like FT224144 shows that C2 diversity in East and Central Asia is greater than previously captured by older SNP panels — whole-genome and Big Y sequencing continues to reveal ancient lineages that survived at low frequencies alongside the dominant Mongolic and East Asian C2 branches.",
  distribution: [
    { ethnicity: "East / Central Asian (general)", region: "Central / East Asia", percentage: 0.1, sampleSize: 500 },
  ],
  statistics: {
    modernFrequency: "<0.01% of global male population",
    peakRegion: "Central / East Asia",
    estimatedCarriers: 100_000,
  },
  tags: ["C2", "Basal", "Paleolithic", "Central Asia", "FamilyTreeDNA"],
  references: [
    "YFull YTree — Haplogroup C2 (M217) phylogeny. https://www.yfull.com/tree/C2/",
    "ISOGG Y-DNA Haplogroup C — 2024 phylogenetic tree.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2_FT224144;
