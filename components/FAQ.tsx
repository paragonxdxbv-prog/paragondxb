import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Do you outsource any work?",
    answer: "Negative. I am the sole architect. When you hire Paragon, you get my code, my design, and my attention. This ensures absolute consistency and security across the entire stack."
  },
  {
    question: "What is your typical timeline?",
    answer: "Velocity is a core tenant. A standard high-performance landing page takes 3-5 days. Complex full-stack applications typically range from 2-4 weeks depending on the scope defined in The Brief."
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes. I deploy primarily on Vercel's global edge network. It is the fastest, most secure infrastructure available. I handle the DNS, SSL, and continuous deployment pipelines."
  },
  {
    question: "What happens after the project is done?",
    answer: "You receive full ownership of the codebase. I provide a handover package with documentation. I also offer a 'Retainer Mode' for clients who need ongoing updates and feature expansions."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
    return (
        <motion.div 
            initial={false}
            className="border-b border-white/10 last:border-0"
        >
            <button 
                onClick={onClick}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className={`text-lg md:text-xl font-display font-medium transition-colors duration-300 ${isOpen ? 'text-white text-glow' : 'text-gray-400 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? 'border-accent bg-accent/10 text-accent' : 'border-white/10 text-gray-500 group-hover:border-white/30'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-gray-400 leading-relaxed max-w-2xl font-light">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="sticky top-32"
                >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                        <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Mission <br/> <span className="text-gray-500">Intel</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Protocol details and operational parameters.
                    </p>
                    <a href="#socials" className="text-sm font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors border-b border-white/20 pb-1">
                        Still have questions? // Signal Me
                    </a>
                </motion.div>
            </div>

            <div className="lg:col-span-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]"
                >
                    {faqs.map((faq, i) => (
                        <FAQItem 
                            key={i} 
                            question={faq.question} 
                            answer={faq.answer} 
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    </Section>
  );
};