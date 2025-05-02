import Image from "next/image";
import "./home.scss";
import Divider from "../Utils/divider";
import { NAV_ITEM } from "../../constants";

const Home = () => {
  return (
    <section className="home">
      <div className="home-wrapper-left">
        <h1 className="heading-1">Svetlana Eliseeva</h1>
        <h2 className="heading-2">Frontend Developer</h2>
        <div className="link-wrapper">
          <a className="link-forward" href={NAV_ITEM.about.href}>
            Get To Know Me
          </a>
        </div>
      </div>
      <Divider />
      <div className="home-wrapper-right">
        <Image
          src="/img/SE_photo_big.png"
          alt="Svetlana Eliseeva"
          width={400}
          height={412}
          layout="responsive"
          style={{
            maxWidth: "400px",
            width: "100%",
            height: "auto",
          }}
        />
      </div>
    </section>
  );
};

export default Home;
