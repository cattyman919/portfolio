import { IconType } from "react-icons";
import SkillCard from "./skillCard";
import { SkillCardProps } from "../../types/skillType";

type Props = {
  icon: IconType;
  title: string;
  data?: SkillCardProps[];
};

export default function SkillLine({ icon, title, data }: Props) {
  return (
    <div className=" flex flex-col border-b-2 py-6 last:border-b-0 first:border-t-2 lg:first:border-t-0 lg:py-0  border-white lg:border-0 lg:flex-row items-center  gap-6">
      <div className="flex min-w-[150px] flex-col items-center gap-4">
        {icon({ size: 64, color: "#00D4FF" })}
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-4 lg:flex lg:flex-wrap lg:gap-6">
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
