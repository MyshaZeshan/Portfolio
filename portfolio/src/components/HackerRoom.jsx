import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Petal = ({ rotation }) => {
  return (
    <mesh rotation={[0, 0, rotation]} position={[0.6, 0, 0]}>
      <sphereGeometry args={[0.4, 16, 16]} />
      <meshStandardMaterial color="#C084FC" />
    </mesh>
  )
}

const Flower = () => {
  const flowerRef = useRef()

  useFrame(() => {
    flowerRef.current.rotation.y += 0.005  // slow spin
  })

  return (
    <group ref={flowerRef}>
      {/* 6 petals evenly spaced */}
      <Petal rotation={0} />
      <Petal rotation={Math.PI / 3} />        {/* 60 degrees */}
      <Petal rotation={(Math.PI / 3) * 2} />  {/* 120 degrees */}
      <Petal rotation={Math.PI} />            {/* 180 degrees */}
      <Petal rotation={(Math.PI / 3) * 4} />  {/* 240 degrees */}
      <Petal rotation={(Math.PI / 3) * 5} />  {/* 300 degrees */}

      {/* center */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#FFD700" />
      </mesh>
    </group>
  )
}

export default Flower