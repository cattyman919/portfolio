import { forwardRef, LegacyRef, useEffect, useState } from "react";
import ExperienceCard from "./_components/experience/experienceCard";
import { ExperienceData } from "./_data/experienceData";
import ExperienceSkeletonCard from "./_components/experience/experienceSkeletonCard";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

let observer: IntersectionObserver;

const fadeRightAnimation: string[] = "translate-x-0 opacity-100".split(" ");
const BeforefadeRightAnimation: string[] = "translate-x-20 opacity-0".split(
  " "
);

const Experience = forwardRef(function Experience(
  props,
  ref: LegacyRef<HTMLElement>
) {
  const [loading, setLoading] = useState<boolean>(true);

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
    setLoading(false);
    observer = new IntersectionObserver(callbackFunction, options);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="w-full overflow-x-hidden">
      <h1 className=" w-full pt-3 mb-12 text-5xl text-center lg:text-7xl  text-primary-accent font-bold animate-bounce animate-infinite animate-alternate">
        Work Experience
      </h1>
      <div className="flex  overflow-hidden flex-col items-center py-3 justify-center text-black  h-full gap-6">
        {loading
          ? Array.from({ length: ExperienceData.length }).map((_, index) => (
              <ExperienceSkeletonCard key={index} />
            ))
          : ExperienceData.map((item, index) => (
              <ExperienceCard
                ref={(element) => {
                  if (element) observer.observe(element);
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
