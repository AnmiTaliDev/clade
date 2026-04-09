import type { Haplogroup } from "@/types/haplogroup";

const N1c: Haplogroup = {
  id: "N1c",
  name: "N1c (N-L392)",
  type: "Y-DNA",
  parent: "N1",
  children: ["N1c1"],
  formed: "~10,000 BCE",
  mrca: "~4,000 BCE",
  origin: {
    region: "Siberia / Northern Asia",
    period: "Mesolithic",
    coordinates: [75, 60],
  },
  description:
    "N1c (now classified as N-L392) is the dominant Y-DNA haplogroup among Uralic-speaking peoples, including Finns, Estonians, Sami, and many Siberian groups. It spread westward from Siberia during the Holocene and is strongly correlated with the spread of Uralic languages. In contrast to its distant Uralic cousin N1b, N1c is almost exclusively Eurasian. High frequencies are found in Finland (58–60%) and among various Turkic and Mongolic peoples of Siberia.",
  interestingFact:
    "Despite Finns and Siberians living thousands of kilometers apart, they share a high proportion of N1c lineages, reflecting a common ancestral population that spread Uralic languages across the northern Eurasian forest belt during the Neolithic and Bronze Age.",
  distribution: [
    { ethnicity: "Finns", region: "Northern Europe", percentage: 60, sampleSize: 700 },
    { ethnicity: "Estonians", region: "Northern Europe", percentage: 34, sampleSize: 400 },
    { ethnicity: "Sami", region: "Northern Europe", percentage: 20, sampleSize: 150 },
    { ethnicity: "Yakuts", region: "Siberia", percentage: 90, sampleSize: 300 },
    { ethnicity: "Buryats", region: "Siberia", percentage: 12, sampleSize: 200 },
    { ethnicity: "Latvians", region: "Baltic", percentage: 38, sampleSize: 300 },
    { ethnicity: "Lithuanians", region: "Baltic", percentage: 42, sampleSize: 300 },
    { ethnicity: "Nenets", region: "Arctic Siberia", percentage: 65, sampleSize: 100 },
  ],
  clans: [
    { type: "tribe", name: "Comb Ceramic culture", region: "Northern Europe / Siberia", note: "Neolithic culture associated with early N1c carriers in Northern Europe" },
    { type: "ru", name: "Sakha clans", region: "Yakutia, Siberia", note: "Yakut tribal lineages heavily dominated by N1c-L392" },
  ],
  statistics: {
    modernFrequency: "~4% of global male population",
    peakRegion: "Siberia / Finland",
    estimatedCarriers: 140_000_000,
  },
  tags: ["Uralic", "Siberia", "Finland", "Northern Europe", "Yakuts", "Mesolithic"],
  references: [
    "Rootsi et al. (2007) — A counter-clockwise northern route of the Y-chromosome haplogroup N from Southeast Asia towards Europe. European Journal of Human Genetics 15, 204–211.",
    "Lappalainen et al. (2008) — Migration waves to the Baltic Sea region. Annals of Human Genetics 72(3).",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default N1c;
