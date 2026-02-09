import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGS = [
    "INITIALIZING SYSTEM CORE...",
    "LOADING HIGH-RES ASSETS...",
    "OPTIMIZING GPU THREADS...",
    "ESTABLISHING SECURE CONNECTION...",
    "DECRYPTING DATA STREAMS...",
    "RENDERING VIEWPORT...",
    "SYSTEM READY."
];

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isExit, setIsExit] = useState(false);
  const [windowDimension, setWindowDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  // Simulation Logic
  useEffect(() => {
    const duration = 2500; // 2.5 seconds total load time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => setIsExit(true), 200); // Pause at 100% briefly
        setTimeout(onComplete, 1200); // Trigger app reveal after shutter animation
      }
    }, intervalTime);

    const logTimer = setInterval(() => {
        setLogIndex(prev => (prev + 1) % LOGS.length);
    }, 350);

    return () => {
        clearInterval(timer);
        clearInterval(logTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center font-sans overflow-hidden">
        
        {/* 
           Background Layer 
           We use a semi-transparent black to let the GlobalBackground (from App.tsx) subtly show through,
           maintaining visual continuity.
        */}
        <motion.div 
            initial={{ opacity: 1 }}
            animate={isExit ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"
        />

        {/* Shutter Effect for Exit */}
        <motion.div
            initial={{ height: "50vh" }}
            animate={isExit ? { height: 0 } : { height: "50vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute top-0 left-0 w-full bg-black z-20 border-b border-white/10"
        />
        <motion.div
            initial={{ height: "50vh" }}
            animate={isExit ? { height: 0 } : { height: "50vh" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute bottom-0 left-0 w-full bg-black z-20 border-t border-white/10"
        />

        {/* Main Content Container */}
        <motion.div 
            animate={isExit ? { scale: 1.1, opacity: 0, filter: "blur(20px)" } : { scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="relative z-30 flex flex-col items-center justify-center w-full h-full"
        >
            
            {/* Cinematic Aperture HUD */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center mb-12">
                {/* Center Glow */}
                <div className="absolute inset-0 bg-white/5 rounded-full blur-3xl animate-pulse" />

                {/* Progress Text */}
                <div className="relative z-10 flex flex-col items-center">
                    <span className="text-7xl md:text-8xl font-display font-bold text-white tracking-tighter tabular-nums drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                        {progress}
                    </span>
                    <span className="text-xs font-mono text-gray-400 tracking-[0.2em] mt-2">SYSTEM LOADING</span>
                </div>

                {/* Rotating Rings */}
                <div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border-t border-r border-white/20 animate-[spin_8s_linear_infinite_reverse]" />
                <div className="absolute inset-12 rounded-full border border-dashed border-white/10 animate-[spin_12s_linear_infinite]" />
                
                {/* Scanning Line */}
                <div className="absolute inset-0 rounded-full animate-[spin_3s_linear_infinite] opacity-30">
                     <div className="w-full h-1/2 bg-gradient-to-t from-white/20 to-transparent blur-sm" />
                </div>

                {/* Decorative Ticks */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/50" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-4 bg-white/50" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white/50" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-[1px] bg-white/50" />
            </div>

            {/* Bottom Info HUD */}
            <div className="absolute bottom-12 left-0 right-0 px-8 max-w-7xl mx-auto w-full flex justify-between items-end">
                 {/* Terminal Logs */}
                 <div className="hidden md:flex flex-col gap-1 w-72">
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/30 to-transparent mb-3" />
                    <div className="h-12 overflow-hidden flex flex-col justify-end">
                         <span className="text-[10px] font-mono text-gray-600 uppercase">&gt; {LOGS[(logIndex + 1) % LOGS.length]}</span>
                         <span className="text-[10px] font-mono text-white uppercase animate-pulse">&gt; {LOGS[logIndex]}</span>
                    </div>
                 </div>

                 {/* System Stats */}
                 <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                        <span className="text-xs font-bold text-white tracking-widest uppercase">Paragon OS v4.1</span>
                    </div>
                    <p className="text-[10px] text-gray-500 font-mono">
                        {windowDimension.width}px X {windowDimension.height}px <br/>
                        LATENCY: 12ms
                    </p>
                 </div>
            </div>

        </motion.div>
    </div>
  );
};