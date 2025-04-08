import Image from "next/image";
import Link from "next/link";
import { forwardRef, LegacyRef } from "react";
import { GalleryItemProps, ProjectCardProps, ProjectDetailedCardProps } from "../../_types/projectType";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
import { gql, useQuery } from "@apollo/client";
import ImageGallery from "./imageGallery";

const PROJECT = gql
  `query  ($projectId: Int!){
  project(id: $projectId) {
    detailed_description
    contributions
    gallery
    credits{
      name
      github
      linkedin
    }
  }
}`

const ModalSkeleton = <div className="w-full animate-pulse flex flex-col gap-4">
  {Array.from({ length: 3 }).map((_, index) => (
    <div key={index} className="h-3 bg-gray-200 rounded-full dark:bg-gray-700" />
  ))
  }
</div>;

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

  const project_gallery: GalleryItemProps[] = [
    {
      imageUrl: image!,
    }
  ]

  let project: ProjectDetailedCardProps | undefined = undefined;

  if (!loading) {
    project = data?.project
    project?.gallery.map((img) => project_gallery.push({ imageUrl: img }))
  }

  return ReactDOM.createPortal(
    <dialog
      id={`modal-${title}`}
      ref={ref}
      onCancel={onClose} // Close on ESC
      // Close on backdrop click
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      // Styling: Improved backdrop, size constraints, scrolling
      className="fixed inset-0 m-auto w-[90%] md:w-[80%] lg:w-[75%] max-h-[90vh] bg-secondary-bg text-black rounded-xl shadow-2xl p-0 border-2 border-primary-accent/50 backdrop:bg-black/70 backdrop:backdrop-blur-sm animate-jump-in overflow-hidden flex flex-col" // Use secondary-bg, adjusted padding/overflow
    >
      {/* Header with Close Button */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300 flex-shrink-0">
        <h3 className="text-2xl lg:text-3xl font-bold text-primary-bg">{title}</h3>
        <button onClick={onClose} aria-label="Close modal" className="text-red-600 hover:text-red-800 transition-colors">
          <ImCross size={32} />
        </button>
      </div>

      {/* Modal Content - Scrollable */}
      <div className="flex-grow overflow-y-auto p-6 lg:p-8">
        {/* Layout: Example 2-column on large screens */}
        <div className="grid grid-cols-1 gap-6 lg:gap-8">
          {/* Left Column: Gallery */}
          <div className="flex flex-col gap-4">
            <ImageGallery gallery={project_gallery!} projectName={title!} />
            {/* Tech Stack Icons (can also be here or in right column) */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2 text-primary-bg">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {languages?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded text-md font-bold">
                    <Image
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${item}/${item}-original.svg`}
                      alt={`${item} logo`}
                      width={24}
                      height={24}
                    />
                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span> {/* Capitalize */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="font-semibold text-gray-600 mb-2">Date: {date}</p>
              {/* External Links */}
              <div className="flex gap-4 mb-4">
                {github_repo && (
                  <Link href={github_repo} target="_blank" rel="noopener noreferrer" className="text-primary-bg hover:text-primary-accent transition-colors flex items-center gap-1.5 text-md font-medium">
                    <FaGithub size={24} /> GitHub Repo
                  </Link>
                )}
                {website && (
                  <Link href={website} target="_blank" rel="noopener noreferrer" className="text-primary-bg hover:text-primary-accent transition-colors flex items-center gap-1.5 text-sm font-medium">
                    <TbWorldCode size={24} /> Live Site
                  </Link>
                )}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary-bg">Description</h4>
              {project ? <p className="text-base/9 text-gray-700 text-justify">{project?.detailed_description}</p> : ModalSkeleton}

            </div>

            <div>
              <h4 className="text-xl font-semibold mb-2 text-primary-bg">{project?.credits?.length === 0 ? "Key Features" : "My Contributions"}</h4>
              {project ? <ul className="list-disc list-inside space-y-4 text-base/9 text-gray-700">
                {project?.contributions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul> : ModalSkeleton}
            </div>

            {project && project?.credits.length !== 0 && (
              <div>
                <h4 className="text-xl font-semibold mb-2 text-primary-bg">Credits</h4>
                <ul className="space-y-2 text-base text-gray-700">
                  {project?.credits.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span>{item.name}</span>
                      {item.github && (
                        <Link href={item.github} target="_blank" rel="noopener noreferrer" aria-label={`${item.name}'s GitHub`}>
                          <FaGithub size={24} className="text-gray-600 hover:text-primary-accent transition-colors" />
                        </Link>
                      )}
                      {item.linkedin && (
                        <Link href={item.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${item.name}'s LinkedIn`}>
                          <FaLinkedinIn size={24} className="text-gray-600 hover:text-primary-accent transition-colors" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")!
  );
});
export default ProjectModal;
