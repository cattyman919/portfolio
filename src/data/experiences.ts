import type { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    company: "XLSmart",
    position: "Platform Engineer",
    date: "September 2025 - Present",
    jobType: "Contract",
    location: "Jakarta Selatan, Indonesia",
    points: [
      "**Engineered** a high-concurrency **Go** tool to automate weekly End-of-Support (EOS) and capacity reporting across **~100 AWS accounts** and **~100 GCP projects**, **slashing manual report generation time from 45 minutes to under 3 minutes**.",
      "**Engineered** an automated **AMI compliance scanner** in **Go** to track **Amazon Linux 2 to 2023 migration** progress across **Karpenter** nodepools and **EKS Managed Node Groups** in **50+ AWS accounts**.",
      "**Built** a **Go** utility to **audit Kubernetes clusters** at scale, querying **EKS clusters** to gather **PodDisruptionBudget (PDB)** and **HPA** data for cross-team resilience analysis.",
    ],
  },
  {
    company: "Superbank",
    position: "Technical Support",
    date: "December 2024 - June 2025",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    points: [
      "Managed end-to-end deployment of vendor-provided scripts across AWS environments (EC2 Dev/Staging) via S3 bucket integration, WinSCP file transfers, and XML configuration adjustments.",
      "Automated deployment workflows by developing a PowerShell script to extract ZIP files and configuration for deployment processes, reducing manual effort by 40% and accelerating deployment cycles.",
      "Streamlined cross-departmental communication by drafting and prioritizing Jira tickets with SQL query logs, error reports, and urgency assessments for vendor and internal teams.",
      "Secured client data by encrypting sensitive TXT files using Kleopatra with Superbank PGP keys and ensuring secure FTP transfers to comply with data protection standards.",
    ],
  },
  {
    company: "XL Axiata Tbk",
    position: "Fixed Connectivity, ICT & Cloud",
    date: "February 2024 - July 2025",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    points: [
      "Conducted comprehensive performance analysis and SWOT evaluation of Starlink technology to explore its potential for expanding broadband access in remote Indonesian regions.",
      "Developed web scraping solutions using Python (BeautifulSoup, Pandas) to map Indonesian ISPs from APJII data, enabling insights into market distribution and operational scale.",
      "Created data visualizations and analytical reports with Power BI and Excel, aiding strategic business decision-making for enhanced telecommunications service quality.",
      "Presented findings and strategic recommendations to mentors and senior management, leveraging strong communication skills and technical knowledge to facilitate informed decision-making and business strategy development.",
    ],
  },
  {
    company: "Bank Victoria International",
    position: "Fullstack Engineer",
    date: "September 2023 - November 2023",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    points: [
      "Developed and maintained Victoria’s web application, integrating frontend (Flutter) and backend (NestJS) technologies to deliver seamless user experiences.",
      "Demonstrated exceptional time management skills by juggling internship duties with academic responsibilities, attending office once weekly.",
      "Ensured project requirements were met through effective communication and collaboration with the supervisory team.",
    ],
  },
  {
    company: "Mileapp",
    position: "Frontend Engineer",
    date: "September 2022 - October 2023",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    points: [
      "Redesigned critical user interface pages, including landing and login pages, to improve user experience.",
      "Engaged in productive discussions with the supervisor to plan and execute development tasks efficiently.",
    ],
  },
];
