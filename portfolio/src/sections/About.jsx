import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import EarthModel from '../components/EarthModel.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';


const About = () => {
    const[hascopied, sethascopied] = useState(false);

    const handleCopy = () =>{
        navigator.clipboard.writeText('mysha.zeshan01@gmail.com');
        sethascopied(true);
        setTimeout(()=>{
            sethascopied(false);
        },2000)
    }
  return (
    <section className="w-full h-full mx-auto bg-black px-5 sm:px-10 lg:px-45 mt-10 mb-10">
        <div className="
            grid
            xl:grid-cols-3
            xl:grid-rows-6
            md:grid-cols-2
            grid-cols-1
            gap-5 h-full
        ">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/download.png" alt="Mysha" className="w-full sm:h-[276px] object-contain"/>
                    <div>
                    <p className="grid-headtext">Hi im Mysha</p>
                    </div>
                    <div>
                        <p className="grid-subtext">Full Stack Developer & CS Student</p>
                        <p className="grid-subtext">
                            Computer Science student and Full Stack Developer passionate about building modern, scalable web applications with React and robust backend technologies.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[300px] h-fit object-contain"/>
    
                    <div>
                    <p className="grid-headtext">
                        Tech Stack
                    </p>
                    <p className="grid-subtext">
                        I specialize in full-stack development using React, Java Spring Boot, Flask, and MySQL with growing experience in 3D web development using Three.js and React Three Fiber.
                    </p>
                     </div>
                </div>
            </div>

             <div className="xl:col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full  sm:h-[340px] h-fit flex justify-center items-center mb-15">
                       <Canvas camera={{ position:[0,0,7] }}>
                        <Suspense fallback = {<CanvasLoader/>}>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[5, 2, 5]} intensity={1}/>
                            <EarthModel/>
                        </Suspense>
                       </Canvas>
                    </div>
                    <div>
                        <p className="grid-headtext">
                            I work remotely across most
                        </p>
                        <p className="grid-subtext">
                            I'm based in Pakistan, with remote work available.
                        </p>

                        
                        <button 
                            onClick={() => window.location.href = "mailto:mysha.zeshan01@gmail.com"}
                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-xl border border-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 mt-10 "
                            >
                            {/* The Glow Radar Ring (Isolated to prevent flickering) */}
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0l-7.5-4.615a2.25 2.25 0 0 1-1.07-1.916V6.75" 
                                />
                            <span className="tracking-wide">Contact Me</span>
                        </button>
                    
                    </div>
                  
                </div>
            </div>

            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[300px] h-fit object-contain "/>
                    <div>
                        <p className="grid-headtext">My Passion</p>
                        <p className="grid-subtext">
                            I love solving problems and building things through code. Coding isnt my profession it's my profession and I want to be the best at what i want to do.
                        </p>
                    </div>


                </div>

            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full h-fit md:h-[186px] object-contain "/>
                    <div className="space-y-2">
                        <p className= "grid-subtext text-center ">Contact Me</p>
                        <div className= "copy-container" onClick={handleCopy}>
                            <img src={hascopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                            <p className="xl:text-2xl md:text-xl font-meduim text-gray_gradient text-white">mysha.zeshan01@gmail.com</p>
                        </div>

                    </div>
                    


                </div>
            </div>
        </div>

    </section>
  )
}

export default About