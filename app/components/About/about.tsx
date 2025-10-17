"use client";

import "./about.scss";
import Divider from "../Utils/divider";
import SkillCloud from "../SkillCloud/skillCloud";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about"
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
      <div id="about" className="about-buffer"></div>
      <h2 className="heading-2 about-heading" id="about">
        About Me
      </h2>
      <div className="about-wrapper-bottom">
        <motion.div
          className="about-wrapper-left"
          variants={{
            hidden: { x: 40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <SkillCloud />
        </motion.div>
        <Divider className="about-divider" />
        <motion.div
          className="about-wrapper-right"
          variants={{
            hidden: { x: -40, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="about-text">
            I am a passionate Frontend developer with vast corporate experience
            as an IT consultant and a strong background in React and Typescript
            for the last 5 years, seeking opportunities to apply my skills and
            creativity to create impactful web experiences.
          </p>
          <a
            className="button"
            href="/Svetlana_Eliseeva_CV.pdf"
            download="/Svetlana_Eliseeva_CV.pdf"
          >
            <span className="button-text">Download CV</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
