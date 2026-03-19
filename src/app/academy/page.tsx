"use client";

import { motion } from "framer-motion";
import { Monitor, Cpu, Palette, Briefcase, GraduationCap, Target, ShieldCheck, TrendingUp, Users, ArrowRight, Heart } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import { ACADEMY_DATA } from "../../lib/constants";

const iconMap = {
  Monitor: Monitor,
  Cpu: Cpu,
  Palette: Palette,
  Briefcase: Briefcase,
};

export default function AcademyPage() {
  return (
    <div className="bg-eagle-black min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <ScrollReveal>
            <span className="inline-block text-eagle-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 bg-eagle-gold/5 px-4 py-2 rounded-full border border-eagle-gold/20">
              Façonner l'avenir
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white font-[var(--font-outfit)] tracking-tight leading-tight">
              EVIC <span className="text-gradient">ACADEMY</span>
            </h1>
            <p className="text-white/60 mt-8 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              {ACADEMY_DATA.mission}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative group">
                <div className="absolute -inset-4 bg-eagle-gold/10 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative glass rounded-[3rem] p-8 md:p-12 border border-eagle-gold/10 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-eagle-gold/5 blur-3xl -mr-16 -mt-16" />
                  <GraduationCap className="text-eagle-gold mb-8 w-16 h-16 opacity-80" />
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[var(--font-outfit)]">
                    Notre <span className="text-eagle-gold">Vision Sociale</span>
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-8 font-light italic">
                    "{ACADEMY_DATA.vision}"
                  </p>
                  <div className="flex items-center gap-4 text-eagle-gold font-bold text-sm tracking-widest uppercase bg-eagle-gold/5 w-fit px-4 py-2 rounded-xl">
                    <ShieldCheck size={20} /> Paix & Éducation
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0 border border-eagle-gold/20 shadow-lg">
                    <Target className="text-eagle-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2 font-[var(--font-outfit)]">Objectif Professionnel</h3>
                    <p className="text-white/50 font-light">Préparer nos étudiants aux opportunités réelles du marché de l'emploi et aux défis de l'entrepreneuriat moderne.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0 border border-eagle-gold/20 shadow-lg">
                    <Heart className="text-eagle-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2 font-[var(--font-outfit)]">Accessibilité Durable</h3>
                    <p className="text-white/50 font-light">{ACADEMY_DATA.impact}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0 border border-eagle-gold/20 shadow-lg">
                    <TrendingUp className="text-eagle-gold" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2 font-[var(--font-outfit)]">Plus qu'une formation</h3>
                    <p className="text-white/50 font-light">Nous ne nous limitons pas à la théorie. Nous formons aussi les futurs talents de notre entreprise aux côtés de nos experts.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trainings Grid */}
      <section className="py-24 bg-white/2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-eagle-gold text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Nos Programmes</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-[var(--font-outfit)]">Formations <span className="text-gradient">Certifiantes</span></h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ACADEMY_DATA.trainings.map((training, idx) => {
              const Icon = iconMap[training.icon as keyof typeof iconMap] || Monitor;
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="group relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-eagle-gold to-eagle-yellow rounded-[2rem] blur opacity-10 group-hover:opacity-30 transition duration-500" />
                    <div className="relative glass p-8 rounded-[2rem] border border-white/5 group-hover:border-eagle-gold/30 transition-all duration-500 h-full flex flex-col shadow-xl">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-eagle-gold mb-6 group-hover:scale-110 group-hover:bg-eagle-gold/10 transition-all duration-500 shadow-inner">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-white font-bold text-xl mb-3 font-[var(--font-outfit)]">{training.title}</h3>
                      <p className="text-white/40 text-sm font-light leading-relaxed flex-grow">{training.description}</p>
                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-eagle-gold text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        En savoir plus <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="glass rounded-[3rem] p-12 md:p-24 border border-eagle-gold/20 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-64 h-64 bg-eagle-gold/5 blur-[100px] -ml-32 -mt-32 group-hover:bg-eagle-gold/10 transition-colors duration-700" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-eagle-yellow/5 blur-[100px] -mr-32 -mb-32 group-hover:bg-eagle-yellow/10 transition-colors duration-700" />
              
              <Users className="text-eagle-gold mx-auto mb-8 animate-bounce w-16 h-16" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-[var(--font-outfit)] leading-tight">
                Rejoignez la nouvelle génération <br /><span className="text-gradient">de leaders technologiques</span>
              </h2>
              <p className="text-white/50 text-xl font-light mb-12 max-w-2xl mx-auto">
                Ne laissez pas votre avenir au hasard. Apprenez les compétences qui domineront demain. Nos places sont limitées pour garantir un encadrement de qualité.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                <a 
                  href="/contact" 
                  className="px-10 py-5 bg-eagle-gold text-eagle-black rounded-2xl font-extrabold text-lg hover:bg-eagle-yellow transition-all flex items-center gap-3 shadow-2xl group active:scale-95"
                >
                  S'inscrire à une formation <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
