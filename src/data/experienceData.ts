import XL_Axiata from "../assets/images/experiences/XL_Axiata-Logo.wine.png";
import BankVictoria from "@assets/images/experiences/pt_bank_victoria_international_tbk_logo.jpg";
import Mileapp from "../assets/images/experiences/mileapp.png";
import FurahaSystem from "../assets/images/experiences/furaha_system.png";

import type { experienceCardProp } from "../types/experience";

export const ExperienceData: experienceCardProp[] = [
  {
    position: "Fixed Connectivity, ICT & Cloud",
    descriptions: [
      "Conducted comprehensive market research and data scraping using Python, BeautifulSoup, and Pandas to analyze the competitive landscape and identify growth opportunities for satellite products in Indonesia.",
      "Delivered strategic recommendations to senior management through detailed presentations, effectively combining technical insights and business acumen.",
      "Coordinated cross-functional team activities to ensure timely completion of market analysis and project deliverables.",
    ],
    company: "PT XL Axiata Tbk",
    company_url: "https://www.linkedin.com/company/pt-xl-axiata-tbk",
    start_date: "February 2024",
    end_date: "June 2024",
    languages: ["python"],
    image: XL_Axiata,
  },
  {
    position: "Fullstack Web Developer",
    company: "Bank Victoria International",
    company_url: "https://www.linkedin.com/company/bankvictoria/",
    image: BankVictoria,
    descriptions: [
      "Developed and maintained Victoria’s web application, integrating frontend (Flutter) and backend (NestJS) technologies to deliver seamless user experiences.",
      "Effectively managed responsibilities by balancing internship tasks with academic commitments, maintaining high productivity and timely deliverables.",
      "Communicated consistently with the supervisory team to clarify requirements and align development priorities with business objectives.",
    ],
    languages: ["flutter", "nestjs", "typescript"],
    start_date: "November 2023",
    end_date: "September 2023",
  },
  {
    position: "Frontend Web Developer",
    company: "Mileapp",
    company_url: "https://www.linkedin.com/company/mileapp/",
    image: Mileapp,
    descriptions: [
      "Redesigned critical user interface pages, improving performance and user experience, with a focus on modernizing the landing and login pages.",
      "Maintained consistent and effective remote collaboration with supervisors, ensuring project milestones were met on schedule.",
      "Demonstrated strong time management by successfully completing project tasks alongside academic responsibilities.",
    ],
    languages: ["react", "typescript"],
    start_date: "September 2022",
    end_date: "October 2022",
  },
  {
    position: "Frontend Web Developer",
    company: "Furaha System",
    company_url: "https://www.linkedin.com/company/furaha-systems/",
    image: FurahaSystem,
    descriptions: [
      "Developed advanced web functionalities using Next.js, including dynamic navigation bars, sidebars for question navigation, and real-time answer tracking.",
      "Acquired and applied expertise in React, HTML, CSS, and JavaScript to create and enhance web applications.",
      "Delivered project updates regularly, ensuring alignment with goals and maintaining effective communication with the team.",
    ],
    languages: ["nextjs", "typescript"],
    start_date: "February 2021",
    end_date: "October 2022",
  },
];
