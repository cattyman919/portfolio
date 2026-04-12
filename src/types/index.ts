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

export interface Tool {
  name: string;
  logo?: string;
}

export enum ProjectType {
  IOT = "iot",
  Fullstack = "fullstack",
  Frontend = "frontend",
  Backend = "backend",
  HomeLab = "homelab",
}

export interface Project {
  title: string;
  description: string;
  type: ProjectType;
  image?: ImageMetadata;
  demoURL?: string;
  sourceCodeURL?: string;
  tools?: Tool[];
}

export interface SkillsLine {
  title: string;
  logo?: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  expertise: number;
  // Logo name from iconify
  logo?: string;
}
