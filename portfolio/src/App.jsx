import React from 'react'
import Navbar from './sections/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
function App() {
  return (
    <main className="w-full h-full mx-auto bg-black">
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
  
  )
}

export default App
