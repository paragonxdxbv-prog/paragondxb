import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
        {/* Static Noise Texture for 'Film' look */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
        
        {/* Subtle Gradient Spots to break up the flat black */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px]" />

        {/* CSS Particles (Lightweight) */}
        <div className="absolute inset-0">
             {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full opacity-20 animate-pulse"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                        animationDelay: `${Math.random() * 2}s`
                    }}
                />
             ))}
        </div>
    </div>
  );
};