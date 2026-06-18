import React from 'react'
import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Suspense } from "react";
import { AmbientLight, DirectionalLight } from 'three';
import { useControls,Leva } from 'leva';

const HeroSection = () => {
    const x = useControls('HackerRoom',{
        positionX:{
            value:2.5,
            min:-10,
            max:10
        },
        positionY:{
            value:2.5,
            min:-10,
            max:10
        },
        positionZ:{
            value:2.5,
            min:-10,
            max:10
        }
    })
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="orbitron-font  fading-text text-[clamp(70px,8vw,190px)] font-bold opacity-10 text-center tracking-widest text-white select-none leading-none whitespace-nowrap 
            ">
            HI I'M MYSHA
            </p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Leva/>
         <Canvas className='w-full h-full absolute inset-0'>
            <Suspense fallback={<CanvasLoader/>}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom //scale={0.1} 
            position={[0,-8,0]} rotation = {[0,280,0]}
            scale={[x.positionX,x.positionY,x.positionZ]}/>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
            </Suspense>
            
        </Canvas>
        </div>
    </section>
  )
}

export default HeroSection