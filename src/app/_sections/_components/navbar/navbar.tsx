"use client";

import senoLogoImage from "@/public/images/new_logoSeno.png";

import { IoMdHome } from "react-icons/io";
import { MdHandyman } from "react-icons/md";
import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa6";
import { BsFillBuildingsFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

import NavElement from "./navElement";
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import { ScriptProps } from "next/script";

const dict_section: { [name: string]: number } = {
  home: 0,
  skill: 1,
  projects: 2,
  experience: 3,
  contact: 4,
};

export type NavigationRef = {
  set_active: (section_active: string) => void;
  set_sections: (sections: HTMLElement[]) => void;
};

const NavElementsData: { id: string; icon: IconType; title: string }[] = [
  {
    id: "home",
    icon: IoMdHome,
    title: "Home",
  },
  {
    id: "skill",
    icon: MdHandyman,
    title: "Skill",
  },
  {
    id: "projects",
    icon: FaCode,
    title: "Project",
  },
  {
    id: "experience",
    icon: BsFillBuildingsFill,
    title: "Experience",
  },
  {
    id: "contact",
    icon: MdContacts,
    title: "Contact",
  },
];

const Navbar = forwardRef<NavigationRef, ScriptProps>(function Navbar(
  props,
  ref
) {
  const navElementsRef = useRef<NavigationRef>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useImperativeHandle(ref, () => ({
    set_active: (section_active: string) => {
      navElementsRef.current?.set_active(section_active);
      if (isOpen) setIsOpen(false);
    },
    set_sections: (sections: HTMLElement[]) => {
      navElementsRef.current?.set_sections(sections);
    },
  }));

  const handleNavButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" fixed lg:left-0 z-20  top-0  group/card w-full lg:h-svh  lg:w-[64px] lg:hover:w-[220px]   transition-all duration-300  py-1 px-4 lg:border-r bg-primary-bg border-white border-b  flex items-center justify-between lg:justify-start ">
      <Image
        priority
        src={senoLogoImage}
        alt="Logo"
        className=" static w-[40px]  lg:w-[80%]   lg:absolute lg:top-3 lg:left-1/2 lg:-translate-x-1/2 lg:group-hover/card:-translate-x-[52%]"
      />

      <div
        className={` ${
          isOpen
            ? "opacity-100 h-[240px] md:h-[260px] visible"
            : "invisible opacity-0 h-0"
        } flex absolute flex-col  top-[100%] left-0 lg:h-fit  pt-2 gap-5 transition-all duration-500 lg:opacity-100  bg-primary-bg border-b border-white w-full pl-4 pb-4 lg:pl-0 lg:pb-0 lg:border-b-0 lg:gap-6 lg:bg-transparent lg:static   `}
      >
        <NavElements ref={navElementsRef} />
      </div>

      <div className="hidden absolute bottom-[3%] self-end lg:flex lg:flex-col gap-3 ">
        <Link
          href="https://github.com/cattyman919"
          target="_blank"
          className="flex items-center gap-2 hover:text-primary-accent hover:scale-110 transition-transform origin-left"
        >
          <FaGithub className=" w-[24px]  h-[24px] " />
          <p className="font-bold text-lg lg:invisible lg:opacity-0 lg:group-hover/card:visible lg:group-hover/card:opacity-100 transition-all  lg:w-0 group-hover:w-fit">
            Github
          </p>
        </Link>
        <Link
          href="https://www.linkedin.com/in/seno-pamungkas-rahman-714341192"
          target="_blank"
          className="flex gap-2 hover:text-primary-accent hover:scale-110 transition-transform origin-left"
        >
          <FaLinkedin className="w-[24px] h-[24px] " />
          <p className="  font-bold text-lg lg:invisible lg:opacity-0 lg:group-hover/card:visible lg:group-hover/card:opacity-100 transition-all  lg:w-0 group-hover:w-fit">
            LinkedIn
          </p>
        </Link>
        <Link
          href="https://www.instagram.com/senohebat/"
          target="_blank"
          className="flex gap-2 hover:text-primary-accent hover:scale-110 transition-transform origin-left"
        >
          <FaInstagram className="w-[24px] h-[24px] " />
          <p className="  font-bold text-lg  lg:invisible lg:opacity-0 lg:group-hover/card:visible lg:group-hover/card:opacity-100 transition-all  lg:w-0 group-hover:w-fit">
            Instagram
          </p>
        </Link>
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
});

const NavElements = forwardRef<NavigationRef, ScriptProps>(function NavElements(
  props,
  ref
) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sectionsRef, setSectionsRef] = useState<HTMLElement[]>([]);

  useImperativeHandle(ref, () => ({
    set_active: (section_active: string) => {
      setActiveIndex(dict_section[section_active]);
    },

    set_sections: (sections: HTMLElement[]) => {
      setSectionsRef(sections);
    },
  }));

  return (
    <>
      {NavElementsData.map((element, index) => (
        <NavElement
          key={element.title}
          isActive={index === activeIndex}
          scroll_to={sectionsRef.find((el) => el.id === element.id)!}
          {...element}
        />
      ))}
    </>
  );
});
export default Navbar;
