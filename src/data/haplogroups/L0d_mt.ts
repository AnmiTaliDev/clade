import type { Haplogroup } from "@/types/haplogroup";

const L0d_mt: Haplogroup = {
  id: "L0d_mt",
  name: "L0d (mtDNA)",
  type: "mtDNA",
  parent: "L0",
  children: [],
  formed: "~100,000 BCE",
  mrca: "~60,000 BCE",
  origin: { region: "Southern Africa", period: "Middle Stone Age", coordinates: [25, -25] },
  description: "Haplogroup L0d is one of the most ancient surviving mtDNA lineages on Earth, found almost exclusively among the Khoisan peoples of Southern Africa — the San (Bushmen) and Khoekhoe (Hottentot) peoples. L0d represents a lineage that diverged from all other human mtDNA groups hundreds of thousands of years ago and has been maintained in relative isolation in Southern Africa. It is among the most basal lineages in the human mtDNA tree, meaning L0d carriers preserve genetic variants closest to our species' deepest maternal ancestry.",
  interestingFact: "The Khoisan people who carry L0d are genetically among the oldest continuous populations on Earth — San hunter-gatherers of Southern Africa show greater genetic diversity within their mtDNA than exists between all other world populations combined, a reflection of their extraordinarily deep evolutionary roots and minimal population bottlenecks throughout history.",
  distribution: [
    { ethnicity: "San (Bushmen)", region: "Southern Africa", percentage: 40, sampleSize: 400 },
    { ethnicity: "Khoekhoe", region: "Southern Africa", percentage: 20, sampleSize: 200 },
    { ethnicity: "Hadza (Tanzania)", region: "East Africa", percentage: 15, sampleSize: 100 },
  ],
  statistics: { modernFrequency: "~0.05% of global female population", peakRegion: "Southern Africa (San/Khoisan)", estimatedCarriers: 1_000_000 },
  tags: ["Southern Africa", "Khoisan", "San", "Bushmen", "Ancient", "Africa", "Hunter-gatherer"],
  references: ["Behar et al. (2008) — The dawn of human matrilineal diversity. American Journal of Human Genetics 82(5), 1130–1140."],
  featured: true,
  addedAt: "2026-06-30",
};
export default L0d_mt;
