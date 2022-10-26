import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUnity,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

import { LanguangesIcons } from '@enums/LanguangesIcons';
import { IProjectModal } from '@interfaces/Projects';

export const ProjectModal = ({
  title,
  description,
  status,
  languages,
  repo,
}: IProjectModal) => {
  return (
    <div className=" flex flex-col gap-2 h-[400px] bg-gradient-to-b from-cyberpunk-3 to-cyberpunk-4 border-[1px] border-solid  border-cyberpunk-1  transition-all rounded p-5 text-cyberpunk-5 my-[1rem] sm:hover:my-[-.2rem]  ">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="flex gap-5">
        {languages.map((language) => {
          switch (language) {
            case LanguangesIcons.UNITY:
              return <FontAwesomeIcon size="xl" icon={faUnity} />;
            case LanguangesIcons.C:
              return <p>No Icons Yet</p>;
            case LanguangesIcons.HTML:
              return <FontAwesomeIcon size="xl" icon={faHtml5} />;
            case LanguangesIcons.CSS:
              return <FontAwesomeIcon size="xl" icon={faCss3Alt} />;
            case LanguangesIcons.JAVASCRIPT:
              return <FontAwesomeIcon size="xl" icon={faSquareJs} />;
            case LanguangesIcons.REACT:
              return <FontAwesomeIcon size="xl" icon={faReact} />;
            case LanguangesIcons.TAILWIND:
              return <p>No Icons Yet</p>;
          }
        })}
      </div>
      <p className="m-0 mt-4 italic">{status}</p>
      {repo && (
        <a href={repo} target="_blank">
          Link to repo
        </a>
      )}
    </div>
  );
};
