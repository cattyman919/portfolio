"use client";
import Image from "next/image";
import SenoImage from "@/public/images/seno.png";
import { useTypewriter } from "./_components/hooks/typewriter";
import { forwardRef, LegacyRef, useRef } from "react";

const DiplayText = () => (
  <span>
    {useTypewriter(
      [
        "Software Developer",
        "Computer Networks",
        "System Design",
        "Tech Enthusiast",
        "Computer Engineer",
      ],
      50,
      1000
    )}
  </span>
);

const Home = forwardRef(function Home(props, ref: LegacyRef<HTMLElement>) {
  // const diplayText = useTypewriter(
  //   [
  //     "Software Developer",
  //     "Computer Networks",
  //     "System Design",
  //     "Tech Enthusiast",
  //     "Computer Engineer",
  //   ],
  //   50,
  //   1000
  // );
  // const counter = useRef(0);
  // counter.current++;
  // console.log("Home Rendered : " + counter.current);
  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col gap-5 lg:gap-0 lg:flex-row l items-center justify-start lg:justify-between h-dvh"
    >
      <div className=" flex items-center lg:items-start flex-col gap-4 lg:gap-8 order-last lg:order-first">
        <div className="flex w-fit flex-col gap-6">
          <div className=" animate-fade-right text-6xl text-center lg:text-start lg:text-7xl xl:text-8xl text-primary-accent font-bold">
            <h1>Seno</h1>
            <h1>Pamungkas</h1>
          </div>
          <h4 className="text-[#3CFF00] animate-fade-left animate-delay-100 font-bold text-center lg:text-start text-3xl">
            <span>{"< "}</span>
            <span className="  blink">
              <DiplayText />
            </span>
            <span className="relative before:absolute before:inset-0 before:w-[0.125em] before:bg-[#3CFF00] animate-caret"></span>
            <span className="tracking-wider">{" />"}</span>
          </h4>
        </div>
        <p className="text-justify text-lg/10 animate-flip-up animate-delay-300  w-[90%]  xl:text-xl/[50px]  ">
          Hello! I'm an avid software engineer with a zest for game development,
          front-end, back-end, AI, and cloud technologies. Passionate about
          exploring new tech frontiers, I blend creativity with technical skill
          in every project, pushing the boundaries of software innovation
        </p>
      </div>
      <div className="relative animate-jump-in animate-once animate-delay-500 animate-normal animate-fill-forwards  hover:scale-110 transition-transform  rounded-b-full overflow-hidden shrink-0 w-[300px]   lg:w-[480px] xl:w-[600px] aspect-[1/1] ">
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-full object-contain"
          src={SenoImage}
          alt="Seno Pamungkas"
        />
        <div className="absolute  w-[90%]  bottom-0 right-1/2 translate-x-1/2 aspect-square bg-gradient-to-b from-[#1E2021] to-[#005F87]   rounded-full" />
      </div>
    </section>
  );
});

export default Home;
