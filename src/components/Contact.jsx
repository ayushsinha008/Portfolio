export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-24 bg-white text-black relative overflow-hidden rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
       {/* Some placeholder images for lightning and flower floating here targeting screenshot 5 */}
       <img src="/3d_purple_flower.png" className="absolute bottom-10 left-[-5%] w-32 md:w-64 opacity-90 drop-shadow-xl" alt="flower" />
       
       <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center justify-between">
         
         <div className="w-full lg:w-5/12">
           <h2 className="text-6xl md:text-8xl lg:text-[8rem] font-black uppercase leading-[0.8] tracking-tighter mb-12">
             Let's<br/>Get In<br/>Touch
           </h2>
           <a href="mailto:alex@3dturner.cc" className="text-xl md:text-2xl font-bold underline decoration-[3px] underline-offset-[12px] hover:text-primary transition-colors">
             alex@3dturner.cc
           </a>
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
