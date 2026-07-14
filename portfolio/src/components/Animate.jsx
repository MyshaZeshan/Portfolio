import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Computer from "./Computer.jsx";
import {calculateSizes} from '../utils/CalculatrSizes.jsx';
import { useMediaQuery } from "react-responsive";

const AnimatedComputer = () => {
  const group = useRef();
  const isXSmall = useMediaQuery({ maxWidth: 380 });
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  console.log({ isXSmall, isSmall, isMobile, isTablet, width: window.innerWidth });

  const targetRotation = useRef({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    targetRotation.current.x = -e.pointer.y * 0.12;
    targetRotation.current.y = e.pointer.x * 0.18;
  };

  useFrame(() => {
    if (!group.current) return;

    group.current.rotation.x +=
      (targetRotation.current.x - group.current.rotation.x) * 0.08;

    group.current.rotation.y +=
      (targetRotation.current.y - group.current.rotation.y) * 0.08;
  });

  return (
    <group
      ref={group}
      scale={calculateSizes(isXSmall, isSmall, isMobile, isTablet).targetScales}
      position={calculateSizes(isXSmall, isSmall, isMobile, isTablet).targetPositions}
      onPointerMove={handlePointerMove}
    >
      <Computer />
    </group>
  );
};

export default AnimatedComputer;