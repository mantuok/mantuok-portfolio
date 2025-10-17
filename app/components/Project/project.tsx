import "./project.scss";
import Divider from "../Utils/divider";
import Image from "next/image";
import { useState } from "react";
import { useIsDesktop } from "@/app/hooks/useIsDesktop";
import { motion } from "framer-motion";

type ImageData = {
  src: string;
  width: number;
  height: number;
  alt: string;
  top?: string;
  left?: string;
  topMobile?: string;
  leftMobile?: string;
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
  const isDesktop = useIsDesktop();

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
          width={isDesktop ? image.width : image.width / 2}
          height={isDesktop ? image.height : image.height / 2}
          alt={image.alt}
          style={{
            top: `${isDesktop ? image.top : image.topMobile}`,
            left: `${isDesktop ? image.left : image.leftMobile}`,
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
    <motion.div
      id="project"
      className="project"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <div className="project-wrapper-bottom">
        <motion.div
          className="project-wrapper-left"
          variants={{
            hidden: { x: 40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="project-image-wrapper">{buildImages()}</div>
        </motion.div>
        <Divider />
        <motion.div
          className="project-wrapper-right"
          variants={{
            hidden: { x: -40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
