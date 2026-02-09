import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, ShoppingBag, Check, Mail, User, ArrowUpRight } from 'lucide-react';
import { Section } from './ui/Section';

const RealDiscordIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/>
    </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const BentoCard = ({ 
    icon: Icon, 
    label, 
    subLabel, 
    href, 
    colSpan = "col-span-1",
    bg = "bg-neutral-900",
    hoverColor = "group-hover:text-white"
}: any) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={`${colSpan} ${bg} relative p-6 rounded-2xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col justify-between min-h-[160px]`}
    >
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
        
        <div className="mb-4">
            <Icon className={`w-8 h-8 text-gray-500 transition-colors duration-300 ${hoverColor}`} />
        </div>
        
        <div>
            <h4 className="text-white font-bold text-lg">{label}</h4>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mt-1">{subLabel}</p>
        </div>
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </a>
);

export const Socials: React.FC = () => {
  return (
    <Section id="socials" className="py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
                CONNECT & <span className="text-gray-600">EXPLORE</span>
            </h2>
            <div className="h-1 w-24 bg-white" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* Primary - Discord (Large) */}
            <BentoCard 
                colSpan="col-span-2 md:col-span-2 md:row-span-2" 
                icon={RealDiscordIcon} 
                label="Community Server" 
                subLabel="Join the Elite" 
                href="https://discord.gg/4qh2cxzeZm"
                bg="bg-[#5865F2]/10 hover:bg-[#5865F2]/20"
                hoverColor="text-[#5865F2]"
            />

            {/* YouTube */}
            <BentoCard 
                icon={Youtube} 
                label="YouTube" 
                subLabel="@ParagonDXB" 
                href="https://www.youtube.com/@ParagonDXB"
                hoverColor="text-[#FF0000]"
            />

            {/* Instagram */}
            <BentoCard 
                icon={Instagram} 
                label="Instagram" 
                subLabel="@paragondxb" 
                href="https://www.instagram.com/paragondxb/reels/"
                hoverColor="text-[#E1306C]"
            />

            {/* Email */}
            <BentoCard 
                icon={Mail} 
                label="Email" 
                subLabel="Direct Line" 
                href="mailto:paragonxdxbv@gmail.com"
            />

            {/* Etsy */}
            <BentoCard 
                icon={ShoppingBag} 
                label="Shop Assets" 
                subLabel="Etsy Store" 
                href="https://www.etsy.com/shop/ParagonDXB"
                hoverColor="text-[#F1641E]"
            />

            {/* TikTok - Wide */}
            <BentoCard 
                colSpan="col-span-2" 
                icon={TikTokIcon} 
                label="TikTok" 
                subLabel="Viral Content" 
                href="https://www.tiktok.com/@paragonxv"
                bg="bg-neutral-900"
                hoverColor="text-[#00F2EA]"
            />

        </div>
      </div>
    </Section>
  );
};