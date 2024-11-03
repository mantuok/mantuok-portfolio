import styles from "./skills.module.scss";
import {
  FaReact,
  FaNode,
  FaPython,
  FaHtml5,
  FaJs,
  FaSass,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiJest,
  SiBootstrap,
} from "react-icons/si";

const Skills = () => {
  const icons = [
    FaReact,
    FaNode,
    FaPython,
    FaHtml5,
    FaJs,
    FaSass,
    SiNextdotjs,
    SiTypescript,
    SiFigma,
    SiJest,
    SiBootstrap,
  ];

  // interface Position {
  //   top: number; // in pixels
  //   left: number; // in pixels
  // }

  const getFlowerPosition = (index: number, totalIcons: number) => {
    const k = 7; // Adjust this to change the petal count
    const a = 30; // Scaling factor for the radius of each icon
    const angle = index * ((Math.PI * 2) / totalIcons); // Evenly distribute around circle
    const r = a * Math.sin(k * angle); // Adjust 'a' and 'k' for shape of flower pattern

    // Calculate positions in percentage to fit inside the container
    const left = 50 + r * Math.cos(angle); // X position
    const top = 50 + r * Math.sin(angle); // Y position

    return {
      top: `${top}%`,
      left: `${left}%`,
    };
  };

  // const placedPositions: { top: number; left: number }[] = []; // Store placed positions

  return (
    <div className={styles["skills-cloud"]}>
      {icons.map((IconComponent, index) => {
        const position = getFlowerPosition(index, icons.length);
        return (
          <IconComponent
            key={index}
            className={styles.icon}
            style={{
              top: position.top,
              left: position.left,
            }}
          />
        );
      })}
    </div>
  );
};

export default Skills;
