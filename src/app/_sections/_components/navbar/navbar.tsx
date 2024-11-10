"use client";

import { IoMdHome } from "react-icons/io";
import { MdHandyman } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

import NavElement from "./navElement";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" fixed lg:left-0 z-20  top-0  group/card w-full lg:h-svh  lg:w-[64px] lg:hover:w-[220px]   transition-all duration-300  p-4 lg:border-r bg-primary-bg border-white border-b  flex items-center justify-between lg:justify-start ">
      <div className="static lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2">
        Logo
      </div>
      <div
        className={` ${
          isOpen ? "opacity-100 h-[240px] md:h-[260px]" : "opacity-0 h-0"
        } flex absolute flex-col  top-[100%] left-0 lg:h-fit  pt-2 gap-5 transition-all duration-500 lg:opacity-100  bg-primary-bg border-b border-white w-full pl-4 pb-4 lg:pl-0 lg:pb-0 lg:border-b-0 lg:gap-8 lg:bg-transparent lg:static   `}
      >
        <NavElement icon={IoMdHome} text="Home" />
        <NavElement icon={MdHandyman} text="Skills" />
        <NavElement icon={FaCode} text="Projects" />
        <NavElement icon={BsFillBuildingsFill} text="Experience" />
        <NavElement icon={MdContacts} text="Contacts" />
      </div>
      <GiHamburgerMenu
        onClick={handleNavButton}
        size={24}
        className="lg:hidden cursor-pointer"
      />
    </nav>
  );
}
