import { StaticImageData } from "next/image";

export type experienceCardProps = {
  image: StaticImageData;
  position: string;
  company: string;
  company_url: string;
  description: string;
  start_date: string;
  end_date: string;
  languages: string[];
};
