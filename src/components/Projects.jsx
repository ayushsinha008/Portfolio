import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { useScrollY } from '../App'

const projects = [
  { id: '01', client: 'Skyline Studios', img1: 'from-indigo-600 via-purple-600 to-rose-500', img2: 'from-teal-400 to-emerald-600', img3: 'from-orange-400 to-yellow-500' },
  { id: '02', client: 'Pixel Forge', img1: 'from-emerald-600 via-teal-500 to-cyan-500', img2: 'from-pink-500 to-rose-500', img3: 'from-blue-600 to-indigo-600' },
  { id: '03', client: 'MetaForm Creations', img1: 'from-slate-700 via-gray-800 to-black', img2: 'from-yellow-400 to-amber-500', img3: 'from-violet-600 to-fuchsia-600' }
]

function Card({ project, index, scrollY, containerTop, viewportHeight }) {
  // We animate over (length) segments to leave room at the end
  const numSegments = projects.length
  const segmentSize = 1 / numSegments
  
  // Calculate overall progress of the section
  const scrollDistance = numSegments * viewportHeight
  
  const progress = Math.max(0, Math.min(1, (scrollY - containerTop) / scrollDistance))
  
  // Calculate this specific card's sliding progress
  const start = (index - 1) * segmentSize
  const cardProgress = Math.max(0, Math.min(1, (progress - start) / segmentSize))
  
  // Calculate position: index 0 is always top, others slide up
  // Increase the gap so the header of the previous card remains visible
  const headerGap = 18; 
  const targetTop = 2 + index * headerGap;
  const currentOffset = 100 - (100 - targetTop) * cardProgress;
  
  // Calculate scaling: shrink slightly as newer cards stack on top
  const arrivalProgress = index * segmentSize;
  const progressPastArrival = Math.max(0, progress - arrivalProgress);
  const scale = 1 - progressPastArrival * 0.05;
  
  const zIndex = index

  return (
    <div 
      className="h-[60vh] w-full absolute left-0 right-0 flex items-center justify-center top-0 origin-top"
      style={{ 
        zIndex,
        transform: `translateY(${currentOffset}vh) scale(${scale})`,
        opacity: cardProgress === 0 && index > 0 ? 0 : 1, // Hide until it starts moving
      }}
    >
      <div 
        className="w-full h-full max-w-[95vw] md:max-w-7xl mx-auto border border-white/20 rounded-[2.5rem] md:rounded-[4rem] bg-[#0d0d0d] p-8 md:p-14 relative flex flex-col justify-between overflow-hidden shadow-2xl"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-baseline gap-6 md:gap-12"
          >
            <span className="text-7xl md:text-[8rem] font-black text-white tracking-tighter leading-none">{project.id}</span>
            <div className="flex flex-col gap-2">
              <span className="text-white font-black uppercase tracking-[0.3em] text-xs md:text-sm opacity-50">Client</span>
              <span className="text-white font-black uppercase tracking-widest text-lg md:text-2xl">{project.client}</span>
            </div>
          </motion.div>
          
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group relative overflow-hidden rounded-full px-10 py-4 md:px-14 md:py-5 border border-white/20 text-white font-black tracking-[0.2em] text-[10px] md:text-xs uppercase transition-all duration-500 hover:border-white shadow-[0_0_30px_rgba(255,255,255,0.05)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Live Project</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </motion.button>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-8 flex-grow mt-8 relative z-10 w-full h-[50vh] md:h-auto">
            <div className={`col-span-1 md:col-span-2 row-span-1 md:row-span-2 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br ${project.img1} w-full h-full shadow-2xl shadow-black/50 border border-white/5 pb-2 md:pb-0`}></div>
            <div className={`col-span-1 row-span-1 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br ${project.img2} w-full h-full shadow-2xl shadow-black/50 border border-white/5`}></div>
            <div className={`col-span-1 row-span-1 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br ${project.img3} w-full h-full shadow-2xl shadow-black/50 border border-white/5`}></div>
          </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const containerRef = useRef(null)
  const { scrollY } = useScrollY()
  const [containerTop, setContainerTop] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(900)

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight)
      if (containerRef.current) {
        let top = 0;
        let el = containerRef.current;
        while (el) {
          top += el.offsetTop;
          el = el.offsetParent;
        }
        setContainerTop(top)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    
    // Also recalculate after a short delay to account for image loading
    const timer = setTimeout(handleResize, 1000)
    const timer2 = setTimeout(handleResize, 3000)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timer)
      clearTimeout(timer2)
    }
  }, [])

  // Calculate JS-driven stickiness to avoid CSS sticky bugs with Lenis/overflows
  // The section is (length + 1) * 100vh tall. We "stick" for length * 100vh.
  const maxStickyScroll = projects.length * viewportHeight;
  const stickyOffset = Math.max(0, Math.min(scrollY - containerTop, maxStickyScroll));

  return (
    <section id="projects" className="relative bg-transparent">
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: `${(projects.length + 1) * 100}vh` }}
      >
        <div 
          className="w-full h-screen overflow-hidden left-0 right-0 will-change-transform"
          style={{ transform: `translate3d(0, ${stickyOffset}px, 0)` }}
        >
          {projects.map((proj, i) => (
            <Card 
              key={proj.id} 
              index={i} 
              project={proj}
              scrollY={scrollY}
              containerTop={containerTop}
              viewportHeight={viewportHeight}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
