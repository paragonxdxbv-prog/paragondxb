import { motion } from "motion/react";

export default function Manifesto() {
  const line1 = "We are not a template shop.".split(" ");
  const line2 = "We are not a cheap fix.".split(" ");
  const line3 = "We are the last studio".split(" ");
  const line4 = "you'll ever need.".split(" ");
  const line5 = "Every pixel intentional.".split(" ");
  const line6 = "Every line of code purposeful.".split(" ");
  const line7 = "Every project — a statement.".split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.04 } }
  };

  return (
    <section className="py-28 md:py-42 px-4 md:px-8 bg-black flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[10%] right-[-10%] w-[840px] h-[840px] opacity-[0.03] blur-[2px] pointer-events-none">
         <img src="https://i.ibb.co/bMyz7c3F/Cerberus.jpg" alt="Watermark" className="w-full h-full object-cover rounded-full grayscale scale-[2.0]" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,0,34,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-[700px] flex flex-col items-center gap-8 relative z-10 w-full">
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px", amount: 0.1 }}
          className="font-mono text-[#C50022] text-[10px] uppercase font-bold tracking-[0.25em] mb-4"
        >
          [ THE PARAGON STANDARD ]
        </motion.div>

        <div className="flex flex-col items-center gap-4 w-full">
          {/* Lines 1-2 */}
          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100%" }} className="flex flex-wrap justify-center gap-[0.25em] font-sans font-bold text-[clamp(20px,2.5vw,32px)] text-white">
            {line1.map((w,i) => <motion.span key={i} variants={wordVariants}>{w}</motion.span>)}
          </motion.div>
          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100%" }} className="flex flex-wrap justify-center gap-[0.25em] font-sans font-bold text-[clamp(20px,2.5vw,32px)] text-white">
            {line2.map((w,i) => <motion.span key={i} variants={wordVariants}>{w}</motion.span>)}
          </motion.div>

          <div className="h-4"></div>

          {/* Lines 3-4 */}
          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100%" }} className="flex flex-wrap justify-center gap-[0.25em] font-sans font-bold text-[clamp(32px,5vw,72px)] text-[#C50022] [text-shadow:0_0_30px_rgba(197,0,34,0.3)] leading-[1.1]">
            {line3.map((w,i) => <motion.span key={i} variants={wordVariants}>{w}</motion.span>)}
          </motion.div>
          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100%" }} className="flex flex-wrap justify-center gap-[0.25em] font-sans font-bold text-[clamp(32px,5vw,72px)] text-[#C50022] [text-shadow:0_0_30px_rgba(197,0,34,0.3)] leading-[1.1]">
            {line4.map((w,i) => <motion.span key={i} variants={wordVariants}>{w}</motion.span>)}
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true, margin: "-100%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="h-[1px] bg-[#C50022] my-6"
          />

          {/* Lines 5-7 */}
          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100%" }} className="flex flex-wrap justify-center gap-[0.25em] font-sans font-bold text-[clamp(16px,2vw,24px)] text-white/80">
            {line5.map((w,i) => <motion.span key={i} variants={wordVariants}>{w}</motion.span>)}
          </motion.div>
          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100%" }} className="flex flex-wrap justify-center gap-[0.25em] font-sans font-bold text-[clamp(16px,2vw,24px)] text-white/80">
            {line6.map((w,i) => <motion.span key={i} variants={wordVariants}>{w}</motion.span>)}
          </motion.div>
          <motion.div variants={lineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100%" }} className="flex flex-wrap justify-center gap-[0.25em] font-sans font-bold text-[clamp(16px,2vw,24px)] text-white/80">
            {line7.map((w,i) => <motion.span key={i} variants={wordVariants}>{w}</motion.span>)}
          </motion.div>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-100%" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="h-[1px] bg-[#C50022] my-6"
          />

          {/* Final Line */}
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "0px", amount: 0.1 }}
             transition={{ duration: 1 }}
             className="font-display text-[clamp(48px,8vw,120px)] text-white tracking-widest uppercase mt-3"
          >
             PARAGON.
          </motion.div>

        </div>
      </div>
    </section>
  );
}
