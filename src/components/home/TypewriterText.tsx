import { useTypewriter } from "@/hooks/UseTypewriter";

export default function TypewriterText() {
  const text = useTypewriter(
    [
      "Full-Stack Developer",
      "Platform Engineer",
      "Devops Engineer",
      "Systems Programmer",
      "Computer Engineer",
    ],
    50,
    1000,
  );
  return (
    <p className="font-pixel">
      <span>{text || "\u00A0"}</span>
      <span className="relative before:absolute before:inset-1 before:w-[0.125em] before:bg-primary animate-caret"></span>
    </p>
  );
}
