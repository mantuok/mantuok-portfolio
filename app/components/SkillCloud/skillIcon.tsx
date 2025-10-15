"use client";

import { Html } from "@react-three/drei/web";
import * as THREE from "three";

interface SkillIconProps {
  icon: string;
  position: THREE.Vector3;
}

const SkillIcon = ({ icon, position }: SkillIconProps) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshBasicMaterial visible={false} />
      <Html center distanceFactor={5.5} style={{ zIndex: 5! }}>
        <img src={icon} alt="skill icon" style={{ width: 50, height: 50 }} />
      </Html>
    </mesh>
  );
};

export default SkillIcon;
