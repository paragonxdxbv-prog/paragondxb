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
    <Section id="about" className="min-h-screen flex flex-col justify-center py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start mb-24 md:mb-32">
        {/* Left: Headline & Core Identity */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-16 h-1 bg-white mb-10 shadow-[0_0_15px_white]" />
            <h2 className="text-6xl md:text-8xl font-display font-black leading-[0.85] mb-10 text-white tracking-tighter">
              THE<br />
              SOLO<br />
              <span className="text-white/30">
                OPERATIVE.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-10"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-8">
               The digital landscape is saturated with bloated agencies and fragmented teams. I operate as a <span className="text-white font-bold underline decoration-white/30 underline-offset-8">Single Point of Failure</span>—but only for the competition.
            </p>
            <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
               When you hire me, you aren't paying for account managers or junior developers. You are hiring a dedicated architect who handles everything from the first line of code to the final deployment. Total accountability. Absolute precision.
            </p>

            <div className="border-t border-white/10 pt-8">
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-6">Core Arsenal</h4>
                <div className="flex flex-wrap gap-3">
                    {['React / Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Framer Motion', 'PostgreSQL', 'AWS / Vercel', 'WebGL'].map((tech) => (
                        <span key={tech} className="px-4 py-2 border border-white/10 text-xs font-mono text-gray-300 uppercase tracking-wider hover:border-white/40 hover:text-white transition-colors bg-white/[0.02]">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
          </motion.div>
          
          {/* Decorative background text */}
          <div className="absolute -top-10 -left-10 text-[20rem] font-black text-white/[0.02] select-none pointer-events-none hidden lg:block">
            01
          </div>
        </div>

        {/* Right: Operational Philosophy */}
        <div className="grid grid-cols-1 gap-6 md:gap-8">
            {[
              { 
                icon: Target, 
                title: "Strategic Precision", 
                desc: "I don't build generic websites. I architect high-conversion engines designed to dominate your specific market niche. Every pixel serves a purpose." 
              },
              { 
                icon: Zap, 
                title: "High-Velocity Execution", 
                desc: "Time is your most valuable asset. My workflow is optimized for speed without compromising integrity. Expect production-ready results in record time." 
              },
              { 
                icon: Shield, 
                title: "Absolute Ownership", 
                desc: "I take full responsibility for the technical success of your project. No excuses, no middlemen, no friction. Just pure, unadulterated output." 
              }
            ].map((item, i) => (
              <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="p-8 md:p-10 border-l-2 border-white/20 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white transition-all duration-500 group"
              >
                  <div className="flex items-center gap-5 mb-4">
                      <item.icon className="w-7 h-7 text-gray-400 group-hover:text-white transition-colors" />
                      <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                      {item.desc}
                  </p>
              </motion.div>
            ))}
        </div>
      </div>

      {/* System Metrics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
           <Stat label="Years of Combat" value="05+" icon={Trophy} delay={0.2} />
           <Stat label="Systems Deployed" value="40+" icon={Code} delay={0.25} />
           <Stat label="Success Rate" value="100%" icon={Activity} delay={0.3} />
           <Stat label="Output Multiplier" value="10x" icon={Zap} delay={0.35} />
      </div>
    </Section>
  );
};
