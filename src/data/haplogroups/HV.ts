import type { Haplogroup } from "@/types/haplogroup";

const HV: Haplogroup = {
  id: "HV",
  name: "HV (mtDNA)",
  type: "mtDNA",
  parent: "R_mt",
  children: ["H_mt", "V"],
  formed: "~30,000 BCE",
  mrca: "~25,000 BCE",
  origin: {
    region: "Near East / Caucasus",
    period: "Upper Paleolithic",
    coordinates: [44, 36],
  },
  description:
    "Mitochondrial haplogroup HV is the common ancestor of H and V, the two most frequent maternal haplogroups in Europe. H alone accounts for ~40–50% of European women. HV itself (in its undifferentiated form) is found at low frequency in the Near East and Caucasus. The HV clade represents a key expansion event that reshaped the maternal genetic landscape of Europe after the Last Glacial Maximum.",
  interestingFact:
    "Haplogroup V, a sister clade of H under HV, is concentrated among the Saami of Scandinavia (~40%) and Basques (~10%), likely reflecting post-glacial re-expansion from refugia in southwestern Europe.",
  distribution: [
    { ethnicity: "Iranians", region: "Middle East", percentage: 8, sampleSize: 500 },
    { ethnicity: "Georgians", region: "Caucasus", percentage: 6, sampleSize: 250 },
    { ethnicity: "Armenians", region: "Caucasus", percentage: 5, sampleSize: 300 },
  ],
  statistics: {
    modernFrequency: "~25% of global female population (as ancestor via H and V)",
    peakRegion: "Europe",
    estimatedCarriers: 900_000_000,
  },
  tags: ["mtDNA", "Europe", "Near East", "Paleolithic", "Maternal lineage"],
  references: [
    "Soares et al. (2010) — The archaeogenetics of Europe. Current Biology 20(4), R174–R183.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default HV;
