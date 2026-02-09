import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Section } from './ui/Section';
import { ExternalLink, ArrowUpRight, AlertTriangle, Play, Smartphone } from 'lucide-react';

const websiteProjects = [
  {
    id: 'sovereign',
    title: 'SOVEREIGN',
    category: 'Luxury Commerce',
    description: 'Bespoke e-commerce experience with WebGL product viewing.',
    link: 'https://sovergine.vercel.app/',
    image: 'https://i.ibb.co/0VnHMk2Y/Screenshot-77.png',
    isNew: true
  },
  {
    id: 'vortex',
    title: 'VORTEX',
    category: 'Motion Interface',
    description: 'High-velocity animation engine for next-gen portfolios.',
    link: 'https://vortex-orpin-phi.vercel.app/',
    image: 'https://i.ibb.co/wNhcsjV4/Screenshot-74.png',
    isNew: true
  },
  {
    id: 'trihood',
    title: 'TRIHOOD',
    category: 'Community Hub',
    description: 'Social engagement platform with real-time interactive elements.',
    link: 'https://trihood.vercel.app/',
    image: 'https://i.ibb.co/vCkk9759/Screenshot-75.png',
    isNew: true
  },
  {
    id: 'vantage',
    title: 'VANTAGE',
    category: 'Corporate Elite',
    description: 'Minimalist, high-authority design for premium agencies.',
    link: 'https://vantage-steel.vercel.app/',
    image: 'https://i.ibb.co/SX9P52St/Screenshot-76.png',
    isNew: true
  },
  {
    id: 'onyx',
    title: 'Onyx',
    category: 'Enterprise Engine',
    description: 'High-performance data processing architecture.',
    link: 'https://onyx-best.vercel.app/',
    image: 'https://i.ibb.co/NdkV2L1k/Screenshot-45.png',
    isNew: false
  },
  {
    id: 'nexus',
    title: 'Nexus',
    category: 'Interactive Framework',
    description: 'Fluid state management for next-gen UX.',
    link: 'https://nexus-best.vercel.app/',
    image: 'https://i.ibb.co/8gnp69rs/Screenshot-44.png',
    isNew: false
  },
  {
    id: 'noir',
    title: 'Noir',
    category: 'Prestige Platform',
    description: 'Luxury aesthetics meeting minimalist code.',
    link: 'https://noir-best.vercel.app/',
    image: 'https://i.ibb.co/ZRXwd5JZ/Screenshot-43.png',
    isNew: false
  }
];

const videoProjects = [
  {
    id: 'vid1',
    youtubeId: "YWx4_89diXU", 
    title: "High-Impact Edit",
    category: "Short Form"
  },
  {
    id: 'vid2',
    youtubeId: "s_4J9QY3fnQ",
    title: "Visual FX Showcase",
    category: "VFX"
  },
  {
    id: 'vid3',
    youtubeId: "K4GUu6VIKaE",
    title: "Motion Graphics",
    category: "Animation"
  },
  {
    id: 'vid4',
    youtubeId: "WCzweEH23Lk",
    title: "Cyberpunk Aesthetic",
    category: "Style Test"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const WebsiteCard = ({ project }: { project: typeof websiteProjects[0] }) => (
  <motion.div
    variants={itemVariants}
    className="group relative w-full bg-neutral-900 border border-white/10 overflow-hidden hover:border-white/50 transition-all duration-300 flex flex-col h-full"
  >
    <div className="relative w-full aspect-video overflow-hidden bg-black border-b border-white/10">
        <div className="absolute top-3 left-3 z-20">
            {project.isNew ? (
                 <span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider">
                    New
                 </span>
            ) : (
                <span className="px-2 py-1 bg-black/50 text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    Legacy
                 </span>
            )}
        </div>

        <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            loading="lazy"
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px]">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-gray-200"
            >
                <span>VISIT SITE</span>
                <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
    </div>

    <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-display font-bold text-white tracking-tight">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">{project.category}</p>
            <p className="text-sm text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-white transition-colors">
                {project.description}
            </p>
        </div>
    </div>
  </motion.div>
);

const VideoCard = ({ video }: { video: typeof videoProjects[0] }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="w-full relative group"
    >
      <div className="relative w-full bg-neutral-900 overflow-hidden border border-white/10 hover:border-white transition-all duration-300 flex flex-col">
          <div className="relative w-full pb-[177.78%] bg-black flex items-center justify-center overflow-hidden">
            <iframe 
                src={`https://www.youtube.com/embed/${video.youtubeId}?playsinline=1&rel=0&controls=0&loop=1`}
                className="absolute inset-0 w-full h-full border-0 z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
                loading="lazy"
            />
             <a 
                href={`https://youtube.com/shorts/${video.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-20 bg-transparent"
                aria-label="Watch on YouTube"
             />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30 border border-white/20">
                <Play className="w-5 h-5 text-white fill-white" />
             </div>
          </div>
          <div className="p-3 bg-black border-t border-white/10 relative z-30">
                <h3 className="text-white font-bold tracking-wider text-xs mb-0.5">{video.title}</h3>
                <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">{video.category}</span>
          </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="py-32 bg-black text-white">
      
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter mb-4">
                SELECTED WORKS
            </h2>
            <div className="h-2 w-32 bg-white" />
          </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16 p-6 border border-yellow-500/30 bg-yellow-500/5 flex items-start gap-4"
      >
        <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
        <div>
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">Concept Demos</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                The projects below are <span className="text-white font-bold">1-5 hour speedbuilds</span>. They demonstrate velocity and aesthetic range, not production-ready code. Custom client work includes full QA and optimization.
            </p>
        </div>
      </motion.div>

      <div className="mb-8 flex items-center gap-3">
         <div className="w-3 h-3 bg-white" />
         <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Web Architecture</h3>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
         {websiteProjects.map((p) => (
             <WebsiteCard key={p.id} project={p} />
         ))}
      </motion.div>

      <div className="mb-8 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white" />
            <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Content Creation</h3>
            </div>
         </div>
         <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10">
            <Smartphone className="w-4 h-4 text-gray-400" />
            <span className="text-xs font-mono text-gray-400">VERTICAL FORMAT</span>
         </div>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {videoProjects.map((vid) => (
             <VideoCard key={vid.id} video={vid} />
        ))}
      </motion.div>

    </Section>
  );
};