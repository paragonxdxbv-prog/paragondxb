import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { FileSearch, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "The Brief",
    icon: FileSearch,
    desc: "We define the objective. No fluff. I analyze your requirements and architect a solution that fits your specific timeline and budget."
  },
  {
    id: 2,
    title: "Execution",
    icon: Code2,
    desc: "Deep work phase. I build the core infrastructure, implementing clean code and high-performance assets while you track progress via live links."
  },
  {
    id: 3,
    title: "Deployment",
    icon: Rocket,
    desc: "System launch. I handle the domain setup, SSL, and hosting configuration. Handover includes full documentation and asset transfer."
  }
];

export const Process: React.FC = () => {
  return (
    <Section id="process" className="py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="mb-16 md:mb-24 text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
             >
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-accent mb-4 tracking-widest uppercase">
                    Workflow
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    The Protocol
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto text-lg">
                    A streamlined, three-step engagement model designed for velocity and transparency.
                </p>
             </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[45px] left-[16%] right-[16%] h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

            {steps.map((step, i) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    className="relative flex flex-col items-center text-center group"
                >
                    {/* Number Badge */}
                    <div className="relative z-10 w-24 h-24 mb-8 bg-[#050505] border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:border-white/50 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-500">
                        <div className="absolute inset-0 rounded-full bg-white/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
                        <step.icon className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                        
                        {/* Orbiting Dot Animation */}
                        <div className="absolute inset-0 rounded-full animate-spin-slow border-t border-r border-transparent border-t-accent/50 border-r-accent/50" />
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                        <span className="text-white/30 mr-2 text-lg font-mono">0{step.id}.</span>
                        {step.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs group-hover:text-gray-300 transition-colors">
                        {step.desc}
                    </p>

                    {/* Mobile Connector */}
                    {i < steps.length - 1 && (
                         <div className="md:hidden mt-8 text-white/20">
                            <ArrowRight className="w-6 h-6 rotate-90" />
                         </div>
                    )}
                </motion.div>
            ))}
        </div>
    </Section>
  );
};