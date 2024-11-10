import Image from "next/image";
import SenoImage from "@/public/images/seno.png";

export default function Home() {
  return (
    <div className="flex items-center justify-between h-svh">
      <div className="w-[600px] flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-8xl text-primary-accent font-bold">
            <h1>Seno</h1>
            <h1>Pamungkas</h1>
          </div>
          <h4 className="text-[#3CFF00] text-xl">{"<Developer>"}</h4>
        </div>
        <p className="text-justify leading-8">
          Hello! I'm an avid software engineer with a zest for game development,
          front-end, back-end, AI, and cloud technologies. Passionate about
          exploring new tech frontiers, I blend creativity with technical skill
          in every project, pushing the boundaries of software innovation
        </p>
      </div>
      <div className="relative  rounded-b-full overflow-hidden shrink-0 w-[700px] aspect-[1/1] ">
        <Image
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-full object-contain"
          src={SenoImage}
          alt="Seno Pamungkas"
        />
        <div className="absolute  w-[90%]  bottom-0 right-1/2 translate-x-1/2 aspect-square bg-gradient-to-b from-[#1E2021] to-[#005F87]   rounded-full" />
      </div>
    </div>
  );
}
