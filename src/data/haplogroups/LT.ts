/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the Y-DNA haplogroup LT (L298).
 */

import type { Haplogroup } from "@/types/haplogroup";

const LT: Haplogroup = {
  id: "LT",
  name: "LT",
  type: "Y-DNA",
  parent: "K",
  children: ["L", "T"],
  formed: "~43,000 BCE",
  mrca: "~43,000 BCE",
  origin: {
    region: "West Asia",
    period: "Upper Paleolithic",
    coordinates: [45, 35],
  },
  description:
    "Haplogroup LT (L298/P326), also known as K1, is a major paternal lineage that serves as the immediate ancestor to haplogroups L and T. While the lineage itself is ancient and arose shortly after the macro-haplogroup K radiation, its primary significance in human history lies in the successful expansion of its two descendant branches across Eurasia and Africa. It represents a key early split in the Western Eurasian paternal gene pool.",
  interestingFact:
    "LT was previously designated as K1, but was renamed to emphasize its role as the unique ancestor of two major and distinct lineages that followed very different migratory paths.",
  distribution: [
    { ethnicity: "West Asians", region: "West Asia", percentage: 2 },
  ],
  statistics: {
    modernFrequency: "<0.1% (as basal LT*)",
    peakRegion: "West Asia",
    estimatedCarriers: 500_000,
  },
  tags: ["Eurasian", "Ancestral", "Paleolithic", "West Asia"],
  references: [
    "Poznik et al. (2016) — Punctuated bursts in human male demography inferred from 1,244 worldwide Y-chromosome sequences. Nature Genetics 48, 593–599.",
    "ISOGG Wiki — Haplogroup L-T (accessed 2026).",
  ],
  featured: false,
  addedAt: "2026-04-22",
};

export default LT;
