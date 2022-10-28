import { NextPage } from 'next';
import { Navbar, Profile, Projects, Skills } from '@app/index';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IProjectModal } from '@interfaces/Projects';

export const getStaticProps: GetStaticProps = async () => {
  let projectsData: IProjectModal[];
  const res = await fetch('http://localhost:3000/api/projects');
  if (res.status === 200) {
    projectsData = await res.json();

    return {
      props: {
        projectsData,
      },
    };
  } else if (res.status === 500) {
    projectsData = [];

    return {
      props: {
        projectsData,
      },
    };
  }
};

const IndexPage: NextPage = ({
  projectsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Navbar>
      <Profile />
      <Projects projectsData={projectsData} />
      <Skills />
    </Navbar>
  );
};

export default IndexPage;
