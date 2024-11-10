import Home from "./_sections/home";
import Skills from "./_sections/skills";
import Projects from "./_sections/projects";
import Experience from "./_sections/experience";
import Contacts from "./_sections/contacts";

export default function FullPage() {
  return (
    <section className="flex flex-col gap-32">
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Contacts />
    </section>
  );
}
