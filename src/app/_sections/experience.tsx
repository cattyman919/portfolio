import { forwardRef, LegacyRef } from "react";
import ExperienceCard from "./_components/experience/experienceCard";
import { ExperienceData } from "./_data/experienceData";

const Experience = forwardRef(function Experience(
  props,
  ref: LegacyRef<HTMLElement>
) {
  return (
    <section id="experience" ref={ref}>
      <h1 className=" w-full mb-16 text-6xl text-center lg:text-7xl  text-primary-accent font-bold animate-bounce animate-infinite animate-alternate">
        Experience
      </h1>
      <div className="flex flex-col w-full items-center justify-center text-black  h-full gap-6">
        {ExperienceData.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
});

export default Experience;
