import Image from "next/image";
import { ProjectCardProps } from "../../types/projectType";
import { FaGithub } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import Link from "next/link";

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
    <div className=" flex flex-col gap-3  bg-secondary-bg text-black overflow-hidden  rounded-xl">
      <Image
        src={image}
        className="object-cover w-full cursor-pointer"
        alt="project"
      />
      <div className="flex flex-col justify-between px-4 pb-4 h-[250px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
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
          <p className="text-justify md:text-lg lg:text-base xl:text-lg">
            {description}
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            {github_repo ? (
              <Link href={github_repo ? github_repo : "#"} target="_blank">
                <FaGithub
                  size={32}
                  className={` cursor-pointer hover:fill-primary-accent hover:scale-110 transition-all  `}
                />
              </Link>
            ) : (
              <FaGithub
                size={32}
                className="fill-gray-500  cursor-not-allowed"
              />
            )}

            {website ? (
              <Link href={website ? website : "#"} target="_blank">
                <TbWorldCode
                  size={32}
                  className={` cursor-pointer hover:fill-primary-accent hover:scale-110 transition-all  `}
                />
              </Link>
            ) : (
              <TbWorldCode
                size={32}
                className="stroke-gray-500  cursor-not-allowed"
              />
            )}
          </div>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}