"use client";

import "./projects.scss";
import { ProjectsData } from "../../constants";
import Project from "../Project/project";
import { useState } from "react";

enum CarouselButton {
  Right = 0,
  Left = 1,
}

const Projects = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const totalSlides = ProjectsData.length;

  const handleCarouselButtonClick = (buttonType: CarouselButton) => {
    setCurrentSlideIndex((prev) => {
      switch (buttonType) {
        case CarouselButton.Right:
          return prev === totalSlides - 1 ? 0 : prev + 1;
        case CarouselButton.Left:
          return prev === 0 ? totalSlides - 1 : prev - 1;
        default:
          return prev;
      }
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-buffer"></div>
      <h2 className="heading-2 projects-heading" id="about">
        Projects
      </h2>
      <div className="projects-carousel-wrapper">
        <button
          onClick={() => handleCarouselButtonClick(CarouselButton.Left)}
          className="projects-slide-button projects-slide-button-previous"
        >
          Previous
        </button>
        <div className="projects-slides-wrapper">
          <div
            className="projects-carousel"
            style={{
              transition: "transform 0.3s ease",
              transform: `translateX(-${currentSlideIndex * 80}vw)`,
            }}
          >
            {ProjectsData.map((projectData, index) => (
              <div className="projects-slide" key={index}>
                <Project project={projectData} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => handleCarouselButtonClick(CarouselButton.Right)}
          className="projects-slide-button projects-slide-button-next"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Projects;
