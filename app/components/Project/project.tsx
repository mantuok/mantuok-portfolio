import "./project.scss";
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

const Project = ({ project }: ProjectsProps) => {
  const { title, description, image, skillset, url, github } = project;

  return (
    <div id="project" className="project">
      <div className="project-wrapper-bottom">
        <div className="project-wrapper-left">
          <div className="project-image-wrapper">
            <Image
              className="project-image"
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
            />
          </div>
        </div>
        <Divider />
        <div className="project-wrapper-right">
          <h3 className="heading-3 project-title">{title}</h3>
          <p className="project-text text-sm">{description}</p>
          <p className="project-text text-sm">{skillset}</p>
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
    </div>
  );
};

export default Project;
