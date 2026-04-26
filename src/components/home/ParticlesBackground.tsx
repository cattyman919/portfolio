import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { IParticlesProps } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesBackgroundProps {
  id: string;
  options?: IParticlesProps["options"];
}

export default function ParticlesBackground({
  id,
  options,
}: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // loadSlim loads the basic particle shapes and lines
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return <></>;

  return (
    <Particles
      id={id}
      className="absolute inset-0 -z-20 w-full h-full"
      options={options}
    />
  );
}
