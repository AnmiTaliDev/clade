import type { Haplogroup } from "@/types/haplogroup";

const L3: Haplogroup = {
  id: "L3",
  name: "L3 (mtDNA)",
  type: "mtDNA",
  parent: "L_mt",
  children: ["M_mt", "N_mt"],
  formed: "~80,000 BCE",
  mrca: "~70,000 BCE",
  origin: {
    region: "East Africa",
    period: "Middle Paleolithic",
    coordinates: [37, 5],
  },
  description:
    "Mitochondrial haplogroup L3 is one of the most important in human prehistory: it is the direct ancestor of haplogroups M and N, which together gave rise to virtually all non-African maternal lineages. L3 is found at significant frequencies in East Africa (Ethiopia, Somalia, Kenya), and its radiation out of Africa approximately 60,000–70,000 years ago represents the matrilineal record of the Out-of-Africa migration.",
  interestingFact:
    "Every woman outside Africa — and a significant proportion of East African women — carries a mitochondrial lineage that traces back to an L3 ancestor who lived in East Africa roughly 70,000 years ago. This makes L3 the 'mitochondrial Eve's granddaughter' of all non-African populations.",
  distribution: [
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 25, sampleSize: 400 },
    { ethnicity: "Somalis", region: "East Africa", percentage: 30, sampleSize: 200 },
    { ethnicity: "Kenyans", region: "East Africa", percentage: 20, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~80% of non-African female population (as ancestor)",
    peakRegion: "Worldwide (via M and N descendants)",
    estimatedCarriers: 3_000_000_000,
  },
  tags: ["mtDNA", "Out of Africa", "Africa", "Maternal lineage", "Ancestral"],
  references: [
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Soares et al. (2012) — The expansion of mtDNA haplogroup L3 within and out of Africa. Molecular Biology and Evolution 29(3), 915–927.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default L3;
