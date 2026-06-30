import type { Haplogroup } from "@/types/haplogroup";

const R1b_Z156: Haplogroup = {
  id: "R1b-Z156",
  name: "R1b1a1b1a1a1 (Z156)",
  type: "Y-DNA",
  parent: "R1b-U106",
  children: [],
  formed: "~2,200 BCE",
  mrca: "~2,000 BCE",
  origin: {
    region: "Northern Germany / Scandinavia",
    period: "Early Bronze Age",
    coordinates: [10, 54],
  },
  description:
    "R1b-Z156 is the larger of the two main U106 subclades and is particularly concentrated in Northern Germany, Denmark, and England, where it represents a key Germanic lineage. Its distribution closely mirrors the territories of early Germanic-speaking populations that expanded from the North Sea coast during the Iron Age and Migration Period. Z156 is the ancestor of several well-defined sub-branches including Z306, Z14, and DF98, which collectively track the spread of Anglo-Saxon, Viking, and broader Germanic migrations across Northern Europe and into the British Isles.",
  interestingFact:
    "R1b-Z156 is one of the clearest genetic markers of Anglo-Saxon ancestry in England: populations in the east and south of England — areas most heavily settled by Anglo-Saxon migrants in the 5th–7th centuries CE — carry Z156 at significantly higher frequencies than Celtic regions of the north and west, providing a genetic echo of the Germanic settlement of post-Roman Britain.",
  distribution: [
    { ethnicity: "Northern Germans", region: "Central Europe", percentage: 22, sampleSize: 600 },
    { ethnicity: "Dutch", region: "Western Europe", percentage: 20, sampleSize: 500 },
    { ethnicity: "Danes", region: "Scandinavia", percentage: 16, sampleSize: 400 },
    { ethnicity: "English (East)", region: "Western Europe", percentage: 18, sampleSize: 500 },
    { ethnicity: "Swedes", region: "Scandinavia", percentage: 8, sampleSize: 400 },
  ],
  clans: [
    { type: "tribe", name: "Anglo-Saxons", region: "England", note: "Z156 is a key marker of Anglo-Saxon paternal ancestry, concentrated in regions of England with heaviest Germanic settlement" },
    { type: "tribe", name: "Frisians", region: "North Sea coast", note: "Frisian populations of the North Sea coast carry U106/Z156 at among the highest frequencies in Europe" },
  ],
  statistics: {
    modernFrequency: "~0.8% of global male population",
    peakRegion: "Northern Germany / Netherlands / England",
    estimatedCarriers: 30_000_000,
  },
  tags: ["Germanic", "Anglo-Saxon", "North Sea", "Bronze Age", "Scandinavia", "England", "Western Europe"],
  references: [
    "Schiffels et al. (2016) — Iron Age and Anglo-Saxon genomes from East England reveal British migration history. Nature Communications 7, 10408.",
    "Myres et al. (2011) — A major Y-chromosome haplogroup R1b Holocene era founder effect in Central and Western Europe. European Journal of Human Genetics 19, 884–892.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default R1b_Z156;
