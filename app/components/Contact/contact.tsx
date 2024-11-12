import styles from "./contact.module.scss";
import Divider from "../Utils/divider";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={styles["contact"]}>
      <div id="contact" className={styles["contact-buffer"]}></div>
      <h2
        className={`${styles["heading-2"]} ${styles["contact-heading"]}`}
        id="contact"
      >
        Contact Me
      </h2>
      <div className={styles["contact-wrapper-bottom"]}>
        <div className={styles["contact-wrapper-left"]}>
          <h3 className={styles["heading-4"]}>You can find me in</h3>
          <div className={styles["contact-wrapper-social"]}>
            <a
              className={styles["button"]}
              href="https://www.linkedin.com/in/svetlana-eliseeva-783bb014/"
              target="_blank"
            >
              <Image
                className={styles["button-text"]}
                src="./img/social_linkedin.svg"
                width={65}
                height={65}
                alt="LinkedIn"
              />
            </a>
            <a
              className={styles["button"]}
              href="https://github.com/mantuok"
              target="_blank"
            >
              <Image
                className={styles["button-text"]}
                src="./img/social_github.svg"
                width={65}
                height={65}
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <Divider />
        <div className={styles["contact-wrapper-right"]}>
          <h3 className={styles["heading-4"]}>You can contact me at</h3>
          <a className={styles["button"]} href="mailto:mantuok@gmail.com">
            <span className={styles["button-text"]}>mantuok@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
