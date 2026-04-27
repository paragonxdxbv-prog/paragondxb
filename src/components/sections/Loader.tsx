import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    // Total duration 3.5s
    const timer = setTimeout(() => onComplete(), 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      {/* Grain */}
      <div className="absolute inset-0 z-[1] opacity-[0.04] mix-blend-screen pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }}></div>

      {/* Red Scanline */}
      <motion.div
        initial={{ y: "-100vh" }}
        animate={{ y: "100vh" }}
        transition={{ duration: 0.7, ease: "linear", delay: 0.3 }}
        className="absolute left-0 w-full h-[1px] bg-[rgba(197,0,34,0.6)] z-10"
      />

      <div className="flex flex-col items-center justify-center mb-6 relative z-20">
        <div className="flex items-center justify-center relative w-17 h-17 md:w-22 md:h-22 mb-4">
          {/* Logo assembly (simulated with fade/scale for wolf heads) */}
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.0 }}
            src="https://i.ibb.co/bMyz7c3F/Cerberus.jpg" 
            alt="Paragon Loading" 
            className="absolute inset-0 w-full h-full object-cover rounded-full mix-blend-screen grayscale"
            style={{ clipPath: "polygon(0 0, 33% 0, 33% 100%, 0 100%)" }}
          />
          <motion.img 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            src="https://i.ibb.co/bMyz7c3F/Cerberus.jpg" 
            alt="Paragon Loading" 
            className="absolute inset-0 w-full h-full object-cover rounded-full mix-blend-screen grayscale"
            style={{ clipPath: "polygon(33% 0, 66% 0, 66% 100%, 33% 100%)" }}
          />
          <motion.img 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            src="https://i.ibb.co/bMyz7c3F/Cerberus.jpg" 
            alt="Paragon Loading" 
            className="absolute inset-0 w-full h-full object-cover rounded-full mix-blend-screen grayscale"
            style={{ clipPath: "polygon(66% 0, 100% 0, 100% 100%, 66% 100%)" }}
          />
        </div>

        <div className="flex font-sans font-bold text-[11px] md:text-[11px] tracking-[0.2em] uppercase text-white mb-1">
          {["P","A","R","A","G","O","N"].map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 1.6 + (i * 0.05) }}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 0.6, y: 0 }}
           transition={{ duration: 0.3, delay: 2.0 }}
           className="text-[7px] md:text-[9px] font-bold tracking-[0.5em] uppercase text-gray-500"
        >
          DXB
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1, delay: 2.0 }}
        className="font-mono text-[7px] md:text-[9px] text-[#C50022] mt-6 text-left w-45 h-11 flex flex-col gap-1 z-20"
      >
        <Typewriter text="> LOADING PARAGON DXB..." delay={2000} />
        <Typewriter text="> DIGITAL ARCHITECTURE STUDIO." delay={2500} />
        <Typewriter text="> SYSTEMS READY." delay={3000} />
      </motion.div>

      {/* Loading bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, delay: 3.0, ease: "linear" }}
        className="absolute bottom-[20%] w-45 h-[1px] bg-[#C50022] origin-left z-20"
      />

      {/* Red Flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.1, delay: 3.4 }}
        className="absolute inset-0 bg-[#C50022] z-[110]"
      />
    </motion.div>
  );
}

function Typewriter({ text, delay }: { text: string; delay: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i > text.length) clearInterval(intervalId);
    }, 25);
    return () => clearInterval(intervalId);
  }, [started, text]);

  return <p>{displayedText}</p>;
}
