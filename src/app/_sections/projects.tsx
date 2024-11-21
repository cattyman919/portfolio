import { forwardRef, LegacyRef, useEffect, useState } from "react";
import ProjectCard from "./_components/project/projectCard";
import { ProjectData } from "./_data/projectData";
import ProjectSkeletonCard from "./_components/project/projectSkeletonCard";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

let observer: IntersectionObserver;

const BeforefadeUpAnimation: string[] = "translate-y-20 opacity-0".split(" ");
const fadeUpAnimation: string[] = "translate-y-0 opacity-100".split(" ");

const Projects = forwardRef(function Projects(
  props,
  ref: LegacyRef<HTMLElement>
) {
  const [loading, setLoading] = useState<boolean>(true);
  const callbackFunction: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((el) => {
      BeforefadeUpAnimation.forEach((className) => {
        el.target.classList.toggle(className, !el.isIntersecting);
      });

      fadeUpAnimation.forEach((className) => {
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
    <section ref={ref} id="projects" className="w-full overflow-hidden">
      <h1 className=" w-full mb-12 text-6xl pt-4 text-center lg:text-7xl  text-primary-accent font-bold animate-bounce">
        Projects
      </h1>

      <div className="grid grid-cols-1 px-[10%] gap-8 py-4  md:grid-cols-2 lg:px-0 lg:grid-cols-3 lg:gap-10">
        {loading
          ? Array.from({ length: ProjectData.length }).map((_, index) => (
              <ProjectSkeletonCard key={index} />
            ))
          : ProjectData.map((project) => (
              <ProjectCard
                ref={(element) => {
                  if (element) observer.observe(element);
                }}
                key={project.title}
                {...project}
              />
            ))}
      </div>
    </section>
  );
});

export default Projects;
