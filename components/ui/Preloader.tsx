import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, Wifi, ShieldCheck, Zap } from 'lucide-react';

const bootText = [
  "INITIALIZING KERNEL...",
  "LOADING ASSETS...",
  "ESTABLISHING SECURE CONNECTION...",
  "OPTIMIZING NEURAL NET...",
  "ACCESS GRANTED."
];

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Text Cycle Timer
    const textTimer = setInterval(() => {
      setTextIndex(prev => (prev < bootText.length - 1 ? prev + 1 : prev));
    }, 600);

    // Progress Bar Timer (Runs for approx 3.5 seconds)
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          clearInterval(textTimer);
          setTimeout(onComplete, 800); // Wait a bit after 100%
          return 100;
        }
        return prev + Math.random() * 5; // Random jumpy loading
      });
    }, 100);

    return () => {
      clearInterval(textTimer);
      clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }} // Shutter effect upwards
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Central Logo / Icon */}
        <div className="flex justify-center mb-8">
            <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20 animate-pulse"></div>
                <Cpu className="w-16 h-16 text-white relative z-10" />
            </div>
        </div>

        {/* Percentage */}
        <div className="text-right mb-2">
            <span className="text-6xl font-display font-bold tabular-nums tracking-tighter">
                {Math.min(100, Math.floor(progress))}
            </span>
            <span className="text-xl text-green-500 ml-1">%</span>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden mb-4">
            <motion.div 
                className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                style={{ width: `${progress}%` }}
            />
        </div>

        {/* Boot Text */}
        <div className="h-6 flex items-center gap-2 text-xs font-mono text-green-500">
            <Terminal className="w-3 h-3" />
            <span className="uppercase tracking-widest animate-pulse">
                {bootText[textIndex]}
            </span>
        </div>

        {/* System Icons Row */}
        <div className="mt-12 flex justify-between border-t border-white/10 pt-4 opacity-50">
            <div className="flex flex-col items-center gap-1">
                <Wifi className={`w-4 h-4 ${progress > 30 ? 'text-white' : 'text-gray-600'}`} />
                <span className="text-[9px] uppercase tracking-widest">Net</span>
            </div>
            <div className="flex flex-col items-center gap-1">
                <ShieldCheck className={`w-4 h-4 ${progress > 60 ? 'text-white' : 'text-gray-600'}`} />
                <span className="text-[9px] uppercase tracking-widest">Sec</span>
            </div>
             <div className="flex flex-col items-center gap-1">
                <Zap className={`w-4 h-4 ${progress > 90 ? 'text-white' : 'text-gray-600'}`} />
                <span className="text-[9px] uppercase tracking-widest">Pwr</span>
            </div>
        </div>
      </div>
    </motion.div>
  );
};