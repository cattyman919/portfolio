import { StaticImageData } from "next/image";

export interface ProjectCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  languages?: string[];
  github_repo?: string;
  website?: string;
}

export interface CreditPersonProps {
  name: string;
  github?: string;
  linkedIn?: string;
}

export interface ProjectModalProps {
  title: string;
  detailed_description: string;
  contribution: string[];
  credits: CreditPersonProps[];
}
