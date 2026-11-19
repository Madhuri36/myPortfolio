"use client";

import React from 'react';
import Cursor from '../components/ui/Cursor.jsx';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Experience from '../sections/Experience.jsx';
import Education from '../sections/Education.jsx';
import Techstack from '../sections/Techstack.jsx';
import Projects from '../sections/Projects.jsx';
import Publications from '../sections/Publications.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';

const Home = () => {
  return (
    <div className="cursor-none bg-[#05050a]">
      <Cursor />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Techstack />
      <Projects />
      <Publications />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;