import Link from 'next/link';

interface IProjectModal {
  title: string;
  description: string;
  status: string;
  repo?: string;
}

export const ProjectModal = ({
  title,
  description,
  status,
  repo,
}: IProjectModal) => {
  return (
    <div className=" h-[400px] bg-gradient-to-b from-cyberpunk-3 to-cyberpunk-4 border-[1px] border-solid  border-cyberpunk-1  transition-all rounded p-5 text-cyberpunk-5 my-[1rem] sm:hover:my-[-.2rem]  ">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Languange used in the projects (with icons)</p>
      <p>{status}</p>
      {repo && (
        <a href={repo} target="_blank">
          Link to repo
        </a>
      )}
    </div>
  );
};
