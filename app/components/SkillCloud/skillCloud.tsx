"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useState } from "react";
import { SkillsIcons } from "@/app/constants";
import RotatingGroup from "./rotatingGroup";

const SkillCloud = () => {
  const [isDragging, setIsDragging] = useState(false);

  const cloudRadius = 3.3;

  const positions = useMemo(() => {
    return SkillsIcons.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i) / SkillsIcons.length);
      const theta = Math.sqrt(SkillsIcons.length * Math.PI) * phi;
      return new THREE.Vector3().setFromSphericalCoords(
        cloudRadius,
        phi,
        theta
      );
    });
  }, []);

  return (
    <Canvas
      style={{ height: "400px", width: "100%" }}
      camera={{ position: [0, 0, 6] }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      <RotatingGroup positions={positions} isDragging={isDragging} />
      <OrbitControls
        enableZoom={false}
        autoRotate={false}
        onStart={() => setIsDragging(true)}
      />
    </Canvas>
  );
};

export default SkillCloud;
