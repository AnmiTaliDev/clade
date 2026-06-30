import type { Haplogroup } from "@/types/haplogroup";

const C2a1a3a: Haplogroup = {
  id: "C2a1a3a",
  name: "C2a1a3a (F3796)",
  type: "Y-DNA",
  parent: "C2a1a3",
  children: ["C2a1a3a1"],
  formed: "~2,500 BCE",
  mrca: "~1,000 BCE",
  origin: {
    region: "Central Asia / Mongolian steppe",
    period: "Bronze Age",
    coordinates: [82, 46],
  },
  description:
    "Haplogroup C2a1a3a (F3796), also denoted C2*-ST (C2 paragroup of the Star Cluster), is a branch of C2a1a3 (F1918) found predominantly in Central Asian Turkic and Mongolian populations — particularly Kazakhs, Kyrgyz, and Hazara. Despite the name 'paragroup of the Star Cluster', it is phylogenetically distinct from the Genghis Khan Star Cluster (C2b1a1-F3918) and represents a separate medieval Mongolian expansion. Its defining subclade F5481 is the paternal ancestor of major Kazakh Kerey tribe clans. The C2*-ST lineage is described in the literature as tracing back to 'ordinary Mongols' rather than to the Chinggisid imperial line.",
  interestingFact:
    "A landmark 2018 whole-sequence analysis (Lan et al.) concluded that the C2*-ST cluster (F3796 and descendants) traces back to ordinary Mongol commoners rather than Genghis Khan's Borjigin lineage — challenging earlier assumptions that all high-frequency C2 expansions in Central Asia were linked to the Mongol imperial family.",
  distribution: [
    { ethnicity: "Kazakhs (Kerey, Middle Zhuz)", region: "Central Asia (Kazakhstan)", percentage: 62, sampleSize: 400, source: "Kerey clan sampling" },
    { ethnicity: "Kyrgyz", region: "Central Asia", percentage: 8, sampleSize: 300 },
    { ethnicity: "Hazara", region: "South Asia (Afghanistan)", percentage: 5, sampleSize: 150 },
    { ethnicity: "Mongols (commoner clans)", region: "Mongolia", percentage: 4, sampleSize: 500 },
  ],
  clans: [
    { type: "tribe", name: "Kerey", region: "Kazakhstan", note: "The Kerey tribe of the Kazakh Middle Zhuz is the primary carrier of the C2*-ST (F3796) lineage; 58.9% of Kerey males belong to C2a1a3a1b1 (FT224144)" },
  ],
  statistics: {
    modernFrequency: "~0.2% of global male population",
    peakRegion: "Kazakhstan (Kerey territory)",
    estimatedCarriers: 7_000_000,
  },
  tags: ["Kazakhstan", "Kerey", "Central Asia", "Bronze Age", "C2*-ST", "Mongols", "Kazakh", "Medieval"],
  references: [
    "Lan et al. (2022) — Whole-sequence analysis indicates that the Y chromosome C2*-Star Cluster traces back to ordinary Mongols, rather than Genghis Khan. European Journal of Human Genetics.",
    "Zhumadilova et al. (2024) — Y-Chromosomal insights into the paternal genealogy of the Kerey tribe. PLOS ONE. DOI: 10.1371/journal.pone.0309080.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1a3a;
