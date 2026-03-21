import { useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth springs for mouse movement
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Parallax translation (medium sensitivity)
  const translateX = useTransform(springX, [-0.5, 0.5], [-25, 25])
  const translateY = useTransform(springY, [-0.5, 0.5], [-25, 25])
  
  // 3D Tilt properties (medium sensitivity)
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Background massive text - Centered, spanning full width behind everything */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5] w-full pb-[30vh]">
        <h1 className="text-[13vw] md:text-[14vw] lg:text-[15vw] font-black tracking-[-0.03em] text-[#e5e5e5] leading-none whitespace-nowrap select-none text-center w-full max-w-full overflow-hidden scale-y-110 origin-bottom">
          HI, I'M AYUSH
        </h1>
      </div>

      {/* Foreground Left and Right Floating Interactive Elements */}
      <div className="relative w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 pointer-events-none z-[15] mt-[20vh]">
        
        {/* Left Subtext */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-1/3 max-w-[300px]"
        >
          <p className="text-gray-300 font-bold text-[10px] md:text-sm leading-[1.6] tracking-wider uppercase text-left">
            AI/ML & FULL-STACK DEV<br/>
            STUDENT BUILDING<br/>
            SMART APPS 🚀
          </p>
        </motion.div>

        {/* Right Button */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-1/3 flex justify-end pointer-events-auto"
        >
          <button className="rounded-full px-6 py-4 md:px-12 md:py-5 bg-gradient-to-r from-violet-900 via-fuchsia-600 to-orange-400 text-white font-black tracking-[0.2em] text-[10px] md:text-sm hover:scale-110 transition-all duration-300 shadow-[0_0_60px_rgba(236,72,153,0.8)] hover:shadow-[0_0_90px_rgba(236,72,153,1)] uppercase whitespace-nowrap transform -rotate-[4deg] hover:-rotate-1">
            Contact Me
          </button>
        </motion.div>
        
      </div>

      {/* Center 3D Avatar Image - Pushed lower vertically and massive */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-[25] perspective-[1000px] w-full h-full pb-0">
        <motion.div
           style={{
             x: translateX,
             y: translateY,
             rotateX: rotateX,
             rotateY: rotateY,
           }}
           className="w-[100vw] sm:w-[500px] md:w-[700px] lg:w-[850px] max-w-[1000px] h-[65vh] relative pointer-events-auto cursor-pointer flex justify-center items-end"
        >
           <img 
             src="/3d_avatar_head_user.png" 
             alt="3D Avatar" 
             className="w-full h-full object-contain object-bottom filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
             draggable="false"
           />
        </motion.div>
      </div>

    </section>
  )
}
