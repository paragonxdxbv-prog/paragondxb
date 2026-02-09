import React from 'react';

export const Noise: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay">
      {/* 
         PERFORMANCE OPTIMIZATION:
         - Added 'translate3d(0,0,0)' to force hardware acceleration (GPU layer promotion).
         - This prevents the browser from repainting the entire page on every scroll frame when this overlay is present.
      */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        style={{ 
            backgroundRepeat: 'repeat', 
            backgroundSize: '128px',
            transform: 'translate3d(0,0,0)',
            willChange: 'transform'
        }}
      />
    </div>
  );
};