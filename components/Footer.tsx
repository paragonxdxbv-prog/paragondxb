import React from 'react';
import { Section } from './ui/Section';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-32 md:pb-12 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Identity */}
            <div className="col-span-1 md:col-span-2">
                <h4 className="font-display font-bold text-white text-3xl mb-4 tracking-tight">
                    PARA<span className="text-gray-600">GON</span>
                </h4>
                <p className="text-gray-500 mb-6 max-w-sm leading-relaxed">
                    Elite digital architecture for the modern web. Precision engineered. Battle tested. 
                    Merging aesthetic dominance with functional superiority.
                </p>
            </div>

            {/* Column 2: Legal/Info */}
            <div>
                <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-white/10 pb-2 inline-block">Legal Protocols</h5>
                <ul className="space-y-3 text-gray-500 font-mono text-xs">
                    <li className="hover:text-white transition-colors cursor-pointer">PRIVACY POLICY</li>
                    <li className="hover:text-white transition-colors cursor-pointer">TERMS OF SERVICE</li>
                    <li className="hover:text-white transition-colors cursor-pointer">COMMERCIAL LICENSES</li>
                    <li className="hover:text-white transition-colors cursor-pointer">REFUND POLICY</li>
                </ul>
            </div>

             {/* Column 3: Status */}
             <div>
                <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs border-b border-white/10 pb-2 inline-block">System Status</h5>
                <div className="space-y-4 font-mono text-xs">
                    <div className="flex items-center gap-2 text-green-500 bg-green-500/10 p-2 rounded-sm border border-green-500/20">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span>ALL SYSTEMS OPERATIONAL</span>
                    </div>
                    <div className="text-gray-500">
                        SERVER TIME: <span className="text-white">{new Date().toLocaleTimeString('en-US', { hour12: false })} UTC</span>
                    </div>
                    <div className="text-gray-500">
                        NODE: <span className="text-white">US-EAST-1</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 font-mono text-xs">
                © {new Date().getFullYear()} PARAGON DIGITAL. ALL RIGHTS RESERVED.
            </p>
            <p className="text-gray-700 font-mono text-xs uppercase tracking-wider">
                DESIGNED & BUILT BY THE ARCHITECT
            </p>
        </div>
      </div>
    </footer>
  );
};