import type { Haplogroup } from "@/types/haplogroup";

const L_mt: Haplogroup = {
  id: "L_mt",
  name: "L (mtDNA)",
  type: "mtDNA",
  parent: null,
  children: ["L0", "L1", "L2", "L3"],
  formed: "~170,000 BCE",
  mrca: "~150,000 BCE",
  origin: {
    region: "Sub-Saharan Africa",
    period: "Middle Paleolithic",
    coordinates: [25, 5],
  },
  description:
    "Haplogroup L is the root macrohaplogroup of all human mitochondrial DNA. Every living person traces their maternal line back to the L ancestor — mitochondrial Eve — who lived in sub-Saharan Africa approximately 150,000–200,000 years ago. The L macrohaplogroup encompasses six major branches (L0 through L6), all found predominantly in Africa. L0 is most ancient and is characteristic of the Khoisan (San) peoples of southern Africa. L1, L2, and L3 are widespread across sub-Saharan Africa. Crucially, only L3 gave rise to the out-of-Africa lineages M and N, which are the maternal ancestors of all non-African populations.",
  interestingFact:
    "Mitochondrial Eve — the most recent common maternal ancestor of all living humans — is estimated to have lived in Africa approximately 150,000–200,000 years ago. She was not the only woman alive at the time; she simply happened to be the one whose direct maternal line survived to the present day without a single break in the female line.",
  distribution: [
    { ethnicity: "Khoisan (San)", region: "Southern Africa", percentage: 95 },
    { ethnicity: "Yoruba", region: "West Africa", percentage: 90 },
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 80 },
    { ethnicity: "Somalis", region: "Horn of Africa", percentage: 75 },
    { ethnicity: "Bantus", region: "Central / Southern Africa", percentage: 85 },
  ],
  statistics: {
    modernFrequency: "~100% of the female population (as the root ancestor)",
    peakRegion: "Africa",
    estimatedCarriers: 4_000_000_000,
  },
  tags: ["mtDNA", "Africa", "Root", "Mitochondrial Eve", "Maternal lineage", "Paleolithic"],
  references: [
    "Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140.",
    "Ingman et al. (2000) — Mitochondrial genome variation and the origin of modern humans. Nature 408, 708–713.",
    "Soares et al. (2009) — Correcting for purifying selection: an improved human mitochondrial molecular clock. American Journal of Human Genetics 84(6), 740–759.",
  ],
  featured: true,
  addedAt: "2026-04-09",
};

export default L_mt;
