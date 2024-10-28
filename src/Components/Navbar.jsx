import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
    <div className='container py-2 flex  md:justify-between  items-center'>
        <div className=' text-2xl font-bold  hidden md:inline  '>
            Sheikh 
        </div>
        <div className='space-x-6'>
          <Link to="/"> Home</Link>
          <Link to="/about">Abouttt</Link>
          <Link to="/contact">Contact</Link>

        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connects Me</button>
    </div>
    </nav>
  )
}

export default Navbar