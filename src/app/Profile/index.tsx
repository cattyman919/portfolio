import React from 'react';
import Image from 'next/image';
import ProfilePic from '@images/SenoOofProfile.jpeg';
const Profile = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen gap-6 bg-cyberpunk-4">
      <p>
        Hey my name is Seno Pamungkas Rahman and im a frontend developer and
        also a game developer
      </p>
      <Image
        src={ProfilePic}
        alt="Profile Picture of Seno"
        width={500}
        height={500}
      />
    </div>
  );
};

export { Profile };
