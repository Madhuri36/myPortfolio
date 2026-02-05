import React from 'react'
import Hero from '../sections/Hero.jsx'
import About from '../sections/About.jsx'
// import Techstack from '../sections/Techstack.jsx'
import Footer from '../sections/Footer.jsx'
import Projects from '../sections/Projects.jsx'

const Home = () => {
  return (
    <>
        <Hero />
        <About />
        <Projects />
        {/* <Techstack /> */}
        <Footer />
    </>
  )
}

export default Home