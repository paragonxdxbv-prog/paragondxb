import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const HERO_IMAGE = "https://i.ibb.co/TxDGgNY7/Make-dis-picture-2k-202601182124.jpg";
const TARGET_TEXT = "PARAGON";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?";

const LOGS = [
    "INITIALIZING KERNEL...",
    "ALLOCATING MEMORY HEAPS...",
    "BYPASSING SECURITY PROTOCOLS...",
    "MOUNTING VIRTUAL DOM...",
    "FETCHING HIGH-RES ASSETS...",
    "OPTIMIZING GPU THREADS...",
    "DECRYPTING SECURE KEYS...",
    "ESTABLISHING UPLINK...",
    "RENDERING VIEWPORT...",
    "SYSTEM READY."
];

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  // 1. Image Preloading
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setIsImageLoaded(true);
    const timeout = setTimeout(() => setIsImageLoaded(true), 5000);
    return () => clearTimeout(timeout);
  }, []);

  // 2. Progress & Logs
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (!isImageLoaded && prev >= 85) return 85;
        const increment = isImageLoaded ? 4 : 1; 
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          return 100;
        }
        return next;
      });
    }, 40);

    // Log cycler
    const logInterval = setInterval(() => {
        setLogIndex(prev => (prev + 1) % LOGS.length);
    }, 250);

    return () => {
        clearInterval(interval);
        clearInterval(logInterval);
    };
  }, [isImageLoaded]);

  // 3. Decryption
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
      if (iteration >= TARGET_TEXT.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // 4. Exit Trigger
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setIsExit(true), 200); // Slight pause at 100 before blast
      setTimeout(onComplete, 1400); 
    }
  }, [progress, onComplete]);

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col pointer-events-none">
        
        {/* Flash Effect on Completion */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isExit ? { opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ duration: 0.4, times: [0, 0.1, 1] }}
            className="absolute inset-0 bg-white z-50 pointer-events-none"
        />

        {/* TOP SHUTTER */}
        <motion.div 
            initial={{ y: 0 }}
            animate={isExit ? { y: "-100%" } : { y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="relative flex-1 bg-[#050505] w-full flex items-end justify-center border-b border-white/10 z-20"
        >
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
                    className="w-full grid grid-cols-2 md:grid-cols-3 gap-4"
                 >
                     {/* Col 1: Status */}
                     <div className="flex flex-col gap-2">
                        <span className="text-xs font-mono text-gray-500">SYSTEM STATUS</span>
                        <div className="flex items-center gap-2">
                             <div className={`w-2 h-2 rounded-full ${isImageLoaded ? 'bg-white' : 'bg-gray-600 animate-pulse'}`} />
                             <span className="text-xs font-bold text-white tracking-widest uppercase">
                                {isImageLoaded ? "ASSETS READY" : "LOADING..."}
                             </span>
                        </div>
                     </div>

                     {/* Col 2: Terminal Log (Visible on desktop) */}
                     <div className="hidden md:flex flex-col gap-1 overflow-hidden h-12">
                         <span className="text-[10px] font-mono text-gray-600 uppercase"> > {LOGS[logIndex]}</span>
                         <span className="text-[10px] font-mono text-gray-700 uppercase"> > {LOGS[(logIndex + 1) % LOGS.length]}</span>
                     </div>

                     {/* Col 3: Percentage */}
                     <div className="text-right md:col-start-3">
                        <span className="text-[4rem] md:text-[6rem] font-display font-bold leading-none text-white/10 tabular-nums">
                            {progress}%
                        </span>
                     </div>
                 </motion.div>
             </div>
        </motion.div>
    </div>
  );
};