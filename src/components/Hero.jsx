import { useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function Hero() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const translateX = useTransform(springX, [-0.5, 0.5], [-20, 20])
  const translateY = useTransform(springY, [-0.5, 0.5], [-20, 20])
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])

  useEffect(() => {
    // Only add mouse parallax on non-touch devices
    if (window.matchMedia('(hover: hover)').matches) {
      const handleMouseMove = (e) => {
        mouseX.set((e.clientX / window.innerWidth) - 0.5)
        mouseY.set((e.clientY / window.innerHeight) - 0.5)
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
      
      {/* Background big text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[5] w-full pb-[28vh]">
        <h1 className="text-[13vw] font-black tracking-[-0.03em] text-[#e5e5e5] leading-none whitespace-nowrap select-none text-center w-full overflow-hidden scale-y-110 origin-bottom">
          HI, I'M AYUSH
        </h1>
      </div>

      {/* Left subtext + Right button row */}
      <div className="relative w-full max-w-[1400px] mx-auto flex items-center justify-between px-5 md:px-12 pointer-events-none z-[15] mt-[18vh]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-[140px] sm:max-w-[220px] md:max-w-[300px]"
        >
          <p className="text-gray-300 font-bold text-[9px] sm:text-[11px] md:text-sm leading-[1.7] tracking-wider uppercase">
            AI/ML & FULL-STACK DEV<br/>
            STUDENT BUILDING<br/>
            SMART APPS 🚀
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pointer-events-auto"
        >
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <button className="rounded-full px-4 py-3 sm:px-6 sm:py-4 md:px-12 md:py-5 bg-gradient-to-r from-violet-900 via-fuchsia-600 to-orange-400 text-white font-black tracking-[0.15em] text-[9px] sm:text-[11px] md:text-sm hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_40px_rgba(236,72,153,0.7)] uppercase -rotate-[4deg] hover:-rotate-1">
              Contact Me
            </button>
          </a>
        </motion.div>
      </div>

      {/* Center 3D Avatar */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-end pointer-events-none z-[25] w-full h-full">
        <motion.div
          style={{ x: translateX, y: translateY, rotateX, rotateY }}
          className="w-[90vw] sm:w-[420px] md:w-[650px] lg:w-[820px] max-w-[900px] h-[60vh] md:h-[65vh] relative flex justify-center items-end"
        >
          <img
            src="/3d_avatar_head_user.png"
            alt="3D Avatar"
            className="w-full h-full object-contain object-bottom drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
            draggable="false"
          />
        </motion.div>
      </div>

    </section>
  )
}

