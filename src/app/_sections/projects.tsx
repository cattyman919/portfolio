import { forwardRef, LegacyRef, useEffect, useState } from "react";
import ProjectCard from "./_components/project/projectCard";
import ProjectSkeletonCard from "./_components/project/projectSkeletonCard";
import { useQuery, gql } from "@apollo/client";
import { ProjectCardProps } from "./_types/projectType";

const FETCH_PROJECTS = gql
  `query fetch_projects {
  fetchProjects {
    id
    title
    image
    short_description
    languages
    github_repo
    website
    date
  }
}`


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

  const { data, error, loading } = useQuery(FETCH_PROJECTS);

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
    observer = new IntersectionObserver(callbackFunction, options);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="projects" className="w-full overflow-hidden">
      <h1 className=" w-full mb-12 text-6xl pt-4 text-center lg:text-7xl  text-primary-accent font-bold animate-bounce">
        Projects
      </h1>
      {error && <h1>Error : {error.message}</h1>}
      <div className="grid grid-cols-1 px-[10%] gap-8 py-4  md:grid-cols-2 lg:px-0 lg:grid-cols-3 lg:gap-10">
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
            <ProjectSkeletonCard key={index} />
          ))
          : data ? (data?.fetchProjects as ProjectCardProps[]).map((project) => (
            <ProjectCard
              ref={(element) => {
                if (element) observer.observe(element);
              }}
              key={project.id}
              {...project}
            />
          )) : <h1>No Data Found</h1>}
      </div>
    </section>
  );
});

export default Projects;
