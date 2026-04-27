import { useState, useEffect } from "react";
import Lenis from "lenis";
import { useScroll } from "motion/react";
import Loader from "./components/sections/Loader";
import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import MarqueeStrip from "./components/sections/MarqueeStrip";
import Capabilities from "./components/sections/Capabilities";
import WhyParagon from "./components/sections/WhyParagon";
import Work from "./components/sections/Work";
import Process from "./components/sections/Process";
import Manifesto from "./components/sections/Manifesto";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import { ScrollProgress, CustomCursor } from "./components/layout/InteractionElements";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // Scroll to top on reload so animations trigger properly
    window.scrollTo(0, 0);
    
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({ 
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      autoResize: true,
    });
    
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="site-flash-reveal" />

      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <ScrollProgress />
      <CustomCursor />
      
      {/* Background grain texture is always present, but we control the app visibility based on loading state */}
      <div className={`overflow-x-hidden min-h-screen transition-opacity duration-1000 ease-in-out bg-black ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* Grain Texture */}
        <div 
          className="fixed inset-0 z-[99] opacity-[0.05] mix-blend-screen pointer-events-none md:opacity-[0.05] hidden md:block" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }}
        />
        <div 
          className="fixed inset-0 z-[99] opacity-[0.03] mix-blend-screen pointer-events-none md:hidden" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 0%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')" }}
        />

        <Nav scrollYProgress={scrollYProgress} />
        
        <main>
          <Hero />
          <MarqueeStrip />
          <Capabilities />
          <Work />
          <WhyParagon />
          <Process />
          <Manifesto />
          <Pricing />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}
