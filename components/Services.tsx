import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Check, Scale, Server, CreditCard, LayoutDashboard, Globe, Lock, Video, Wrench, Palette, Terminal, Layers, Infinity, ArrowRight, Sparkles, ArrowDown, ShieldAlert, Cpu, Database, Zap } from 'lucide-react';

// --- Terms of Engagement Upgrade ---
const TermItem = ({ title, text, index }: { title: string, text: string, index: number }) => (
  <div className="relative pl-8 border-l border-white/10 py-2 group">
      <div className="absolute left-[-5px] top-3 w-2.5 h-2.5 bg-black border border-white/30 rounded-full group-hover:bg-accent group-hover:border-accent transition-colors duration-300" />
      <h5 className="text-white font-bold text-sm mb-1 font-display tracking-wide flex items-center gap-2">
          <span className="text-gray-500 font-mono text-xs">0{index + 1} //</span> {title}
      </h5>
      <p className="text-gray-400 text-sm leading-relaxed font-light">{text}</p>
  </div>
);

const TermsSection = () => (
    <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
         <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                <div className="p-2 bg-white/5 rounded-lg">
                    <Scale className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-lg uppercase tracking-wider text-white">Engagement Protocols</h4>
            </div>
            
            <div className="space-y-6">
                <TermItem index={0} title="50% Deployment Fee" text="Work commences immediately after the initial secure deposit is verified." />
                <TermItem index={1} title="Asset Readiness" text="Logos, copy, and brand keys must be provided before the build phase begins." />
                <TermItem index={2} title="Scope Containment" text="The initial brief defines Phase 1. New features are logged as Phase 2 upgrades." />
                <TermItem index={3} title="Unified Command" text="One decision-maker. One channel. Zero communication latency." />
            </div>
         </div>
    </div>
);

// --- Technical Arsenal Upgrade ---
const TechArsenal = () => (
    <div className="bg-surface border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                 <div className="p-2 bg-white/5 rounded-lg">
                    <Cpu className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Technical Arsenal</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-colors">
                    <Globe className="w-6 h-6 text-blue-400 mb-3" />
                    <h5 className="text-white font-bold text-sm">Vercel Edge</h5>
                    <p className="text-xs text-gray-500 mt-1">Global CDN deployment.</p>
                 </div>
                 <div className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-colors">
                    <Database className="w-6 h-6 text-yellow-400 mb-3" />
                    <h5 className="text-white font-bold text-sm">Firebase</h5>
                    <p className="text-xs text-gray-500 mt-1">Real-time DB & Auth.</p>
                 </div>
                 <div className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-colors">
                    <LayoutDashboard className="w-6 h-6 text-purple-400 mb-3" />
                    <h5 className="text-white font-bold text-sm">CMS Control</h5>
                    <p className="text-xs text-gray-500 mt-1">Headless management.</p>
                 </div>
                 <div className="p-4 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-colors">
                    <Lock className="w-6 h-6 text-green-400 mb-3" />
                    <h5 className="text-white font-bold text-sm">Ironclad</h5>
                    <p className="text-xs text-gray-500 mt-1">SSL & DDoS Armor.</p>
                 </div>
            </div>
        </div>
    </div>
);

const ServiceCard = ({ 
    icon: Icon, 
    title, 
    desc,
    delay,
    isLocked = false
}: { 
    icon: any, 
    title: string, 
    desc: string,
    delay: number,
    isLocked?: boolean
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0 }} // Trigger instantly
        transition={{ duration: 0.4, delay: Math.min(delay, 0.1), ease: "easeOut" }}
        className={`relative bg-gradient-to-br from-[#0A0A0A] to-black border ${isLocked ? 'border-white/5 border-dashed' : 'border-white/10'} shadow-[0_0_0_1px_rgba(255,255,255,0.02)] rounded-2xl p-6 overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] transition-all duration-500 h-full flex flex-col backdrop-blur-sm`}
    >
         {/* Holographic Sheen on Hover */}
         {!isLocked && <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform translate-y-full group-hover:-translate-y-full" />}
         
         {/* Background Icon Watermark */}
         <div className="absolute -right-4 -bottom-4 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-500 rotate-12 pointer-events-none">
            <Icon className="w-32 h-32 text-white" />
        </div>
        
        <div className="relative z-10 flex justify-between items-start mb-5">
            <div className={`p-3 w-fit rounded-xl border backdrop-blur-md transition-colors ${isLocked ? 'bg-white/5 border-white/5' : 'bg-white/5 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:bg-white/10'}`}>
                <Icon className={`w-6 h-6 ${isLocked ? 'text-gray-600' : 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'}`} />
            </div>
            
            {/* Status Dot */}
            {!isLocked ? (
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-green-500 uppercase tracking-wider">Available</span>
                </div>
            ) : (
                <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-gray-500/10 border border-gray-500/20">
                     <Lock className="w-3 h-3 text-gray-500" />
                     <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Locked</span>
                </div>
            )}
        </div>
        
        <div className="relative z-10 flex-grow">
            <h3 className={`text-xl font-bold mb-3 tracking-tight ${isLocked ? 'text-gray-600' : 'text-white drop-shadow-md group-hover:text-accent'} transition-colors`}>{title}</h3>
            <p className={`text-sm leading-relaxed font-light ${isLocked ? 'text-gray-700' : 'text-gray-400'}`}>
                {desc}
            </p>
        </div>

        <div className={`relative z-10 mt-6 pt-6 border-t flex items-center justify-between transition-opacity ${isLocked ? 'border-white/5 opacity-30' : 'border-white/10 opacity-50 group-hover:opacity-100'}`}>
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">{isLocked ? 'Classified' : 'Configure'}</span>
            {!isLocked && (
                <div className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                    <ArrowRight className="w-3 h-3 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
            )}
        </div>
    </motion.div>
);

