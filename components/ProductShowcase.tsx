import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  return (
    <Section className="py-12">
      <motion.div 
         initial={{ opacity: 0, y: 15 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] bg-surface group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Side */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                    src="https://i.ibb.co/0jt0Dkx7/Untitled-design-1.jpg" 
                    alt="Digital Motivation Poster Bundle" 
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 md:bg-gradient-to-r md:from-transparent md:to-surface" />
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-16 flex flex-col justify-center relative z-10">
                 <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                 >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-medium text-accent mb-6 shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                        <ShoppingBag className="w-3 h-3" />
                        <span>Digital Asset</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
                        Digital Motivation <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">Bundle</span>
                    </h2>

                    <p className="text-gray-400 text-lg mb-8 leading-relaxed border-l-2 border-accent/30 pl-6">
                        High-definition digital environments designed to fuel ambition. <br/>
                        <span className="text-white">Download. Print. Dominate.</span>
                    </p>

                    <a 
                        href="https://www.etsy.com/shop/ParagonDXB" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white font-bold text-lg group/btn hover:text-accent transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    >
                        Purchase on Etsy 
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                 </motion.div>
            </div>
        </div>
      </motion.div>
    </Section>
  );
};