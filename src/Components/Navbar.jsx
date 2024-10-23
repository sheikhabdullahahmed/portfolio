import React from 'react'

function Navbar() {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex  md:justify-between  items-center'>
        <div className=' text-2xl font-bold  hidden md:inline  '>
            Sheikh 
        </div>
        <div className='space-x-6'>
            <a href="#home" className='hover:text-gray-400'>Home</a>
            <a href="#about" className='hover:text-gray-400'>About</a>
            <a href="contact" className='hover:text-gray-400'>Contact</a>
            <a href="service" className='hover:text-gray-400'>Service</a>
            <a href="#projects" className='hover:text-gray-400'>Projects</a>
        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connects Me</button>
    </div>
    </nav>
  )
}

export default Navbar