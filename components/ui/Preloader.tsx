import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["INITIALIZING", "LOADING ASSETS", "DECRYPTING", "OPTIMIZING", "RENDERING", "ACCESS GRANTED"];

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    // 1. Counter Animation (Faster, 0-100 in ~2s)
    const duration = 2200; 
    const steps = 60;
    const intervalTime = duration / steps;
    
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 3;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // 2. Word Cycle
    const wordTimer = setInterval(() => {
        setWordIndex(prev => (prev + 1) % words.length);
    }, 350);

    // 3. Trigger Completion
    const completeTimeout = setTimeout(() => {
        onComplete();
    }, 2500); // Tighter timing

    return () => {
      clearInterval(timer);
      clearInterval(wordTimer);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }} // Sharper exit
      className="fixed inset-0 z-[99999] bg-black flex flex-col justify-between p-6 md:p-12 text-white overflow-hidden cursor-wait"
    >
        {/* Top Bar */}
        <div className="flex justify-between items-start">
             <div className="flex flex-col gap-1 overflow-hidden">
                <motion.span 
                    initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xs font-mono tracking-widest text-gray-500"
                >
                    EST. 2024 // V2.0
                </motion.span>
                <motion.span 
                    initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-xs font-mono tracking-widest text-white font-bold"
                >
                    PARAGON DIGITAL
                </motion.span>
             </div>
             <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-gray-500 hidden md:inline-block w-24 text-right">
                    {words[wordIndex]}
                </span>
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
             </div>
        </div>

        {/* Center Typography - Masked Reveal */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="relative overflow-hidden flex flex-col items-center">
                {/* Title */}
                <div className="overflow-hidden">
                    <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="text-[14vw] md:text-[12vw] font-display font-bold leading-none tracking-tighter text-white mix-blend-difference"
                    >
                        PARAGON
                    </motion.h1>
                </div>
                {/* Subtitle Line */}
                <motion.div 
                     initial={{ width: 0, opacity: 0 }}
                     animate={{ width: "100px", opacity: 1 }}
                     transition={{ duration: 1, delay: 0.8 }}
                     className="h-[1px] bg-white mt-4"
                />
             </div>
        </div>

        {/* Bottom Bar / Counter */}
        <div className="flex justify-between items-end overflow-hidden">
             <div className="w-full md:w-1/3 flex flex-col gap-2">
                <span className="text-xs font-mono text-gray-500">SYSTEM CHECK</span>
                <div className="h-[2px] bg-white/10 w-full overflow-hidden">
                    <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2.2, ease: "linear" }}
                        className="h-full bg-white" 
                    />
                </div>
             </div>
             
             <div className="relative">
                <span className="text-[10vw] md:text-[6vw] font-display font-bold leading-none tracking-tighter tabular-nums text-white">
                    {count}
                </span>
                <span className="absolute top-2 -right-4 text-sm font-mono text-gray-500">%</span>
             </div>
        </div>
        
        {/* Subtle Background Glow for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};