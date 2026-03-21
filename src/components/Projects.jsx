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
  const opacity = useTransform(progress, range, [1, 0.9])
  
  // Custom height logic to create a tighter stacking effect
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 overflow-hidden">
      <motion.div 
        style={{ 
          scale, 
          opacity,
          top: `calc(5vh + ${index * 0}px)` 
        }} 
        className="w-full h-[85vh] max-w-[90vw] md:max-w-7xl mx-auto border border-white/10 rounded-[2.5rem] md:rounded-[4rem] bg-[#0d0d0d] p-8 md:p-14 shadow-[0_-50px_100px_rgba(0,0,0,0.9)] relative origin-top sticky flex flex-col justify-between"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
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

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-8 flex-grow mt-8"
        >
          {/* Main Large Image Left */}
          <div className={`col-span-1 md:col-span-2 row-span-1 md:row-span-2 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br ${project.img1} w-full h-full shadow-2xl shadow-black/50 border border-white/5`}></div>
          {/* Top Right Small */}
          <div className={`col-span-1 row-span-1 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br ${project.img2} w-full h-full shadow-2xl shadow-black/50 border border-white/5 hidden md:block`}></div>
          {/* Bottom Right Small */}
          <div className={`col-span-1 row-span-1 rounded-[1.5rem] md:rounded-[2.5rem] bg-gradient-to-br ${project.img3} w-full h-full shadow-2xl shadow-black/50 border border-white/5 hidden md:block`}></div>
        </motion.div>
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
