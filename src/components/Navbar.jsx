import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false)
  };

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Customers', id: 'customers' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50 px-5 py-4 md:p-8 flex justify-between md:justify-center items-center bg-black/60 backdrop-blur-md border-b border-white/10"
      >
        {/* Desktop links */}
        <div className="hidden md:flex w-full justify-between max-w-[1400px] mx-auto text-sm md:text-lg font-black uppercase tracking-[0.3em] text-[#e5e5e5] px-12">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => handleScroll(e, l.id)} className="hover:text-fuchsia-500 transition-colors cursor-pointer">{l.label}</a>
          ))}
        </div>

        {/* Mobile: logo + hamburger */}
        <span className="md:hidden text-white font-black tracking-widest text-sm uppercase">Ayush</span>
        <button onClick={() => setOpen(o => !o)} className="md:hidden flex flex-col gap-[5px] p-2 z-50">
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </button>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[61px] left-0 w-full z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 flex flex-col items-center py-8 gap-8 md:hidden"
          >
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`} onClick={(e) => handleScroll(e, l.id)}
                className="text-white font-black uppercase tracking-[0.3em] text-base hover:text-fuchsia-500 transition-colors">
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
