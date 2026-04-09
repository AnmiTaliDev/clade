import type { Haplogroup } from "@/types/haplogroup";

const E1b1b: Haplogroup = {
  id: "E1b1b",
  name: "E1b1b (E-M215)",
  type: "Y-DNA",
  parent: "E",
  children: ["E1b1b1", "E1b1b2"],
  formed: "~26,000 BCE",
  mrca: "~20,000 BCE",
  origin: {
    region: "Horn of Africa / Northeast Africa",
    period: "Epipaleolithic",
    coordinates: [38, 10],
  },
  description:
    "E1b1b (defined by marker M215) is strongly associated with Afroasiatic-speaking populations across Northeast Africa, North Africa, the Horn of Africa, and the Near East, and has also spread into Southern Europe. Two main branches dominate: E-V13, which arrived in Southern and Eastern Europe approximately 8,000 years ago with Neolithic farmers expanding from North Africa and the Near East, and E-M81, which is the hallmark haplogroup of Northwest African Berber populations. Among modern populations, E1b1b is found at high frequencies in Somalis, Ethiopians, Berbers, Egyptian Arabs, Greeks, Albanians, and Ashkenazi Jews.",
  interestingFact:
    "E-V13 arrived in Southern Europe roughly 8,000 years ago with Neolithic farmers from the Near East and North Africa, meaning some Greek and Balkan men share a common paternal ancestor with North African Berbers within the last 10,000 years — a deep but detectable genetic kinship across the Mediterranean.",
  distribution: [
    { ethnicity: "Somalis", region: "Horn of Africa", percentage: 77 },
    { ethnicity: "Berbers", region: "North Africa", percentage: 60 },
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 50 },
    { ethnicity: "Egyptians", region: "North Africa", percentage: 30 },
    { ethnicity: "Greeks", region: "Southern Europe", percentage: 22 },
    { ethnicity: "Albanians", region: "Southern Europe", percentage: 28 },
    { ethnicity: "Ashkenazi Jews", region: "Europe / Near East", percentage: 12 },
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 10 },
  ],
  clans: [
    { type: "tribe", name: "Cushites", region: "Horn of Africa", note: "Cushitic-speaking populations of Somalia, Ethiopia, and Djibouti, dominant carriers of E1b1b" },
    { type: "tribe", name: "Berbers", region: "North Africa", note: "Tamazight-speaking populations of Morocco, Algeria, Tunisia, and Libya, characterised by E-M81" },
  ],
  statistics: {
    modernFrequency: "~4% of global male population",
    peakRegion: "Horn of Africa / North Africa",
    estimatedCarriers: 150_000_000,
  },
  tags: ["Afroasiatic", "North Africa", "Horn of Africa", "Cushitic", "Berber", "Neolithic", "Southern Europe"],
  references: [
    "Cruciani et al. (2004) — Phylogeographic analysis of haplogroup E3b (E-M215) Y chromosomes reveals multiple migratory events within and out of Africa. American Journal of Human Genetics 74(5), 1014–1022.",
    "Bosch et al. (2001) — High-resolution analysis of human Y-chromosome variation shows a sharp discontinuity and limited gene flow between northwestern Africa and the Iberian Peninsula. American Journal of Human Genetics 68(4), 1019–1029.",
    "King et al. (2011) — The coming of the Greeks to Provence and Corsica: Y-chromosome models of archaic Greek colonization of the western Mediterranean. BMC Evolutionary Biology 11, 69.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default E1b1b;
