import type { Haplogroup } from "@/types/haplogroup";

const I1: Haplogroup = {
  id: "I1",
  name: "I1",
  type: "Y-DNA",
  parent: "I",
  children: [],
  formed: "~5,000 BCE",
  mrca: "~4,500 BCE",
  origin: {
    region: "Scandinavia / Northern Europe",
    period: "Neolithic / Chalcolithic",
    coordinates: [12, 60],
  },
  description:
    "I1 is the characteristic Y-DNA haplogroup of Scandinavians and Northern Europeans, found at its highest frequencies in Sweden, Norway, Denmark, Iceland, and Finland. Despite the haplogroup itself being ancient, I1 experienced a dramatic population bottleneck followed by explosive expansion approximately 5,000 years ago, possibly linked to the Corded Ware culture or a post-glacial re-expansion from a Scandinavian refugium. It is considered the principal genetic signature of Norse and Germanic peoples, and its distribution closely mirrors the historical extent of Germanic and Viking cultural influence across Europe.",
  interestingFact:
    "Historical analysis of medieval Scandinavian skeletal remains shows extremely high I1 frequencies, suggesting it was the dominant haplogroup of the Viking Age Norse populations who raided, traded, and settled across Europe — from Iceland and Greenland in the west to Constantinople and the Caspian Sea in the east.",
  distribution: [
    { ethnicity: "Swedes", region: "Northern Europe", percentage: 37 },
    { ethnicity: "Norwegians", region: "Northern Europe", percentage: 32 },
    { ethnicity: "Danes", region: "Northern Europe", percentage: 34 },
    { ethnicity: "Icelanders", region: "Northern Europe", percentage: 42 },
    { ethnicity: "Germans", region: "Western / Central Europe", percentage: 16 },
    { ethnicity: "Finns", region: "Northern Europe", percentage: 29 },
    { ethnicity: "English (Anglo-Saxon heritage)", region: "Western Europe", percentage: 20 },
  ],
  clans: [
    { type: "dynasty", name: "House of Rurik", region: "Eastern Europe", note: "Disputed — some researchers propose I1 among early Varangian founders, though R1a is also strongly represented" },
    { type: "tribe", name: "Norse / Vikings", region: "Scandinavia", note: "Viking Age Norse populations showed very high I1 frequencies in ancient DNA studies" },
    { type: "tribe", name: "Anglo-Saxons", region: "England", note: "Germanic migrants to post-Roman Britain contributed I1 to the English gene pool" },
  ],
  statistics: {
    modernFrequency: "~5% of global male population",
    peakRegion: "Scandinavia",
    estimatedCarriers: 180_000_000,
  },
  tags: ["Scandinavia", "Vikings", "Norse", "Northern Europe", "Germanic", "Mesolithic"],
  references: [
    "Rootsi et al. (2004) — Phylogeography of Y-chromosome haplogroup I reveals distinct domains of prehistoric gene flow in Europe. American Journal of Human Genetics 75(1), 128–137.",
    "Margaryan et al. (2020) — Population genomics of the Viking world. Nature 585, 390–396.",
    "Hedenstierna-Jonson et al. (2017) — A female Viking warrior confirmed by genomics. American Journal of Physical Anthropology 164(4), 853–860.",
  ],
  featured: false,
  addedAt: "2026-04-09",
};

export default I1;
