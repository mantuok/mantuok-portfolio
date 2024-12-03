import styles from "./about.module.scss";
import Divider from "../Utils/divider";
import Skills from "../Skills/skills";

const About = () => {
  return (
    <section className={styles["about"]}>
      <div id="about" className={styles["about-buffer"]}></div>
      <h2
        className={`${styles["heading-2"]} ${styles["about-heading"]}`}
        id="about"
      >
        About Me
      </h2>
      <div className={styles["about-wrapper-bottom"]}>
        <div className={styles["about-wrapper-left"]}>
          <Skills />
        </div>
        <Divider className="about-divider" />
        <div className={styles["about-wrapper-right"]}>
          <p className={styles["about-text"]}>
            I am a passionate Frontend developer with vast corporate experience
            as an IT consultant and a strong background in React and Typescript
            for the last 5 years, seeking opportunities to apply my skills and
            creativity to create impactful web experiences.
          </p>
          <a
            className={styles["button"]}
            href="/Svetlana_Eliseeva_CV.pdf"
            download="/Svetlana_Eliseeva_CV.pdf"
          >
            <span className={styles["button-text"]}>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
