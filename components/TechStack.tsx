import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  "REACT", "NEXT.JS", "TYPESCRIPT", "NODE.JS", "FIREBASE", "SUPABASE", 
  "TAILWIND", "FRAMER MOTION", "THREE.JS", "PYTHON", "POSTGRESQL", "VERCEL"
];

export const TechStack: React.FC = () => {
  return (
    <div className="w-full bg-black border-y border-white/10 overflow-hidden py-6 relative z-20">
      {/* Gradient Masks to fade edges */}
      <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex">
        {/* Triple duplication for seamless loop on wide screens */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 // Speed of the ticker
            }}
            className="flex items-center gap-12 md:gap-24 px-6 md:px-12 flex-shrink-0"
          >
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-2 group cursor-default">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)] group-hover:bg-white group-hover:shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" />
                <span className="text-lg md:text-xl font-display font-bold text-gray-500 group-hover:text-white transition-colors duration-300 tracking-wider">
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};