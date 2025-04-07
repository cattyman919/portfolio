import Image from "next/image";
import { ProjectCardProps } from "../../_types/projectType";
import { FaGithub } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import Link from "next/link";
import { forwardRef, LegacyRef, useEffect, useRef, useState } from "react";
import ProjectModal from "./projectModal";

const ProjectCard = forwardRef(function ProjectCard(
  {
    id,
    title,
    short_description,
    date,
    languages,
    image,
    github_repo,
    website,
  }: ProjectCardProps,
  ref: LegacyRef<HTMLDivElement>
) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) {
      modalRef.current!.inert = true;
      modalRef.current?.showModal();
      modalRef.current!.inert = false;
    }
  }, [openModal]);

  const closeModal = () => {
    setOpenModal(false);
    modalRef.current?.close();
  };
  return (
    <div
      ref={ref}
      className="shine-card  border-2 shadow-lg shadow-primary-accent border-primary-accent transition-all duration-1000  flex flex-col gap-3   bg-secondary-bg text-black overflow-hidden  rounded-xl hover:duration-150 hover:-translate-y-8"
    >
      {openModal && (
        <ProjectModal
          id={id}
          onClose={closeModal}
          title={title}
          image={image}
          date={date}
          languages={languages}
          github_repo={github_repo}
          website={website}
          ref={modalRef}
        />
      )}
      <div
        className="relative w-full h-[200px] group cursor-pointer"
        onClick={() => {
          setOpenModal(true);
          modalRef.current?.showModal();
        }}
      >
        <Image
          key={title}
          src={image}
          fill
          className="object-cover cursor-pointer group-hover:blur-sm"
          alt="project"
        />
        <p className="opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white w-full text-center">
          Click for more info
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-between px-4 pb-4 min-h-[300px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <h3 className="text-2xl font-bold">{title}</h3>
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
          </div>
          <p className="text-justify text-xl md:text-lg lg:text-base xl:text-lg">
            {short_description}
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
          <p className="font-bold text-lg">{date}</p>
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
