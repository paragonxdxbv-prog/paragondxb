import React, { useState } from 'react';
import { Youtube, Instagram, ShoppingBag, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
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

const RealRedditIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 1.249.688 0 1.249-.561 1.249-1.249 0-.687-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z" />
    </svg>
)

const SimplePayPalIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.969 5.09-4.077 7.94-9.669 7.94h-1.204l-.765 4.842-.276 1.775a.576.576 0 0 1-.57.487h-.523z" />
    </svg>
)

const Card = ({ 
    icon: Icon, 
    label, 
    subLabel, 
    href, 
    colSpan = "col-span-1",
    action
}: any) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={action}
        // Added shadow-[0_0_15px_rgba(255,255,255,0.1)] on hover for the global white glow request
        className={`${colSpan} relative p-6 bg-black border border-white/10 hover:border-white transition-all duration-300 flex flex-col justify-between min-h-[160px] group overflow-hidden hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]`}
    >
        {/* Hover Glow Background */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <ArrowUpRight className="w-5 h-5 text-white" />
        </div>
        
        <div className="mb-4 relative z-10">
            <Icon className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
        </div>
        
        <div className="relative z-10">
            <h4 className="text-white font-bold text-lg">{label}</h4>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mt-1">{subLabel}</p>
        </div>
    </a>
);

export const Socials: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = "paragonxdxbv@gmail.com";

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="socials" className="py-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-4">
                CONNECT & EXPLORE
            </h2>
            <p className="text-gray-500 max-w-lg mx-auto">
                Join the network. Access assets. Initiate communication.
            </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            {/* 1. Discord (Big) */}
            <Card 
                colSpan="col-span-2 md:col-span-2 md:row-span-2" 
                icon={RealDiscordIcon} 
                label="Community" 
                subLabel="Discord Server" 
                href="https://discord.gg/4qh2cxzeZm"
            />

            {/* 2. Email (Interactive Copy) */}
            <div 
                onClick={handleCopy}
                className="col-span-2 md:col-span-1 relative p-6 bg-black border border-white/10 hover:border-white transition-all duration-300 flex flex-col justify-between min-h-[160px] group cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
                 <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    {copied ? <Check className="w-5 h-5 text-white" /> : <Copy className="w-5 h-5 text-white" />}
                </div>
                
                <div className="mb-4 relative z-10">
                    <Mail className="w-8 h-8 text-gray-500 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <div className="relative z-10">
                    <h4 className="text-white font-bold text-lg">{copied ? "Copied" : "Email"}</h4>
                    <p className="text-gray-500 text-xs font-mono uppercase tracking-wider mt-1">{email}</p>
                </div>
            </div>

            {/* 3. YouTube */}
            <Card 
                icon={Youtube} 
                label="YouTube" 
                subLabel="@ParagonDXB" 
                href="https://www.youtube.com/@ParagonDXB"
            />

            {/* 4. Instagram */}
            <Card 
                icon={Instagram} 
                label="Instagram" 
                subLabel="@paragondxb" 
                href="https://www.instagram.com/paragondxb/reels/"
            />

            {/* 5. Etsy - Renamed from Store */}
            <Card 
                icon={ShoppingBag} 
                label="Etsy" 
                subLabel="Digital Assets" 
                href="https://www.etsy.com/shop/ParagonDXB"
            />
            
            {/* 6. PayPal */}
            <Card 
                icon={SimplePayPalIcon}
                label="PayPal"
                subLabel="Send Payment" 
                href="https://www.paypal.com/paypalme/AndresRiosXYZ"
            />

            {/* 7. Reddit */}
             <Card 
                icon={RealRedditIcon}
                label="Reddit"
                subLabel="@AndresRiosXYZ"
                href="https://www.reddit.com/user/AndresRiosXYZ/"
            />

            {/* 8. TikTok (Wide) */}
            <Card 
                colSpan="col-span-2" 
                icon={TikTokIcon} 
                label="TikTok" 
                subLabel="@paragonxv" 
                href="https://www.tiktok.com/@paragonxv"
            />

        </div>
      </div>
    </Section>
  );
};