/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA marker R1a-Z93.
 */

import type { Haplogroup } from "@/types/haplogroup";

const R1a_Z93: Haplogroup = {
  id: "R1a-Z93",
  name: "R1a-Z93",
  type: "Y-DNA",
  parent: "R1a-M417",
  children: [],
  formed: "~3,000 BCE",
  mrca: "~2,800 BCE",
  origin: {
    region: "Southern Russia / Kazakhstan Steppe",
    period: "Early Bronze Age",
    coordinates: [60, 50],
  },
  description:
    "R1a-Z93 is the predominant Asian branch of R1a and the key genetic marker of the Indo-Iranian expansion. Arising in the steppe regions of Southern Russia and Kazakhstan, its carriers moved southward in massive migrations that reached the Iranian plateau and the Indian subcontinent. It is found at very high frequencies among high-caste Hindus in India (Brahmins), Indo-Iranian speaking peoples like Persians and Tajiks, and also among many Turkic and Mongolic groups due to later historical admixtures on the steppe.",
  interestingFact:
    "R1a-Z93 was the dominant lineage of the Sintashta and Andronovo cultures, the people who invented the spoke-wheeled chariot and are widely believed to be the proto-Indo-Iranians who wrote the earliest hymns of the Rigveda and the Avesta.",
  distribution: [
    { ethnicity: "Brahmins (India)", region: "South Asia", percentage: 70, sampleSize: 200 },
    { ethnicity: "Kyrgyz", region: "Central Asia", percentage: 63, sampleSize: 150 },
    { ethnicity: "Tajiks", region: "Central Asia", percentage: 64, sampleSize: 180 },
    { ethnicity: "Pashtuns", region: "South Asia / Central Asia", percentage: 50, sampleSize: 250 },
    { ethnicity: "Altai", region: "Siberia", percentage: 45, sampleSize: 150 },
  ],
  clans: [
    { type: "tribe", name: "Sintashta culture", region: "South Urals", note: "Early Bronze Age chariot-using culture, predominantly Z93" },
    { type: "tribe", name: "Andronovo culture", region: "Central Asia", note: "Massive Bronze Age archaeological horizon linked to Indo-Iranians" },
    { type: "clan", name: "Scythians", region: "Eurasian Steppe", note: "Iron Age nomadic warriors with high Z93 frequency" },
  ],
  statistics: {
    modernFrequency: "~3.5% of global male population",
    peakRegion: "South Asia / Central Asia",
    estimatedCarriers: 140_000_000,
  },
  tags: ["Indo-Iranian", "Indo-Aryan", "Vedic", "Scythian", "Central Asia", "Chariot"],
  references: [
    "Narasimhan et al. (2019) — The formation of human populations in South and Central Asia. Science 365(6457).",
    "Allentoft et al. (2015) — Population genomics of Bronze Age Eurasia. Nature 522, 167–172.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default R1a_Z93;
