/**
 * SPDX-FileCopyrightText: 2026 AnmiTaliDev <anmitalidev@nuros.org>
 *
 * This file describes the mtDNA haplogroup C1d.
 */

import type { Haplogroup } from "@/types/haplogroup";

const C1d_mt: Haplogroup = {
  id: "C1d_mt",
  name: "C1d",
  type: "mtDNA",
  parent: "C1_mt",
  children: [],
  formed: "~14,000 BCE",
  mrca: "~11,000 BCE",
  origin: {
    region: "North America",
    period: "Late Upper Paleolithic",
    coordinates: [-110, 50],
  },
  description:
    "Haplogroup C1d is one of the exclusive Native American subclades of C1, found primarily in North America. C1d has a more restricted distribution compared to C1b, with elevated frequencies in North American populations, particularly in groups from the Great Plains, Pacific Northwest, and subarctic regions. C1d appears to have diverged relatively recently compared to the initial peopling event and may represent a secondary dispersal or local diversification within North America following the initial colonization of the continent.",
  interestingFact:
    "C1d has been detected in ancient DNA from pre-Columbian North American sites, including samples from the Pacific Northwest Coast culture. Its presence in multiple archaeological contexts across different time periods demonstrates the antiquity and continuity of this lineage in North American populations, providing a maternal genetic thread that connects ancient and modern Indigenous North Americans.",
  distribution: [
    { ethnicity: "Northwest Coast peoples", region: "North America (Pacific Northwest)", percentage: 15, sampleSize: 100 },
    { ethnicity: "Plains peoples", region: "North America", percentage: 10, sampleSize: 150 },
    { ethnicity: "Subarctic peoples", region: "North America", percentage: 8, sampleSize: 120 },
    { ethnicity: "Native Americans (average)", region: "Americas", percentage: 4, sampleSize: 800 },
  ],
  statistics: {
    modernFrequency: "~4-8% in North American indigenous populations",
    peakRegion: "North America",
    estimatedCarriers: 3_000_000,
  },
  tags: ["North America", "Americas", "Native Americans", "Pacific Northwest", "Plains", "Founding lineage", "mtDNA"],
  references: [
    "Achilli et al. (2008) — The phylogeny of the four pan-American MtDNA haplogroups. PLOS ONE 3(3), e1764.",
    "Kemp et al. (2007) — Genetic continuity and change in aboriginal Aleut populations over 4,000 years. American Journal of Physical Anthropology 134(1), 82–89.",
  ],
  featured: false,
  addedAt: "2026-07-01",
};

export default C1d_mt;
