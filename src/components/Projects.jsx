import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  { id: '01', client: 'Skyline Studios', img1: 'from-indigo-600 via-purple-600 to-rose-500', img2: 'from-teal-400 to-emerald-600', img3: 'from-orange-400 to-yellow-500' },
  { id: '02', client: 'Pixel Forge', img1: 'from-emerald-600 via-teal-500 to-cyan-500', img2: 'from-pink-500 to-rose-500', img3: 'from-blue-600 to-indigo-600' },
  { id: '03', client: 'MetaForm Creations', img1: 'from-slate-700 via-gray-800 to-black', img2: 'from-yellow-400 to-amber-500', img3: 'from-violet-600 to-fuchsia-600' }
]

function Card({ project, index, progress, range, targetScale }) {
  // Map scroll progress to scale down the card as the next one covers it
  const scale = useTransform(progress, range, [1, targetScale])
  const opacity = useTransform(progress, range, [1, 0.8])
  
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ 
          scale, 
          opacity,
          top: `calc(10vh + ${index * 30}px)` 
        }} 
        className="w-full max-w-[85vw] md:max-w-6xl mx-auto border border-white/20 rounded-[2.5rem] md:rounded-[3.5rem] bg-[#121212] p-6 md:p-12 shadow-[0_-30px_60px_rgba(0,0,0,0.8)] relative origin-top sticky"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 md:gap-0">
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">{project.id}</span>
            <div className="flex flex-col">
              <span className="text-white font-black uppercase tracking-widest text-sm md:text-lg">Client</span>
              <span className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs truncate">{project.client}</span>
            </div>
          </div>
          <button className="rounded-full px-8 py-3 md:px-12 md:py-4 border border-gray-400 text-white font-bold tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-black transition-colors uppercase whitespace-nowrap">
            Live Project
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 h-[50vh] min-h-[300px] md:min-h-[500px]">
          {/* Main Large Image Left */}
          <div className={`col-span-1 md:col-span-2 row-span-1 md:row-span-2 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br ${project.img1} w-full h-full shadow-inner shadow-white/10`}></div>
          {/* Top Right Small */}
          <div className={`col-span-1 row-span-1 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br ${project.img2} w-full h-full shadow-inner shadow-white/10 hidden md:block`}></div>
          {/* Bottom Right Small */}
          <div className={`col-span-1 row-span-1 rounded-[1.5rem] md:rounded-[2rem] bg-gradient-to-br ${project.img3} w-full h-full shadow-inner shadow-white/10 hidden md:block`}></div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Projects() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section id="projects" className="bg-transparent pb-32">
      <div ref={container} className="relative" style={{ height: `${projects.length * 100}vh`}}>
        {projects.map((proj, i) => {
          // Shrink size target: Card 0 shrinks by 0.1, Card 1 by 0.05, Card 2 shrinks by 0
          const targetScale = 1 - ((projects.length - 1 - i) * 0.05)
          const range = [i * (1/(projects.length)), 1]
          
          return (
            <Card 
              key={proj.id} 
              index={i} 
              project={proj} 
              progress={scrollYProgress} 
              range={range} 
              targetScale={targetScale} 
            />
          )
        })}
      </div>
    </section>
  )
}
