"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Play,
  Star,
  ArrowRight,
  Camera,
  Video,
  Tv,
  Target,
  Globe,
  Palette,
  PartyPopper,
  Send,
  Quote,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import VisitorCounter from "@/components/VisitorCounter";
import {
  COMPANY,
  SERVICES,
  PORTFOLIO_ITEMS,
  TESTIMONIALS,
  STATS,
  PARTNERS,
  HERO_SLIDES,
} from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Camera, Video, Tv, Target, Globe, Palette, PartyPopper,
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  // Auto advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSent(false), 3000);
    }
  };

  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-eagle-black/70 via-eagle-black/50 to-eagle-black" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-eagle-gold/10 border border-eagle-gold/20 rounded-full px-5 py-2 mb-6"
          >
            <span className="text-eagle-gold text-sm font-medium">Agence de Communication à Kinshasa</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-white font-[var(--font-outfit)] leading-tight max-w-5xl"
          >
            Bien faire et{" "}
            <span className="text-gradient">faire savoir</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg sm:text-xl text-white/60 mt-6 max-w-2xl font-light"
          >
            {HERO_SLIDES[currentSlide].subtitle} — {HERO_SLIDES[currentSlide].title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              href="/portfolio"
              className="flex items-center gap-2 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-8 py-4 rounded-full hover:shadow-xl hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105 text-sm"
            >
              <Play size={16} />
              Découvrir nos réalisations
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 border border-eagle-gold/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-eagle-gold/10 transition-all duration-300 text-sm"
            >
              Demander un devis
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          {/* Slide indicators */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === currentSlide
                    ? "bg-eagle-gold w-8"
                    : "bg-white/20 w-4 hover:bg-white/40"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="py-16 border-b border-eagle-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient font-[var(--font-outfit)]">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/50 text-sm mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Ce que nous faisons
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">
                Nos <span className="text-gradient">Services</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Une gamme complète de services créatifs pour propulser votre marque vers de nouveaux sommets.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Camera;
              return (
                <ScrollReveal key={service.id} delay={i * 0.08}>
                  <Link href="/services" className="group block">
                    <div className="relative overflow-hidden rounded-2xl border border-eagle-gold/10 bg-eagle-dark hover:border-eagle-gold/30 transition-all duration-500 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-eagle-dark via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-eagle-gold/20 backdrop-blur-sm flex items-center justify-center border border-eagle-gold/20 group-hover:bg-eagle-gold group-hover:text-eagle-black transition-all duration-300">
                          <Icon size={18} className="text-eagle-gold group-hover:text-eagle-black transition-colors" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-white font-semibold text-base font-[var(--font-outfit)] group-hover:text-eagle-gold transition-colors mb-2">
                          {service.title}
                        </h3>
                        <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                          {service.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-eagle-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          En savoir plus <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border border-eagle-gold/30 text-eagle-gold font-medium px-8 py-3 rounded-full hover:bg-eagle-gold hover:text-eagle-black transition-all duration-300 text-sm"
              >
                Voir tous nos services
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PORTFOLIO PREVIEW ===== */}
      <section className="py-24 bg-eagle-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Portfolio
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">
                Nos <span className="text-gradient">Réalisations</span>
              </h2>
              <p className="text-white/50 mt-4 max-w-2xl mx-auto">
                Découvrez une sélection de nos projets les plus impactants.
              </p>
            </div>
          </ScrollReveal>

          <div className="masonry-grid">
            {PORTFOLIO_ITEMS.slice(0, 6).map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl cursor-pointer">
                  <div className={`relative ${i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-60" : "h-72"}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eagle-black/90 via-eagle-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-eagle-gold text-xs font-medium uppercase tracking-wider">
                        {item.category}
                      </span>
                      <h3 className="text-white font-semibold mt-1 font-[var(--font-outfit)]">{item.title}</h3>
                      <p className="text-white/50 text-xs mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105 text-sm"
              >
                Voir tout le portfolio
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== VISITOR COUNTER ===== */}
      <VisitorCounter />

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-eagle-gold/3 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Témoignages
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">
                Ce que disent nos <span className="text-gradient">Clients</span>
              </h2>
            </div>
          </ScrollReveal>

          <Slider {...testimonialSettings}>
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="px-3">
                <div className="glass rounded-2xl p-6 h-full">
                  <Quote size={24} className="text-eagle-gold/30 mb-4" />
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-eagle-yellow fill-eagle-yellow" />
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
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
                </div>
              </div>
            ))}
          </Slider>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Link
                href="/temoignages"
                className="inline-flex items-center gap-2 border border-eagle-gold/30 text-eagle-gold font-medium px-8 py-3 rounded-full hover:bg-eagle-gold hover:text-eagle-black transition-all duration-300 text-sm"
              >
                Voir tous les témoignages
                <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-eagle-gold/5 via-transparent to-eagle-gold/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="glass rounded-3xl p-8 md:p-12 text-center border border-eagle-gold/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-eagle-gold/10 border border-eagle-gold/20 mb-6">
                <Send size={24} className="text-eagle-gold" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white font-[var(--font-outfit)] mb-4">
                Rejoignez notre <span className="text-gradient">Newsletter</span>
              </h2>
              <p className="text-white/50 mb-8 max-w-lg mx-auto">
                Recevez nos dernières actualités, conseils en communication et offres exclusives directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <span className="w-5 h-5 rounded-full bg-eagle-gold/20 flex items-center justify-center text-eagle-gold text-[10px]">✓</span>
                  Conseils exclusifs
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <span className="w-5 h-5 rounded-full bg-eagle-gold/20 flex items-center justify-center text-eagle-gold text-[10px]">✓</span>
                  Tendances du marché
                </div>
                <div className="flex items-center gap-2 text-white/40 text-xs">
                  <span className="w-5 h-5 rounded-full bg-eagle-gold/20 flex items-center justify-center text-eagle-gold text-[10px]">✓</span>
                  Offres spéciales
                </div>
              </div>
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="votre@email.com"
                  className="flex-1 bg-white/5 border border-eagle-gold/20 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-eagle-gold/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-8 py-3 rounded-full text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  {newsletterSent ? "Inscrit !" : "S'inscrire"}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== PARTNERS ===== */}
      <section className="py-16 border-t border-eagle-gold/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-center text-white/30 text-xs tracking-[0.3em] uppercase mb-8">
              Ils nous font confiance
            </p>
          </ScrollReveal>
          <div className="relative">
            <motion.div
              className="flex gap-16"
              animate={{ x: [0, -800] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
                <div
                  key={`${partner}-${i}`}
                  className="flex-none text-white/20 font-bold text-xl tracking-wider font-[var(--font-outfit)] hover:text-eagle-gold/50 transition-colors duration-300 cursor-default"
                >
                  {partner}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
