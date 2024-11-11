import Link from "next/link";
import { IconType } from "react-icons";

type Props = {
  active: boolean;
  icon: IconType;
  text: string;
  link_section: string;
};

export default function NavElement({
  icon,
  text,
  active,
  link_section = "#",
}: Props) {
  return (
    <Link
      href={link_section}
      className={`flex group/item transition-transform gap-2 origin-left ${
        active ? "text-primary-accent" : "text-white"
      } hover:scale-110  hover:text-primary-accent w-full items-center cursor-pointer`}
    >
      <div
        className={`p-1 ${
          active ? "bg-primary-accent" : "bg-white"
        }  group-hover/item:bg-primary-accent rounded-full`}
      >
        {icon({
          color: "#000000",
          className: `sm:w-[16px] sm:h-[16px] md:w-[24px] md:h-[24px] ${
            active ? "fill-white" : "fill-black"
          } group-hover/item:fill-white`,
        })}
      </div>
      <p className="  font-bold text-lg md:text-xl  lg:text-2xl lg:invisible lg:opacity-0 lg:group-hover/card:visible lg:group-hover/card:opacity-100 transition-all  lg:w-0 group-hover:w-fit">
        {text}
      </p>
    </Link>
  );
}
