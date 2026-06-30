import type { Haplogroup } from "@/types/haplogroup";

const R1b_DF19: Haplogroup = {
  id: "R1b-DF19",
  name: "R1b1a1b1a2c1 (DF19)",
  type: "Y-DNA",
  parent: "R1b-P312",
  children: [],
  formed: "~2,500 BCE",
  mrca: "~2,300 BCE",
  origin: {
    region: "Central / Northwestern Europe",
    period: "Early Bronze Age (Bell Beaker)",
    coordinates: [5, 51],
  },
  description:
    "R1b-DF19 is a minor P312 subclade found at low but geographically consistent frequencies across Northwestern and Central Europe, with somewhat elevated presence in the Low Countries, Northern France, and Britain. It represents one of the less-studied branches of the Bell Beaker expansion and is substantially less common than its sibling clades DF13 and U152. DF19's distribution suggests it expanded into Northwestern Europe as part of the same Bell Beaker demographic event but subsequently underwent less rapid growth or was more strongly diluted by later population movements.",
  interestingFact:
    "R1b-DF19 is sometimes described as the 'dark matter' of the P312 subtree — it is present throughout Northwestern Europe at low but consistent frequencies, yet has never been associated with a specific archaeological culture or historical population, making its demographic history one of the more elusive puzzles in European genetic genealogy.",
  distribution: [
    { ethnicity: "Dutch", region: "Western Europe", percentage: 5, sampleSize: 500 },
    { ethnicity: "English", region: "Western Europe", percentage: 4, sampleSize: 800 },
    { ethnicity: "French", region: "Western Europe", percentage: 3, sampleSize: 600 },
    { ethnicity: "Germans", region: "Central Europe", percentage: 3, sampleSize: 800 },
    { ethnicity: "Scottish", region: "Western Europe", percentage: 4, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~0.3% of global male population",
    peakRegion: "Northwestern Europe",
    estimatedCarriers: 10_000_000,
  },
  tags: ["Bell Beaker", "Bronze Age", "Northwestern Europe", "Celtic", "Western Europe"],
  references: [
    "Olalde et al. (2018) — The Beaker phenomenon and the genomic transformation of northwest Europe. Nature 555, 190–196.",
    "Myres et al. (2011) — A major Y-chromosome haplogroup R1b Holocene era founder effect in Central and Western Europe. European Journal of Human Genetics 19, 884–892.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default R1b_DF19;
