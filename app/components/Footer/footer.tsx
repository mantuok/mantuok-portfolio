import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <a className={styles["footer-button-up"]} href="#">
        <svg
          className={styles["footer-icon-up"]}
          width="25"
          height="25"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4412 3.42691L0 19.8667L2.06208 21.9302L17.4723 6.52004L32.8985 21.9463L34.9621 19.8842L18.5033 3.42691C18.2298 3.15352 17.859 2.99993 17.4723 2.99993C17.0856 2.99993 16.7147 3.15352 16.4412 3.42691Z"
            fill="#3C6679"
          />
          <path
            d="M16.469 15.2619L0.02771 31.7017L2.08979 33.7652L17.5 18.355L32.9262 33.7812L34.9898 31.7192L18.531 15.2619C18.2576 14.9885 17.8867 14.8349 17.5 14.8349C17.1133 14.8349 16.7424 14.9885 16.469 15.2619Z"
            fill="#3C6679"
          />
        </svg>
      </a>
      <a
        className={`${styles["button"]} ${styles["button-footer"]}`}
        href="https://github.com/mantuok/mantuok-portfolio"
        target="_blank"
      >
        <span
          className={`${styles["button-text"]} ${styles["button-text-footer"]}`}
        >
          Explore This Code
        </span>
      </a>
    </footer>
  );
};

export default Footer;
