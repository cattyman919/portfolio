import { IconType } from "react-icons";
import { SkillCardProps } from "../skills";
import SkillCard from "./skillCard";

type Props = {
  icon: IconType;
  title: string;
  data?: SkillCardProps[];
};

export default function SkillLine({ icon, title, data }: Props) {
  return (
    <div className=" flex items-center  gap-6">
      <div className="flex min-w-[150px] flex-col items-center gap-4">
        {icon({ size: 64, color: "#00D4FF" })}
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <div className="flex flex-wrap gap-6">
        {data?.map((item, index) => (
          <SkillCard
            key={index}
            logo={item.logo}
            title={item.title}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
