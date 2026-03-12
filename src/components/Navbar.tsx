"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-eagle-black/90 backdrop-blur-xl shadow-lg shadow-eagle-gold/5 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-eagle-gold to-eagle-yellow rounded-lg transform rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
              <span className="relative text-eagle-black font-bold text-xl font-[var(--font-outfit)]">E</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-lg font-[var(--font-outfit)] tracking-wider">
                EAGLE <span className="text-gradient">VISION</span>
              </span>
              <span className="block text-[10px] text-eagle-gold/70 tracking-[0.2em] -mt-1">
                COMMS DRC
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  pathname === link.href
                    ? "text-eagle-gold"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-eagle-gold to-eagle-yellow rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:flex items-center gap-2 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-5 py-2.5 rounded-full text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105"
            >
              Devis Gratuit
              <ChevronRight size={14} />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white hover:text-eagle-gold transition-colors p-2"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-eagle-dark border-l border-eagle-gold/10 p-6 pt-20"
            >
              <div className="flex flex-col gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? "bg-eagle-gold/10 text-eagle-gold border border-eagle-gold/20"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                      <ChevronRight size={16} className="opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-5 py-3 rounded-full text-sm hover:shadow-lg transition-all"
                >
                  Devis Gratuit
                  <ChevronRight size={14} />
                </Link>
                <p className="text-center text-white/40 text-xs mt-4">
                  {COMPANY.phone}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
