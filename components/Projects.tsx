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
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      // Performance Fix: Only animate opacity. Moving Y axis during scroll causes flickering on weak GPUs.
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }} // Removed easeOut for linear, predictable fade
      className="group relative block w-full bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-xl overflow-hidden hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500"
    >
      {/* 16:9 Aspect Ratio Container for Image */}
      {/* Added bg-[#080808] to prevent white flash if image loads late */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#080808]">
         <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
         />
         
         <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
      </div>

      {/* Content Below Image */}
      <div className="relative p-6 border-t border-white/5 bg-[#080808]">
          {/* Removed heavy radial gradient for performance */}
          <div className="flex justify-between items-start mb-2 relative z-10">
             <div className="flex items-center gap-2">
                 <Cpu className="w-4 h-4 text-accent" />
                 <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                     {project.category}
                 </span>
             </div>
             <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
          </div>

          <h3 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
             {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
             {project.description}
          </p>
      </div>
    </motion.a>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="py-24">
      <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent" />
                <span className="text-accent uppercase tracking-widest text-sm font-bold">Deployments</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                Selected Works
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
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

      {/* Large Full-Width "Coming Soon" Box */}
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 0.5, delay: 0.2 }}
         className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-12 text-center group hover:border-white/30 transition-all duration-500 shadow-[0_0_20px_-5px_rgba(255,255,255,0.05)]"
      >
        {/* CSS-only Animation for Background - lighter on JS thread */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
             <div className="p-4 rounded-full bg-white/5 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500">
                <Loader2 className="w-8 h-8 text-white animate-spin-slow" />
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
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