import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isVisible, setIsVisible] = useState(false);

  // Reduced mass for snappier performance
  const springConfig = { damping: 20, stiffness: 150, mass: 0.1 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // CRITICAL PERFORMANCE FIX: 
    // Only enable custom cursor on devices that actually have a fine pointer (mouse).
    // This prevents the heavy event listener and render loop on mobile phones.
    const mediaQuery = window.matchMedia('(pointer: fine)');
    
    if (mediaQuery.matches) {
      setIsVisible(true);
      const moveCursor = (e: MouseEvent) => {
        // Center the 300px div
        mouseX.set(e.clientX - 150); 
        mouseY.set(e.clientY - 150);
      };

      window.addEventListener('mousemove', moveCursor, { passive: true });
      return () => {
        window.removeEventListener('mousemove', moveCursor);
      };
    }
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[9999] mix-blend-screen"
      style={{
        x,
        y,
        // Slightly reduced opacity for better performance on fill-rate
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, rgba(0,0,0,0) 60%)',
        willChange: 'transform' // Hint to browser for GPU layer promotion
      }}
    />
  );
};