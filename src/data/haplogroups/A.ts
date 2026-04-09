import type { Haplogroup } from "@/types/haplogroup";

const A: Haplogroup = {
  id: "A",
  name: "A (Y-DNA)",
  type: "Y-DNA",
  parent: null,
  children: ["A0", "A1"],
  formed: "~340,000 BCE",
  mrca: "~200,000 BCE",
  origin: {
    region: "Sub-Saharan Africa",
    period: "Middle Paleolithic",
    coordinates: [30, 5],
  },
  description:
    "Haplogroup A is the root of the entire human Y-chromosome phylogenetic tree. All men alive today descend from the patrilineal ancestor who defines this haplogroup. The deepest branches of A are found exclusively in Africa, predominantly among the Khoisan peoples of southern Africa and some Ethiopian and Sudanese groups, reflecting the African origin of modern humans.",
  interestingFact:
    "The deepest-known human Y-chromosome, belonging to a man from South Carolina with Mbo ancestry, pushed the divergence of haplogroup A00 to approximately 340,000 years ago — well before the emergence of anatomically modern Homo sapiens.",
  distribution: [
    { ethnicity: "Khoisan (San)", region: "Southern Africa", percentage: 75, sampleSize: 80 },
    { ethnicity: "Hadza", region: "East Africa", percentage: 40, sampleSize: 50 },
    { ethnicity: "Mbo (Cameroon)", region: "Central Africa", percentage: 10, sampleSize: 40 },
  ],
  statistics: {
    modernFrequency: "<1% of global male population",
    peakRegion: "Southern Africa",
    estimatedCarriers: 500_000,
  },
  tags: ["Root", "Africa", "Khoisan", "Paleolithic", "Out of Africa"],
  references: [
    "Mendez et al. (2013) — An African American paternal lineage adds an extremely ancient root to the human Y chromosome phylogenetic tree. American Journal of Human Genetics 92(3), 454–459.",
    "Cruciani et al. (2011) — A revised root for the human Y chromosomal phylogenetic tree: the origin of patrilineal diversity in Africa. American Journal of Human Genetics 88(6), 814–818.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default A;
