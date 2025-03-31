"use client";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo-client"

const Home = dynamic(() => import("./_sections/home"));
const Skills = dynamic(() => import("./_sections/skills"));
const Projects = dynamic(() => import("./_sections/projects"));
const Experience = dynamic(() => import("./_sections/experience"));
const Contact = dynamic(() => import("./_sections/contacts"), { ssr: false });

import { useEffect, useRef } from "react";
import Navbar, {
  NavigationRef,
} from "@/app/_sections/_components/navbar/navbar";
import dynamic from "next/dynamic";

const sections = [Home, Skills, Projects, Experience, Contact];

const options = {
  root: null,
  rootMargin: "100px",
  threshold: 0.3,
};

export default function FullPage() {
  const navRef = useRef<NavigationRef>(null);
  const containerRef = useRef<HTMLElement[]>([]);

  const callbackFunction: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    const newEntries = entries.filter((element) => element.isIntersecting);

    if (newEntries.length > 0)
      navRef.current!.set_active(newEntries[0].target.getAttribute("id")!);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    containerRef.current.map((element) => {
      observer.observe(element);
    });
    navRef.current?.set_sections(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Navbar ref={navRef} />
      <section className="flex flex-col gap-32 overflow-x-hidden">
        {sections.map((Component, index) => (
          <Component
            key={index}
            ref={(element) => {
              if (element) containerRef.current.push(element);
            }}
          />
        ))}
      </section>
    </ApolloProvider >
  );
}
