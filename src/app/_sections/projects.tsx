import { forwardRef, LegacyRef, useEffect, useRef } from "react";
import ProjectCard from "./_components/project/projectCard";
import { ProjectData } from "./_data/projectData";

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

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
      if (el.isIntersecting) {
        el.target.classList.remove("translate-y-20");

        fadeUpAnimation.forEach((className) => {
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
    <section ref={ref} id="projects" className="w-full overflow-x-hidden">
      <h1 className=" w-full mb-12 text-6xl pt-4 text-center lg:text-7xl  text-primary-accent font-bold animate-bounce">
        Projects
      </h1>
      <div className="grid grid-cols-1 px-5  md:grid-cols-2 lg:px-0 lg:grid-cols-3 gap-6">
        {ProjectData.map((project) => (
          <ProjectCard
            ref={(element) => {
              containerRef.current.push(element!);
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
