import { IoMdHome } from "react-icons/io";
import { MdHandyman } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  text: string;
};

export default function NavElement({ icon, text }: Props) {
  return (
    <div className="flex group/item transition-transform gap-2 hover:scale-110  hover:text-primary-accent w-full items-center cursor-pointer">
      <div className="p-1 bg-white group-hover/item:bg-primary-accent rounded-full ">
        {icon({
          size: 24,
          color: "#000000",
          className: "group-hover/item:fill-white",
        })}
      </div>
      <p className="  font-bold text-2xl opacity-0 group-hover/card:opacity-100 transition-all  w-0 group-hover:w-fit">
        {text}
      </p>
    </div>
  );
}
