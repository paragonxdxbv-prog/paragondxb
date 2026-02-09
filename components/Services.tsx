import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Globe, Server, Layers, Terminal, Video, Palette, Wrench, Infinity, ArrowDown, ShieldAlert, Lock, Banknote } from 'lucide-react';

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
    <div
        className={`relative p-8 border-2 flex flex-col justify-between h-full group transition-all duration-300
            ${isLocked 
                ? 'bg-gray-100 border-gray-200 border-dashed opacity-70' 
                : 'bg-white border-black hover:bg-black hover:text-white hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
            }`}
        style={{ willChange: 'transform' }}
    >
        <div>
            <div className="flex justify-between items-start mb-6">
                <Icon className={`w-8 h-8 ${isLocked ? 'text-gray-400' : 'text-black group-hover:text-white'}`} strokeWidth={1.5} />
                <span className={`font-mono text-xs font-bold tracking-widest ${isLocked ? 'text-gray-400' : 'text-gray-400 group-hover:text-white/50'}`}>
                    0{index + 1}
                </span>
            </div>
            
            <h3 className="text-2xl font-bold font-display mb-4 tracking-tight uppercase">{title}</h3>
            <p className={`text-sm leading-relaxed font-light ${isLocked ? 'text-gray-500' : 'text-gray-600 group-hover:text-gray-300'}`}>
                {desc}
            </p>
        </div>

        {isLocked && (
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest">
                <Lock className="w-3 h-3" />
                <span>Classified</span>
            </div>
        )}
    </div>
);

export const Services: React.FC = () => {
  return (
    <Section id="services" className="py-32 bg-white text-black">
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-5xl md:text-8xl font-display font-black text-black tracking-tighter mb-4">
                    CAPABILITIES
                </h2>
                <div className="h-2 w-32 bg-black" />
            </motion.div>
            
            <motion.p 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-600 max-w-md text-lg font-light leading-relaxed"
            >
                Elite execution tailored to your specific objectives. 
                <span className="font-bold text-black"> No templates. No shortcuts.</span>
            </motion.p>
        </div>

        {/* Removed motion.div staggerChildren for simple grid to fix flickering */}
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
        <div className="bg-black text-white p-12 md:p-20 relative overflow-hidden group cursor-pointer border border-black shadow-xl">
            <div className="absolute inset-0 bg-neutral-900 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Banknote className="w-8 h-8 text-white" />
                        <h3 className="text-3xl md:text-5xl font-display font-bold">Custom Scope</h3>
                    </div>
                    
                    <p className="text-gray-400 max-w-xl text-lg mb-4">
                        I do not sell off-the-shelf templates. Your project's cost is a function of complexity and value.
                    </p>
                    <div className="inline-block border border-white/30 px-4 py-2 bg-white/10 text-white font-mono uppercase text-sm tracking-wider">
                        Pricing: Custom Quote
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="h-16 w-16 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                        <ArrowDown className="w-8 h-8" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </Section>
  );
};