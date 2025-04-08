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
    <> {/* Use Fragment shorthand */}
      {openModal && (
        <ProjectModal
          key={title}
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
        ref={ref}
        className="shine-card border-2 shadow-lg shadow-primary-accent border-primary-accent transition-all duration-1000  flex flex-col gap-3   bg-secondary-bg text-black overflow-hidden  rounded-xl hover:duration-150 hover:-translate-y-6 hover:border-secondary-accent hover:shadow-primary-accent/60"
      >
        <div
          className="relative w-full h-[200px] group cursor-pointer overflow-hidden"
          onClick={() => {
            setOpenModal(true);
            modalRef.current?.showModal();
          }}
        >
          <Image
            key={title}
            src={image}
            fill
            className="object-cover cursor-pointer group-hover:blur-sm transition-transform duration-300 ease-in-out group-hover:scale-110"
            alt={`${title} thumbnail`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="font-bold text-white text-center text-lg px-4">
              Click for more info
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 p-5 flex-grow">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <h3 className="text-2xl font-bold">{title}</h3>
              <div className="flex gap-2 flex-shrink-0">
                {languages?.map((item, index) => (
                  <Image
                    key={index}
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                    alt={`${item} logo`}
                    width={32}
                    height={32}
                    title={item}
                  />
                ))}
              </div>
            </div>
            <p className="text-justify text-xl text-gray-700  md:text-lg lg:text-base xl:text-lg/9 ">
              {short_description}
            </p>
          </div>
          <div className="flex justify-between mt-auto">
            <div className="flex gap-2">
              {github_repo ? (
                <Link href={github_repo ? github_repo : "#"} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub Repository`}>
                  <FaGithub
                    size={32}
                    className={` cursor-pointer hover:fill-primary-accent hover:scale-110 transition-transform`}
                  />
                </Link>
              ) : (
                <FaGithub
                  size={32}
                  className="fill-gray-500  cursor-not-allowed"
                  aria-label="GitHub repository not available"
                />
              )}

              {website ? (
                <Link href={website ? website : "#"} target="_blank" rel="noopener noreferrer" aria-label={`${title} Live Website`}>
                  <TbWorldCode
                    size={32}
                    className={` cursor-pointer hover:fill-primary-accent hover:scale-110 transition-transform`}
                  />
                </Link>
              ) : (
                <TbWorldCode
                  size={32}
                  className="stroke-gray-500  cursor-not-allowed"
                  aria-label="Live website not available"
                />
              )}
            </div>
            <p className="font-bold text-lg text-gray-600">{date}</p>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProjectCard;
