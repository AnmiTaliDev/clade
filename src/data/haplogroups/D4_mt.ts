import type { Haplogroup } from "@/types/haplogroup";

const D4_mt: Haplogroup = {
  id: "D4_mt",
  name: "D4 (mtDNA)",
  type: "mtDNA",
  parent: "D_mt",
  children: ["D4h_mt"],
  formed: "~30,000 BCE",
  mrca: "~15,000 BCE",
  origin: { region: "East Asia / Siberia", period: "Upper Paleolithic", coordinates: [110, 50] },
  description: "Haplogroup D4 is the most diverse and widespread subclade of mtDNA haplogroup D, accounting for the majority of D lineages in East Asia and Siberia. It is broadly distributed across China, Japan, Korea, Mongolia, Siberia, and Central Asia, and also reaches the Americas via ancient Beringian populations. D4 contains dozens of sub-branches reflecting the deep population history of East and Northeast Asia. It was among the founding lineages that colonized the Americas, making it one of the five major mtDNA haplogroups of Native Americans.",
  interestingFact: "D4 is one of the most diverse mtDNA haplogroups in the world by number of sub-branches, reflecting its ancient origin and long evolutionary history in East Asia and Siberia — some D4 sub-branches are estimated to be over 20,000 years old.",
  distribution: [
    { ethnicity: "Chinese (Han)", region: "East Asia", percentage: 10, sampleSize: 3000 },
    { ethnicity: "Mongolians", region: "East/Central Asia", percentage: 15, sampleSize: 600 },
    { ethnicity: "Japanese", region: "East Asia", percentage: 8, sampleSize: 1000 },
    { ethnicity: "Siberians", region: "Siberia", percentage: 20, sampleSize: 500 },
  ],
  statistics: { modernFrequency: "~3% of global female population", peakRegion: "East Asia / Siberia", estimatedCarriers: 60_000_000 },
  tags: ["East Asia", "Siberia", "Mongolia", "Japan", "Americas", "Paleolithic"],
  references: ["Kong et al. (2011) — Large-scale mtDNA screening reveals a surprising matrilineal complexity in east Asia and its implications to the peopling of the region. Molecular Biology and Evolution 28(1), 513–522."],
  featured: false,
  addedAt: "2026-06-30",
};
export default D4_mt;
