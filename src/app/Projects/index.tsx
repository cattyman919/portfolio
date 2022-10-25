import { ProjectModal } from './ProjectModal';

const Projects = () => {
  return (
    <div
      id="projects-section"
      className="flex flex-col items-center px-[8.5vw] py-[3rem] justify-start border-t-2 border-t-cyberpunk-1 border-solid bg-cyberpunk-5 "
    >
      <h1 className="mb-10 text-cyberpunk-3">Projects</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 ">
        <ProjectModal
          title="Portfolio"
          description="Project about this portfolio website"
          status="In Development"
          repo="https://github.com/cattyman919/portfolio"
        />
        <ProjectModal
          title="Unity"
          description="Projects about my game development with Unity game engine"
          status="In Development"
        />
        <ProjectModal
          title="C++"
          description="Project made with C++"
          status="In Development"
        />
        <ProjectModal
          title="C#"
          description="Project made with C#"
          status="In Development"
        />
        <ProjectModal
          title="JavaScript"
          description="Project made with Javascript"
          status="In Development"
        />
        <ProjectModal
          title="oof"
          description="Project made with oof"
          status="In Development"
        />
      </div>
    </div>
  );
};

export { Projects };
