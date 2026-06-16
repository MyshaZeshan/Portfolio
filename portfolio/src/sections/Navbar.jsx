import React from 'react'
import { useState } from 'react'
const NavItems=()=>{
    return(
        <ul className='nav-ul'>
            {["Home","About","Projects","Contact"].map((item,index)=>(
                <li key={index} className="nav-li">
                    <a href="/" className="nav-li_a" onClick={()=>{}}>{item}</a>
                </li>
            ))}
        </ul>
    )
}
const Navbar = () => {
    const[isOpen, setisOpen] = useState(false)
    const toggleMenu = ()=>setisOpen((prevIsOpen)=>!prevIsOpen)
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center py-5 mx-auto c-space'>
                <a href='/' className='text-neutral-400 font-bold text-xl hover:text-white transition-colors'>
                Mysha</a>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white transition-colors focus:outline-none sm:hidden flex" aria-label="Toggle menu">
                <img src={isOpen ? "/close.png" : "/menus.png"} alt="Menu" className='w-6 h-6' />
                </button>
                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
            <nav className="p-5">
                <NavItems />
            </nav>
        </div>
    </header>
  )
}

export default Navbar