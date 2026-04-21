import type { SkillsLine } from "@/types";

export const skillsData: SkillsLine[] = [
  {
    title: "Languages & Framework",
    logo: "mdi:code",
    skills: [
      [
        { name: "nextjs", expertise: 70, logo: "devicon:nextjs" },
        { name: "typescript", expertise: 80, logo: "devicon:typescript" },
        { name: "golang", expertise: 80, logo: "devicon:go" },
        { name: "rust", expertise: 70, logo: "devicon:rust" },
        { name: "nestjs", expertise: 70, logo: "devicon:nestjs" },
        { name: "react", expertise: 80, logo: "devicon:react" },
        { name: "java", expertise: 60, logo: "devicon:java" },
      ],
      [
        { name: "nextjs", expertise: 70, logo: "devicon:nextjs" },
        { name: "typescript", expertise: 80, logo: "devicon:typescript" },
        { name: "golang", expertise: 80, logo: "devicon:go" },
        { name: "rust", expertise: 70, logo: "devicon:rust" },
        { name: "nestjs", expertise: 70, logo: "devicon:nestjs" },
        { name: "react", expertise: 80, logo: "devicon:react" },
        { name: "java", expertise: 60, logo: "devicon:java" },
      ],
    ],
  },
  {
    title: "Devops",
    logo: "mdi:cloud-outline",
    skills: [
      [
        { name: "AWS", expertise: 60, logo: "skill-icons:aws-dark" },
        { name: "GCP", expertise: 50, logo: "skill-icons:gcp-dark" },
        { name: "Linux", expertise: 80, logo: "devicon:linux" },
        { name: "Docker", expertise: 80, logo: "skill-icons:docker" },
        { name: "Kubernetes", expertise: 60, logo: "devicon:kubernetes" },
        { name: "Computer Networks", expertise: 70 },
      ],
    ],
  },
];
