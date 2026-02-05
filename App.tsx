import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Socials } from './components/Socials';
import { Services } from './components/Services';
import { ProductShowcase } from './components/ProductShowcase';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Noise } from './components/ui/Noise';
import { Preloader } from './components/ui/Preloader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optimization: Disable scroll restoration to force top on reload
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Initialize Lenis with SNAPPY settings (High Performance)
    const lenis = new Lenis({
      duration: 0.75, // Reduced from 1.2 to 0.75 for less "float", more control
      easing: (t) => 1 - Math.pow(1 - t, 4), // Quartic ease-out: Starts fast, stops precise
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9, // Slightly reduced for precision
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <AnimatePresence mode='wait'>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <main className={`bg-[#030303] text-white min-h-screen relative selection:bg-accent selection:text-white overflow-x-hidden ${loading ? 'h-screen overflow-hidden' : ''}`}>
          
          {/* Global Film Grain Overlay - Static Optimized */}
          <Noise />
          
          {/* Vercel Analytics */}
          <Analytics />
          <SpeedInsights />

          {/* Global Elements */}
          {!loading && <Navbar />}

          <Hero />
          <div className="relative z-10 bg-[#030303]">
            {/* Tech Stack Marquee - High Visibility Context */}
            <TechStack />
            
            <About />
            <Process /> {/* Workflow Section */}
            <Services />
            <Projects />
            <Testimonials /> {/* Social Proof Section */}
            <ProductShowcase />
            <FAQ /> {/* Context/Intel Section */}
            <Socials />
            <Footer /> {/* Command Center Footer */}
          </div>
      </main>
    </>
  );
};

export default App;