import React from 'react'
import Eat from '../../assets/eat.jpg'
import Picture1 from '../../assets/picture 1.jpg'

const Projects = [
    {
        id: 1,
        name :" Restaurant Webite",
        technologies : "React js",
        image : Eat,
        github : "https://github.com/sheikhabdullahahmed/Practice-Projects-with-React/tree/master/Practice%201",
    },
    {
        id: 2,
        name :"Docs App ",
        technologies : "React js",
        image : "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/11/an-office-desk-with-some-items-around-and-a-book-with-the-google-docs-logo-at-the-center.jpg",
        github : "https://github.com/sheikhabdullahahmed/Practice-Projects-with-React/tree/master/Practice%202",
    },
    {
        id: 3,
        name :" Agency Webite",
        technologies : "React js",
        image :"https://danielvoelk.de/wp-content/uploads/undraw-alternative-sapiens.png",
        github : "https://github.com/sheikhabdullahahmed/Practice-Projects-with-React/tree/master/Practice%203",
    },
    {
        id: 4,
        name :" Restaurant Webite",
        technologies : "React js",
        image : Picture1,
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
                return <div key={item.id} className='bg-gray-800 p-6   rounded-lg hover:shadow-lg tranform transition-transform duration-300 hover:scale-105'>
                    <img  className='rounded-lg mb-4 w-full h-68  object-cover' src={item.image} alt="" />
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