import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Section } from './ui/Section';
import { ExternalLink, ArrowUpRight, AlertTriangle, Smartphone, Film } from 'lucide-react';

const websiteProjects = [
  {
    id: 'sovereign',
    title: 'SOVEREIGN',
    category: 'Luxury Commerce',
    description: 'Bespoke e-commerce experience. Clean lines, disciplined layout, high-value aesthetic.',
    link: 'https://sovergine.vercel.app/',
    image: 'https://i.ibb.co/0VnHMk2Y/Screenshot-77.png',
    isNew: true
  },
  {
    id: 'vortex',
    title: 'VORTEX',
    category: 'Motion Interface',
    description: 'High-velocity animation engine. For those who move fast and break nothing.',
    link: 'https://vortex-orpin-phi.vercel.app/',
    image: 'https://i.ibb.co/wNhcsjV4/Screenshot-74.png',
    isNew: true
  },
  {
    id: 'trihood',
    title: 'TRIHOOD',
    category: 'Community Hub',
    description: 'Social engagement platform. Building tribes, not just traffic.',
    link: 'https://trihood.vercel.app/',
    image: 'https://i.ibb.co/vCkk9759/Screenshot-75.png',
    isNew: true
  },
  {
    id: 'vantage',
    title: 'VANTAGE',
    category: 'Corporate Elite',
    description: 'Minimalist authority. Design that commands respect in the boardroom.',
    link: 'https://vantage-steel.vercel.app/',
    image: 'https://i.ibb.co/SX9P52St/Screenshot-76.png',
    isNew: true
  },
  {
    id: 'onyx',
    title: 'Onyx',
    category: 'Enterprise Engine',
    description: 'High-performance architecture. Scalable systems for infinite growth.',
    link: 'https://onyx-best.vercel.app/',
    image: 'https://i.ibb.co/NdkV2L1k/Screenshot-45.png',
    isNew: false
  },
  {
    id: 'nexus',
    title: 'Nexus',
    category: 'Interactive Framework',
    description: 'Fluid state management. A seamless flow of logic and design.',
    link: 'https://nexus-best.vercel.app/',
    image: 'https://i.ibb.co/8gnp69rs/Screenshot-44.png',
    isNew: false
  },
  {
    id: 'noir',
    title: 'Noir',
    category: 'Prestige Platform',
    description: 'Dark mode aesthetics. Luxury lives in the shadows.',
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

const WebsiteCard = ({ project }: { project: typeof websiteProjects[0] }) => (
  <motion.div
    variants={itemVariants}
    className="group relative w-full bg-neutral-900 border border-white/10 overflow-hidden hover:border-white transition-all duration-300 flex flex-col h-full rounded-sm"
  >
    {/* Image Container */}
    <div className="relative w-full aspect-video overflow-hidden bg-black border-b border-white/5">
        <div className="absolute top-3 left-3 z-20">
            {project.isNew ? (
                 <span className="px-2 py-1 bg-white text-black text-[10px] font-bold uppercase tracking-wider">
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
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
        />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-bold transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-gray-200"
            >
                <span>INSPECT</span>
                <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
    </div>

    <div className="p-8 flex-grow flex flex-col justify-between">
        <div>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-3xl font-display font-bold text-white tracking-tight">{project.title}</h3>
                <ExternalLink className="w-6 h-6 text-white transition-colors duration-300" />
            </div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">{project.category}</p>
            <p className="text-base text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-white transition-colors">
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
      <div className="relative w-full bg-neutral-900 rounded-sm overflow-hidden border border-white/10 hover:border-white transition-all duration-300 flex flex-col">
          <div className="relative w-full pb-[177.78%] bg-black flex items-center justify-center overflow-hidden">
            <iframe 
                src={`https://www.youtube.com/embed/${video.youtubeId}?playsinline=1&rel=0&controls=0&loop=1`}
                className="absolute inset-0 w-full h-full border-0 z-10"
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
          <div className="p-4 bg-neutral-900 border-t border-white/10 relative z-30">
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
            <div className="h-2 w-32 bg-white" />
          </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-16 p-6 border-l-4 border-yellow-500 bg-white/5 flex items-start gap-4"
      >
        <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
        <div>
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">Demo Environment</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                The projects below are <span className="text-white font-bold">1-5 hour speedbuilds</span>. They demonstrate raw velocity and aesthetic capability. Production builds include rigorous QA, SEO optimization, and analytics integration.
            </p>
        </div>
      </motion.div>

      <div className="mb-8 flex items-center gap-3">
         <div className="w-3 h-3 bg-white" />
         <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">Digital Architecture</h3>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-24"
      >
         {websiteProjects.map((p) => (
             <WebsiteCard key={p.id} project={p} />
         ))}
      </motion.div>

      <div className="mb-8 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-white" />
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
      </motion.div>

    </Section>
  );
};