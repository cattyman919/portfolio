import ExperienceCard from "./_components/experience/experienceCard";
import { ExperienceData } from "./_data/experienceData";

export default function Experience() {
  return (
    <section className=" ">
      <h1 className=" w-full mb-16 text-6xl text-center lg:text-7xl  text-primary-accent font-bold">
        Experience
      </h1>
      {/* <div className="w-[64px] h-[64px] bg-white"></div> */}

      <div className="flex flex-col w-full items-center justify-center text-black  h-full gap-6">
        {ExperienceData.map((item, index) => (
          <ExperienceCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
