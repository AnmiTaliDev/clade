import type { Haplogroup } from "@/types/haplogroup";

const C1b2b1: Haplogroup = {
  id: "C1b2b1",
  name: "C1b2b1 (M210)",
  type: "Y-DNA",
  parent: "C1b2b",
  children: [],
  formed: "~40,000 BCE",
  mrca: "~30,000 BCE",
  origin: {
    region: "Australia (Northern Territory / Arnhem Land)",
    period: "Upper Paleolithic",
    coordinates: [134, -15],
  },
  description:
    "C1b2b1 (M210) is a major subclade of C1b2b found among Aboriginal Australians. Defined by the M210 marker, it is distributed across northern and western Australia and represents one of the oldest continuously inhabited paternal lineages on Earth. Like all C1b2b branches, C1b2b1 traces back to the initial settlement of Australia roughly 50,000 years ago and has remained essentially isolated on the continent until the arrival of European settlers in the 18th century.",
  interestingFact:
    "C1b2b1 (M210) carriers include some of the direct patrilineal descendants of the first modern humans to ever set foot on the Australian continent — their Y-chromosomal lineage has survived essentially unchanged for ~50,000 years in geographic isolation, representing one of the longest unbroken patrilineal chains in human history.",
  distribution: [
    { ethnicity: "Aboriginal Australians (Northern)", region: "Australia", percentage: 30, sampleSize: 200 },
    { ethnicity: "Aboriginal Australians (Western)", region: "Australia", percentage: 25, sampleSize: 150 },
    { ethnicity: "Aboriginal Australians (Central)", region: "Australia", percentage: 20, sampleSize: 150 },
  ],
  statistics: {
    modernFrequency: "~0.04% of global male population",
    peakRegion: "Northern / Western Australia",
    estimatedCarriers: 150_000,
  },
  tags: ["Australia", "Aboriginal", "Indigenous", "Paleolithic", "Isolation", "Ancient"],
  references: [
    "Bergström et al. (2016) — Deep roots for Aboriginal Australian Y chromosomes. Current Biology 26(6), 809–813.",
    "Hudjashov et al. (2007) — Revealing the prehistoric settlement of Australia by Y chromosome and mtDNA analysis. PNAS 104(21), 8726–8730.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default C1b2b1;
