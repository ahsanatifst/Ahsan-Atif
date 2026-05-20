/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TOOLS_PLATFORMS } from "../data";
import { Cpu, CheckCircle2, Award } from "lucide-react";

export default function Tools() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="tools" className="py-20 md:py-28 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-orange uppercase font-semibold">
            Tech Stack & Hubs
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-extrabold text-brand-dark mt-3 tracking-tight leading-tight">
            Advanced Tools & Ad Growth Architectures
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-5 rounded-full" />
          <p className="text-brand-dark/80 font-normal text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            I utilize institutional gold-standard marketing platforms to launch campaigns, track exact pixel conversions, build Klaviyo lifecycles, and deliver real-time Looker dashboards.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {TOOLS_PLATFORMS.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-brand-cream-dark/30 hover:bg-brand-cream-dark/50 border border-brand-cream-border/60 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300"
            >
              {/* Category Header Label */}
              <div className="flex items-center gap-2.5 pb-4 border-b border-brand-cream-border/50 mb-5 text-left">
                <div className="w-8 h-8 rounded-lg bg-brand-dark text-white flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-brand-orange" />
                </div>
                <h3 className="font-serif-lux text-lg sm:text-xl font-black text-brand-dark">
                  {cat.category}
                </h3>
              </div>

              {/* Tools List inside categorization cards */}
              <div className="space-y-4">
                {cat.tools.map((tool, tIdx) => (
                  <div
                    key={tIdx}
                    className="group/tool flex flex-col space-y-1 bg-brand-cream border border-brand-cream-border/30 rounded-xl p-3 hover:border-brand-orange/25 transition-all duration-200 text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-semibold text-brand-dark group-hover/tool:text-brand-orange transition-colors">
                        {tool.name}
                      </span>

                      {/* Pill Badge Level Badge */}
                      <span className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                        tool.level === "Expert"
                          ? "bg-brand-orange/10 text-brand-orange border border-brand-orange/20"
                          : "bg-brand-dark/10 text-brand-dark/80 border border-brand-dark/10"
                      }`}>
                        <Award className="w-2.5 h-2.5" />
                        {tool.level}
                      </span>
                    </div>
                    
                    {/* Tool core direct operational usage outline details */}
                    <p className="text-xs text-brand-dark/75 font-normal leading-normal">
                      {tool.usage}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
