import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed top-0 left-0 right-0 h-[1px] bg-[#C50022] origin-left z-[100]"
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-7 right-7 flex flex-col items-center gap-2 group z-50 mix-blend-difference"
    >
      <span className="font-mono text-[7px] uppercase tracking-widest text-[#C50022] origin-bottom -rotate-90 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">BACK TO TOP</span>
      <div className="w-[1px] h-[30px] bg-white/30 group-hover:bg-[#C50022] transition-colors relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[50%] bg-[#C50022] -translate-y-[100%] group-hover:animate-[drift_1s_ease-in-out_infinite_alternate]" />
      </div>
    </motion.button>
  );
}

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference bg-white"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: -4,
          translateY: -4,
          width: 8,
          height: 8,
        }}
      />
  );
}
