import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-32 md:pb-24">
      
      {/* Background Image Layer */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
         <img 
            src="https://i.ibb.co/h1sp6T4v/Extend-dis-picture-2k-202602092014.jpg" 
            alt="Hero Background" 
            // FIXED: Focus on top center (Head/Plane) to cut off legs
            className="w-full h-full object-cover object-[50%_15%]"
         />
         
         {/* 1. Cinematic Vignette (Smooth radial gradient, NO hard lines) */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.9)_100%)]" />

         {/* 2. Bottom Fade for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full text-center md:text-left">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            {/* Title Container */}
            <h1 className="text-[13vw] md:text-9xl font-display font-bold text-white mb-2 leading-[0.9] tracking-tighter drop-shadow-2xl">
                PARA<span className="text-gray-400">GON</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mt-4">
                <div className="h-[2px] w-24 bg-white hidden md:block mt-4 shadow-[0_0_15px_white]" />
                
                <div>
                    <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl text-shadow-md">
                        Forging elite digital realities. <br />
                        <span className="font-bold text-white">Cinematic Visuals</span> fused with <span className="font-bold text-white">Disciplined Code</span>.
                    </p>
                    
                    {/* Notice Badge */}
                    <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-white/20 bg-black/50 backdrop-blur-md rounded-sm shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                        <p className="text-xs font-mono text-gray-300 uppercase tracking-widest">
                            <span className="text-white font-bold">NOTICE:</span> Custom Project = Custom Pricing
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </div>
  );
};