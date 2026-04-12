import type { Project } from "@/types";
import { ProjectType } from "@/types";
import DanceRTOSImage from "@/assets/projects/DanceRTOS.png";
import VAIOImage from "@/assets/projects/vaio.jpg";
import HomeServerImage from "@/assets/projects/home_server.jpg";

export const projects: Project[] = [
  {
    title: "DanceRTOS",
    type: ProjectType.Fullstack,
    image: DanceRTOSImage,
    description:
      "An attendance system using FreeRTOS ESP32 and RFID, with a web server and Blynk integration for class and schedule management.",
    tools: [
      {
        name: "Typescript",
        logo: "devicon:typescript",
      },
    ],
  },
  {
    title: "Vacuum All in One",
    type: ProjectType.IOT,
    image: VAIOImage,
    sourceCodeURL: "https://github.com/VAIO-CE/VAIO-Code",
    description:
      "Vacuum All in One (VAIO) is an ESP32-based robot featuring autonomous navigation, a vacuum system, and multiple intuitive control methods including a sensor-equipped glove, voice commands via speech recognition, and a standard PS4 controller.",
    tools: [
      {
        name: "C++",
        logo: "devicon:cplusplus",
      },
    ],
  },
  {
    title: "Home Server",
    type: ProjectType.HomeLab,
    image: HomeServerImage,
    description:
      "Dell OptiPlex 7050 running Debian as the Operating System used for my personal custom server. It currently provides services such as Portainer, Jellyfin, CasaOS, Samba Server, SIP Server, and also used as a backup for my files. Connected remotely using Tailscale.",
    tools: [
      {
        name: "Linux",
        logo: "devicon:linux",
      },
    ],
  },
];
