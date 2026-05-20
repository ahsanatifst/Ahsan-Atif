/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, Target, Zap, ArrowRight, Star, ArrowUpRight, TrendingUp } from "lucide-react";
import { CaseStudy } from "../types";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, isOpen, onClose }: CaseStudyModalProps) {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md cursor-zoom-out"
          />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative bg-brand-cream border border-brand-cream-border/60 rounded-3xl w-full max-w-4xl shadow-2xl z-10 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
          >
            {/* Left Side Highlight Banner containing Image & Core Outcome Stat cards */}
            <div className="relative md:w-5/12 bg-zinc-950 flex flex-col justify-end text-white p-6 sm:p-8 overflow-hidden border-b md:border-b-0 md:border-r border-brand-cream-border/20">
              <div className="absolute inset-0 bg-brand-dark z-0">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover opacity-35 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent" />
              </div>

              {/* Close Button on Mobile (Upper Edge) */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:hidden w-8 h-8 rounded-full bg-brand-cream/10 hover:bg-brand-orange text-white flex items-center justify-center transition-colors shadow-lg pointer-events-auto z-40"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 space-y-4">
                <span className="inline-flex px-3 py-1 bg-brand-orange text-white text-[10px] font-mono tracking-widest uppercase font-bold rounded-full">
                  {caseStudy.category}
                </span>

                <h3 className="font-serif-lux text-2xl sm:text-3xl font-black leading-tight text-white">
                  {caseStudy.title}
                </h3>

                <div className="pt-2 border-t border-white/10 mt-3 space-y-1">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-white/50">Client Brand</p>
                  <p className="text-sm font-semibold text-white/95">{caseStudy.client}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {caseStudy.metrics.map((metric, mIdx) => (
                    <div key={mIdx} className="bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col">
                      <span className="font-serif-lux text-xl sm:text-2xl font-black text-brand-orange-light leading-none">
                        {metric.value}
                      </span>
                      <span className="font-sans text-[10px] text-white/60 leading-none mt-1.5 font-medium">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Strategy, Challenges, Solutions, Before/After Interactive Panel */}
            <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between relative bg-brand-cream text-left">
              
              {/* Close button on Desktop */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 hidden md:flex w-10 h-10 rounded-full bg-brand-cream-dark/50 hover:bg-brand-orange hover:text-white items-center justify-center text-brand-dark transition-all duration-200 shadow-xs z-10 cursor-pointer border border-brand-cream-border/30"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] tracking-wider text-brand-orange uppercase font-bold">Campaign Analysis</h4>
                  <div className="w-8 h-[2px] bg-brand-orange mt-1" />
                </div>

                {/* Challenge Block */}
                <div className="space-y-2">
                   <h5 className="font-serif-lux text-lg font-black text-brand-dark flex items-center gap-2">
                    <Target className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                    The Challenge
                  </h5>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-normal pl-6.5">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Strategy applied */}
                <div className="space-y-2">
                  <h5 className="font-serif-lux text-lg font-black text-brand-dark flex items-center gap-2">
                    <Zap className="w-4.5 h-4.5 text-brand-orange shrink-0" />
                    The Implemented Solution Focus
                  </h5>
                  <p className="text-xs sm:text-sm text-brand-dark/80 leading-relaxed font-normal pl-6.5">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Interactive Before/After Toggles Dashboard */}
                <div className="bg-brand-cream-dark/40 border border-brand-cream-border/60 rounded-2xl p-4 space-y-4">
                  <div className="flex justify-between items-center pb-2.5 border-b border-brand-cream-border/60">
                    <span className="font-serif-lux text-sm font-extrabold text-brand-dark">Funnel Setup Comparison</span>
                    
                    {/* Toggle pills */}
                    <div className="inline-flex bg-brand-cream-dark border border-brand-cream-border rounded-full p-0.5">
                      <button
                        onClick={() => setActiveTab("before")}
                        className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          activeTab === "before"
                            ? "bg-brand-dark text-white"
                            : "text-brand-dark/60 hover:text-brand-dark"
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setActiveTab("after")}
                        className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                          activeTab === "after"
                            ? "bg-brand-orange text-white font-extrabold"
                            : "text-brand-dark/60 hover:text-brand-dark"
                        }`}
                      >
                        After Ahsan
                      </button>
                    </div>
                  </div>

                  {/* Render content depending on activeTab toggling */}
                  <AnimatePresence mode="wait">
                    {activeTab === "before" ? (
                      <motion.div
                        key="before"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-2 text-left"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                          <span className="text-xs font-semibold text-brand-dark uppercase tracking-wide">Baseline Audit</span>
                        </div>
                        <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-brand-dark/80 font-normal leading-relaxed">
                          <li>• Broken analytics pixel conversion tracking.</li>
                          <li>• Generic stock graphics without target audience pain-point triggers.</li>
                          <li>• Over-reliance on generic ads without active retargeting loops.</li>
                          <li>• Inactive email list with zero lifecycle recovery sequences.</li>
                        </ul>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="after"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        className="space-y-2 text-left"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                          <span className="text-xs font-extrabold text-brand-orange uppercase tracking-wider">Strategic Redesign Wins</span>
                        </div>
                        <ul className="space-y-1.5 pl-4 text-xs sm:text-sm text-brand-dark/80 font-normal leading-relaxed">
                          <li>✔ Configured stable Google Analytics 4 & Custom Pixel triggers.</li>
                          <li>✔ Reorganized Meta campaigns into a 3-layer retargeting tunnel.</li>
                          <li>✔ Produced educational visual Canva Decks achieving higher CTR values.</li>
                          <li>✔ Deployed automated Klaviyo Welcome sequences and Cart reminders.</li>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Ultimate Results list */}
                <div className="space-y-2.5">
                  <h5 className="font-serif-lux text-base font-bold text-brand-dark">Concretized Monthly Results</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {caseStudy.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs text-brand-dark/85 font-normal">
                        <Check className="w-3.5 h-3.5 text-brand-orange mt-0.5 shrink-0 stroke-[2.5]" />
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Contact redirect link */}
              <div className="pt-6 mt-8 border-t border-brand-cream-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-brand-dark/40 font-semibold">Launch Campaign Date</p>
                  <p className="text-xs font-semibold text-brand-dark">{caseStudy.launchDate || "Late 2025"}</p>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-dark text-white hover:bg-brand-orange text-xs font-mono font-semibold uppercase tracking-wider transition-colors duration-200"
                >
                  Request Similar Results
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
