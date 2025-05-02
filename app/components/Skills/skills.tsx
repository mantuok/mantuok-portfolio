import Image from "next/image";
import "./skills.scss";
import { SkillsIcons } from "../../constants";

// interface Position {
//   top: number;
//   left: number;
// }

const Skills: React.FC = () => {
  // const icons = [
  //   "/img/icon_chakraui.svg",
  //   "/img/icon_reactjs.svg",
  //   "/img/icon_nodejs.svg",
  //   "/img/icon_css3.svg",
  //   "/img/icon_materialui.svg",
  //   "/img/icon_python.svg",
  //   "/img/icon_html5.svg",
  //   "/img/icon_sass.svg",
  //   "/img/icon_nextjs.svg",
  //   "/img/icon_typescript.svg",
  //   "/img/icon_figma.svg",
  //   "/img/icon_jest.svg",
  //   "/img/icon_bootstrap5.svg",
  // ];

  // const radius = 20;
  // const containerSize = 500;

  // const placedPositions: Position[] = [];

  // const getRandomPosition = (index: number, totalIcons: number): Position => {
  //   let position: Position;
  //   let attempts = 0;
  //   const maxAttempts = 50;

  //   do {
  //     const angle = index * ((Math.PI * 2) / totalIcons) + Math.random() * 0.5; // Slight randomness
  //     const distFromCenter =
  //       radius - 45 + Math.random() * (containerSize / 2 - radius); // Vary distance

  //     const left =
  //       50 + (distFromCenter / containerSize) * 100 * Math.cos(angle);
  //     const top = 50 + (distFromCenter / containerSize) * 100 * Math.sin(angle);

  //     position = { top, left };

  //     attempts++;
  //   } while (
  //     attempts < maxAttempts &&
  //     placedPositions.some(
  //       (pos) =>
  //         Math.hypot(pos.left - position.left, pos.top - position.top) < radius
  //     )
  //   );

  //   placedPositions.push(position);
  //   return position;
  // };

  return (
    <div className="skills-cloud">
      {SkillsIcons.map((icon) => {
        return (
          <Image
            key={icon.id}
            src={icon.path}
            width={50}
            height={50}
            alt={`Icon ${icon.label}`}
            className="icon"
            style={{
              top: icon.position.top,
              left: icon.position.left,
            }}
          />
        );
      })}
    </div>
  );
};

export default Skills;
