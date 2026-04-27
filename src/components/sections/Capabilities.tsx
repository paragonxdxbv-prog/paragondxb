import { motion } from "motion/react";
import { Globe, Layers, Zap, Play, Fingerprint, Box, Monitor, Infinity as InfinityIcon } from "lucide-react";

const CAPABILITIES = [
  { icon: Globe, title: "Web Design & Development", desc: "From landing pages to full platforms. Pixel perfect every time. Zero templates.", tag: "Most requested" },
  { icon: Layers, title: "SaaS Platforms", desc: "Full software products built from scratch. Scalable architecture. Beautiful interfaces." },
  { icon: Zap, title: "Automation Systems", desc: "Systems that work while you sleep. Zapier, n8n, custom scripts, AI workflows." },
  { icon: Play, title: "Motion & Animation", desc: "Static is dead. We build experiences that move. GSAP, Lenis, WebGL, Three.js." },
  { icon: Fingerprint, title: "UI/UX & Brand Identity", desc: "How you look is how you're judged. We make you look undeniably elite." },
  { icon: Box, title: "3D Design", desc: "Product visualization, architectural renders, abstract art, motion graphics. All from scratch." },
  { icon: Monitor, title: "Presentation Design", desc: "Decks that close deals. Structure, story, design — all of it. 48 hour delivery." },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-17 md:py-22 px-4 md:px-8 bg-black w-full">
      <div className="max-w-[90rem] mx-auto w-full">
        {/* Header */}
        <div className="mb-11 md:mb-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="font-mono text-[#C50022] text-[7px] tracking-widest">[ WHAT WE DO ]</span>
          </motion.div>
          
          <motion.div className="flex flex-col">
            <motion.h2 
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans font-bold text-[10px] md:text-[10px] text-white"
            >
              If it's online and legal
            </motion.h2>
            <motion.h2 
               initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
               whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
               viewport={{ once: true, margin: "0px", amount: 0.1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="font-sans font-bold text-[10px] md:text-[10px] text-[#C50022]"
            >
              it can be done.
            </motion.h2>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {CAPABILITIES.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.1 }}
               transition={{ duration: 0.6, delay: i * 0.08 }}
               className="group flex flex-col paragon-card border border-[rgba(197,0,34,0.15)] rounded-[4px] px-5 py-6 transition-all duration-300 relative"
             >
                <div className="w-7 h-7 bg-black flex items-center justify-center rounded-[2px] mb-4 border border-[#C50022]/20 group-hover:border-[#C50022]/50 transition-colors">
                  <cap.icon className="w-4 h-4 text-white" />
                </div>
                {cap.tag && (
                  <div className="absolute top-6 right-5 font-mono text-[6px] text-[#C50022]">
                    {cap.tag}
                  </div>
                )}
                <h3 className="font-sans font-semibold text-white text-[11px] leading-[1.3] mb-2">
                  {cap.title}
                </h3>
                <p className="font-sans text-[9px] text-white/60 leading-[1.7]">
                  {cap.desc}
                </p>
             </motion.div>
          ))}

          {/* 8th Card Special */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.64 }}
            className="group flex flex-col bg-[#C50022] border border-white rounded-[4px] px-5 py-6 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(197,0,34,0.3)] transition-all duration-300 cursor-pointer"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
             <h3 className="font-sans font-semibold text-white text-[11px] leading-[1.3] mb-2">
                Anything Digital
             </h3>
             <p className="font-sans text-[9px] text-white/90 leading-[1.7] mb-4">
                Don't see what you need? Tell us. If it exists online and it's legal — we architect it.
             </p>
             <div className="mt-auto font-sans font-bold text-white text-[8px] flex items-center gap-1">
                TELL US WHAT YOU NEED <motion.span className="group-hover:translate-x-1 transition-transform">→</motion.span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
