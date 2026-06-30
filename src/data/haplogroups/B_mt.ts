import type { Haplogroup } from "@/types/haplogroup";

const B_mt: Haplogroup = {
  id: "B_mt",
  name: "B (mtDNA)",
  type: "mtDNA",
  parent: "R_mt",
  children: ["B4_mt", "B5_mt"],
  formed: "~50,000 BCE",
  mrca: "~45,000 BCE",
  origin: {
    region: "East / Southeast Asia",
    period: "Upper Paleolithic",
    coordinates: [115, 25],
  },
  description:
    "Mitochondrial haplogroup B is an R-derived lineage widespread across East Asia, Southeast Asia, the Pacific Islands, and the Americas. B4 is the dominant subclade in East Asia and includes the 'Polynesian motif' B4a1a1, which was carried by Austronesian seafarers into the Pacific and is found at 100% frequency in some island Polynesian populations. B5 is concentrated in Southeast Asia. Subclade B2 is one of the five founding maternal lineages of Native Americans, present from North to South America. The extraordinary dispersal of haplogroup B — from the Chinese mainland to Hawaii and from the Aleutian Islands to Patagonia — reflects some of the most ambitious human migrations of the past 50,000 years.",
  interestingFact:
    "The 'Polynesian motif' B4a1a1 is found at frequencies approaching 100% in populations such as the Maori of New Zealand and native Hawaiians, tracing every woman in these communities back to a single common ancestral lineage that began the human settlement of Remote Oceania roughly 3,000 years ago.",
  distribution: [
    { ethnicity: "Polynesians (average)", region: "Pacific Islands", percentage: 90, sampleSize: 300 },
    { ethnicity: "Han Chinese", region: "East Asia", percentage: 15, sampleSize: 2000 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 10, sampleSize: 1000 },
    { ethnicity: "Vietnamese", region: "Southeast Asia", percentage: 25, sampleSize: 500 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 8, sampleSize: 1000 },
    { ethnicity: "Taiwanese Aborigines", region: "East Asia", percentage: 45, sampleSize: 200 },
  ],
  clans: [
    {
      type: "tribe",
      name: "Polynesian peoples",
      region: "Pacific Islands",
      note: "Subclade B4a1a1 (Polynesian motif) is the defining maternal lineage of Polynesian populations, tracing to the Austronesian expansion from Taiwan ~3,000 years ago",
    },
  ],
  statistics: {
    modernFrequency: "~5% of global female population",
    peakRegion: "East Asia / Pacific Islands",
    estimatedCarriers: 175_000_000,
  },
  tags: ["mtDNA", "East Asia", "Southeast Asia", "Polynesia", "Native Americans", "Austronesian", "Maternal lineage", "Paleolithic"],
  references: [
    "Tamm et al. (2007) — Beringian standstill and spread of Native American founders. PLOS ONE 2(9), e829.",
    "Soares et al. (2011) — Ancient voyaging and Polynesian origins. American Journal of Human Genetics 88(2), 239–247.",
    "Kayser et al. (2006) — Melanesian and Asian origins of Polynesians: mtDNA and Y chromosome gradients across the Pacific. Molecular Biology and Evolution 23(11), 2234–2244.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default B_mt;
