import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-32 md:pb-24 transform-gpu">
      
      {/* Background - Now handled by global FluidBackground, but we can add a subtle vignette here */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />

      {/* Content */}
      <div className="relative z-30 px-6 max-w-7xl mx-auto w-full text-center md:text-left">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            {/* Title Container */}
            <div className="relative inline-block group">
                {/* 
                   Mix Blend Mode Difference here creates the "Text inverting over blobs" effect 
                   Text is White. Background blobs are White. White on White with Difference = Black.
                   Text on Black bg = White. 
                */}
                <h1 className="relative z-10 text-[13vw] md:text-9xl font-display font-bold text-white mb-2 drop-shadow-2xl leading-[0.9] tracking-tighter mix-blend-difference">
                    PARA<span className="text-white/50">GON</span>
                </h1>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mt-4">
                <div className="h-[2px] w-24 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block mt-4 mix-blend-difference" />
                
                <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl text-shadow-sm mix-blend-difference">
                    Forging elite digital realities. <br />
                    <span className="font-bold text-white">Cinematic Visuals</span> fused with <span className="font-bold text-white">Disciplined Code</span>.
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};