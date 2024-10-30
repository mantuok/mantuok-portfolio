import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <nav>
        <ul className={styles["navigation-list"]}>
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
