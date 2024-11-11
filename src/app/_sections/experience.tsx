import ExperienceCard from "./_components/experience/ExperienceCard";

export default function Experience() {
  return (
    <section className=" ">
      <h1 className=" w-full mb-16 text-6xl text-center lg:text-7xl  text-primary-accent font-bold">
        Experience
      </h1>
      {/* <div className="w-[64px] h-[64px] bg-white"></div> */}
      <ExperienceCard />
      <div className="flex flex-col h-full gap-10"></div>
    </section>
  );
}
