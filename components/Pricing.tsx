import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './ui/Section';
import { Check, Zap, Star, Shield } from 'lucide-react';

const PricingCard = ({ 
  title, 
  price, 
  description, 
  features, 
  icon: Icon, 
  popular = false 
}: { 
  title: string, 
  price: string, 
  description: string, 
  features: string[], 
  icon: any, 
  popular?: boolean 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`relative p-8 rounded-3xl border ${popular ? 'border-white bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.15)]' : 'border-white/10 bg-black'} flex flex-col h-full`}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold uppercase tracking-wider rounded-full">
        Most Popular
      </div>
    )}
    
    <div className="mb-6">
      <Icon className={`w-10 h-10 mb-4 ${popular ? 'text-white' : 'text-gray-400'}`} />
      <h3 className="text-2xl font-display font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    
    <div className="mb-8">
      <span className="text-5xl font-display font-black text-white">{price}</span>
      {price !== 'Custom' && <span className="text-gray-500 ml-2">/project</span>}
    </div>
    
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <Check className={`w-5 h-5 shrink-0 ${popular ? 'text-white' : 'text-gray-500'}`} />
          <span className="text-gray-300 text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    
    <a 
      href="#socials" 
      className={`w-full py-4 rounded-xl font-bold text-center transition-all duration-300 ${popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}
    >
      Get Started
    </a>
  </motion.div>
);

export const Pricing: React.FC = () => {
  return (
    <Section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
            INVESTMENT <span className="text-gray-500">TIERS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Transparent pricing for elite digital solutions. Choose the tier that aligns with your ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard 
            title="Starter"
            price="$999"
            description="Perfect for personal brands and small businesses needing a strong digital presence."
            icon={Zap}
            features={[
              "Custom 3-Page Website",
              "Responsive Mobile Design",
              "Basic SEO Setup",
              "Contact Form Integration",
              "1 Week Delivery",
              "1 Revision Round"
            ]}
          />
          
          <PricingCard 
            title="Pro"
            price="$2,499"
            description="Comprehensive digital solution for growing businesses and serious creators."
            icon={Star}
            popular={true}
            features={[
              "Custom 5-8 Page Website",
              "Advanced Animations & Interactions",
              "CMS Integration (Blog/Portfolio)",
              "Comprehensive SEO Strategy",
              "Analytics Setup",
              "2-3 Weeks Delivery",
              "3 Revision Rounds"
            ]}
          />
          
          <PricingCard 
            title="Enterprise"
            price="Custom"
            description="Full-scale digital transformation for established brands and complex applications."
            icon={Shield}
            features={[
              "Unlimited Pages & Custom Architecture",
              "Full-Stack Web Application",
              "E-commerce Integration",
              "Custom Backend & API Development",
              "Priority Support & Maintenance",
              "Custom Timeline",
              "Unlimited Revisions"
            ]}
          />
        </div>
      </div>
    </Section>
  );
};
