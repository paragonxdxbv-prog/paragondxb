import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Code, Rocket, Shield, Zap, Target, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: Code,
    title: "Full-Stack Architecture",
    desc: "I don't just write code; I architect resilient ecosystems. From distributed databases to low-latency frontends, every layer is engineered for scale."
  },
  {
    icon: Rocket,
    title: "Velocity Engineering",
    desc: "Leveraging a refined internal library of high-performance modules, I deliver production-ready systems in timeframes that leave agencies in the dust."
  },
  {
    icon: Shield,
    title: "Direct Access Protocol",
    desc: "You have a direct line to the architect. No project managers, no miscommunications. We move from concept to deployment with zero friction."
  },
  {
    icon: Target,
    title: "Revenue-First Design",
    desc: "Aesthetics are secondary to results. Every interaction is strategically mapped to guide users toward high-value actions and measurable growth."
  }
];

export const Expertise: React.FC = () => {
  return (
    <Section id="expertise" className="py-32 md:py-48 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
          
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 bg-white/5 rounded-full mb-10">
              <Zap className="w-4 h-4 text-white animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-300">Operational Edge</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display font-black text-white mb-10 leading-[0.8] tracking-tighter">
              BEYOND<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
                CONVENTIONAL.
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
              The standard web is broken. Slow, generic, and uninspired. I engineer digital assets that command authority and force engagement. 
              If you want a website, hire a freelancer. If you want a <span className="text-white font-medium italic">competitive advantage</span>, hire me.
            </p>
            
            <div className="space-y-6 mb-12">
                {[
                    "Zero-Latency Performance Optimization",
                    "Cinematic Motion & Interaction Design",
                    "Scalable Cloud Infrastructure",
                    "Conversion-Centric User Journeys",
                    "Enterprise-Grade Security Protocols",
                    "Bespoke System Architecture"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
                        <span className="text-sm md:text-base font-mono text-gray-300 uppercase tracking-widest">{item}</span>
                    </div>
                ))}
            </div>

            <a 
              href="mailto:paragonxdxbv@gmail.com"
              className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] overflow-hidden"
            >
              <span className="relative z-10">Initiate Protocol</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </motion.div>

          {/* Right Column: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="p-10 border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.08] hover:border-white/40 transition-all duration-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-white/[0.05] transition-colors" />
                
                <benefit.icon className="w-10 h-10 text-gray-500 mb-8 group-hover:text-white transition-all duration-500 group-hover:scale-110" />
                <h3 className="text-2xl font-bold text-white mb-4 font-display tracking-tight uppercase">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
};
