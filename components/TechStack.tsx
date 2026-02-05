import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "PYTHON", "POSTGRESQL", "SQL", "JAVASCRIPT"
];

const tools = [
  "VERCEL", "FIREBASE", "SUPABASE", "DOCKER", "FIGMA", "TAILWIND", "FRAMER MOTION", "THREE.JS", "GIT"
];

const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: string[], direction?: "left" | "right", speed?: number }) => (
  <div className="flex overflow-hidden relative z-20 group">
      {/* Container for pause on hover */}
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
        className="flex flex-shrink-0 group-hover:[animation-play-state:paused]"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }} // Performance boost
      >
        {[...Array(4)].map((_, i) => (
           <div key={i} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
             {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 cursor-default whitespace-nowrap transition-opacity duration-300 hover:opacity-100 opacity-50">
                  <span className="w-1.5 h-1.5 bg-accent/50 rounded-full shadow-[0_0_8px_currentColor]" />
                  <span className="text-base md:text-lg font-display font-bold text-white tracking-wider">
                    {item}
                  </span>
                </div>
             ))}
           </div>
        ))}
      </motion.div>
      {/* Duplicated for seamless loop */}
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
        className="flex flex-shrink-0 group-hover:[animation-play-state:paused]"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      >
        {[...Array(4)].map((_, i) => (
           <div key={i} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
             {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 cursor-default whitespace-nowrap transition-opacity duration-300 hover:opacity-100 opacity-50">
                  <span className="w-1.5 h-1.5 bg-accent/50 rounded-full shadow-[0_0_8px_currentColor]" />
                  <span className="text-base md:text-lg font-display font-bold text-white tracking-wider">
                    {item}
                  </span>
                </div>
             ))}
           </div>
        ))}
      </motion.div>
  </div>
);

export const TechStack: React.FC = () => {
  return (
    <div className="w-full bg-black border-y border-white/10 py-12 relative z-20 flex flex-col gap-8">
      {/* Enhanced Gradient Masks for Smooth Fade Out */}
      <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-black via-black/80 to-transparent z-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-black via-black/80 to-transparent z-30 pointer-events-none" />

      {/* Row 1: Languages (Left) */}
      <MarqueeRow items={languages} direction="left" speed={40} />

      {/* Row 2: Infrastructure (Right) */}
      <MarqueeRow items={tools} direction="right" speed={40} />
      
    </div>
  );
};