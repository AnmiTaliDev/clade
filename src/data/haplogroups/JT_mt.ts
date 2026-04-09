import type { Haplogroup } from "@/types/haplogroup";

const JT_mt: Haplogroup = {
  id: "JT_mt",
  name: "JT (mtDNA)",
  type: "mtDNA",
  parent: "R_mt",
  children: ["J_mt", "T_mt"],
  formed: "~50,000 BCE",
  mrca: "~45,000 BCE",
  origin: {
    region: "Near East",
    period: "Upper Paleolithic",
    coordinates: [40, 30],
  },
  description:
    "JT is the ancestral haplogroup of mitochondrial haplogroups J and T, two of the most common maternal lineages in Europe and the Near East. Both J and T were carried into Europe primarily by Neolithic farmers expanding from Anatolia beginning approximately 9,000 years ago, and are therefore associated with the spread of agriculture across the continent. J is particularly associated with the expansion of Neolithic and later Chalcolithic populations, while T has a broader distribution across Europe and the Near East. Together, J and T account for roughly 15–20% of modern European maternal lineages and remain more frequent in Southern and Central Europe than in Northern Europe, where pre-Neolithic hunter-gatherer lineages (U5 in particular) persist at higher levels.",
  interestingFact:
    "Both J and T show markedly elevated frequencies in populations linked to the Neolithic agricultural expansion from Anatolia into Europe, and ancient DNA studies confirm they were rare or absent in pre-Neolithic European hunter-gatherers — making JT one of the clearest examples of how the agricultural revolution changed not only cultures and technologies but the very maternal gene pools of entire continents.",
  distribution: [
    { ethnicity: "Europeans (average)", region: "Europe", percentage: 18 },
    { ethnicity: "Near Easterners", region: "Near East", percentage: 22 },
    { ethnicity: "South Asians", region: "South Asia", percentage: 9 },
  ],
  statistics: {
    modernFrequency: "~10% of global female population",
    peakRegion: "Europe / Near East",
    estimatedCarriers: 380_000_000,
  },
  tags: ["mtDNA", "Europe", "Near East", "Neolithic", "Agriculture", "Maternal lineage"],
  references: [
    "Soares et al. (2010) — The archaeogenetics of Europe. Current Biology 20(4), R174–R183.",
    "Haak et al. (2010) — Ancient DNA from European early Neolithic farmers reveals their Near Eastern affinities. PLOS Biology 8(11), e1000536.",
    "Bramanti et al. (2009) — Genetic discontinuity between local hunter-gatherers and central Europe's first farmers. Science 326(5949), 137–140.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default JT_mt;
