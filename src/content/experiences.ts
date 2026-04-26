import type { Experience } from "@/types";
import XLAxiataLogo from "@/assets/experiences/XL_Axiata_2014.png";
import XLSmartLogo from "@/assets/experiences/XLSmart.png";
import SuperBankLogo from "@/assets/experiences/Superbank.png";
import BankVictoriaLogo from "@/assets/experiences/Bank_Victoria_logo.png";
// import MileAppLogo from "@/assets/experiences/new-mileapp-logo-full.svg";
import MileAppLogo from "@/assets/experiences/mileapp.png";

export const experienceData: Experience[] = [
  {
    company: "XLSmart",
    logo: XLSmartLogo,
    position: "Platform Engineer",
    date: "September 2025 - Present",
    jobType: "Contract",
    location: "Jakarta Selatan, Indonesia",
    tools: [
      { name: "Go", logo: "skill-icons:golang" },
      { name: "NextJS", logo: "devicon:nextjs" },
      { name: "AWS", logo: "skill-icons:aws-dark" },
      { name: "GCP", logo: "skill-icons:gcp-dark" },
      {
        name: "Kubernetes",
        logo: "devicon:kubernetes",
      },
      {
        name: "Helm",
        logo: "devicon:helm",
      },
      {
        name: "Docker",
        logo: "devicon:docker",
      },

      { name: "Grafana", logo: "devicon:grafana" },
    ],
    points: [
      "**Developed** Kluster-Compare, a full-stack internal platform (**Go** backend, **Next.js** frontend) to visualize and **diff Kubernetes manifests between live clusters and GitOps states**, engineering strict datasource loading sequences to guarantee accurate multi-cluster auditing.",
      "**Built a Go utility to audit Kubernetes clusters at scale**, capturing PodDisruptionBudget (PDB) and Horizontal Pod Autoscaler (HPA) metrics, and implementing a precise range-based formula `(safeCurrent - min) / (max - min)` to ensure highly accurate capacity visualization.",
      "**Engineered** a high-concurrency **Go** tool to automate weekly End-of-Support (EOS) and capacity reporting across **~100 AWS accounts** and **~100 GCP projects**, **slashing manual report generation time from 45 minutes to under 3 minutes**.",
      "**Automated compliance tracking** by building an AMI scanner in **Go** to monitor **Amazon Linux 2 to AL2023** migration progress across Karpenter nodepools and EKS Managed Node Groups in 50+ AWS accounts.",
    ],
  },
  {
    company: "Superbank",
    logo: SuperBankLogo,
    position: "Technical Support",
    date: "December 2024 - June 2025",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    tools: [
      { name: "AWS", logo: "skill-icons:aws-dark" },
      { name: "Powershell", logo: "devicon:powershell" },
    ],
    points: [
      "**Managed end-to-end deployment** of vendor-provided scripts across **AWS EC2** (Dev/Staging) via **S3 bucket integration**, **WinSCP** file transfers, and **XML configuration adjustments**.",
      "**Automated deployment workflows** by developing a **PowerShell script** to extract ZIP files and configure deployment processes, reducing manual effort by 40% and accelerating deployment cycles.",
      "Streamlined cross-departmental communication by drafting and prioritizing Jira tickets with SQL query logs, error reports, and urgency assessments for vendor and internal teams.",
      "Secured client data by encrypting sensitive TXT files using Kleopatra with Superbank PGP keys and ensuring secure FTP transfers to comply with data protection standards.",
    ],
  },
  {
    company: "XL Axiata Tbk",
    logo: XLAxiataLogo,
    position: "Fixed Connectivity, ICT & Cloud",
    date: "February 2024 - July 2025",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    tools: [{ name: "Python", logo: "devicon:python" }],
    points: [
      "Developed **automated data ingestion pipelines** using **Python (Pandas)** and **BeautifulSoup** to scrape, clean, and structure large datasets for strategic data mining and market analysis.",
      "Conducted **comprehensive market research** utilizing automated scraping to identify growth opportunities and assess the competitive landscape for satellite products.",
      "Created data visualizations and analytical reports with Power BI and Excel, aiding strategic business decision-making for enhanced telecommunications service quality.",
      "Presented findings and strategic recommendations to mentors and senior management, leveraging strong communication skills and technical knowledge to facilitate informed decision-making and business strategy development.",
    ],
  },
  {
    company: "Bank Victoria International",
    logo: BankVictoriaLogo,
    position: "Fullstack Engineer",
    date: "September 2023 - November 2023",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    tools: [
      { name: "Flutter", logo: "devicon:flutter" },
      { name: "NestJS", logo: "devicon:nestjs" },
    ],
    points: [
      "**Integrated the Flutter frontend with backend APIs built in NestJS** and maintained data consistency with **MySQL**, ensuring accurate, real-time accounting records.",
      "Developed **dynamic journal booking tables** on the frontend with **Flutter**, integrating advanced filtering by date and booking type, pagination, and soft deletion functionalities.",
    ],
  },
  {
    company: "Mileapp",
    logo: MileAppLogo,
    position: "Frontend Engineer",
    date: "September 2022 - October 2023",
    jobType: "Internship",
    location: "Jakarta Selatan, Indonesia",
    tools: [
      { name: "NextJS", logo: "devicon:nextjs" },
      { name: "React", logo: "devicon:react" },
    ],
    points: [
      "**Rebuilt and redesigned** critical web pages (landing, login, and registration) from scratch using **React** and **styled-components**.",
      "Contributed to a major UI overhaul aimed at **improving user experience and frontend performance** for field agents and administrators.",
      "Collaborated remotely with supervisors to integrate the new **React-based frontend** with the platform’s evolving product direction, replacing legacy code with scalable components.",
    ],
  },
];
