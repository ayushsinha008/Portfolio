export default function Contact() {
  return (
    <section id="contact" className="py-16 px-5 md:py-28 md:px-24 bg-white text-black relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
       {/* Some placeholder images for lightning and flower floating here targeting screenshot 5 */}
       <img src="/3d_purple_flower.png" className="absolute bottom-10 left-[-5%] w-32 md:w-64 opacity-90 drop-shadow-xl" alt="flower" />
       
       <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center justify-between">
         
         <div className="w-full lg:w-5/12">
           <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black uppercase leading-[0.85] tracking-tighter mb-8 md:mb-12">
             Let's<br/>Get In<br/>Touch
           </h2>
           <div className="flex flex-col gap-4">
             <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Send me a message</span>
             <a href="mailto:ayush@example.com" className="text-base md:text-xl font-bold underline decoration-[2px] underline-offset-[10px] hover:text-primary transition-colors break-all">
               ayush@example.com
             </a>
           </div>
         </div>
         
         <div className="w-full lg:w-6/12">
           <form className="flex flex-col gap-10 w-full" onSubmit={(e) => e.preventDefault()}>
             <div className="flex flex-col md:flex-row gap-10">
               <div className="flex-1 border-b border-gray-300 pb-3">
                 <input type="text" placeholder="Full Name*" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black" />
               </div>
             </div>
             
             <div className="flex flex-col md:flex-row gap-10">
               <div className="flex-1 border-b border-gray-300 pb-3">
                 <input type="email" placeholder="Email*" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black" />
               </div>
               <div className="flex-1 border-b border-gray-300 pb-3">
                 <input type="tel" placeholder="Phone" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black" />
               </div>
             </div>
             
             <div className="border-b border-gray-300 pb-3">
               <textarea rows={2} placeholder="Message" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black resize-none"></textarea>
             </div>
             
             <button className="w-full py-5 mt-4 rounded-full border-2 border-black text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition-all shadow-md active:scale-[0.98]">
               Send
             </button>
           </form>
         </div>
       </div>
    </section>
  )
}
