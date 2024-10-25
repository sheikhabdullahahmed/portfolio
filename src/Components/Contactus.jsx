import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";


function Contactus() {
  return (
    <>
      <div className="bg-black text-white py-20" id="about ">
        <div className="container mx-auto px-8 md:px-16  lg:px-24 ">
          <h2 className="text-4xl font-bold text-center  mb-12 ">About me</h2>
          <div className="flex flex-col  md:flex-row  items-center md:space-x-12 ">
            <div className="flex-1 ">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  mb-4  ">Let's Talk </h3>
                <p>I'm  open to discussing web development projects or partnership oppportuinties</p>
                <div className="mb-4 mt-8">
                    <FaEnvelope className=" inline-block text-green-400 mr-2" />
                    <a href="mailto:abdullahsheikh456677@gmail.com" className="hover:underline">
                    abdullahsheikh456677@gmail.com
                    </a>
                </div>
                <div className="mb-4 ">
                    <FaPhone className=" inline-block text-green-400 mr-2 "/>
                        <span>+92 3232674099</span>
                </div>

                <div className="mb-4 ">
                    <FaMapMarkedAlt className=" inline-block text-green-400 mr-2 "/>
                        <span>PNT Soceity Karachi, Pakistan</span>

                </div>

            </div>
             <div className="flex-1 w-full ">
                <form className="space-y-4" >
                    <div>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" className="w-full p-2 rounded bg-gray-800 border-gray-500 focus:outline-none focus:border-green-400 " placeholder="Enter Your Name" />
                    </div>
                    <div>
                        <label htmlFor="Email" className="block mb-2">Email</label>
                        <input type="text" className="w-full p-2 rounded bg-gray-800 border-gray-500 focus:outline-none focus:border-green-400 " placeholder="Enter Your Email" />
                    </div>
                    <div>
                        <label htmlFor="Email" className="block mb-2">Meassge</label>
                        <textarea type="text" className="w-full p-2 rounded bg-gray-800 border-gray-500 focus:outline-none focus:border-green-400 " placeholder="Enter Your Meassge" rows={5} />
                    </div>
                    <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
                </form>

             </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactus;
