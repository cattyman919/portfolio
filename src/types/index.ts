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

export interface SkillsLine {
  title: string
  skills: Skill[]
}

export interface Skill {
  name : string;
  expertise: number;
  // Logo name from iconify
  logo ?: string; 
}
