import React from 'react'
import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Suspense } from "react";
import { AmbientLight, DirectionalLight } from 'three';
import {useMediaQuery} from 'react-responsive';
import { calculateSizes } from '../utils/CalculatrSizes.jsx';
import InteractiveStars from '../components/InteractiveStars.jsx';


const HeroSection = () => {

    const small = useMediaQuery({maxWidth: 440})
    const isMobile = useMediaQuery({maxWidth: 768})
    const isTablet = useMediaQuery({minWidth: 769, maxWidth: 1024})
    const sizes = calculateSizes(small, isMobile, isTablet)
  return (
    <section className='min-h-screen w-full flex flex-col relative' id="home">
    <img 
    src="/assets/stars.png" 
    alt="background" 
    className='absolute inset-0 w-full h-full object-cover z-0'
    />

    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
<div className="flex flex-col items-center text-center max-md:items-start max-md:text-left">

    {/* Mobile heading */}
    <div className="md:hidden flex flex-col items-start orbitron-font font-bold tracking-widest leading-[0.9] pl-2">
    <span className="text-[clamp(40px,11vw,80px)] text-white opacity-80">HI I'M</span>
    <span className="text-[clamp(55px,15vw,120px)] text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]">
        MYSHA
    </span>
    </div>

    {/* Desktop heading */}
    <h1 className="hidden md:block orbitron-font text-6xl lg:text-6xl font-bold text-white/90 leading-none tracking-wide">
    HI I'M
    </h1>
    <h1 className="hidden md:block orbitron-font text-7xl lg:text-[7rem] font-bold bg-gradient-to-r text-white via-fuchsia-100 to-purple-100 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.45)] leading-none mt-2">
    MYSHA ZESHAN
    </h1>

    <p className="max-w-2xl text-white/70 text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 tracking-wide font-light max-md:pl-2">
    Computer Science student specializing in full-stack development, crafting modern web applications with clean code and intuitive user experiences.
    </p>

    <div className="flex gap-4 items-center mt-8 max-md:pl-2 md:justify-center">
    <a href="/assets/Mysha.pdf" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
        <button className="px-8 py-3 rounded-full
            border border-white/30
            bg-white/5 backdrop-blur-sm
            hover:bg-white/10 hover:border-white/50 hover:scale-105
            transition-all duration-300
            text-white font-medium tracking-wide">
        Resume
        </button>
    </a>
    <a href="#projects" className="pointer-events-auto">
        <button className="px-8 py-3 rounded-full
            border border-white/30
            bg-white/5 backdrop-blur-sm
            hover:bg-white/10 hover:border-white/50 hover:scale-105
            transition-all duration-300
            text-white font-medium tracking-wide">
        Projects
        </button>
    </a>
    </div>

</div>
</div>

    <div className="w-full h-full absolute inset-0">
       
     <Canvas className='w-full h-full absolute inset-0'>
        <Suspense fallback={<CanvasLoader/>}>
        <PerspectiveCamera makeDefault position={[0, 0, 15]} />
        <InteractiveStars/>
        <ambientLight />
        </Suspense>
        
    </Canvas>
    </div>
</section>
  )
}

export default HeroSection;