export const Services: React.FC = () => {
  return (
    <Section id="services" className="py-24">
       <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Capabilities</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Elite execution tailored to your specific objectives.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <ServiceCard icon={Globe} title="Web Architecture" desc="High-performance websites using Vercel, Firebase & React. Speed, security, and SEO optimized by default." delay={0} />
        <ServiceCard icon={Server} title="Discord Setup" desc="Advanced community infrastructure. Channels, roles, bots & permission hierarchies ready for launch." delay={0.05} />
        <ServiceCard icon={Layers} title="UI Components" desc="Bespoke React components, fluid animations, and interactive elements tailored to your brand's physics." delay={0.1} />
        <ServiceCard icon={Terminal} title="Advanced Coding" desc="Custom scripts, backend logic, and system integrations. Python, Java, C++, and more." delay={0.15} />
        <ServiceCard icon={Video} title="Video Production" desc="Cinematic editing, sound design, and motion graphics optimized for high-retention platforms." delay={0.2} />
        <ServiceCard icon={Palette} title="Visual Identity" desc="High-resolution branding assets, logos, and digital environments designed to command attention." delay={0.25} />
        <ServiceCard icon={Wrench} title="Custom Request" desc="Need something specific? If it's digital, I can likely build, fix, or optimize it. Just ask." delay={0.3} />
        <ServiceCard icon={Infinity} title="Full Stack Ops" desc="End-to-end development for complex projects requiring multiple disciplines and rapid execution." delay={0.35} />
        
        {/* The New "Coming Soon" Card to fill the gap */}
        <ServiceCard 
            icon={ShieldAlert} 
            title="System Upgrade" 
            desc="New operational capabilities are currently in development. Check back for patch notes." 
            delay={0.4} 
            isLocked={true}
        />
      </div>

      <div className="mb-20 max-w-4xl mx-auto">
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] p-8 md:p-12 rounded-[24px] text-center relative overflow-hidden group hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:border-white/30 transition-all duration-500">
            <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 rounded-full bg-white/10 mb-6 animate-pulse-slow shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    Custom Scope. Custom Price.
                </h3>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                    I do not sell off-the-shelf templates. I engineer bespoke solutions. 
                    Your project's cost is calculated based on <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">complexity</span>, <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">timeline</span>, and <span className="text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">value</span>.
                </p>
                <div className="flex flex-col items-center gap-3">
                    <p className="text-sm font-mono uppercase tracking-widest text-white/90 animate-pulse font-bold drop-shadow-md">
                        Scroll down to contact the owner
                    </p>
                    <ArrowDown className="w-5 h-5 text-white animate-bounce mt-2" />
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2">
                <TechArsenal />
           </div>

            <div className="h-full">
               <TermsSection />
            </div>
      </div>
      
      {/* Ready to Deploy CTA - Full Width Bottom */}
      <div className="mt-6 bg-white text-black rounded-3xl p-8 flex flex-col md:flex-row justify-between items-center shadow-[0_0_50px_rgba(255,255,255,0.3)] md:hover:shadow-[0_0_70px_rgba(255,255,255,0.5)] transition-all duration-300 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white z-0" />
            <div className="relative z-10 text-center md:text-left mb-6 md:mb-0">
                <h4 className="font-bold text-2xl mb-1">Ready to Deploy?</h4>
                <p className="text-gray-600 text-sm">Initiate the protocol and start your build.</p>
            </div>
            <a 
                href="mailto:paragonxdxbv@gmail.com" 
                className="relative z-10 flex justify-center items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold md:group-hover:scale-[1.05] transition-transform shadow-lg whitespace-nowrap"
            >
                    <CreditCard className="w-5 h-5" />
                    Initialize Project
            </a>
       </div>
    </Section>
  );
};