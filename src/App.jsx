import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Tech from './components/Tech'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialised selection:text-cyan-900' >
       <div className="fixed top-0 -z-10 h-full w-full" >
     
      <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
      </div>
      <div className='container mx-auto px-8' >
      <Navbar/>
      <Hero/>
      <About/>
      <Tech/>
      <Projects/>
      <Contact/>
    </div>
    </div>
  )
}

export default App