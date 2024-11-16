import { StaticImageData } from "next/image";

export type ProjectCardProps = {
  image: StaticImageData;
  title: string;
  description: string;
  date: string;
  languages?: string[];
  github_repo?: string;
  website?: string;
};
