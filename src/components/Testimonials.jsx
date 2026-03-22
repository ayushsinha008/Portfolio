import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const reviewsLine1 = [
  { text: "The AI/ML models integrated into our system were outstanding. Precise, predictive, and highly optimized for our datasets.", author: "Tech Lab Inc.", title: "", image: "https://randomuser.me/api/portraits/men/32.jpg", width: "md:w-[400px]" },
  { text: "Alex brought our full-stack application to life. The backend architecture was so scalable and robust, it helped us secure major investors during the MVP phase.", author: "Michael T.", title: "Founder, Protosphere", image: "https://randomuser.me/api/portraits/men/45.jpg", width: "md:w-[450px]" },
  { text: "Exceeded all expectations in AI development. Outstanding results.", author: "David R., Apex", title: "", image: "https://randomuser.me/api/portraits/men/22.jpg", width: "md:w-[350px]" },
  { text: "Created highly efficient ML models for our research program. Incredibly useful and easy to implement workflow.", author: "Dr. Amanda K.", title: "Lead Scientist", image: "https://randomuser.me/api/portraits/women/44.jpg", width: "md:w-[450px]" }
];

const reviewsLine2 = [
  { text: "Alex's unique AI-driven designs and full-stack expertise made our platform a huge success. The UX was breathtaking.", author: "Rachel M.", title: "Director, MetaForm", image: "https://randomuser.me/api/portraits/women/68.jpg", width: "md:w-[450px]" },
  { text: "The full-stack features implemented perfectly. Fast, responsive, and SEO optimized architecture.", author: "James L.", title: "Lead Dev", image: "https://randomuser.me/api/portraits/men/62.jpg", width: "md:w-[400px]" },
  { text: "Superb execution on cloud integration. Everything runs so smoothly now.", author: "Peter W.", title: "CTO", image: "https://randomuser.me/api/portraits/men/85.jpg", width: "md:w-[350px]" },
  { text: "Delivered a full-stack solution that perfectly bridged the gap in our hardware and software setup.", author: "Mark D.", title: "VP Engineering", image: "https://randomuser.me/api/portraits/men/55.jpg", width: "md:w-[450px]" }
];

const reviewsLine3 = [
  { text: "Absolutely phenomenal work! The attention to detail and optimization in the models was amazing.", author: "Sarah C.", title: "CTO, DataSync", image: "https://randomuser.me/api/portraits/women/33.jpg", width: "md:w-[420px]" },
  { text: "Exceptional UI/UX skills. It completely transformed our user retention metrics.", author: "Elena V.", title: "Design Lead", image: "https://randomuser.me/api/portraits/women/24.jpg", width: "md:w-[380px]" },
  { text: "Very prompt delivery and zero downtime. Brilliant full-stack work.", author: "Chris T.", title: "Founder", image: "https://randomuser.me/api/portraits/men/33.jpg", width: "md:w-[380px]" },
  { text: "Highly resilient architecture. Best workflow setup we've ever had.", author: "Sarah K.", title: "Lead Engineer", image: "https://randomuser.me/api/portraits/women/12.jpg", width: "md:w-[380px]" }
];

const ReviewCard = ({ data }) => (
  <div className={`w-[85vw] ${data.width} border border-white/10 rounded-[2rem] p-6 md:p-8 flex flex-col justify-center bg-white/[0.03] backdrop-blur-xl shrink-0 whitespace-normal hover:bg-white/[0.06] transition-colors duration-500 cursor-default shadow-xl`}>
    <p className="text-sm text-gray-300 font-bold leading-relaxed italic mb-6">"{data.text}"</p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 shrink-0">
        <img src={data.image} alt={data.author} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col">
        <p className="text-white font-black text-[10px] uppercase tracking-widest">{data.author}</p>
        <p className="text-gray-400 font-bold text-[8px] uppercase tracking-widest mt-1">{data.title || "Client"}</p>
      </div>
    </div>
  </div>
);

export default function Testimonials() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  // Adjusted map ranges purely for scroll-linked movement
  const moveLeft1 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const moveRight = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])
  const moveLeft2 = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])

  return (
    <section ref={containerRef} id="customers" className="pt-32 pb-16 md:pt-48 md:pb-32 px-0 flex flex-col items-center bg-transparent border-t border-white/10 mt-12 md:mt-24 overflow-hidden">
      <div className="mb-12 md:mb-16 text-center flex flex-col items-center justify-center w-full px-5 md:px-0">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase drop-shadow-2xl">
          Client Reviews
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-violet-600 to-fuchsia-400 rounded-full mt-2 mb-4"></div>
      </div>

      <div className="w-full flex flex-col gap-6 md:gap-8 overflow-hidden relative z-20 py-8">
        
        {/* ROW 1 - Scrolls Left */}
        <motion.div 
          className="flex whitespace-nowrap gap-6 md:gap-8 px-4 w-max items-center"
          style={{ x: moveLeft1 }}
        >
          {/* Loop array items to ensure enough width for scroll */}
          {[...Array(3)].map((_, i) => (
            <div key={`r1-${i}`} className="flex gap-6 md:gap-8 items-center shrink-0">
              {reviewsLine1.map((item, index) => <ReviewCard key={index} data={item} />)}
            </div>
          ))}
        </motion.div>

        {/* ROW 2 - Scrolls Right */}
        <motion.div 
          className="flex whitespace-nowrap gap-6 md:gap-8 px-4 w-max items-center"
          style={{ x: moveRight }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={`r2-${i}`} className="flex gap-6 md:gap-8 items-center shrink-0">
              {reviewsLine2.map((item, index) => <ReviewCard key={index} data={item} />)}
            </div>
          ))}
        </motion.div>

        {/* ROW 3 - Scrolls Left */}
        <motion.div 
          className="flex whitespace-nowrap gap-6 md:gap-8 px-4 w-max items-center"
          style={{ x: moveLeft2 }}
        >
          {[...Array(3)].map((_, i) => (
            <div key={`r3-${i}`} className="flex gap-6 md:gap-8 items-center shrink-0">
              {reviewsLine3.map((item, index) => <ReviewCard key={index} data={item} />)}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
