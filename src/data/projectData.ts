import type { ProjectCardProps } from "../types/project";

export const ProjectData: ProjectCardProps[] = [
  {
    id: 1,
    title: "Project 1",
    short_description: "This is a placeholder for the first project.",
    image: "https://via.placeholder.com/300",
    date: "2023-01-01",
    github_repo: "#",
    website: "#",
    languages: ["Astro", "TailwindCSS"],
  },
  {
    id: 2,
    title: "Project 2",
    short_description: "This is a placeholder for the second project.",
    image: "https://via.placeholder.com/300",
    date: "2023-02-01",
    github_repo: "#",
    website: "#",
    languages: ["Astro", "TypeScript"],
  },
];
