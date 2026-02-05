import React, { useEffect, useState, Suspense } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { TechStack } from './components/TechStack';
import { Noise } from './components/ui/Noise';
import { Preloader } from './components/ui/Preloader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Lazy Load Heavy Components for Better TTI (Time To Interactive)
const About = React.lazy(() => import('./components/About').then(module => ({ default: module.About })));
const Process = React.lazy(() => import('./components/Process').then(module => ({ default: module.Process })));
const Projects = React.lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Socials = React.lazy(() => import('./components/Socials').then(module => ({ default: module.Socials })));
const Services = React.lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const ProductShowcase = React.lazy(() => import('./components/ProductShowcase').then(module => ({ default: module.ProductShowcase })));
const Testimonials = React.lazy(() => import('./components/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQ = React.lazy(() => import('./components/FAQ').then(module => ({ default: module.FAQ })));
const Footer = React.lazy(() => import('./components/Footer').then(module => ({ default: module.Footer })));

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 0.75,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
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

      <motion.main 
        initial={{ opacity: 0, filter: 'blur(15px)', scale: 1.02 }}
        animate={{ opacity: loading ? 0 : 1, filter: loading ? 'blur(15px)' : 'blur(0px)', scale: loading ? 1.02 : 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`bg-[#030303] text-white min-h-screen relative selection:bg-white selection:text-black overflow-x-hidden ${loading ? 'h-screen overflow-hidden' : ''}`}
      >
          
          <Noise />
          <Analytics />
          <SpeedInsights />

          {!loading && <Navbar />}

          {/* Hero Loads Instantly */}
          <Hero />
          
          <div className="relative z-10 bg-[#030303]">
            <TechStack />
            
            {/* Suspense Wrapper for Lazy Loaded Sections */}
            <Suspense fallback={<div className="h-screen w-full bg-black" />}>
                <About />
                <Process />
                <Services />
                <Projects />
                <Testimonials />
                <ProductShowcase />
                <FAQ />
                <Socials />
                <Footer />
            </Suspense>
          </div>
      </motion.main>
    </>
  );
};

export default App;