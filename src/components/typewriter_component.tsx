import { useTypewriter } from "./hooks/typewriter";

export const DisplayText = () => {
  const text = useTypewriter(
    [
      "Software Developer",
      "Computer Networks",
      "System Design",
      "Tech Enthusiast",
      "Computer Engineer",
    ],
    50,
    1000,
  );
  return <>{text}</>;
};
