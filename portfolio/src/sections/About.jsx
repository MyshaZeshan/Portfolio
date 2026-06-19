import R3fGlobe from 'r3f-globe'
import React from 'react'
import R3fglobe from 'r3f-globe'

const About = () => {
  return (
    <section className="c-space my-20">
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1
        gap-5 h-full'>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/download.png" alt="Mysha" className="w-full sm:h-[276px] h-fit object-contain"/>
                    <div>
                    <p className="grid-headtext">Hi im Mysha</p>
                    </div>
                    <div>
                        <p className="grid-subtext">Full Stack Developer & CS Student</p>
                        <p className="grid-subtext">
                            I'm a Computer Science student and Full Stack Developer passionate about building modern, scalable, and user-friendly web applications. I enjoy creating responsive interfaces with React and developing robust backend systems, APIs, and databases that power seamless user experiences.

                            I'm always learning new technologies, solving problems, and turning ideas into impactful digital solutions.

                        </p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain"/>
    
                    <div>
                    <p className="grid-headtext">
                        Tech Stack
                    </p>
                    <p className="grid-subtext">
                        jsvbsvkcbjfbjfhejkdhekd
                    </p>
                     </div>
                </div>
            </div>

             <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center item-center">
                       <R3fGlobe/>
                    </div>
    
                  
                </div>
            </div>
            
        </div>

    </section>
  )
}

export default About