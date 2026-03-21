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
    <section ref={ref} id="services" className="pt-8 pb-16 px-6 md:px-24 relative bg-transparent overflow-hidden">

      {/* 3D Extruded Header with Wipe Effect */}
      <div className="mb-4 md:mb-6 flex justify-center relative w-full h-[60px] md:h-[110px]">
        {/* Outline Text */}
        <h2
          className="text-[4rem] md:text-[8rem] font-black tracking-tighter uppercase text-transparent absolute top-0 z-0"
          style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
        >
          SERVICES
        </h2>
        {/* Filled Text (Wiped in) */}
        <motion.h2
          className="text-[4rem] md:text-[8rem] font-black text-white tracking-tighter uppercase drop-shadow-2xl absolute top-0 z-10 w-full text-center"
          style={{ clipPath: wipeClip }}
        >
          SERVICES
        </motion.h2>
      </div>

      <div className="flex flex-col max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={service.num}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
            className="group relative flex flex-col md:flex-row items-start md:items-center py-8 md:py-10 border-b border-white/5 cursor-pointer overflow-hidden transition-all duration-700 hover:px-8"
          >
            {/* Background Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out -z-10"></div>
            
            <div className="w-full md:w-[15%] font-black text-5xl md:text-7xl text-white/20 group-hover:text-violet-500 transition-colors duration-500 mb-4 md:mb-0 tabular-nums">
              {service.num}
            </div>

            <div className="w-full md:w-[85%] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex flex-col max-w-xl">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-[0.1em] mb-2 group-hover:translate-x-2 transition-transform duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm md:text-base font-bold leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                  {service.desc}
                </p>
              </div>
              
              <div className="hidden md:flex items-center gap-4 opacity-0 group-hover:opacity-100 translate-x-10 group-hover:translate-x-0 transition-all duration-500">
                <div className="h-[2px] w-12 bg-violet-600"></div>
                <span className="text-white font-black text-[10px] tracking-widest uppercase">Explore</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
