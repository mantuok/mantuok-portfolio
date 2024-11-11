// import styles from "./page.module.css";
import Home from "../app/components/Home/home";
import About from "../app/components/About/about";
import Projects from "../app/components/Projects/projects";
import { ProjectsData } from "./constants";

export default function Page() {
  return (
    <main>
      <Home />
      <About />
      {ProjectsData.map((project) => (
        <Projects project={project} key={project.id} />
      ))}
    </main>
  );
}
