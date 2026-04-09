import type { Haplogroup } from "@/types/haplogroup";

const J1: Haplogroup = {
  id: "J1",
  name: "J1",
  type: "Y-DNA",
  parent: "J",
  children: [],
  formed: "~25,000 BCE",
  mrca: "~10,000 BCE",
  origin: {
    region: "Near East / Arabian Peninsula",
    period: "Epipaleolithic",
    coordinates: [42, 25],
  },
  description:
    "J1 is the most common Y-DNA haplogroup in the Arabian Peninsula and among Arab populations worldwide. The dominant subclade J1-P58 likely expanded significantly with the spread of Semitic-speaking tribal confederations in the ancient Near East, and underwent a further dramatic acceleration with the Islamic conquests of the 7th and 8th centuries CE, which rapidly spread Arab genes and culture across North Africa, the Levant, Mesopotamia, and parts of Central Asia. J1 is the defining paternal lineage of Arab identity and is also found at significant frequencies among Ethiopians, Somalis, and some Jewish populations.",
  interestingFact:
    "J1-P58 shows one of the most dramatic demographic expansions recorded in human paternal lineages: its sharp frequency spike approximately 2,500 years ago corresponds temporally with the rise of Arabian kingdoms and may reflect the rapid spread of early Arab tribal confederations — second in scale only to Genghis Khan's C2 Star Cluster.",
  distribution: [
    { ethnicity: "Qataris", region: "Arabian Peninsula", percentage: 58 },
    { ethnicity: "Saudi Arabians", region: "Arabian Peninsula", percentage: 45 },
    { ethnicity: "Yemenis", region: "Arabian Peninsula", percentage: 72 },
    { ethnicity: "Kuwaitis", region: "Arabian Peninsula", percentage: 52 },
    { ethnicity: "Somalis", region: "Horn of Africa", percentage: 35 },
    { ethnicity: "Ethiopians", region: "East Africa", percentage: 20 },
    { ethnicity: "Levantine Arabs", region: "Near East", percentage: 30 },
    { ethnicity: "Ashkenazi Jews", region: "Europe / Near East", percentage: 15 },
  ],
  clans: [
    { type: "tribe", name: "Quraysh", region: "Arabian Peninsula", note: "The tribe of the Prophet Muhammad; predominantly J1, the leading Arab tribal lineage of Mecca" },
    { type: "dynasty", name: "Hashemites", region: "Near East", note: "Arab royal dynasty tracing descent from the Prophet Muhammad, ruling Jordan and formerly Iraq and Hejaz" },
    { type: "tribe", name: "Banu Tamim", region: "Arabian Peninsula", note: "One of the largest and most prominent Arab tribes, strongly J1" },
  ],
  statistics: {
    modernFrequency: "~4% of global male population",
    peakRegion: "Arabian Peninsula",
    estimatedCarriers: 140_000_000,
  },
  tags: ["Arabian Peninsula", "Arab", "Semitic", "Near East", "Islam", "Afroasiatic"],
  references: [
    "Semino et al. (2004) — Origin, diffusion, and differentiation of Y-chromosome haplogroups E and J: inferences on the neolithization of Europe and later migratory events in the Mediterranean area. American Journal of Human Genetics 74(5), 1023–1034.",
    "Chiaroni et al. (2010) — The emergence of Y-chromosome haplogroup J1e among Arabic-speaking populations. European Journal of Human Genetics 18, 348–353.",
    "Al-Zahery et al. (2011) — In search of the genetic footprints of Sumerians: a survey of Y-chromosome and mtDNA variation in the Marsh Arabs of Iraq. BMC Evolutionary Biology 11, 288.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default J1;
