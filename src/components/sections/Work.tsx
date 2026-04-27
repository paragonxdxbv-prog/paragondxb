import { motion } from "motion/react";

const PROJECTS = [
  {
    type: "featured",
    title: "NEXUS GAMING",
    category: "E-Commerce Gaming Platform",
    desc: "Dark gaming store with working cart, live countdown drops, real game images.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    metrics: ["Working Cart", "Live Events", "Premium Design"],
    link: "https://nexus-gaming-opal.vercel.app",
    image: "https://i.ibb.co/8ncfqRPM/Screenshot-391.png",
    badge: "LEGACY"
  },
  {
    type: "standard",
    title: "NEXUS STORE",
    category: "Luxury Shopping Platform",
    short: "Cars, watches, tech, fashion and real estate. All in one dark premium store.",
    tech: ["Next.js", "GSAP", "TypeScript"],
    link: "https://nexus-store-cyan.vercel.app",
    image: "https://i.ibb.co/4R4SZdqZ/Screenshot-395.png",
    badge: "LEGACY"
  },
  {
    type: "standard",
    title: "NEXUS CINEMA",
    category: "Streaming Platform",
    short: "Dark Netflix-style. 15-show hero slideshow. My List.",
    tech: ["React", "Next.js", "GSAP"],
    link: "https://nexus-cinevers.vercel.app",
    image: "https://i.ibb.co/9JBcPRQ/Screenshot-396.png",
    badge: "LEGACY"
  },
  {
    type: "standard",
    title: "OBSIDIAN LAW",
    category: "Law Firm Website",
    short: "Ultra premium dark law firm.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    link: "https://obs-law.vercel.app",
    image: "https://i.ibb.co/fG9T66HZ/Screenshot-397.png",
    badge: "LEGACY"
  },
  {
    type: "standard",
    title: "OBSCURA",
    category: "Fashion & Retail",
    short: "Dark luxury fashion brand. Editorial aesthetic. Full ecommerce experience.",
    tech: ["Next.js", "Tailwind", "GSAP", "Lenis"],
    link: "https://obscura-tau.vercel.app/",
    image: "https://i.ibb.co/997VZs17/Screenshot-374.png",
    badge: "FRESH DROP"
  },
  {
    type: "standard",
    title: "NOIR MARKET",
    category: "E-Commerce",
    short: "Premium dark dropshipping store. Curated lifestyle products. Working cart.",
    tech: ["Next.js", "Tailwind", "GSAP", "Lenis"],
    link: "https://noir-market-iota.vercel.app/",
    image: "https://i.ibb.co/8gStXyv9/Screenshot-376.png",
    badge: "FRESH DROP"
  },
  {
    type: "standard",
    title: "OBSIDIAN",
    category: "Restaurant & Hospitality",
    short: "Ultra luxury fine dining and cocktail bar. Reservation system included.",
    tech: ["Next.js", "Tailwind", "GSAP", "Lenis"],
    link: "https://obsidian-two-omega.vercel.app/",
    image: "https://i.ibb.co/chdq442L/Screenshot-375.png",
    badge: "FRESH DROP"
  },
  {
    type: "standard",
    title: "AXIOM",
    category: "SaaS Platform",
    short: "Cutting edge analytics and data visualization dashboard. Real-time metrics.",
    tech: ["Next.js", "Tailwind", "GSAP"],
    link: "#",
    image: "https://i.ibb.co/ccWqWvt3/Screenshot-404.png",
    badge: "FRESH DROP"
  },
  {
    type: "coming_soon",
    title: "ASCEND",
    category: "Motivation Platform",
    short: "In production — dropping soon",
    tech: [],
    link: "#",
    image: "https://i.ibb.co/ccWqWvt3/Screenshot-404.png",
    badge: "COMING SOON"
  }
];

