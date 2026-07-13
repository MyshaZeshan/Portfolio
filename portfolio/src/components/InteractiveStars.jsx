import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function InteractiveStars() {
  const points = useRef();
  const { mouse } = useThree();

  const STAR_COUNT = 400; // fewer stars = each one reads clearly

  // Generate stars once
  const { positions, originalPositions, sizes } = useMemo(() => {
    const positions = new Float32Array(STAR_COUNT * 3);
    const originals = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      const x = (Math.random() - 0.5) * 60;
      const y = (Math.random() - 0.5) * 35;
      const z = (Math.random() - 0.5) * 30;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originals[i * 3] = x;
      originals[i * 3 + 1] = y;
      originals[i * 3 + 2] = z;

      // vary star size a bit so it doesn't look like a uniform grid
      sizes[i] = 0.02 + Math.random() * 0.03;
    }

    return { positions, originalPositions: originals, sizes };
  }, []);

  useFrame((state) => {
    const array = points.current.geometry.attributes.position.array;

    // Mouse position converted to world space
    const mouseX = mouse.x * 15;
    const mouseY = mouse.y * 8;

    for (let i = 0; i < STAR_COUNT; i++) {
      const ix = i * 3;

      let x = array[ix];
      let y = array[ix + 1];

      const ox = originalPositions[ix];
      const oy = originalPositions[ix + 1];

      const dx = x - mouseX;
      const dy = y - mouseY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      // Bigger repel radius + stronger force = dramatic reaction near cursor
      const REPEL_RADIUS = 6; // was 3
      if (distance < REPEL_RADIUS) {
        // smoother falloff curve (squared) so stars right next to cursor
        // get flung harder, ones near the edge barely move
        const t = (REPEL_RADIUS - distance) / REPEL_RADIUS; // 0 -> 1
        const force = t * t * 0.9; // was 0.04, big jump

        x += (dx / distance) * force;
        y += (dy / distance) * force;
      }

      // Smooth return (slightly slower so the "fling" reads as movement
      // instead of snapping back instantly)
      x += (ox - x) * 0.05;
      y += (oy - y) * 0.05;

      // Tiny floating animation
      y += Math.sin(state.clock.elapsedTime + i) * 0.001;

      array[ix] = x;
      array[ix + 1] = y;
    }

    points.current.geometry.attributes.position.needsUpdate = true;

    // Slow rotation
    points.current.rotation.y += 0.0002;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#ffffff"
        size={0.14}
        sizeAttenuation
        transparent
        opacity={0.95}
      />
    </points>
  );
}