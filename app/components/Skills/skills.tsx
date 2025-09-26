import Image from "next/image";
import "./skills.scss";
import { SkillsIcons } from "../../constants";

const Skills: React.FC = () => {
  return (
    <div className="skills-cloud">
      {SkillsIcons.map((icon) => {
        return (
          <div
            key={icon.id}
            className={`icon-wrapper icon-wrapper-${icon.label}`}
            style={{
              top: icon.position.top,
              left: icon.position.left,
            }}
          >
            <svg className="icon-box" width="80" height="80">
              <rect x="5" y="5" width="70" height="70" />
            </svg>
            <Image
              src={icon.path}
              width={50}
              height={50}
              alt={`Icon ${icon.label}`}
              className={`icon-${icon.label}`}
            />
            <span className="icon-label">{icon.label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
