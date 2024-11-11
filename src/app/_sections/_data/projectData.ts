import { ProjectCardProps } from "../types/projectType";
import RestomaticImage from "@/public/images/projects/restomatic.png";
import DanceRTOSImage from "@/public/images/projects/Attendance.png";
import JagaImage from "@/public/images/projects/jaga.png";
import VaultLockImage from "@/public/images/projects/electronicVault.png";

export const ProjectData: ProjectCardProps[] = [
  {
    title: "Restomatic",
    description:
      "A web platform for easy food and drink ordering. Users can browse restaurant menus, add funds, and leave ratings.",
    date: "May 2023",
    languages: ["typescript", "tailwindcss", "react", "nextjs"],
    image: RestomaticImage,
    github_repo: "https://github.com/SistemBasisData2023/RestoMatic",
  },
  {
    title: "DanceRTOS",
    description:
      "An attendance system using FreeRTOS ESP32 and RFID, with a web server and Blynk integration for class and schedule management.",
    date: "December 2023",
    languages: ["typescript", "nestjs", "dart", "flutter"],
    image: DanceRTOSImage,
    github_repo: "https://github.com/cattyman919/AbsenceSystem",
  },
  {
    title: "Jaga",
    description:
      "A vehicle maintenance app with GPS tracking to monitor kilometers and notify users of service needs based on distance and time.",
    date: "November 2023",
    languages: ["typescript", "nestjs", "dart", "flutter"],
    image: JagaImage,
    github_repo: "https://github.com/cattyman919/Jaga",
  },
  {
    title: "Electronic Vault Lock",
    description:
      "A secure 4-digit combination lock for protecting items, offering a simple and reliable locking mechanism.",
    date: "Nov 2022",
    languages: ["javascript"],
    image: VaultLockImage,
    github_repo: "https://github.com/rroiii/Electronic-Vault-Lock",
  },
];
