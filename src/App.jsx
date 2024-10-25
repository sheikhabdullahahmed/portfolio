import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Service from './Components/Service'
import Projects from './Components/projects'
import Contactus from './Components/Contactus'
import Footer from './Components/footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



<BrowserRouter>

<Routes>
  <Route path='/' element ={<About/>}/>
</Routes>
</BrowserRouter>




function App() {
  return (
    <div>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Projects/>
      <Contactus/>
      <Footer/>
      
    </div>
  )
}

export default App