import { FaMobileAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";

import SkillLine from "./_components/skillLine";
import {
  MobileSkills,
  WebsiteSkills,
  UIUXSkills,
  BackendSkills,
  IoTSkills,
  MiscSkills,
} from "./_components/skillData";

export type SkillCardProps = {
  logo: string;
  title: string;
  rating: number;
};

export default function Skills() {
  return (
    <section className="w-full ">
      <h1 className=" w-full mb-10 text-4xl text-center lg:text-7xl  text-primary-accent font-bold">
        Skills
      </h1>
      <div className="flex flex-col justify-center gap-12 ">
        <SkillLine title="Mobile" icon={FaMobileAlt} data={MobileSkills} />
        <SkillLine title="Website" icon={CgWebsite} data={WebsiteSkills} />
        <SkillLine
          title="UI/UX"
          icon={MdOutlineDesignServices}
          data={UIUXSkills}
        />
        <SkillLine title="Backend" icon={FaServer} data={BackendSkills} />
        <SkillLine title="IoT" icon={FaMicrochip} data={IoTSkills} />
        <SkillLine
          title="Misc"
          icon={MdMiscellaneousServices}
          data={MiscSkills}
        />
      </div>
    </section>
  );
}