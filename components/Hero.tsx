import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative w-full overflow-hidden flex flex-col justify-end min-h-screen pb-20 md:pb-40">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://i.ibb.co/h1sp6T4v/Extend-dis-picture-2k-202602092014.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-[50%_30%] scale-105"
         />
         
         {/* 1. Cinematic Vignette */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.9)_100%)]" />

         {/* 2. Bottom Fade for Text Readability */}
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
         
         {/* 3. Subtle Animated Grain/Noise Overlay */}
         <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-7xl mx-auto w-full text-center md:text-left">
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
            {/* Notice Badge */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mb-6 md:mb-10 inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-black/40 backdrop-blur-xl rounded-full shadow-2xl"
            >
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,1)]" />
                <p className="text-[10px] md:text-[11px] font-mono text-emerald-400 uppercase tracking-[0.25em]">
                    <span className="text-white/60 font-medium mr-1">OPERATIONAL STATUS:</span> ACTIVE & RECRUITING
                </p>
            </motion.div>

            {/* Title Container */}
            <div className="relative mb-8 md:mb-12">
                <h1 className="text-[18vw] md:text-[12rem] font-display font-black text-white leading-[0.75] tracking-tighter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                    PARA<span className="text-white/20">GON</span>
                </h1>
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                    className="h-[2px] bg-gradient-to-r from-white/0 via-white/40 to-white/0 mt-4 hidden md:block"
                />
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
                <div className="hidden md:flex flex-col gap-4 mt-2">
                    <div className="w-12 h-[1px] bg-white/40" />
                    <div className="w-8 h-[1px] bg-white/20" />
                </div>
                
                <div className="max-w-3xl">
                    <p className="text-xl md:text-3xl text-gray-200 font-light leading-tight mb-8">
                        Engineering <span className="text-white font-medium italic">Elite</span> Digital Infrastructure. <br className="hidden md:block" />
                        I bridge the gap between cinematic aesthetics and high-performance engineering for brands that refuse to be ignored.
                    </p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-12">
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Expertise</span>
                            <span className="text-sm text-white/80 font-medium uppercase tracking-wider">Full-Stack Architecture</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Focus</span>
                            <span className="text-sm text-white/80 font-medium uppercase tracking-wider">Conversion Optimization</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Philosophy</span>
                            <span className="text-sm text-white/80 font-medium uppercase tracking-wider">Zero Friction Output</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">Scale</span>
                            <span className="text-sm text-white/80 font-medium uppercase tracking-wider">Enterprise Grade</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
                        <a href="#contact" className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors duration-300 w-full sm:w-auto text-center shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.5)]">
                            Initiate Protocol
                        </a>
                        <a href="#projects" className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:border-white hover:bg-white/5 transition-all duration-300 w-full sm:w-auto text-center">
                            View Assets
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Scrolling Ticker */}
      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-black/50 backdrop-blur-md overflow-hidden py-3 z-20">
          <div className="flex whitespace-nowrap animate-scroll opacity-50 hover:opacity-100 transition-opacity duration-300">
              {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center gap-8 px-4">
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Next.js</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">TypeScript</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Tailwind CSS</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Framer Motion</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">PostgreSQL</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">WebGL</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">AWS</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-[0.3em]">Vercel</span>
                      <span className="w-1 h-1 bg-emerald-500 rounded-full" />
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};
