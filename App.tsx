import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { TechStack } from './components/TechStack';
import { Preloader } from './components/ui/Preloader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { GlobalBackground } from './components/ui/GlobalBackground';

// Components
import { About } from './components/About';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Socials } from './components/Socials';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8,
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

      <GlobalBackground />

      {!loading && <Navbar />}

      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
        className={`relative min-h-screen ${loading ? 'h-screen overflow-hidden' : ''}`}
      >
          <Analytics />
          <SpeedInsights />

          {/* All sections are now transparent or use their own internal styling to blend with GlobalBackground */}
          
          <div className="relative z-10">
              <Hero />
              <TechStack />
              <About />
              <Process />
              <Services />
              <Projects />
              <FAQ />
              <Testimonials /> 
              {/* Socials moved BELOW Testimonials as requested */}
              <Socials />
              <Footer />
          </div>
      </motion.main>
    </>
  );
};

export default App;