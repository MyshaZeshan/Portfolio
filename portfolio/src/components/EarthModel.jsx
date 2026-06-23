import { useRef } from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import { Group, MeshStandardMaterial, SphereGeometry } from "three";
import { TextureLoader } from "three";

const EarthModel = () => {
    const EarthRef = useRef();
    const cloudRef = useRef();

    const [dayMap, normalMap, specularMap, cloudMap] = useLoader(TextureLoader, 
        ["/public/textures/EarthT/2k_earth_normal_map.tif",
        "/public/textures/EarthT/2k_earth_clouds.jpg",
        "/public/textures/EarthT/2k_earth_specular_map.tif",
        "/public/textures/EarthT/earth_atmos_2048.jpg"]);

        useFrame(() => {
            earthRef.current.rotation.y += 0.0015;
            cloudRef.current.rotation.y += 0.0018;
});

return(
    <group>
        <Mesh ref={earthRef}>
            <SphereGeometry args={[2, 64, 64]}/>
            <MeshStandardMaterial
            map={dayMap}
            normalMap={normalMap}
            specularMap={specularMap}
            shininess={15}
            />
        </Mesh>

        <Mesh ref={cloudRef}>
            <SphereGeometry args={[2.05, 64, 64]}/>
            <MeshStandardMaterial
            map={cloudMap}
            transparent={true}
            opacity={0.35}
            />
        </Mesh>
    </group>
);
};

export default EarthModel;