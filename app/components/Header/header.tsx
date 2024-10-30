import styles from "./header.module.scss";
import { NAV_ITEMS } from "./../../constants";

const Header = () => {
  const renderLink = (label: string) => {
    return (
      <li>
        <a className={styles["link"]}>{label}</a>
      </li>
    );
  };

  return (
    <header className={styles["header"]}>
      <nav>
        <ul className={styles["navigation-list"]}>
          {NAV_ITEMS.map((item) => renderLink(item.label))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
