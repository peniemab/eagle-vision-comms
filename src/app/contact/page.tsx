"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Facebook, Twitter, Youtube, Linkedin, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY } from "@/lib/constants";
import { submitContactForm } from "@/app/actions/contact";

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const result = await submitContactForm(formData);

    setIsSubmitting(false);
    if (result.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", service: "", message: "", budget: "" });
      }, 5000);
    } else {
      setError(result.error || "Une erreur est survenue lors de l'envoi.");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative font-black pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/10 via-transparent to-transparent opacity-50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <ScrollReveal>
            <span className="inline-block text-eagle-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 bg-eagle-gold/5 px-4 py-2 rounded-full border border-eagle-gold/20">Parlons de votre projet</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white font-[var(--font-outfit)] tracking-tight leading-tight">Parlons de votre <span className="text-gradient">Vision</span></h1>
            <p className="text-white/60 mt-8 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">Nous sommes prêts à transformer vos idées en réalité numérique. Contactez-nous dès aujourd&apos;hui pour une collaboration d&apos;exception.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Info (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              <ScrollReveal>
                <div className="glass rounded-[2rem] p-8 border border-eagle-gold/10 hover:border-eagle-gold/30 transition-all duration-500 shadow-2xl">
                  <h3 className="text-white font-bold font-[var(--font-outfit)] mb-8 text-xl flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-eagle-gold/20 flex items-center justify-center text-eagle-gold text-sm"></span> Coordonnées
                  </h3>
                  <ul className="space-y-8">
                    <li className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0 border border-eagle-gold/20 group-hover:scale-110 transition-transform"><Phone size={20} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Téléphone</p><p className="text-white font-semibold text-lg hover:text-eagle-gold transition-colors">{COMPANY.phone}</p></div>
                    </li>
                    <li className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0 border border-eagle-gold/20"><Mail size={20} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Email professionnel</p><p className="text-white font-semibold text-lg hover:text-eagle-gold transition-colors">{COMPANY.email}</p></div>
                    </li>
                    <li className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0 border border-eagle-gold/20"><MapPin size={20} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Siège Social</p><p className="text-white font-semibold text-base leading-snug">{COMPANY.address}</p></div>
                    </li>
                    <li className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0 border border-eagle-gold/20"><Clock size={20} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-[10px] uppercase font-bold tracking-widest mb-1">Horaires d&apos;ouverture</p><p className="text-white font-semibold text-base">{COMPANY.hours}</p></div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="glass rounded-[2rem] p-8 font-black border border-eagle-gold/10 shadow-xl">
                  <h3 className="text-white font-bold font-[var(--font-outfit)] mb-6 text-sm uppercase tracking-widest">Connectons-nous</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((s) => (
                      <motion.a key={s.label} href={s.href} whileHover={{ scale: 1.1, y: -5 }} whileTap={{ scale: 0.95 }} className="w-12 h-12 rounded-2xl bg-white/5 border border-eagle-gold/10 flex items-center justify-center text-white/40 hover:text-eagle-gold hover:border-eagle-gold/40 hover:bg-eagle-gold/10 transition-all shadow-lg" aria-label={s.label}>
                        <s.icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <a href={`https://wa.me/${COMPANY.whatsapp.replace(/\+/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-[#25D366]/5 border border-[#25D366]/20 rounded-[2rem] p-8 hover:bg-[#25D366]/10 transition-all duration-500 group shadow-xl">
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform"><MessageCircle size={28} className="text-white" /></div>
                  <div><p className="text-white font-bold text-base group-hover:text-[#25D366] transition-colors">WhatsApp Direct</p><p className="text-white/40 text-[13px]">Réponse immédiate garantie</p></div>
                </a>
              </ScrollReveal>
            </div>

            {/* Contact Form (8 cols) */}
            <div className="lg:col-span-8 ">
              <ScrollReveal direction="right">
                <div className="glass rounded-[2.5rem] p-8 md:p-14 border border-eagle-gold/10 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-eagle-gold/5 blur-[100px] -mr-32 -mt-32" />

                  {!submitted ? (
                    <>
                      <div className="relative mb-12">
                        <h3 className="text-white text-3xl font-bold font-[var(--font-outfit)] mb-3">Lancez votre projet</h3>
                        <p className="text-white/40 text-base font-light">Partagez votre besoin, nous élaborerons la stratégie parfaite.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8 relative">
                        {error && (
                          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-2xl text-sm font-medium">
                            {error}
                          </motion.div>
                        )}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-white/60 text-[13px] font-bold tracking-wider uppercase ml-1">Nom complet </label>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Ex: Jean Mukendi" className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/40 focus:bg-eagle-gold/5 transition-all outline-none" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-white/60 text-[13px] font-bold tracking-wider uppercase ml-1">Email</label>
                            <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jean@exemple.com" className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/40 focus:bg-eagle-gold/5 transition-all outline-none" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-white/60 text-[13px] font-bold tracking-wider uppercase ml-1">Téléphone</label>
                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="+243..." className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/40 focus:bg-eagle-gold/5 transition-all outline-none" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-white/60 text-[13px] font-bold tracking-wider uppercase ml-1">Service souhaité</label>
                            <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-eagle-gold/40 focus:bg-eagle-gold/5 transition-all outline-none appearance-none">
                              <option value="" className="bg-eagle-black text-white/50">Sélectionnez un service</option>
                              <option value="Photographie" className="bg-eagle-black text-white">Photographie</option>
                              <option value="Vidéographie" className="bg-eagle-black text-white">Vidéographie</option>
                              <option value="Publicité" className="bg-eagle-black text-white">Publicité & TV</option>
                              <option value="Stratégies" className="bg-eagle-black text-white">Stratégies de Communication</option>
                              <option value="Digital" className="bg-eagle-black text-white">Digital & Social Media</option>
                              <option value="Branding" className="bg-eagle-black text-white">Branding & Production</option>
                              <option value="Événementiel" className="bg-eagle-black text-white">Événementiel</option>
                            </select>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-white/60 text-[13px] font-bold tracking-wider uppercase ml-1">Budget estimé</label>
                          <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-eagle-gold/40 focus:bg-eagle-gold/5 transition-all outline-none appearance-none">
                            <option value="">Indiquez une fourchette</option>
                            <option value="Small (< $500)">Moins de 500$</option>
                            <option value="Medium ($500-$2k)">500$ - 2,000$</option>
                            <option value="Large ($2k-$5k)">2,000$ - 5,000$</option>
                            <option value="Premium (> $5k)">Plus de 5,000$</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-white/60 text-[13px] font-bold tracking-wider uppercase ml-1">Votre message</label>
                          <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Parlez-nous de vos objectifs..." rows={5} className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/40 focus:bg-eagle-gold/5 transition-all outline-none resize-none" required />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="w-full h-16 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-extrabold rounded-2xl text-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group">
                          {isSubmitting ? <span className="w-6 h-6 border-3 border-eagle-black border-t-transparent rounded-full animate-spin" /> : <><Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Envoyer ma demande</>}
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-24">
                      <div className="w-24 h-24 rounded-full bg-eagle-gold/20 flex items-center justify-center mx-auto mb-8 border border-eagle-gold/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] relative">
                        <Check size={48} className="text-eagle-gold relative z-10" />
                        <motion.div initial={{ scale: 1 }} animate={{ scale: 1.5, opacity: 0 }} transition={{ duration: 1, repeat: Infinity }} className="absolute inset-0 bg-eagle-gold/20 rounded-full" />
                      </div>
                      <h3 className="text-white text-4xl font-extrabold font-[var(--font-outfit)] mb-4">Message envoyé !</h3>
                      <p className="text-white/50 text-xl font-light">Nous avons bien reçu votre demande. <br />Notre équipe d&apos;experts vous répondra sous 2h.</p>
                    </motion.div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
