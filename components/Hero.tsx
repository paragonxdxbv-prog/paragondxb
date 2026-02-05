import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // Reduced parallax effect for better performance
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-32 md:pb-24 bg-black transform-gpu">
      
      {/* Dynamic Background Image with Parallax */}
      <motion.div 
        style={{ y, scale: 1.1, transformOrigin: 'top center' }}
        className="absolute inset-0 z-0 bg-black"
      >
        {/* Gradient Overlay - Stronger at bottom to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" /> 
        
        {/* Optimized Image with Load Handler */}
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 1 }}
          src="https://i.ibb.co/TxDGgNY7/Make-dis-picture-2k-202601182124.jpg" 
          alt="Hero Background" 
          fetchPriority="high"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      {/* Content - Positioned at Bottom (justify-end in parent) */}
      <div className="relative z-30 px-6 max-w-7xl mx-auto w-full text-center md:text-left">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
            <h1 className="text-[13vw] md:text-9xl font-display font-bold text-white mb-2 drop-shadow-2xl leading-[0.9] tracking-tighter">
            PARA<span className="text-gray-500">GON</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mt-4">
                <div className="h-[2px] w-24 bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)] hidden md:block mt-4" />
                
                <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl text-shadow-sm">
                    Forging elite digital realities. <br />
                    <span className="text-white font-medium">Cinematic visuals</span> fused with <span className="text-white font-medium text-glow">Cyberpunk precision</span>.
                </p>
            </div>
        </motion.div>
      </div>
      
      {/* Bottom fade to merge with content */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent z-20 pointer-events-none" />
    </div>
  );
};