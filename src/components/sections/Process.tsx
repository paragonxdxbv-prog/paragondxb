import { motion } from "motion/react";

const STEPS = [
  { num: "01", title: "You tell us what you need.", desc: "No forms. No lengthy briefs. Just tell us your vision, your budget and your deadline. We handle the rest.", badge: "No forms. No surveys." },
  { num: "02", title: "We scope it and plan it.", desc: "We map out exactly what gets built, how it gets built, and for what price. Transparent from the start.", badge: "Transparent pricing." },
  { num: "03", title: "We build it fast and clean.", desc: "Elite output. Efficient process. Zero compromises. Daily updates if the project is large enough. You're never in the dark.", badge: "Daily progress updates." },
  { num: "04", title: "You tell us when you're happy.", desc: "We iterate until it's perfect. Your satisfaction closes the project. Not our arbitrary deadline.", badge: "Unlimited revisions." },
];

export default function Process() {
  return (
    <section id="process" className="py-17 md:py-22 px-4 md:px-8 bg-black w-full relative">
      <div className="max-w-[90rem] mx-auto w-full grid grid-cols-1 lg:grid-cols-[35%_65%] gap-14">
        
        {/* Left Sticky Header */}
        <div className="relative">
          <div className="sticky top-28 flex flex-col items-start">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.6 }}
              className="mb-3"
            >
              <span className="font-mono text-[#C50022] text-[7px] tracking-widest">[ HOW IT WORKS ]</span>
            </motion.div>
            
            <motion.h2 
              initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", opacity: 0 }}
              whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", opacity: 1 }}
              viewport={{ once: true, margin: "0px", amount: 0.1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-sans font-bold text-[10px] md:text-[11px] text-white leading-[1.1] mb-4"
            >
              Simple. Transparent. Predictable.
            </motion.h2>

            <motion.div
               initial={{ width: 0 }}
               whileInView={{ width: "60px" }}
               viewport={{ once: true, margin: "0px", amount: 0.1 }}
               transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
               className="h-[1px] bg-[#C50022] mb-4"
            />

            <motion.p
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true, margin: "0px", amount: 0.1 }}
               transition={{ duration: 0.8, delay: 0.3 }}
               className="font-sans text-[11px] text-white/50 leading-[1.6]"
            >
              Timeline and pricing are custom. Tell us your project. We'll tell you everything.
            </motion.p>
          </div>
        </div>

        {/* Right Scrolling Steps */}
        <div className="flex flex-col relative w-full border-l-[2px] border-dashed border-[#C50022]/30 pl-6 md:pl-8 ml-3">
          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative bg-[#0d0000] border border-[rgba(197,0,34,0.15)] rounded-[4px] p-6 md:p-7"
              >
                {/* Connection point dot to dashed line */}
                <div className="absolute top-1/2 -left-[25px] md:-left-[36px] w-2 h-2 rounded-full bg-[#C50022] transform -translate-y-1/2" />
                
                <div className="absolute -top-4 right-4 font-display text-[56px] md:text-[84px] text-[#C50022] opacity-[0.05] pointer-events-none select-none">
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div className="inline-block bg-[rgba(197,0,34,0.1)] border border-[#C50022]/30 text-[#C50022] font-mono text-[6px] px-1 py-0.5 rounded-[2px] mb-3">
                    {step.badge}
                  </div>
                  <h3 className="font-sans font-bold text-[10px] md:text-[11px] text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[10px] text-white/60 leading-[1.6]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
