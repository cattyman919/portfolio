import { NextApiRequest, NextApiResponse } from 'next';
import { IProjectModal } from '@interfaces/Projects';
import { LanguagesIcons } from '@enums/LanguagesIcons';

export default async function getAllProjects(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const cookies = req.cookies;
  try {
    const forward = await fetch('http://localhost:5000/projects', {
      method: 'GET',
    });

    const response = await forward.json();

    const projectsData: IProjectModal[] = response.map((project) => {
      const { languages, ...restProject } = project;
      const newProject: IProjectModal = {
        languages: [LanguagesIcons[languages]],
        ...restProject,
      };

      return newProject;
    });

    res.status(200).send(projectsData);
  } catch (error) {
    res.status(500).send({ message: 'failed to fetch data' });
  }
}
