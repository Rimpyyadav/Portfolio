import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Hero from './components/Hero'
import Tech from './components/Tech';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    
     <div className='overflow-x-hidden text-neutral-300 antialised selection:text-cyan-900' >
       <div className="fixed top-0 -z-10 h-full w-full" >
     
       <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className='container mx-auto px-8' ></div>
     <Navbar/>
      <div id="home" className="hero-section">
       <Hero />
      </div>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Tech />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      </div>
    
  );
}

export default App;
