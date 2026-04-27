import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import ParticleBackground from "../ui/ParticleBackground";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full bg-black flex flex-col justify-end p-12 lg:p-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <img 
            src="https://i.ibb.co/NnmkbLLX/Extend-dis-pic-202604101859.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[1]" />
      </div>

      <ParticleBackground />

      {/* Architectural Frames */}
      <div className="absolute inset-8 border border-white/5 pointer-events-none z-10" />
      
      <div className="relative z-20 flex justify-between items-end w-full max-w-[90rem] mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           className="text-left"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-9xl text-white uppercase tracking-tighter leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Paragon
          </h1>
          <div className="w-24 h-px bg-[#C50022] mt-8 mb-6" />
          <p className="font-mono text-xs md:text-sm text-white/50 uppercase tracking-[0.3em]">
            Digital Architecture Studio
          </p>
        </motion.div>
        
        <motion.button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3 px-8 py-4 border border-white/10 hover:border-[#C50022] bg-white/5 hover:bg-[#C50022]/10 transition-all duration-300 rounded-[2px]"
        >
          <span className="font-sans font-bold text-[10px] uppercase tracking-widest text-white">Explore Projects</span>
          <ArrowRight className="w-3 h-3 text-[#C50022]" />
        </motion.button>
      </div>
      
    </section>
  );
}
