import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Check, Zap, MessageCircle, Clock, Scale, DollarSign, Server, CreditCard, LayoutDashboard, Globe, Lock, Video, Play, Wrench, HelpCircle, Palette, Terminal, Layers, Infinity } from 'lucide-react';

const TermsList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-400 font-light">
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white" /></div>
        <p><strong className="text-white font-medium">50% Upfront:</strong> Work commences immediately after the initial deposit is secured.</p>
    </div>
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white" /></div>
        <p><strong className="text-white font-medium">Assets Ready:</strong> Logos, branding, and copy must be provided before development begins.</p>
    </div>
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white" /></div>
        <p><strong className="text-white font-medium">Scope Protection:</strong> The initial brief defines Phase 1; new features become Phase 2.</p>
    </div>
    <div className="flex items-start gap-3">
        <div className="mt-1 min-w-[16px]"><Check className="w-4 h-4 text-white" /></div>
        <p><strong className="text-white font-medium">Single Point of Contact:</strong> One decision-maker for fast execution and zero confusion.</p>
    </div>
  </div>
);

const TechItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-black border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)] hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300 group will-change-transform">
        <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors">
            <Icon className="w-5 h-5" />
        </div>
        <div>
            <h4 className="text-white font-bold text-sm mb-1 group-hover:text-white transition-colors">{title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
        </div>
    </div>
);

export const Services: React.FC = () => {
  const cardTransition = { duration: 0.5, ease: "easeOut" as const };
  const viewportConfig = { once: true, margin: "-50px" };

  return (
    <Section id="services" className="py-24">
       <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Services & <span className="text-white border-b-2 border-white">Pricing</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Transparent rates. Elite execution. No compromise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        
        {/* 1. Web Architecture ($300) */}
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={cardTransition}
            className="col-span-1 md:col-span-2 lg:col-span-2 bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Globe className="w-40 h-40 text-white" />
            </div>
            
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-3xl font-bold mb-2 text-white">Web Architecture</h3>
                    <div className="text-white text-lg font-medium font-mono">$30/hr Rate</div>
                </div>
                <Zap className="w-8 h-8 text-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                    <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-5xl font-display font-bold text-white">$300</span>
                        <span className="text-gray-500">/ Est. Total</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                        High-performance websites using Vercel, Firebase & React. Speed, security, and SEO optimized by default.
                    </p>
                </div>
                <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <Clock className="w-4 h-4 text-white" />
                        <span>~10 Hours Build Time</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <Zap className="w-4 h-4 text-white" />
                        <span>48–72 Hour Delivery</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <DollarSign className="w-4 h-4 text-white" />
                        <span>$150 Start / $150 Finish</span>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* 2. Discord Setup */}
        <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportConfig}
             transition={{ ...cardTransition, delay: 0.1 }}
             className="bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <MessageCircle className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
                <Server className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Discord Setup</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     Channels, roles, bots & permissions. Full community infrastructure ready for launch.
                </p>
            </div>
            <div className="relative z-10">
                <span className="text-3xl font-display font-bold text-white block mb-1">$100</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">Flat Fee</span>
            </div>
        </motion.div>

        {/* 3. UI Components */}
        <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportConfig}
             transition={{ ...cardTransition, delay: 0.15 }}
             className="bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Layers className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
                <Layers className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">UI Components</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Bespoke React components, smooth animations, and interactive elements tailored to your specific needs.
                </p>
            </div>
            <div className="relative z-10">
                 <span className="text-3xl font-display font-bold text-white block mb-1">$10–$100</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Based on Complexity</span>
            </div>
        </motion.div>

        {/* 4. Adv. Coding */}
        <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportConfig}
             transition={{ ...cardTransition, delay: 0.2 }}
             className="bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Terminal className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
                <Terminal className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Adv. Coding</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Python scripting, Java modules, C++, and other backend logic solutions.
                </p>
            </div>
            <div className="relative z-10">
                 <span className="text-3xl font-display font-bold text-white block mb-1">$40</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Hourly Rate</span>
            </div>
        </motion.div>

        {/* 5. Video Editing */}
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ ...cardTransition, delay: 0.25 }}
            className="bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Video className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
                <Video className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Video Editing</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Cinematic cuts, sound design, and motion graphics. Perfect for Reels, TikToks, and high-impact content.
                </p>
            </div>
            <div className="relative z-10">
                 <span className="text-3xl font-display font-bold text-white block mb-1">$15</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Per Video</span>
            </div>
        </motion.div>

        {/* 6. Visual Design */}
        <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportConfig}
             transition={{ ...cardTransition, delay: 0.3 }}
             className="bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Palette className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
                <Palette className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Visual Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Custom logos, high-resolution backgrounds, and complete brand identity assets.
                </p>
            </div>
            <div className="relative z-10">
                 <span className="text-3xl font-display font-bold text-white block mb-1">$10</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Starting Price</span>
            </div>
        </motion.div>

        {/* 7. Custom Request */}
        <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportConfig}
             transition={{ ...cardTransition, delay: 0.35 }}
             className="bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Wrench className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
                <HelpCircle className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Custom Request</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Need something else? If it's digital, I can likely build or fix it. Contact for a quote.
                </p>
            </div>
            <div className="relative z-10">
                 <span className="text-2xl md:text-3xl font-display font-bold text-white block mb-1">Custom</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Price Varies</span>
            </div>
        </motion.div>

        {/* 8. Everything Else */}
        <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportConfig}
             transition={{ ...cardTransition, delay: 0.4 }}
             className="bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 relative overflow-hidden group hover:border-white/30 hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] transition-all duration-500 flex flex-col justify-between will-change-transform"
        >
             <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Infinity className="w-32 h-32 text-white" />
            </div>
            <div className="relative z-10">
                <Infinity className="w-8 h-8 text-white mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Everything Else</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    Basically and mostly everything that's on the internet and much more. If it's digital, it's possible.
                </p>
            </div>
            <div className="relative z-10">
                 <span className="text-2xl md:text-3xl font-display font-bold text-white block mb-1">Unlimited</span>
                 <span className="text-xs text-gray-500 uppercase tracking-wider">Scope Based</span>
            </div>
        </motion.div>

        {/* 9. Terms */}
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportConfig}
            transition={{ ...cardTransition, delay: 0.45 }}
            className="col-span-1 md:col-span-2 lg:col-span-3 bg-black border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.05)] rounded-3xl p-8 flex flex-col justify-center will-change-transform"
        >
            <div className="flex items-center gap-2 mb-4 text-white">
                <Scale className="w-5 h-5" />
                <h4 className="font-bold text-sm uppercase tracking-wider">Terms of Engagement</h4>
            </div>
            <TermsList />
        </motion.div>

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           <div className="lg:col-span-2 bg-surface border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
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

            <div className="bg-white text-black rounded-3xl p-8 flex flex-col justify-center items-center text-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
                <h4 className="font-bold text-2xl mb-2">Ready to Start?</h4>
                <p className="text-gray-600 mb-6 text-sm">Secure your slot now.</p>
                <a 
                    href="https://www.paypal.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full flex justify-center items-center gap-2 bg-black text-white px-6 py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform shadow-lg"
                >
                     <CreditCard className="w-5 h-5" />
                     Pay via PayPal
                </a>
            </div>
      </div>
    </Section>
  );
};