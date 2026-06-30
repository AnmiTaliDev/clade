import type { Haplogroup } from "@/types/haplogroup";

const U8_mt: Haplogroup = {
  id: "U8_mt",
  name: "U8 (mtDNA)",
  type: "mtDNA",
  parent: "U_mt",
  children: [],
  formed: "~50,000 BCE",
  mrca: "~30,000 BCE",
  origin: { region: "Near East / Europe", period: "Upper Paleolithic", coordinates: [30, 40] },
  description: "Haplogroup U8 is an ancient subclade of mtDNA haplogroup U that includes the well-known European hunter-gatherer lineage K (formally U8b1a1a), along with less common U8a and U8b sub-branches. Haplogroup K — a descendant of U8 — is one of the most significant Neolithic European maternal lineages, strongly associated with the spread of farming from Anatolia into Europe. K is found at frequencies of 5–10% in modern European populations and was disproportionately common among early Neolithic European farmers in ancient DNA studies. The broader U8 lineage originates in the Near East / Europe during the Upper Paleolithic.",
  interestingFact: "The famous 'Tyrolean Iceman' Ötzi (c. 3,300 BCE) carried haplogroup K1f — a subclade of K within U8. Analysis of his genome revealed that K lineages are closely related to modern Sardinian populations, consistent with his Anatolian Neolithic farmer ancestry and the survival of this lineage in genetic isolates.",
  distribution: [
    { ethnicity: "Europeans (general)", region: "Europe", percentage: 6, sampleSize: 3000 },
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 12, sampleSize: 400 },
    { ethnicity: "Near Easterners", region: "Near East", percentage: 5, sampleSize: 800 },
    { ethnicity: "Ashkenazi Jews", region: "Europe / Near East", percentage: 30, sampleSize: 500 },
  ],
  statistics: { modernFrequency: "~5% of global female population", peakRegion: "Europe / Near East", estimatedCarriers: 100_000_000 },
  tags: ["Europe", "Near East", "Neolithic", "Ötzi", "K", "Anatolia", "Ashkenazi"],
  references: ["Kivisild et al. (2006) — The role of selection in the evolution of human mitochondrial genomes. Genetics 172(1), 373–387."],
  featured: false,
  addedAt: "2026-06-30",
};
export default U8_mt;
