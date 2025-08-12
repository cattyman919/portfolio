import { StaticImageData } from "next/image";

export interface experienceCardProps {
  image: StaticImageData;
  position: string;
  company: string;
  company_url: string;
  descriptions: string[];
  start_date: string;
  end_date: string;
  languages: string[];
}
