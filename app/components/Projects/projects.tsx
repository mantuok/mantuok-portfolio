import styles from "./about.module.scss";
import Divider from "../Utils/divider";

const Projects = () => {
  return (
    <section className={styles["projects"]}>
      <div id="about" className={styles["projects-buffer"]}></div>
      <h2
        className={`${styles["heading-2"]} ${styles["projects-heading"]}`}
        id="about"
      >
        Projects
      </h2>
      <div className={styles["projects-wrapper-bottom"]}>
        <div className={styles["projects-wrapper-left"]}></div>
        <Divider />
        <div className={styles["projects-wrapper-right"]}>
          <p className={styles["projects-text"]}>
            I am a passionate Frontend developer with vast corporate experience
            as an IT consultant and a strong background in React and Typescript
            for the last 5 years, seeking opportunities to apply my skills and
            creativity to create impactful web experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
