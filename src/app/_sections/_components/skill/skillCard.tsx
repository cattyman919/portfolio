import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

import Image from "next/image";
import { SkillCardProps } from "../../_types/skillType";
import { forwardRef, LegacyRef } from "react";

const SkillCard = forwardRef(function SkillCard(
  { logo, rating, title }: SkillCardProps,
  ref: LegacyRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      className="  transition-all duration-500 hover:shadow-xl-seno hover:shadow-primary-accent	flex flex-col gap-3 bg-[#FEF9F2] text-black p-4 items-center justify-center rounded-xl hover:duration-150 hover:-translate-y-5 "
    >
      <Image
        width={64}
        height={64}
        src={logo}
        className=""
        alt="logo"
      />
      <div className="flex gap-1 hover:duration-150 ">
        {Array.from({ length: 5 }, (_, index) => {
          if (index < rating) {
            return (
              <FaStar
                size={24}
                fill="#00D4FF"
                color="#000000"
                key={index}
                className="effect-shine"
              />
            );
          }
          return <CiStar size={24} key={index} />;
        })}
      </div>
      <p className="text-xl text-center font-extrabold ">{title}</p>
    </div>
  );
});

export default SkillCard;
