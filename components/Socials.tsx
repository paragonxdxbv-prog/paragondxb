import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Instagram, ShoppingBag, Check, Mail, User } from 'lucide-react';
import { Section } from './ui/Section';

// --- Icons ---
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
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z"/>
    </svg>
)

// Enhanced PayPal Logo (Double P)
const RealPayPalIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.946 5.05-4.336 6.794-9.02 6.794h-1.83a.277.277 0 0 0-.272.336l.906 5.7c.05.314-.191.606-.52.606h-2.26c-.463 0-.816-.433-.748-.89l.833-5.276-2.105 6.533z M20.083 4.887c-.636-.77-1.745-1.096-3.295-1.096h-1.28c-.464 0-.87.322-.942.784l-.532 3.376.58-3.666c.071-.462.478-.784.943-.784h3.692c1.996 0 3.553.42 4.414 1.405.786.9 1.012 1.896.786 3.35-.02.112-.037.225-.061.341-.734 3.924-3.366 5.28-7.006 5.28h-1.424a.214.214 0 0 0-.21.26l.704 4.444.204 1.288c.036.236-.148.455-.387.455h-2.61c-.36 0-.634-.336-.58-.69l.647-4.095 1.636-10.364z"/>
    </svg>
)

interface InteractiveCardProps {
    icon: any;
    label: string;
    subLabel: string;
    href?: string;
    onClick?: () => void;
    baseColor?: string; 
    glowColor?: string;
    isCopy?: boolean;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({ 
    icon: Icon, 
    label, 
    subLabel, 
    href, 
    onClick, 
    baseColor = "text-gray-400", 
    glowColor = "bg-white",
    isCopy = false 
}) => {
    const [copied, setCopied] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        if (onClick) {
            onClick();
            if (isCopy) {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        }
    };

    const Content = () => (
        <>
            <AnimatePresence>
                {copied && (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-8 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20"
                    >
                        Copied!
                    </motion.div>
                )}
            </AnimatePresence>

            <div className={`w-10 h-10 mb-3 transition-transform duration-300 md:group-hover:scale-110 ${baseColor} md:group-hover:text-white relative z-10 drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]`}>
                {copied ? <Check className="w-full h-full" /> : <Icon className="w-full h-full" />}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${isCopy ? 'text-gray-300' : 'text-white'} md:group-hover:text-white transition-colors duration-300 relative z-10 text-center px-2 drop-shadow-md`}>
                {copied ? "Copied" : label}
            </span>
            <span className="text-[10px] text-gray-500 md:group-hover:text-white/70 mt-1 font-mono relative z-10 max-w-[90%] truncate">
                {subLabel}
            </span>
            
            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 ${glowColor} opacity-0 md:group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-black/50 opacity-100 z-0`} />
        </>
    );

    const cardClasses = "flex flex-col items-center justify-center w-full h-36 md:h-40 bg-surface border border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.08)] rounded-2xl backdrop-blur-md transition-all duration-300 group md:hover:border-white/30 md:hover:shadow-[0_0_35px_rgba(255,255,255,0.2)] relative overflow-hidden";

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={cardClasses}
                // REMOVED transition-all to stop fighting motion's y transform
            >
                <Content />
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={handleClick}
            whileHover={{ y: -5 }}
            className={cardClasses}
        >
            <Content />
        </motion.button>
    );
};


export const Socials: React.FC = () => {
  return (
    <Section id="socials" className="pb-24">
      <div className="bg-gradient-to-b from-surface to-black border border-white/20 shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

        <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                Connect & <span className="text-white">Explore</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
                Join the network. Access elite digital assets.
            </p>

            {/* Direct Contact Lines */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px w-12 bg-white/20 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    <h3 className="text-sm font-mono uppercase tracking-widest text-white font-bold text-glow">Direct Contact Lines</h3>
                    <div className="h-px w-12 bg-white/20 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                </div>
                
                {/* Responsive Grid for Large Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
                     {/* 1. Discord Server (Join) */}
                     <InteractiveCard 
                        icon={RealDiscordIcon}
                        label="Join Server"
                        subLabel="Host: paragon_dxb"
                        href="https://discord.gg/4qh2cxzeZm"
                        baseColor="text-[#5865F2]"
                        glowColor="bg-[#5865F2]"
                     />

                     {/* 2. Discord User (Copy) */}
                     <InteractiveCard 
                        icon={User}
                        label="paragon_dxb"
                        subLabel="Click to Copy"
                        onClick={() => navigator.clipboard.writeText("paragon_dxb")}
                        isCopy={true}
                        baseColor="text-white"
                        glowColor="bg-white"
                     />

                     {/* 3. Email (Copy) */}
                     <InteractiveCard 
                        icon={Mail}
                        label="Email Me"
                        subLabel="paragonxdxbv@gmail.com"
                        onClick={() => navigator.clipboard.writeText("paragonxdxbv@gmail.com")}
                        isCopy={true}
                        baseColor="text-gray-300"
                        glowColor="bg-gray-300"
                     />
                     
                     {/* 4. PayPal (Link) */}
                     <InteractiveCard 
                        icon={RealPayPalIcon}
                        label="PayPal"
                        subLabel="Direct Pay"
                        href="https://www.paypal.com/paypalme/AndresRiosXYZ"
                        baseColor="text-[#00457C]"
                        glowColor="bg-[#0070BA]"
                     />

                     {/* 5. Etsy (Link) */}
                     <InteractiveCard 
                        icon={ShoppingBag}
                        label="Etsy Shop"
                        subLabel="Buy Assets"
                        href="https://www.etsy.com/shop/ParagonDXB"
                        baseColor="text-[#F1641E]"
                        glowColor="bg-[#F1641E]"
                     />
                </div>
            </motion.div>

            {/* Media Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6 }}
            >
                 <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px w-12 bg-white/10 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                    <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500">Media Content</h3>
                    <div className="h-px w-12 bg-white/10 shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                     <InteractiveCard 
                        icon={TikTokIcon}
                        label="TikTok"
                        subLabel="@paragonxv"
                        href="https://www.tiktok.com/@paragonxv"
                        // Changed Color to Cyan/Teal to stand out from Insta's Pink
                        baseColor="text-[#00F2EA]"
                        glowColor="bg-[#00F2EA]"
                     />
                     
                     <InteractiveCard 
                        icon={Youtube}
                        label="YouTube"
                        subLabel="@ParagonDXB"
                        href="https://www.youtube.com/@ParagonDXB"
                        baseColor="text-[#FF0000]"
                        glowColor="bg-[#FF0000]"
                     />

                     <InteractiveCard 
                        icon={Instagram}
                        label="Instagram"
                        subLabel="@paragondxb"
                        href="https://www.instagram.com/paragondxb/reels/"
                        baseColor="text-[#E1306C]"
                        glowColor="bg-[#E1306C]"
                     />

                     <InteractiveCard 
                        icon={RealRedditIcon}
                        label="Reddit"
                        subLabel="@AndresRiosXYZ"
                        href="https://www.reddit.com/user/AndresRiosXYZ/"
                        baseColor="text-[#FF4500]"
                        glowColor="bg-[#FF4500]"
                     />
                </div>
            </motion.div>
        </div>
      </div>
    </Section>
  );
};