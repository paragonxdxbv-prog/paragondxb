import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Target, Zap, Shield, Trophy, Activity, Code } from 'lucide-react';

const Stat = ({ label, value, icon: Icon, delay }: { label: string, value: string, icon: any, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{ duration: 0.5, delay: Math.min(delay, 0.2) }}
        className="flex flex-col items-center justify-center p-6 border border-white/10 bg-black hover:border-white transition-colors duration-300 group"
    >
        <Icon className="w-5 h-5 text-gray-500 mb-2 group-hover:text-white transition-colors" />
        <span className="text-4xl font-display font-black mb-1 text-white">{value}</span>
        <span className="text-xs uppercase tracking-widest text-gray-500">{label}</span>
    </motion.div>
);

export const About: React.FC = () => {
  return (
    <Section id="about" className="min-h-[80vh] flex flex-col justify-center py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
        {/* Left: Headline & Core Identity */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-1 bg-white mb-8" />
            <h2 className="text-5xl md:text-7xl font-display font-black leading-[0.9] mb-8 text-white tracking-tighter">
              NO TEAM.<br />
              NO AGENCIES.<br />
              <span className="text-gray-500">
                JUST THE ARCHITECT.
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 font-light leading-relaxed mb-8"
          >
             The digital landscape is flooded with noise, slow teams, and bloated agencies. I operate differently. I am a <span className="font-bold text-white border-b border-white">Solo Operative</span>. When you hire me, you get me—direct communication, pure execution, and zero middlemen.
           </motion.p>
        </div>

        {/* Right: Operational Philosophy */}
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 border-l-2 border-white bg-white/5"
            >
                <div className="flex items-center gap-4 mb-2">
                    <Target className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white uppercase">Precision</h3>
                </div>
                <p className="text-gray-400">
                    No templates. Every line of code is placed with intent. Systems built to scale and convert.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 border-l-2 border-white bg-white/5"
            >
                <div className="flex items-center gap-4 mb-2">
                    <Zap className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white uppercase">Velocity</h3>
                </div>
                <p className="text-gray-400">
                    Time is the asset. I work in rapid sprints to deliver high-fidelity results weeks ahead of schedule.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 border-l-2 border-white bg-white/5"
            >
                <div className="flex items-center gap-4 mb-2">
                    <Shield className="w-6 h-6 text-white" />
                    <h3 className="text-xl font-bold text-white uppercase">Ownership</h3>
                </div>
                <p className="text-gray-400">
                    From concept to deployment, I take full responsibility. No passing the buck. Just results.
                </p>
            </motion.div>
        </div>
      </div>

      {/* System Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           <Stat label="Years Active" value="05+" icon={Trophy} delay={0.2} />
           <Stat label="Projects Shipped" value="40+" icon={Code} delay={0.25} />
           <Stat label="Client Retention" value="95%" icon={Activity} delay={0.3} />
           <Stat label="Efficiency" value="10x" icon={Zap} delay={0.35} />
      </div>

    </Section>
  );
};