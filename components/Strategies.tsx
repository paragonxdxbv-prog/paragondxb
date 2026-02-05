import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Zap, Box, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const strategies = [
  {
    id: 'sprint',
    title: 'Velocity Sprint',
    icon: Zap,
    subtitle: 'High-Impact Landing Pages',
    duration: '3-5 Days',
    features: [
      'Single Page Application',
      'High-Fidelity Animations',
      'Mobile Optimized',
      'SEO Configuration',
      'Vercel Deployment'
    ],
    highlight: false
  },
  {
    id: 'system',
    title: 'Deep System',
    icon: Box,
    subtitle: 'Full-Scale Applications',
    duration: '2-4 Weeks',
    features: [
      'Multi-Page Architecture',
      'Database Integration (Firebase)',
      'Authentication Systems',
      'Admin Dashboard',
      'CMS Integration'
    ],
    highlight: true // Recommended option
  },
  {
    id: 'retainer',
    title: 'Command',
    icon: ShieldCheck,
    subtitle: 'Ongoing Operations',
    duration: 'Monthly',
    features: [
      'Priority Support',
      'Weekly Feature Drops',
      'Server Maintenance',
      'Analytics Reporting',
      'Content Updates'
    ],
    highlight: false
  }
];

export const Strategies: React.FC = () => {
  return (
    <Section id="strategies" className="py-24">
      <div className="text-center mb-16">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                Engagement <span className="text-gray-500">Protocols</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                Choose the operational model that fits your mission parameters.
            </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {strategies.map((strategy, i) => (
            <motion.div
                key={strategy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={`relative p-8 rounded-3xl border flex flex-col transition-all duration-500 group overflow-hidden ${
                    strategy.highlight 
                    ? 'bg-white/5 border-white/30 shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] md:scale-105 z-10' 
                    : 'bg-black/40 border-white/10 hover:border-white/20'
                }`}
            >
                {/* Background Noise */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
                
                {/* Highlight Glow */}
                {strategy.highlight && (
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                )}

                <div className="relative z-10 mb-8">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${strategy.highlight ? 'bg-white text-black' : 'bg-white/10 text-white'}`}>
                        <strategy.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{strategy.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{strategy.subtitle}</p>
                    <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-accent">
                        EST. {strategy.duration}
                    </div>
                </div>

                <div className="relative z-10 flex-grow space-y-4 mb-8">
                    {strategy.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-gray-300">
                            <CheckCircle2 className={`w-4 h-4 mt-0.5 ${strategy.highlight ? 'text-white' : 'text-gray-500'}`} />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                <a 
                    href="mailto:paragonxdxbv@gmail.com"
                    className={`relative z-10 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                        strategy.highlight 
                        ? 'bg-white text-black hover:bg-gray-200' 
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                    }`}
                >
                    Initiate
                    <ArrowRight className="w-4 h-4" />
                </a>
            </motion.div>
        ))}
      </div>
    </Section>
  );
};