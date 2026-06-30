import type { Haplogroup } from "@/types/haplogroup";

const C2b_CTS4660: Haplogroup = {
  id: "C2b-CTS4660",
  name: "C2b1b (CTS4660)",
  type: "Y-DNA",
  parent: "C2b1b",
  children: ["C2b-MF630546", "C2b-MF653129"],
  formed: "~10,000 BCE",
  mrca: "~5,000 BCE",
  origin: {
    region: "Eastern Siberia / Baikal region",
    period: "Mesolithic",
    coordinates: [112, 54],
  },
  description:
    "C2b-CTS4660 is a subclade of C2b1b (Z1338), the Tungusic-Siberian branch of C2b1. Defined by the CTS4660 marker, this lineage represents a further differentiation within the Tungusic and Siberian C2b1b diversity. It is found among indigenous Siberian and northeastern Asian populations and marks a distinct subdivision of the C2b1b tree, with its own sub-branches (MF630546, MF653129) discovered through population-level genomic studies.",
  interestingFact:
    "CTS4660 marks a branching point within the Tungusic-Siberian C2b1b lineage, helping researchers trace fine-grained population movements across the vast Siberian landscape where written historical records are largely absent.",
  distribution: [
    { ethnicity: "Evenks", region: "Siberia", percentage: 5, sampleSize: 150 },
    { ethnicity: "Buryats", region: "Siberia (Baikal)", percentage: 3, sampleSize: 300 },
    { ethnicity: "Mongolian groups", region: "Mongolia / Siberia", percentage: 2, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~0.05% of global male population",
    peakRegion: "Siberia / Baikal region",
    estimatedCarriers: 2_000_000,
  },
  tags: ["Siberia", "Tungusic", "Baikal", "Evenks", "Mesolithic"],
  references: [
    "Pakendorf et al. (2006) — Investigating the effects of prehistoric migrations in Siberia. Human Genetics 120(3), 334–353.",
    "ISOGG Y-DNA Haplogroup C — 2024 phylogenetic tree.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C2b_CTS4660;
