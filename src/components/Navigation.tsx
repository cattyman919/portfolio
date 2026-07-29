import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
// import SRLogo from "@/assets/SR-Logo.png";

interface NavigationItem {
  id: string;
  label: string;
  href: string;
  activeIds?: string[];
  icon?: string;
}

const desktopNavItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "/#home" },
  {
    id: "journey",
    label: "Journey",
    href: "/#experience",
    activeIds: ["experience", "achievements"],
  },
  { id: "skills", label: "Skills", href: "/#skills" },
  {
    id: "projects-menu",
    label: "Projects",
    href: "/#projects",
    activeIds: ["projects", "open-source"],
  },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

const journeyNavItems: NavigationItem[] = [
  {
    id: "experience",
    label: "Experience",
    href: "/#experience",
    icon: "lucide:briefcase-business",
  },
  {
    id: "achievements",
    label: "Achievements",
    href: "/#achievements",
    icon: "lucide:trophy",
  },
];

const projectNavItems: NavigationItem[] = [
  {
    id: "projects",
    label: "Projects",
    href: "/#projects",
    icon: "lucide:folder-kanban",
  },
  {
    id: "open-source",
    label: "Open Source",
    href: "/#open-source",
    icon: "simple-icons:github",
  },
];

const mobileNavItems: NavigationItem[] = [
  { id: "home", label: "Home", href: "/#home" },
  { id: "about", label: "About", href: "/#about" },
  { id: "experience", label: "Experience", href: "/#experience" },
  { id: "achievements", label: "Achievements", href: "/#achievements" },
  { id: "skills", label: "Skills", href: "/#skills" },
  { id: "projects", label: "Projects", href: "/#projects" },
  { id: "open-source", label: "Open Source", href: "/#open-source" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/#contact" },
];

const isItemActive = (item: NavigationItem, activeSection: string) =>
  (item.activeIds ?? [item.id]).includes(activeSection);

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isJourneyMenuOpen, setIsJourneyMenuOpen] = useState(false);
  const [isProjectsMenuOpen, setIsProjectsMenuOpen] = useState(false);

  // Start with an empty string to prevent hydration mismatches on page load
  const [activeSection, setActiveSection] = useState<string>("");

  const navRefs = useRef<Record<string, HTMLElement | null>>({});
  const journeyMenuRef = useRef<HTMLDivElement>(null);
  const projectsMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
    opacity: 0, // Hide until we know the active section
  });

  const updateUnderlinePosition = () => {
    const activeDesktopItem = desktopNavItems.find((item) =>
      isItemActive(item, activeSection),
    );
    const activeItemRef = navRefs.current[activeDesktopItem?.id ?? ""];

    if (activeItemRef) {
      setUnderlineStyle({
        width: activeItemRef.offsetWidth,
        transform: `translateX(${activeItemRef.offsetLeft}px)`,
        opacity: 1, // Reveal underline
      });
    }
  };

  const isProjectsMenuActive = desktopNavItems.some((item) =>
    item.id === "projects-menu" && isItemActive(item, activeSection),
  );
  const isJourneyMenuActive = desktopNavItems.some(
    (item) => item.id === "journey" && isItemActive(item, activeSection),
  );

  useEffect(() => {
    updateUnderlinePosition();
    window.addEventListener("resize", updateUnderlinePosition);
    return () => window.removeEventListener("resize", updateUnderlinePosition);
  }, [activeSection]);

  useEffect(() => {
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        journeyMenuRef.current &&
        !journeyMenuRef.current.contains(event.target as Node)
      ) {
        setIsJourneyMenuOpen(false);
      }

      if (
        projectsMenuRef.current &&
        !projectsMenuRef.current.contains(event.target as Node)
      ) {
        setIsProjectsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsJourneyMenuOpen(false);
        setIsProjectsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

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
      className={`w-full h-[50px] z-30 flex justify-between items-center bg-transparent px-6 md:px-8 lg:px-12 xl:px-20 sticky top-0 backdrop-blur-md transition-colors duration-300 border-b ${
        isScrolled ? "border-slate-200/20 shadow-sm " : "border-transparent"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-14 focus:z-50 focus:rounded-lg focus:border focus:border-primary focus:bg-bg focus:px-4 focus:py-2 focus:font-bold focus:text-primary"
      >
        Skip to main content
      </a>

      <div>
        <a href="/" className="font-bold text-gray-200 hover:text-primary">
          <img
            src="/SR-Logo.svg"
            alt="Seno Logo"
            className="h-14 object-contain md:h-16"
          />
        </a>
      </div>

      <nav className="relative hidden items-center gap-2 rounded-full border border-white/10 bg-bg/45 px-3 py-1.5 text-sm font-bold text-gray-200 backdrop-blur-xl md:flex xl:text-base">
        {desktopNavItems.map((item) => {
          const isActive = isItemActive(item, activeSection);

          if (item.id === "journey") {
            return (
              <div
                key={item.id}
                className="relative z-20"
                ref={journeyMenuRef}
                onMouseEnter={() => setIsJourneyMenuOpen(true)}
                onMouseLeave={() => setIsJourneyMenuOpen(false)}
                onFocus={() => setIsJourneyMenuOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsJourneyMenuOpen(false);
                  }
                }}
              >
                <a
                  href={item.href}
                  ref={(el) => {
                    navRefs.current[item.id] = el;
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 hover:border-none hover:bg-transparent hover:shadow-none lg:px-3 ${
                    isJourneyMenuActive
                      ? "text-primary"
                      : "text-gray-200 hover:text-primary"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isJourneyMenuOpen}
                >
                  {item.label}
                  <Icon
                    icon="lucide:chevron-down"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isJourneyMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {isJourneyMenuOpen && (
                  <div
                    className="absolute left-0 top-full w-48 pt-3"
                    role="menu"
                  >
                    <div className="rounded-2xl border border-white/10 bg-bg/95 p-2 shadow-[0_0_24px_color-mix(in_oklch,var(--color-primary)_16%,transparent)] backdrop-blur-xl">
                      {journeyNavItems.map((journeyItem) => {
                        const isJourneyItemActive = isItemActive(
                          journeyItem,
                          activeSection,
                        );

                        return (
                          <a
                            key={journeyItem.id}
                            href={journeyItem.href}
                            role="menuitem"
                            onClick={() => setIsJourneyMenuOpen(false)}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold hover:border-none hover:bg-primary/10 hover:shadow-none ${
                              isJourneyItemActive
                                ? "text-primary"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {journeyItem.icon && (
                              <Icon
                                icon={journeyItem.icon}
                                className="h-4 w-4"
                              />
                            )}
                            {journeyItem.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          if (item.id === "projects-menu") {
            return (
              <div
                key={item.id}
                className="relative z-20"
                ref={projectsMenuRef}
                onMouseEnter={() => setIsProjectsMenuOpen(true)}
                onMouseLeave={() => setIsProjectsMenuOpen(false)}
                onFocus={() => setIsProjectsMenuOpen(true)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsProjectsMenuOpen(false);
                  }
                }}
              >
                <a
                  href={item.href}
                  ref={(el) => {
                    navRefs.current[item.id] = el;
                  }}
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 hover:border-none hover:bg-transparent hover:shadow-none lg:px-3 ${
                    isProjectsMenuActive
                      ? "text-primary"
                      : "text-gray-200 hover:text-primary"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={isProjectsMenuOpen}
                >
                  {item.label}
                  <Icon
                    icon="lucide:chevron-down"
                    className={`h-4 w-4 transition-transform duration-200 ${
                      isProjectsMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {isProjectsMenuOpen && (
                  <div
                    className="absolute right-0 top-full w-48 pt-3"
                    role="menu"
                  >
                    <div className="rounded-2xl border border-white/10 bg-bg/95 p-2 shadow-[0_0_24px_color-mix(in_oklch,var(--color-primary)_16%,transparent)] backdrop-blur-xl">
                      {projectNavItems.map((projectItem) => {
                        const isProjectItemActive = isItemActive(
                          projectItem,
                          activeSection,
                        );

                        return (
                          <a
                            key={projectItem.id}
                            href={projectItem.href}
                            role="menuitem"
                            onClick={() => setIsProjectsMenuOpen(false)}
                            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold hover:border-none hover:bg-primary/10 hover:shadow-none ${
                              isProjectItemActive
                                ? "text-primary"
                                : "text-gray-300 hover:text-white"
                            }`}
                          >
                            {projectItem.icon && (
                              <Icon
                                icon={projectItem.icon}
                                className="h-4 w-4"
                              />
                            )}
                            {projectItem.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return (
            <a
              key={item.id}
              href={item.href}
              ref={(el) => {
                navRefs.current[item.id] = el;
              }}
              className={`relative z-10 rounded-full px-2.5 py-1.5 hover:bg-transparent hover:border-none hover:shadow-none transition-colors duration-300 lg:px-3 ${
                isActive ? "text-primary" : "hover:text-primary"
              }`}
            >
              {item.label}
            </a>
          );
        })}

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
          {mobileNavItems.map((item) => (
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
