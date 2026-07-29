import type { ImageMetadata } from "astro";

export interface AchievementImage {
  src: ImageMetadata | string;
  alt: string;
  caption?: string;
}

export interface AchievementLink {
  label: string;
  url: string;
  icon?: string;
}

export interface AchievementTool {
  name: string;
  logo?: string;
}

export interface AchievementData {
  draft?: boolean;
  title: string;
  date: Date;
  summary: string;
  highlights: string[];
  images: AchievementImage[];
  organization?: string;
  event?: string;
  location?: string;
  type?:
    | "hackathon"
    | "award"
    | "competition"
    | "certification"
    | "talk"
    | "milestone";
  rank?: string;
  role?: string;
  impact?: string[];
  tools?: AchievementTool[];
  links?: AchievementLink[];
  storyUrl?: string;
  carouselIntervalMs?: number;
  featured?: boolean;
  order?: number;
}

export interface AchievementEntry {
  id: string;
  data: AchievementData;
}
