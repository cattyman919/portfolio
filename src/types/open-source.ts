export type OpenSourceStatus = "merged" | "open" | "closed";

export interface OpenSourceLanguage {
  name: string;
  bytes: number;
  percentage: number;
}

export interface OpenSourceGeneratedMetadata {
  contributionUrl: string;
  contributionTitle: string;
  repositoryName: string;
  repositoryUrl: string;
  stars: number;
  status: OpenSourceStatus;
  createdAt: string;
  mergedAt: string | null;
  sortDate: string;
  languages: OpenSourceLanguage[];
  fetchedAt: string;
}

export type OpenSourceGeneratedCache = Record<
  string,
  OpenSourceGeneratedMetadata
>;

export interface OpenSourceAuthoredContribution {
  contributionUrl: string;
  description?: string;
  title?: string;
  tags?: string[];
}

export interface OpenSourceContributionViewModel {
  contribution: OpenSourceAuthoredContribution;
  metadata: OpenSourceGeneratedMetadata;
}

export interface OpenSourceRepositoryViewModel {
  id: string;
  repositoryName: string;
  repositoryUrl: string;
  stars: number;
  languages: OpenSourceLanguage[];
  sortDate: string;
  contributions: OpenSourceContributionViewModel[];
}
