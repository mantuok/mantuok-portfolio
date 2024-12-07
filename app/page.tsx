import Home from "../app/components/Home/home";
import About from "../app/components/About/about";
import Projects from "../app/components/Projects/projects";
import { ProjectsData } from "./constants";
import Contact from "./components/Contact/contact";
import Llama from "./components/Llama/llama";

export default function Page() {
  return (
    <main>
      {/* <Llama />git  */}
      <Home />
      <About />
      {ProjectsData.map((project) => (
        <Projects project={project} key={project.id} />
      ))}
      <Contact />
    </main>
  );
}
