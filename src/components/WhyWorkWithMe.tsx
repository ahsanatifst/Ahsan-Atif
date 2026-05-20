/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2, Award, Zap, BarChart3, Star, MessageSquare } from "lucide-react";
import { OWNER_INFO } from "../data";

export default function WhyWorkWithMe() {
  const values = [
    {
      title: "ROI-Focused Marketing",
      description: "Every dollar you spend must represent an investment, not an expense. campaigns are tuned directly for customer lifetime value (LTV) and positive ROI outcomes.",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "text-brand-orange bg-brand-orange/10"
    },
    {
      title: "Fast, Transparent Response",
      description: "No agencies with multiple middle-men. I reply within minutes, offering custom daily feedback, real-time Slack coordinates, and weekly visual progress updates.",
      icon: <MessageSquare className="w-5 h-5" />,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Data-Driven Strategy",
      description: "We don't guess what visuals or copy will work. We audit competitor analytics, analyze thermal landing page scroll maps, and deploy structured A/B tests to discover winner creative assets.",
      icon: <Zap className="w-5 h-5" />,
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Premium Creative Execution",
      description: "High-end luxury typography, custom Canva palettes, and clean layout patterns that align seamlessly with your existing premium branding guidelines.",
      icon: <Award className="w-5 h-5" />,
      color: "text-amber-500 bg-amber-50"
    }
  ];

  const listContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const listItemVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 bg-brand-cream relative overflow-hidden">
      {/* Decorative Blur and Grid */}
      <div className="absolute top-1/3 left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-orange/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Interactive Composition */}
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5]">
              {/* Offset Visual Border Outline */}
              <div className="absolute top-6 left-6 -right-6 -bottom-6 border-2 border-brand-cream-border rounded-2xl pointer-events-none z-0" />
              
              {/* Absolute background color blocks */}
              <div className="absolute inset-0 rounded-2xl bg-brand-cream-dark border border-brand-cream-border z-0 overflow-hidden">
                {/* Visual grid inside block */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8dfce_1px,transparent_1px),linear-gradient(to_bottom,#e8dfce_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-35" />
              </div>

              {/* Foreground main image container */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl overflow-hidden border border-brand-cream-border/60 shadow-2xl z-10 bg-brand-dark group">
                <img
                  src={OWNER_INFO.personalImage}
                  alt="Md. Ahsan Atif | Creative Mindset"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.06] transition-transform duration-700 ease-out"
                />
                
                {/* Accent glow corner */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 to-transparent" />
              </div>

              {/* Floating Review Widget */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -right-6 -bottom-2 z-20 bg-brand-dark text-white rounded-xl p-4 shadow-xl border border-white/10 max-w-[210px]"
              >
                <div className="flex items-center gap-1 text-brand-orange-light">
                  <Star className="w-4.5 h-4.5 fill-current" />
                  <Star className="w-4.5 h-4.5 fill-current" />
                  <Star className="w-4.5 h-4.5 fill-current" />
                  <Star className="w-4.5 h-4.5 fill-current" />
                  <Star className="w-4.5 h-4.5 fill-current" />
                </div>
                <p className="font-serif-lux text-sm font-bold text-white mt-1.5 leading-tight">
                  "One of the best marketers we've hired!"
                </p>
                <p className="font-mono text-[9px] text-white/50 tracking-wider uppercase mt-1">
                  - Benjamin Vance, CEO
                </p>
              </motion.div>

              {/* Floating Stat Badge */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-10 top-16 z-20 glass-panel rounded-xl p-3.5 shadow-xl border border-white/60 flex flex-col"
              >
                <span className="font-serif-lux text-2xl font-black text-brand-dark leading-none">99%</span>
                <span className="font-mono text-[9px] tracking-wider text-brand-dark/60 uppercase mt-0.5 font-bold">
                  Client Retention
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Key Value Proposition Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col space-y-6">
            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-brand-orange uppercase font-semibold">
                Why Work With Me
              </span>
              <h2 className="font-serif-lux text-3xl sm:text-4.5xl font-extrabold text-brand-dark mt-3 tracking-tight leading-tight">
                No Agency Fluff. Just Direct growth Outcomes.
              </h2>
              <div className="w-16 h-1 bg-brand-orange mt-5 rounded-full" />
              <p className="text-brand-dark/80 font-normal text-base mt-4 max-w-xl leading-relaxed">
                Most agencies assign your campaigns to junior designers. I handle your strategy personally, ensuring every piece of content, copywriting trigger, and ad pixel is aligned with high-converting consumer psychology.
              </p>
            </div>

            {/* List of Custom Value Propositions */}
            <motion.div
              variants={listContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4"
            >
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  variants={listItemVariants}
                  className="flex flex-col space-y-2.5 p-4 rounded-xl border border-brand-cream-border/40 bg-brand-cream-dark/20 hover:bg-brand-cream-dark/50 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${val.color} flex-shrink-0 shadow-sm`}>
                      {val.icon}
                    </div>
                    <h3 className="font-serif-lux text-base sm:text-lg font-bold text-brand-dark">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-brand-dark/75 text-xs sm:text-sm font-normal leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
