import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Counter Animation (0 to 100 in ~2.5s)
    const duration = 2000; 
    const steps = 60;
    const intervalTime = duration / steps;
    
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + Math.floor(Math.random() * 5) + 2;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    // 2. Trigger Completion
    const completeTimeout = setTimeout(() => {
        onComplete();
    }, 2800); // Slight delay after 100% to show final state

    return () => {
      clearInterval(timer);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[99999] bg-black flex flex-col justify-between p-6 md:p-12 text-white overflow-hidden cursor-wait"
    >
        {/* Top Bar */}
        <div className="flex justify-between items-start opacity-0 animate-in fade-in duration-1000 delay-100 fill-mode-forwards">
             <div className="flex flex-col">
                <span className="text-xs font-mono tracking-widest text-gray-400">EST. 2024</span>
                <span className="text-xs font-mono tracking-widest text-white">PARAGON DIGITAL</span>
             </div>
             <div className="animate-pulse">
                <div className="w-2 h-2 bg-white rounded-full"></div>
             </div>
        </div>

        {/* Center Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="relative overflow-hidden">
                <motion.h1 
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[15vw] md:text-[12vw] font-display font-bold leading-none tracking-tighter text-white mix-blend-difference"
                >
                    PARAGON
                </motion.h1>
             </div>
        </div>

        {/* Bottom Bar / Counter */}
        <div className="flex justify-between items-end">
             <div className="hidden md:block w-1/3 h-[1px] bg-white/20">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "linear" }}
                    className="h-full bg-white" 
                />
             </div>
             
             <div className="text-[12vw] md:text-[8vw] font-display font-bold leading-none tracking-tighter tabular-nums">
                {count}
             </div>
        </div>
        
        {/* Subtle Background Glow for Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};