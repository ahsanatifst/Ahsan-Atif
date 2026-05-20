/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WORKFLOW_PROCESS } from "../data";
import { PhoneCall, FileText, Rocket, LineChart } from "lucide-react";

export default function Process() {
  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <PhoneCall className="w-5 h-5 text-white" />;
      case 2:
        return <FileText className="w-5 h-5 text-white" />;
      case 3:
        return <Rocket className="w-5 h-5 text-white" />;
      case 4:
        return <LineChart className="w-5 h-5 text-white" />;
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-brand-cream-dark/20 border-y border-brand-cream-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-xs tracking-[0.25em] text-brand-orange uppercase font-semibold">
            Process & Workflow
          </span>
          <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-extrabold text-brand-dark mt-3 tracking-tight leading-tight">
            Our 4-Step Revenue Growth Roadmap
          </h2>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-5 rounded-full" />
          <p className="text-brand-dark/80 font-normal text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            A battle-tested campaign setup framework built for predictable, repeatable growth outcomes. Here is how we take you from baseline to high-ROI market dominance.
          </p>
        </div>

        {/* Timeline Desktop Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {/* Desktop connecting progress line bar (Hidden under md screens) */}
          <div className="absolute top-[38px] left-[12%] right-[12%] h-[1.5px] bg-[linear-gradient(to_right,rgba(234,88,12,0.1),rgba(234,88,12,0.6),rgba(234,88,12,0.1))] hidden lg:block pointer-events-none z-0" />

          {WORKFLOW_PROCESS.map((item, idx) => {
            return (
              <motion.div
                key={item.step}
                variants={itemVariants}
                className="relative group flex flex-col items-center lg:items-start text-center lg:text-left z-10"
              >
                {/* Number Indicator Pill */}
                <div className="flex items-center justify-center mb-6 relative">
                  {/* Glowing background ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-brand-orange/5 border border-brand-orange/10 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 group-hover:scale-110 transition-all duration-300" />
                  
                  {/* Active Dark Number badge */}
                  <div className="w-12 h-12 rounded-full bg-brand-dark group-hover:bg-brand-orange text-white flex items-center justify-center font-mono text-sm font-semibold shadow-md z-10 transition-all duration-300">
                    {getStepIcon(item.step)}
                  </div>

                  {/* Absolute small numbers tag */}
                  <div className="absolute -top-1 -right-1.5 bg-brand-cream border border-brand-cream-border text-brand-orange text-[9px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                    0{item.step}
                  </div>
                </div>

                {/* Step Headline Title */}
                <h3 className="font-serif-lux text-xl font-extrabold text-brand-dark group-hover:text-brand-orange transition-colors duration-250 mb-3 leading-tight">
                  {item.title}
                </h3>

                {/* Step description paragraphs */}
                <p className="text-brand-dark/75 text-sm sm:text-[0.935rem] font-normal leading-relaxed mb-4 max-w-sm">
                  {item.description}
                </p>

                {/* Bullet details checking lists */}
                <ul className="space-y-2.5 text-left w-full mt-2 self-stretch bg-brand-cream/40 border border-brand-cream-border/30 rounded-xl p-4 group-hover:bg-brand-cream group-hover:border-brand-orange/10 transition-all duration-300">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-brand-dark/80 font-normal leading-normal">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Banner footer below timeline process */}
        <div className="mt-16 md:mt-20 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex flex-col sm:flex-row items-center gap-4 bg-brand-cream border border-brand-cream-border/60 rounded-2xl p-5 sm:px-8 shadow-xs"
          >
            <span className="font-serif-lux text-base text-brand-dark font-medium sm:text-lg">
              Want to review how this applies specifically to your brand?
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-orange text-white hover:bg-brand-dark rounded-full text-xs font-mono tracking-wider font-semibold uppercase transition-colors duration-300"
            >
              Book an Audit Call
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
