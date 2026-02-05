import React from 'react';
import { Section } from './ui/Section';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-32 md:pb-12 text-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            
            {/* Column 1: Identity */}
            <div className="col-span-1">
                <h4 className="font-display font-bold text-white text-2xl mb-4 tracking-tight">
                    PARA<span className="text-gray-600">GON</span>
                </h4>
                <p className="text-gray-500 mb-6 max-w-xs">
                    Elite digital architecture for the modern web. Precision engineered. Battle tested.
                </p>
            </div>

            {/* Column 2: Legal */}
            <div>
                <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Legal Protocols</h5>
                <ul className="space-y-3 text-gray-500 font-mono">
                    <li><span className="cursor-not-allowed opacity-50">Privacy Policy</span></li>
                    <li><span className="cursor-not-allowed opacity-50">Terms of Service</span></li>
                    <li><span className="cursor-not-allowed opacity-50">License Keys</span></li>
                </ul>
            </div>

             {/* Column 3: Status */}
             <div>
                <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">System Status</h5>
                <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center gap-2 text-green-500">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </div>
                        <span>ALL SYSTEMS OPERATIONAL</span>
                    </div>
                    <div className="text-gray-500">
                        LATENCY: <span className="text-white">12ms</span>
                    </div>
                    <div className="text-gray-500">
                        REGION: <span className="text-white">US-EAST</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 font-mono text-xs">
                © {new Date().getFullYear()} PARAGON DIGITAL. ALL RIGHTS RESERVED.
            </p>
            <p className="text-gray-700 font-mono text-xs">
                DESIGNED BY THE ARCHITECT
            </p>
        </div>
      </div>
    </footer>
  );
};