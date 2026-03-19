"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import { PORTFOLIO_ITEMS } from "../../lib/constants";

const CATEGORIES = [
  { id: "all", label: "Tous" },
  { id: "photographie", label: "Photographie" },
  { id: "videographie", label: "Vidéographie" },
  { id: "publicite", label: "Publicité" },
  { id: "branding", label: "Branding" },
  { id: "digital", label: "Digital" },
  { id: "evenementiel", label: "Événementiel" },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxItem, setLightboxItem] = useState<typeof PORTFOLIO_ITEMS[0] | null>(null);

  const filtered =
    activeCategory === "all"
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative font-black pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-[var(--font-outfit)]">
                Nos <span className="text-gradient">Réalisations</span>
              </h1>
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
                Explorez notre portfolio de projets créatifs à travers différentes disciplines.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-8 sticky font-black top-16 z-30 bg-eagle-black/80 backdrop-blur-xl border-b border-eagle-gold/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none justify-center flex-wrap">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${activeCategory === cat.id
                    ? "text-eagle-black"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
              >
                {activeCategory === cat.id && (
                  <motion.div
                    layoutId="portfolio-filter"
                    className="absolute inset-0 bg-gradient-to-r from-eagle-gold to-eagle-yellow rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-12 font-black pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div
                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                    onClick={() => setLightboxItem(item)}
                  >
                    <div className={`relative ${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-60" : "h-72"}`}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-eagle-black/90 via-eagle-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-12 h-12 rounded-full bg-eagle-gold/20 backdrop-blur-sm flex items-center justify-center border border-eagle-gold/30">
                          <ZoomIn size={20} className="text-eagle-gold" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <span className="text-eagle-gold text-xs font-medium uppercase tracking-wider">
                          {item.category}
                        </span>
                        <h3 className="text-white font-semibold mt-1 font-[var(--font-outfit)]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            onClick={() => setLightboxItem(null)}
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxItem(null)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={lightboxItem.image}
                  alt={lightboxItem.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 80vw"
                />
              </div>
              <div className="mt-4">
                <span className="text-eagle-gold text-xs font-medium uppercase tracking-wider">
                  {lightboxItem.category}
                </span>
                <h3 className="text-white text-xl font-bold font-[var(--font-outfit)] mt-1">
                  {lightboxItem.title}
                </h3>
                <p className="text-white/50 text-sm mt-2">{lightboxItem.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
