import { forwardRef, LegacyRef, useEffect, useRef } from "react";
import ExperienceCard from "./_components/experience/experienceCard";
import { ExperienceData } from "./_data/experienceData";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const fadeRightAnimation: string[] = "translate-x-0 opacity-100".split(" ");
const BeforefadeRightAnimation: string[] = "translate-x-20 opacity-0".split(
  " "
);

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
      BeforefadeRightAnimation.forEach((className) => {
        el.target.classList.toggle(className, !el.isIntersecting);
      });

      fadeRightAnimation.forEach((className) => {
        el.target.classList.toggle(className, el.isIntersecting);
      });

      if (el.isIntersecting) observer.unobserve(el.target);
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
    <section id="experience" ref={ref} className="w-full overflow-x-hidden">
      <h1 className=" w-full pt-3 mb-12 text-5xl text-center lg:text-7xl  text-primary-accent font-bold animate-bounce animate-infinite animate-alternate">
        Experiences
      </h1>
      <div className="flex  overflow-hidden flex-col items-center justify-center text-black  h-full gap-6">
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
