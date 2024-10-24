import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Service from './Components/Service'
import Projects from './Components/projects'
import Contactus from './Components/Contactus'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Contactus/>
    </div>
  )
}

export default App