import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { FileSearch, Code2, Rocket, ArrowRight, Clock } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Intelligence Gathering",
    icon: FileSearch,
    desc: "We define the objective with surgical precision. I analyze your market position, competitor weaknesses, and technical requirements to architect a dominant solution.",
    metric: "24-48 Hours",
    details: ["Competitor Audit", "Technical Mapping", "Strategic Roadmap", "KPI Definition"]
  },
  {
    id: 2,
    title: "High-Velocity Build",
    icon: Code2,
    desc: "Deep work phase. I engineer the core infrastructure using elite frameworks. You receive daily updates and live staging links to track the evolution of your asset.",
    metric: "1-3 Weeks",
    details: ["Core Engineering", "Motion Design", "API Integration", "Performance Tuning"]
  },
  {
    id: 3,
    title: "Global Deployment",
    icon: Rocket,
    desc: "System launch and optimization. I handle the full deployment stack, including edge caching, SSL, and performance tuning. Handover includes a full operational manual.",
    metric: "Zero Downtime",
    details: ["Edge Optimization", "Security Hardening", "Asset Handover", "Analytics Setup"]
  }
];

export const Process: React.FC = () => {
  return (
    <Section id="process" className="py-32 md:py-48 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="mb-24 md:mb-40 text-center">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
             >
                <span className="inline-block py-2 px-4 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 mb-6 tracking-[0.4em] uppercase">
                    Operational Protocol
                </span>
                <h2 className="text-6xl md:text-9xl font-display font-black text-white mb-8 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase tracking-tighter">
                    THE WORKFLOW
                </h2>
                <p className="text-gray-400 max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed">
                    A streamlined, high-fidelity engagement model designed for maximum velocity and total transparency. No bloat. Just pure execution.
                </p>
             </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 relative z-10 max-w-7xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-0" />

            {steps.map((step, i) => (
                <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    className="relative flex flex-col items-center text-center group"
                >
                    {/* Icon Container */}
                    <div className="relative z-10 w-32 h-32 mb-10 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.03)] group-hover:border-white group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)] transition-all duration-700">
                        <div className="absolute inset-2 rounded-full border border-white/5 group-hover:border-white/20 transition-colors" />
                        <step.icon className="w-10 h-10 text-gray-500 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                        
                        {/* Orbiting Ring */}
                        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white/20 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute inset-[-8px] rounded-full border border-transparent border-b-white/10 animate-[spin_12s_linear_infinite_reverse]" />
                    </div>

                    <div className="mb-6">
                        <span className="text-white/20 text-sm font-mono block mb-2 tracking-widest">PHASE_0{step.id}</span>
                        <h3 className="text-3xl font-bold text-white group-hover:text-shadow-sm transition-all uppercase tracking-tight">
                            {step.title}
                        </h3>
                    </div>
                    
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-sm group-hover:text-gray-300 transition-colors mb-8 px-4">
                        {step.desc}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {step.details.map((detail, idx) => (
                            <span key={idx} className="text-[10px] font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-sm uppercase tracking-wider">
                                {detail}
                            </span>
                        ))}
                    </div>

                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                        <Clock className="w-4 h-4 text-emerald-500" />
                        <span className="text-xs font-mono text-gray-300 uppercase tracking-[0.2em]">{step.metric}</span>
                    </div>

                    {/* Mobile Connector */}
                    {i < steps.length - 1 && (
                         <div className="md:hidden mt-16 text-white/10">
                            <ArrowRight className="w-8 h-8 rotate-90 animate-bounce" />
                         </div>
                    )}
                </motion.div>
            ))}
        </div>
    </Section>
  );
};
