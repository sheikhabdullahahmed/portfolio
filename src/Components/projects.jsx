import React from 'react'
import employeeMSImage from '../../assets/eat.jpg'
import booksImage from '../../assets/admin-dashboard.png'


const Projects = [
    {
        id: 1,
        name :" Restaurant Webite",
        technologies : "React js",
        image : employeeMSImage,
        github : "https://github.com/sheikhabdullahahmed",
    },
    {
        id: 2,
        name :"Blog App ",
        technologies : "Mern Stack",
        image : booksImage,
        github : "https://github.com/sheikhabdullahahmed",
    },
    {
        id: 1,
        name :" Restaurant Webite",
        technologies : "React js",
        image : employeeMSImage,
        github : "https://github.com/sheikhabdullahahmed",
    },
    {
        id: 1,
        name :" Restaurant Webite",
        technologies : "React js",
        image : employeeMSImage,
        github : "https://github.com/sheikhabdullahahmed",
    },
]




function projects() {
  return (
    <>
         <div className="bg-black text-white py-20" id="service ">
      <div className="container mx-auto px-8 md:px-16  lg:px-24 ">
        <h2 className="text-4xl font-bold text-center  mb-12 ">My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {Projects.map(item => {
                return <div key={item.id} className='bg-gray-800 p-6  rounded-lg hover:shadow-lg tranform transition-transform duration-300 hover:scale-105'>
                    <img  className='rounded-lg mb-4 w-full h-68 object-cover' src={item.image} alt="" />
                    <h3 className='text-2xl font-bold mb-2 '>{item.name}</h3>
                    <p className='text-gray-400 mb-4 '>{item.technologies}</p>
                    <a href={item.github} className=' inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white  px-4 py-2 rounded-full  ' target="_blank">Github Url </a>
                </div>

            }) }

        </div>
        </div>
        </div>
    </>
  )
}

export default projects