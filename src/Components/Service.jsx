import React from 'react'


const service = [
    {
        id: 1,
        title: "React Js",
        description: "Building responsive and interactive user interface "
    },
    {
        id: 2,
        title: "Next Js ",
        description: "Next.js is a powerful React framework that enables server-side rendering"
    },
    {
        id: 3,
        title: "Mern Stack ",
        description: "The MERN stack  used for building full-stack JavaScript applications."







    }
]





const  Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service ">
      <div className="container mx-auto px-8 md:px-16  lg:px-24 ">
        <h2 className="text-4xl font-bold text-center  mb-12 ">Serives</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {service.map((item) => {
                 return <div key={item.id} className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg tranform transition-transform duration-300 hover:scale-105'>
                    <div className='text-right text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 '>
                        {item.id}
                    </div>
                    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400  to-blue-500'>{item.title}</h3>
                    <p className='mt-2 text-gray-300 '>{item.description}</p>
                    <a href="" className='mt-4  inline-block text-green-500 hover:text-blue-500 '>Read More</a>
                </div>
            })}
        </div>
        </div>
        </div>
  )
}

export default Service