import { useState, useEffect, useRef } from "react";

interface NavigationItem {
  id: string;
  label: string;
}

const navItems: NavigationItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // 1. Ref to store our navigation link elements to measure their width and position
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  // 2. State to hold the dynamic inline styles for the underline
  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
  });

  // Handle calculating the underline position
  const updateUnderlinePosition = () => {
    const activeItemRef = navRefs.current[activeSection];
    if (activeItemRef) {
      setUnderlineStyle({
        width: activeItemRef.offsetWidth,
        transform: `translateX(${activeItemRef.offsetLeft}px)`,
      });
    }
  };

  // Update underline when the active section changes or window resizes
  useEffect(() => {
    updateUnderlinePosition();

    // Recalculate on window resize to keep the underline aligned
    window.addEventListener("resize", updateUnderlinePosition);
    return () => window.removeEventListener("resize", updateUnderlinePosition);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Check initial scroll position on mount (in case user refreshes while scrolled down)
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Intersection Observer to track active sections
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      id="navigation-bar"
      className={`w-full h-[50px] z-20 flex justify-between items-center  bg-transparent px-20 sticky top-0 backdrop-blur-md transition-colors duration-300 border-b ${
        isScrolled ? "border-slate-200/20 shadow-sm " : "border-transparent"
      }`}
    >
      <div>Logo</div>

      <nav className="relative flex gap-10 font-bold text-gray-200">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`/#${item.id}`}
            ref={(el) => {
              navRefs.current[item.id] = el;
            }}
            className={`relative hover:bg-transparent py-1 hover:border-none hover:shadow-none transition-colors duration-300 z-10 ${
              activeSection === item.id ? "text-primary" : "hover:text-primary"
            }`}
          >
            {item.label}
          </a>
        ))}

        <div
          id="nav-underline"
          className="absolute -bottom-px left-0 h-0.5 bg-primary transition-all duration-300 ease-out"
          style={underlineStyle}
        />
      </nav>
    </header>
  );
}
