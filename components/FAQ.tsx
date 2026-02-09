import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from './ui/Section';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

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
        <div className="border-b border-white/10 last:border-0">
            <button 
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left group"
            >
                <span className={`text-xl md:text-2xl font-display font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-gray-500 group-hover:text-white'}`}>
                    {question}
                </span>
                <div className={`p-2 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-white text-black' : 'bg-black border border-white/20 text-white'}`}>
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
                        <p className="pb-8 text-gray-400 leading-relaxed max-w-3xl text-lg pl-0 md:pl-4 border-l-2 border-white/20">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="py-24 bg-transparent text-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="sticky top-32"
                >
                    <div className="inline-block p-4 bg-white text-black mb-6">
                        <HelpCircle className="w-8 h-8" />
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-6 uppercase leading-none">
                        Mission <br/> Intel
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">
                        Protocol details and operational parameters.
                    </p>
                    <a href="#socials" className="inline-flex items-center gap-2 font-bold text-white border-b-2 border-white pb-1 hover:gap-4 transition-all">
                        <span>Signal Me</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>

            <div className="lg:col-span-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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