import React from 'react'
import { useState } from 'react'
const NavItems = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav>
      <ul className="nav-ul">
        {navLinks.map((link) => (
          <li key={link.name} className="nav-li">
            <a href={link.href} className="nav-li_a">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const Navbar = () => {
    const[isOpen, setisOpen] = useState(false)
    const toggleMenu = ()=>setisOpen((prevIsOpen)=>!prevIsOpen)
  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
        <div className='w-full h-full mx-auto'>
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