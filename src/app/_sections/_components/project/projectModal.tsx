import Image from "next/image";
import Link from "next/link";
import { forwardRef, LegacyRef } from "react";
import { ProjectCardProps, ProjectDetailedCardProps } from "../../_types/projectType";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
import { gql, useQuery } from "@apollo/client";

const PROJECT = gql
  `query  ($projectId: Int!){
  project(id: $projectId) {
    detailed_description
    contributions
    credits{
      name
      github
      linkedin
    }
  }
}`

const ProjectModal = forwardRef(function ProjectModal(
  {
    id,
    title,
    image,
    date,
    languages,
    github_repo,
    website,
    onClose,
  }: Partial<ProjectCardProps> & { onClose: () => void },
  ref: LegacyRef<HTMLDialogElement>
) {
  const { data, loading } = useQuery(PROJECT, {
    variables: { projectId: id }
  });

  let project: ProjectDetailedCardProps | undefined = undefined;

  if (!loading) {
    project = data?.project
  }

  return ReactDOM.createPortal(
    <dialog
      id={`modal-${title}`}
      ref={ref}
      onCancel={onClose}
      className="flex flex-col backdrop-blur-md  bg-white/85 animate-jump-in md:w-[70%] lg:w-[75%] p-6 h-[80%] gap-4 items-center rounded-xl  fixed border-2 shadow-xl shadow-primary-bg border-primary-accent"
    >
      <ImCross
        className="absolute w-[24px] h-[24px] lg:w-[32px] lg:h-[32px] top-5 right-3 lg:right-8 cursor-pointer hover:scale-125 transition-transform"
        color="#ff0f0f"
        size={32}
        onClick={onClose}
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-4xl w-full text-center font-bold">{title}</h3>
        <p className="font-bold text-lg text-center  w-full">{date}</p>
      </div>
      <div className="relative group/card w-fit">
        <Image
          src={image!}
          width={200}
          height={200}
          className="object-contain w-full group-hover/card:blur-sm transition-all duration-500  md:h-[200px]  rounded-lg border-2 border-primary-bg shadow-md shadow-primary-bg"
          alt="project"
        />
        <div className="w-full h-full absolute top-[50%] left-[50%] -translate-x-1/2 transition-opacity duration-500 -translate-y-1/2 flex items-center gap-5 justify-center opacity-0 group-hover/card:opacity-100">
          <Link
            href={github_repo ? github_repo : "#"}
            target="_blank"
            className="cursor-pointer  w-fit  "
          >
            <FaGithub
              size={64}
              color="#FFFFFF"
              className={`  hover:fill-primary-accent hover:scale-110 transition-all  `}
            />
          </Link>

          {website ? (
            <Link href={website ? website : "#"} target="_blank">
              <TbWorldCode
                size={64}
                color="#FFFFFF"
                className={` cursor-pointer hover:fill-primary-accent hover:scale-110 transition-all  `}
              />
            </Link>
          ) : (
            <TbWorldCode
              size={64}
              color="#FFFFFF"
              className="stroke-white  cursor-not-allowed"
            />
          )}
        </div>
      </div>

      <div className="flex gap-2">
        {languages?.map((item, index) => (
          <Image
            key={index}
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
            alt="logo"
            width={32}
            height={32}
          />
        ))}
      </div>

      <p className="text-justify text-base/9 ">{project && project.detailed_description}</p>
      <h3 className="text-2xl text-start w-full font-bold">My Contribution</h3>
      <ul className=" list-disc list-inside  text-base/9 w-full   ">
        {project && project.contributions.map((item, index) => (
          <li key={index} className="mt-4">
            {item}
          </li>
        ))}
      </ul>
      <h3 className="text-2xl text-start w-full font-bold">Credits</h3>
      <ul className=" text-base/9 w-full  ">
        {project && project.credits.map((item, index) => (
          <li key={index} className="flex gap-5  items-center ">
            <p>{item.name}</p>
            {item.github && (
              <Link href={item.github} target="_blank">
                <FaGithub
                  size={24}
                  className={` cursor-pointer hover:fill-primary-accent hover:scale-110 transition-all  `}
                />
              </Link>
            )}
            {item.linkedin && (
              <Link href={item.linkedin} target="_blank">
                <FaLinkedinIn
                  size={24}
                  className={` cursor-pointer hover:fill-primary-accent hover:scale-110 transition-all  `}
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </dialog>,
    document.getElementById("modal")!
  );
});
export default ProjectModal;
