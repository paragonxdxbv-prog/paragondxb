import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowUpRight, 
  Bot,
  ChevronDown,
  Database,
  Fingerprint,
  Globe,
  Layers,
  Share2,
  ShieldAlert, 
  Sparkles,
  ArrowRight,
  Video,
  Triangle
} from "lucide-react";
import { useEffect, useState } from "react";
import Lenis from "lenis";

// Custom Cursor component
function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).closest('a') || (e.target as HTMLElement).closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_15px_rgba(255,0,0,1)] hidden md:block"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-accent rounded-full pointer-events-none z-[9999] shadow-[0_0_30px_rgba(255,0,0,0.6)] bg-accent/5 backdrop-blur-[2px] hidden md:block"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
          borderColor: isHovering ? "rgba(255,0,0,0.8)" : "rgba(255,0,0,0.3)",
          backgroundColor: isHovering ? "rgba(255,0,0,0.1)" : "rgba(0,0,0,0)"
        }}
        transition={{ type: "spring", stiffness: 250, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-accent/20 rounded-full pointer-events-none z-[99] blur-[40px] hidden md:block"
        animate={{
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
          opacity: isHovering ? 1 : 0.4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 30, mass: 1 }}
      />
    </>
  );
}

function Nav({ scrollYProgress }: { scrollYProgress: any }) {
  const backgroundY = useTransform(scrollYProgress, [0, 0.05], ["rgba(0, 0, 0, 0.5)", "rgba(0, 0, 0, 0.85)"]);
  const borderY = useTransform(scrollYProgress, [0, 0.05], ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.2)"]);
  const glowY = useTransform(scrollYProgress, [0, 0.05], ["0px 0px 15px rgba(255,0,0,0.1)", "0px 0px 30px rgba(255,0,0,0.2)"]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Lenis handles the smooth scrolling automatically for hash links,
      // but we can programmatically trigger it if needed or just let native behavior + lenis take over.
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      style={{ backgroundColor: backgroundY, borderColor: borderY, boxShadow: glowY }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-3 py-2 md:px-5 md:py-3 backdrop-blur-xl border border-white/20 rounded-full w-[90%] max-w-2xl"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Left: Logo + Wordmark */}
      <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3 md:gap-4 hover:scale-105 transition-transform duration-300 shrink-0 cursor-pointer">
        <div className="relative group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-black rounded-full border border-accent/20 hover:border-accent transition-all overflow-hidden shrink-0 shadow-[0_0_15px_rgba(255,0,0,0.3)] hover:shadow-[0_0_25px_rgba(255,0,0,0.5)]">
          <img src="https://i.ibb.co/hJd8yP3Z/Cerberus.jpg" alt="Paragon Logo" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
        </div>
        <div className="font-black text-sm md:text-lg tracking-[0.2em] pt-1 text-white uppercase" style={{ display: 'block' }}>
          PARAGON
        </div>
      </div>
      
      {/* Center: Links */}
      <div className="flex items-center gap-3 sm:gap-6 text-[7px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.2em] uppercase text-white/70">
        <button onClick={() => scrollTo('capabilities')} className="hover:text-white transition-colors relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300">SERVICES</button>
        <button onClick={() => scrollTo('process')} className="hover:text-white transition-colors relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300">PROCESS</button>
        <a href="https://contra.com/paragon_dxb" target="_blank" rel="noreferrer" className="hover:text-white transition-colors relative after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-accent hover:after:w-full after:transition-all after:duration-300">CONTRA</a>
      </div>
      
      {/* Right: Pill */}
      <button 
        onClick={() => scrollTo('contact')}
        className="px-4 py-2 md:px-5 md:py-2 bg-white text-black rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 hover:bg-accent hover:text-white shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] transition-all duration-300 whitespace-nowrap shrink-0"
      >
        INITIATE
      </button>
    </motion.nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col justify-end">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0 flex items-start justify-center">
          <motion.div
            initial={{ scale: 1.4, opacity: 0, y: "0%" }}
            animate={{ scale: 1.15, opacity: 1, y: "-15%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img 
              src="https://i.ibb.co/MxVLqCSN/Extend-dis-pic-202604101859.jpg" 
              alt="Paragon Alpha Wolf Logo Background" 
              className="w-full h-[130%] object-cover object-center opacity-60 mix-blend-screen"
            />
          </motion.div>
      </div>

      {/* Hero Content (Bottom Layout) */}
      <div className="relative z-10 w-full px-6 md:px-12 pb-12 md:pb-20 max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-end gap-10 h-full pt-32">
        <div className="flex flex-col text-left max-w-xl pb-10 md:pb-0">
          <motion.div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 font-bold text-[8px] md:text-[9px] uppercase tracking-[0.4em]"
            >
              If it's digital, we architect it <span className="text-accent pl-2">///</span>
            </motion.p>
          </motion.div>
          
          <motion.div className="flex flex-col"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
          >
            <motion.h1 
              variants={{
                hidden: { y: 100, opacity: 0, scale: 0.9 },
                visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="font-black text-[10vw] md:text-[5vw] lg:text-[6vw] leading-[0.85] tracking-tighter uppercase drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            >
              PARAGON
            </motion.h1>
            <motion.div 
               variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="flex items-center gap-4 mt-2"
            >
              <span className="text-[4vw] md:text-[1.5vw] font-black leading-none text-white/50 tracking-tighter mix-blend-overlay uppercase">
                DXB
               </span>
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-accent to-transparent mt-1" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 font-medium tracking-[0.2em] md:tracking-[0.3em] uppercase text-[9px] md:text-[11px] mt-6 leading-loose max-w-sm"
            >
              A digital architecture studio.<br/>We build what others can't imagine.
            </motion.p>
          </motion.div>
        </div>

        {/* Right side button */}
        <motion.div 
           initial={{ opacity: 0, x: 30 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="mt-6 md:mt-0 flex shrink-0 ml-auto md:ml-0"
        >
          <button onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }} className="flex items-center justify-between gap-4 px-5 py-3 md:px-6 md:py-4 bg-accent text-white font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] hover:pl-6 hover:pr-8 md:hover:pl-8 md:hover:pr-10 transition-all duration-300 rounded-[2px] w-[fit-content]">
            <span>Initiate Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 w-full overflow-hidden flex whitespace-nowrap opacity-40 text-[9px] sm:text-[10px] tracking-[0.3em] uppercase pointer-events-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-12 sm:gap-20"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i}>Est. 2024 /// Digital Studio /// Based Anywhere. Built For Everyone.</span>
            ))}
          </motion.div>
      </div>
    </section>
  );
}

function MarqueeStrip() {
  const text = "WEB DESIGN /// SAAS SYSTEMS /// AUTOMATION /// 3D DESIGN /// MOTION /// BRAND IDENTITY /// FULL STACK /// CONTENT /// PARAGON /// ";
  return (
    <div className="w-full bg-accent text-white py-4 overflow-hidden flex whitespace-nowrap text-xs sm:text-sm font-black tracking-[0.2em] border-y border-white/10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
        className="flex"
      >
        <span className="pr-12">{text}</span>
        <span className="pr-12">{text}</span>
      </motion.div>
    </div>
  );
}

const SERVICES = [
  { icon: Globe, title: "Web Design & Development", desc: "From landing pages to full platforms. Pixel perfect every time." },
  { icon: Bot, title: "SaaS & Automation", desc: "Systems that work while you sleep. Built to scale infinitely." },
  { icon: Fingerprint, title: "UI/UX & Brand Identity", desc: "How you look is how you're judged. We make you look elite." },
  { icon: Sparkles, title: "Motion & 3D", desc: "Static is dead. We build experiences that move." },
  { icon: Layers, title: "Presentation Design", desc: "Decks that close deals. Structure, story, design — all of it." },
  { icon: Share2, title: "Social Media & Content", desc: "Presence that commands attention. Consistently." },
  { icon: Database, title: "Full Stack & Databases", desc: "The invisible architecture that makes everything work." },
];

function Capabilities() {
  return (
    <section id="capabilities" className="py-32 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
          >
            What We Do
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 font-medium tracking-wide"
          >
            If it's online and legal — it can be done.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group p-6 border border-white/10 bg-white/[0.02] hover:bg-black hover:border-accent hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] transition-all duration-500 flex flex-col"
            >
              <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent group-hover:text-accent transition-all duration-500">
                <service.icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest leading-relaxed mb-4">{service.title}</h3>
              <p className="text-white/40 text-[11px] leading-relaxed font-bold tracking-wide mt-auto">{service.desc}</p>
            </motion.div>
          ))}
          
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 7 * 0.1 }}
            className="group p-6 border border-accent/20 bg-accent/5 hover:bg-accent hover:text-white hover:border-accent transition-all duration-500 flex flex-col justify-center min-h-[160px]"
          >
            <h3 className="text-sm font-black uppercase tracking-widest mb-4">Anything Digital</h3>
            <p className="text-white/50 group-hover:text-white/80 transition-colors mb-6 text-[11px] font-bold tracking-wide leading-relaxed mt-auto">Don't see it? Tell us. If it's online and legal — it can be done.</p>
            <div className="flex items-center gap-3 text-white/60 group-hover:text-white font-bold uppercase tracking-[0.2em] text-[10px]">
              <span className="group-hover:translate-x-1 transition-transform">Tell us what you need</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}

