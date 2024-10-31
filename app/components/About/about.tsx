import styles from "./about.module.scss";
import Divider from "../Utils/divider";

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
        <div className={styles["about-wrapper-left"]}>Skills</div>
        <Divider />
        <div>About</div>
      </div>
    </section>
  );
};

export default About;
