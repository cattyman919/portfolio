import type { ImageMetadata } from "astro";

export interface Experience {
  company: string;
  position: string;
  date: string;
  location: string;
  logo?: ImageMetadata;
  jobType: string;
  tools?: Tool[];
  points: string[];
}

export interface Tool {
  name: string;
  // Logo name from iconify
  logo?: string;
}

export interface SkillsLine {
  title: string;
  logo?: string;
  skills: Skill[][];
}

export interface Skill {
  name: string;
  expertise: number;
  // Logo name from iconify
  logo?: string;
}
