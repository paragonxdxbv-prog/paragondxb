import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Loader2 } from 'lucide-react';

// Video Data
const videos = [
  {
    id: 'vid1',
    src: "https://streamable.com/e/l1h0bu?autoplay=0", // Changed autoplay to 0 for better UX, user can play manually or we can set 1
    title: "Project Alpha",
    category: "Visuals"
  },
  {
    id: 'vid2',
    src: "https://streamable.com/e/sx9i9q?autoplay=0",
    title: "Project Beta",
    category: "Motion"
  },
  {
    id: 'vid3',
    src: "https://streamable.com/e/colmqj?autoplay=0",
    title: "Project Gamma",
    category: "CGI"
  }
];

const VideoCard: React.FC<{ src: string; title: string; index: number }> = ({ src, title, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      // FIX: Using 'amount' instead of 'margin' prevents flicker issues caused by zoom
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full relative group"
    >
      <div className="relative w-full bg-[#080808] rounded-xl overflow-hidden border border-white/10 shadow-lg md:hover:border-white/30 transition-all duration-300">
          {/* 9:16 Aspect Ratio Container (177.78%) */}
          <div style={{ position: 'relative', width: '100%', paddingBottom: '177.778%' }}>
            <iframe 
                allow="fullscreen" 
                allowFullScreen 
                height="100%" 
                src={src} 
                width="100%" 
                style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
            ></iframe>
          </div>
          
          {/* Overlay info - Optional */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
             <h3 className="text-white font-bold tracking-wider">{title}</h3>
          </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="py-24">
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }} // Flicker Fix
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                <span className="text-accent uppercase tracking-widest text-sm font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Recent Work
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }} // Flicker Fix
            transition={{ duration: 0.6 }}
            className="text-gray-400 max-w-md text-right md:text-left"
          >
            High-fidelity motion and visual design.
          </motion.p>
      </div>

      {/* Video Grid - Adjusted for Vertical Aspect Ratios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {videos.map((vid, index) => (
             <VideoCard key={vid.id} src={vid.src} title={vid.title} index={index} />
        ))}
      </div>

      {/* Large Full-Width "Coming Soon" Box */}
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }} // Flicker Fix
         transition={{ duration: 0.5 }}
         className="relative w-full overflow-hidden rounded-2xl border border-white/15 bg-black/50 p-12 text-center group md:hover:border-white/30 transition-all duration-500 shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]"
      >
        {/* CSS-only Animation for Background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
             <div className="p-4 rounded-full bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.1)] md:group-hover:scale-110 transition-transform duration-500">
                <Loader2 className="w-8 h-8 text-white animate-spin-slow" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight drop-shadow-md">
                More Projects Incoming
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                The lab is always active. New assets are being forged.
            </p>
        </div>
      </motion.div>
    </Section>
  );
};