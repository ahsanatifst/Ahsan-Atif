/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Filter, TrendingUp, Sparkles, FolderOpen, RefreshCw } from "lucide-react";
import { CASE_STUDIES } from "../data";
import { CaseStudy } from "../types";
import CaseStudyModal from "./CaseStudyModal";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter Categories declaration
  const filterCategories = [
    "All",
    "Performance Marketing",
    "Lead Generation",
    "Organic Marketing",
    "Email Marketing",
    "Influencer Marketing"
  ];

  // Filters calculation
  const filteredStudies = activeFilter === "All"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(study => study.category === activeFilter);

  const handleStudyClick = (study: CaseStudy) => {
    setSelectedCase(study);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.96, opacity: 0, y: 15 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="portfolio"
      className="py-20 md:py-28 bg-brand-cream-dark/30 border-t border-brand-cream-border/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Heading Header */}
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-orange uppercase font-semibold">
            Case Studies
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-extrabold text-brand-dark mt-3 tracking-tight leading-tight">
            Real Proof. Real Scaling. Real Client Numbers.
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-5 rounded-full" />
          <p className="text-brand-dark/80 font-normal text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Click on any campaign card below to inspect the full case study analysis — including core challenges, specific structural revisions, and baseline before-and-after tracking dashboards.
          </p>
        </div>

        {/* Categories Navigation Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 md:mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-1.5 mr-3 text-brand-dark/50 font-mono text-xs uppercase font-bold">
            <Filter className="w-3.5 h-3.5 text-brand-orange" />
            <span>Filter wins:</span>
          </div>
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-wider rounded-full border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-orange text-white border-brand-orange shadow-md shadow-brand-orange/10 font-black scale-[1.01]"
                    : "bg-brand-cream border-brand-cream-border/60 text-brand-dark/75 hover:bg-brand-cream-dark/50 hover:text-brand-orange"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Dynamic Portfolio Case Studies Grid Desktop */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredStudies.map((study: CaseStudy) => (
              <motion.div
                key={study.id}
                variants={cardVariants}
                layout
                whileHover={{ y: -6 }}
                onClick={() => handleStudyClick(study)}
                className="group relative bg-brand-cream border border-brand-cream-border/65 rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:border-brand-orange/20 transition-all duration-300 flex flex-col justify-between text-left"
              >
                {/* Thumbnail image area */}
                <div className="relative aspect-[16/10] bg-brand-cream-dark overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale-15 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 inline-flex px-3 py-1 rounded-full bg-brand-dark/80 backdrop-blur-md text-[9px] font-mono uppercase tracking-widest text-white border border-white/10">
                    {study.category}
                  </span>

                  {/* Year Tag right corner */}
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-brand-orange text-white text-[9px] font-mono uppercase tracking-wider font-bold">
                    <TrendingUp className="w-2.5 h-2.5" />
                    Wins Track
                  </span>
                </div>

                {/* Body Content information Panel */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-[10px] font-mono tracking-wider text-brand-dark/50 uppercase font-semibold">
                      <span>Brand Client</span>
                      <span className="text-brand-orange">{study.client}</span>
                    </div>

                    <h3 className="font-serif-lux text-xl sm:text-2xl font-bold text-brand-dark leading-snug group-hover:text-brand-orange transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  {/* Highlight Metrics Pills container */}
                  <div className="mt-5 pt-4 border-t border-brand-cream-border/40 grid grid-cols-3 gap-2">
                    {study.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col bg-brand-cream-dark/30 rounded-xl p-2 border border-brand-cream-border/10">
                        <span className="font-serif-lux text-xs sm:text-sm font-black text-brand-orange leading-none">
                          {m.value}
                        </span>
                        <span className="font-sans text-[8px] text-brand-dark/50 uppercase leading-none mt-1 group-hover:text-brand-dark/70 tracking-wide font-medium">
                          {m.label.split(" ")[0]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Prompt */}
                  <div className="flex items-center justify-between text-xs font-mono font-bold tracking-wider uppercase text-brand-dark mt-6 pt-3 group-hover:text-brand-orange transition-colors border-t border-brand-cream-border/20">
                    <span>Inspect Study Metrics</span>
                    <div className="w-6 h-6 rounded-full bg-brand-cream-dark group-hover:bg-brand-orange text-brand-dark group-hover:text-white flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Prompt fallback */}
        {filteredStudies.length === 0 && (
          <div className="py-12 bg-zinc-100 rounded-3xl border border-dashed flex flex-col items-center">
            <FolderOpen className="w-12 h-12 text-zinc-400 mb-3" />
            <p className="text-base text-zinc-500 font-light">No custom case studies found under this filter Category.</p>
            <button
              onClick={() => setActiveFilter("All")}
              className="mt-4 flex items-center gap-1.5 px-4 py-2 rounded-full border bg-white font-mono text-xs uppercase"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset filters
            </button>
          </div>
        )}

        {/* Full Interactive Custom Modal overlays */}
        <CaseStudyModal
          caseStudy={selectedCase}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

      </div>
    </section>
  );
}
