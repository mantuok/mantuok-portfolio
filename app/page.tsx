import Home from "../app/components/Home/home";
import About from "../app/components/About/about";
import Projects from "../app/components/Projects/projects";
import Contact from "./components/Contact/contact";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
