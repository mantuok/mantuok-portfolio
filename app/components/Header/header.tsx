"use client";

import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { NAV_ITEMS } from "./../../constants";

const Header = () => {
  const [isVisible, setVisible] = useState(false);

  const renderLink = (id: string, label: string) => {
    return (
      <li key={id}>
        <a className={styles["link"]}>{label}</a>
      </li>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > window.innerHeight) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles["header"]} ${isVisible ? styles.visible : ""}`}
    >
      <nav>
        <ul className={styles["navigation-list"]}>
          {NAV_ITEMS.map((item) => renderLink(item.href, item.label))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
