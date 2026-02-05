import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
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
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling with lighter settings for performance
    const lenis = new Lenis({
      duration: 1.0, // Reduced from 1.2 for snappier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
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
    <main className="bg-[#030303] text-white min-h-screen relative selection:bg-accent selection:text-white overflow-x-hidden">
        
        {/* Global Film Grain Overlay - Optimized */}
        <Noise />
        
        {/* Vercel Analytics */}
        <Analytics />
        <SpeedInsights />

        {/* Global Elements */}
        <Navbar />

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
  );
};

export default App;