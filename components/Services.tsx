import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Globe, Server, Layers, Terminal, Video, Palette, Wrench, Infinity, ArrowDown, ShieldAlert, Lock, Banknote, Cpu } from 'lucide-react';

const ServiceNode = ({ 
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
    <div
        className={`relative pl-8 border-l-2 flex flex-col justify-between h-full group transition-all duration-500
            ${isLocked 
                ? 'border-white/10 opacity-50' 
                : 'border-white/20 hover:border-white'
            }`}
        style={{ willChange: 'transform' }}
    >
        {/* Connector Node Animation */}
        <div className={`absolute left-[-9px] top-8 w-4 h-4 rounded-full border-2 bg-black transition-all duration-500 z-20
            ${isLocked 
                ? 'border-gray-800' 
                : 'border-white/30 group-hover:border-white group-hover:shadow-[0_0_15px_white] group-hover:bg-white'}`} 
        />
        
        {/* Connection Line Horizontal */}
        <div className="absolute left-0 top-[40px] w-6 h-[2px] bg-white/10 group-hover:bg-white/50 transition-colors duration-500" />

        <div className={`
            ml-4 p-6 rounded-sm border border-white/5 bg-black/40 backdrop-blur-sm transition-all duration-500 relative overflow-hidden
            ${!isLocked && 'group-hover:border-white/30 group-hover:bg-white/5'}
        `}>
             {/* Hover Glare */}
             <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <Icon className={`w-8 h-8 ${isLocked ? 'text-gray-600' : 'text-gray-300 group-hover:text-white'}`} strokeWidth={1} />
                    <span className={`font-mono text-[10px] font-bold tracking-widest ${isLocked ? 'text-gray-800' : 'text-gray-600 group-hover:text-white'}`}>
                        SYS_0{index + 1}
                    </span>
                </div>
                
                <h3 className="text-xl font-bold font-display mb-2 tracking-wide uppercase text-white">{title}</h3>
                <p className={`text-sm leading-relaxed font-light font-mono ${isLocked ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-200'}`}>
                    {desc}
                </p>
            </div>

            {isLocked && (
                <div className="mt-4 flex items-center gap-2 text-[10px] font-mono text-gray-600 uppercase tracking-widest border-t border-white/5 pt-3">
                    <Lock className="w-3 h-3" />
                    <span>Access Denied</span>
                </div>
            )}
        </div>
    </div>
);

export const Services: React.FC = () => {
  return (
    <Section id="services" className="py-32 relative">
      
      {/* Background Grid Line for 'Tree' effect */}
      <div className="absolute left-6 md:left-[3.25rem] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0 hidden md:block" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 pl-0 md:pl-16">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-4 mb-4">
                    <Cpu className="w-6 h-6 text-white animate-pulse" />
                    <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">System Modules</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-display font-black text-white tracking-tighter mb-4">
                    CAPABILITIES
                </h2>
                <div className="h-1 w-full max-w-[200px] bg-white/20" />
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-md text-lg font-light leading-relaxed font-mono"
            >
                >> SELECT MODULE <br/>
                Elite execution. <span className="text-white">Zero latency.</span>
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-24">
            <ServiceNode index={0} icon={Globe} title="Web Architecture" desc="High-performance frameworks (React, Next.js). SEO optimized structure." />
            <ServiceNode index={1} icon={Server} title="Discord Infrastructure" desc="Community servers. Role hierarchy, security bots, and automation." />
            <ServiceNode index={2} icon={Layers} title="UI / UX Systems" desc="Interactive component libraries. Fluid motion. User-centric design." />
            <ServiceNode index={3} icon={Terminal} title="Backend Logic" desc="API integration, database management, and server-side scripting." />
            <ServiceNode index={4} icon={Video} title="Cinematic Production" desc="High-retention editing. Sound design. Visual storytelling." />
            <ServiceNode index={5} icon={Palette} title="Brand Identity" desc="Visual language. Logos, typography, and aesthetic direction." />
            <ServiceNode index={6} icon={Wrench} title="Custom Operations" desc="Bespoke solutions for unique digital problems." />
            <ServiceNode index={7} icon={Infinity} title="Full Stack" desc="End-to-end development. From concept to deployment." />
            <ServiceNode index={8} icon={ShieldAlert} title="[Redacted]" desc="Classified future capabilities." isLocked={true} />
        </div>

        {/* Custom Scope CTA - Redesigned */}
        <div className="ml-0 md:ml-8 border border-white/20 bg-black p-8 md:p-12 relative overflow-hidden group cursor-pointer hover:border-white transition-colors duration-500">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Banknote className="w-8 h-8 text-white" />
                        <h3 className="text-3xl md:text-4xl font-display font-bold text-white">Custom Project?</h3>
                    </div>
                    
                    <p className="text-gray-400 max-w-xl text-sm font-mono mb-6">
                        // INITIALIZE CUSTOM QUOTE PROTOCOL <br/>
                        Pricing is calculated based on complexity and timeline.
                    </p>
                    <div className="inline-block border border-white px-6 py-2 bg-white text-black font-bold uppercase text-xs tracking-wider hover:bg-gray-200 transition-colors">
                        Request Quote
                    </div>
                </div>
                
                <div className="hidden md:block">
                     <ArrowDown className="w-12 h-12 text-white/20 group-hover:text-white transition-colors duration-500" />
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};