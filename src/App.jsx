import React from 'react'
import Navbar from './assets/navbar/Navbar'
import Home from './assets/home/Home'
import About from './assets/about/About'
import Skill from './assets/skill/Skill'
import Project from './assets/project/Project'
import Contact from './assets/Contact/Contact'
import { useEffect } from 'react'
import Aos from 'aos'
 import 'aos/dist/aos.css'
function App() {
  useEffect(()=>{
    Aos.init({
      duration:2000,
      once:true,
      mirror:false,
    })
  },[])
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}

export default App
