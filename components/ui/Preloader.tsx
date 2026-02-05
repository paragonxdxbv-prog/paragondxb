import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HERO_IMAGE = "https://i.ibb.co/TxDGgNY7/Make-dis-picture-2k-202601182124.jpg";
const TARGET_TEXT = "PARAGON";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?";

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isExit, setIsExit] = useState(false);

  // 1. Image Preloading Logic
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setIsImageLoaded(true);
    // Fallback if image fails or takes too long (5s max)
    const timeout = setTimeout(() => setIsImageLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  // 2. Progress Bar Simulation (tied to image load)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        // If image isn't loaded, stall at 85%
        if (!isImageLoaded && prev >= 85) return 85;
        // If image IS loaded, race to 100%
        const increment = isImageLoaded ? 4 : 1; 
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isImageLoaded]);

  // 3. Text Decryption Effect
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        TARGET_TEXT
          .split("")
          .map((letter, index) => {
            if (index < iteration) return TARGET_TEXT[index];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      
      if (iteration >= TARGET_TEXT.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3; // Speed of decryption
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  // 4. Trigger Exit
  useEffect(() => {
    if (progress === 100) {
      setIsExit(true);
      // Wait for exit animation to finish before unmounting
      setTimeout(onComplete, 1200); 
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col pointer-events-none">
        {/* TOP SHUTTER */}
        <motion.div 
            initial={{ y: 0 }}
            animate={isExit ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="relative flex-1 bg-[#050505] w-full flex items-end justify-center border-b border-white/10 z-20"
        >
             {/* Content stays centered via absolute positioning relative to full screen, masked by shutters */}
             <div className="absolute bottom-0 w-full p-6 md:p-12 flex justify-between items-end pb-4 md:pb-8">
                <div className="overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 1 }}
                        animate={isExit ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.4 }}
                    >
                         <h1 className="text-[12vw] md:text-[10vw] font-display font-bold leading-none tracking-tighter text-white">
                            {displayText}
                         </h1>
                    </motion.div>
                </div>
             </div>
        </motion.div>

        {/* BOTTOM SHUTTER */}
        <motion.div 
            initial={{ y: 0 }}
            animate={isExit ? { y: "100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="relative flex-1 bg-[#050505] w-full flex items-start justify-center border-t border-white/10 z-20"
        >
             <div className="absolute top-0 w-full p-6 md:p-12 flex justify-between items-start pt-4 md:pt-8">
                 <motion.div 
                    initial={{ opacity: 1 }}
                    animate={isExit ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full flex justify-between items-start"
                 >
                     <div className="flex flex-col gap-2">
                        <span className="text-xs font-mono text-gray-500">SYSTEM STATUS</span>
                        <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${isImageLoaded ? 'bg-green-500' : 'bg-yellow-500 animate-pulse'}`} />
                             <span className="text-xs font-bold text-white tracking-widest uppercase">
                                {isImageLoaded ? "ASSETS READY" : "LOADING..."}
                             </span>
                        </div>
                     </div>

                     <div className="text-right">
                        <span className="text-[4rem] md:text-[6rem] font-display font-bold leading-none text-white/10">
                            {progress}%
                        </span>
                     </div>
                 </motion.div>
             </div>
        </motion.div>
    </div>
  );
};