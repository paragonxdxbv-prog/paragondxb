import { motion } from "motion/react";
import { Lock } from "lucide-react";

export default function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-17 md:py-22 w-full px-4 md:px-8 bg-black relative">
      <div className="max-w-[90rem] mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-11">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="font-mono text-[#C50022] text-[7px] tracking-widest">[ INVESTMENT ]</span>
          </motion.div>
          <motion.h2 
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-bold text-[10px] md:text-[11px] text-white mb-1"
          >
            Transparent pricing.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[11px] text-white/50"
          >
            Custom quotes. Always fair.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mb-11">
          
          {/* Card 1 */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "0px", amount: 0.1 }}
             transition={{ duration: 0.6, delay: 0.0 }}
             className="bg-[#0d0000] border border-white/20 rounded-[4px] p-6 flex flex-col items-start hover:-translate-y-1 hover:border-white/40 transition-all duration-300"
          >
             <h3 className="font-sans font-bold text-[10px] text-white mb-1 uppercase tracking-wider">QUICK BUILD</h3>
             <p className="font-mono text-[10px] text-white/70 mb-4 border-b border-white/10 pb-4 w-full">Starting $300</p>
             <p className="font-sans text-[10px] text-white mb-4">For simple but elite projects</p>
             
             <ul className="flex flex-col gap-2 mb-7 w-full">
                {['Landing page', 'Portfolio site', 'Simple branding', 'Presentation design'].map(f => (
                  <li key={f} className="flex items-center gap-2 font-sans text-[9px] text-white/60">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                    {f}
                  </li>
                ))}
             </ul>

             <button onClick={scrollToContact} className="mt-auto w-full py-2 border border-white/20 text-white font-sans font-bold uppercase text-[8px] rounded-[2px] hover:bg-white hover:text-black transition-colors">
               GET A QUOTE
             </button>
          </motion.div>

          {/* Card 2 */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "0px", amount: 0.1 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="bg-[#1a0000] border-2 border-[#C50022] rounded-[4px] p-6 md:p-7 flex flex-col items-start relative hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(197,0,34,0.15)] transition-all duration-300 md:-mt-3 md:-mb-3 z-10"
          >
             <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-[#C50022] text-white font-mono text-[6px] px-2 py-1 rounded-[2px] tracking-widest shadow-[0_4px_10px_rgba(197,0,34,0.3)]">
               MOST REQUESTED
             </div>
             
             <h3 className="font-sans font-bold text-[11px] text-white mb-1 uppercase tracking-wider">FULL PROJECT</h3>
             <p className="font-mono text-[10px] text-[#C50022] mb-4 border-b border-[#C50022]/30 pb-4 w-full">Starting $800</p>
             <p className="font-sans text-[10px] text-white mb-4 font-medium">For complete projects</p>
             
             <ul className="flex flex-col gap-3 mb-7 w-full">
                {['Full website with animations', 'SaaS platform', 'Automation system', 'Brand identity package'].map(f => (
                  <li key={f} className="flex items-center gap-2 font-sans text-[10px] text-white/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C50022]" />
                    {f}
                  </li>
                ))}
             </ul>

             <button onClick={scrollToContact} className="mt-auto w-full py-3 bg-[#C50022] text-white font-sans font-bold uppercase text-[9px] rounded-[2px] hover:bg-[#C50022]/90 hover:shadow-[0_0_20px_rgba(197,0,34,0.4)] transition-all tracking-wider">
               GET A QUOTE
             </button>
          </motion.div>

          {/* Card 3 */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "0px", amount: 0.1 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="bg-[#0d0000] border border-white/20 rounded-[4px] p-6 flex flex-col items-start hover:-translate-y-1 hover:border-white/40 transition-all duration-300"
          >
             <h3 className="font-sans font-bold text-[10px] text-white mb-1 uppercase tracking-wider">ENTERPRISE</h3>
             <p className="font-mono text-[10px] text-white/70 mb-4 border-b border-white/10 pb-4 w-full">Custom</p>
             <p className="font-sans text-[10px] text-white mb-4">For complex builds</p>
             
             <ul className="flex flex-col gap-2 mb-7 w-full">
                {['Multi-platform systems', 'Full product builds', 'Ongoing retainer', 'Team collaboration'].map(f => (
                  <li key={f} className="flex items-center gap-2 font-sans text-[9px] text-white/60">
                    <div className="w-1 h-1 rounded-full bg-white/40" />
                    {f}
                  </li>
                ))}
             </ul>

             <button onClick={scrollToContact} className="mt-auto w-full py-2 border border-white/20 text-white font-sans font-bold uppercase text-[8px] rounded-[2px] hover:bg-white hover:text-black transition-colors">
               LET'S TALK
             </button>
          </motion.div>

        </div>

        {/* Footer info */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "0px", amount: 0.1 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="flex flex-col items-center gap-3 text-center"
        >
          <div className="flex items-center gap-1 font-mono text-[8px] text-white/50 uppercase tracking-widest">
            <Lock className="w-2 h-2 text-[#C50022]" />
            50% upfront. 50% on delivery. No exceptions.
          </div>
          <p className="font-sans italic text-[9px] text-[#666666] max-w-md">
            Don't see your project? Tell us. If it's digital and legal — we quote it.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}
