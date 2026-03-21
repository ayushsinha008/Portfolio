import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })

  // Parallax speeds vertically (existing)
  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [250, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [-100, 150])
  const y4 = useTransform(scrollYProgress, [0, 1], [50, -250])

  // Slide-in from sides symmetrically
  // Elements slide in fully by the time the section is at 40% (just before center)
  const xLeft = useTransform(scrollYProgress, [0.15, 0.45], [-300, 0])
  const xRight = useTransform(scrollYProgress, [0.15, 0.45], [300, 0])
  const opacityElements = useTransform(scrollYProgress, [0.15, 0.45], [0, 1])

  // Wipe left to right (for "ABOUT ME" filling and Paragraph text)
  const wipeClip = useTransform(scrollYProgress, [0.2, 0.45], ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"])

  // Button reveal
  const buttonOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1])
  const buttonY = useTransform(scrollYProgress, [0.45, 0.55], [30, 0])

  return (
    <section ref={ref} id="about" className="relative h-[120vh] py-32 flex flex-col items-center justify-center bg-transparent overflow-hidden px-6">
      
      {/* Floating 3D Assets powered by Framer Motion mapped to the exact screenshot layout */}
      <motion.img 
        style={{ y: y1, x: xLeft, opacity: opacityElements }}
        src="/3d_silver_splat.png" 
        className="absolute top-16 left-[5%] md:left-[10%] w-40 md:w-56 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -z-10 mix-blend-screen"
        draggable="false"
      />
      <motion.img 
        style={{ y: y2, x: xRight, opacity: opacityElements }}
        src="/3d_blue_blob.png" 
        className="absolute top-4 right-[5%] md:right-[10%] w-44 md:w-60 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -z-10 mix-blend-screen"
        draggable="false"
      />
      <motion.img 
        style={{ y: y3, x: xLeft, opacity: opacityElements }}
        src="/3d_red_heart.png" 
        className="absolute bottom-20 left-[10%] md:left-[15%] w-36 md:w-52 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -z-10 mix-blend-screen"
        draggable="false"
      />
      <motion.img 
        style={{ y: y4, x: xRight, opacity: opacityElements }}
        src="/3d_purple_flower.png" 
        className="absolute bottom-12 right-[8%] md:right-[12%] w-48 md:w-64 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] -z-10 mix-blend-screen"
        draggable="false"
      />

      {/* Content matching the images directly */}
      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center pointer-events-none">
        
        {/* Title Wrap for Outline + Wipe Fill */}
        <div className="relative mb-16 inline-block w-full">
          {/* Outline Text */}
          <h2 
            className="text-6xl sm:text-7xl md:text-[9rem] font-black tracking-tighter uppercase text-transparent relative z-0"
            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
          >
            ABOUT ME
          </h2>
          {/* Filled Text (Wiped in) */}
          <motion.h2 
            className="text-6xl sm:text-7xl md:text-[9rem] font-black text-white tracking-tighter uppercase drop-shadow-2xl absolute top-0 left-0 z-10 w-full text-center"
            style={{ clipPath: wipeClip }}
          >
            ABOUT ME
          </motion.h2>
        </div>
        
        <motion.div 
          className="text-gray-200 font-bold text-base sm:text-lg md:text-2xl leading-snug space-y-2 mb-16 px-4"
          style={{ clipPath: wipeClip }}
        >
          <p>As a passionate tech student,</p>
          <p>I specialize in AI/ML solutions and full-stack app development.</p>
          <p>I love building intelligent systems and scalable platforms</p>
          <p>that solve complex modern problems.</p>
          <p className="text-white pt-4">Let's engineer the future together!</p>
        </motion.div>
        
        <motion.button 
          style={{ opacity: buttonOpacity, y: buttonY }}
          className="rounded-full pointer-events-auto px-6 py-4 md:px-12 md:py-5 bg-gradient-to-r from-violet-900 via-fuchsia-600 to-orange-400 text-white font-black tracking-[0.2em] text-[10px] md:text-sm hover:scale-110 transition-all duration-300 shadow-[0_0_60px_rgba(236,72,153,0.8)] hover:shadow-[0_0_90px_rgba(236,72,153,1)] uppercase whitespace-nowrap"
        >
          Contact Me
        </motion.button>
      </div>
    </section>
  )
}
