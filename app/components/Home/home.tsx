import Image from "next/image";
import styles from "./home.module.scss";
import Divider from "../Utils/divider";

const Home = () => {
  return (
    <section className={styles["home"]}>
      <div>
        <h1 className={`${styles["heading-1"]} ${styles["name"]}`}>
          Svetlana Eliseeva
        </h1>
        <h2 className={`${styles["heading-2"]} ${styles["role"]}`}>
          Front-end Developer
        </h2>
      </div>
      <Divider />
      <div>
        <Image
          src="/img/SE_photo_big.png"
          alt="Svetlana Eliseeva"
          width={400}
          height={412}
        />
      </div>
      <div></div>
    </section>
  );
};

export default Home;
