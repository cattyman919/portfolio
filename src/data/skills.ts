import type { SkillsLine } from "@/types";

export const skillsData: SkillsLine[] = [
  {
    title: "Languages & Framework",
    logo: "mdi:code",
    skills: [
      { name: "NextJS", expertise: 70, logo: "devicon:nextjs" },
      { name: "Typescript", expertise: 80, logo: "devicon:typescript" },
      { name: "Golang", expertise: 80, logo: "devicon:go" },
      { name: "Rust", expertise: 70, logo: "devicon:rust" },
      { name: "NestJS", expertise: 70, logo: "devicon:nestjs" },
      { name: "React", expertise: 80, logo: "devicon:react" },
      { name: "Java", expertise: 60, logo: "devicon:java" },
    ],
  },
  {
    title: "Devops",
    logo: "mdi:cloud-outline",
    skills: [
      { name: "AWS", expertise: 60, logo: "skill-icons:aws-dark" },
      { name: "GCP", expertise: 50, logo: "skill-icons:gcp-dark" },
      { name: "Linux", expertise: 80, logo: "devicon:linux" },
      { name: "Docker", expertise: 80, logo: "skill-icons:docker" },
      { name: "Kubernetes", expertise: 60, logo: "devicon:kubernetes" },
      { name: "Computer Networks", expertise: 70 },
    ],
  },
];
