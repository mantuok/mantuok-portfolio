"use client";

import Image from "next/image";
import "./home.scss";
import Divider from "../Utils/divider";
import { NAV_ITEM } from "../../constants";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home">
      <motion.div
        className="home-wrapper-left"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="heading-1">Svetlana Eliseeva</h1>
        <h2 className="heading-2">Frontend Developer</h2>
        <div className="link-wrapper">
          <a className="link-forward" href={NAV_ITEM.about.href}>
            Get To Know Me
          </a>
        </div>
      </motion.div>
      <Divider />
      <motion.div
        className="home-wrapper-right"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Image
          // src="/img/SE_photo_big.png"
          className="home-image"
          src="/img/SE_photo_v2.jpg"
          alt="Svetlana Eliseeva"
          width={412}
          height={412}
          layout="responsive"
          style={{
            maxWidth: "400px",
            width: "100%",
            height: "auto",
          }}
        />
      </motion.div>
    </section>
  );
};

export default Home;
