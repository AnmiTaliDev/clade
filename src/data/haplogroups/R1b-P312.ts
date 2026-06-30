import type { Haplogroup } from "@/types/haplogroup";

const R1b_P312: Haplogroup = {
  id: "R1b-P312",
  name: "R1b1a1b1a2 (P312)",
  type: "Y-DNA",
  parent: "R1b-L11",
  children: ["R1b-DF13", "R1b-DF19", "R1b-U152", "R1b-DF27"],
  formed: "~2,800 BCE",
  mrca: "~2,600 BCE",
  origin: {
    region: "Central Europe / Rhine–Danube corridor",
    period: "Late Neolithic / Early Bronze Age",
    coordinates: [8, 48],
  },
  description:
    "R1b-P312 (also known as R1b-S116) is the dominant paternal lineage of Western and Southern Europe and the direct ancestor of the Atlantic Celtic, Italo-Celtic, and Iberian branches of R1b. Emerging from R1b-L11 around 2,800 BCE, probably in the Rhine–Danube corridor, P312 underwent an explosive demographic expansion that tracks almost perfectly with the Bell Beaker culture's sweep across Western Europe. Its principal subclades are DF13 (ancestral to L21, the Atlantic Celtic branch), U152 (Italo-Celtic and Alpine), DF27 (Iberian), and DF19 (Continental Celtic). Together, P312 descendants account for approximately 80–90% of men in Ireland, Wales, Scotland, Spain, and Portugal, and 40–60% across France, Italy, and Switzerland.",
  interestingFact:
    "A single P312-carrying Bell Beaker population that expanded from Central Europe around 2,500 BCE replaced nearly 90% of the male lineages in Britain within a few generations — one of the most dramatic genetic replacements documented by ancient DNA, equivalent to a near-total turnover of the island's paternal gene pool.",
  distribution: [
    { ethnicity: "Irish", region: "Western Europe", percentage: 85, sampleSize: 500 },
    { ethnicity: "Welsh", region: "Western Europe", percentage: 80, sampleSize: 250 },
    { ethnicity: "Spanish", region: "Western Europe", percentage: 70, sampleSize: 700 },
    { ethnicity: "French", region: "Western Europe", percentage: 55, sampleSize: 600 },
    { ethnicity: "Northern Italians", region: "Southern Europe", percentage: 45, sampleSize: 500 },
    { ethnicity: "Swiss", region: "Central Europe", percentage: 50, sampleSize: 400 },
  ],
  clans: [
    { type: "tribe", name: "Bell Beaker people", region: "Western Europe", note: "P312 was the dominant paternal lineage of the Bell Beaker horizon that spread across Western Europe ~2500 BCE" },
    { type: "tribe", name: "Celts", region: "Western Europe", note: "The Atlantic and Continental Celtic peoples are largely P312 descendants via DF13, DF27, and DF19" },
  ],
  statistics: {
    modernFrequency: "~7% of global male population",
    peakRegion: "Western Europe",
    estimatedCarriers: 260_000_000,
  },
  tags: ["Indo-European", "Celtic", "Steppe", "Bronze Age", "Bell Beaker", "Western Europe", "Atlantic"],
  references: [
    "Olalde et al. (2018) — The Beaker phenomenon and the genomic transformation of northwest Europe. Nature 555, 190–196.",
    "Haak et al. (2015) — Massive migration from the steppe was a source for Indo-European languages in Europe. Nature 522, 207–211.",
    "Myres et al. (2011) — A major Y-chromosome haplogroup R1b Holocene era founder effect in Central and Western Europe. European Journal of Human Genetics 19, 884–892.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default R1b_P312;
