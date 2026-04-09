export type HaplogroupType = "Y-DNA" | "mtDNA" | "autosomal";

export type ClanType = "tribe" | "clan" | "surname" | "ru" | "family" | "dynasty";

export interface EthnicDistribution {
  ethnicity: string;
  region: string;
  percentage: number;
  sampleSize?: number;
  source?: string;
}

export interface ClanAssociation {
  type: ClanType;
  name: string;
  region?: string;
  note?: string;
}

export interface HaplogroupStatistics {
  modernFrequency: string;
  peakRegion: string;
  estimatedCarriers: number;
}

export interface HaplogroupOrigin {
  region: string;
  period: string;
  coordinates?: [number, number];
}

export interface Haplogroup {
  id: string;
  name: string;
  type: HaplogroupType;
  parent: string | null;
  children: string[];
  formed: string;
  mrca?: string;
  origin: HaplogroupOrigin;
  description: string;
  interestingFact: string;
  distribution: EthnicDistribution[];
  clans?: ClanAssociation[];
  statistics: HaplogroupStatistics;
  tags: string[];
  references: string[];
  featured?: boolean;
  addedAt: string;
}
