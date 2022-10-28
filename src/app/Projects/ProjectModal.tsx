import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUnity,
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

import { LanguagesIcons } from '@enums/LanguagesIcons';
import { IProjectModal } from '@interfaces/Projects';

export const ProjectModal = ({
  title,
  description,
  status,
  languages,
  repo,
}: IProjectModal) => {
  return (
    <div className=" flex flex-col gap-2 h-[400px] bg-gradient-to-b from-cyberpunk-3 to-cyberpunk-4 border-[1px] border-solid  border-cyberpunk-1  transition-all rounded p-5 text-cyberpunk-5 my-[1rem] sm:hover:mt-[-.2rem] ">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="flex gap-5">
        {languages.map((language) => {
          switch (language) {
            case LanguagesIcons.UNITY:
              return (
                <FontAwesomeIcon
                  key={language.toString()}
                  size="xl"
                  icon={faUnity}
                />
              );
            case LanguagesIcons.C:
              return <p>No Icons Yet</p>;
            case LanguagesIcons.HTML:
              return (
                <FontAwesomeIcon
                  key={language.toString()}
                  size="xl"
                  icon={faHtml5}
                />
              );
            case LanguagesIcons.CSS:
              return (
                <FontAwesomeIcon
                  key={language.toString()}
                  size="xl"
                  icon={faCss3Alt}
                />
              );
            case LanguagesIcons.JAVASCRIPT:
              return (
                <FontAwesomeIcon
                  key={language.toString()}
                  size="xl"
                  icon={faSquareJs}
                />
              );
            case LanguagesIcons.REACT:
              return (
                <FontAwesomeIcon
                  key={language.toString()}
                  size="xl"
                  icon={faReact}
                />
              );
            case LanguagesIcons.TAILWIND:
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
