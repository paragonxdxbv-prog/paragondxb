import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Globe, Server, Layers, Terminal, Video, Palette, Wrench, Infinity, ArrowDown, ShieldAlert, Lock } from 'lucide-react';

const ServiceCard = ({ 
    icon: Icon, 
    title, 
    desc,
    index,
    isLocked = false
}: { 
    icon: any, 
    title: string, 
    desc: string,
    index: number,
    isLocked?: boolean
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }} 
        transition={{ duration: 0.4, delay: index * 0.05 }}
        className={`relative p-8 border backdrop-blur-md transition-all duration-300 flex flex-col justify-between h-full group rounded-xl overflow-hidden
            ${isLocked 
                ? 'bg-white/5 border-white/10 border-dashed opacity-50' 
                : 'bg-black/40 border-white/10 hover:bg-white/10 hover:border-white/40 hover:-translate-y-2 shadow-lg'
            }`}
    >
        {/* Hover Gradient */}
        {!isLocked && <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />}

        <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                    <Icon className={`w-6 h-6 ${isLocked ? 'text-gray-500' : 'text-white group-hover:text-black'}`} strokeWidth={1.5} />
                </div>
                <span className={`font-mono text-xs font-bold tracking-widest ${isLocked ? 'text-gray-600' : 'text-gray-500 group-hover:text-white'}`}>
                    0{index + 1}
                </span>
            </div>
            
            <h3 className="text-2xl font-bold font-display mb-4 tracking-tight uppercase text-white">{title}</h3>
            <p className={`text-sm leading-relaxed font-light ${isLocked ? 'text-gray-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                {desc}
            </p>
        </div>

        {isLocked && (
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                <Lock className="w-3 h-3" />
                <span>Classified</span>
            </div>
        )}
    </motion.div>
);

export const Services: React.FC = () => {
  return (
    <Section id="services" className="py-32">
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
                    CAPABILITIES
                </h2>
                <div className="h-2 w-32 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-300 max-w-md text-lg font-light leading-relaxed"
            >
                Elite execution tailored to your specific objectives. 
                <span className="font-bold text-white"> No templates. No shortcuts.</span>
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            <ServiceCard index={0} icon={Globe} title="Web Architecture" desc="High-performance websites using Vercel, Firebase & React. Speed, security, and SEO optimized by default." />
            <ServiceCard index={1} icon={Server} title="Discord Setup" desc="Advanced community infrastructure. Channels, roles, bots & permission hierarchies ready for launch." />
            <ServiceCard index={2} icon={Layers} title="UI Components" desc="Bespoke React components, fluid animations, and interactive elements tailored to your brand's physics." />
            <ServiceCard index={3} icon={Terminal} title="Advanced Coding" desc="Custom scripts, backend logic, and system integrations. Python, Java, C++, and more." />
            <ServiceCard index={4} icon={Video} title="Video Production" desc="Cinematic editing, sound design, and motion graphics optimized for high-retention platforms." />
            <ServiceCard index={5} icon={Palette} title="Visual Identity" desc="High-resolution branding assets, logos, and digital environments designed to command attention." />
            <ServiceCard index={6} icon={Wrench} title="Custom Request" desc="Need something specific? If it's digital, I can likely build, fix, or optimize it. Just ask." />
            <ServiceCard index={7} icon={Infinity} title="Full Stack Ops" desc="End-to-end development for complex projects requiring multiple disciplines and rapid execution." />
            <ServiceCard index={8} icon={ShieldAlert} title="System Upgrade" desc="New operational capabilities are currently in development." isLocked={true} />
        </div>

        {/* Custom Scope CTA */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 backdrop-blur-xl p-12 md:p-20 rounded-3xl relative overflow-hidden group cursor-pointer hover:border-white/30 transition-all duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <h3 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white">Custom Scope?</h3>
                    <p className="text-gray-400 max-w-xl text-lg">
                        I do not sell off-the-shelf templates. Your project's cost is a function of <span className="text-white font-bold border-b border-white/50">complexity</span>, <span className="text-white font-bold border-b border-white/50">timeline</span>, and <span className="text-white font-bold border-b border-white/50">value</span>.
                    </p>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <ArrowDown className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </motion.div>
      </div>
    </Section>
  );
};