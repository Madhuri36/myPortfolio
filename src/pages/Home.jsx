import React from 'react'
import Cursor from '../components/ui/Cursor.jsx' // Import the new cursor
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
import Footer from '../sections/Footer.jsx'
import Projects from '../sections/Projects.jsx'
import Marquee from '../sections/Marquee.jsx'

const Home = () => {
  return (
    <div className="cursor-none"> {/* Hide default cursor globally */}
        <Cursor />
        <Hero />
        <About />
        <Projects />
        <Marquee />
        <Footer />
    </div>
  )
}

export default Home