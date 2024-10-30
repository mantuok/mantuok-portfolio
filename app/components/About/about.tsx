import styles from "./about.module.scss";
import Divider from "../Utils/divider";

const About = () => {
  return (
    <section className={styles["about"]}>
      <h2 className={styles["heading-2"]} id="about">
        About Me
      </h2>
      <div className={styles["about-wrapper-left"]}>Skills</div>
      <Divider />
      <div>About</div>
    </section>
  );
};

export default About;
