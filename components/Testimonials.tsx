import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Quote } from 'lucide-react';

const REVIEWS = [
    { client: "Nexus Corp", text: "Unnatural speed. Delivered 3 days early. The architecture is flawless." },
    { client: "Aether Studios", text: "Understood cinema, not just code. A rare blend of talent." },
    { client: "Protocol_X", text: "Zero friction. Pure output. The most efficient dev we've hired." },
    { client: "Vortex Labs", text: "The visual identity is unmatched. Our conversion rates exploded." },
    { client: "CyberCore", text: "High-performance architecture that scales effortlessly." },
    { client: "Zenith DAO", text: "Best developer we've worked with. Total technical mastery." },
    { client: "Horizon", text: "Pixel perfect implementation. Every detail was considered." },
    { client: "Flux Systems", text: "Incredible attention to detail and motion design." },
    { client: "Neon Ventures", text: "Transformed our digital presence into a high-conversion asset." },
    { client: "Apex Digital", text: "Solid communication and rapid execution throughout." },
    { client: "Echo Base", text: "Optimized and scalable code. A true professional." },
    { client: "Synthetix", text: "A technical partner who actually understands business goals." }
];

const ReviewCard = ({ client, text }: { client: string, text: string }) => (
    <div className="flex-shrink-0 w-[85vw] max-w-[350px] md:w-[350px] p-6 md:p-8 bg-black border border-white/10 mx-3 md:mx-4 flex flex-col justify-between min-h-[16rem] h-auto hover:border-white transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] group whitespace-normal overflow-hidden">
        <div>
            <div className="flex gap-1 mb-4 md:mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-emerald-500 text-emerald-500 group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                ))}
            </div>
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed italic line-clamp-4">"{text}"</p>
        </div>
        <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                <span className="text-[10px] font-bold text-white">{client.charAt(0)}</span>
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] text-white truncate">{client}</span>
                <span className="text-[8px] md:text-[10px] font-mono text-gray-500 uppercase tracking-widest truncate mt-0.5">Verified Partner</span>
            </div>
            <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto shrink-0" />
        </div>
    </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-32 md:py-48 bg-transparent overflow-hidden relative">
       {/* Background Decorative Text */}
       <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
         TRUST
       </div>

       <div className="container mx-auto px-6 mb-24 flex flex-col md:flex-row justify-between items-end relative z-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-[0.4em] mb-4 block flex items-center gap-3">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,1)]" />
                Verified Intelligence
            </span>
            <h2 className="text-6xl md:text-9xl font-display font-black text-white uppercase tracking-tighter leading-none">
                FEEDBACK<br/>LOOP
            </h2>
          </div>
          <div className="hidden md:block h-px flex-grow mx-12 bg-gradient-to-r from-white/20 to-transparent mb-6" />
       </div>

       {/* Featured Testimonial */}
       <div className="container mx-auto px-6 mb-32 relative z-10">
           <motion.div 
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative p-10 md:p-20 bg-white/[0.02] border border-white/10 backdrop-blur-xl rounded-sm shadow-[0_0_50px_rgba(255,255,255,0.05)] group overflow-hidden"
           >
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
               <Quote className="absolute top-10 right-10 w-24 h-24 text-white/5 rotate-180 group-hover:text-white/10 transition-colors duration-700" />
               
               <div className="flex gap-2 mb-10">
                   {[...Array(5)].map((_, i) => (
                       <Star key={i} className="w-6 h-6 fill-emerald-500 text-emerald-500 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                   ))}
               </div>
               
               <p className="text-3xl md:text-5xl font-display font-medium text-white leading-[1.1] mb-12 max-w-5xl">
                   "Paragon completely re-architected our platform. Conversion rates jumped by <span className="text-emerald-400">140%</span> within the first month. The blend of cinematic design and flawless code is something you rarely find in a single developer."
               </p>
               
               <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                       <span className="text-xl font-bold text-white font-display">JD</span>
                   </div>
                   <div>
                       <h4 className="text-xl font-bold uppercase tracking-widest text-white">Jameson Davis</h4>
                       <p className="text-gray-500 text-sm font-mono uppercase tracking-[0.3em] mt-1">CEO, Sovereign Luxury</p>
                   </div>
               </div>
           </motion.div>
       </div>

       {/* Infinite Marquee - Row 1 (Left) */}
       <div className="relative flex overflow-x-hidden mb-12">
            <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-20" />
            
            <div className="animate-scroll flex whitespace-nowrap">
                {REVIEWS.map((review, i) => (
                    <ReviewCard key={i} client={review.client} text={review.text} />
                ))}
                 {/* Duplicate for seamless loop */}
                {REVIEWS.map((review, i) => (
                    <ReviewCard key={`dup-${i}`} client={review.client} text={review.text} />
                ))}
            </div>
       </div>

       {/* Infinite Marquee - Row 2 (Right - Reverse) */}
       <div className="relative flex overflow-x-hidden">
             <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-black via-black/90 to-transparent z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-black via-black/90 to-transparent z-20" />
            
            <div className="animate-scroll-reverse flex whitespace-nowrap">
                {REVIEWS.slice().reverse().map((review, i) => (
                    <ReviewCard key={i} client={review.client} text={review.text} />
                ))}
                 {/* Duplicate for seamless loop */}
                {REVIEWS.slice().reverse().map((review, i) => (
                    <ReviewCard key={`dup-${i}`} client={review.client} text={review.text} />
                ))}
            </div>
       </div>
    </section>
  );
};
