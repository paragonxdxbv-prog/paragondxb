import { motion } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SOCIALS = [
  { name: "YOUTUBE", tag: "View our work", link: "https://www.youtube.com/channel/UCeps5QaE_JtzwCLddEdz1Bw" },
  { name: "INSTAGRAM", tag: "Follow the studio", link: "https://www.instagram.com/paragondxb/reels/" },
  { name: "TIKTOK", tag: "Behind the builds", link: "https://www.tiktok.com/@paragonxv" },
  { name: "REDDIT", tag: "Community posts", link: "https://www.reddit.com/user/AndresRiosXYZ/" },
  { name: "GITHUB", tag: "View the code", link: "https://github.com/paragonxdxbv-prog" },
  { name: "CONTRA", tag: "Hire us directly", link: "https://contra.com/paragon_dxb" }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "paragonxdxbv@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-17 md:py-22 w-full px-4 md:px-8 bg-black relative">
      <div className="max-w-[90rem] mx-auto w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-11 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-4 font-display text-[42px] md:text-[70px] text-white leading-none tracking-widest uppercase"
          >
            [ INITIATE ]
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-mono text-[8px] md:text-[10px] text-[#C50022] tracking-widest uppercase"
          >
            DON'T WAIT. DIRECT COMMS ONLY.
          </motion.p>
        </div>

        {/* Email and Copy */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, amount: 0.1 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="flex flex-col items-center gap-6 mb-17 w-full"
        >
           <a 
             href={`mailto:${email}`} 
             className="font-sans font-bold text-[clamp(20px,3vw,40px)] text-white hover:text-white [text-shadow:0_0_0_transparent] hover:[text-shadow:0_0_30px_rgba(197,0,34,0.6)] transition-all duration-300"
           >
             {email}
           </a>
           
           <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
             <button 
               onClick={handleCopy}
               className="w-full sm:w-auto bg-[#0d0000] border border-[#C50022] px-6 py-2 rounded-[2px] font-mono text-[8px] text-white uppercase tracking-widest hover:bg-[#C50022] hover:shadow-[0_0_20px_rgba(197,0,34,0.4)] transition-all duration-300"
             >
               {copied ? <span className="text-white">COPIED ✓</span> : "COPY EMAIL"}
             </button>
             <a 
               href="https://contra.com/paragon_dxb" 
               target="_blank" rel="noreferrer"
               className="w-full sm:w-auto bg-white text-black font-sans font-bold text-[10px] md:text-[12px] uppercase tracking-widest px-8 py-2 rounded-[2px] hover:text-white hover:bg-[#C50022] hover:shadow-[0_0_30px_rgba(197,0,34,0.6)] transition-all duration-300 flex items-center justify-center gap-2"
             >
               Hire us on Contra <ArrowUpRight className="w-4 h-4" />
             </a>
             <a 
               href="https://on.contra.com/t9nTJJ" 
               target="_blank" rel="noreferrer"
               className="w-full sm:w-auto bg-[#C50022] border border-[#C50022] px-6 py-2 rounded-[2px] font-mono text-[8px] text-white uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex justify-center items-center"
             >
               View Services
             </a>
           </div>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full mb-11">
          {SOCIALS.map((s, i) => (
             <motion.a
               key={i}
               href={s.link}
               target="_blank"
               rel="noreferrer"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "0px", amount: 0.1 }}
               transition={{ duration: 0.5, delay: i * 0.05 }}
               className="group flex items-center justify-between bg-[#0d0000] border border-[rgba(197,0,34,0.2)] p-4 rounded-[2px] hover:-translate-y-1 hover:border-[#C50022] hover:shadow-[0_4px_20px_rgba(197,0,34,0.15)] transition-all duration-300"
             >
                <div className="flex flex-col gap-1 relative z-10">
                  <span className="font-sans font-semibold text-[11px] text-white tracking-wider">
                    {s.name}
                  </span>
                  <span className="font-mono text-[7px] text-[#666666]">
                    {s.tag}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#C50022] relative z-10" />
             </motion.a>
          ))}
        </div>

        {/* Info Row */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "0px", amount: 0.1 }}
           transition={{ duration: 0.6, delay: 0.4 }}
           className="w-full flex justify-center"
        >
           <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 w-full max-w-4xl py-6 border-y border-[rgba(197,0,34,0.15)]">
             {['RESPONSE: UNDER 24 HOURS', 'LANGUAGES: ENGLISH, ROMANIAN', 'TIMEZONE: GMT+3'].map((info, i) => (
               <div key={i} className="flex items-center gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C50022]" />
                 <span className="font-mono text-[7px] text-white/50 tracking-widest whitespace-nowrap">
                   {info}
                 </span>
               </div>
             ))}
           </div>
        </motion.div>

        {/* Final text */}
        <motion.p
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true, margin: "0px", amount: 0.1 }}
           transition={{ duration: 0.6, delay: 0.6 }}
           className="font-sans italic text-[9px] text-[#666666] text-center mt-7 max-w-lg leading-[1.6]"
        >
          We respond within 24 hours. <br/>
          Timeline and pricing discussed after first contact.
        </motion.p>
      </div>
    </section>
  );
}
