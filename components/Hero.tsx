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
            className="w-full h-full object-cover"
         />
         {/* Stronger Gradient Overlay for Text Readability against the new image */}
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/30" />
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
                <div className="h-[2px] w-24 bg-white hidden md:block mt-4 box-shadow-[0_0_10px_white]" />
                
                <p className="text-lg md:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl text-shadow-md">
                    Forging elite digital realities. <br />
                    <span className="font-bold text-white">Cinematic Visuals</span> fused with <span className="font-bold text-white">Disciplined Code</span>.
                </p>
            </div>
        </motion.div>
      </div>
    </div>
  );
};