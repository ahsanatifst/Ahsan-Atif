/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import * as LucideRange from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

// Dynamic Icon Lookup helper mapping string names to real Lucide icons safely
function getServiceIcon(iconName: string) {
  switch (iconName) {
    case "TrendingUp":
      return <LucideRange.TrendingUp className="w-6 h-6" />;
    case "Instagram":
      return <LucideRange.Instagram className="w-6 h-6" />;
    case "Palette":
      return <LucideRange.Palette className="w-6 h-6" />;
    case "Mail":
      return <LucideRange.Mail className="w-6 h-6" />;
    case "Users":
      return <LucideRange.Users className="w-6 h-6" />;
    case "Sparkles":
      return <LucideRange.Sparkles className="w-6 h-6" />;
    default:
      return <LucideRange.Layers className="w-6 h-6" />;
  }
}

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-brand-cream-dark/30 border-y border-brand-cream-border/40 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-orange uppercase font-semibold">
            Services & Focus
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-extrabold text-brand-dark mt-3 tracking-tight leading-tight">
            High-Performance Digital Channels Designed to scale.
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-5 rounded-full" />
          <p className="text-brand-dark/80 font-normal text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Direct-response pipelines built with premium aesthetics. No fluff, no vanity metrics — just custom strategy deployed for maximum revenue attribution.
          </p>
        </div>

        {/* Services Grid Canvas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service: Service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-brand-cream border border-brand-cream-border/60 rounded-2xl p-6 sm:p-8 hover:shadow-xl hover:border-brand-orange/20 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Corner accent tag */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-orange/5 to-transparent rounded-tr-2xl pointer-events-none" />

              <div>
                {/* Custom glowing icon frame wrapper */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-cream-dark text-brand-orange border border-brand-cream-border/60 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 mb-6 group-hover:shadow-lg group-hover:shadow-brand-orange/10">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Service Heading title */}
                <h3 className="font-serif-lux text-xl sm:text-2xl font-bold text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Paragraph Description */}
                <p className="text-brand-dark/75 text-sm sm:text-[0.935rem] font-normal leading-relaxed mt-3.5 mb-6">
                  {service.description}
                </p>

                {/* Service checklist bullets */}
                <div className="space-y-2.5 mt-2">
                  {service.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-left">
                      <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                        <LucideRange.Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-xs text-brand-dark/80 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button trigger */}
              <div className="pt-8 mt-auto border-t border-brand-cream-border/30">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider font-semibold uppercase text-brand-dark group-hover:text-brand-orange transition-colors duration-250 cursor-pointer"
                >
                  Configure My Funnel
                  <LucideRange.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
