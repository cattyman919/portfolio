import { NextPage } from 'next';
import { Navbar, Profile, Projects, Skills } from '@app/index';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { IProjectModal } from '@interfaces/Projects';

export const getStaticProps: GetStaticProps = async () => {
  let projectsData;
  let httpStatus: number;

  const res = await fetch('http://localhost:3000/api/projects');
  httpStatus = res.status;

  if (res.status === 200) {
    projectsData = await res.json();
  } else if (res.status === 500) {
    projectsData = [];
  }

  return {
    props: {
      projectsData,
      httpStatus,
    },
  };
};

const IndexPage: NextPage = ({
  projectsData,
  httpCode,
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
