import Link from 'next/link';

interface IProjectModal {
  title: string;
  description: string;
  status: string;
}

export const ProjectModal = ({ title, description, status }: IProjectModal) => {
  return (
    <div className=" h-[400px] bg-gradient-to-b from-cyberpunk-3 to-cyberpunk-4 border-[1px] border-solid  border-cyberpunk-1  transition-all rounded p-5 text-cyberpunk-5 hover:mt-[-1rem] ">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{status}</p>
      <p>Languange used in the projects (with icons)</p>
      <Link href="/">Link to repo</Link>
    </div>
  );
};
