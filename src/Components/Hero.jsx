import React from 'react'
// import  heropng from '../../assets/pic.jpg'

export default function Hero() {
  return (
    <div className='bg-black text-white text-center py-16 '>
        <img className='mx-auto mb-8 w-48  rounded-full object-cover transfrom  transition-transform duration-300  hover:scale-105' src="" alt="" />
       <h1>
        Mer Stack
       </h1>
        <p className='mt-4 text-lg text-gray-300 '>I specialize in building modern and responsive web application </p>
        <div className='mt-8 space-x-4'>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect with me </button>
            <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume </button>

        </div>


    </div>
  )
}
