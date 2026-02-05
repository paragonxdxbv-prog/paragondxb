import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Check, Scale, Server, CreditCard, LayoutDashboard, Globe, Lock, Video, Wrench, Palette, Terminal, Layers, Infinity, ArrowRight, Sparkles, ArrowDown, ShieldAlert, Cpu, Database, Zap, HardDrive, Wifi } from 'lucide-react';

// --- Engagement Protocols (Upgraded) ---
const ProtocolCard = ({ number, title, text }: { number: string, title: string, text: string }) => (
    <div className="relative group p-6 bg-black/40 border border-white/10 rounded-xl hover:bg-white/5 transition-colors duration-300">
        <div className="flex items-start gap-4">
            <div className="text-xs font-mono text-gray-600 pt-1 group-hover:text-accent transition-colors">{number}</div>
            <div>
                <h4 className="text-white font-bold text-sm mb-2 font-display tracking-wide group-hover:text-glow transition-all">{title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed font-light">{text}</p>
            </div>
        </div>
        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/20 group-hover:border-accent transition-colors" />
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/20 group-hover:border-accent transition-colors" />
    </div>
);

const TermsSection = () => (
    <div className="bg-[#050505] border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col">
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 pointer-events-none" />
         
         <div className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <h4 className="font-bold text-lg uppercase tracking-wider text-white font-display">Engagement Protocols</h4>
            </div>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Standard Operating Procedures</p>
         </div>
         
         <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            <ProtocolCard number="01" title="Deployment Fee" text="50% upfront to initiate the build sequence. Secure transaction verified." />
            <ProtocolCard number="02" title="Asset Readiness" text="All brand assets must be staged and ready before Phase 1 begins." />
            <ProtocolCard number="03" title="Scope Lock" text="Phase 1 is absolute. Feature creep is logged for Phase 2 upgrades." />
            <ProtocolCard number="04" title="Unified Command" text="Single point of contact to ensure zero-latency communication." />
         </div>
    </div>
);

// --- Technical Arsenal (Upgraded to Server Rack Style) ---
const TechArsenal = () => (
    <div className="bg-[#080808] border border-white/10 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 pointer-events-none" />
        
        {/* Header */}
        <div className="relative z-10 flex justify-between items-start mb-8">
            <div className="flex items-center gap-3">
                 <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                    <Server className="w-5 h-5 text-white" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider font-display">Technical Arsenal</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        <span className="text-[10px] text-green-500 font-mono tracking-widest uppercase">Systems Online</span>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex gap-1">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1 h-8 bg-white/5 rounded-full" />
                ))}
            </div>
        </div>

        {/* Rack Units */}
        <div className="relative z-10 space-y-3">
            {/* Unit 1 */}
            <div className="group flex items-center justify-between p-3 bg-black/50 border border-white/5 hover:border-white/20 rounded-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white">Vercel Edge Network</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-600 font-mono">CDN</span>
                    <div className="w-2 h-2 bg-blue-500/50 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
                </div>
            </div>

            {/* Unit 2 */}
            <div className="group flex items-center justify-between p-3 bg-black/50 border border-white/5 hover:border-white/20 rounded-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                    <Database className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white">Firebase Realtime</span>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-600 font-mono">DB</span>
                    <div className="w-2 h-2 bg-yellow-500/50 rounded-full shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                </div>
            </div>

            {/* Unit 3 */}
            <div className="group flex items-center justify-between p-3 bg-black/50 border border-white/5 hover:border-white/20 rounded-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                    <Lock className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white">Enterprise Security</span>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-600 font-mono">SSL</span>
                    <div className="w-2 h-2 bg-green-500/50 rounded-full shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                </div>
            </div>
             {/* Unit 4 */}
             <div className="group flex items-center justify-between p-3 bg-black/50 border border-white/5 hover:border-white/20 rounded-lg transition-all duration-300">
                <div className="flex items-center gap-3">
                    <LayoutDashboard className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-bold text-gray-300 group-hover:text-white">Headless CMS</span>
                </div>
                 <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-600 font-mono">API</span>
                    <div className="w-2 h-2 bg-purple-500/50 rounded-full shadow-[0_0_5px_rgba(168,85,247,0.5)]" />
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
        // CRITICAL FIX: Trigger 200px BEFORE it enters viewport to prevent flicker
        viewport={{ once: true, margin: "200px" }} 
        transition={{ duration: 0.4, delay: 0, ease: "easeOut" }} // Removed delay for instant feel
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <div className="h-full">
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