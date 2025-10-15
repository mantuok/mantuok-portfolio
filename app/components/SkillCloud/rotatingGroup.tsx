"use client";

import * as THREE from "three";
import { SkillsIcons } from "@/app/constants";
import SkillIcon from "./skillIcon";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

interface RotatingGroupProps {
  isDragging: boolean;
  positions: THREE.Vector3[];
}

const RotatingGroup = ({ positions, isDragging }: RotatingGroupProps) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && !isDragging) {
      groupRef.current.rotation.y += 0.002;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {SkillsIcons.map((skill, i) => (
        <SkillIcon key={skill.id} icon={skill.path} position={positions[i]} />
      ))}
    </group>
  );
};

export default RotatingGroup;
