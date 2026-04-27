import { motion } from "motion/react";

export default function Testimonials() {
  return (
    <section className="py-17 md:py-22 w-full px-4 md:px-8 bg-[#0a0000] border-t border-[rgba(197,0,34,0.15)] relative">
      <div className="max-w-[90rem] mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-14 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="font-mono text-[#C50022] text-[7px] tracking-widest">[ WHAT THEY SAY ]</span>
          </motion.div>
          <motion.h2 
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-bold text-[10px] md:text-[11px] text-white"
          >
            Results speak.
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          
          {/* Real card placeholder */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "0px", amount: 0.1 }}
             transition={{ duration: 0.6, delay: 0.0 }}
             className="bg-[#0d0000] border border-[rgba(197,0,34,0.15)] border-l-[3px] border-l-[#C50022] rounded-[4px] p-6 md:p-7 flex flex-col relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(197,0,34,0.1)] transition-all"
          >
             <div className="absolute top-3 right-4 font-display text-[63px] text-[#C50022] opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
               "
             </div>
             
             <p className="font-sans text-[11px] text-white/80 leading-[1.7] mb-7 relative z-10 italic">
               // REAL TESTIMONIAL NEEDED
             </p>

             <div className="mt-auto relative z-10 flex flex-col pt-4 border-t border-white/10">
               <h4 className="font-sans font-bold text-[10px] text-white uppercase tracking-wider mb-1">
                 // CLIENT NAME
               </h4>
               <p className="font-mono text-[7px] text-white/50 uppercase tracking-widest mb-2">
                 // PROJECT TYPE
               </p>
               <div className="bg-[rgba(197,0,34,0.1)] text-[#C50022] font-mono text-[6px] px-1 py-1 rounded-[2px] w-[fit-content]">
                 // RESULT METRIC
               </div>
             </div>
          </motion.div>

          {/* Pending 1 */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "0px", amount: 0.1 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="bg-[#0d0000] border border-[rgba(197,0,34,0.15)] border-l-[3px] border-l-[#C50022]/40 rounded-[4px] p-6 md:p-7 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[210px]"
          >
             <h4 className="font-sans font-bold text-[11px] text-white/80 mb-1">More results incoming.</h4>
             <p className="font-mono text-[8px] text-white/40 mb-4 uppercase tracking-widest">Currently building for clients.</p>
             <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="w-1 h-1 rounded-full bg-[#C50022]"
             />
          </motion.div>

          {/* Pending 2 */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "0px", amount: 0.1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#0d0000] border border-[rgba(197,0,34,0.15)] border-l-[3px] border-l-[#C50022]/40 rounded-[4px] p-6 md:p-7 flex flex-col items-center justify-center text-center relative overflow-hidden min-h-[210px]"
          >
             <h4 className="font-sans font-bold text-[11px] text-white/80 mb-1">More results incoming.</h4>
             <p className="font-mono text-[8px] text-white/40 mb-4 uppercase tracking-widest">Currently building for clients.</p>
             <motion.div 
               animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
               transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
               className="w-1 h-1 rounded-full bg-[#C50022]"
             />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
