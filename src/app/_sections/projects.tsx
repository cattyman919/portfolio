import { forwardRef, LegacyRef, useEffect, useRef } from "react";
import ProjectCard from "./_components/project/projectCard";
import { ProjectData } from "./_data/projectData";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const BeforefadeUpAnimation: string[] = "translate-y-20 opacity-0".split(" ");
const fadeUpAnimation: string[] = "translate-y-0 opacity-100".split(" ");

const Projects = forwardRef(function Projects(
  props,
  ref: LegacyRef<HTMLElement>
) {
  const containerRef = useRef<HTMLElement[]>([]);

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
    const observer = new IntersectionObserver(callbackFunction, options);
    containerRef.current.map((element) => {
      console.log(element);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="projects" className="w-full overflow-hidden">
      <h1 className=" w-full mb-12 text-6xl pt-4 text-center lg:text-7xl  text-primary-accent font-bold animate-bounce">
        Projects
      </h1>
      <div className="grid grid-cols-1 px-[10%] gap-8 py-4  md:grid-cols-2 lg:px-0 lg:grid-cols-3 lg:gap-10">
        {ProjectData.map((project) => (
          <ProjectCard
            ref={(element) => {
              if (element) containerRef.current.push(element);
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
