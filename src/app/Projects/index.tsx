import { ProjectModal } from './ProjectModal';

import { ProjectModalData } from '@data/projects';
const Projects = () => {
  return (
    <div
      id="projects-section"
      className="flex flex-col items-center px-[8.5vw] py-[3rem] justify-start border-t-2 border-t-cyberpunk-1 border-solid bg-cyberpunk-5 "
    >
      <h1 className="mb-10 text-cyberpunk-3">Projects</h1>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 ">
        {ProjectModalData.map(
          ({ id, title, description, status, languages, repo }) => {
            return (
              <ProjectModal
                key={id}
                title={title}
                description={description}
                status={status}
                languages={languages}
                repo={repo}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export { Projects };
