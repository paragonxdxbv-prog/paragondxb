import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Target, Zap, Shield } from 'lucide-react';

export const About: React.FC = () => {
  // Standardized elite easing with TypeScript fix
  const transition = { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] as const };
  const viewportConfig = { once: true, amount: 0.1 };

  return (
    <Section id="about" className="min-h-[80vh] flex flex-col justify-center py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left: Headline & Core Identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={transition}
          >
            <div className="w-12 h-1 bg-white mb-8 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              No Team.<br />
              No Agencies.<br />
              <span className="text-gray-400">
                Just The Architect.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ ...transition, delay: 0.1 }}
            className="text-lg text-gray-400 font-light leading-relaxed mb-8"
          >
             The digital landscape is flooded with noise, slow teams, and bloated agencies. I operate differently. I am a <span className="text-white font-medium drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Solo Operative</span>. When you hire me, you get me—direct communication, pure execution, and zero middlemen.
           </motion.p>
           
           <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ ...transition, delay: 0.2 }}
            className="flex items-center gap-4"
           >
             <p className="text-sm uppercase tracking-widest text-white font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
               US HQ • Global Reach
             </p>
           </motion.div>
        </div>

        {/* Right: Operational Philosophy - Upgraded with Passive Glow */}
        <div className="space-y-8">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ ...transition, delay: 0.15 }}
                className="bg-black/50 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:border-white/30 transition-all duration-300"
            >
                <div className="flex items-center gap-4 mb-3">
                    <Target className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <h3 className="text-xl font-bold text-white">Precision Engineering</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    I don't use templates. Every line of code and every pixel is placed with intent. My systems are built to scale, perform, and convert from day one.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ ...transition, delay: 0.25 }}
                className="bg-black/50 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:border-white/30 transition-all duration-300"
            >
                <div className="flex items-center gap-4 mb-3">
                    <Zap className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <h3 className="text-xl font-bold text-white">Velocity & Impact</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    Time is the most valuable asset. I work in rapid sprints to deliver high-fidelity results weeks ahead of traditional agency timelines.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ ...transition, delay: 0.35 }}
                className="bg-black/50 border border-white/15 rounded-2xl p-6 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:shadow-[0_0_35px_rgba(255,255,255,0.15)] hover:border-white/30 transition-all duration-300"
            >
                <div className="flex items-center gap-4 mb-3">
                    <Shield className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
                    <h3 className="text-xl font-bold text-white">Total Ownership</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                    From the first concept to the final deployment, I take full responsibility for the stack. No passing the buck. Just results.
                </p>
            </motion.div>
        </div>
      </div>
    </Section>
  );
};