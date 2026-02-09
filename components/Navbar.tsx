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
    <div className="fixed bottom-8 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        // mix-blend-difference is key here. It makes the navbar invert colors based on background.
        className="pointer-events-auto backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-3 py-2 flex items-center gap-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
      >
        {navItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="relative flex flex-col items-center justify-center w-12 h-12 rounded-full group"
            aria-label={item.label}
          >
            {/* Icon with difference blend mode for high contrast */}
            <item.icon className="w-5 h-5 text-white mix-blend-difference group-hover:opacity-70 transition-opacity duration-300 relative z-10" />
            
            {/* Active Indicator */}
            <div className="absolute -bottom-1 w-1 h-1 bg-white mix-blend-difference rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Background Hover */}
            <div className="absolute inset-0 bg-white mix-blend-overlay rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-20 transition-all duration-300 -z-10" />

            {/* Tooltip */}
            <span className="absolute -top-12 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};