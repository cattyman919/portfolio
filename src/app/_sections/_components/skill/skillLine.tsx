import { IconType } from "react-icons";
import SkillCard from "./skillCard";
import { SkillCardProps } from "../../_types/skillType";
import { useEffect, useRef } from "react";

type SkillLineProps = {
  icon: IconType;

  title: string;
  data?: SkillCardProps[];
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const fadeUpAnimation: string[] = "translate-x-0 opacity-100".split(" ");
const BeforefadeUpAnimation: string[] = "translate-x-20 opacity-0".split(" ");

export default function SkillLine({
  icon,

  title,
  data,
}: SkillLineProps) {
  const containerRef = useRef<HTMLElement[]>([]);

  const callbackFunction: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    entries.forEach((el) => {
      BeforefadeUpAnimation.forEach((className) => {
        el.target.classList.toggle(className, !el.isIntersecting);
      });

      fadeUpAnimation.forEach((className) => {
        el.target.classList.toggle(className, el.isIntersecting);
      });
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    containerRef.current.map((element) => {
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className=" flex flex-col border-b-2 py-6  first:border-t-2 lg:first:border-t-0 lg:py-0  border-white  lg:border-0 lg:flex-row items-center  gap-3">
      <div className="flex min-w-[150px] animate-path flex-col items-center gap-4">
        {icon({
          size: 64,
          color: "#00D4FF",
        })}
        <p className="text-3xl font-bold">{title}</p>
      </div>
      <div className="grid grid-cols-2 overflow-hidden py-5 pr-3 pl-3 sm:grid-cols-3 md:grid-cols-4 place-items-center gap-4 lg:flex lg:flex-wrap ">
        {data?.map((item, index) => (
          <SkillCard
            key={index}
            logo={item.logo}
            title={item.title}
            rating={item.rating}
            ref={(element) => {
              containerRef.current.push(element!);
            }}
          />
        ))}
      </div>
    </div>
  );
}
