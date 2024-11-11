import { ProjectCardProps } from "../types/projectType";
import skibidiImage from "@/public/images/skibidi-toilet.jpeg";

export const ProjectData: ProjectCardProps[] = [
  {
    title: "Restomatic",
    description:
      "A web platform for easy food and drink ordering. Users can browse restaurant menus, add funds, and leave ratings.",
    date: "12 June 2024",
    languages: ["typescript", "tailwindcss", "react", "nextjs"],
    image: skibidiImage,
    github_repo: "https://github.com/SistemBasisData2023/RestoMatic",
  },
  {
    title: "DanceRTOS",
    description:
      "An attendance system using FreeRTOS ESP32 and RFID, with a web server and Blynk integration for class and schedule management.",
    date: "12 June 2024",
    languages: ["typescript", "nestjs", "dart", "flutter"],
    image: skibidiImage,
    github_repo: "https://github.com/cattyman919/AbsenceSystem",
  },
  {
    title: "Jaga",
    description:
      "A vehicle maintenance app with GPS tracking to monitor kilometers and notify users of service needs based on distance and time.",
    date: "12 June 2024",
    languages: ["typescript", "nestjs", "dart", "flutter"],
    image: skibidiImage,
    github_repo: "https://github.com/cattyman919/Jaga",
  },
  {
    title: "Electronic Vault Lock",
    description:
      "A secure 4-digit combination lock for protecting items, offering a simple and reliable locking mechanism.",
    date: "12 June 2024",
    languages: ["javascript"],
    image: skibidiImage,
    github_repo: "https://github.com/rroiii/Electronic-Vault-Lock",
  },
];