export default function Work() {
  return (
    <section id="work" className="py-17 md:py-22 px-4 md:px-8 bg-black w-full">
      <div className="max-w-[90rem] mx-auto w-full">
        {/* Header */}
        <div className="mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="font-mono text-[#C50022] text-[7px] tracking-widest">[ SELECTED WORK ]</span>
          </motion.div>
          <motion.h2 
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-bold text-[10px] md:text-[11px] text-white"
          >
            Things we built.
          </motion.h2>
        </div>

        {/* Filters (Visual only for now based on spec) */}
        <div className="flex flex-wrap gap-4 mb-8">
           {['ALL', 'FRESH DROP', 'LEGACY', 'COMING SOON'].map((tab, i) => (
             <div key={tab} className={`font-sans font-medium text-[8px] cursor-pointer transition-colors ${i === 0 ? 'text-white border-b border-[#C50022] pb-1' : 'text-gray-500 hover:text-white'}`}>
               {tab}
             </div>
           ))}
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-4">
          
          {/* Featured Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="w-full flex flex-col md:flex-row paragon-card rounded-[4px] overflow-hidden group"
          >
            {/* Image Side */}
            <div className="w-full md:w-[55%] relative overflow-hidden aspect-[4/3] md:aspect-auto">
               <img src={PROJECTS[0].image} alt="Nexus Gaming" className="w-full h-full object-cover object-top filter brightness-75 group-hover:brightness-100 transition-all duration-[800ms] group-hover:scale-[1.04]" loading="lazy" />
               <div className="absolute inset-0 bg-gradient-to-t from-[rgba(13,0,0,1)] via-[rgba(13,0,0,0.3)] to-transparent opacity-80" />
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-[45%] p-6 md:p-7 flex flex-col justify-center relative bg-[#0d0000] z-10">
               <div className="flex flex-col items-start h-full">
                 <div className="bg-[#C50022] text-white font-mono text-[7px] px-1 py-0.5 mb-4">
                   {PROJECTS[0].badge}
                 </div>
                 
                 <h3 className="font-sans font-black text-[11px] md:text-[10px] text-white tracking-widest leading-none mb-1">
                   {PROJECTS[0].title}
                 </h3>
                 <p className="font-mono text-[8px] text-[#C50022] mb-4 tracking-wider">
                   {PROJECTS[0].category}
                 </p>
                 
                 <p className="font-sans text-[10px] text-white/80 leading-[1.6] mb-6">
                   {PROJECTS[0].desc}
                 </p>
                 
                 <div className="flex flex-wrap gap-1 mb-6">
                   {PROJECTS[0].tech.map((t) => (
                     <div key={t} className="bg-black border border-white/10 px-1 py-1 flex items-center justify-center font-mono text-[7px] text-white">
                        {t}
                     </div>
                   ))}
                 </div>
                 
                 <div className="flex flex-wrap gap-3 mb-7">
                   {PROJECTS[0].metrics?.map((m) => (
                     <div key={m} className="font-mono text-[7px] text-white/60">
                        {m} <span className="text-[#C50022] pl-1">✓</span>
                     </div>
                   ))}
                 </div>
                 
                 <a href={PROJECTS[0].link} target="_blank" rel="noreferrer" className="bg-[#C50022] text-white font-sans font-bold text-[8px] uppercase px-6 py-2 rounded-[2px] mt-auto hover:bg-[#C50022]/90 hover:shadow-[0_0_20px_rgba(197,0,34,0.4)] transition-all">
                   VIEW LIVE <span className="ml-1">→</span>
                 </a>
                 <div className="mt-2 font-mono text-[7px] text-white/40">
                   {PROJECTS[0].link.replace('https://', '')}
                 </div>
               </div>
            </div>
          </motion.div>

          {/* Half width cards container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.slice(1).map((p, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.1 }}
                 transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                 className="group relative flex flex-col paragon-card rounded-[4px] transition-all duration-300 overflow-hidden min-h-[280px]"
                 onClick={() => {
                   if(p.type === 'internal') window.scrollTo({top:0, behavior:'smooth'});
                   else if(p.type !== 'coming_soon') window.open(p.link, '_blank');
                 }}
               >
                 <div className="w-full h-[60%] overflow-hidden relative">
                   <img src={p.image} alt={p.title} className={`w-full h-full object-cover group-hover:scale-[1.04] transition-all duration-[800ms] ${p.type === 'coming_soon' ? 'blur-sm brightness-50' : 'brightness-75'}`} loading="lazy" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0d0000] to-transparent opacity-90" />
                   
                   {p.type === 'coming_soon' && (
                     <div className="absolute inset-0 flex items-center justify-center">
                       <span className="font-sans font-bold tracking-widest text-white text-[10px]">COMING SOON</span>
                     </div>
                   )}
                   
                   <div className="absolute inset-0 bg-[rgba(13,0,0,0.6)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                     {p.type !== 'coming_soon' && (
                       <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-[#C50022] text-white text-[8px] font-sans font-bold px-4 py-1 rounded-[2px]">
                         VIEW PROJECT →
                       </div>
                     )}
                   </div>
                 </div>
                 
                 <div className="w-full h-[40%] p-4 flex flex-col bg-[#0d0000] relative z-10 z-[2]">
                    <div className={`${p.type === 'coming_soon' ? 'bg-white text-black' : 'bg-[#C50022] text-white'} font-mono text-[6px] px-1 py-0.5 mb-2 w-[fit-content]`}>
                      {p.badge}
                    </div>
                    
                    <h3 className="font-sans font-bold text-[11px] text-white uppercase tracking-wider mb-1">
                      {p.title}
                    </h3>
                    <p className="font-mono text-[7px] text-[#C50022] mb-2">
                      {p.category}
                    </p>
                    <p className="font-sans text-[8px] text-white/60 leading-[1.6]">
                      {p.short}
                    </p>
                 </div>
               </motion.div>
            ))}
          </div>
          
        </div>
        
        <div className="mt-14 flex flex-col items-center justify-center gap-2">
          <span className="font-mono text-[8px] text-white/40 tracking-widest">MORE WORK DROPPING REGULARLY</span>
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-[#C50022]"
          />
        </div>
      </div>
    </section>
  );
}
