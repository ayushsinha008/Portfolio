export default function Testimonials() {
  return (
    <section id="customers" className="py-16 md:py-32 px-5 md:px-24 bg-transparent border-t border-white/10">
      <div className="mb-12 md:mb-24 text-center flex flex-col items-center justify-center">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
          Client Reviews
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-full mt-2"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto md:auto-rows-[280px]">
        {/* Row 1 */}
        <div className="col-span-1 border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.07] transition-all duration-500 group shadow-2xl min-h-[160px] md:min-h-0">
           <p className="text-sm text-gray-400 font-bold leading-relaxed group-hover:text-white transition-colors italic">"The AI/ML models integrated into our system were outstanding. Precise, predictive, and highly optimized for our datasets."</p>
           <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] mt-6 opacity-50 group-hover:opacity-100 transition-opacity">Tech Lab Inc.</p>
        </div>
        <div className="col-span-1 md:col-span-2 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-2xl hover:border-violet-500/30 transition-all duration-500 shadow-2xl group">
           <div className="flex items-center gap-8">
             <div className="min-w-[5rem] min-h-[5rem] rounded-2xl bg-gradient-to-tr from-violet-600 to-fuchsia-600 shadow-lg flex items-center justify-center text-white text-3xl font-black group-hover:scale-110 transition-transform">MT</div>
             <div>
               <p className="text-base text-gray-300 font-bold leading-snug mb-6 group-hover:text-white transition-colors italic">"Alex brought our full-stack application to life. The backend architecture was so scalable and robust, it helped us secure major investors during the MVP phase."</p>
               <div className="flex flex-col">
                  <p className="text-white font-black text-xs uppercase tracking-[0.3em]">Michael T.</p>
                  <p className="text-fuchsia-400 font-bold text-[10px] uppercase tracking-widest mt-1">Founder, Protosphere</p>
               </div>
             </div>
           </div>
        </div>
        <div className="col-span-1 border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center items-center text-center bg-white/[0.03] backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-500 shadow-2xl group min-h-[180px] md:min-h-0">
             <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 mb-6 flex items-center justify-center text-white text-2xl font-black group-hover:rotate-12 transition-transform shadow-lg">DR</div>
             <p className="text-xs text-gray-300 font-bold leading-relaxed mb-4 italic group-hover:text-white transition-colors">"Exceeded all expectations in AI development. Outstanding results."</p>
             <p className="text-white font-black text-[10px] uppercase tracking-widest">David R., Apex</p>
        </div>

        {/* Row 2 */}
        <div className="col-span-1 md:col-span-2 border border-white/10 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 flex flex-col justify-center bg-gradient-to-bl from-white/[0.05] to-transparent backdrop-blur-2xl hover:border-fuchsia-500/30 transition-all duration-500 shadow-2xl group">
           <div className="flex items-center gap-8">
             <div className="min-w-[5rem] min-h-[5rem] rounded-2xl bg-gradient-to-tr from-orange-500 to-rose-500 shadow-lg flex items-center justify-center text-white text-3xl font-black group-hover:-rotate-6 transition-transform">RM</div>
             <div>
               <p className="text-base text-gray-300 font-bold leading-snug mb-6 group-hover:text-white transition-colors italic">"Alex's unique AI-driven designs and full-stack expertise made our platform a huge success. The UX was breathtaking, and the professionalism was top-notch."</p>
               <div className="flex flex-col">
                  <p className="text-white font-black text-xs uppercase tracking-[0.3em]">Rachel M.</p>
                  <p className="text-orange-400 font-bold text-[10px] uppercase tracking-widest mt-1">Director, MetaForm</p>
               </div>
             </div>
           </div>
        </div>
        <div className="col-span-1 border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 shadow-2xl group min-h-[160px] md:min-h-0">
           <p className="text-xs text-gray-300 font-bold leading-relaxed italic group-hover:text-white transition-colors">"Created highly efficient ML models for our research program. Incredibly useful and easy to implement."</p>
           <div className="mt-8">
              <p className="text-white font-black text-[10px] uppercase tracking-[0.2em]">Dr. Amanda K.</p>
              <div className="w-8 h-1 bg-violet-600 rounded-full mt-2"></div>
           </div>
        </div>
        <div className="col-span-1 border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-between bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-all duration-500 shadow-2xl group border-l-4 border-l-fuchsia-600/50 min-h-[160px] md:min-h-0">
           <p className="text-xs text-gray-300 font-bold leading-relaxed italic group-hover:text-white transition-colors">"The full-stack features implemented perfectly. Fast, responsive, and SEO optimized architecture."</p>
           <div className="mt-8">
              <p className="text-white font-black text-[10px] uppercase tracking-[0.2em]">James L.</p>
              <p className="text-gray-500 font-bold text-[9px] uppercase mt-1">Lead Dev</p>
           </div>
        </div>
      </div>
    </section>
  )
}
