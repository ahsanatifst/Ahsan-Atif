/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Quote, Star, ArrowUpRight } from "lucide-react";
import { TESTIMONIALS_DATA } from "../data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const length = TESTIMONIALS_DATA.length;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  const active = TESTIMONIALS_DATA[currentIndex];

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0
    }),
    active: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
      transition: { duration: 0.3 }
    })
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-brand-cream relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-orange uppercase font-semibold">
            Testimonials & ROI
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-extrabold text-brand-dark mt-3 tracking-tight leading-tight">
            What Our Campaign Partners Say
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-5 rounded-full" />
          <p className="text-brand-dark/80 font-normal text-base sm:text-lg mt-4 max-w-xl mx-auto leading-relaxed">
            Direct endorsements from founders, CMOs, and brand owners who witnessed custom funnels transform their bottom lines.
          </p>
        </div>

        {/* Carousel Visual Frame */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-12">
          
          {/* Navigation Dot Indicators on top left for layout balance */}
          <div className="absolute top-0 right-4 flex items-center space-x-1.5 hidden sm:flex">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`w-7 h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === dotIdx ? "bg-brand-orange w-10" : "bg-brand-cream-border hover:bg-brand-dark/40"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <div className="bg-brand-cream-dark/30 border border-brand-cream-border/60 rounded-3xl p-6 sm:p-10 md:p-12 shadow-md relative min-h-[380px] sm:min-h-[340px] flex flex-col justify-between">
            {/* Absolute quote background badge decoration */}
            <Quote className="absolute top-6 right-6 w-20 h-20 text-brand-orange/[0.04] stroke-[1] pointer-events-none" />

            <div className="space-y-6 text-left">
              {/* Star Rating & ROI Highlight tags */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(active.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-current" />
                  ))}
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-brand-dark/60 ml-1.5">
                    Verified win
                  </span>
                </div>

                {/* Highlight direct return outcome */}
                {active.highlightMetric && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-orange text-white text-[10px] font-mono tracking-wider font-extrabold uppercase">
                    <ArrowUpRight className="w-3 h-3" />
                    {active.highlightMetric}
                  </span>
                )}
              </div>

              {/* Feedback Quote content text */}
              <p className="font-serif-lux text-lg sm:text-xl md:text-2xl text-brand-dark/95 leading-relaxed font-medium italic">
                "{active.feedback}"
              </p>
            </div>

            {/* Author Profile and Navigation Buttons bottom area */}
            <div className="pt-8 border-t border-brand-cream-border/40 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              {/* Author bio details */}
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-12 h-12 rounded-xl overflow-hidden border border-brand-cream-border bg-brand-cream-dark flex-shrink-0">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif-lux text-base sm:text-lg font-extrabold text-brand-dark leading-none">{active.name}</p>
                  <p className="font-sans text-[11px] text-brand-dark/60 leading-none mt-1.5 font-medium">
                    {active.role} at <span className="text-brand-orange font-semibold">{active.company}</span>
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-brand-cream-border/60 hover:border-brand-orange bg-brand-cream hover:bg-brand-orange text-brand-dark hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 focus:outline-hidden" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-brand-cream-border/60 hover:border-brand-orange bg-brand-cream hover:bg-brand-orange text-brand-dark hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 focus:outline-hidden" />
                </button>
              </div>

            </div>

          </div>

          {/* Mobile Dot Indicators bottom */}
          <div className="flex items-center justify-center space-x-1.5 mt-6 sm:hidden">
            {TESTIMONIALS_DATA.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                className={`w-5 h-1 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx ? "bg-brand-orange w-8" : "bg-brand-cream-border"
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
