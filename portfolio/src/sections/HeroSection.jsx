import React from 'react'
import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import HackerRoom from '../components/HackerRoom.jsx';
const herosection = () => {
  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="orbitron-font  fading-text text-[clamp(70px,8vw,190px)] font-bold opacity-10 text-center tracking-widest text-white select-none leading-none whitespace-nowrap 
            ">
            HI I'M MYSHA
            </p>
        </div>

        <div className="w-full h-full absolute inset-0">
            <Canvas className='w-full h-full'>
                <ambientLight intensity={2} />
                <directionalLight position={[1,1,1]} />
                <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                <HackerRoom/>
            </Canvas>
        </div>
    </section>
  )
}

export default herosection