enum LanguangesIcons {
  C,
  UNITY,
  HTML,
  CSS,
  JAVASCRIPT,
  REACT,
  TAILWIND,
}

interface ProjectModal {
  id: number;
  title: string;
  description: string;
  status: string;
  languages: LanguangesIcons[];
  repo?: string;
}

export const ProjectModalData: ProjectModal[] = [
  {
    id: 1,
    title: 'Portfolio',
    description: 'Project about this portfolio website',
    status: 'In Development',
    languages: [
      LanguangesIcons.HTML,
      LanguangesIcons.CSS,
      LanguangesIcons.JAVASCRIPT,
      LanguangesIcons.REACT,
    ],
    repo: 'https://github.com/cattyman919/portfolio',
  },
  {
    id: 2,
    title: 'Unity',
    description: 'Projects about my game development with Unity game engine',
    languages: [LanguangesIcons.UNITY],
    status: 'In Development',
  },
  {
    id: 3,
    title: 'C++',
    description: 'Project made with C++',
    languages: [
      LanguangesIcons.HTML,
      LanguangesIcons.CSS,
      LanguangesIcons.JAVASCRIPT,
    ],
    status: 'In Development',
  },
  {
    id: 4,
    title: 'C#',
    description: 'Project made with C#',
    languages: [
      LanguangesIcons.HTML,
      LanguangesIcons.CSS,
      LanguangesIcons.JAVASCRIPT,
    ],
    status: 'In Development',
  },
  {
    id: 5,
    title: 'JavaScript',
    description: 'Project made with Javascript',
    languages: [
      LanguangesIcons.HTML,
      LanguangesIcons.CSS,
      LanguangesIcons.JAVASCRIPT,
    ],
    status: 'In Development',
  },
];
