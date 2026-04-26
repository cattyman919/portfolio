import type { SkillsLine } from "@/types";

export const skillsData: SkillsLine[] = [
  {
    title: "Languages & Frameworks",
    logo: "lucide:code-2",
    skills: [
      [
        { name: "Go", expertise: 95, logo: "skill-icons:golang" },
        { name: "Rust", expertise: 85, logo: "skill-icons:rust" },
        { name: "TypeScript", expertise: 90, logo: "skill-icons:typescript" },
        { name: "Python", expertise: 85, logo: "skill-icons:python-dark" },
        { name: "Java", expertise: 80, logo: "skill-icons:java-light" },
      ],
      [
        { name: "React", expertise: 90, logo: "skill-icons:react-dark" },
        { name: "Next.js", expertise: 85, logo: "skill-icons:nextjs-light" },
        { name: "NestJS", expertise: 85, logo: "skill-icons:nestjs-light" },
        { name: "Flutter", expertise: 85, logo: "skill-icons:flutter-dark" },
        {
          name: "Tailwind CSS",
          expertise: 95,
          logo: "skill-icons:tailwindcss-dark",
        },
      ],
    ],
  },
  {
    title: "Cloud & Infrastructure",
    logo: "lucide:cloud",
    skills: [
      [
        { name: "Kubernetes", expertise: 95, logo: "skill-icons:kubernetes" },
        { name: "AWS", expertise: 90, logo: "skill-icons:aws-light" },
        { name: "GCP", expertise: 85, logo: "skill-icons:gcp-light" },
        { name: "Docker", expertise: 90, logo: "skill-icons:docker" },
        { name: "Linux", expertise: 90, logo: "skill-icons:linux-light" },
      ],
      [
        { name: "Git", expertise: 90, logo: "skill-icons:git" },
        { name: "Bash/Shell", expertise: 85, logo: "skill-icons:bash-light" },
        { name: "Networking", expertise: 80, logo: "lucide:network" },
        { name: "System Admin", expertise: 85, logo: "lucide:server-cog" },
        { name: "Security", expertise: 80, logo: "lucide:shield-check" },
      ],
    ],
  },
  {
    title: "Data & Core Fundamentals",
    logo: "lucide:database",
    skills: [
      [
        {
          name: "PostgreSQL",
          expertise: 85,
          logo: "skill-icons:postgresql-light",
        },
        { name: "MySQL", expertise: 85, logo: "skill-icons:mysql-light" },
        { name: "NoSQL", expertise: 80, logo: "lucide:database-backup" },
        { name: "Data Scraping", expertise: 85, logo: "lucide:file-json-2" },
      ],
      [
        { name: "Internet of Things", expertise: 85, logo: "lucide:cpu" },
        { name: "C++", expertise: 80, logo: "skill-icons:cpp" },
        { name: "C", expertise: 75, logo: "skill-icons:c" },
        { name: "Machine Learning", expertise: 70, logo: "lucide:brain" },
      ],
    ],
  },
];
