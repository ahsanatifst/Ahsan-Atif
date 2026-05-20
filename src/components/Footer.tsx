/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUp, Heart } from "lucide-react";
import { OWNER_INFO } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark text-white border-t border-white/5 py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand Info details */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex flex-col">
              <span className="font-serif-lux text-xl sm:text-2xl font-black text-white tracking-normal">
                {OWNER_INFO.name}
              </span>
              <span className="font-mono text-[9px] tracking-[0.25em] text-brand-orange uppercase leading-none font-semibold mt-1">
                Performance Marketer & Strategist
              </span>
            </div>
            
            <p className="text-white/50 text-xs font-light max-w-sm leading-relaxed">
              Helping high-growth brands scale predictability by designing luxury visual identities, laser-targeted paid funnels, and organic community networks.
            </p>
          </div>

          {/* Column 2: Navigation link pathways */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-mono text-[10px] tracking-wider text-brand-orange uppercase font-bold mb-4">
              Sections
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <a href="#home" className="text-xs text-white/60 hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-xs text-white/60 hover:text-white transition-colors">Services</a>
              <a href="#why-me" className="text-xs text-white/60 hover:text-white transition-colors">Why Me</a>
              <a href="#process" className="text-xs text-white/60 hover:text-white transition-colors">Process</a>
              <a href="#tools" className="text-xs text-white/60 hover:text-white transition-colors">Tools</a>
              <a href="#portfolio" className="text-xs text-white/60 hover:text-white transition-colors">Portfolio</a>
              <a href="#testimonials" className="text-xs text-white/60 hover:text-white transition-colors">Reviews</a>
              <a href="#contact" className="text-xs text-white/60 hover:text-white transition-colors">Book Audit</a>
            </div>
          </div>

          {/* Column 3: Professional legal statements & credentials */}
          <div className="md:col-span-4 text-left space-y-4">
            <h4 className="font-mono text-[10px] tracking-wider text-brand-orange uppercase font-bold">
              Campaign Blueprint
            </h4>
            <p className="text-white/50 text-xs font-light leading-relaxed">
              Based in Dhaka, Bangladesh. Serving enterprise and creative startups globally. All strategist advice is fully customized.
            </p>
            
            <div className="font-mono text-[10px] text-white/45">
              <span>Timezone: BST (GMT+6)</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright line and back-to-top button */}
        <div className="pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/40 font-mono tracking-wide">
            © {currentYear} {OWNER_INFO.name}. All Rights Reservable. 
            <span className="block sm:inline sm:ml-4 mt-1 sm:mt-0 font-light">
              Crafted for Growth.
            </span>
          </p>

          {/* Back to top button */}
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-brand-orange text-white/65 hover:text-white font-mono text-[10px] tracking-wider uppercase font-semibold border border-white/5 hover:border-transparent transition-all cursor-pointer active:scale-95"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}
