import { NextPage } from 'next';
import { Navbar, Profile, Projects, Skills } from '@app/index';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IProjects } from '@interfaces/Projects';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/api/projects');
  const projectsData: IProjects = await res.json();
  return {
    props: {
      projectsData,
    },
  };
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
