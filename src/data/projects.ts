import { LanguagesIcons } from '@enums/LanguagesIcons';
import { IProjectModal } from '@interfaces/Projects';

export const ProjectModalData: IProjectModal[] = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'Project about this portfolio website',
    status: 'In Development',
    languages: [
      LanguagesIcons.HTML,
      LanguagesIcons.CSS,
      LanguagesIcons.JAVASCRIPT,
      LanguagesIcons.REACT,
    ],
    repo: 'https://github.com/cattyman919/portfolio',
  },
  {
    id: 2,
    title: 'Unity',
    description: 'Projects about my game development with Unity game engine',
    languages: [LanguagesIcons.UNITY],
    status: 'In Development',
  },
  {
    id: 3,
    title: 'C++',
    description: 'Project made with C++',
    languages: [
      LanguagesIcons.HTML,
      LanguagesIcons.CSS,
      LanguagesIcons.JAVASCRIPT,
    ],
    status: 'In Development',
  },
  {
    id: 4,
    title: 'C#',
    description: 'Project made with C#',
    languages: [
      LanguagesIcons.HTML,
      LanguagesIcons.CSS,
      LanguagesIcons.JAVASCRIPT,
    ],
    status: 'In Development',
  },
  {
    id: 5,
    title: 'JavaScript',
    description: 'Project made with Javascript',
    languages: [
      LanguagesIcons.HTML,
      LanguagesIcons.CSS,
      LanguagesIcons.JAVASCRIPT,
    ],
    status: 'In Development',
  },
];
