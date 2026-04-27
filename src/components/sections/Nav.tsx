import { motion, useTransform } from "motion/react";

export default function Nav({ scrollYProgress }: { scrollYProgress: any }) {
  const backgroundY = useTransform(scrollYProgress, [0, 0.05], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.96)"]);
  const borderY = useTransform(scrollYProgress, [0, 0.05], ["rgba(197, 0, 34, 0)", "rgba(197, 0, 34, 0.15)"]);
  const blurY = useTransform(scrollYProgress, [0, 0.05], ["blur(0px)", "blur(20px)"]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      style={{ 
        backgroundColor: backgroundY, 
        borderBottomColor: borderY, 
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        backdropFilter: blurY 
      }}
      className="fixed top-0 left-0 z-50 flex items-center justify-between px-4 md:px-8 w-full h-[49px] md:h-[56px] transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* LEFT SIDE */}
      <div 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="flex items-center gap-2 cursor-pointer shrink-0 group"
      >
        <div className="relative w-6 h-6 md:w-7 md:h-7 flex items-center justify-center overflow-hidden rounded-full border border-white/10 group-hover:border-[#C50022]/50 transition-colors">
          <img src="https://i.ibb.co/bMyz7c3F/Cerberus.jpg" alt="Paragon Logo" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500" loading="lazy" />
        </div>
        <div className="flex items-center gap-1">
          <span className="font-sans font-bold text-[11px] tracking-wide text-white uppercase">PARAGON</span>
        </div>
      </div>
      
      {/* CENTER */}
      <div className="hidden md:flex items-center bg-[#111] border border-white/10 rounded-[2px] px-1 py-1">
        {['capabilities', 'work', 'process', 'contact'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollTo(item)} 
            className="text-white/60 hover:text-white px-4 py-1 rounded-[2px] hover:bg-white/5 transition-all text-[8px] font-sans font-semibold tracking-widest uppercase"
          >
            {item}
          </button>
        ))}
      </div>
      
      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <div className="hidden md:flex items-center gap-1 mr-2">
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-[#C50022] shadow-[0_0_10px_rgba(197,0,34,0.8)]"
          />
          <span className="font-mono text-[7px] text-white/50 tracking-widest uppercase">Available</span>
        </div>
        
        <a 
          href="https://contra.com/paragon_dxb" 
          target="_blank" rel="noreferrer"
          className="hidden lg:flex items-center gap-1 text-[8px] font-sans font-bold text-white uppercase tracking-widest hover:text-[#C50022] transition-colors"
        >
          Hire us on Contra
        </a>
        <a 
          href="https://on.contra.com/t9nTJJ" 
          target="_blank" rel="noreferrer"
          className="hidden lg:flex flex mr-2 items-center gap-1 text-[8px] font-sans font-bold text-white uppercase tracking-widest hover:text-[#C50022] transition-colors"
        >
          View Services
        </a>
        
        <button 
          onClick={() => scrollTo('contact')}
          className="relative group overflow-hidden px-4 md:px-5 py-1 md:py-1.5 bg-white text-black rounded-[2px] text-[7px] md:text-[8px] font-sans font-black uppercase tracking-widest hover:text-white transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(197,0,34,0.4)] border border-transparent"
        >
          <span className="relative z-10">INITIATE</span>
          <div className="absolute inset-0 h-full w-0 bg-[#C50022] group-hover:w-full transition-all duration-300 ease-out z-0" />
        </button>
      </div>
    </motion.nav>
  );
}
