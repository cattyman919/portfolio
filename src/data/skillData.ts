import FlutterLogo from "@assets/skills/icons8-flutter.svg";
import AndroidStudiLogo from "@assets/skills/icons8-android-studio.svg";
import CssLogo from "@assets/skills/icons8-css.svg";
import CLogo from "@assets/skills/icons8-c.svg";
import ExpressLogo from "@assets/skills/icons8-express-js.svg";
import FigmaLogo from "@assets/skills/icons8-figma.svg";
import HtmlLogo from "@assets/skills/icons8-html.svg";
import JavascriptLogo from "@assets/skills/icons8-javascript.svg";
import NestJsLogo from "@assets/skills/icons8-nestjs.svg";
import NextJsLogo from "@assets/skills/icons8-nextjs.svg";
import NodeJsLogo from "@assets/skills/icons8-nodejs.svg";
import ReactLogo from "@assets/skills/icons8-react.svg";
import Esp32Logo from "@assets/skills/1666364456Esp32_devkitc_v4 rotated-cropped (1).svg";
import ComputerNetworksLogo from "@assets/skills/reshot-icon-computer-network-HUALQ4PR8J.svg";
import AwsLogo from "@assets/skills/icons8-aws.svg";
import PythonLogo from "@assets/skills/icons8-python.svg";
import AiLogo from "@assets/skills/reshot-icon-artificial-intelligence-J42YA8NQ6T.svg";
import DataScienceLogo from "@assets/skills/reshot-icon-data-storage-94X8DWLHMC.svg";
import ElectronicsLogo from "@assets/skills/reshot-icon-voltmeter-GXLPQBKY5T.svg";

// Dev Icons
import JavaLogo from "@assets/skills/dev_icons/java.svg";
import DockerLogo from "@assets/skills/dev_icons/docker.svg";
import LinuxLogo from "@assets/skills/dev_icons/linux.svg";
import RustLogo from "@assets/skills/dev_icons/rust.svg";
import PosgreSQLLogo from "@assets/skills/dev_icons/postgreSQL.svg";
import GraphQLLogo from "@assets/skills/dev_icons/graphQL.svg";
import TypescriptLogo from "@assets/skills/dev_icons/typescript.svg";

import type { SkillCardProp } from "../types/skill";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import WebsiteIcon from "@assets/skills/skill_line/website-icon.svg";
import MobileIcon from "@assets/skills/skill_line/mobile-icon.svg";
import UiuxIcon from "@assets/skills/skill_line/uiux-icon.svg";
import BackendIcon from "@assets/skills/skill_line/backend-icon.svg";
import IotIcon from "@assets/skills/skill_line/iot-icon.svg";
import MiscIcon from "@assets/skills/skill_line/misc-icon.svg";
import ProgrammingIcon from "@assets/skills/skill_line/programming-icon.svg";

export type SkillCategory = {
  title: string;
  icon: AstroComponentFactory;
  data: SkillCardProp[];
};

export const SkillData: SkillCategory[] = [
  {
    title: "Mobile",
    icon: MobileIcon,
    data: [
      {
        logo: FlutterLogo,
        title: "Flutter",
        rating: 3,
      },
      {
        logo: AndroidStudiLogo,
        title: "Android Studio",
        rating: 2,
      },
    ],
  },
  {
    title: "Website",
    icon: WebsiteIcon,
    data: [
      {
        logo: ReactLogo,
        title: "React",
        rating: 3,
      },
      {
        logo: NextJsLogo,
        title: "NextJS",
        rating: 3,
      },

      {
        logo: HtmlLogo,
        title: "HTML",
        rating: 4,
      },
      {
        logo: CssLogo,
        title: "CSS",
        rating: 4,
      },
      {
        logo: JavascriptLogo,
        title: "Javascript",
        rating: 4,
      },
      {
        logo: TypescriptLogo,
        title: "Typescript",
        rating: 3,
      },
    ],
  },
  {
    title: "UI/UX",
    icon: UiuxIcon,
    data: [
      {
        logo: FigmaLogo,
        title: "Figma",
        rating: 2,
      },
    ],
  },
  {
    title: "Backend",
    icon: BackendIcon,
    data: [
      {
        logo: NodeJsLogo,
        title: "NodeJS",
        rating: 3,
      },
      {
        logo: ExpressLogo,
        title: "ExpressJS",
        rating: 3,
      },
      {
        logo: NestJsLogo,
        title: "NestJS",
        rating: 3,
      },
      {
        logo: PosgreSQLLogo,
        title: "PostgreSQL",
        rating: 3,
      },
      {
        logo: GraphQLLogo,
        title: "GraphQL",
        rating: 2,
      },
    ],
  },
  {
    title: "IoT",
    icon: IotIcon,
    data: [
      {
        logo: Esp32Logo,
        title: "ESP32",
        rating: 4,
      },
      {
        logo: ElectronicsLogo,
        title: "Electronics",
        rating: 3,
      },
    ],
  },
  {
    title: "Programming Languages",
    icon: ProgrammingIcon,
    data: [
      {
        logo: CLogo,
        title: "C / C++",
        rating: 4,
      },
      {
        logo: JavaLogo,
        title: "Java",
        rating: 3,
      },
      {
        logo: PythonLogo,
        title: "Python",
        rating: 3,
      },
      {
        logo: RustLogo,
        title: "Rust",
        rating: 3,
      },
    ],
  },
  {
    title: "Misc",
    icon: MiscIcon,
    data: [
      {
        logo: DockerLogo,
        title: "Docker",
        rating: 3,
      },

      {
        logo: LinuxLogo,
        title: "Linux",
        rating: 4,
      },
      {
        logo: ComputerNetworksLogo,
        title: "Networks",
        rating: 4,
      },
      {
        logo: AwsLogo,
        title: "AWS",
        rating: 3,
      },
      {
        logo: DataScienceLogo,
        title: "Data Science",
        rating: 2,
      },
      {
        logo: AiLogo,
        title: "ML / AI",
        rating: 2,
      },
    ],
  },
];
