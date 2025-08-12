import flutterLogo from "@assets/skills/icons8-flutter.svg";
import androidStudiLogo from "@assets/skills/icons8-android-studio.svg";
import cssLogo from "@assets/skills/icons8-css.svg";
import cLogo from "@assets/skills/icons8-c.svg";
import expressLogo from "@assets/skills/icons8-express-js.svg";
import figmaLogo from "@assets/skills/icons8-figma.svg";
import htmlLogo from "@assets/skills/icons8-html.svg";
import javascriptLogo from "@assets/skills/icons8-javascript.svg";
import nestJsLogo from "@assets/skills/icons8-nestjs.svg";
import nextJsLogo from "@assets/skills/icons8-nextjs.svg";
import nodeJsLogo from "@assets/skills/icons8-nodejs.svg";
import reactLogo from "@assets/skills/icons8-react.svg";
import esp32Logo from "@assets/skills/1666364456Esp32_devkitc_v4 rotated-cropped (1).svg";
import computerNetworksLogo from "@assets/skills/reshot-icon-computer-network-HUALQ4PR8J.svg";
import awsLogo from "@assets/skills/icons8-aws.svg";
import pythonLogo from "@assets/skills/icons8-python.svg";
import aiLogo from "@assets/skills/reshot-icon-artificial-intelligence-J42YA8NQ6T.svg";
import dataScienceLogo from "@assets/skills/reshot-icon-data-storage-94X8DWLHMC.svg";
import electronicsLogo from "@assets/skills/reshot-icon-voltmeter-GXLPQBKY5T.svg";

import type { SkillCardProp } from "../types/skill";
import mobileIcon from "@assets/skills/icons8-flutter.svg";
import websiteIcon from "@assets/skills/icons8-react.svg";
import uiuxIcon from "@assets/skills/icons8-figma.svg";
import backendIcon from "@assets/skills/icons8-nodejs.svg";
import iotIcon from "@assets/skills/1666364456Esp32_devkitc_v4 rotated-cropped (1).svg";
import miscIcon from "@assets/skills/reshot-icon-computer-network-HUALQ4PR8J.svg";

export type SkillCategory = {
  title: string;
  icon: ImageMetadata;
  data: SkillCardProp[];
};


export const SkillData: SkillCategory[] = [
  {
    title: "Mobile",
    icon: mobileIcon,
    data: [
      {
        logo: flutterLogo,
        title: "Flutter",
        rating: 3,
      },
      {
        logo: androidStudiLogo,
        title: "Android Studio",
        rating: 2,
      },
    ],
  },
  {
    title: "Website",
    icon: websiteIcon,
    data: [
      {
        logo: reactLogo,
        title: "React",
        rating: 3,
      },
      {
        logo: nextJsLogo,
        title: "NextJS",
        rating: 3,
      },

      {
        logo: htmlLogo,
        title: "HTML",
        rating: 4,
      },
      {
        logo: cssLogo,
        title: "CSS",
        rating: 4,
      },
      {
        logo: javascriptLogo,
        title: "Javascript",
        rating: 4,
      },
      {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        title: "Typescript",
        rating: 3,
      },
    ],
  },
  {
    title: "UI/UX",
    icon: uiuxIcon,
    data: [
      {
        logo: figmaLogo,
        title: "Figma",
        rating: 2,
      },
    ],
  },
  {
    title: "Backend",
    icon: backendIcon,
    data: [
      {
        logo: nodeJsLogo,
        title: "NodeJS",
        rating: 3,
      },
      {
        logo: expressLogo,
        title: "ExpressJS",
        rating: 3,
      },
      {
        logo: nestJsLogo,
        title: "NestJS",
        rating: 3,
      },
      {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
        title: "SQL",
        rating: 3,
      },
      {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
        title: "GrapQL",
        rating: 2,
      },
    ],
  },
  {
    title: "IoT",
    icon: iotIcon,
    data: [
      {
        logo: cLogo,
        title: "C / C++",
        rating: 4,
      },
      {
        logo: esp32Logo,
        title: "ESP32",
        rating: 4,
      },
      {
        logo: electronicsLogo,
        title: "Electronics",
        rating: 3,
      },
    ],
  },
  {
    title: "Misc",
    icon: miscIcon,
    data: [
      {
        logo: pythonLogo,
        title: "Python",
        rating: 3,
      },
      {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
        title: "Java",
        rating: 3,
      },
      {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
        title: "Docker",
        rating: 3,
      },
      {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
        title: "Linux",
        rating: 4,
      },
      {
        logo: computerNetworksLogo,
        title: "Networks",
        rating: 4,
      },
      {
        logo: awsLogo,
        title: "AWS",
        rating: 3,
      },
      {
        logo: dataScienceLogo,
        title: "Data Science",
        rating: 2,
      },
      {
        logo: aiLogo,
        title: "ML / AI",
        rating: 2,
      },
    ],
  },
];

