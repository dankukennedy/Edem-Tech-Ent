import React, { useState } from 'react'
import Logo from  '../assets/logo.jpeg'
interface Props{

}

const Navbar:React.FC = () => {
const [isOpen,setIsOpen]=useState(false);

  const toggleMenu=()=>{
    setIsOpen(!isOpen);
  }

  return (
    <nav className='bg-gradient-to-r from-black to-blue-950 text-white px-8 sm:px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-between items-center'>
            <a href="#Home" className='flex items-center'>
                <img src={Logo} alt="" className='w-15 h-10 rounded' />
                <span className='p-1 text-2xl font-bold hover:bg-gradient-to-tr from-blue-200 to-slate-600 rounded'>EDEM-TECH ENT</span>
            </a>
            {/* Hamburger Icon */}
            <button
            onClick={toggleMenu}
             className='md:hidden lg:hidden focus:outline-none'>
                <span className='block w-8 h-1 bg-white mb-1'></span>
                <span className='block w-8 h-1 bg-white mb-1'></span>
                <span className='block w-8 h-1 bg-white mb-1'></span>
            </button>
             
             {/* Desktop Menu */}
             <div className='hidden md:flex space-x-6'>
                <a href="#home" className='p-1 text-2xl hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-blue-900 rounded'>Home</a>
                <a href="#team" className='p-1 text-2xl hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-blue-900 rounded'>Team</a>
                <a href="#service" className='p-1 text-2xl hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-blue-900 rounded'>Services</a>
                <a href="#project" className='p-1 text-2xl hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-blue-900 rounded'>Projects</a>
                <a href="#about" className='p-1 text-2xl hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-blue-900 rounded'>About</a>
                <a href="#contact" className='p-1 text-2xl hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-blue-900 rounded'>Contact</a>
             </div>

             {/* Desktop Button */}
             {/* <button className='bg-gradient-to-b from-blue-300 to-green-900 text-white hidden md:inline sm:inline transform transition-transform duration-300 hover:scale-105 py-2 px-4 rounded-full'>
                Contact Us
             </button> */}
            </div>
             {/* Mobile Menu */}
               {isOpen &&(
                 <div className='md:hidden sm:hidden'>
                     <div className='flex flex-col space-y-4 mt-4 text-center'>
                        <a href="#home" className='p-1 hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-purple-900 rounded '>Home</a>
                        <a href="#team" className='p-1 hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-purple-900 rounded '>Team</a>
                        <a href="#service" className='p-1 hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-purple-900 rounded '>Services</a>
                        <a href="#project" className='p-1 hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-purple-900 rounded '>Projects</a>
                        <a href="#about" className='p-1 hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-purple-900 rounded '>About </a>
                        <a href="#contact" className='p-1 hover:text-white font-bold hover:bg-gradient-to-r from-blue-300 to-purple-900 rounded '>Contact</a>
                     </div>
                 </div>
               )}
     
    </nav>
  )
}

export default Navbar