import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState(''); // '' | 'loading' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ayushsinha391@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}!`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 px-5 md:py-28 md:px-24 bg-white text-black relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
       {/* Auto-Generated Venom Symbiote Liquid Abstract */}
       <div className="absolute bottom-[-10%] md:bottom-[-20%] left-[-15%] md:left-[-10%] w-[25rem] md:w-[50rem] aspect-square opacity-95 pointer-events-none drop-shadow-[0_45px_50px_rgba(0,0,0,0.9)] z-0 mix-blend-normal">
         <svg viewBox="-50 -50 300 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
           <defs>
             {/* Venom Symbiote black glossy gradients */}
             <radialGradient id="venom-grad" cx="30%" cy="30%" r="70%">
               <stop offset="0%" stopColor="#4c1d95" /> {/* Deep Purple/Indigo */}
               <stop offset="10%" stopColor="#3b0764" />
               <stop offset="25%" stopColor="#1e1e1e" />
               <stop offset="60%" stopColor="#0a0a0a" />
               <stop offset="85%" stopColor="#111111" />
               <stop offset="96%" stopColor="#303038" />
               <stop offset="100%" stopColor="#a855f7" /> {/* Bright Purple edge */}
             </radialGradient>
             <radialGradient id="venom-dark" cx="35%" cy="35%" r="65%">
               <stop offset="0%" stopColor="#3b0764" />
               <stop offset="30%" stopColor="#000000" />
               <stop offset="100%" stopColor="#000000" />
             </radialGradient>
             
             {/* Gooey Liquid Metal Filter (Symbiote style) */}
             <filter id="venom-liquid" x="-50%" y="-50%" width="200%" height="200%">
               <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
               {/* Increased color matrix contrast to make it more gooey and organic */}
               <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 45 -20" result="liquid" />
               <feComposite in="SourceGraphic" in2="liquid" operator="atop" />
             </filter>
             
             {/* Glow for Wet Highlights */}
             <filter id="wet-glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
             </filter>
           </defs>
           
           <g filter="url(#venom-liquid)">
             {/* Central Mass */}
             <circle cx="100" cy="100" r="55" fill="url(#venom-grad)" />
             
             {/* Dynamically rotating symbiote tendrils - merging and shifting */}
             <g style={{ transformOrigin: '100px 100px', animation: 'spin 20s linear infinite' }}>
               <path d="M100,-40 L125,75 L245,-10 L145,95 L260,170 L135,135 L170,260 L95,150 L-30,250 L70,125 L-50,45 L85,100 Z" fill="url(#venom-grad)" />
             </g>
             <g style={{ transformOrigin: '100px 100px', animation: 'spin 35s linear infinite reverse' }}>
               <path d="M100,-20 L115,85 L210,25 L130,110 L220,160 L120,135 L150,235 L90,145 L0,210 L65,120 L-35,60 L85,105 Z" fill="url(#venom-dark)" transform="rotate(45 100 100)" />
             </g>
             <g style={{ transformOrigin: '100px 100px', animation: 'spin 45s linear infinite' }}>
               <path d="M100,-60 L110,80 L235,-20 L135,95 L270,155 L120,130 L150,280 L95,140 L-55,200 L75,120 L-65,25 L85,100 Z" fill="url(#venom-grad)" transform="rotate(-60 100 100)" />
             </g>
             <g style={{ transformOrigin: '100px 100px', animation: 'spin 25s linear infinite reverse' }}>
               <path d="M100,-30 L112,90 L200,20 L125,105 L240,145 L115,135 L145,250 L95,140 L-20,200 L70,115 L-45,50 L85,95 Z" fill="url(#venom-dark)" transform="rotate(130 100 100)" />
             </g>
           </g>

           {/* Realistic Wet Specular Highlights for that pure Venom glossy skin */}
           <path d="M 60 30 Q 85 50 140 55 Q 110 70 70 120 Q 50 85 30 65 Q 55 65 60 30" fill="#ffffff" opacity="0.4" filter="url(#wet-glow)"/>
           <circle cx="85" cy="85" r="14" fill="#ffffff" opacity="0.3" filter="blur(3px)" />
           <circle cx="125" cy="115" r="8" fill="#ffffff" opacity="0.3" filter="blur(2px)" />
           <circle cx="65" cy="135" r="5" fill="#ffffff" opacity="0.5" filter="blur(1px)" />
         </svg>
       </div>
       
       <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center justify-between">
         
         <div className="w-full lg:w-5/12">
           <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold uppercase leading-[0.9] tracking-tight mb-8 md:mb-12" style={{ fontFamily: '"Playfair Display", "Didot", "Bodoni MT", "Times New Roman", serif' }}>
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-gray-600 to-gray-900 drop-shadow-sm">Let's</span><br/>
             <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 block my-2">get in</span>
             <span className="text-transparent bg-clip-text bg-gradient-to-b from-gray-400 via-gray-600 to-gray-900 drop-shadow-sm">Touch</span>
           </h2>
           <div className="flex flex-col gap-4">
             <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Send me a message</span>
             <a href="mailto:ayushsinha391@gmail.com" className="text-base md:text-xl font-bold underline decoration-[2px] underline-offset-[10px] hover:text-primary transition-colors break-all">
               ayushsinha391@gmail.com
             </a>
           </div>
         </div>
         
         <div className="w-full lg:w-6/12">
           <form className="flex flex-col gap-10 w-full" onSubmit={handleSubmit}>
             <div className="flex flex-col md:flex-row gap-10">
               <div className="flex-1 border-b border-gray-300 pb-3">
                 <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name*" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black" />
               </div>
             </div>
             
             <div className="flex flex-col md:flex-row gap-10">
               <div className="flex-1 border-b border-gray-300 pb-3">
                 <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email*" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black" />
               </div>
               <div className="flex-1 border-b border-gray-300 pb-3">
                 <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black" />
               </div>
             </div>
             
             <div className="border-b border-gray-300 pb-3">
               <textarea rows={2} name="message" value={formData.message} onChange={handleChange} required placeholder="Message*" className="w-full bg-transparent outline-none font-bold text-lg placeholder-gray-400 text-black resize-none"></textarea>
             </div>
             
             <button disabled={status === 'loading'} type="submit" className="w-full py-5 mt-4 rounded-full border-2 border-black text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-black hover:text-white transition-all shadow-md active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed">
               {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent! ✅' : status === 'error' ? 'Error. Try Again ❌' : 'Send Message'}
             </button>
           </form>
         </div>
       </div>
    </section>
  )
}
