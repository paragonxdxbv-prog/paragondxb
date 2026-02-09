import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { AnimatePresence, motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { TechStack } from './components/TechStack';
import { Preloader } from './components/ui/Preloader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

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
      wheelMultiplier: 0.8, // Slightly lower for more control
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
        className={`relative min-h-screen bg-black ${loading ? 'h-screen overflow-hidden' : ''}`}
      >
          <Analytics />
          <SpeedInsights />

          {/* Section 1: Hero (Image + Black) */}
          <Hero />
          
          {/* Section 2: Tech Stack (Black) */}
          <div className="relative z-20 bg-black">
             <TechStack />
          </div>
          
          {/* Section 3: About (White - Yin) */}
          <div className="relative z-10 bg-white text-black">
             <About />
          </div>

          {/* Section 4: Process (Black - Yang) */}
          <div className="relative z-10 bg-black text-white">
             <Process />
          </div>

          {/* Section 5: Services (White - Yin) */}
          <div className="relative z-10 bg-white text-black">
             <Services />
          </div>

          {/* Section 6: Projects (Black - Yang) */}
          <div className="relative z-10 bg-black text-white">
             <Projects />
          </div>

          {/* Section 7: FAQ (White - Yin) */}
          <div className="relative z-10 bg-white text-black">
             <FAQ />
          </div>

          {/* Section 8: Socials (Black - Yang) */}
          <div className="relative z-10 bg-black text-white">
             <Socials />
          </div>

          {/* Section 9: Testimonials (White - Yin) */}
          <div className="relative z-10 bg-white text-black">
             <Testimonials />
          </div>

           {/* Section 10: Footer (Black) */}
          <Footer />
      </motion.main>
    </>
  );
};

export default App;