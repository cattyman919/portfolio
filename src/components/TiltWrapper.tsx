import { useState, useRef, type ReactNode } from "react";

interface TiltWrapperProps {
  children: ReactNode;
  maxTilt: number;
  className?: string;
}

export default function TiltWrapper({
  children,
  maxTilt,
  className = "",
}: TiltWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const MAX_TILT = maxTilt;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseXFromCenter = e.clientX - rect.left - centerX;
    const mouseYFromCenter = e.clientY - rect.top - centerY;

    const rotateX = -(mouseYFromCenter / centerY) * MAX_TILT;
    const rotateY = (mouseXFromCenter / centerX) * MAX_TILT;

    setRotation({ x: rotateX, y: rotateY });
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      // The outer container handles the 3D perspective
      className="relative group [perspective:1000px] w-full h-full"
    >
      <div
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
        className={`relative w-full h-full will-change-transform transform-3d
          ${isHovered ? "transition-none" : "transition-transform duration-500 ease-out"}
          ${className}`}
      >
        {/* Isolated Glare Layer: Keeps the glare contained to the border-radius without breaking 3D */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl pointer-events-none">
          <div className="absolute inset-0 transition-opacity duration-300 mix-blend-overlay" />
        </div>

        <div className="relative z-10 w-full h-full transform-3d">
          {children}
        </div>
      </div>
    </div>
  );
}
