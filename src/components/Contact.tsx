/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageSquare, MapPin, Linkedin, Facebook, Instagram, Send, CheckCircle, Clock } from "lucide-react";
import { OWNER_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    category: "E-Commerce / Direct-to-Consumer",
    monthlyRevenue: "Less than $10K",
    challenge: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsLoading(true);

    // Simulate direct secure submission processing
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const categoriesOpts = [
    "E-Commerce / Direct-to-Consumer",
    "B2B SaaS / Software Platform",
    "Agency / Consulting Service",
    "Education / Digital Information Courses",
    "Real Estate / Local Lead Generation",
    "Other High-Growth Brand"
  ];

  const revenueOpts = [
    "Less than $10,000 / month",
    "$10,000 - $50,000 / month",
    "$50,000 - $150,000 / month",
    "More than $150,000 / month"
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#0A0A0B] text-white relative overflow-hidden text-left"
    >
      {/* Immersive Glowing Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-brand-orange/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[450px] h-[450px] rounded-full bg-brand-orange-dark/10 blur-3xl pointer-events-none" />
      
      {/* Decorative Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-85 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Heading, Info boxes, Communication cards */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span className="font-mono text-xs tracking-[0.25em] text-brand-orange uppercase font-semibold">
                Inquire & Scale
              </span>
              <h2 className="font-serif-lux text-3.5xl sm:text-5xl font-black text-white mt-3 tracking-tight leading-tight">
                Let's Build Your Automated Revenue Machine
              </h2>
              <div className="w-16 h-1 bg-brand-orange mt-5 rounded-full" />
              <p className="text-white/80 font-normal text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
                Fill out our detailed agency form to claim your Free 30-Minute Growth Strategy & Audit Call. I will manually audit your accounts, find leaks, and provide 3 concrete tactics you can execute immediately.
              </p>
            </div>

            {/* Direct Coordinates Block */}
            <div className="space-y-4">
              
              {/* Coordinate: Email */}
              <a
                href={`mailto:${OWNER_INFO.email}`}
                className="flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 hover:border-brand-orange/20 rounded-2xl p-4 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 leading-none">Primary Inbox</p>
                  <p className="text-sm font-semibold text-white/95 mt-1.5">{OWNER_INFO.email}</p>
                </div>
              </a>

              {/* Coordinate: WhatsApp Chat */}
              <a
                href={OWNER_INFO.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white/[0.03] hover:bg-[#25D366]/5 border border-white/5 hover:border-[#25D366]/20 rounded-2xl p-4 transition-all duration-300 group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#25D366]/10 text-[#25D366] flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 leading-none">Instant Chat Link</p>
                  <p className="text-sm font-semibold text-white/95 mt-1.5 flex items-center gap-1.5">
                    Click to WhatsApp
                    <span className="w-1.5 h-1.5 bg-[#25D366] rounded-full animate-ping" />
                  </p>
                </div>
              </a>

              {/* Coordinate: Location */}
              <div className="flex items-center gap-4 bg-white/[0.03] border border-white/5 rounded-2xl p-4">
                <div className="w-11 h-11 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] uppercase font-mono tracking-wider text-white/40 leading-none">Official HQ Location</p>
                  <p className="text-sm font-semibold text-white/90 mt-1.5">{OWNER_INFO.location}</p>
                </div>
              </div>

            </div>

            {/* Social Badge Blocks */}
            <div className="flex items-center space-x-3.5 pt-2">
              <span className="text-[10px] font-mono tracking-wider text-white/45 uppercase font-medium mr-2">Digital footprints:</span>
              <a
                href={OWNER_INFO.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center text-white/70 border border-white/5 hover:border-transparent transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a
                href={OWNER_INFO.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center text-white/70 border border-white/5 hover:border-transparent transition-all duration-200"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a
                href={OWNER_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-brand-orange hover:text-white flex items-center justify-center text-white/70 border border-white/5 hover:border-transparent transition-all duration-200"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Premium Form Glass panel card */}
          <div className="lg:col-span-7">
            <div className="bg-[#121215] border border-white/5 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
              
              {/* Success State Visual Feedback card */}
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    className="flex flex-col items-center text-center py-12 space-y-5"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif-lux text-2xl sm:text-3xl font-black text-white">
                      Strategic Audit Request Received!
                    </h3>

                    <div className="w-12 h-1 bg-green-500 rounded-full" />

                    <p className="text-white/80 text-sm max-w-md font-normal leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>! I am manually reviewing your platform (<span className="text-brand-orange-light font-medium underline">{formData.website || "your company website"}</span>). A calendar invitation link has been dispatched directly to your inbox <span className="text-white font-medium">{formData.email}</span>.
                    </p>

                    <div className="bg-white/5 border border-white/5 rounded-2xl p-4 max-w-sm mt-4 text-left flex gap-3">
                      <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold leading-none text-white">Next Steps:</p>
                        <p className="text-[11px] text-white/60 leading-relaxed mt-1.5">
                          Kindly monitor your primary inbox for a diagnostic report outline. I usually dispatch audits within 4 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="space-y-5 text-left"
                  >
                    {/* Inner header label */}
                    <div className="pb-2 border-b border-white/5">
                      <h3 className="font-serif-lux text-xl font-bold text-white">Free Strategy Audit & Funnel Review</h3>
                      <p className="text-white/70 text-xs font-normal mt-1">Fill in details and let Ahsan construct your high-converting roadmap.</p>
                    </div>

                    {/* Form Layout fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Field: Full name */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-mono text-[10px] tracking-wider uppercase text-white/50 font-bold">Your Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Benjamin Vance"
                          className="px-4 py-3 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] focus:bg-white/[0.02] border border-white/10 focus:border-brand-orange rounded-xl text-xs sm:text-sm text-white focus:outline-hidden transition-all placeholder-white/20"
                        />
                      </div>

                      {/* Field: Contact Email */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-mono text-[10px] tracking-wider uppercase text-white/50 font-bold">Primary Contact Email *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. benjamin@urbanstrider.com"
                          className="px-4 py-3 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] focus:bg-white/[0.02] border border-white/10 focus:border-brand-orange rounded-xl text-xs sm:text-sm text-white focus:outline-hidden transition-all placeholder-white/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Field: Website URL */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-mono text-[10px] tracking-wider uppercase text-white/50 font-bold">Business Website URL</label>
                        <input
                          type="text"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                          placeholder="e.g. www.urbanstrider.com"
                          className="px-4 py-3 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] focus:bg-white/[0.02] border border-white/10 focus:border-brand-orange rounded-xl text-xs sm:text-sm text-white focus:outline-hidden transition-all placeholder-white/20"
                        />
                      </div>

                      {/* Field: Dropdown Business category */}
                      <div className="flex flex-col space-y-1.5">
                        <label className="font-mono text-[10px] tracking-wider uppercase text-white/50 font-bold">Business Segment Category</label>
                        <select
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="px-4 py-3 bg-[#161619] border border-white/10 focus:border-brand-orange rounded-xl text-xs sm:text-sm text-white focus:outline-hidden transition-all"
                        >
                          {categoriesOpts.map((opt, i) => (
                            <option key={i} value={opt} className="bg-[#121215] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Field: Dropdown revenue tier */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-mono text-[10px] tracking-wider uppercase text-white/50 font-bold">Current Monthly Ad Spend or Revenue tier</label>
                      <select
                        value={formData.monthlyRevenue}
                        onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                        className="px-4 py-3 bg-[#161619] border border-white/10 focus:border-brand-orange rounded-xl text-xs sm:text-sm text-white focus:outline-hidden transition-all"
                      >
                        {revenueOpts.map((opt, i) => (
                          <option key={i} value={opt} className="bg-[#121215] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Field: Challenge explanation */}
                    <div className="flex flex-col space-y-1.5">
                      <label className="font-mono text-[10px] tracking-wider uppercase text-white/50 font-bold">What is your absolute biggest bottleneck or growth struggle?</label>
                      <textarea
                        rows={3}
                        value={formData.challenge}
                        onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                        placeholder="e.g. Paid ad ROAS is too low, our emails are getting spam-boxed, or our social channels lack high-end organic storytelling ideas..."
                        className="px-4 py-3 bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.04)] focus:bg-white/[0.02] border border-white/10 focus:border-brand-orange rounded-xl text-xs sm:text-sm text-white focus:outline-hidden transition-all placeholder-white/20 resize-none"
                      />
                    </div>

                    {/* Submit Button Trigger */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md shadow-brand-orange/5 cursor-pointer disabled:opacity-50"
                    >
                      {isLoading ? (
                        <>
                          <div className="w-4.5 h-4.5 rounded-full border-2 border-white/20 border-t-white animate-spin" />
                          Analyzing and reserving slot...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Launch Strategic Audit Pipeline
                        </>
                      )}
                    </button>
                    
                    {/* Direct calendar ping mention layout */}
                    <p className="text-center text-[10px] text-white/40 font-mono italic">
                      🔒 Your corporate data is fully private and will never be shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
