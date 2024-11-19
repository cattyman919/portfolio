import Image from "next/image";
import SenoImage from "@/public/images/seno.png";
import UiSenoImage from "@/public/images/UI Seno.png";
import CoolSenoImage from "@/public/images/Cool Seno.png";
import JasHitamSenoImage from "@/public/images/Jas Hitam Seno 2.png";

import { useTypewriter } from "./_components/hooks/typewriter";
import { forwardRef, LegacyRef, memo, useEffect, useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { SiReaddotcv } from "react-icons/si";
import { GrArticle } from "react-icons/gr";

const DiplayText = () => {
  const text = useTypewriter(
    [
      "Software Developer",
      "Computer Networks",
      "System Design",
      "Tech Enthusiast",
      "Computer Engineer",
    ],
    50,
    1000
  );
  return <>{text}</>;
};

const MemoizedSenoImage = memo(function MemoizedSenoImage() {
  const images = [SenoImage, UiSenoImage, CoolSenoImage, JasHitamSenoImage];
  const imageRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    let index = 0;
    const intervalImages = setInterval(() => {
      imageRefs.current[index].classList.remove("animate-seno_images");
      void imageRefs.current[index].offsetWidth;
      imageRefs.current[index].classList.add("animate-seno_images");
      index = (index + 1) % images.length;
    }, 2000);

    return () => {
      clearInterval(intervalImages);
    };
  }, []);

  return (
    <div className="relative animate-jump-in animate-once animate-delay-500 animate-normal animate-fill-forwards  hover:scale-110 transition-transform  rounded-b-full overflow-hidden shrink-0 w-[300px]   lg:w-[480px] xl:w-[600px] aspect-[1/1] ">
      {images.map((image, index) => (
        <Image
          key={index}
          className={`absolute left-1/2 top-1/2 w-[500px] opacity-0  z-10 h-full object-contain  `}
          ref={(element) => {
            imageRefs.current.push(element!);
          }}
          src={image}
          loading="eager"
          width={500}
          alt="Seno Pamungkas"
        />
      ))}
      <div className="absolute  w-[90%]  bottom-0 right-1/2 translate-x-1/2 aspect-square bg-gradient-to-b from-[#1E2021] to-[#005F87]   rounded-full" />
    </div>
  );
});

const Home = forwardRef(function Home(props, ref: LegacyRef<HTMLElement>) {
  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col gap-5 lg:gap-0 lg:flex-row l items-center justify-start lg:justify-between h-full lg:h-dvh"
    >
      <div className=" flex items-center lg:items-start flex-col gap-4 lg:gap-8 order-last lg:order-first">
        <div className="flex w-fit flex-col gap-6">
          <div className=" animate-fade-right text-6xl text-center lg:text-start lg:text-7xl xl:text-8xl text-primary-accent font-bold">
            <h1>Seno</h1>
            <h1>Pamungkas</h1>
          </div>
          <h4 className="text-[#3CFF00] animate-fade-left animate-delay-100 font-bold text-center lg:text-start text-xl md:text-2xl  lg:text-3xl">
            <span>{"< "}</span>
            <span className="  blink">
              <DiplayText />
            </span>
            <span className="relative before:absolute before:inset-0 before:w-[0.125em] before:bg-[#3CFF00] animate-caret"></span>
            <span className="tracking-wider">{" />"}</span>
          </h4>
        </div>
        <p className="text-justify text-lg/10 animate-flip-up animate-delay-300  w-[90%]  xl:text-xl/[50px]  ">
          Hello! Im an avid software engineer with a zest for front-end,
          back-end, AI, and cloud technologies. Passionate about exploring new
          tech frontiers, I blend creativity with technical skill in every
          project, pushing the boundaries of software innovation
        </p>
        <div className="flex flex-col gap-4 lg:flex-row items-center lg:gap-10 h-full text-2xl">
          <p className="text-primary-accent font-bold animate-fade-right">
            Check out my Resume & Blog
          </p>
          <div className="grid grid-cols-3 rotate-90 lg:rotate-0 w-[30px]  ">
            <IoIosArrowForward
              size={32}
              className="animate-arrow animate-delay-[2s]"
            />
            <IoIosArrowForward
              size={32}
              className="animate-arrow animate-delay-[1s] "
            />
            <IoIosArrowForward size={32} className="animate-arrow " />
          </div>
          <div className="flex gap-6">
            <Link
              href="https://seno-portfolio.s3.ap-southeast-1.amazonaws.com/Seno+Pamungkas+Rahman+-+CV.pdf"
              target="_blank"
              className=" min-w-[100px] flex flex-col items-center text-center mt-5 lg:mt-0 bg-primary-accent text-white font-bold p-2 rounded-lg hover:scale-110 hover:bg-white hover:border-2 hover:border-primary-accent hover:text-primary-accent transition-all "
            >
              <SiReaddotcv size={32} />
              <p>Resume</p>
            </Link>
            <Link
              href="https://blog.seno-dev.com"
              target="_blank"
              className="min-w-[100px] flex flex-col items-center text-center mt-5 lg:mt-0 bg-primary-accent text-white font-bold p-2 rounded-lg hover:scale-110 hover:bg-white hover:border-2 hover:border-primary-accent hover:text-primary-accent transition-all "
            >
              <GrArticle size={32} />
              <p>Blog</p>
            </Link>
          </div>
        </div>
      </div>
      <MemoizedSenoImage />
    </section>
  );
});

export default Home;
