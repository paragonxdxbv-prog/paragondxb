import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Instagram, ShoppingBag, Check, Mail, User, Globe, MessageSquare } from 'lucide-react';
import { Section } from './ui/Section';

// --- Icons ---
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const RealPinterestIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.487-.695-2.419-2.873-2.419-4.624 0-3.772 2.749-7.229 7.93-7.229 4.173 0 6.91 2.978 6.91 6.898 0 4.108-2.589 7.41-6.181 7.41-1.219 0-2.375-.635-2.764-1.376l-.753 2.848c-.264 1.045-.981 2.355-1.467 3.158 1.098.336 2.259.516 3.46.516 6.621 0 11.979-5.368 11.979-11.987.001-6.629-5.357-12.017-11.991-12.017z" />
    </svg>
)

const RealRedditIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.094z"/>
    </svg>
)

const RealDiscordIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5328-9.7135-3.5686-13.638a.076.076 0 00-.032-.0277zM8.52 14.8406c-1.3563 0-2.4764-1.258-2.4764-2.8015 0-1.5436 1.1027-2.8015 2.4764-2.8015 1.3813 0 2.495 1.258 2.4764 2.8015 0 1.5436-1.1027 2.8015-2.4764 2.8015zm6.96 0c-1.3563 0-2.4764-1.258-2.4764-2.8015 0-1.5436 1.1027-2.8015 2.4764-2.8015 1.3813 0 2.495 1.258 2.4764 2.8015 0 1.5436-1.115 2.8015-2.4764 2.8015z"/>
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

            <div className={`w-10 h-10 mb-3 transition-transform duration-300 md:group-hover:scale-110 ${baseColor} md:group-hover:text-white relative z-10`}>
                {copied ? <Check className="w-full h-full" /> : <Icon className="w-full h-full" />}
            </div>
            <span className={`text-xs font-bold uppercase tracking-widest ${isCopy ? 'text-gray-300' : 'text-white'} md:group-hover:text-white transition-colors relative z-10 text-center px-2`}>
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

    const cardClasses = "flex flex-col items-center justify-center w-full h-36 md:h-40 bg-surface border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)] rounded-2xl backdrop-blur-md transition-all duration-300 group md:hover:border-white/30 md:hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] relative overflow-hidden";

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className={cardClasses}
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
    <Section id="socials" className="pb-32 md:pb-40">
      <div className="bg-gradient-to-b from-surface to-black border border-white/10 shadow-[0_0_20px_-5px_rgba(255,255,255,0.07)] rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

        <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Connect & <span className="text-white">Explore</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-lg">
                Join the network. Access elite digital assets.
            </p>

            {/* Direct Contact Lines */}
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px" }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mb-16"
            >
                <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px w-12 bg-white/20" />
                    <h3 className="text-sm font-mono uppercase tracking-widest text-white font-bold text-glow">Direct Contact Lines</h3>
                    <div className="h-px w-12 bg-white/20" />
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
                        subLabel="paragonxdxbv..."
                        onClick={() => navigator.clipboard.writeText("paragonxdxbv@gmail.com")}
                        isCopy={true}
                        baseColor="text-gray-300"
                        glowColor="bg-gray-300"
                     />
                     
                     {/* 4. Reddit (Link) */}
                     <InteractiveCard 
                        icon={RealRedditIcon}
                        label="Reddit"
                        subLabel="DM Me"
                        href="https://www.reddit.com/user/AndresRiosXYZ/"
                        baseColor="text-[#FF4500]"
                        glowColor="bg-[#FF4500]"
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

            {/* Media Content - Now styled consistently with large cards */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px 200px 0px" }}
                transition={{ duration: 0.6 }}
            >
                 <div className="flex items-center justify-center gap-3 mb-8">
                    <div className="h-px w-12 bg-white/10" />
                    <h3 className="text-sm font-mono uppercase tracking-widest text-gray-500">Media Content</h3>
                    <div className="h-px w-12 bg-white/10" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
                     <InteractiveCard 
                        icon={TikTokIcon}
                        label="TikTok"
                        subLabel="@paragonxv"
                        href="https://www.tiktok.com/@paragonxv"
                        baseColor="text-[#FF0050]"
                        glowColor="bg-[#FF0050]"
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
                        icon={RealPinterestIcon}
                        label="Pinterest"
                        subLabel="@paragonxdxbv"
                        href="https://ro.pinterest.com/paragonxdxbv/"
                        baseColor="text-[#E60023]"
                        glowColor="bg-[#E60023]"
                     />
                </div>
            </motion.div>
        </div>
      </div>
      
      <footer className="mt-20 text-center border-t border-white/5 pt-10">
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Paragon. System Active.
          </p>
      </footer>
    </Section>
  );
};