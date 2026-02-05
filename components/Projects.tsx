import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, Clock, Loader2 } from 'lucide-react';
import { Section } from './ui/Section';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 'onyx',
    title: 'Onyx',
    category: 'Enterprise Engine',
    description: 'High-performance data processing architecture.',
    link: 'https://onyx-best.vercel.app/',
    gradient: 'from-slate-900 to-slate-800',
    image: 'https://i.ibb.co/NdkV2L1k/Screenshot-45.png'
  },
  {
    id: 'nexus',
    title: 'Nexus',
    category: 'Interactive Framework',
    description: 'Fluid state management for next-gen UX.',
    link: 'https://nexus-best.vercel.app/',
    gradient: 'from-indigo-950 to-purple-950',
    image: 'https://i.ibb.co/8gnp69rs/Screenshot-44.png'
  },
  {
    id: 'noir',
    title: 'Noir',
    category: 'Prestige Platform',
    description: 'Luxury aesthetics meeting minimalist code.',
    link: 'https://noir-best.vercel.app/',
    gradient: 'from-zinc-900 to-black',
    image: 'https://i.ibb.co/ZRXwd5JZ/Screenshot-43.png'
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  return (
    // 1. Motion Wrapper: Handles ONLY the entrance animation
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.2), ease: "easeOut" }}
      className="w-full"
      style={{ willChange: 'transform, opacity' }} // Hint browser to promote layer
    >
      {/* 2. Content Container: Handles hover effects and styling. NO motion props here. */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block w-full bg-surface border border-white/15 shadow-[0_0_20px_-5px_rgba(255,255,255,0.1)] rounded-xl overflow-hidden md:hover:border-white/40 md:hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.25)] transition-all duration-300"
      >
        {/* 16:9 Aspect Ratio Container for Image */}
        <div className="relative w-full aspect-video overflow-hidden bg-[#080808]">
           <img 
              src={project.image} 
              alt={project.title} 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-105"
           />
           
           <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        {/* Content Below Image */}
        <div className="relative p-6 border-t border-white/5 bg-[#080808]">
            <div className="flex justify-between items-start mb-2 relative z-10">
               <div className="flex items-center gap-2">
                   <Cpu className="w-4 h-4 text-accent drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                   <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                       {project.category}
                   </span>
               </div>
               <ArrowUpRight className="w-5 h-5 text-gray-500 md:group-hover:text-white transition-colors duration-300" />
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-2 md:group-hover:text-accent transition-colors duration-300 drop-shadow-md">
               {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
               {project.description}
            </p>
        </div>
      </a>
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                <span className="text-accent uppercase tracking-widest text-sm font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Deployments</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Selected Works
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 max-w-md text-right md:text-left"
          >
            Full-scale previews of high-performance digital environments.
          </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {projects.map((project, index) => (
             <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Large Full-Width "Coming Soon" Box - Passive Glow */}
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 0.5, delay: 0.2 }}
         style={{ willChange: 'transform, opacity' }}
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
                System Expansion in Progress
            </h3>
            <p className="text-gray-400 max-w-lg mx-auto leading-relaxed">
                New architectural templates, premium assets, and high-velocity demos are currently being forged in the lab.
            </p>
        </div>
      </motion.div>
    </Section>
  );
};