import styles from "./projects.module.scss";
import Divider from "../Utils/divider";
import Image from "next/image";

type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Project = {
  id: number;
  name: string;
  title: string;
  description: string;
  skillset: string;
  image: ImageData;
  url: string;
  github: string;
};

interface ProjectsProps {
  project: Project;
}

const Projects = ({ project }: ProjectsProps) => {
  const { title, description, image, skillset, url, github } = project;
  return (
    <section id="projects" className={styles["projects"]}>
      <div className={styles["projects-buffer"]}></div>
      <h2
        className={`${styles["heading-2"]} ${styles["projects-heading"]}`}
        id="about"
      >
        Projects
      </h2>
      <div className={styles["projects-wrapper-bottom"]}>
        <div className={styles["projects-wrapper-left"]}>
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        </div>
        <Divider />
        <div className={styles["projects-wrapper-right"]}>
          <h3 className={styles["heading-3"]}>{title}</h3>
          <p className={styles["projects-text"]}>{description}</p>
          <p className={styles["projects-text"]}>{skillset}</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
