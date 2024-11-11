"use client";

import senoLogoImage from "@/public/images/Logo-Seno.png";

import { IoMdHome } from "react-icons/io";
import { MdHandyman } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

import NavElement from "./navElement";
import { useState } from "react";
import Image from "next/image";

export default function Navbar({ active }: { active: number }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className=" fixed lg:left-0 z-20  top-0  group/card w-full lg:h-svh  lg:w-[64px] lg:hover:w-[220px]   transition-all duration-300  py-1 px-4 lg:border-r bg-primary-bg border-white border-b  flex items-center justify-between lg:justify-start ">
      <Image
        src={senoLogoImage}
        alt="Logo"
        className="static w-[80px] h-[80px] lg:w-full lg:h-fit  lg:absolute lg:top-0 lg:left-1/2 lg:-translate-x-1/2"
      />

      <div
        className={` ${
          isOpen ? "opacity-100 h-[240px] md:h-[260px]" : "opacity-0 h-0"
        } flex absolute flex-col  top-[100%] left-0 lg:h-fit  pt-2 gap-5 transition-all duration-500 lg:opacity-100  bg-primary-bg border-b border-white w-full pl-4 pb-4 lg:pl-0 lg:pb-0 lg:border-b-0 lg:gap-8 lg:bg-transparent lg:static   `}
      >
        <NavElement
          active={active === 0}
          icon={IoMdHome}
          text="Home"
          link_section="#home"
        />
        <NavElement
          active={active === 1}
          icon={MdHandyman}
          text="Skill"
          link_section="#skill"
        />
        <NavElement
          active={active === 2}
          icon={FaCode}
          text="Project"
          link_section="#projects"
        />
        <NavElement
          active={active === 3}
          icon={BsFillBuildingsFill}
          text="Experience"
          link_section="#experience"
        />
        <NavElement
          active={active === 4}
          icon={MdContacts}
          text="Contact"
          link_section="#contact"
        />
      </div>
      {isOpen ? (
        <ImCross
          onClick={handleNavButton}
          size={24}
          className="lg:hidden cursor-pointer"
        />
      ) : (
        <GiHamburgerMenu
          onClick={handleNavButton}
          size={24}
          className="lg:hidden cursor-pointer"
        />
      )}
    </nav>
  );
}
