import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Section } from './ui/Section';
import { ExternalLink, ArrowUpRight, AlertTriangle, Smartphone, Film, Plus } from 'lucide-react';

const websiteProjects = [
  {
    id: 'sovereign',
    title: 'SOVEREIGN',
    category: 'Luxury Commerce',
    description: 'Bespoke e-commerce. Clean lines, disciplined layout.',
    link: 'https://sovergine.vercel.app/',
    image: 'https://i.ibb.co/0VnHMk2Y/Screenshot-77.png',
    isNew: true
  },
  {
    id: 'vortex',
    title: 'VORTEX',
    category: 'Motion Interface',
    description: 'High-velocity animation engine. Move fast.',
    link: 'https://vortex-orpin-phi.vercel.app/',
    image: 'https://i.ibb.co/wNhcsjV4/Screenshot-74.png',
    isNew: true
  },
  {
    id: 'trihood',
    title: 'TRIHOOD',
    category: 'Community Hub',
    description: 'Social engagement platform. Building tribes.',
    link: 'https://trihood.vercel.app/',
    image: 'https://i.ibb.co/vCkk9759/Screenshot-75.png',
    isNew: true
  },
  {
    id: 'vantage',
    title: 'VANTAGE',
    category: 'Corporate Elite',
    description: 'Minimalist authority. Commands respect.',
    link: 'https://vantage-steel.vercel.app/',
    image: 'https://i.ibb.co/SX9P52St/Screenshot-76.png',
    isNew: true
  },
  {
    id: 'onyx',
    title: 'Onyx',
    category: 'Enterprise Engine',
    description: 'Scalable systems for infinite growth.',
    link: 'https://onyx-best.vercel.app/',
    image: 'https://i.ibb.co/NdkV2L1k/Screenshot-45.png',
    isNew: false
  },
  {
    id: 'nexus',
    title: 'Nexus',
    category: 'Interactive Framework',
    description: 'Fluid state management and logic.',
    link: 'https://nexus-best.vercel.app/',
    image: 'https://i.ibb.co/8gnp69rs/Screenshot-44.png',
    isNew: false
  },
  {
    id: 'noir',
    title: 'Noir',
    category: 'Prestige Platform',
    description: 'Dark mode aesthetics. Luxury shadows.',
    link: 'https://noir-best.vercel.app/',
    image: 'https://i.ibb.co/ZRXwd5JZ/Screenshot-43.png',
    isNew: false
  }
];

