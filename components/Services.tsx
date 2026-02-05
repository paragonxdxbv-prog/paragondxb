import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Check, Scale, Server, CreditCard, LayoutDashboard, Globe, Lock, Video, Wrench, Palette, Terminal, Layers, Infinity, ArrowRight, Sparkles, ArrowDown } from 'lucide-react';

const TermsList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-400 font-light">
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" /></div>
        <p><strong className="text-white font-medium">50% Upfront:</strong> Work commences immediately after the initial deposit is secured.</p>
    </div>
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" /></div>
        <p><strong className="text-white font-medium">Assets Ready:</strong> Logos, branding, and copy must be provided before development begins.</p>
    </div>
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" /></div>
        <p><strong className="text-white font-medium">Scope Protection:</strong> The initial brief defines Phase 1; new features become Phase 2.</p>
    </div>
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" /></div>
        <p><strong className="text-white font-medium">Single Point of Contact:</strong> One decision-maker for fast execution and zero confusion.</p>
    </div>
  </div>
);

const TechItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-black/50 border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] md:hover:border-white/40 md:hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 group backdrop-blur-sm relative overflow-hidden">
        {/* Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        
        <div className="p-2 rounded-lg bg-white/5 text-gray-400 md:group-hover:text-white transition-colors shadow-[0_0_10px_rgba(255,255,255,0.05)] relative z-10">
            <Icon className="w-5 h-5" />
        </div>
        <div className="relative z-10">
            <h4 className="text-white font-bold text-sm mb-1 md:group-hover:text-white transition-colors">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
        </div>
    </div>
);

const ServiceCard = ({ 
    icon: Icon, 
    title, 
    desc,
    delay 
}: { 
    icon: any, 
    title: string, 
    desc: string,
    delay: number
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4, delay: Math.min(delay, 0.2), ease: "easeOut" }}
        style={{ willChange: 'opacity, transform' }}
        className="relative bg-gradient-to-br from-[#0A0A0A] to-black border border-white/20 shadow-[0_0_25px_-5px_rgba(255,255,255,0.15)] rounded-2xl p-6 overflow-hidden group hover:border-white/40 hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.3)] transition-all duration-500 h-full flex flex-col backdrop-blur-sm"
    >
         {/* Noise Texture */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07] pointer-events-none mix-blend-overlay"></div>

         {/* Passive background sheen */}
         <div className="absolute inset-0 bg-white/5 opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />
         
         <div className="absolute -right-4 -bottom-4 opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500 rotate-12 pointer-events-none">
            <Icon className="w-32 h-32 text-white" />
        </div>
        
        <div className="relative z-10 mb-5 p-3 bg-white/10 w-fit rounded-xl border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md">
            <Icon className="w-6 h-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
        </div>
        
        <div className="relative z-10 flex-grow">
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight drop-shadow-md">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
                {desc}
            </p>
        </div>

        <div className="relative z-10 mt-6 pt-6 border-t border-white/10 flex items-center justify-between opacity-80 group-hover:opacity-100 transition-opacity">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">Custom Scope</span>
            <ArrowRight className="w-4 h-4 text-white -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" />
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
        
        <ServiceCard 
            icon={Globe}
            title="Web Architecture"
            desc="High-performance websites using Vercel, Firebase & React. Speed, security, and SEO optimized by default."
            delay={0}
        />

        <ServiceCard 
            icon={Server}
            title="Discord Setup"
            desc="Advanced community infrastructure. Channels, roles, bots & permission hierarchies ready for launch."
            delay={0.05}
        />

        <ServiceCard 
            icon={Layers}
            title="UI Components"
            desc="Bespoke React components, fluid animations, and interactive elements tailored to your brand's physics."
            delay={0.1}
        />

        <ServiceCard 
            icon={Terminal}
            title="Advanced Coding"
            desc="Custom scripts, backend logic, and system integrations. Python, Java, C++, and more."
            delay={0.15}
        />

        <ServiceCard 
            icon={Video}
            title="Video Production"
            desc="Cinematic editing, sound design, and motion graphics optimized for high-retention platforms."
            delay={0.2}
        />

        <ServiceCard 
            icon={Palette}
            title="Visual Identity"
            desc="High-resolution branding assets, logos, and digital environments designed to command attention."
            delay={0.25}
        />

        <ServiceCard 
            icon={Wrench}
            title="Custom Request"
            desc="Need something specific? If it's digital, I can likely build, fix, or optimize it. Just ask."
            delay={0.3}
        />

        <ServiceCard 
            icon={Infinity}
            title="Full Stack Ops"
            desc="End-to-end development for complex projects requiring multiple disciplines and rapid execution."
            delay={0.35}
        />

      </div>

      {/* Pricing Disclaimer */}
      <div className="mb-20 max-w-4xl mx-auto">
        <div className="bg-black/80 backdrop-blur-xl border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] p-8 md:p-12 rounded-[24px] text-center relative overflow-hidden group hover:shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:border-white/30 transition-all duration-500">
             {/* Noise Texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

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
            
            {/* Background effect inside card */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Terms Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 bg-black border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
        <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6 text-white justify-center md:justify-start">
                <Scale className="w-5 h-5 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
                <h4 className="font-bold text-sm uppercase tracking-wider text-glow">Terms of Engagement</h4>
            </div>
            <TermsList />
        </div>
      </motion.div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 bg-surface border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2 drop-shadow-md">
                        <Server className="w-5 h-5 text-white" />
                        Technical Arsenal
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <TechItem 
                            icon={Globe} 
                            title="Vercel Hosting" 
                            desc="$0 Monthly fees. Global CDN. Instant scalability." 
                        />
                        <TechItem 
                            icon={Server} 
                            title="Firebase DB" 
                            desc="Real-time data. Secure. Zero maintenance cost." 
                        />
                         <TechItem 
                            icon={LayoutDashboard} 
                            title="Admin Dashboard" 
                            desc="Full control. Manage your content without code." 
                        />
                         <TechItem 
                            icon={Lock} 
                            title="Elite Security" 
                            desc="DDoS Protection. SSL. Custom Domain setup included." 
                        />
                    </div>
                </div>
            </div>

            <div className="bg-white text-black rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-[0_0_50px_rgba(255,255,255,0.3)] md:hover:shadow-[0_0_70px_rgba(255,255,255,0.5)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100 to-white z-0" />
                <div className="relative z-10">
                    <h4 className="font-bold text-2xl mb-2">Ready to Deploy?</h4>
                    <p className="text-gray-600 mb-6 text-sm">Initiate the protocol.</p>
                    <a 
                        href="mailto:paragonxdxbv@gmail.com" 
                        className="w-full flex justify-center items-center gap-2 bg-black text-white px-6 py-4 rounded-xl font-bold md:hover:scale-[1.02] transition-transform shadow-lg"
                    >
                         <CreditCard className="w-5 h-5" />
                         Initialize Project
                    </a>
                </div>
            </div>
      </div>
    </Section>
  );
};