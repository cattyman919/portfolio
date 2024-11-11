"use client";
import Home from "./_sections/home";
import Skills from "./_sections/skills";
import Projects from "./_sections/projects";
import Experience from "./_sections/experience";
import Contact from "./_sections/contacts";
import { useElementOnScreen } from "./_sections/_components/hooks/elementOnScreen";
import { LegacyRef, useState, useEffect, useRef } from "react";
import Navbar from "@/app/_sections/_components/navbar/navbar";

export default function FullPage() {
  const [active, setActive] = useState(0);
  const [homeRef, isHomeVisible] = useElementOnScreen({});
  const [skillsRef, isSkillsVisible] = useElementOnScreen({});
  const [projectsRef, isProjectsVisible] = useElementOnScreen({});
  const [experienceRef, isExperienceVisible] = useElementOnScreen({});
  const [contactRef, isContactVisible] = useElementOnScreen({});

  useEffect(() => {
    if (isHomeVisible) setActive(0);
    if (isSkillsVisible) setActive(1);
    if (isProjectsVisible) setActive(2);
    if (isExperienceVisible) setActive(3);
    if (isContactVisible) setActive(4);
  }, [
    isExperienceVisible,
    isContactVisible,
    isHomeVisible,
    isProjectsVisible,
    isSkillsVisible,
  ]);

  return (
    <section className="flex flex-col gap-32">
      <Navbar active={active} />
      <Home ref={homeRef as LegacyRef<HTMLElement>} />
      <Skills ref={skillsRef as LegacyRef<HTMLElement>} />
      <Projects ref={projectsRef as LegacyRef<HTMLElement>} />
      <Experience ref={experienceRef as LegacyRef<HTMLElement>} />
      <Contact ref={contactRef as LegacyRef<HTMLElement>} />
    </section>
  );
}
