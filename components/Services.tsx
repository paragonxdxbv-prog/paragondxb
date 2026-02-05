import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Check, Scale, Server, CreditCard, LayoutDashboard, Globe, Lock, Video, Wrench, Palette, Terminal, Layers, Infinity, ArrowRight, Sparkles, ArrowDown, ShieldAlert, Cpu, Database, Zap, Fingerprint, ScanLine, Activity } from 'lucide-react';

// --- Engagement Protocols (Tactical Data Cards) ---
const ProtocolCard = ({ number, title, text, icon: Icon }: { number: string, title: string, text: string, icon: any }) => (
    <div className="relative group p-6 bg-[#080808] border border-white/10 rounded-xl hover:bg-[#0A0A0A] hover:border-white/20 transition-all duration-300 overflow-hidden">
        {/* Hover Scan Effect */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        
        <div className="flex justify-between items-start mb-4">
             <div className="p-2 bg-white/5 rounded-md text-gray-400 group-hover:text-white group-hover:bg-white/10 transition-colors">
                <Icon className="w-5 h-5" />
             </div>
             <span className="text-xs font-mono text-gray-700 group-hover:text-green-500 transition-colors">PROT_0{number}</span>
        </div>
        
        <h4 className="text-white font-bold text-sm mb-2 font-display tracking-wide uppercase">{title}</h4>
        <p className="text-gray-400 text-xs leading-relaxed font-light">{text}</p>
    </div>
);

const TermsSection = () => (
    <div className="bg-[#030303] border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col">
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
         
         <div className="relative z-10 mb-8 flex justify-between items-end">
            <div>
                <h4 className="font-bold text-xl uppercase tracking-wider text-white font-display mb-1">Directives</h4>
                <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Rules of Engagement</p>
            </div>
            <Activity className="w-5 h-5 text-green-500 animate-pulse" />
         </div>
         
         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <ProtocolCard icon={CreditCard} number="1" title="Secure Retainer" text="50% initialization fee required to provision resources and lock the development window." />
            <ProtocolCard icon={Database} number="2" title="Asset Staging" text="Brand keys, copy, and visual assets must be uploaded to the secure vault prior to Day 0." />
            <ProtocolCard icon={Lock} number="3" title="Scope Freeze" text="Agreed objectives are absolute. Additional requests are queued for Phase 2 Deployment." />
            <ProtocolCard icon={Fingerprint} number="4" title="Solo Channel" text="One encrypted channel. One operative. No committees. Pure signal, zero noise." />
         </div>
    </div>
);

// --- Technical Arsenal (Server Rack Style) ---
const TechArsenal = () => (
    <div className="bg-[#030303] border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between group hover:border-white/20 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 pointer-events-none" />
        
        {/* Header */}
        <div className="relative z-10 flex justify-between items-start mb-8">
            <div className="flex items-center gap-3">
                 <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover:border-white/30 transition-colors">
                    <Server className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">Armory</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-green-500 font-mono tracking-widest uppercase">Online</span>
                    </div>
                </div>
            </div>
             {/* Decorative Vents */}
            <div className="hidden md:flex gap-1 opacity-50">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-1 h-6 bg-white/10 rounded-full" />
                ))}
            </div>
        </div>

        {/* Rack Units */}
        <div className="relative z-10 space-y-3">
            {[
                { icon: Globe, color: "text-blue-400", bg: "bg-blue-500", name: "Vercel Edge", type: "NET" },
                { icon: Database, color: "text-yellow-400", bg: "bg-yellow-500", name: "Firebase", type: "DB" },
                { icon: Lock, color: "text-green-400", bg: "bg-green-500", name: "Auth Zero", type: "SEC" },
                { icon: Cpu, color: "text-purple-400", bg: "bg-purple-500", name: "React Core", type: "LIB" },
            ].map((item, i) => (
                <div key={i} className="group/item flex items-center justify-between p-3 bg-white/[0.03] border border-white/5 hover:border-white/20 rounded-lg transition-all duration-300 hover:bg-white/[0.06]">
                    <div className="flex items-center gap-3">
                        <item.icon className={`w-4 h-4 ${item.color}`} />
                        <span className="text-sm font-bold text-gray-300 group-hover/item:text-white tracking-wide">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[10px] text-gray-600 font-mono group-hover/item:text-gray-400">{item.type}</span>
                        <div className={`w-1.5 h-1.5 ${item.bg} rounded-full opacity-50 group-hover/item:opacity-100 shadow-[0_0_5px_currentColor]`} />
                    </div>
                </div>
            ))}
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
        viewport={{ once: true, margin: "200px" }} 
        transition={{ duration: 0.4, delay: 0, ease: "easeOut" }}
        className={`relative bg-[#080808] border ${isLocked ? 'border-white/5 border-dashed' : 'border-white/10'} rounded-2xl p-6 overflow-hidden group hover:border-white/30 hover:bg-[#0A0A0A] transition-all duration-500 h-full flex flex-col`}
    >
        {/* Background Icon Watermark */}
         <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12 pointer-events-none">
            <Icon className="w-32 h-32 text-white" />
        </div>
        
        <div className="relative z-10 flex justify-between items-start mb-5">
            <div className={`p-3 w-fit rounded-xl border transition-colors ${isLocked ? 'bg-white/5 border-white/5 text-gray-600' : 'bg-white/5 border-white/10 text-white group-hover:bg-white/10 group-hover:text-white'}`}>
                <Icon className="w-6 h-6" />
            </div>
            
            {!isLocked ? (
                <div className="px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-mono text-green-500 uppercase tracking-wider flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Available
                </div>
            ) : (
                <div className="px-2 py-1 rounded-full bg-gray-800 border border-gray-700 text-[10px] font-mono text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
                     <Lock className="w-3 h-3" />
                     Locked
                </div>
            )}
        </div>
        
        <div className="relative z-10 flex-grow">
            <h3 className={`text-xl font-bold mb-3 tracking-tight ${isLocked ? 'text-gray-600' : 'text-white group-hover:text-white'} transition-colors`}>{title}</h3>
            <p className={`text-sm leading-relaxed font-light ${isLocked ? 'text-gray-700' : 'text-gray-400'}`}>
                {desc}
            </p>
        </div>

        <div className={`relative z-10 mt-6 pt-6 border-t flex items-center justify-between transition-opacity ${isLocked ? 'border-white/5 opacity-30' : 'border-white/10 opacity-50 group-hover:opacity-100'}`}>
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold">{isLocked ? 'Classified' : 'Initialize'}</span>
            {!isLocked && (
                <ArrowRight className="w-4 h-4 text-white -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
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
        viewport={{ once: true, margin: "100px" }}
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
        
        {/* The New "Coming Soon" Card */}
        <ServiceCard 
            icon={ShieldAlert} 
            title="System Upgrade" 
            desc="New operational capabilities are currently in development. Check back for patch notes." 
            delay={0.4} 
            isLocked={true}
        />
      </div>

      {/* THE "BLACK KEY" CARD (Custom Scope) */}
      <div className="mb-20 max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-[#0a0a0a] to-black border border-white/10 p-8 md:p-12 rounded-3xl text-center overflow-hidden group hover:border-white/30 transition-all duration-500 shadow-2xl">
            {/* Holographic Sheen Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -skew-x-12" />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
                    <ScanLine className="w-4 h-4 text-white" />
                    <span className="text-xs font-mono text-white tracking-widest uppercase">Obsidian Tier Access</span>
                </div>
                
                <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-md">
                    Custom Scope. Custom Price.
                </h3>
                
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                    I do not sell off-the-shelf templates. I engineer bespoke solutions. <br className="hidden md:block"/>
                    Your project's cost is a function of <span className="text-white border-b border-white/20 pb-0.5">complexity</span>, <span className="text-white border-b border-white/20 pb-0.5">timeline</span>, and <span className="text-white border-b border-white/20 pb-0.5">value</span>.
                </p>
                
                <div className="flex flex-col items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white">
                        Scroll to initiate contact
                    </p>
                    <ArrowDown className="w-4 h-4 text-white animate-bounce" />
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="h-full">
                <TechArsenal />
           </div>

            <div className="h-full">
               <TermsSection />
            </div>
      </div>
    </Section>
  );
};