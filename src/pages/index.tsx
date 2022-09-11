import { NextPage } from 'next';
import { Navbar, Profile, Projects, Skills } from '@app/index';

const IndexPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <Projects />
      <Skills />
    </>
  );
};

export default IndexPage;