const REASONS = [
  { title: "NO TEMPLATES", desc: "Everything is built from scratch. Your project deserves its own architecture." },
  { title: "DIRECT COMMUNICATION", desc: "No account managers. No middlemen. You talk directly to the person building your project." },
  { title: "QUALITY IS NON NEGOTIABLE", desc: "We don't ship until it's elite. Fast doesn't mean rushed — it means efficient." }
];

function WhyParagon() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
          >
            WHY PARAGON
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {REASONS.map((r, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: i * 0.2 }}
               className="flex flex-col"
            >
               <h3 className="text-white font-black uppercase text-lg mb-4 tracking-widest flex items-center gap-4">
                 <span className="text-accent">/</span> {r.title}
               </h3>
               <p className="text-white/60 text-xs md:text-sm leading-relaxed font-bold tracking-wide">
                 {r.desc}
               </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6"
          >
            WORK
          </motion.h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {/* Main Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="group relative border border-white/10 bg-[#0a0a0a] overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 hover:border-accent hover:shadow-[0_0_30px_rgba(255,0,0,0.1)] transition-all duration-500"
          >
             <div className="flex-1 flex flex-col items-start z-10 w-full relative">
                <span className="px-3 py-1 border border-accent/50 text-accent text-[10px] sm:text-xs font-black tracking-[0.2em] mb-6 uppercase shadow-[0_0_10px_rgba(255,0,0,0.2)] bg-accent/10">Fresh Drop</span>
                <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 flex flex-wrap gap-2 items-baseline">PARAGON<span className="text-white/20 text-xl sm:text-3xl">—Internal Build</span></h3>
                <p className="text-white/60 font-bold tracking-wide text-xs sm:text-sm leading-relaxed max-w-xl mb-8">
                  Digital architecture studio website. Built in under an hour. Full animations, custom cursor, smooth scroll, mobile responsive.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                   <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-black">Tech:</span>
                   <span className="text-[10px] text-white/80 uppercase tracking-[0.2em] font-bold">Next.js, Tailwind, GSAP, Lenis</span>
                </div>
             </div>
             <div className="w-full md:w-1/3 aspect-video bg-black/60 border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-accent/40 transition-all z-10 group-hover:bg-black/40">
                <img src="https://i.ibb.co/hJd8yP3Z/Cerberus.jpg" alt="Paragon Logo" className="w-[40%] object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
             </div>
             
             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-50 flex items-center justify-center cursor-pointer">
                <span className="text-white font-black tracking-[0.2em] uppercase border border-white/20 px-8 py-4 rounded-full text-sm hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">View Project</span>
             </div>
             
             <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent opacity-0 group-hover:opacity-10 blur-[150px] transition-all duration-1000 z-0 pointer-events-none rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: "-100px" }}
                 transition={{ duration: 0.6, delay: i * 0.2 }}
                 className="p-10 border border-white/5 bg-[#0a0a0a] flex items-center justify-center min-h-[250px]"
              >
                 <p className="text-[10px] sm:text-xs text-white/30 uppercase tracking-[0.4em] font-black text-center leading-loose">// MORE PROJECTS<br/>DROPPING SOON</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { num: "01", title: "You tell us what you need", desc: "No forms. No surveys. Just tell us your vision." },
  { num: "02", title: "We scope it and plan it", desc: "We map out exactly what gets built, how, and for what price." },
  { num: "03", title: "We build it fast and clean", desc: "Elite output, efficient process, zero compromises." },
  { num: "04", title: "You tell us when you're happy", desc: "We iterate until it's perfect. Your satisfaction closes the project." },
];

function Process() {
  return (
    <section id="process" className="py-32 px-6 md:px-12 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="flex flex-col justify-center">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8"
            >
              How It Works
            </motion.h2>
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="flex items-start gap-5 border-l-2 border-accent pl-6 py-2"
            >
               <p className="text-lg text-white/70 font-medium leading-relaxed tracking-wide">
                 Timeline and pricing are custom — tell us your project, we'll tell you everything.
               </p>
            </motion.div>
          </div>

          <div className="flex flex-col gap-0">
            {STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="flex flex-col justify-center py-8 border-b border-white/10 group hover:border-accent transition-colors duration-500"
              >
                <div className="flex flex-row items-center gap-6 md:gap-8 mb-2">
                  <span className="text-4xl md:text-6xl font-black text-white/5 group-hover:text-accent transition-colors duration-500 shrink-0">
                    {step.num}
                  </span>
                  <span className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-white/90">
                    {step.title}
                  </span>
                </div>
                <p className="text-white/50 text-xs md:text-sm pl-[4.5rem] md:pl-[6.5rem] font-bold tracking-wide">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "paragonxdxbv@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#050505] relative">
      <div className="max-w-4xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center flex flex-col items-center gap-4"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Initiate</h2>
          <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-bold">Don't wait. Direct comms only.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-12 w-full"
        >
          <button 
            onClick={handleCopy}
            className="group relative flex flex-col items-center gap-6 cursor-pointer"
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white group-hover:text-accent transition-colors tracking-widest break-all">
              {email}
            </span>
            <span className="px-6 py-3 border border-white/20 bg-white/5 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] group-hover:border-accent group-hover:text-accent transition-all rounded-[2px]">
              {copied ? "Copied to Clipboard!" : "Copy Email Address"}
            </span>
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mb-8">
            <a href="https://contra.com/paragon_dxb" target="_blank" rel="noreferrer" className="group relative flex flex-col items-center justify-center p-12 border border-accent/30 bg-accent/5 hover:bg-accent hover:border-accent transition-all duration-500 overflow-hidden text-center">
              <span className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-white group-hover:scale-110 transition-transform duration-500 z-10">HIRE US ON CONTRA</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-accent group-hover:text-white/80 mt-2 z-10 transition-colors">contra.com/paragon_dxb</span>
            </a>
            <a href="https://on.contra.com/t9nTJJ" target="_blank" rel="noreferrer" className="group relative flex flex-col items-center justify-center p-12 border border-white/20 bg-white/5 hover:bg-white hover:border-white transition-all duration-500 overflow-hidden text-center">
              <span className="font-black text-2xl md:text-3xl uppercase tracking-tighter text-white group-hover:text-black group-hover:scale-110 transition-all duration-500 z-10">START A PROJECT</span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-black/60 mt-2 z-10 transition-colors">on.contra.com/t9nTJJ</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
             {SOCIALS.map(link => (
               <a key={link.name} href={link.url} target="_blank" rel="noreferrer" className="flex items-center justify-between p-6 border border-white/10 bg-white/[0.02] hover:bg-black hover:border-accent group transition-all duration-300 relative overflow-hidden">
                 <div className="flex flex-col z-10 relative items-start gap-1">
                   <span className="font-bold tracking-[0.2em] uppercase text-xs group-hover:text-accent text-white/70 transition-colors">{link.name}</span>
                   <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap absolute top-full left-0 group-hover:-translate-y-full pt-6 pointer-events-none truncate max-w-[200px] sm:max-w-[150px] md:max-w-[250px]">{link.url.replace(/^https?:\/\//, '')}</span>
                 </div>
                 <ArrowUpRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 relative shrink-0 ml-4" />
               </a>
             ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 border border-white/5 bg-black p-8 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col gap-3 text-white/50 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase leading-relaxed text-center">
             <p><span className="text-white">Response time:</span> Under 24 hours.</p>
             <p><span className="text-white">Languages:</span> English.</p>
             <p><span className="text-white">Time zone:</span> Always available.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Manifesto() {
  const lines = [
    "We are not a template shop.",
    "We are not a cheap fix.",
    "We are the last agency you'll ever need.",
    "",
    "Every pixel intentional.",
    "Every line of code purposeful.",
    "Every project — a statement.",
  ];

  return (
    <section className="py-40 md:py-60 px-6 md:px-12 bg-black flex flex-col items-center justify-center text-center relative border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,0,0,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl flex flex-col items-center gap-16 md:gap-32 relative z-10 w-full">
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-9xl font-black tracking-tighter uppercase text-white drop-shadow-[0_0_40px_rgba(255,0,0,0.5)] w-full text-center"
        >
          PARAGON.
        </motion.h3>

        <div className="flex flex-col gap-10 md:gap-16 w-full mt-10 md:mt-20">
          {lines.map((line, i) => {
            let textSize = i < 3 ? "text-3xl md:text-5xl lg:text-6xl text-white/90" : "text-2xl md:text-4xl lg:text-5xl text-white/50";
            if (i === 2) textSize = "text-[1.5rem] sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[44px] text-white/90";
            
            return (
            <motion.h2
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-20%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`font-black uppercase tracking-tighter w-full text-center ${textSize} ${i === 2 ? 'text-accent underline decoration-accent/30 underline-offset-[12px] md:underline-offset-[20px] pb-4 block' : ''}`}
            >
              {line === "" ? <div className="h-4 md:h-10" /> : line}
            </motion.h2>
          )})}
        </div>
      </div>
    </section>
  );
}

const SOCIALS = [
  { name: "YouTube", url: "https://www.youtube.com/@ParagonDXB" },
  { name: "Instagram", url: "https://www.instagram.com/paragondxb/reels/" },
  { name: "TikTok", url: "https://www.tiktok.com/@paragonxv" },
  { name: "Reddit", url: "https://www.reddit.com/user/AndresRiosXYZ/" },
  { name: "PayPal", url: "https://www.paypal.com/paypalme/AndresRiosXYZ" },
  { name: "Etsy", url: "https://www.etsy.com/your/shops/me/dashboard?ref=seller-platform-mcnav" },
];

function Footer() {
  return (
    <footer className="pt-24 pb-48 px-6 md:px-12 bg-black flex flex-col items-center text-center overflow-hidden relative">
      <div className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 mb-10 bg-black rounded-full border border-accent/20 hover:border-accent shadow-[0_0_20px_rgba(255,0,0,0.3)] hover:shadow-[0_0_40px_rgba(255,0,0,0.6)] transition-all duration-700 group overflow-hidden">
        <img src="https://i.ibb.co/hJd8yP3Z/Cerberus.jpg" alt="Paragon Logo" className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-700" />
      </div>
      
      <h3 className="font-black text-5xl md:text-7xl tracking-widest mb-1 uppercase text-white">
        PARAGON
      </h3>

      <div className="flex flex-col gap-3 w-full pt-12 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/50 mt-8 mb-24">
        <p className="text-white/80 mb-4 tracking-[0.2em] leading-relaxed">Designed and architected by PARAGONDXB.<br/>No templates. No shortcuts. No compromises.</p>
        <p>Built by Paragon. Powered by obsession.</p>
        <p>© {new Date().getFullYear()} PARAGONDXB. All rights reserved.</p>
      </div>
    </footer>
  );
}

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center mb-10"
      >
        <div className="rounded-full border-2 border-accent shadow-[0_0_40px_rgba(255,0,0,0.6)] p-[2px]">
          <img 
            src="https://i.ibb.co/hJd8yP3Z/Cerberus.jpg" 
            alt="Paragon Loading" 
            className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
            style={{ filter: "grayscale(100%) brightness(150%)" }}
          />
        </div>
      </motion.div>
      
      <div className="flex items-center gap-3 overflow-hidden mb-4">
        <motion.span
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-black text-5xl md:text-7xl tracking-[0.2em] uppercase text-white"
        >
          PARAGON
        </motion.span>
        <motion.span
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="font-black text-5xl md:text-7xl tracking-[0.2em] transform uppercase text-accent drop-shadow-[0_0_15px_rgba(255,0,0,0.8)]"
        >
          DXB
        </motion.span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      >
        <span className="text-accent text-xs md:text-sm font-bold tracking-[0.5em] uppercase drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
          PARAGONDXB
        </span>
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[9990] opacity-[0.04] mix-blend-screen" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className={`min-h-screen bg-black text-white w-full selection:bg-accent selection:text-white font-sans transition-opacity duration-700 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <CustomCursor />
        <Nav scrollYProgress={scrollYProgress} />
        
        <main className="pb-0">
        <Hero />
        <MarqueeStrip />
        <Capabilities />
        <WhyParagon />
        <Portfolio />
        <Process />
        <Manifesto />
        <Contact />
      </main>

      <Footer />
      </div>
    </>
  );
}
