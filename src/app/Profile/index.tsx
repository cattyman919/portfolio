import Image from 'next/image';
import ProfilePic from '@images/SenoOofProfile.jpeg';
const Profile = () => {
  return (
    <div
      id="profile-section"
      className="flex items-center justify-center w-full h-[80vh] bg-cyberpunk-5"
    >
      <p className="w-[400px] mr-[15%] text-xl text-justify text-cyberpunk-3">
        Hey my name is{' '}
        <span className="text-cyberpunk-1 ">Seno Pamungkas Rahman</span> and im
        a frontend developer and also a game developer
      </p>
      <div className="">
        <Image
          src={ProfilePic}
          alt="Profile Picture of Seno"
          width={400}
          height={400}
          className="rounded-[10%] "
        />
      </div>
    </div>
  );
};

export { Profile };
