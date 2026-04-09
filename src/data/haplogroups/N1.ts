import type { Haplogroup } from "@/types/haplogroup";

const N1: Haplogroup = {
  id: "N1",
  name: "N1",
  type: "Y-DNA",
  parent: "N",
  children: ["N1a", "N1c"],
  formed: "~20,000 BCE",
  mrca: "~14,000 BCE",
  origin: {
    region: "Siberia / North-Central Asia",
    period: "Mesolithic",
    coordinates: [100, 55],
  },
  description:
    "N1 is the major subclade of N that spread into Siberia and Northern Europe. It is divided into N1a (found in East Asia and among some Siberian groups) and N1c (the dominant Uralic-associated lineage found in Finns, Estonians, Latvians, Lithuanians, and many Siberian populations).",
  interestingFact:
    "N1c (now officially N-L392) forms the vast majority of N1 in Europe and most of Siberia. Its expansion tracks remarkably well with the distribution of Uralic languages, offering strong evidence for a genetically traceable Uralic homeland in western Siberia.",
  distribution: [
    { ethnicity: "Finns", region: "Northern Europe", percentage: 60, sampleSize: 700 },
    { ethnicity: "Yakuts", region: "Siberia", percentage: 90, sampleSize: 300 },
    { ethnicity: "Khanty", region: "West Siberia", percentage: 75, sampleSize: 120 },
    { ethnicity: "Estonians", region: "Northern Europe", percentage: 34, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~3% of global male population",
    peakRegion: "Siberia / Northern Europe",
    estimatedCarriers: 120_000_000,
  },
  tags: ["Uralic", "Siberia", "Finland", "Mesolithic"],
  references: [
    "Rootsi et al. (2007) — A counter-clockwise northern route of the Y-chromosome haplogroup N from Southeast Asia towards Europe. European Journal of Human Genetics 15, 204–211.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default N1;
