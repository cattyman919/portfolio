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
      const newProject: IProjectModal = {
        id: project.id,
        title: project.title,
        description: project.description,
        status: project.status,
        languages: [LanguagesIcons[project.languages]],
        repo: project.repo,
      };

      return newProject;
    });

    res.status(200).send(projectsData);
  } catch (error) {
    res.status(500).send({ message: 'failed to fetch data' });
  }
}
