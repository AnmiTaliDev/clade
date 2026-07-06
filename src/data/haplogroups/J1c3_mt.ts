/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup J1c3.
 */

import type { Haplogroup } from "@/types/haplogroup";

const J1c3_mt: Haplogroup = {
  id: "J1c3_mt",
  name: "J1c3 (mtDNA)",
  type: "mtDNA",
  parent: "J1c_mt",
  children: [],
  formed: "~8,000 BCE",
  mrca: "~4,000 BCE",
  origin: {
    region: "Central / Western Europe",
    period: "Neolithic",
    coordinates: [10, 50],
  },
  description:
    "Mitochondrial haplogroup J1c3 is a European subclade of J1c that diversified during or after the Neolithic period in Europe. J1c3 is found at low frequencies (~0.5–2%) across Central and Western Europe, particularly in Germany, Austria, Switzerland, France, and the British Isles. Like its parent J1c, J1c3 traces back to the Neolithic farmer migrations from Anatolia, but J1c3 specifically represents a daughter lineage that arose and diversified within the European context. J1c3 is one of several J1c subclades that help researchers trace the post-Neolithic demographic history of European populations, including founder effects from small agricultural communities and later Bronze Age movements.",
  interestingFact:
    "The fine-grained sub-structure of haplogroup J1c — with subclades like J1c2, J1c3, and others distributed across different parts of Europe — provides geneticists with a high-resolution view of Neolithic and post-Neolithic population movements within Europe, allowing them to reconstruct the migration routes of early farming communities with remarkable geographic precision.",
  distribution: [
    { ethnicity: "Germans / Austrians", region: "Central Europe", percentage: 1.5, sampleSize: 500 },
    { ethnicity: "French", region: "Western Europe", percentage: 1.5, sampleSize: 400 },
    { ethnicity: "British", region: "Northwestern Europe", percentage: 1.2, sampleSize: 800 },
    { ethnicity: "Swiss", region: "Central Europe", percentage: 2, sampleSize: 300 },
    { ethnicity: "Scandinavians", region: "Northern Europe", percentage: 0.8, sampleSize: 400 },
    { ethnicity: "Italians", region: "Southern Europe", percentage: 1, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~0.5–2% in Central and Western Europe",
    peakRegion: "Central Europe (Germany, Austria, Switzerland)",
    estimatedCarriers: 3_500_000,
  },
  tags: ["mtDNA", "Europe", "Neolithic", "Central Europe", "J1c-subclade", "Anatolian farmers"],
  references: [
    "Haak et al. (2010) — Ancient DNA from European early Neolithic farmers reveals their Near Eastern affinities. PLOS Biology 8(11), e1000536.",
    "Brotherton et al. (2013) — Neolithic mitochondrial haplogroup H genomes and the genetic origins of Europeans. Nature Communications 4:1764.",
    "Brandt et al. (2013) — Ancient DNA reveals key stages in the formation of Central European mitochondrial genetic diversity. Science 342(6155), 257–261.",
  ],
  featured: false,
  addedAt: "2026-07-06",
};

export default J1c3_mt;
