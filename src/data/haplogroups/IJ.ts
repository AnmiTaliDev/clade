import type { Haplogroup } from "@/types/haplogroup";

const IJ: Haplogroup = {
  id: "IJ",
  name: "IJ",
  type: "Y-DNA",
  parent: "F",
  children: ["I", "J"],
  formed: "~43,000 BCE",
  mrca: "~38,000 BCE",
  origin: {
    region: "Near East / West Asia",
    period: "Upper Paleolithic",
    coordinates: [40, 32],
  },
  description:
    "IJ is the ancestral haplogroup of both I and J. Haplogroup I is the predominant lineage of pre-Neolithic European hunter-gatherers and remains common across Northern and Southeastern Europe. Haplogroup J is associated with the Near East and Fertile Crescent populations. The IJ ancestor likely lived in the Near East approximately 43,000 years ago before diverging into two major regional lineages.",
  interestingFact:
    "Haplogroup I — one of IJ's two children — is considered a 'true European' haplogroup, as it is rarely found outside Europe. It was likely the dominant lineage among European hunter-gatherers before the Neolithic arrival of J-carrying farmers from Anatolia.",
  distribution: [
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 37, sampleSize: 200 },
    { ethnicity: "Bosnians", region: "Southeast Europe", percentage: 70, sampleSize: 150 },
    { ethnicity: "Swedes", region: "Northern Europe", percentage: 37, sampleSize: 400 },
  ],
  statistics: {
    modernFrequency: "~15% of global male population",
    peakRegion: "Europe / Near East",
    estimatedCarriers: 560_000_000,
  },
  tags: ["Europe", "Near East", "Paleolithic", "Hunter-gatherer"],
  references: [
    "Rootsi et al. (2004) — Phylogeography of Y-chromosome haplogroup I reveals distinct domains of prehistoric gene flow in Europe. American Journal of Human Genetics 75(1), 128–137.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default IJ;
