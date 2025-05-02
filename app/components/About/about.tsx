import "./about.scss";
import Divider from "../Utils/divider";
import Skills from "../Skills/skills";

const About = () => {
  return (
    <section className="about">
      <div id="about" className="about-buffer"></div>
      <h2 className="heading-2 about-heading" id="about">
        About Me
      </h2>
      <div className="about-wrapper-bottom">
        <div className="about-wrapper-left">
          <Skills />
        </div>
        <Divider className="about-divider" />
        <div className="about-wrapper-right">
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
        </div>
      </div>
    </section>
  );
};

export default About;
