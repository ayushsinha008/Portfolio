import { createContext, useContext, useEffect, useState, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundAssets from './components/BackgroundAssets'

const ScrollContext = createContext({ scrollY: 0 })

export function useScrollY() {
  return useContext(ScrollContext)
}

function App() {
  const [scrollY, setScrollY] = useState(0)
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })
    
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    lenis.on('scroll', ({ scroll }) => {
      setScrollY(scroll)
    })

    return () => lenis.destroy()
  }, [])

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      <div className="bg-[#0a0a0a] text-foreground min-h-screen selection:bg-primary/50 selection:text-white relative font-sans">
        <BackgroundAssets />
        
        <div className="relative w-full overflow-clip">
          <div className="relative z-10 w-full bg-black/50 backdrop-blur-xl">
            <Navbar />
            <Hero />
            <Gallery />
            <About />
            <Services />
            <Projects />
            <Testimonials />
          </div>
          
          <Contact />
          <Footer />
        </div>
      </div>
    </ScrollContext.Provider>
  )
}

export default App
