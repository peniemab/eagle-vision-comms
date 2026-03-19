"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Lightbulb, Heart, Award, ChevronDown, Linkedin, Twitter, Mail } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import { TEAM_MEMBERS, TIMELINE, FAQ_ITEMS, STATS } from "../../lib/constants";

const values = [
  { icon: Eye, title: "Vision", desc: "Voir au-delà de l'ordinaire pour créer l'extraordinaire." },
  { icon: Lightbulb, title: "Créativité", desc: "Chaque projet est une toile vierge pour l'innovation." },
  { icon: Heart, title: "Passion", desc: "La passion alimente chaque pixel, chaque frame." },
  { icon: Award, title: "Excellence", desc: "Nous ne nous contentons que du meilleur." },
];

export default function AProposPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <ScrollReveal>
            <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Notre histoire</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-[var(--font-outfit)]">
              À Propos d&apos;<span className="text-gradient">Eagle Vision</span>
            </h1>
            <p className="text-white/50 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              Fondée à Kinshasa, Eagle Vision Comms DRC transforme les visions en réalités visuelles percutantes qui propulsent les marques vers de nouveaux sommets.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-6 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-gradient font-[var(--font-outfit)]"><AnimatedCounter end={s.value} suffix={s.suffix} /></div>
                  <p className="text-white/50 text-xs mt-2">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-eagle-dark/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="left">
            <div className="glass rounded-3xl p-8 md:p-12 border border-eagle-gold/10 h-full">
              <div className="w-14 h-14 rounded-2xl bg-eagle-gold/10 flex items-center justify-center mb-6"><Eye size={24} className="text-eagle-gold" /></div>
              <h2 className="text-2xl font-bold text-white font-[var(--font-outfit)] mb-4">Notre Vision</h2>
              <p className="text-white/50 leading-relaxed">Devenir l&apos;agence de communication de référence en RDC et en Afrique centrale, en offrant des solutions créatives innovantes.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <div className="glass rounded-3xl p-8 md:p-12 border border-eagle-gold/10 h-full">
              <div className="w-14 h-14 rounded-2xl bg-eagle-gold/10 flex items-center justify-center mb-6"><Lightbulb size={24} className="text-eagle-gold" /></div>
              <h2 className="text-2xl font-bold text-white font-[var(--font-outfit)] mb-4">Notre Mission</h2>
              <p className="text-white/50 leading-relaxed">Accompagner les entreprises dans leur stratégie de communication avec des services de qualité internationale, adaptés au contexte local.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Ce qui nous anime</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">Nos <span className="text-gradient">Valeurs</span></h2>
          </div></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="glass rounded-2xl p-8 text-center border border-eagle-gold/10 hover:border-eagle-gold/25 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eagle-gold/20 to-eagle-yellow/10 flex items-center justify-center mx-auto mb-6 border border-eagle-gold/20"><v.icon size={28} className="text-eagle-gold" /></div>
                  <h3 className="text-white font-bold text-lg font-[var(--font-outfit)] mb-3">{v.title}</h3>
                  <p className="text-white/40 text-sm">{v.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-eagle-dark/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Notre parcours</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">Notre <span className="text-gradient">Histoire</span></h2>
          </div></ScrollReveal>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-eagle-gold/50 via-eagle-gold/20 to-transparent md:-translate-x-0.5" />
            {TIMELINE.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-eagle-gold border-4 border-eagle-dark -translate-x-1/2 z-10" />
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass rounded-2xl p-6 border border-eagle-gold/10">
                      <span className="text-eagle-gold font-bold text-lg font-[var(--font-outfit)]">{item.year}</span>
                      <h3 className="text-white font-semibold mt-1 font-[var(--font-outfit)]">{item.title}</h3>
                      <p className="text-white/40 text-sm mt-2">{item.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">L&apos;équipe</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">Les <span className="text-gradient">Visionnaires</span></h2>
          </div></ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 0.1}>
                <motion.div whileHover={{ y: -8 }} className="group rounded-2xl overflow-hidden border border-eagle-gold/10 hover:border-eagle-gold/25 transition-all bg-eagle-dark">
                  <div className="relative h-72 overflow-hidden">
                    <Image src={m.image} alt={m.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-eagle-dark via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                        <a key={idx} href="#" className="w-8 h-8 rounded-full bg-eagle-gold/20 backdrop-blur-sm flex items-center justify-center border border-eagle-gold/20 text-eagle-gold hover:bg-eagle-gold hover:text-eagle-black transition-all"><Icon size={14} /></a>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-white font-semibold font-[var(--font-outfit)] group-hover:text-eagle-gold transition-colors">{m.name}</h3>
                    <p className="text-eagle-gold/70 text-xs mt-1">{m.role}</p>
                    <p className="text-white/40 text-xs mt-3">{m.bio}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-eagle-dark/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal><div className="text-center mb-16">
            <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">Questions <span className="text-gradient">Fréquentes</span></h2>
          </div></ScrollReveal>
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="glass rounded-2xl border border-eagle-gold/10 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group">
                    <span className="text-white font-medium text-sm pr-4 group-hover:text-eagle-gold transition-colors">{faq.question}</span>
                    <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}><ChevronDown size={18} className="text-eagle-gold flex-shrink-0" /></motion.div>
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <p className="text-white/50 text-sm leading-relaxed px-6 pb-6">{faq.answer}</p>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
