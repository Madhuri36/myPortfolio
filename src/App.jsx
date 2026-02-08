import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PreLoader from './components/ui/PreLoader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This matches the timing of our loader counter
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PreLoader logo="SM" />
      
      {/* Optional: Add a subtle fade-in for the content after loading */}
      <main className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Home />
      </main>
    </>
  )
}

export default App