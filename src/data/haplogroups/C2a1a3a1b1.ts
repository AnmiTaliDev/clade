import type { Haplogroup } from "@/types/haplogroup";

const C2a1a3a1b1: Haplogroup = {
  id: "C2a1a3a1b1",
  name: "C2a1a3a1b1 (FT224144)",
  type: "Y-DNA",
  parent: "C2a1a3a1b",
  children: [],
  formed: "~1,000 BCE",
  mrca: "~1,000 CE",
  origin: {
    region: "Central Asia (Kazakh steppe)",
    period: "Medieval",
    coordinates: [70, 47],
  },
  description:
    "C2a1a3a1b1 (FT224144) is the defining paternal lineage of the Ashamaily Kerey, one of the two primary clans of the Kazakh Kerey tribe (Middle Zhuz). Among Ashamaily men tested, 77.3% carry the FT224144 marker, making it the most reliable genetic identifier for this clan. Ashamaily and Abak both descend from the shared C2a1a3a1 (F5481) ancestor — a common Kerey forefather who lived approximately in the mid-9th century CE. FT224144 is a terminal branch of the C2*-ST (C2 paragroup of the Star Cluster), a broader lineage associated with ordinary Mongol commoners and Central Asian nomadic populations.",
  interestingFact:
    "The Ashamaily Kerey at 77.3% FT224144 prevalence represent one of the highest clan-specific Y-chromosome homogeneity rates documented in Kazakh genetic genealogy — almost four out of five Ashamaily men tested share the same patrilineal marker, directly connecting them to a single medieval founding father of the Kerey tribal world.",
  distribution: [
    { ethnicity: "Ashamaily Kerey", region: "Kazakhstan", percentage: 77, sampleSize: 110, source: "Zhumadilova et al. 2024" },
    { ethnicity: "Kazakhs (Kerey, general)", region: "Central Asia", percentage: 25, sampleSize: 400 },
  ],
  clans: [
    { type: "clan", name: "Ashamaily", region: "Kazakhstan (Middle Zhuz)", note: "Primary Kerey sub-clan carrying FT224144 at ~77%; sister clan to Abak (FT411734)" },
    { type: "tribe", name: "Kerey", region: "Kazakhstan", note: "One of the largest Kazakh Middle Zhuz tribes; historically descended from the medieval Kereit confederation" },
  ],
  statistics: {
    modernFrequency: "~0.08% of global male population",
    peakRegion: "Kazakhstan (Ashamaily Kerey territory)",
    estimatedCarriers: 3_000_000,
  },
  tags: ["Kazakhstan", "Ashamaily", "Kerey", "Middle Zhuz", "Kazakh", "Medieval", "Steppe", "Clan genealogy", "C2*-ST"],
  references: [
    "Zhumadilova et al. (2024) — Y-Chromosomal insights into the paternal genealogy of the Kerey tribe have called into question their descent from the Stepfather of Genghis Khan. PLOS ONE. PMC11373838.",
    "Lan et al. (2022) — Whole-sequence analysis indicates that the Y chromosome C2*-Star Cluster traces back to ordinary Mongols. European Journal of Human Genetics.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1a3a1b1;
