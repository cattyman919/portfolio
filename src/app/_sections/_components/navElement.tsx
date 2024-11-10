import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
};

export default function NavElement({ icon, text }: Props) {
  return (
    <div className="  flex group/item transition-transform gap-2 origin-left hover:scale-110  hover:text-primary-accent w-full items-center cursor-pointer">
      <div className="p-1 bg-white group-hover/item:bg-primary-accent rounded-full ">
        {icon({
          color: "#000000",
          className:
            "sm:w-[16px] sm:h-[16px] md:w-[24px] md:h-[24px] group-hover/item:fill-white",
        })}
      </div>
      <p className="  font-bold text-lg md:text-xl lg:text-2xl lg:opacity-0 lg:group-hover/card:opacity-100 transition-all  lg:w-0 group-hover:w-fit">
        {text}
      </p>
    </div>
  );
}
