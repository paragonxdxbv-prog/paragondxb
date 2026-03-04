import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { TechStack } from './components/TechStack';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { GlobalBackground } from './components/ui/GlobalBackground';

// Components
import { About } from './components/About';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { Socials } from './components/Socials';
import { Services } from './components/Services';
import { Expertise } from './components/Expertise';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { ProductShowcase } from './components/ProductShowcase';

const App: React.FC = () => {
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
      <GlobalBackground />

      <div className="relative z-50">
        <Navbar />
      </div>

      <main 
        className="relative min-h-screen"
      >
          <Analytics />
          <SpeedInsights />

          {/* All sections are now transparent or use their own internal styling to blend with GlobalBackground */}
          
          <div className="relative z-10">
              <Hero />
              <Socials />
              <TechStack />
              <About />
              <Expertise />
              <Process />
              <Services />
              <ProductShowcase />
              <Projects />
              <FAQ />
              <Testimonials /> 
              <Footer />
          </div>
      </main>
    </>
  );
};

export default App;