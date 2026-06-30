import type { Haplogroup } from "@/types/haplogroup";

const C2a1a3a1a: Haplogroup = {
  id: "C2a1a3a1a",
  name: "C2a1a3a1a (FT411734)",
  type: "Y-DNA",
  parent: "C2a1a3a1",
  children: [],
  formed: "~1,000 BCE",
  mrca: "~950 CE",
  origin: {
    region: "Central Asia (Kazakh steppe)",
    period: "Medieval",
    coordinates: [74, 50],
  },
  description:
    "C2a1a3a1a (FT411734) is the defining paternal lineage of the Абак Кереі (Abak Kerey), one of the two primary clans of the Kazakh Kerey tribe (Middle Zhuz). The FT411734 marker was identified through Big Y whole Y-chromosome sequencing of Kerey clan members. Among Abak Kerey men tested, 69.8% carry this specific marker, making it a reliable clan-defining Y-chromosome signature. The Abak clan and the sister Ашамайлы clan both descend from the C2a1a3a1 (F5481) ancestor — the common Kerey forefather who lived approximately in the mid-9th century CE. Carriers of FT411734 exhibit a characteristic DYS448 = 23 allele in 89.7% of cases.",
  interestingFact:
    "The FT411734 marker is so strongly associated with the Абак Кереі that it functions as a near-perfect genetic passport for clan membership — a man testing positive for FT411734 can trace his paternal ancestry directly to the founding lineage of one of the most historically influential Kazakh tribes of the Central Asian steppe.",
  distribution: [
    { ethnicity: "Абак Кереі (Abak Kerey)", region: "Kazakhstan", percentage: 70, sampleSize: 130, source: "Zhumadilova et al. 2024" },
    { ethnicity: "Kazakhs (Kerey, general)", region: "Central Asia", percentage: 20, sampleSize: 400 },
  ],
  clans: [
    { type: "clan", name: "Абак (Abak)", region: "Kazakhstan (Middle Zhuz)", note: "Primary Kerey sub-clan carrying FT411734 at ~70%; sister clan to Ашамайлы (FT224144)" },
    { type: "tribe", name: "Kerey (Кереі)", region: "Kazakhstan", note: "One of the largest Kazakh Middle Zhuz tribes; historically descended from the Kereit confederation of the pre-Mongol steppe" },
  ],
  statistics: {
    modernFrequency: "~0.07% of global male population",
    peakRegion: "Kazakhstan (Abak Kerey territory)",
    estimatedCarriers: 2_500_000,
  },
  tags: ["Kazakhstan", "Абак", "Kerey", "Middle Zhuz", "Kazakh", "Medieval", "Steppe", "Clan genealogy"],
  references: [
    "Zhumadilova et al. (2024) — Y-Chromosomal insights into the paternal genealogy of the Kerey tribe have called into question their descent from the Stepfather of Genghis Khan. PLOS ONE. PMC11373838.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2a1a3a1a;
