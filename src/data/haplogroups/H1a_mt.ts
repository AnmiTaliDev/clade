import type { Haplogroup } from "@/types/haplogroup";

const H1a_mt: Haplogroup = {
  id: "H1a_mt",
  name: "H1a",
  type: "mtDNA",
  parent: "H1_mt",
  children: [],
  formed: "~10,000 BCE",
  mrca: "~7,000 BCE",
  origin: {
    region: "Western Europe / Iberian Peninsula",
    period: "Mesolithic",
    coordinates: [-5, 40],
  },
  description:
    "Haplogroup H1a is a subclade of H1, itself the most common subclade of the dominant European mtDNA haplogroup H. H1a is found throughout Western Europe with particular concentrations in the Iberian Peninsula, France, and the British Isles. Its distribution pattern is consistent with a Mesolithic or early Neolithic origin in Western Europe, and it has been detected in ancient DNA samples from both Mesolithic hunter-gatherers and Neolithic farmers of Iberia, suggesting it predates or was present during the Neolithic transition.",
  interestingFact:
    "H1a has been found in ancient samples from the Mesolithic site of La Braña in northern Spain (~7000 BCE), among the best-preserved ancient European hunter-gatherer genomes ever recovered, giving it a direct link to pre-Neolithic Western European populations.",
  distribution: [
    {
      ethnicity: "Basques",
      region: "Southwestern Europe",
      percentage: 5,
      sampleSize: 200,
    },
    {
      ethnicity: "Iberians (Spanish/Portuguese)",
      region: "Southwestern Europe",
      percentage: 4,
      sampleSize: 500,
    },
    {
      ethnicity: "French",
      region: "Western Europe",
      percentage: 3,
      sampleSize: 400,
    },
    {
      ethnicity: "British",
      region: "Northwestern Europe",
      percentage: 2.5,
      sampleSize: 500,
    },
    {
      ethnicity: "Scandinavians",
      region: "Northern Europe",
      percentage: 2,
      sampleSize: 300,
    },
  ],
  statistics: {
    modernFrequency: "~2-3% in Western Europe",
    peakRegion: "Iberian Peninsula / Western Europe",
    estimatedCarriers: 20_000_000,
  },
  tags: ["Western Europe", "Iberian", "Mesolithic", "Hunter-gatherer", "mtDNA"],
  references: [
    "Brotherton et al. (2013) — Neolithic mitochondrial haplogroup H genomes and the genetic origins of Europeans. Nature Communications 4, 1764.",
    "Olalde et al. (2014) — Derived immune and ancestral pigmentation alleles in a 7,000-year-old Mesolithic European. Nature 507, 225–228.",
  ],
  featured: false,
  addedAt: "2026-06-30",
};

export default H1a_mt;
