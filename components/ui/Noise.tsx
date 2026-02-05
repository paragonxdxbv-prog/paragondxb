import React from 'react';

export const Noise: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.04] mix-blend-overlay">
      {/* 
         The background image is a repeatable noise SVG.
         The 'animate-noise' class (defined in tailwind config) moves this layer rapidly
         to create the 'static' TV effect.
      */}
      <div className="absolute inset-[-200%] w-[400%] h-[400%] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-noise" />
    </div>
  );
};