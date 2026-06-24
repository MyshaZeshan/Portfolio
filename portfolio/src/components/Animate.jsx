import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Center } from '@react-three/drei';
import Computer from './Computer';
import { useEffect } from 'react';

const Animate = () => {
  const modelRef = useRef();
  const isDragging = useRef(false);
  const previousX = useRef(0);
  const dragRotationY = useRef(0);
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    // hover tilt (mouse position based) + drag rotation
    modelRef.current.rotation.y = mouse.current.x * 0.15 + dragRotationY.current;
    modelRef.current.rotation.x = mouse.current.y * 0.1;
  });

  const handlePointerDown = (e) => {
    isDragging.current = true;
    previousX.current = e.clientX;
  };

  const handlePointerMove = (e) => {
    // normalize mouse position to -1 to 1 range
    mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;

    if (!isDragging.current) return;
    const deltaX = e.clientX - previousX.current;
    dragRotationY.current += deltaX * 0.005;
    previousX.current = e.clientX;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <group ref={modelRef} scale={1.5} position={[0, -1.2, 0]}>
      <Computer />
    </group>
  );
};

export default Animate;


