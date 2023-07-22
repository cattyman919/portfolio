import {
  GetServerSideProps,
  NextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from 'next';
import { Navbar, Profile, Projects, Skills } from '@app/index';
import { ProjectModalData } from '@data/projects';

export const getServerSideProps: GetServerSideProps = async () => {
  let projectsData;
  let httpStatus: number;

  const res = await fetch('http://localhost:3000/api/projects');
  httpStatus = res.status;

  if (res.status === 200) {
    projectsData = await res.json();
  } else if (res.status === 500) {
    projectsData = ProjectModalData;
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
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Navbar>
      <Profile />
      <Projects projectsData={projectsData} />
      <Skills />
    </Navbar>
  );
};

export default IndexPage;
