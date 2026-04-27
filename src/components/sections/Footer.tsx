import { motion } from "motion/react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full bg-black relative overflow-hidden">
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full h-[1px] bg-[#C50022] origin-left"
      />
      
      <div className="max-w-[90rem] mx-auto w-full px-4 md:px-8 py-11 md:py-17 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
          
          {/* Col 1 */}
          <div className="flex flex-col items-start gap-3 pr-8">
            <div onClick={scrollToTop} className="flex items-center gap-2 cursor-pointer mb-1 group">
               <div className="flex items-center gap-1 bg-black group-hover:bg-[#C50022] transition-colors duration-300 px-3 py-1 rounded-[2px] border border-white/10">
                 <span className="font-sans font-black text-[14px] text-white tracking-widest uppercase">PRGN</span>
               </div>
            </div>
            
            <p className="font-sans text-[9px] text-white/50 border-l-2 border-[#C50022] pl-2">Digital Architecture Studio</p>
            <p className="font-mono text-[7px] text-[#C50022] mb-4">Est. 2026 — Romania → World</p>
            
            {/* Social Icons simplified text links for footer */}
            <div className="flex flex-wrap items-center gap-3 mt-auto">
               {['YT', 'IG', 'TK', 'RD', 'GH', 'CO'].map(s => (
                 <a key={s} href="#" className="font-mono text-[8px] text-white/60 hover:text-white hover:[text-shadow:0_0_10px_rgba(197,0,34,0.8)] transition-all">
                   [{s}]
                 </a>
               ))}
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-semibold text-[8px] text-white tracking-widest uppercase mb-1">STUDIO</h4>
            {['Capabilities', 'Work', 'Process', 'About', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="font-sans text-[9px] text-white/50 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Col 3 */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-semibold text-[8px] text-white tracking-widest uppercase mb-1">WORK</h4>
            {['Nexus Gaming', 'Nexus Store', 'Nexus Cinema', 'Obsidian Law', 'Ascend (Coming Soon)', 'View All Work'].map((link, i) => (
              <a key={link} href={i === 5 ? '#work' : '#'} className="font-sans text-[9px] text-white/50 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Col 4 */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-semibold text-[8px] text-white tracking-widest uppercase mb-1">CONNECT</h4>
            <a href="mailto:paragonxdxbv@gmail.com" className="font-sans text-[9px] text-white/50 hover:text-white transition-colors">paragonxdxbv@gmail.com</a>
            <a href="https://contra.com/paragon_dxb" target="_blank" rel="noreferrer" className="font-sans text-[9px] text-white/50 hover:text-white transition-colors">contra.com/paragon_dxb</a>
            <div className="flex flex-col gap-1 mt-3">
               {['GitHub', 'Reddit', 'YouTube', 'Instagram', 'TikTok'].map(link => (
                 <a key={link} href="#" className="font-sans text-[9px] text-white/50 hover:text-white transition-colors">
                   {link}
                 </a>
               ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-[rgba(197,0,34,0.3)] bg-black py-4 px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[7px] text-white/40 tracking-wider relative z-10">
        <div>© 2026 PARAGON. All rights reserved.</div>
        <div className="text-center">Built by Paragon. Powered by obsession.</div>
        <div>No templates. No shortcuts. No compromises.</div>
      </div>

      {/* Footer Particles */}
      {[...Array(6)].map((_, i) => (
        <div 
          key={i} 
          className={`particle absolute rounded-full bg-white z-[5] ${i % 2 === 0 ? '' : 'hidden md:block'}`} 
          style={{
             width: `${Math.random() * 2 + 1}px`,
             height: `${Math.random() * 2 + 1}px`,
             left: `${Math.random() * 100}%`,
             bottom: `-20px`,
             backgroundColor: Math.random() > 0.5 ? '#C50022' : '#FFFFFF',
             opacity: 0.4,
             animationDuration: `${Math.random() * 10 + 8}s, ${Math.random() * 5 + 3}s`,
             animationDelay: `${Math.random() * -10}s`,
             // @ts-ignore
             "--duration": `${Math.random() * 8 + 8}s`,
             "--drift-duration": `${Math.random() * 5 + 3}s`
          }} 
        />
      ))}
    </footer>
  );
}
