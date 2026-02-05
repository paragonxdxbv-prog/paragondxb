import React from 'react';

export const Noise: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.035] mix-blend-overlay">
      {/* 
         PERFORMANCE FIX: 
         Removed 'animate-noise' to prevent heavy GPU repaints on scroll. 
         Using a static repeating noise pattern creates the texture without the lag.
      */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        style={{ backgroundRepeat: 'repeat', backgroundSize: '128px' }}
      />
    </div>
  );
};