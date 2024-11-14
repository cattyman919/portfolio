import { forwardRef, LegacyRef, useEffect, useRef } from "react";
import ExperienceCard from "./_components/experience/experienceCard";
import { ExperienceData } from "./_data/experienceData";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const fadeRightAnimation: string[] = "translate-x-0 opacity-100".split(" ");

const Experience = forwardRef(function Experience(
  props,
  ref: LegacyRef<HTMLElement>
) {
  const containerRef = useRef<HTMLElement[]>([]);

  const callbackFunction: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((el) => {
      if (el.isIntersecting) {
        el.target.classList.remove("translate-x-20");

        fadeRightAnimation.forEach((className) => {
          el.target.classList.add(className);
        });

        observer.unobserve(el.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    containerRef.current.map((element) => {
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref}>
      <h1 className=" w-full mb-16 text-6xl text-center lg:text-7xl  text-primary-accent font-bold animate-bounce animate-infinite animate-alternate">
        Experiences
      </h1>
      <div className="flex flex-col w-full items-center justify-center text-black  h-full gap-6">
        {ExperienceData.map((item, index) => (
          <ExperienceCard
            ref={(element) => {
              containerRef.current.push(element!);
            }}
            key={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
});

export default Experience;
