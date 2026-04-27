import { motion } from "motion/react";

const REASONS = [
  {
    num: "01",
    title: "No Templates. Ever.",
    desc: "Every single project built from the ground up. Your project deserves its own architecture — not someone else's framework with your colors swapped."
  },
  {
    num: "02",
    title: "Direct Communication.",
    desc: "No account managers. No middlemen. No ticket systems. You talk directly to the person building your project. Every time. Always."
  },
  {
    num: "03",
    title: "Quality is Non Negotiable.",
    desc: "We don't ship until it's elite. Fast doesn't mean rushed — it means efficient. Every pixel intentional. Every line purposeful."
  }
];

export default function WhyParagon() {
  return (
    <section className="py-17 md:py-22 px-4 md:px-8 bg-black w-full relative">
      <div className="max-w-[90rem] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-17">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="mb-3"
          >
            <span className="font-mono text-[#C50022] text-[7px] tracking-widest">[ WHY PARAGON ]</span>
          </motion.div>
          <motion.h2 
            initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
            whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-sans font-bold text-[10px] md:text-[11px] text-white mb-1"
          >
            The standard.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-[11px] text-white/50"
          >
            What you get when you work with us.
          </motion.p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-14">
          {REASONS.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col relative group pb-7"
            >
              <div className="absolute -top-7 -left-4 md:-top-11 md:-left-6 font-display text-[98px] md:text-[140px] text-[#C50022] opacity-[0.03] select-none pointer-events-none group-hover:text-white transition-colors duration-700">
                {r.num}
              </div>
              <div className="relative z-10 flex flex-col items-start">
                <div className="text-[#C50022] font-mono text-[10px] mb-3 group-hover:text-white transition-colors duration-500">
                  /
                </div>
                <h3 className="font-sans font-bold text-[11px] text-white mb-3">
                  {r.title}
                </h3>
                <p className="font-sans text-[10px] text-white/60 leading-[1.7]">
                  {r.desc}
                </p>
                <div className="w-0 h-[1px] bg-[#C50022] mt-4 group-hover:w-[28px] transition-all duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
