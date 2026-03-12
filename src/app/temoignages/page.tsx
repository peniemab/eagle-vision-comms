"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, Send, MessageSquare, Filter } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

const SERVICE_FILTERS = [
  { id: "all", label: "Tous" },
  { id: "photographie", label: "Photographie" },
  { id: "videographie", label: "Vidéographie" },
  { id: "publicite", label: "Publicité" },
  { id: "branding", label: "Branding" },
  { id: "digital", label: "Digital" },
  { id: "evenementiel", label: "Événementiel" },
];

export default function TemoignagesPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", service: "", message: "", rating: 5 });
  const [submitted, setSubmitted] = useState(false);

  const filtered =
    activeFilter === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.service === activeFilter);

  const avgRating = (TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length).toFixed(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowForm(false);
      setFormData({ name: "", company: "", service: "", message: "", rating: 5 });
    }, 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Témoignages & avis
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-[var(--font-outfit)]">
                Ce que disent nos <span className="text-gradient">Clients</span>
              </h1>
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
                La satisfaction de nos clients est notre plus grande récompense.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats summary */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="glass rounded-2xl px-8 py-5 text-center">
                <div className="flex items-center gap-1 justify-center mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-eagle-yellow fill-eagle-yellow" />
                  ))}
                </div>
                <p className="text-2xl font-bold text-white font-[var(--font-outfit)]">{avgRating}/5</p>
                <p className="text-white/40 text-xs">Note moyenne</p>
              </div>
              <div className="glass rounded-2xl px-8 py-5 text-center">
                <p className="text-2xl font-bold text-gradient font-[var(--font-outfit)]">{TESTIMONIALS.length}+</p>
                <p className="text-white/40 text-xs">Avis clients</p>
              </div>
              <div className="glass rounded-2xl px-8 py-5 text-center">
                <p className="text-2xl font-bold text-gradient font-[var(--font-outfit)]">100%</p>
                <p className="text-white/40 text-xs">Satisfaction</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters + CTA */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex gap-2 overflow-x-auto flex-wrap justify-center">
              {SERVICE_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-eagle-gold text-eagle-black"
                      : "text-white/50 hover:text-white bg-white/5"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-6 py-2.5 rounded-full text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare size={14} />
              Laisser un avis
            </button>
          </div>
        </div>
      </section>

      {/* Review Form */}
      {showForm && (
        <section className="pb-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="glass rounded-2xl p-8 border border-eagle-gold/20">
                {!submitted ? (
                  <>
                    <h3 className="text-white text-lg font-bold font-[var(--font-outfit)] mb-6">
                      ✍️ Partagez votre expérience
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Votre nom"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-eagle-gold/50 transition-colors"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Votre entreprise"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-eagle-gold/50 transition-colors"
                        />
                      </div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white/50 focus:outline-none focus:border-eagle-gold/50 transition-colors"
                      >
                        <option value="">Service concerné</option>
                        {SERVICE_FILTERS.slice(1).map((s) => (
                          <option key={s.id} value={s.id}>{s.label}</option>
                        ))}
                      </select>
                      <div>
                        <label className="text-white/50 text-xs mb-2 block">Votre note</label>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setFormData({ ...formData, rating: star })}
                              className="transition-transform hover:scale-125"
                            >
                              <Star
                                size={24}
                                className={`${star <= formData.rating ? "text-eagle-yellow fill-eagle-yellow" : "text-white/20"} transition-colors`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                      <textarea
                        placeholder="Votre témoignage..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-eagle-gold/50 transition-colors resize-none"
                        required
                      />
                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold py-3 rounded-xl text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Send size={14} />
                        Envoyer mon avis
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-8"
                  >
                    <div className="text-4xl mb-4">🎉</div>
                    <h3 className="text-white text-xl font-bold font-[var(--font-outfit)] mb-2">
                      Merci pour votre avis !
                    </h3>
                    <p className="text-white/50 text-sm">
                      Votre témoignage sera publié après validation.
                    </p>
                  </motion.div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Testimonials Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((testimonial, i) => (
              <ScrollReveal key={testimonial.id} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl p-6 border border-eagle-gold/10 hover:border-eagle-gold/25 transition-all duration-300 h-full flex flex-col"
                >
                  <Quote size={24} className="text-eagle-gold/20 mb-4" />
                  <p className="text-white/70 text-sm leading-relaxed flex-1 mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} size={14} className="text-eagle-yellow fill-eagle-yellow" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-eagle-gold/10">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-eagle-gold/30">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-eagle-gold/70 text-xs">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
