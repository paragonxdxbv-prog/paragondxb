import React from 'react';
import { motion } from 'framer-motion';

const languages = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "PYTHON", "POSTGRESQL", "SQL", "JAVASCRIPT"
];

const tools = [
  "VERCEL", "FIREBASE", "SUPABASE", "DOCKER", "FIGMA", "TAILWIND", "FRAMER MOTION", "THREE.JS", "GIT"
];

const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: string[], direction?: "left" | "right", speed?: number }) => (
  <div className="flex overflow-hidden relative z-20">
      <motion.div
        initial={{ x: direction === "left" ? 0 : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : 0 }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: speed 
        }}
        className="flex flex-shrink-0"
      >
        {[...Array(4)].map((_, i) => (
           <div key={i} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
             {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-default whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" />
                  <span className="text-base md:text-lg font-display font-bold text-gray-600 group-hover:text-white transition-colors duration-300 tracking-wider">
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
        className="flex flex-shrink-0"
      >
        {[...Array(4)].map((_, i) => (
           <div key={i} className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
             {items.map((item, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-default whitespace-nowrap">
                  <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300" />
                  <span className="text-base md:text-lg font-display font-bold text-gray-600 group-hover:text-white transition-colors duration-300 tracking-wider">
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
    <div className="w-full bg-black border-y border-white/10 py-8 relative z-20 flex flex-col gap-4">
      {/* Gradient Masks */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-black to-transparent z-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-black to-transparent z-30 pointer-events-none" />

      {/* Row 1: Languages (Left) */}
      <MarqueeRow items={languages} direction="left" speed={25} />

      {/* Row 2: Infrastructure (Right) */}
      <MarqueeRow items={tools} direction="right" speed={30} />
      
    </div>
  );
};