import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const REVIEWS = [
    { client: "Nexus Corp", text: "Unnatural speed. Delivered 3 days early." },
    { client: "Aether Studios", text: "Understood cinema, not just code." },
    { client: "Protocol_X", text: "Zero friction. Pure output." },
    { client: "Vortex Labs", text: "The visual identity is unmatched." },
    { client: "CyberCore", text: "High-performance architecture." },
    { client: "Zenith DAO", text: "Best developer we've worked with." },
    { client: "Horizon", text: "Pixel perfect implementation." },
    { client: "Flux Systems", text: "Incredible attention to detail." },
    { client: "Neon Ventures", text: "Transformed our digital presence." },
    { client: "Apex Digital", text: "Solid communication throughout." },
    { client: "Echo Base", text: "Optimized and scalable code." },
    { client: "Synthetix", text: "A true technical partner." },
    { client: "Vector Inc", text: "Exceeded all expectations." },
    { client: "Quantom", text: "Clean, maintainable codebase." },
    { client: "Stellar", text: "Rapid prototyping and execution." },
    { client: "Orbit", text: "Professional and reliable." },
    { client: "Nova", text: "Highly recommended for web3." },
    { client: "Pulse", text: "Great eye for motion design." },
    { client: "Drift", text: "Seamless integration." },
    { client: "Core", text: "Top tier service." }
];

const ReviewCard = ({ client, text }: { client: string, text: string }) => (
    <div className="flex-shrink-0 w-80 p-6 bg-gray-50 border border-gray-200 mx-4 flex flex-col justify-between h-48 hover:shadow-lg transition-shadow duration-300">
        <div>
            <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-black text-black" />
                ))}
            </div>
            <p className="text-gray-800 font-medium leading-snug">"{text}"</p>
        </div>
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
            <span className="font-bold text-sm uppercase tracking-wide">{client}</span>
            <CheckCircle2 className="w-3 h-3 text-green-600" />
        </div>
    </div>
);

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-200">
       <div className="container mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end">
          <div>
            <span className="font-mono text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Client Intel</span>
            <h2 className="text-4xl md:text-6xl font-display font-black text-black uppercase tracking-tighter">
                Feedback Loop
            </h2>
          </div>
          <div className="hidden md:block h-px w-32 bg-black mb-4" />
       </div>

       {/* Infinite Marquee - Row 1 (Left) */}
       <div className="relative flex overflow-x-hidden mb-8">
            <div className="animate-scroll flex whitespace-nowrap">
                {REVIEWS.map((review, i) => (
                    <ReviewCard key={i} client={review.client} text={review.text} />
                ))}
                 {/* Duplicate for seamless loop */}
                {REVIEWS.map((review, i) => (
                    <ReviewCard key={`dup-${i}`} client={review.client} text={review.text} />
                ))}
            </div>
       </div>

       {/* Infinite Marquee - Row 2 (Right - Reverse) */}
       <div className="relative flex overflow-x-hidden">
            <div className="animate-scroll-reverse flex whitespace-nowrap">
                {REVIEWS.slice().reverse().map((review, i) => (
                    <ReviewCard key={i} client={review.client} text={review.text} />
                ))}
                 {/* Duplicate for seamless loop */}
                {REVIEWS.slice().reverse().map((review, i) => (
                    <ReviewCard key={`dup-${i}`} client={review.client} text={review.text} />
                ))}
            </div>
       </div>
    </section>
  );
};