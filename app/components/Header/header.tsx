"use client";

import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import { NAV_ITEM } from "./../../constants";

const Header = () => {
  const [isVisible, setVisible] = useState(false);

  const renderLink = (id: string, href: string, label: string) => {
    return (
      <li key={id}>
        <a className={styles["link"]} href={href}>
          {label}
        </a>
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
          {Object.entries(NAV_ITEM).map(([key, item]) =>
            renderLink(key, item.href, item.label)
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
