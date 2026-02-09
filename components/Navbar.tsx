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
    <div className="fixed bottom-10 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        // Increased glow/shadow here: shadow-[0_0_25px_rgba(255,255,255,0.2)] and border brightness
        className="pointer-events-auto backdrop-blur-2xl bg-black/60 border border-white/30 rounded-full px-6 py-3 flex items-center gap-4 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex flex-col items-center justify-center w-14 h-14 rounded-full group"
            aria-label={item.label}
          >
            {/* Icon - Increased size w-7 h-7 */}
            <item.icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] opacity-80 group-hover:opacity-100" strokeWidth={1.5} />
            
            {/* Active Indicator / Hover Glow */}
            <div className="absolute -bottom-1 w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_white]" />
            
            {/* Background Hover */}
            <div className="absolute inset-0 bg-white/10 rounded-full scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />

            {/* Tooltip */}
            <span className="absolute -top-16 bg-black border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(255,255,255,0.2)] transform translate-y-2 group-hover:translate-y-0">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};