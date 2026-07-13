import React from 'react'
import {Canvas} from "@react-three/fiber";
import { PerspectiveCamera } from '@react-three/drei';
import { Model } from '../components/Model.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { Suspense } from "react";
import { AmbientLight, DirectionalLight } from 'three';
import {useMediaQuery} from 'react-responsive'
import { calculateSizes } from '../utils/CalculatrSizes.jsx';
import {Stars} from '@react-three/drei'
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

            {/* Hero Content — centered on all breakpoints, transparent to pointer events except the button */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none px-4">
            <div className="flex flex-col items-center text-center">

                {/* Mobile heading */}
                <p className="md:hidden orbitron-font text-[clamp(80px,8vw,190px)] font-bold opacity-70 text-purple-600 tracking-widest leading-none">
                HI I'M MYSHA
                </p>

                {/* Desktop heading */}
                <h1 className="hidden md:block orbitron-font text-6xl lg:text-6xl font-bold text-white leading-none">
                HI I'M
                </h1>
                <h1 className="hidden md:block orbitron-font text-7xl lg:text-[7rem] font-bold text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.45)] leading-none mt-2">
                MYSHA ZESHAN
                </h1>

                <p className="max-w-3xl text-white/70 text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 tracking-wide font-light">
                Computer Science student specializing in full-stack development, crafting modern web applications with clean code and intuitive user experiences.
                </p>

                
                <a href="/assets/Mysha.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 pointer-events-auto"
                >
                <button className="px-8 py-3 rounded-full
                bg-gradient-to-r
                from-purple-500
                to-fuchsia-500
                hover:scale-105
                transition-all
                duration-300
                shadow-[0_0_35px_rgba(168,85,247,0.45)] text-white">
                    Resume
                </button>
                </a>

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