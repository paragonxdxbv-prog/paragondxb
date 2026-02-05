import React from 'react';
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
        {/* Tech Stack Marquee - High Visibility Context */}
        <TechStack />
        
        {/* Subtle background grid pattern - HIDDEN ON MOBILE FOR PERFORMANCE */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none hidden md:block"></div>
        
        <About />
        <Process /> {/* Workflow Section */}
        <Services />
        <Projects />
        <Testimonials /> {/* New Social Proof Section */}
        <ProductShowcase />
        <FAQ /> {/* New Context/Intel Section */}
        <Socials />
      </div>
    </main>
  );
};

export default App;