import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import SRLogo from "@/assets/SR-Logo.png";

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Start with an empty string to prevent hydration mismatches on page load
  const [activeSection, setActiveSection] = useState<string>("");

  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0, // Hide until we know the active section
  });

  const updateUnderlinePosition = () => {
    const activeItemRef = navRefs.current[activeSection];
    if (activeItemRef) {
      setUnderlineStyle({
        width: activeItemRef.offsetWidth,
        transform: `translateX(${activeItemRef.offsetLeft}px)`,
        opacity: 1, // Reveal underline
      });
    }
  };

  useEffect(() => {
    updateUnderlinePosition();
    window.addEventListener("resize", updateUnderlinePosition);
    return () => window.removeEventListener("resize", updateUnderlinePosition);
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Check if we are on the blog page route
    const isBlogPage = window.location.pathname.startsWith("/blog");

    if (isBlogPage) {
      setActiveSection("blog");
      return; // Skip the intersection observer on the blog page
    } else {
      // Default fallback for the home page before the observer kicks in
      setActiveSection("home");
    }

    // Set up IntersectionObserver for home page scrolling
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
      className={`w-full h-[50px] z-20 flex justify-between items-center bg-transparent px-6 md:px-20 sticky top-0 backdrop-blur-md transition-colors duration-300 border-b ${
        isScrolled ? "border-slate-200/20 shadow-sm " : "border-transparent"
      }`}
    >
      <div>
        <a href="/" className="font-bold text-gray-200 hover:text-primary">
          <img
            src={SRLogo.src}
            alt={`Seno Logo`}
            className="h-18  object-contain"
          />
        </a>
      </div>
      <nav className="relative hidden md:flex gap-10 font-bold text-gray-200">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.href}
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
      <button
        className="md:hidden p-2 text-gray-200 border-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Icon icon={isMobileMenuOpen ? "lucide:x" : "lucide:menu"} width={24} />
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-[50px] left-0 w-full bg-bg/95 backdrop-blur-xl border-b border-white/10 flex flex-col md:hidden p-4 gap-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-bold ${activeSection === item.id ? "text-primary" : "text-gray-200"}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
