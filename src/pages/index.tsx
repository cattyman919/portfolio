import { NextPage } from 'next';
import { Navbar, Profile, Projects, Skills } from '@app/index';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const IndexPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/#profile-section');
  }, []);

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
