import React from 'react';
import { Home, User, Briefcase, Share2, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'Identity', icon: User },
    { id: 'services', label: 'Services', icon: CreditCard },
    { id: 'projects', label: 'Work', icon: Briefcase },
    { id: 'socials', label: 'Connect', icon: Share2 },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        className="pointer-events-auto bg-black/90 md:bg-black/80 md:backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center gap-2 ring-1 ring-white/5 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow duration-500"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex flex-col items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full"
            aria-label={item.label}
          >
            <item.icon className="relative z-10 w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-white transition-colors duration-300" />
            
            {/* Tooltip */}
            <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform duration-200 bg-black/90 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.1)] pointer-events-none">
              {item.label}
            </span>
            
            {/* Active/Hover Glow - Animated Spring */}
            <motion.div 
              layoutId="navGlow"
              className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
            />
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};