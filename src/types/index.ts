import type { ImageMetadata } from "astro";

export interface Experience {
  company: string;
  position: string;
  date: string;
  location: string;
  logo?: ImageMetadata;
  jobType: string;
  points: string[];
}
