import { IconType } from "react-icons";
import { createContext } from "react";

export const LevelContext = createContext(0);

export type NavElementProps = {
  isActive?: boolean;
  icon: IconType;
  title: string;
  scroll_to: HTMLElement | null;
};

export default function NavElement({
  icon,
  title,
  scroll_to = null,
  isActive = false,
}: NavElementProps) {
  return (
    <button
      onClick={() => {
        scroll_to?.scrollIntoView({
          behavior: "smooth",
        });
      }}
      className={`flex group/item transition-transform gap-2 origin-left ${
        isActive ? "text-primary-accent" : "text-white"
      } hover:scale-110  hover:text-primary-accent w-full items-center cursor-pointer`}
    >
      <div
        className={`p-1 ${
          isActive ? "bg-primary-accent" : "bg-white"
        } visible group-hover/item:bg-primary-accent rounded-full`}
      >
        {icon({
          color: "#000000",
          className: `sm:w-[16px] sm:h-[16px] md:w-[24px] md:h-[24px] ${
            isActive ? "fill-white" : "fill-black"
          } group-hover/item:fill-white`,
        })}
      </div>
      <p className="  font-bold text-lg md:text-xl  lg:text-2xl lg:invisible lg:opacity-0 lg:group-hover/card:visible lg:group-hover/card:opacity-100 transition-all  lg:w-0 group-hover:w-fit">
        {title}
      </p>
    </button>
  );
}
