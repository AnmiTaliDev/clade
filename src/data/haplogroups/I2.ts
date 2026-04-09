import type { Haplogroup } from "@/types/haplogroup";

const I2: Haplogroup = {
  id: "I2",
  name: "I2",
  type: "Y-DNA",
  parent: "I",
  children: [],
  formed: "~17,000 BCE",
  mrca: "~7,000 BCE",
  origin: {
    region: "Southeastern Europe / Balkans",
    period: "Epipaleolithic",
    coordinates: [17, 44],
  },
  description:
    "Haplogroup I2 is the dominant paternal lineage in the Balkans and is common across Eastern Europe. It is most frequent in Bosnia (71%), Croatia (38%), and Serbia (35%), and is found at notable levels in Ukraine, Romania, and Poland. The major subclade I2a2 — also called I-CTS10228 or colloquially 'Dinaric' — experienced a dramatic population bottleneck and subsequent explosive expansion in the Balkans after approximately 2,000 BCE, a pattern many researchers link to the expansion of Slavic-speaking populations during the Migration Period (5th–7th centuries CE). An older branch, associated with Mesolithic European hunter-gatherers, is found at high frequencies in Sardinians.",
  interestingFact:
    "The 'Dinaric' subclade I-CTS10228 displays a classic star-shaped phylogeny consistent with a severe population bottleneck followed by rapid demographic expansion approximately 2,000 years ago — a genetic signature many researchers connect to the explosive Slavic migrations of the 5th to 7th centuries CE.",
  distribution: [
    { ethnicity: "Bosniaks", region: "Southeastern Europe", percentage: 71 },
    { ethnicity: "Croats", region: "Southeastern Europe", percentage: 38 },
    { ethnicity: "Serbs", region: "Southeastern Europe", percentage: 35 },
    { ethnicity: "Ukrainians", region: "Eastern Europe", percentage: 22 },
    { ethnicity: "Poles", region: "Eastern Europe", percentage: 17 },
    { ethnicity: "Czechs", region: "Central Europe", percentage: 14 },
    { ethnicity: "Romanians", region: "Eastern Europe", percentage: 28 },
    { ethnicity: "Sardinians", region: "Southern Europe", percentage: 34 },
  ],
  clans: [
    { type: "tribe", name: "Early Slavs", region: "Eastern / Southeastern Europe", note: "Migration Period Slavic expansion (5th–7th centuries CE) strongly linked to the demographic explosion of I-CTS10228" },
    { type: "tribe", name: "Balkan hunter-gatherers", region: "Balkans", note: "Mesolithic relict population whose I2 lineages survived the Neolithic and Bronze Age population turnovers" },
  ],
  statistics: {
    modernFrequency: "~4% of global male population",
    peakRegion: "Balkans / Eastern Europe",
    estimatedCarriers: 150_000_000,
  },
  tags: ["Balkans", "Slavic", "Eastern Europe", "Mesolithic", "Migration Period", "Dinaric"],
  references: [
    "Rootsi et al. (2004) — Phylogeography of Y-chromosome haplogroup I reveals distinct domains of prehistoric gene flow in Europe. American Journal of Human Genetics 75(1), 128–137.",
    "Underhill et al. (2010) — Separating the post-Glacial coancestry of European and Asian Y chromosomes within haplogroup R1a. European Journal of Human Genetics 18, 479–484.",
    "Mirabal et al. (2010) — Y-chromosome distribution within the geo-linguistic landscape of northwestern Russia. European Journal of Human Genetics 17, 1260–1273.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default I2;
