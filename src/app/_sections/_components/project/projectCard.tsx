import Image from "next/image";
import { ProjectCardProps } from "../../types/projectType";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { TbWorldCode } from "react-icons/tb";

export default function ProjectCard({
  image,
  title,
  description,
  date,
  languages,
  github_repo,
  website,
}: ProjectCardProps) {
  return (
    <div className=" flex flex-col gap-3  bg-[#A2D2DF] text-black overflow-hidden  rounded-xl">
      <Image src={image} className="object-cover w-full" alt="project" />
      <div className="flex flex-col justify-between px-4 pb-4 h-[250px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="flex gap-2">
              {languages.map((item, index) => (
                <Image
                  key={index}
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                  alt="logo"
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
          <p>{description}</p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <FaGithub
              size={32}
              className="cursor-pointer hover:fill-primary-accent hover:scale-110 transition-all "
            />
            <TbWorldCode
              size={32}
              className="cursor-pointer hover:fill-primary-accent hover:scale-110 transition-all "
            />
          </div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}
