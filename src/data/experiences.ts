import type { Experience } from "@/types";

export const dummyData: Experience = {
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
};
