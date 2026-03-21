import { motion } from 'framer-motion'

export default function Navbar() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-center items-center bg-black/50 backdrop-blur-md border-b border-white/10"
    >
      <div className="w-full flex justify-between max-w-[1400px] mx-auto text-xs sm:text-sm md:text-lg font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#e5e5e5] px-2 md:px-12">
        <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-fuchsia-500 transition-colors cursor-pointer">About</a>
        <a href="#customers" onClick={(e) => handleScroll(e, 'customers')} className="hover:text-fuchsia-500 transition-colors cursor-pointer">Customers</a>
        <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-fuchsia-500 transition-colors cursor-pointer">Projects</a>
        <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-fuchsia-500 transition-colors cursor-pointer">Contact</a>
      </div>
    </motion.nav>
  )
}
