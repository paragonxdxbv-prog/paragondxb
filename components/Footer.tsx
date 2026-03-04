import React from 'react';
import { Section } from './ui/Section';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-32 md:pb-12 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            
            {/* Column 1: Identity */}
            <div className="col-span-1 md:col-span-2">
                <h4 className="font-display font-black text-white text-5xl mb-6 tracking-tighter uppercase">
                    PARA<span className="text-gray-700">GON</span>
                </h4>
                <p className="text-gray-500 mb-8 max-w-md text-lg font-light leading-relaxed">
                    Elite digital architecture for the modern web. Precision engineered. Battle tested. 
                    Merging aesthetic dominance with functional superiority. We don't just build websites; we architect digital empires.
                </p>
                <div className="flex gap-4">
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                        <span className="text-[10px] font-bold">X</span>
                    </div>
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                        <span className="text-[10px] font-bold">IG</span>
                    </div>
                    <div className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-white transition-colors cursor-pointer">
                        <span className="text-[10px] font-bold">YT</span>
                    </div>
                </div>
            </div>

            {/* Column 2: Legal/Info */}
            <div>
                <h5 className="text-white font-black mb-8 uppercase tracking-[0.3em] text-xs border-b border-white/10 pb-4 inline-block">Legal Protocols</h5>
                <ul className="space-y-4 text-gray-500 font-mono text-xs">
                    <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                        <div className="w-1 h-1 bg-white/20" /> PRIVACY POLICY
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                        <div className="w-1 h-1 bg-white/20" /> TERMS OF SERVICE
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                        <div className="w-1 h-1 bg-white/20" /> COMMERCIAL LICENSES
                    </li>
                    <li className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                        <div className="w-1 h-1 bg-white/20" /> REFUND POLICY
                    </li>
                </ul>
            </div>

             {/* Column 3: Status */}
             <div>
                <h5 className="text-white font-black mb-8 uppercase tracking-[0.3em] text-xs border-b border-white/10 pb-4 inline-block">System Status</h5>
                <div className="space-y-6 font-mono text-[10px]">
                    <div className="flex items-center gap-3 text-emerald-500 bg-emerald-500/5 p-3 rounded-sm border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                        <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </div>
                        <span className="font-bold tracking-widest">ALL SYSTEMS OPERATIONAL</span>
                    </div>
                    <div className="text-gray-500 flex justify-between border-b border-white/5 pb-2">
                        <span>SERVER TIME:</span>
                        <span className="text-white">{new Date().toLocaleTimeString('en-US', { hour12: false })} UTC</span>
                    </div>
                    <div className="text-gray-500 flex justify-between border-b border-white/5 pb-2">
                        <span>NODE:</span>
                        <span className="text-white">US-EAST-1</span>
                    </div>
                    <div className="text-gray-500 flex justify-between border-b border-white/5 pb-2">
                        <span>LATENCY:</span>
                        <span className="text-emerald-500 font-bold">14MS</span>
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