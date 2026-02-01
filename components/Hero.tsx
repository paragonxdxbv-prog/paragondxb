import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  // Reduced parallax distance for smoother frame rates on lower-end devices
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-black pt-32 md:pt-0 transform-gpu">
      {/* Dynamic Background Image with Parallax */}
      <motion.div 
        style={{ y, scale: 1.1, transformOrigin: 'top center' }}
        className="absolute inset-0 z-0 bg-black"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[#000000] z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" /> 
        
        {/* Subtle Scanline Overlay - Optimized for Performance */}
        {/* mix-blend-overlay is expensive on mobile, using standard opacity instead */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] z-20 pointer-events-none"></div>

        {/* Optimized Image with Load Handler */}
        <motion.img 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ 
            opacity: isLoaded ? 1 : 0, 
            filter: isLoaded ? 'blur(0px)' : 'blur(10px)' 
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src="https://i.ibb.co/TxDGgNY7/Make-dis-picture-2k-202601182124.jpg" 
          alt="Hero Background" 
          fetchPriority="high"
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover object-top grayscale-[0.2]"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-30 text-center px-4 max-w-5xl mx-auto flex flex-col items-center justify-center pb-20 md:pb-0">
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0], delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-display font-bold text-white mb-6 drop-shadow-2xl leading-[1.0] md:leading-[0.9] pt-10 tracking-tighter"
        >
          PARA<span className="text-gray-500">GON</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "120px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] bg-white mx-auto mb-8 shadow-[0_0_20px_rgba(255,255,255,0.8)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Forging elite digital realities. <br className="hidden md:block" />
          <span className="text-white font-medium">Cinematic visuals</span> fused with <span className="text-white font-medium text-glow">Cyberpunk precision</span>.
        </motion.p>
      </div>
      
      {/* Bottom fade to merge with content */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#000000] to-transparent z-10 pointer-events-none" />
    </div>
  );
};