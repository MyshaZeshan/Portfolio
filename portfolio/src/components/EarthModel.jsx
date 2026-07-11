import { useRef } from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import { Group, MeshStandardMaterial, SphereGeometry } from "three";
import { TextureLoader } from "three";

const EarthModel = () => {
    const EarthRef = useRef();
    const cloudRef = useRef();

    const [normalMap, cloudMap, specularMap, dayMap] = useLoader(TextureLoader, 
        ["/textures/EarthT/2k_earth_normal_map.jpg",
        "/textures/EarthT/2k_earth_clouds.jpg",
        "/textures/EarthT/2k_earth_specular_map.jpg",
        "/textures/EarthT/earth_atmos_2048.jpg"]);

        useFrame(() => {
            EarthRef.current.rotation.y += 0.0015;
            cloudRef.current.rotation.y += 0.0018;
});

return(
    <group>
        <mesh ref={EarthRef}>
            <sphereGeometry args={[4, 74, 74]}/>
            <meshPhongMaterial
            map={dayMap}
            normalMap={normalMap}
            roughnessMap = {specularMap}
            roughness={0.4}
            metalness={0.1}
            />
        </mesh>

        <mesh ref={cloudRef}>
            <sphereGeometry args={[4.1, 74, 74]}/>
            <meshPhongMaterial
            map={cloudMap}
            transparent={true}
            opacity={0.4}
            />
        </mesh>
    </group>
);
};

export default EarthModel;