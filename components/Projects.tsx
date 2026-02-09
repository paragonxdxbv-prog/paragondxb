import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Section } from './ui/Section';
import { ExternalLink, Loader2, ArrowUpRight, AlertTriangle, Play } from 'lucide-react';

// --- DATA ---

const websiteProjects = [
  {
    id: 'vortex',
    title: 'VORTEX',
    category: 'Motion Interface',
    description: 'High-velocity animation engine for next-gen portfolios.',
    link: 'https://vortex-orpin-phi.vercel.app/',
    gradient: 'from-cyan/20 to-blue-600/20',
    image: 'https://i.ibb.co/wNhcsjV4/Screenshot-74.png',
    isNew: true
  },
  {
    id: 'trihood',
    title: 'TRIHOOD',
    category: 'Community Hub',
    description: 'Social engagement platform with real-time interactive elements.',
    link: 'https://trihood.vercel.app/',
    gradient: 'from-purple/20 to-pink-600/20',
    image: 'https://i.ibb.co/vCkk9759/Screenshot-75.png',
    isNew: true
  },
  {
    id: 'vantage',
    title: 'VANTAGE',
    category: 'Corporate Elite',
    description: 'Minimalist, high-authority design for premium agencies.',
    link: 'https://vantage-steel.vercel.app/',
    gradient: 'from-emerald-500/20 to-cyan/20',
    image: 'https://i.ibb.co/SX9P52St/Screenshot-76.png',
    isNew: true
  },
  {
    id: 'sovergine',
    title: 'SOVERGINE',
    category: 'Luxury Commerce',
    description: 'Bespoke e-commerce experience with WebGL product viewing.',
    link: 'https://sovergine.vercel.app/',
    gradient: 'from-orange-500/20 to-red-600/20',
    image: 'https://i.ibb.co/0VnHMk2Y/Screenshot-77.png',
    isNew: true
  },
  {
    id: 'onyx',
    title: 'Onyx',
    category: 'Enterprise Engine',
    description: 'High-performance data processing architecture.',
    link: 'https://onyx-best.vercel.app/',
    gradient: 'from-slate-900 to-slate-800',
    image: 'https://i.ibb.co/NdkV2L1k/Screenshot-45.png',
    isNew: false
  },
  {
    id: 'nexus',
    title: 'Nexus',
    category: 'Interactive Framework',
    description: 'Fluid state management for next-gen UX.',
    link: 'https://nexus-best.vercel.app/',
    gradient: 'from-indigo-950 to-purple-950',
    image: 'https://i.ibb.co/8gnp69rs/Screenshot-44.png',
    isNew: false
  },
  {
    id: 'noir',
    title: 'Noir',
    category: 'Prestige Platform',
    description: 'Luxury aesthetics meeting minimalist code.',
    link: 'https://noir-best.vercel.app/',
    gradient: 'from-zinc-900 to-black',
    image: 'https://i.ibb.co/ZRXwd5JZ/Screenshot-43.png',
    isNew: false
  }
];

