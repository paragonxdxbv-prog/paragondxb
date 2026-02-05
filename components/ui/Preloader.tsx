import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Slight pause at 100%
          setTimeout(onComplete, 1500); // Allow fade out animation to finish
          return 100;
        }
        // Randomize increment for realism
        const increment = Math.floor(Math.random() * 10) + 1;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center text-white"
        >
          {/* Central Counter */}
          <div className="relative">
            <motion.h1 
                className="text-8xl md:text-9xl font-display font-bold tracking-tighter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                {count}%
            </motion.h1>
            
            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/10 to-transparent animate-scan pointer-events-none" />
          </div>

          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="h-1 w-64 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                    className="h-full bg-white"
                    style={{ width: `${count}%` }}
                />
            </div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest animate-pulse">
                Initializing Neural Link...
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};