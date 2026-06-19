import React from 'react'
import Navbar from './sections/Navbar.jsx'
import HeroSection from './sections/HeroSection.jsx'
import About from './sections/About.jsx'
function App() {
  return (
    <main className="w-full h-full mx-auto bg-black">
      <Navbar/>
      <HeroSection/>
      <About>/</About>
    </main>
  
  )
}

export default App
