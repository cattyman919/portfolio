import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Observer } from "tailwindcss-intersect";

import Image from "next/image";
import { SkillCardProps } from "../../types/skillType";
import { useEffect } from "react";

export default function SkillCard({ logo, rating, title }: SkillCardProps) {
  useEffect(() => {
    Observer.start();
  }, []);
  return (
    <div className=" intersect:animate-fade-up intersect flex flex-col gap-3 bg-[#FEF9F2] text-black p-4 items-center justify-center rounded-xl hover:-translate-y-5 transition-transform">
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
