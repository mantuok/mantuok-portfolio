import "./project.scss";
import Divider from "../Utils/divider";
import Image from "next/image";
import { useState } from "react";

type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
  top?: string;
  left?: string;
  zIndex?: number;
  transform?: string;
};

type Project = {
  id: number;
  name: string;
  title: string;
  description: string;
  skillset: (string | JSX.Element)[];
  images: ImageData[];
  url: string;
  github: string;
};

interface ProjectsProps {
  project: Project;
}

const Project = ({ project }: ProjectsProps) => {
  const { title, description, images, skillset, url, github } = project;
  const [hoveredIndex, setHoveredIndex] = useState<null | number>(null);

  const handleImageClick = (index: number) => {
    setHoveredIndex(index);
  };

  const buildImages = () => {
    return images.map((image, index) => {
      const isActive = hoveredIndex === index;
      return (
        <Image
          key={index}
          className="project-image"
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          style={{
            top: image.top || "-30px",
            left: image.left || "-30px",
            zIndex: isActive ? 99 : image.zIndex,
            transition:
              "box-shadow 0.3s ease, transform 0.3s ease, opacity 0.3s ease",
            boxShadow: isActive
              ? "0 15px 30px rgba(0,0,0,0.4)"
              : "0 4px 10px rgba(0,0,0,0.3)",
            transform: isActive ? "scale(1.03)" : "scale(1)",
            opacity: isActive ? 1 : 0.95,
          }}
          onClick={() => handleImageClick(index)}
        />
      );
    });
  };

  return (
    <div id="project" className="project">
      <div className="project-wrapper-bottom">
        <div className="project-wrapper-left">
          <div className="project-image-wrapper">{buildImages()}</div>
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
