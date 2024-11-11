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
  skillset: (string | JSX.Element)[];
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
          <div className={styles["projects-image-wrapper"]}>
            <Image
              className={styles["projects-image"]}
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </div>
        </div>
        <Divider />
        <div className={styles["projects-wrapper-right"]}>
          <h3 className={styles["heading-3"]}>{title}</h3>
          <p className={`${styles["projects-text"]} ${styles["text-sm"]}`}>
            {description}
          </p>
          <p className={`${styles["projects-text"]} ${styles["text-sm"]}`}>
            {skillset}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
