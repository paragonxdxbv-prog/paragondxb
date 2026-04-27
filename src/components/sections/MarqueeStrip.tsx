import { motion } from "motion/react";

export default function MarqueeStrip() {
  const row1 = "WEB DESIGN /// SAAS PLATFORMS /// AUTOMATION SYSTEMS /// 3D DESIGN /// MOTION & ANIMATION /// BRAND IDENTITY /// FULL STACK DEV /// VIDEO EDITING /// ";
  const row2 = "IF IT'S DIGITAL /// WE ARCHITECT IT /// EST. 2026 /// ZERO TEMPLATES /// ELITE OUTPUT /// ";

  return (
    <div className="w-full bg-black overflow-hidden flex flex-col border-y border-[rgba(197,0,34,0.15)] group">
      {/* Row 1 -> Right */}
      <div className="bg-[#0d0000] py-2 border-b border-[rgba(197,0,34,0.15)] flex whitespace-nowrap overflow-hidden group-hover:[animation-play-state:paused]">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
           className="flex font-sans font-medium text-[12px] uppercase tracking-wider text-white"
        >
          <span className="pr-4">{row1}</span>
          <span className="pr-4">{row1}</span>
          <span className="pr-4">{row1}</span>
          <span className="pr-4">{row1}</span>
        </motion.div>
      </div>

      {/* Row 2 <- Left */}
      <div className="bg-black py-2 whitespace-nowrap flex overflow-hidden opacity-60 group-hover:[animation-play-state:paused]">
        <motion.div
           animate={{ x: ["-50%", "0%"] }}
           transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
           className="flex font-mono text-[10px] text-[#C50022]"
        >
          <span className="pr-4">{row2}</span>
          <span className="pr-4">{row2}</span>
          <span className="pr-4">{row2}</span>
          <span className="pr-4">{row2}</span>
        </motion.div>
      </div>
    </div>
  );
}
