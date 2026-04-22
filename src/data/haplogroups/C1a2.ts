/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup C1a2 (V20).
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1a2: Haplogroup = {
  id: "C1a2",
  name: "C1a2 (V20)",
  type: "Y-DNA",
  parent: "C1a",
  children: [],
  formed: "~45,000 BCE",
  mrca: "~35,000 BCE",
  origin: {
    region: "Europe or West Asia",
    period: "Upper Paleolithic",
    coordinates: [25, 45],
  },
  description:
    "Haplogroup C1a2 (V20) is a rare relict lineage that represents one of the earliest waves of modern human expansion into Europe. During the Upper Paleolithic, C1a2 was one of the dominant paternal lines among European hunter-gatherers, alongside haplogroup I. However, following the Neolithic revolution and subsequent Indo-European migrations, C1a2 was largely replaced and survives today only at extremely low frequencies, often scattered across Western and Southern Europe, North Africa, and the Caucasus.",
  interestingFact:
    "The 7,000-year-old 'La Braña 1' individual discovered in Northwest Spain — a dark-skinned, blue-eyed Mesolithic hunter-gatherer — was found to belong to haplogroup C1a2, providing a direct genetic snapshot of this ancient European population.",
  distribution: [
    { ethnicity: "Europeans (Scattered)", region: "Europe", percentage: 0.1 },
    { ethnicity: "Armenians", region: "West Asia", percentage: 0.1, sampleSize: 400 },
    { ethnicity: "Kabyle Berbers", region: "North Africa", percentage: 1, sampleSize: 100 },
    { ethnicity: "Spanish (Asturias)", region: "Southern Europe", percentage: 0.5, sampleSize: 200 },
  ],
  statistics: {
    modernFrequency: "<0.01% of global male population",
    peakRegion: "Relict presence in Europe / Caucasus",
    estimatedCarriers: 100_000,
  },
  tags: ["Europe", "Paleolithic", "Mesolithic", "Ancient DNA", "La Brana", "Rare"],
  references: [
    "Fu et al. (2016) — The genetic history of Ice Age Europe. Nature 534, 200–205.",
    "Olalde et al. (2014) — Derived immune and ancestral pigmentation alleles in a 7,000-year-old Mesolithic European. Nature 507, 225–228.",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default C1a2;