const videoProjects = [
  {
    id: 'vid1',
    youtubeId: "YWx4_89diXU", 
    title: "The Grind",
    category: "Motivation"
  },
  {
    id: 'vid2',
    youtubeId: "s_4J9QY3fnQ",
    title: "Focus",
    category: "Discipline"
  },
  {
    id: 'vid3',
    youtubeId: "K4GUu6VIKaE",
    title: "Visuals",
    category: "Cinematic"
  },
  {
    id: 'vid4',
    youtubeId: "WCzweEH23Lk",
    title: "Aesthetics",
    category: "Lifestyle"
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

const ComingSoonCard = () => (
    <motion.div 
        variants={itemVariants}
        className="w-full h-full min-h-[300px] border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center p-8 text-center hover:border-white/30 transition-colors duration-300 rounded-sm"
    >
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4 animate-pulse">
            <Plus className="w-6 h-6 text-gray-400" />
        </div>
        <h3 className="text-white font-bold font-display text-xl mb-1">MORE COMING SOON</h3>
        <p className="text-gray-500 text-sm font-mono uppercase">System Updating...</p>
    </motion.div>
);

const WebsiteCard = ({ project }: { project: typeof websiteProjects[0] }) => (
  <motion.div
    variants={itemVariants}
    // Fixed flicker: Removed layout props, simplified hover, added glow
    className="group relative w-full bg-black border border-white/10 overflow-hidden hover:border-white transition-all duration-300 flex flex-col h-full rounded-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
  >
    {/* Image Container */}
    <div className="relative w-full aspect-video overflow-hidden bg-black border-b border-white/10">
        <div className="absolute top-3 left-3 z-20">
            {project.isNew ? (
                 <span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_white]">
                    Fresh Drop
                 </span>
            ) : (
                <span className="px-2 py-1 bg-black text-white border border-white/20 text-[10px] font-bold uppercase tracking-wider">
                    Legacy
                 </span>
            )}
        </div>

        <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            loading="lazy"
        />
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white bg-black/80 text-white font-bold flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
            >
                <span>INSPECT</span>
                <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
    </div>

    <div className="p-6 flex-grow flex flex-col justify-between relative overflow-hidden">
        {/* Glow effect inside card */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div>
            <div className="flex justify-between items-start mb-2 relative z-10">
                <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-shadow-sm">{project.title}</h3>
            </div>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">{project.category}</p>
            <p className="text-sm text-gray-400 font-light leading-relaxed border-l border-white/10 pl-3 group-hover:border-white/50 transition-colors">
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
      <div className="relative w-full bg-black rounded-sm overflow-hidden border border-white/10 hover:border-white transition-all duration-300 flex flex-col hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
          <div className="relative w-full pb-[177.78%] bg-black flex items-center justify-center overflow-hidden">
            <iframe 
                src={`https://www.youtube.com/embed/${video.youtubeId}?playsinline=1&rel=0&controls=0&loop=1`}
                className="absolute inset-0 w-full h-full border-0 z-10 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
          </div>
          <div className="p-4 bg-black border-t border-white/10 relative z-30">
                <h3 className="text-white font-bold tracking-wider text-sm mb-1">{video.title}</h3>
                <span className="text-[10px] text-gray-400 font-mono uppercase tracking-widest flex items-center gap-2">
                    <Film className="w-3 h-3" />
                    {video.category}
                </span>
          </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="py-32">
      
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter mb-4">
                THE WORK
            </h2>
            <div className="h-2 w-32 bg-white box-shadow-[0_0_10px_white]" />
          </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16 p-6 border border-yellow-500/20 bg-yellow-500/5 flex items-start gap-4 backdrop-blur-sm"
      >
        <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1 animate-pulse" />
        <div>
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">Demo Environment</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                The projects below are <span className="text-white font-bold">1-5 hour speedbuilds</span>. They demonstrate raw velocity and aesthetic capability. Production builds include rigorous QA, SEO optimization, and analytics integration.
            </p>
        </div>
      </motion.div>

      <div className="mb-8 flex items-center gap-3">
         <div className="w-3 h-3 bg-white shadow-[0_0_10px_white]" />
         <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Digital Architecture</h3>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-24"
      >
         {websiteProjects.map((p) => (
             <WebsiteCard key={p.id} project={p} />
         ))}
         {/* More Coming Soon Card for Websites */}
         <ComingSoonCard />
      </motion.div>

      <div className="mb-8 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white shadow-[0_0_10px_white]" />
            <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Cinematic Motivation</h3>
                <p className="text-gray-500 text-sm font-mono mt-1">Pursuit of Excellence</p>
            </div>
         </div>
         <div className="hidden md:flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20">
            <Smartphone className="w-4 h-4 text-white" />
            <span className="text-xs font-mono text-gray-300">9:16 VERTICAL</span>
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
        {/* More Coming Soon Card for Videos */}
        <motion.div variants={itemVariants} className="w-full relative group">
             <div className="w-full pb-[177.78%] border-2 border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center relative hover:border-white/30 transition-colors">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                    <Plus className="w-5 h-5 text-gray-500 mb-2" />
                    <span className="text-[10px] font-bold text-gray-500 text-center uppercase">More Content Loading...</span>
                </div>
             </div>
        </motion.div>
      </motion.div>

    </Section>
  );
};