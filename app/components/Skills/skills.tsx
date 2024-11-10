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
import { IconType } from "react-icons"; // Type for imported icon components

// Define position type
interface Position {
  top: number;
  left: number;
}

const Skills: React.FC = () => {

  const icons = [
    "/img/icon_chakraui.svg",
    "/img/icon_reactjs.svg",
    "/img/icon_nodejs.svg",
    "/img/icon_css3.svg",
    "/img/icon_materialui.svg",
    "/img/icon_python.svg",
    "/img/icon_html5.svg",
    "/img/icon_sass.svg",
    "/img/icon_nextjs.svg",
    "/img/icon_typescript.svg",
    "/img/icon_figma.svg",
    "/img/icon_jest.svg",
    "/img/icon_bootstrap5.svg",
  ];

  // const icons: IconType[] = [
  //   FaReact,
  //   FaNode,
  //   FaPython,
  //   FaHtml5,
  //   FaJs,
  //   FaSass,
  //   SiNextdotjs,
  //   SiTypescript,
  //   SiFigma,
  //   SiJest,
  //   SiBootstrap,
  // ];

  const radius = 20; // Control the spread of icons
  const containerSize = 500; // Size of the container in pixels

  // Store placed positions to check for overlaps
  const placedPositions: Position[] = [];

  const getRandomPosition = (index: number, totalIcons: number): Position => {
    let position: Position;
    let attempts = 0;
    const maxAttempts = 50;

    // Loop to find a non-overlapping position
    do {
      const angle = index * ((Math.PI * 2) / totalIcons) + Math.random() * 0.5; // Slight randomness
      const distFromCenter = (radius - 45) + Math.random() * (containerSize / 2 - radius); // Vary distance

      // Calculate position with random angle and distance
      const left = 50 + (distFromCenter / containerSize) * 100 * Math.cos(angle);
      const top = 50 + (distFromCenter / containerSize) * 100 * Math.sin(angle);

      position = { top, left };

      // Check for overlap with existing icons
      attempts++;
    } while (
      attempts < maxAttempts &&
      placedPositions.some(
        (pos) =>
          Math.hypot(pos.left - position.left, pos.top - position.top) < radius
      )
    );

    placedPositions.push(position); // Store position to check future overlaps
    return position;
  };

  return (
    <div className={styles["skills-cloud"]}>
      {icons.map((path, index) => {
        const position = getRandomPosition(index, icons.length);
        return (
          <img
            key={index}
            src={path}
            alt={`Icon ${index}`}
            className={styles["icon"]}
            style={{
              top: `${position.top}%`,
              left: `${position.left}%`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Skills;

      // {/* {icons.map((IconComponent, index) => {
      //   const position = getRandomPosition(index, icons.length);
      //   return (
      //     <IconComponent
      //       key={index}
      //       className={styles.icon}
      //       style={{
      //         top: `${position.top}%`,
      //         left: `${position.left}%`,
      //       }}
      //     />
      //   );
      // })} */}