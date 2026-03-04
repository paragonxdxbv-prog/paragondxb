import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { ShoppingBag, ArrowRight, Download, Star, ShieldCheck } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  return (
    <Section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-[0.4em] mb-4 block">
              Operational Assets
          </span>
          <h2 className="text-6xl md:text-9xl font-display font-black text-white mb-8 uppercase tracking-tighter leading-none">
            PREMIUM <span className="text-gray-600">ASSETS</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
            High-fidelity digital resources engineered to elevate your environment and cognitive workflow. 
            The tools of the elite, now accessible.
          </p>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.1 }}
           transition={{ duration: 0.8 }}
           style={{ willChange: 'transform, opacity' }}
           className="relative rounded-sm overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(255,255,255,0.05)] bg-black group hover:border-white/30 transition-all duration-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-[500px] lg:h-[700px] overflow-hidden bg-[#080808]">
                  <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.2 }}
                      src="https://i.ibb.co/0jt0Dkx7/Untitled-design-1.jpg" 
                      alt="Digital Motivation Poster Bundle" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                      loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  {/* Floating Badges */}
                  <div className="absolute top-8 left-8 flex flex-col gap-4">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-black/80 border border-white/20 text-xs font-bold text-white backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="tracking-widest uppercase">Bestseller</span>
                    </div>
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-500 backdrop-blur-xl">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="tracking-widest uppercase">Verified Asset</span>
                    </div>
                  </div>
              </div>

              {/* Content Side */}
              <div className="p-10 md:p-20 flex flex-col justify-center relative z-10 bg-black">
                   <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                   >
                      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white mb-10 shadow-[0_0_20px_rgba(255,255,255,0.05)] backdrop-blur-md uppercase tracking-[0.3em]">
                          <ShoppingBag className="w-4 h-4" />
                          <span>Digital Collection 01</span>
                      </div>

                      <h2 className="text-5xl md:text-7xl font-display font-black mb-10 text-white leading-[0.9] tracking-tighter uppercase">
                          Digital Motivation <br />
                          <span className="text-gray-600">Master Collection</span>
                      </h2>

                      <p className="text-gray-400 text-xl md:text-2xl mb-12 leading-relaxed border-l-4 border-white/20 pl-8 font-light italic">
                          High-definition digital environments designed to fuel absolute ambition. Transform your digital workspace into a command center of focus, discipline, and high-velocity output. <br/><br/>
                          <span className="text-white font-bold not-italic tracking-widest uppercase text-sm bg-white/10 px-4 py-2 inline-block mt-4">Download. Print. Dominate.</span>
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="flex items-center gap-4 group/item">
                          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white transition-colors">
                            <Download className="w-6 h-6 text-white" />
                          </div>
                          <div>
                              <span className="block text-sm text-white font-bold uppercase tracking-widest">Instant Access</span>
                              <span className="text-xs text-gray-500 font-mono">Immediate download post-purchase</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 group/item">
                          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-white transition-colors">
                            <ShieldCheck className="w-6 h-6 text-white" />
                          </div>
                          <div>
                              <span className="block text-sm text-white font-bold uppercase tracking-widest">Ultra Resolution</span>
                              <span className="text-xs text-gray-500 font-mono">Optimized for large format printing</span>
                          </div>
                        </div>
                      </div>

                      <a 
                          href="https://www.etsy.com/shop/ParagonDXB" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-full md:w-auto px-12 py-6 bg-white text-black font-black uppercase tracking-[0.2em] text-sm hover:bg-gray-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] group/btn"
                      >
                          Purchase on Etsy 
                          <ArrowRight className="w-6 h-6 ml-4 group-hover/btn:translate-x-2 transition-transform" />
                      </a>
                   </motion.div>
              </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};