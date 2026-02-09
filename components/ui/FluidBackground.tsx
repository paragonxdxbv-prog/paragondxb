import React from 'react';
import { motion } from 'framer-motion';

export const FluidBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-black">
      {/* 
        This creates the "Yin Yang" mixing effect. 
        White blobs moving on a black background.
        High blur creates the smooth gradients.
      */}
      
      {/* Blob 1 - Top Left */}
      <motion.div 
        animate={{ 
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.5, 0.8, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-white rounded-full opacity-[0.4] blur-[100px]"
      />

      {/* Blob 2 - Bottom Right */}
      <motion.div 
        animate={{ 
            x: [0, -150, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[80vw] h-[80vw] bg-white rounded-full opacity-[0.3] blur-[120px]"
      />

      {/* Blob 3 - Center Mixing */}
      <motion.div 
        animate={{ 
            x: [-50, 50, -50],
            y: [-50, 50, -50],
            rotate: [0, 180, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[30%] left-[30%] w-[40vw] h-[40vw] bg-white rounded-full opacity-[0.2] blur-[80px]"
      />

      {/* Noise Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
    </div>
  );
};