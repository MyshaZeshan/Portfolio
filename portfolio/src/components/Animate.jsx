import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Computer from "./Computer.jsx";

const AnimatedComputer = () => {
  const group = useRef();

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
      scale={1.1}
      position={[0.8, 0.1, 0]}
      onPointerMove={handlePointerMove}
    >
      <Computer />
    </group>
  );
};

export default AnimatedComputer;