/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Background blur check
      setIsScrolled(window.scrollY > 20);

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Me", href: "#why-me" },
    { name: "Process", href: "#process" },
    { name: "Tools", href: "#tools" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-cream/85 backdrop-blur-md border-b border-brand-cream-border/60 py-3 shadow-xs"
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-brand-orange transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Brand Title */}
          <a
            href="#home"
            className="flex flex-col group py-1"
          >
            <span className="font-serif-lux text-xl sm:text-2xl font-bold tracking-normal text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
              Md. Ahsan Atif
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] text-brand-orange uppercase leading-none font-semibold">
              Performance Marketer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-md relative ${
                    isActive
                      ? "text-brand-orange font-semibold"
                      : "text-brand-dark/75 hover:text-brand-orange"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand-orange rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Call to action button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="group flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider font-semibold uppercase bg-brand-dark text-white hover:bg-brand-orange transition-all duration-300 rounded-full border border-transparent hover:border-brand-orange/20 shadow-xs"
            >
              Request Free Audit
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-dark hover:text-brand-orange transition-colors duration-300 rounded-full hover:bg-brand-cream-dark/60"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-cream border-t border-brand-cream-border/50 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? "bg-brand-cream-dark text-brand-orange font-semibold"
                        : "text-brand-dark/80 hover:bg-brand-cream-dark/40 hover:text-brand-orange"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-center text-sm font-mono tracking-wider uppercase font-semibold bg-brand-orange text-white rounded-lg hover:bg-brand-dark transition-colors duration-300 shadow-sm"
                >
                  Request Free Audit
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
