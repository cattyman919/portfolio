const Skills = () => {
  return (
    <div
      id="skills-section"
      className="flex flex-col  items-center justify-center  border-t-2 border-t-cyberpunk-1 border-solid px-[8.5vw] py-[3rem] bg-cyberpunk-5  "
    >
      <h1 className="text-cyberpunk-3">Skills</h1>
      <div className="flex flex-col text-cyberpunk-3">
        <h3 className="text-cyberpunk-3">
          <span className="text-cyberpunk-1">Programming Language</span> : C,
          C#, C++, Typescript, Python
        </h3>
        <h3 className="text-cyberpunk-3">
          <span className="text-cyberpunk-1">Frontend Frameworks</span> : React,
          Next.js, Tailwind CSS
        </h3>
        <h3 className="text-cyberpunk-3">
          <span className="text-cyberpunk-1">Development Tools</span> : Git,
          Yarn, NPM
        </h3>
        <h3 className="text-cyberpunk-3">
          <span className="text-cyberpunk-1">Game Engine</span> : Unity
        </h3>
        <h3 className="text-cyberpunk-3">
          <span className="text-cyberpunk-1">Infastructure</span> : Docker
        </h3>
      </div>
    </div>
  );
};

export { Skills };
