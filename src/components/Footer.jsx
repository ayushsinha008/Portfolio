export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-32 overflow-hidden flex flex-col justify-between min-h-[60vh] md:min-h-[70vh] rounded-t-[3rem] -mt-10 relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="px-6 md:px-24 flex flex-col lg:flex-row justify-between items-start mb-20 max-w-[1400px] mx-auto w-full gap-16">
        
        <div className="relative">
           <h2 
             className="text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-black uppercase leading-[0.8] tracking-widest text-transparent select-none relative z-10" 
             style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)', fontFamily: 'monospace' }}
           >
             AYUSH
           </h2>
           <h2 
             className="text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-black uppercase leading-[0.8] tracking-widest text-transparent select-none absolute top-[10px] left-[10px] z-0" 
             style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)', fontFamily: 'monospace' }}
           >
             AYUSH
           </h2>
        </div>
        
        <div className="flex flex-col gap-10 text-xs font-bold tracking-[0.2em] uppercase mt-4 md:mt-24 w-full lg:w-1/3">
          <span className="text-gray-500 mb-2">Social</span>
          <div className="flex flex-col gap-8 text-white w-full">
            <a href="#" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">Instagram</a>
            <a href="#" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">Artstation</a>
            <a href="#" className="hover:text-primary transition-colors border-b border-white/10 pb-4 pr-12 text-[14px]">Deviantart</a>
          </div>
        </div>
      </div>

      {/* Row of geometric shapes mimicking Screenshot 5 exactly utilizing pure CSS for scale and performance */}
      <div className="w-full flex justify-between items-end mt-auto gap-2 md:gap-4 overflow-x-hidden translate-y-[20%] px-2">
         {/* Purple Clover */}
         <div className="w-[12vw] h-[12vw] bg-violet-600 rounded-[2rem] md:rounded-[3rem] rotate-[15deg] flex items-center justify-center shrink-0 shadow-inner">
             <div className="w-[8vw] h-[2vw] bg-[#0a0a0a] absolute rounded-full"></div>
             <div className="h-[8vw] w-[2vw] bg-[#0a0a0a] absolute rounded-full"></div>
         </div>
         {/* Green Dots */}
         <div className="w-[12vw] h-[12vw] bg-lime-400 rounded-[1.5rem] md:rounded-[2.5rem] flex flex-wrap p-[1vw] shrink-0 shadow-inner">
            <div className="w-1/2 h-1/2 p-[0.4vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
            <div className="w-1/2 h-1/2 p-[0.4vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
            <div className="w-1/2 h-1/2 p-[0.4vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
            <div className="w-1/2 h-1/2 p-[0.4vw]"><div className="w-full h-full bg-[#0a0a0a] rounded-full"></div></div>
         </div>
         {/* White Crescent */}
         <div className="w-[12vw] h-[12vw] bg-gray-100 rounded-full flex shrink-0 justify-start items-center p-[2vw]">
            <div className="w-[12vw] h-[12vw] bg-[#0a0a0a] rounded-full transform -translate-x-[6vw]"></div>
         </div>
         {/* Purple Circle */}
         <div className="w-[12vw] h-[12vw] bg-blue-600 rounded-full shrink-0 shadow-inner"></div>
         {/* White Zig Zag */}
         <div className="w-[12vw] h-[12vw] bg-[#0a0a0a] shrink-0 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gray-100 transform skew-x-[30deg] scale-150"></div>
             <div className="absolute top-0 bottom-0 left-1/2 w-4 bg-[#0a0a0a] transform -translate-x-1/2 skew-x-[30deg]"></div>
         </div>
         {/* Orange Split Circle */}
         <div className="w-[12vw] h-[12vw] bg-orange-400 rounded-full flex shrink-0 items-center justify-between p-[1vw] shadow-inner rotate-90">
            <div className="w-[45%] h-full bg-[#0a0a0a] rounded-full"></div>
            <div className="w-[45%] h-full bg-[#0a0a0a] rounded-full"></div>
         </div>
         {/* White Up Arrow Triangle */}
         <div className="w-[12vw] h-[12vw] bg-gray-100 shrink-0 transform rotate-45 scale-75"></div>
         {/* Pink Donut */}
         <div className="w-[12vw] h-[12vw] bg-pink-500 rounded-full flex items-center justify-center shrink-0 shadow-inner">
             <div className="w-[6vw] h-[6vw] bg-[#0a0a0a] rounded-full"></div>
         </div>
      </div>
    </footer>
  )
}
