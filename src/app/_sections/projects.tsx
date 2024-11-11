import ProjectCard from "./_components/project/projectCard";
import { ProjectData } from "./_data/projectData";

export default function Projects() {
  return (
    <section className="w-full ">
      <h1 className=" w-full mb-16 text-6xl text-center lg:text-7xl  text-primary-accent font-bold">
        Projects
      </h1>
      <div className="grid grid-cols-1 px-10  md:grid-cols-2 lg:px-0 lg:grid-cols-3 gap-6">
        {ProjectData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
