import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const ImageCard = ({ src }) => {
  return (
    <div className="w-[45vw] md:w-[35vw] h-full rounded-[2.5rem] md:rounded-[3.5rem] bg-zinc-900 border border-white/10 overflow-hidden shrink-0 relative group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
      <motion.img
        src={src}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  )
}

export default function Gallery() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const moveLeft = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const moveRight = useTransform(scrollYProgress, [0, 1], ['-40%', '0%'])
  const moveLogos = useTransform(scrollYProgress, [0, 1], ['0%', '-15%'])

  const galleryImages = [
    '/cyber_12.png', // Liquid Galaxy Droplet
    '/cyber_13.png', // Fiber-Optic Brain
    '/cyber_14.png', // Geometric Eye
    '/cyber_8.png',  // Golden/Blue Gear
    '/cyber_9.png',  // Crystal Sphere/Orange
    '/cyber_10.png', // Obsidian/Lime
    '/cyber_1.png',  // Pink Circuit
    '/cyber_2.png',  // Blue Microchip
    '/cyber_3.png'   // Green Wires
  ]

  return (
    <section ref={containerRef} className="py-8 md:py-12 w-full overflow-hidden bg-transparent relative z-20">

      {/* Client Logos - Scroll Synced & Tilted Wrapper */}
      <div 
        className="w-[110vw] ml-[-5vw] overflow-hidden border-y border-white/5 py-6 mb-4 md:mb-8 bg-black/20 backdrop-blur-sm relative z-30"
        style={{ transform: 'rotate(-3deg)' }}
      >
        <motion.div 
          className="flex whitespace-nowrap gap-x-12 md:gap-x-24 px-12 w-max"
          style={{ x: moveLogos }}
        >
          <div className="flex gap-x-12 md:gap-x-24">
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-black">P</div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">ProtoSphere</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white text-black rounded-lg flex items-center justify-center text-[10px] font-black italic">TW</div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Thelma Watson</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 border border-white rotate-45 flex items-center justify-center font-black">IC</div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Impact Creative</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-tr from-fuchsia-600 to-violet-600 rounded-full flex items-center justify-center text-white text-[10px] font-black">S</div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">SCALER</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-1/2 bg-white"></div>
              </div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Pixel Forge</span>
            </div>
            {/* New Logos */}
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-primary rounded-tr-2xl flex items-center justify-center text-[10px] font-black">NC</div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Nova Core</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-zinc-800 border border-white/20 rounded-full flex items-center justify-center text-[10px] font-black text-primary">VL</div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Vortex Lab</span>
            </div>
            <div className="flex items-center gap-1 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
               <div className="flex items-end gap-[2px]">
                 <div className="w-2 h-4 bg-white/40"></div>
                 <div className="w-2 h-7 bg-white"></div>
                 <div className="w-2 h-5 bg-white/60"></div>
               </div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Zenith Studio</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 md:w-10 md:h-10 border-2 border-white rounded-full flex items-center justify-center text-[10px] font-black relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                AD
              </div>
              <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-white">Aura Design</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Image Gallery Wrapper */}
      <div className="flex flex-col gap-8 md:gap-12 lg:gap-16 px-2 md:px-4 w-[350vw] sm:w-[300vw] md:w-[250vw] lg:w-[180vw] py-12 md:py-16 overflow-visible">
        
        {/* Row 1 - Sliding Left (Tilted) */}
        <motion.div 
          style={{ x: moveLeft, rotate: -3 }} 
          className="flex gap-3 md:gap-6 h-[25vh] md:h-[35vh]"
        >
          {galleryImages.map((src, i) => (
            <ImageCard key={`r1-${i}`} src={src} />
          ))}
        </motion.div>

        {/* Row 2 - Sliding Right (Tilted) */}
        <motion.div 
          style={{ x: moveRight, rotate: -3 }} 
          className="flex gap-3 md:gap-6 h-[25vh] md:h-[35vh]"
        >
          {galleryImages.slice().reverse().map((src, i) => (
            <ImageCard key={`r2-${i}`} src={src} />
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}
