import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  useEffect(() => {
    // 1. Configure the observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is currently intersecting our defined viewport area
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        // rootMargin creates a horizontal trigger line in the exact middle of the screen.
        // Whichever section crosses this line becomes active.
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    // 2. Find all sections with IDs and observe them
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    // 3. Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []); // Empty dependency array means this runs once on mount

  // Helper function to easily apply active styles
  const getLinkClass = (id: string) => {
    const isActive = activeSection === id;

    return `
      relative font-medium py-1
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
       after:transition-transform after:duration-300 after:ease-out
      ${
        isActive
          ? "after:scale-x-100 after:origin-bottom-left " // Active: Line is full width
          : "after:scale-x-0 after:origin-bottom-right " // Inactive: Line is hidden, but expands on hover
      }
    `;
  };

  return (
    <header
      id="navigation-bar"
      className="w-full h-[50px] z-20 flex  justify-between items-center px-20 border-b sticky  
  backdrop-blur-md top-0 border-slate-200/50"
    >
      <div>Logo</div>
      <nav className="flex gap-10 font-bold">
        <a href="#home" className={getLinkClass("home")}>
          Home
        </a>
        <a href="#about" className={getLinkClass("about")}>
          About
        </a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
