import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const services = [
  { num: '01', title: 'AI / ML DEVELOPMENT', desc: 'Building intelligent models — from supervised learning and neural networks to NLP pipelines — using Python, TensorFlow, and scikit-learn.' },
  { num: '02', title: 'FULL STACK WEB DEV', desc: 'Crafting high-performance web apps with React, Node.js, and MongoDB. Clean APIs, dynamic UIs, and seamless user experiences.' },
  { num: '03', title: 'UI / UX & 3D DESIGN', desc: 'Designing stunning interfaces and 3D assets. Turning complex ideas into visually intuitive, premium digital products.' },
]

export default function Services() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  // Parallax speeds vertically
  const y1 = useTransform(scrollYProgress, [0, 1], [-80, 250])
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -150])
  
  // Slide-in from sides symmetrically
  const xLeft = useTransform(scrollYProgress, [0.15, 0.45], [-350, 0])
  const xRight = useTransform(scrollYProgress, [0.15, 0.45], [350, 0])
  const opacityElements = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])

  // Wipe left to right (for "SERVICES" filling)
  const wipeClip = useTransform(scrollYProgress, [0.2, 0.45], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"])

  return (
    <section ref={ref} id="services" className="py-16 px-6 md:px-24 relative bg-transparent overflow-hidden">
      
      {/* 3D Extruded Header with Wipe Effect */}
      <div className="mb-8 md:mb-12 flex justify-center relative w-full h-[80px] md:h-[130px]">
        {/* Outline Text */}
        <h2 
          className="text-[5rem] md:text-[10rem] font-black tracking-tighter uppercase text-transparent absolute top-0 z-0"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
        >
          SERVICES
        </h2>
        {/* Filled Text (Wiped in) */}
        <motion.h2 
          className="text-[5rem] md:text-[10rem] font-black text-white tracking-tighter uppercase drop-shadow-2xl absolute top-0 z-10 w-full text-center"
          style={{ clipPath: wipeClip }}
        >
          SERVICES
        </motion.h2>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div 
            key={service.num}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col md:flex-row items-start md:items-center py-6 md:py-8 border-b border-gray-600/50 cursor-pointer overflow-hidden hover:bg-white/5 transition-colors duration-500 px-4 md:px-8 rounded-2xl"
          >            
            <div className="w-full md:w-[20%] font-black text-6xl md:text-8xl text-white drop-shadow-lg mb-6 md:mb-0">
              {service.num}
            </div>
            
            <div className="w-full md:w-[80%] flex flex-col ml-0 md:ml-12 border-l-0 md:border-l-2 border-primary/50 pl-0 md:pl-12">
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-widest mb-4">{service.title}</h3>
              <p className="text-gray-400 text-lg md:text-xl font-medium tracking-wide max-w-2xl">{service.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
