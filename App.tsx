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

// Lazy Load Heavy Components
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

      {!loading && <Navbar />}

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className={`bg-black min-h-screen relative overflow-x-hidden ${loading ? 'h-screen overflow-hidden' : ''}`}
      >
          
          <Analytics />
          <SpeedInsights />

          {/* Section 1: Hero (Black) */}
          <Hero />
          
          {/* Section 2: Tech Stack (Black) */}
          <TechStack />
          
          <Suspense fallback={<div className="h-screen w-full bg-white" />}>
              {/* Section 3: About (White) */}
              <div className="bg-white text-black relative z-10">
                 <About />
              </div>

              {/* Section 4: Process (Black) */}
              <div className="bg-black text-white relative z-10">
                 <Noise />
                 <Process />
              </div>

              {/* Section 5: Services (White) */}
              <div className="bg-white text-black relative z-10">
                 <Services />
              </div>

              {/* Section 6: Projects (Black) */}
              <div className="bg-black text-white relative z-10">
                 <Noise />
                 <Projects />
              </div>

              {/* Section 7: FAQ (White) */}
              <div className="bg-white text-black relative z-10">
                 <FAQ />
              </div>

              {/* Section 8: Socials (Black) */}
              <div className="bg-black text-white relative z-10">
                 <Socials />
              </div>

              {/* Section 9: Testimonials / Client Intel (White - Marquee) */}
              <div className="bg-white text-black relative z-10">
                 <Testimonials />
              </div>

               {/* Section 10: Footer (Black) */}
              <Footer />
          </Suspense>
      </motion.main>
    </>
  );
};

export default App;