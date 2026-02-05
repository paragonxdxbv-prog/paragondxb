import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from './ui/Section';
import { Loader2, ExternalLink, ArrowRight } from 'lucide-react';

// --- DATA ---

// 1. Static Visual Projects (Preview Work)
const visualProjects = [
  {
    id: 'p1',
    title: "Neon Genesis",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 'p2',
    title: "Cyber Deck",
    category: "UI Architecture",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 'p3',
    title: "Void Walker",
    category: "3D Environment",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    link: "#"
  }
];

// 2. Motion Projects (Videos)
const videoProjects = [
  {
    id: 'vid1',
    src: "https://drive.google.com/uc?export=download&id=10zeE4Vs3JnrVtNgIocqfTPwsebbojpsI", 
    title: "Kinetic Rush",
    category: "Motion Design"
  },
  {
    id: 'vid2',
    src: "https://drive.google.com/uc?export=download&id=1qAQU_1f-MARM1wuxfPwF3xhB1qcmtbxa",
    title: "Glitch Protocol",
    category: "VFX"
  },
  {
    id: 'vid3',
    src: "https://drive.google.com/uc?export=download&id=1r2eFtpNiHGIcOHU8sqLzo4pij5lHuwhj",
    title: "Data Stream",
    category: "CGI Loop"
  }
];

// --- COMPONENTS ---

const VisualCard = ({ project, index }: { project: typeof visualProjects[0], index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="group relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#080808] border border-white/10"
  >
    {/* Image with zoom effect */}
    <div className="absolute inset-0 overflow-hidden">
        <motion.img 
            src={project.image} 
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
    </div>

    {/* Content Overlay */}
    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-xs font-mono text-accent uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {project.category}
        </span>
        <div className="flex items-center justify-between">
            <h3 className="text-2xl font-display font-bold text-white">{project.title}</h3>
            <div className="p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                <ExternalLink className="w-4 h-4 text-black" />
            </div>
        </div>
    </div>
  </motion.div>
);

const VideoCard = ({ video, index }: { video: typeof videoProjects[0], index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.4 }); // Trigger earlier (40% visibility)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
        if (isInView) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Auto-play prevented:", error);
                });
            }
        } else {
            videoRef.current.pause();
        }
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full relative group"
    >
      <div className="relative w-full bg-[#080808] rounded-xl overflow-hidden border border-white/10 shadow-lg md:hover:border-white/30 transition-all duration-300">
          
          {/* 9:16 Aspect Ratio Container */}
          <div className="relative w-full pb-[177.78%]">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-[#050505] z-10">
                    <Loader2 className="w-8 h-8 text-white/20 animate-spin" />
                </div>
            )}
            
            <video
                ref={videoRef}
                src={video.src}
                muted
                loop
                playsInline
                preload="metadata"
                onLoadedData={() => setIsLoading(false)}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s ease' }}
            />

            {/* Glass Overlay for Title */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold tracking-wider text-sm">{video.title}</h3>
                <span className="text-[10px] text-gray-400 font-mono uppercase">{video.category}</span>
            </div>
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-accent shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                <span className="text-accent uppercase tracking-widest text-sm font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Showcase</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Selected Works
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 max-w-md text-right md:text-left text-lg font-light"
          >
            A curated collection of digital architecture, motion design, and immersive experiences.
          </motion.p>
      </div>

      {/* SECTION 1: VISUAL PROJECTS (Preview Work) */}
      <div className="mb-8 flex items-center gap-2">
         <div className="w-2 h-2 bg-white rounded-full" />
         <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Preview Work</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
         {visualProjects.map((p, i) => (
             <VisualCard key={p.id} project={p} index={i} />
         ))}
      </div>

      {/* SECTION 2: MOTION PROJECTS (Videos) */}
      <div className="mb-8 flex items-center justify-between">
         <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <h3 className="text-xl font-display font-bold text-white uppercase tracking-wider">Kinetic Ops</h3>
         </div>
         <span className="text-xs font-mono text-gray-500 hidden md:block">AUTOPLAY ENABLED [SCROLL]</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {videoProjects.map((vid, index) => (
             <VideoCard key={vid.id} video={vid} index={index} />
        ))}
      </div>

      {/* COMING SOON */}
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, amount: 0.1 }}
         transition={{ duration: 0.5 }}
         className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 p-12 text-center group md:hover:border-white/20 transition-all duration-500"
      >
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]" />
        
        <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
             <div className="p-3 rounded-full bg-white/5 border border-white/10">
                <Loader2 className="w-6 h-6 text-white animate-spin-slow" />
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