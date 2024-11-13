import { experienceCardProps } from "../_types/experienceType";
import XLAxiataLogo from "@/public/images/experiences/XL_Axiata-Logo.wine.png";
import VictoriaLogo from "@/public/images/experiences/pt_bank_victoria_international_tbk_logo.jpg";
import MileAppLogo from "@/public/images/experiences/mileapp.png";
import FurahaSystemLogo from "@/public/images/experiences/furaha_system.png";
export const ExperienceData: experienceCardProps[] = [
  {
    position: "Fixed Connectivity, ICT & Cloud",
    description:
      "Contributed to strategic telecommunications expansion projects, focusing on Starlink feasibility analysis for remote internet access and utilizing Python-based web scraping to map ISP distribution in Indonesia. Developed data visualizations and impact reports to support network expansion strategies and optimize project outcomes.",
    company: "PT XL Axiata Tbk",
    company_url: "https://www.linkedin.com/company/pt-xl-axiata-tbk",
    start_date: "February 2024",
    end_date: "June 2024",
    languages: ["python"],
    image: XLAxiataLogo,
  },
  {
    position: "Fullstack Web Developer",
    company: "Bank Victoria International",
    company_url: "https://www.linkedin.com/company/bankvictoria/",
    image: VictoriaLogo,
    description:
      "Developed and maintained web applications using Flutter (frontend) and NestJS (backend). Balanced internship responsibilities with academic coursework, attending the office weekly.  Collaborated with the supervisory team to meet project requirements.",
    languages: ["flutter", "nestjs", "typescript"],
    start_date: "November 2023",
    end_date: "September 2023",
  },
  {
    position: "Frontend Web Developer",
    company: "Mileapp",
    company_url: "https://www.linkedin.com/company/mileapp/",
    image: MileAppLogo,
    description:
      "Redesigned key user interface pages, including landing and login, to enhance user experience.  Collaborated with the supervisor on development planning and execution.",
    languages: ["react", "typescript"],
    start_date: "September 2022",
    end_date: "October 2022",
  },
  {
    position: "Frontend Web Developer",
    company: "Furaha System",
    company_url: "https://www.linkedin.com/company/furaha-systems/",
    image: FurahaSystemLogo,
    description:
      "Developed core pages (exam and listing features) using Next.js and Typescript. Contributed to team discussions and page development within a collaborative project environment.",
    languages: ["nextjs", "typescript"],
    start_date: "February 2021",
    end_date: "October 2022",
  },
];
