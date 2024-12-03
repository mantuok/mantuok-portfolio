import Image from "next/image";
import styles from "./home.module.scss";
import Divider from "../Utils/divider";
import { NAV_ITEM } from "../../constants";

const Home = () => {
  return (
    <section className={styles["home"]}>
      <div className={styles["home-wrapper-left"]}>
        <h1 className={styles["heading-1"]}>Svetlana Eliseeva</h1>
        <h2 className={styles["heading-2"]}>Frontend Developer</h2>
        <div className={styles["link-wrapper"]}>
          <a className={styles["link-forward"]} href={NAV_ITEM.about.href}>
            Get To Know Me
          </a>
        </div>
      </div>
      <Divider />
      <div className={styles["home-wrapper-right"]}>
        <Image
          src="/img/SE_photo_big.png"
          alt="Svetlana Eliseeva"
          width={400}
          height={412}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default Home;
