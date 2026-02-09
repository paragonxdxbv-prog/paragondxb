import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HERO_IMAGE = "https://i.ibb.co/TxDGgNY7/Make-dis-picture-2k-202601182124.jpg";
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

// Matrix/Data Rain Effect Component
const DataStreamBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: '120vh', opacity: [0, 1, 0] }}
                    transition={{
                        duration: Math.random() * 2 + 1.5,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                    className="absolute w-[1px] bg-gradient-to-b from-transparent via-white to-transparent"
                    style={{
                        left: `${Math.random() * 100}%`,
                        height: `${Math.random() * 300 + 100}px`
                    }}
                />
            ))}
        </div>
    );
};

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isExit, setIsExit] = useState(false);
  const [logIndex, setLogIndex] = useState(0);

  // 1. Image Preloading
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE;
    img.onload = () => setIsImageLoaded(true);
    const timeout = setTimeout(() => setIsImageLoaded(true), 5000); // Fallback
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

    const logInterval = setInterval(() => {
        setLogIndex(prev => (prev + 1) % LOGS.length);
    }, 150); 

    return () => {
        clearInterval(interval);
        clearInterval(logInterval);
    };
  }, [isImageLoaded]);

  // 3. Exit Trigger
  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => setIsExit(true), 200);
      setTimeout(onComplete, 1400); 
    }
  }, [progress, onComplete]);

  return (
    // FIX: Scaled width/height to 133.33% to counter the 0.75 body zoom
    // This ensures the preloader covers the ENTIRE physical screen.
    <div 
        className="fixed top-0 left-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden font-sans"
        style={{ width: '133.33vw', height: '133.33vh', transform: 'translateZ(0)' }}
    >
        
        {/* Flash Effect */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={isExit ? { opacity: [0, 1, 0] } : { opacity: 0 }}
            transition={{ duration: 0.4, times: [0, 0.1, 1] }}
            className="absolute inset-0 bg-white z-50 pointer-events-none"
        />

        {/* Exit Shutters */}
        <motion.div 
            initial={{ y: "100%" }}
            animate={isExit ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 bg-black z-40"
        />
        <motion.div 
             initial={{ y: "-100%" }}
             animate={isExit ? { y: 0 } : { y: "-100%" }}
             transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
             className="absolute inset-0 bg-black z-40"
        />

        {/* Main Content Container (Fades out on exit) */}
        <motion.div 
            animate={isExit ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full flex flex-col items-center justify-center"
        >
            <DataStreamBackground />

            {/* Background Grid - Animated */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-20" />

            {/* REACTOR CORE VISUALIZATION */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center mb-12 transform-gpu">
                
                {/* Outer Targeting Reticle */}
                <div className="absolute inset-[-20px] border border-white/5 rounded-full" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[20px] bg-white/20" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[20px] bg-white/20" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[20px] h-[1px] bg-white/20" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20px] h-[1px] bg-white/20" />

                {/* Outer Ring - Slow Spin */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-0 rounded-full border-t border-white/30 animate-[spin_10s_linear_infinite]" />
                
                {/* Middle Ring - Reverse Spin */}
                <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_6s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border-r border-l border-white/20 animate-[spin_6s_linear_infinite_reverse]" />

                {/* Inner Ring - Fast Spin */}
                <div className="absolute inset-16 rounded-full border border-white/5 animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-16 rounded-full border-b-2 border-white/50 animate-[spin_3s_linear_infinite]" />

                {/* Core Number */}
                <div className="relative z-10 flex flex-col items-center justify-center bg-black rounded-full w-32 h-32 border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    <span className="text-4xl font-display font-bold text-white tabular-nums tracking-tighter mix-blend-screen">
                        {progress}
                    </span>
                    <span className="text-[10px] text-gray-500 font-mono mt-1">PERCENT</span>
                </div>

                {/* Scanner Line */}
                <div className="absolute inset-0 rounded-full animate-[spin_2s_linear_infinite] opacity-50">
                     <div className="w-full h-1/2 bg-gradient-to-t from-white/10 to-transparent blur-sm" />
                </div>
            </div>

            {/* Bottom HUD Area */}
            <div className="absolute bottom-12 left-0 right-0 px-8 flex justify-between items-end max-w-7xl mx-auto w-full">
                
                {/* Terminal Log */}
                <div className="hidden md:flex flex-col gap-1 w-64">
                    <div className="h-px w-full bg-white/20 mb-2" />
                    <div className="h-16 overflow-hidden flex flex-col justify-end mask-image:linear-gradient(to top, black, transparent)">
                        <span className="text-[10px] font-mono text-gray-600 uppercase opacity-50">&gt; {LOGS[(logIndex + 2) % LOGS.length]}</span>
                        <span className="text-[10px] font-mono text-gray-500 uppercase opacity-70">&gt; {LOGS[(logIndex + 1) % LOGS.length]}</span>
                        <span className="text-[10px] font-mono text-white uppercase">&gt; {LOGS[logIndex]}</span>
                    </div>
                </div>

                {/* System ID */}
                <div className="text-right">
                     <div className="flex items-center justify-end gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span className="text-xs font-bold text-white tracking-widest uppercase">
                            Paragon System
                        </span>
                     </div>
                     <span className="text-[10px] text-gray-500 font-mono">
                        VERSION: 4.1.0 <br/>
                        SCALE: 0.75X
                     </span>
                </div>
            </div>

        </motion.div>
    </div>
  );
};