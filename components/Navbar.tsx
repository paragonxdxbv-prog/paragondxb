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
        className="pointer-events-auto bg-white border border-gray-200 rounded-full px-2 py-2 flex items-center gap-1 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] ring-1 ring-black/5"
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
            <item.icon className="w-5 h-5 text-gray-500 group-hover:text-black transition-colors duration-300 relative z-10" />
            
            {/* Active Indicator (Dot) */}
            <div className="absolute -bottom-1 w-1 h-1 bg-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Background Hover */}
            <div className="absolute inset-0 bg-gray-100 rounded-full scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 -z-10" />

            {/* Tooltip */}
            <span className="absolute -top-10 bg-black text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};