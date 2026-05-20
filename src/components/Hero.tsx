/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, TrendingUp, Users, Target } from "lucide-react";
import { OWNER_INFO, CORE_STATS, CASE_STUDIES } from "../data";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:py-32 overflow-hidden bg-brand-cream"
    >
      {/* Design Background Elements */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[5%] left-[-15%] w-[400px] h-[400px] rounded-full bg-brand-cream-dark/40 blur-2xl pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8dfce_1px,transparent_1px),linear-gradient(to_bottom,#e8dfce_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-[0.25] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 md:space-y-8 text-left"
          >
            {/* Tagline Badge */}
            <motion.div variants={itemVariants} className="inline-flex self-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-mono tracking-wider uppercase font-semibold">
                <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-ping" />
                Social Media Strategist & Digital Marketer
              </span>
            </motion.div>

            {/* Main Luxury Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold tracking-tight text-brand-dark leading-none"
            >
              <span className="font-serif-lux block font-medium italic text-[#ff0d3c] tracking-tight text-3xl sm:text-5xl lg:text-[64px] leading-tight">
                Helping Premium Brands
              </span>
              <span className="block mt-1.5 text-2xl sm:text-3xl lg:text-[29px] leading-snug">
                Grow Through <span className="text-brand-orange relative inline-block">Strategic</span>
              </span>
              <span className="block mt-1.5 font-serif-lux font-black tracking-tight text-brand-dark text-4xl sm:text-5xl lg:text-[70px] leading-tight">
                Digital Marketing.
              </span>
            </motion.h1>

            {/* Short Bio description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-brand-dark/80 max-w-xl font-normal leading-relaxed"
            >
              {OWNER_INFO.shortBio}
            </motion.p>

            {/* Strategy / Action CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                className="group flex justify-center items-center gap-2 px-7 py-4 text-sm font-mono tracking-wider font-semibold uppercase bg-brand-orange text-white hover:bg-brand-dark hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 rounded-full shadow-md hover:shadow-lg shadow-brand-orange/10"
              >
                Claim Free Brand Audit
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group flex justify-center items-center gap-2 px-7 py-4 text-sm font-mono tracking-wider font-semibold uppercase bg-transparent text-brand-dark hover:text-brand-orange border border-brand-cream-border hover:border-brand-orange/30 hover:bg-brand-cream-dark/30 rounded-full transition-all duration-300"
              >
                Review Case Studies
                <span className="text-xs text-brand-dark/50 group-hover:text-brand-orange">({CASE_STUDIES.length} client wins)</span>
              </a>
            </motion.div>

            {/* Core Statistics Band */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-brand-cream-border/60 max-w-xl"
            >
              {CORE_STATS.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif-lux text-2xl sm:text-3xl font-extrabold text-brand-dark">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-brand-dark/60 uppercase mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image Composition Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center py-8 lg:py-0"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5]">
              {/* Outer decorative borders indicating precise placement framing */}
              <div className="absolute -inset-4 sm:-inset-6 border border-brand-cream-border rounded-2xl pointer-events-none z-0" />
              <div className="absolute -inset-2.5 border border-brand-orange/20 rounded-xl pointer-events-none z-0 animate-pulse duration-3000" />

              {/* Behind Accent Block */}
              <div className="absolute top-8 -right-4 -bottom-4 left-8 rounded-2xl bg-brand-cream-dark border border-brand-cream-border z-0" />

              {/* Main Portrait Frame */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-brand-cream bg-brand-cream-dark shadow-2xl z-10 group">
                <img
                  src={OWNER_INFO.personalImage}
                  alt={OWNER_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-10 hover:grayscale-0 scale-[1.02] hover:scale-[1.05] transition-all duration-700 ease-out"
                />
                
                {/* Visual shade gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-85 group-hover:opacity-60 transition-all duration-500" />

                {/* Inline floating credentials overlay details */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-20">
                  <p className="font-serif-lux text-lg font-bold leading-tight tracking-wide">{OWNER_INFO.name}</p>
                  <p className="font-mono text-[10px] text-brand-orange-light tracking-widest uppercase mt-0.5 font-semibold">
                    AhsanAtif.st
                  </p>
                </div>
              </div>

              {/* Interactive Floating Card 1 (Satisfied Campaign stats) */}
              <motion.div
                initial={{ x: -30, y: 30, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="absolute -left-6 sm:-left-10 bottom-12 z-20 glass-panel rounded-xl p-3.5 shadow-xl border border-white/60 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-600">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif-lux text-base font-extrabold text-brand-dark">3.5x ROAS</p>
                  <p className="font-mono text-[9px] text-brand-dark/60 uppercase leading-none tracking-wider font-semibold">
                    Average Paid Returns
                  </p>
                </div>
              </motion.div>

              {/* Interactive Floating Card 2 (Audience reach representation) */}
              <motion.div
                initial={{ x: 35, y: -30, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.6 }}
                className="absolute -right-6 sm:-right-8 top-12 z-15 glass-panel rounded-xl p-3.5 shadow-xl border border-white/60 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-serif-lux text-base font-extrabold text-brand-dark">5M+ Reach</p>
                  <p className="font-mono text-[9px] text-brand-dark/60 uppercase leading-none tracking-wider font-semibold">
                    Target User Eyes Gained
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Floating Scroll Down Guide */}
        <div className="hidden lg:flex justify-center pt-20">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 group transition-all"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-brand-dark/40 group-hover:text-brand-orange uppercase">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-8 h-12 rounded-full border-2 border-brand-cream-border flex items-start justify-center p-1.5"
            >
              <div className="w-1 h-3 bg-brand-orange rounded-full" />
            </motion.div>
          </a>
        </div>

      </div>
    </section>
  );
}