const videoProjects = [
  {
    id: 'vid1',
    youtubeId: "YWx4_89diXU", 
    title: "Cinematic Edit 01",
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

// --- ANIMATION VARIANTS (Parent-Child Strategy) ---
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

// --- COMPONENTS ---

const WebsiteCard = ({ project }: { project: typeof websiteProjects[0] }) => (
  <motion.div
    variants={itemVariants}
    className="group relative w-full bg-[#080808] border border-white/10 rounded-xl overflow-hidden hover:border-cyan/30 transition-all duration-300 shadow-lg flex flex-col h-full transform-gpu will-change-transform"
  >
    {/* Gradient Glow Effect on Hover */}
    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none`} />

    {/* 16:9 Aspect Ratio Container for Websites */}
    <div className="relative w-full aspect-video overflow-hidden bg-black border-b border-white/5">
        <div className="absolute top-3 left-3 z-20 flex gap-2">
            {project.isNew ? (
                 <span className="px-2 py-1 bg-cyan text-black text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                    New Release
                 </span>
            ) : (
                <span className="px-2 py-1 bg-white/10 text-gray-400 text-[10px] font-bold uppercase tracking-wider rounded-sm border border-white/5">
                    Legacy Archive
                 </span>
            )}
        </div>

        <img 
            src={project.image} 
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:bg-cyan hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
            >
                <span>Live Preview</span>
                <ArrowUpRight className="w-4 h-4" />
            </a>
        </div>
    </div>

    {/* Footer Info */}
    <div className="p-6 bg-[#0A0A0A] flex-grow flex flex-col justify-between relative z-10">
        <div>
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-display font-bold text-white tracking-tight group-hover:text-cyan transition-colors">{project.title}</h3>
                <ExternalLink className="w-5 h-5 text-gray-600 group-hover:text-cyan transition-colors duration-300" />
            </div>
            <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-3">{project.category}</p>
            <p className="text-sm text-gray-400 font-light leading-relaxed border-l-2 border-white/10 pl-3 group-hover:border-cyan/50 transition-colors">
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
      className="w-full relative group transform-gpu will-change-transform"
    >
      <div className="relative w-full bg-[#080808] rounded-xl overflow-hidden border border-white/10 shadow-lg md:hover:border-purple/50 md:hover:shadow-[0_0_30px_rgba(189,0,255,0.2)] transition-all duration-300 flex flex-col">
          
          {/* 
             Video Container 
             - Flexbox used to perfectly center the iframe content.
             - Aspect ratio maintained via padding hack for 9:16 vertical videos.
          */}
          <div className="relative w-full pb-[177.78%] bg-black flex items-center justify-center overflow-hidden">
            <iframe 
                src={`https://www.youtube.com/embed/${video.youtubeId}?playsinline=1&rel=0&controls=0&loop=1`}
                className="absolute inset-0 w-full h-full border-0 z-10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title}
                loading="lazy"
                style={{ border: 'none' }}
            />
            
            {/* Click overlay to open in new tab if needed */}
             <a 
                href={`https://youtube.com/shorts/${video.youtubeId}`}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-20 bg-transparent"
                aria-label="Watch on YouTube"
             />
          </div>

          {/* Footer Info */}
          <div className="p-3 bg-[#0A0A0A] border-t border-white/5 relative z-30 group-hover:bg-purple/10 transition-colors">
                <h3 className="text-white font-bold tracking-wider text-xs mb-0.5 group-hover:text-purple transition-colors">{video.title}</h3>
                <span className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">{video.category}</span>
          </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" className="py-24">
      
      {/* HEADER */}
      <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-cyan to-purple shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-purple uppercase tracking-widest text-sm font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Selected Works
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 max-w-md text-right md:text-left text-lg font-light"
          >
            A curated collection of digital architecture, motion design, and immersive experiences.
          </motion.p>
      </div>

      {/* WARNING BANNER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mb-12 p-6 bg-yellow-500/5 border border-yellow-500/20 rounded-xl flex items-start gap-4"
      >
        <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        <div>
            <h4 className="text-yellow-500 font-bold uppercase tracking-wider text-sm mb-1">Demo Version Disclaimer</h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-3xl">
                The previews below are <span className="text-white font-bold">1-5 hour speedbuilds</span> designed to demonstrate raw velocity and aesthetic range. They may contain bugs, unoptimized assets, or placeholder content. Custom client work includes full QA, optimization, and premium support protocols.
            </p>
        </div>
      </motion.div>

      {/* SECTION 1: WEBSITES */}
      <div className="mb-8 flex items-center gap-2">
         <div className="w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
         <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Web Architecture</h3>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
      >
         {websiteProjects.map((p) => (
             <WebsiteCard key={p.id} project={p} />
         ))}
      </motion.div>

      {/* SECTION 2: MOTION PROJECTS */}
      <div className="mb-8 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-purple rounded-full animate-pulse shadow-[0_0_10px_rgba(189,0,255,0.8)]" />
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Short-Form Media</h3>
         </div>
         <span className="text-xs font-mono text-gray-500 hidden md:block">YOUTUBE SHORTS FEED</span>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
      >
        {videoProjects.map((vid) => (
             <VideoCard key={vid.id} video={vid} />
        ))}
      </motion.div>

      {/* COMING SOON */}
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.2 }}
         transition={{ duration: 0.5 }}
         className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-12 text-center group md:hover:border-purple/30 transition-all duration-500"
      >
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(189,0,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]" />
        
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
             <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-purple/50 transition-colors">
                <Loader2 className="w-6 h-6 text-white animate-spin-slow group-hover:text-purple" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white tracking-tight">
                Archive Decryption in Progress
            </h3>
            <p className="text-gray-500 max-w-lg mx-auto">
                More assets are being retrieved from the vault.
            </p>
        </div>
      </motion.div>
    </Section>
  );
};