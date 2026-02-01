import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Socials } from './components/Socials';
import { Services } from './components/Services';
import { ProductShowcase } from './components/ProductShowcase';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const App: React.FC = () => {
  return (
    <main className="bg-[#030303] text-white min-h-screen relative selection:bg-accent selection:text-white">
      {/* Vercel Analytics */}
      <Analytics />
      <SpeedInsights />

      {/* Global Elements */}
      <Navbar />

      <Hero />
      <div className="relative z-10 bg-[#030303]">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>
        <About />
        <Services />
        <Projects />
        <ProductShowcase />
        <Socials />
      </div>
    </main>
  );
};

export default App;