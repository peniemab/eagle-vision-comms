"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Camera,
  Video,
  Tv,
  Target,
  Globe,
  Palette,
  PartyPopper,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Camera, Video, Tv, Target, Globe, Palette, PartyPopper,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 font-black pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Nos expertises
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-[var(--font-outfit)]">
                Des services <span className="text-gradient">sur-mesure</span>
              </h1>
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
                Chaque projet est unique. Nous adaptons notre expertise pour créer des solutions qui dépassent vos attentes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] || Camera;
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={service.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="glass rounded-3xl overflow-hidden border border-eagle-gold/10 hover:border-eagle-gold/25 transition-all duration-500"
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? "lg:direction-rtl" : ""}`}>
                      {/* Image */}
                      <div className={`relative h-64 lg:h-auto min-h-[320px] overflow-hidden ${!isEven ? "lg:order-2" : ""}`}>
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-eagle-dark/50 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <div className="w-14 h-14 rounded-2xl bg-eagle-gold/20 backdrop-blur-xl flex items-center justify-center border border-eagle-gold/30">
                            <Icon size={24} className="text-eagle-gold" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-8 lg:p-12 flex flex-col justify-center ${!isEven ? "lg:order-1" : ""}`}>
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-outfit)] mb-4">
                          {service.title}
                        </h2>
                        <p className="text-white/50 leading-relaxed mb-8">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                              <span className="w-6 h-6 rounded-full bg-eagle-gold/10 flex items-center justify-center flex-shrink-0">
                                <Check size={12} className="text-eagle-gold" />
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-8 py-3 rounded-full text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105 self-start"
                        >
                          Demander un devis
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-eagle-gold/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)] mb-6">
              Prêt à <span className="text-gradient">démarrer</span> votre projet ?
            </h2>
            <p className="text-white/50 mb-10 max-w-lg mx-auto">
              Discutons de vos besoins et créons ensemble une stratégie qui propulse votre marque.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-10 py-4 rounded-full hover:shadow-xl hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105 text-sm"
              >
                Contactez-nous
                <ChevronRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 border border-eagle-gold/30 text-white font-semibold px-10 py-4 rounded-full hover:bg-eagle-gold/10 transition-all duration-300 text-sm"
              >
                Voir nos réalisations
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
