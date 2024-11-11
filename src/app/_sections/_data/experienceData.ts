import { experienceCardProps } from "../types/experienceType";
import VictoriaLogo from "@/public/images/experiences/pt_bank_victoria_international_tbk_logo.jpg";
import MileAppLogo from "@/public/images/experiences/mileapp.png";
import FurahaSystemLogo from "@/public/images/experiences/furaha_system.png";
export const ExperienceData: experienceCardProps[] = [
  {
    position: "Fullstack Web Developer",
    company: "Bank Victoria International",
    company_url: "https://www.linkedin.com/company/bankvictoria/",
    image: VictoriaLogo, // Replace with company logo
    description:
      "Developed and maintained web applications using Flutter (frontend) and NestJS (backend). Balanced internship responsibilities with academic coursework, attending the office weekly.  Collaborated with the supervisory team to meet project requirements.",
    languages: ["flutter", "nestjs", "typescript"],
    start_date: "November 2023", // Check dates - end date is before start date
    end_date: "September 2023", // These should likely be reversed.
  },
  {
    position: "Frontend Web Developer",
    company: "Mileapp",
    company_url: "https://www.linkedin.com/company/mileapp/",
    image: MileAppLogo, // Replace with company logo
    description:
      "Redesigned key user interface pages, including landing and login, to enhance user experience.  Collaborated with the supervisor on development planning and execution.",
    languages: ["react", "typescript"], // HTML shows React, not Flutter/Nest
    start_date: "September 2022", //Corrected based on provided HTML.  Likely a typo in original.
    end_date: "October 2022",
  },
  {
    position: "Frontend Web Developer",
    company: "Furaha System",
    company_url: "https://www.linkedin.com/company/furaha-systems/",
    image: FurahaSystemLogo, // Replace with company logo
    description:
      "Developed core pages (exam and listing features) using Next.js and Typescript. Contributed to team discussions and page development within a collaborative project environment.",
    languages: ["nextjs", "typescript"], // HTML shows Next.js, not Flutter/Nest
    start_date: "February 2021",
    end_date: "October 2022",
  },
];
