import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`relative w-full py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};