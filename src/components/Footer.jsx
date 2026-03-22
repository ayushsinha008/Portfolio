export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-32 overflow-hidden flex flex-col justify-between min-h-[60vh] md:min-h-[70vh] rounded-t-[3rem] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="px-6 md:px-24 flex flex-col lg:flex-row justify-between items-start mb-20 max-w-[1400px] mx-auto w-full gap-16">
        
        <div className="flex flex-col mt-12 md:mt-24 cursor-default justify-center">
           <h2 
             className="text-[6rem] sm:text-[8rem] md:text-[11rem] lg:text-[14rem] xl:text-[17rem] leading-[0.85] text-white tracking-[0.03em] drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-[1.02] origin-left" 
             style={{ 
                 fontFamily: '"Playfair Display", "Didot", "Bodoni MT", "Times New Roman", serif',
                 fontWeight: '400',
             }}
           >
             Ayush
           </h2>
           <p className="text-gray-400/60 mt-8 max-w-sm text-sm tracking-[0.2em] uppercase font-light leading-relaxed ml-3 uppercase">
             Design & Development
           </p>
        </div>
        
        <div className="flex flex-col gap-10 text-xs font-bold tracking-[0.2em] uppercase mt-4 md:mt-12 w-full lg:w-1/3">
          <span className="text-gray-500 mb-2">Social</span>
          <div className="flex flex-col gap-8 text-white w-full">
            <a href="https://www.linkedin.com/in/ayush-sinha-46a37b365" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">LinkedIn</a>
            <a href="https://github.com/ayushsinha008" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">GitHub</a>
            <a href="https://x.com/Ayush_zxn07" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">Twitter / X</a>
            <a href="https://www.instagram.com/_ayush__704?igsh=MXQ4bGRqdDNsbGFtcw==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">Instagram</a>
          </div>
        </div>
      </div>

      {/* Row of geometric shapes mimicking Screenshot 5 exactly utilizing pure CSS for scale and performance */}
      <div className="w-full flex justify-between items-end mt-auto gap-4 overflow-x-hidden translate-y-[15%]">
         {/* Purple Clover */}
         <div className="w-[16vw] h-[16vw] bg-violet-600 rounded-[2.5rem] md:rounded-[4rem] rotate-[15deg] flex items-center justify-center shrink-0 shadow-inner">
             <div className="w-[11vw] h-[3vw] bg-[#0a0a0a] absolute rounded-full"></div>
             <div className="h-[11vw] w-[3vw] bg-[#0a0a0a] absolute rounded-full"></div>
         </div>
         {/* Green Dots */}
         <div className="w-[16vw] h-[16vw] bg-lime-400 rounded-[2rem] md:rounded-[3.5rem] flex flex-wrap p-[1.5vw] shrink-0 shadow-inner">
            <div className="w-1/2 h-1/2 p-[0.6vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
            <div className="w-1/2 h-1/2 p-[0.6vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
            <div className="w-1/2 h-1/2 p-[0.6vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
            <div className="w-1/2 h-1/2 p-[0.6vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
         </div>
         {/* White Crescent */}
         <div className="w-[16vw] h-[16vw] bg-gray-100 rounded-full flex shrink-0 justify-start items-center p-[2.5vw]">
            <div className="w-[16vw] h-[16vw] bg-[#0a0a0a] rounded-full transform -translate-x-[8vw]"></div>
         </div>
         {/* Purple Circle */}
         <div className="w-[16vw] h-[16vw] bg-blue-600 rounded-full shrink-0 shadow-inner"></div>
         {/* White Zig Zag */}
         <div className="w-[16vw] h-[16vw] bg-[#0a0a0a] shrink-0 flex items-center justify-center relative overflow-hidden text-transparent">
             <div className="absolute inset-0 bg-gray-100 transform skew-x-[30deg] scale-150"></div>
             <div className="absolute top-0 bottom-0 left-1/2 w-6 bg-[#0a0a0a] transform -translate-x-1/2 skew-x-[30deg]"></div>
         </div>
         {/* Orange Split Circle */}
         <div className="w-[16vw] h-[16vw] bg-orange-400 rounded-full flex shrink-0 items-center justify-between p-[1.5vw] shadow-inner rotate-90">
            <div className="w-[45%] h-full bg-[#0a0a0a] rounded-full"></div>
            <div className="w-[45%] h-full bg-[#0a0a0a] rounded-full"></div>
         </div>
         {/* White Up Arrow Triangle */}
         <div className="w-[16vw] h-[16vw] bg-gray-100 shrink-0 transform rotate-45 scale-75"></div>
         {/* Pink Donut */}
         <div className="w-[16vw] h-[16vw] bg-pink-500 rounded-full flex items-center justify-center shrink-0 shadow-inner">
             <div className="w-[8vw] h-[8vw] bg-[#0a0a0a] rounded-full"></div>
         </div>
      </div>
    </footer>
  )
}
