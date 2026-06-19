import React from 'react'
import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Suspense } from "react";
import { AmbientLight, DirectionalLight } from 'three';
import {useMediaQuery} from 'react-responsive'
import { calculateSizes } from '../utils/CalculatrSizes.jsx';
import Target from '../components/Target.jsx';
import {Stars} from '@react-three/drei'


const HeroSection = () => {

    const small = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 769, maxWidth: 1024})
    const sizes = calculateSizes(small, isMobile, isTablet)
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        {/* Left Content */}
            <div className="md:hidden w-full mx-auto flex flex-col sm:mt-36 mt-15 mb-0 c-space ">
            <p className="orbitron-font  text-[clamp(70px,8vw,190px)] font-bold opacity-70 text-center tracking-widest text-white text-tight">
            HI I'M MYSHA
            </p>

            <p className="text-center sm:mt-0 text-white/70 text-lg tracking-wide font-light">
            Full Stack Developer & CS Student
            </p>
        </div>

        {/* Tablet & Desktop */}
        <div className="hidden md:flex absolute inset-0 z-10 items-center pointer-events-none">
            <div className="w-1/2 pl-20 lg:pl-32 pb-15 flex flex-col justify-center pointer-events-auto">
            <h1 className="orbitron-font text-3xl lg:text-7xl font-bold text-white">
                HI I'M
            </h1>
            <h1 className="orbitron-font text-7xl lg:text-8xl font-bold text-white">
                MYSHA
            </h1>
            <p className="text-white/70 text-2xl mt-4">
                Full Stack Developer & CS Student
            </p>
            </div>
        </div>

        <div className="w-full h-full absolute inset-0">
           
         <Canvas className='w-full h-full absolute inset-0'>
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 18]} />
            <Stars radius={100} depth={50} count={3000} factor={2} saturation={0.5} fade speed={1} /> 
            <HackerRoom //scale={0.1} 
            position={sizes.deskPosition} rotation = {[0,-Math.PI-0.2,0]}
            scale={sizes.deskScale}/>
            <group>
            <Target position={sizes.targetPosition} scale={sizes.targetScale}/>
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Suspense>
            
        </Canvas>
        </div>
    </section>
  )
}

export default HeroSection