import { IoMdHome } from "react-icons/io";
import { MdHandyman } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import NavElement from "./navElement";

export default function Navbar() {
  return (
    <div className="fixed gap-8 group/card h-svh left-0 w-[64px] hover:w-[220px]   transition-all duration-300  px-4 border-r bg-primary-bg border-white flex-col  flex items-start justify-center ">
      <NavElement icon={IoMdHome} text="Home" />
      <NavElement icon={MdHandyman} text="Skills" />
      <NavElement icon={FaCode} text="Projects" />
      <NavElement icon={BsFillBuildingsFill} text="Experience" />
      <NavElement icon={MdContacts} text="Contacts" />
    </div>
  );
}
