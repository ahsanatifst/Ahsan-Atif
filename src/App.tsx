/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Process from "./components/Process";
import Tools from "./components/Tools";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { OWNER_INFO } from "./data";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [loading, setLoading] = useState<boolean>(true);

  // Preloader Timer logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Monitor Scroll and highlight navbar links based on viewport visibility
  useEffect(() => {
    const sections = ["home", "services", "why-me", "process", "tools", "portfolio", "testimonials"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-orange selection:text-white">
      
      {/* Luxury Brand Preloader */}
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#0A0A0B] text-white z-[9999] flex flex-col items-center justify-center space-y-6"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              {/* Elegant floating initials */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="w-16 h-16 rounded-2xl border border-brand-orange/30 flex items-center justify-center font-serif-lux text-2xl font-bold bg-[#121215] text-brand-orange mb-4 shadow-xl shadow-brand-orange/10"
              >
                MA
              </motion.div>

              <motion.h1
                initial={{ letterSpacing: "0.2em", opacity: 0 }}
                animate={{ letterSpacing: "0.05em", opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="font-serif-lux text-2xl sm:text-3xl font-bold tracking-wide"
              >
                Md. Ahsan Atif
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="font-mono text-[9px] tracking-[0.3em] text-white/70 uppercase text-center"
              >
                Digital Marketer & Social Strategist
              </motion.p>
            </div>

            {/* Custom high end progress track */}
            <div className="w-48 h-[1px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-24 bg-brand-orange"
              />
            </div>
            
            <span className="font-mono text-[8px] text-white/30 uppercase tracking-widest leading-none">
              Retrieving Campaign Blueprint
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website View Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col min-h-screen"
        >
          {/* Header/Navbar */}
          <Navbar activeSection={activeSection} />

          {/* Page Sections sequential flow */}
          <main className="flex-1">
            {/* Hero Banner Grid representation */}
            <Hero />

            {/* Key Services Offered Grid */}
            <Services />

            {/* Why Work with Me highlight layout */}
            <WhyWorkWithMe />

            {/* Strategic cronological workflow steps */}
            <Process />

            {/* Interactive categorization tool cards */}
            <Tools />

            {/* Highly filterable Case Studies Grid */}
            <Portfolio />

            {/* Real outcome review slides */}
            <Testimonials />

            {/* Secure direct booking form and communication anchors */}
            <Contact />
          </main>

          {/* Legal references and copyright lines */}
          <Footer />
        </motion.div>
      )}

      {/* Persistent Quick WhatsApp float bubble trigger */}
      <AnimatePresence>
        {!loading && (
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
            href={OWNER_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on WhatsApp"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20ba59] transition-colors group cursor-pointer border border-[#25D366]/40 active:scale-95 duration-200"
          >
            <svg
              className="w-6 h-6 fill-current group-hover:scale-110 transition-transform"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.58 2.03 14.113.993 11.995.993 6.56.993 2.135 5.361 2.131 10.79c-.002 1.802.49 3.562 1.42 5.114l-.955 3.49 3.562-.945zM17.56 15.3c-.3-.149-1.774-.874-2.048-.973-.274-.1-.473-.149-.672.15-.199.299-.772.973-.946 1.171-.174.199-.348.224-.648.075-.3-.149-1.266-.466-2.411-1.485-.89-.794-1.49-1.773-1.664-2.071-.174-.299-.019-.461.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.498.1-.199.05-.374-.025-.523-.075-.149-.672-1.62-.921-2.22-.242-.581-.487-.5-.672-.51-.173-.008-.372-.01-.572-.01-.2 0-.523.075-.797.373-.274.299-1.045 1.021-1.045 2.49 0 1.47 1.07 2.888 1.22 3.087.149.199 2.105 3.215 5.1 4.512.713.309 1.27.494 1.703.633.717.227 1.37.195 1.887.118.575-.085 1.774-.725 2.023-1.424.249-.699.249-1.295.174-1.42-.075-.124-.274-.199-.573-.348z" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>

    </div>
  );
}
