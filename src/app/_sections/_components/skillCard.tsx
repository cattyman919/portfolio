import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import { SkillCardProps } from "../skills";
import Image from "next/image";

export default function SkillCard({ logo, rating, title }: SkillCardProps) {
  return (
    <div className=" flex flex-col gap-3 bg-[#FEF9F2] text-black p-4 items-center justify-center rounded-xl">
      <Image
        src={logo}
        className="object-contain w-[64px] h-[64px]"
        alt="logo"
      />
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, index) => {
          if (index < rating) {
            return (
              <FaStar size={24} fill="#00D4FF" color="#000000" key={index} />
            );
          }
          return <CiStar size={24} key={index} />;
        })}
      </div>
      <p className="text-xl text-center font-extrabold">{title}</p>
    </div>
  );
}
