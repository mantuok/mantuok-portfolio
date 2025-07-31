"use client";

import "./projects.scss";
import { ProjectsData } from "../../constants";
import Project from "../Project/project";
import { useEffect, useState } from "react";
import { useIsDesktop } from "@/app/hooks/useIsDesktop";

enum CarouselButton {
  Right = 0,
  Left = 1,
}

const Projects = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  const [isTransitionEnabled, setTransitionEnabled] = useState(true);
  const totalSlides = ProjectsData.length;
  const isDesktop = useIsDesktop();
  const slideWidth = isDesktop ? 80 : 70;

  const getSlides = () => {
    const slides = [...ProjectsData];
    const first = slides[0];
    const last = slides[totalSlides - 1];
    return [last, ...slides, first];
  };

  const handleCarouselButtonClick = (buttonType: CarouselButton) => {
    setCurrentSlideIndex((prev) => {
      switch (buttonType) {
        case CarouselButton.Right:
          return prev + 1;
        case CarouselButton.Left:
          return prev - 1;
        default:
          return prev;
      }
    });
  };

  const handleTransitionEnd = () => {
    if (currentSlideIndex === 0) {
      setTransitionEnabled(false);
      setCurrentSlideIndex(totalSlides);
    } else if (currentSlideIndex === totalSlides + 1) {
      setTransitionEnabled(false);
      setCurrentSlideIndex(1);
    }
  };

  useEffect(() => {
    if (!isTransitionEnabled) {
      const timerId = setTimeout(() => setTransitionEnabled(true), 100);
      return () => clearTimeout(timerId);
    }
  }, [isTransitionEnabled]);

  return (
    <section id="projects" className="projects">
      <div className="projects-buffer"></div>
      <h2 className="heading-2 projects-heading" id="about">
        Projects
      </h2>
      <div className="projects-carousel-wrapper">
        <div className="projects-slide-button-wrapper">
          <button
            onClick={() => handleCarouselButtonClick(CarouselButton.Left)}
            className="projects-slide-button projects-slide-button-previous"
            aria-label="previous slide"
          />
        </div>
        <div className="projects-slides-wrapper">
          <div
            className="projects-carousel"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transition: isTransitionEnabled ? "transform 0.3s ease" : "none",
              transform: `translateX(-${currentSlideIndex * slideWidth}vw)`,
            }}
          >
            {getSlides().map((projectData, index) => (
              <div className="projects-slide" key={index}>
                <Project project={projectData} />
              </div>
            ))}
          </div>
        </div>
        <div className="projects-slide-button-wrapper">
          <button
            onClick={() => handleCarouselButtonClick(CarouselButton.Right)}
            className="projects-slide-button projects-slide-button-next"
            aria-label="next slide"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
