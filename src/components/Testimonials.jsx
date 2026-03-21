export default function Testimonials() {
  return (
    <section id="customers" className="py-32 px-6 md:px-24 bg-transparent border-t border-white/10">
      <div className="mb-24 text-center flex flex-col items-center justify-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">What Clients<br/>Are Saying</h2>
        <span className="text-6xl drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter">😍</span>
      </div>
      
      {/* Heavy Bento Grid directly inspired by Screenshot 4 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-[250px]">
        {/* Row 1 */}
        <div className="col-span-1 border border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-center bg-black/40 backdrop-blur-md hover:border-primary/50 transition-colors">
           <p className="text-xs text-gray-400 font-medium leading-relaxed">"Detailed 3D models for our medical animation, and the quality was outstanding. Precise, realistic, and highly optimized."</p>
        </div>
        <div className="col-span-2 border border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-center bg-black/40 backdrop-blur-md hover:border-primary/50 transition-colors">
           <div className="flex items-center gap-6">
             <div className="min-w-[4rem] min-h-[4rem] rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 shadow-inner"></div>
             <div>
               <p className="text-xs text-gray-300 font-medium leading-relaxed mb-4">"Alex brought our product concept to life in a way we never thought possible. The 3D model was so detailed and realistic, it helped us secure investors."</p>
               <p className="text-white font-bold text-xs uppercase tracking-widest">Michael T., Protosphere</p>
             </div>
           </div>
        </div>
        <div className="col-span-1 border border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-center bg-black/40 backdrop-blur-md hover:border-primary/50 transition-colors">
           <div className="flex flex-col justify-center items-center text-center">
             <div className="w-[4rem] h-[4rem] rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 shadow-inner mb-4"></div>
             <p className="text-[10px] text-gray-300 font-medium leading-relaxed mb-2">"Exceeded all expectations. Outstanding."</p>
             <p className="text-white font-bold text-[9px] uppercase tracking-widest">David R., Apex</p>
           </div>
        </div>

        {/* Row 2 */}
        <div className="col-span-2 border border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-center bg-black/40 backdrop-blur-md hover:border-primary/50 transition-colors">
           <div className="flex items-center gap-6">
             <div className="min-w-[4rem] min-h-[4rem] rounded-full bg-gradient-to-tr from-gray-700 to-gray-500 shadow-inner"></div>
             <div>
               <p className="text-xs text-gray-300 font-medium leading-relaxed mb-4">"Alex's unique 3D designs made our NFT collection a huge success. The art was breathtaking, and professionalism made the process smooth."</p>
               <p className="text-white font-bold text-xs uppercase tracking-widest">Rachel M., MetaForm</p>
             </div>
           </div>
        </div>
        <div className="col-span-1 border border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-center bg-black/40 backdrop-blur-md hover:border-primary/50 transition-colors">
           <p className="text-[10px] text-gray-300 font-medium leading-relaxed mb-2">"Created detailed 3D models for our training program. Incredibly useful."</p>
           <p className="text-white font-bold text-[9px] uppercase tracking-widest mt-auto">Dr. Amanda K.</p>
        </div>
        <div className="col-span-1 border border-white/20 rounded-[2.5rem] p-8 flex flex-col justify-center bg-black/40 backdrop-blur-md hover:border-primary/50 transition-colors">
           <p className="text-[10px] text-gray-300 font-medium leading-relaxed">"The 3D assets implemented perfectly, responsive and optimized."</p>
           <p className="text-white font-bold text-[9px] uppercase tracking-widest mt-auto">James L.</p>
        </div>
      </div>
    </section>
  )
}
