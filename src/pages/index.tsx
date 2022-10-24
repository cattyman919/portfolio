import { NextPage } from 'next';
import { Navbar, Profile, Projects, Skills } from '@app/index';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
