import type { Haplogroup } from "@/types/haplogroup";

const J2_mt: Haplogroup = {
  id: "J2_mt",
  name: "J2 (mtDNA)",
  type: "mtDNA",
  parent: "J_mt",
  children: ["J2a_mt", "J2b_mt"],
  formed: "~25,000 BCE",
  mrca: "~8,000 BCE",
  origin: { region: "Near East / Arabian Peninsula", period: "Epipaleolithic", coordinates: [42, 28] },
  description: "Haplogroup J2 (mtDNA) is the less common of the two J subclades, predominantly distributed in the Arabian Peninsula, Levant, and East Africa. It reaches its highest frequencies in Yemen, Oman, and among Ethiopian and Somali populations, suggesting a historical connection between the Arabian Peninsula and the Horn of Africa. J2 is found at low frequencies in Europe and appears to have undergone separate demographic expansions from J1, likely tied to population movements along the Arabian coastal route.",
  interestingFact: "J2 is one of the few Eurasian mtDNA haplogroups found at notable frequencies in East Africa, reflecting ancient bidirectional population contacts across the Red Sea and the Bab-el-Mandeb strait — a route that has connected the Arabian Peninsula and the Horn of Africa since prehistory.",
  distribution: [
    { ethnicity: "Yemenis", region: "Arabian Peninsula", percentage: 12, sampleSize: 300 },
    { ethnicity: "Omanis", region: "Arabian Peninsula", percentage: 9, sampleSize: 300 },
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 5, sampleSize: 400 },
    { ethnicity: "Levantine Arabs", region: "Near East", percentage: 4, sampleSize: 400 },
  ],
  statistics: { modernFrequency: "~0.5% of global female population", peakRegion: "Arabian Peninsula", estimatedCarriers: 10_000_000 },
  tags: ["Near East", "Arabia", "East Africa", "Yemen", "Horn of Africa"],
  references: ["Cerný et al. (2011) — Out of Arabia — the settlement of island Soqotra as revealed by mitochondrial and Y chromosome genetic diversity. BMC Evolutionary Biology 11, 267."],
  featured: false,
  addedAt: "2026-06-30",
};
export default J2_mt;
