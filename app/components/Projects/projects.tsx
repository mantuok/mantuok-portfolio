import "./projects.scss";
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
    <section id="projects" className="projects">
      <div className="projects-buffer"></div>
      <h2 className="heading-2 projects-heading" id="about">
        Projects
      </h2>
      <div className="projects-wrapper-bottom">
        <div className="projects-wrapper-left">
          <div className="projects-image-wrapper">
            <Image
              className="projects-image"
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </div>
        </div>
        <Divider />
        <div className="projects-wrapper-right">
          <h3 className="heading-3 projects-title">{title}</h3>
          <p className="projects-text text-sm">{description}</p>
          <p className="projects-text text-sm">{skillset}</p>
          {github ? (
            <a className="button" href={github} target="_blank">
              <span className="button-text">Explore the Code</span>
            </a>
          ) : (
            ""
          )}
          {url ? (
            <a className="button" href={url} target="_blank">
              <span className="button-text">See It in Action</span>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
