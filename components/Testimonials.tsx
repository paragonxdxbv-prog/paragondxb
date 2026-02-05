import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { MessageSquareQuote, Star, Terminal, CheckCircle2 } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    client: "Nexus Corp",
    role: "FinTech Startup",
    content: "The speed of execution was unnatural. Paragon delivered a fully functional, enterprise-grade architecture three days ahead of schedule. The visuals alone increased our conversion rate by 40%.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    client: "Aether Studios",
    role: "Creative Agency",
    content: "We needed a developer who understood cinema, not just code. Paragon bridged that gap perfectly. The motion design is fluid, optimized, and incredibly polished.",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    client: "Protocol_X",
    role: "Web3 DAO",
    content: "Zero friction. We handed over the brief, and the result was a pixel-perfect implementation. The 'Solo Operative' claim is real—no communication lag, just pure output.",
    rating: 5,
    verified: true
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" className="py-20 bg-[#020202]">
       {/* Background Noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
       
       <div className="mb-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
             <div className="flex justify-center mb-4">
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-green-500" />
                    <span className="text-xs font-mono text-green-500 tracking-widest uppercase">Decrypted Logs</span>
                </div>
             </div>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Client <span className="text-gray-500">Intel</span>
             </h2>
          </motion.div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {testimonials.map((t, i) => (
             <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }} // Immediate trigger
                transition={{ duration: 0.5, delay: Math.min(i * 0.1, 0.2) }} // Cap delay
                className="bg-[#080808] border border-white/10 p-8 rounded-2xl relative group hover:border-white/30 transition-colors duration-500 flex flex-col h-full"
             >
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                    <MessageSquareQuote className="w-12 h-12 text-white" />
                </div>

                <div className="flex gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    ))}
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 relative z-10 font-light flex-grow">
                    "{t.content}"
                </p>

                <div className="border-t border-white/10 pt-6 flex flex-col relative">
                    <div className="flex justify-between items-center">
                        <span className="text-white font-bold font-display tracking-wide text-lg">{t.client}</span>
                        {t.verified && (
                             <div className="flex items-center gap-1 text-xs text-green-500 bg-green-900/20 px-2 py-0.5 rounded-full border border-green-900/30">
                                <CheckCircle2 className="w-3 h-3" />
                                <span>Verified</span>
                             </div>
                        )}
                    </div>
                    <span className="text-xs text-gray-500 uppercase tracking-widest mt-1">{t.role}</span>
                </div>
             </motion.div>
          ))}
       </div>
    </Section>
  );
};