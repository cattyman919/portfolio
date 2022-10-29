import Image from 'next/image';
import ProfilePic from '@images/SenoOofProfile.jpeg';

const Profile = () => {
  return (
    <div
      id="profile-section"
      className="flex flex-col items-center bg-polygon_pattern bg-no-repeat bg-cover animate-polygon_anim  justify-between md:flex-row w-full pt-[8rem] pb-[3rem] px-[8.5vw] "
    >
      <p className="text-cyberpunk-5 md:w-[40%] mt-[2rem] md:mt-0  text-xl text-justify ">
        Hey my name is
        <span className="text-cyberpunk-1 "> Seno Pamungkas Rahman</span> and
        i'm a frontend developer and also a game developer
      </p>
      <div className="order-first md:order-last">
        <Image
          src={ProfilePic}
          alt="Profile Picture of Seno"
          width="400"
          height="400"
          className="rounded-[10%] "
        />
      </div>
    </div>
  );
};

export { Profile };
