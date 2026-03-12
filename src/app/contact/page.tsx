"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Facebook, Instagram, Twitter, Youtube, Linkedin, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { COMPANY } from "@/lib/constants";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", service: "", message: "", budget: "" }); }, 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <ScrollReveal>
            <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">Parlons de votre projet</span>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-[var(--font-outfit)]">Contactez-<span className="text-gradient">nous</span></h1>
            <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">Nous sommes prêts à donner vie à votre vision. Contactez-nous dès aujourd&apos;hui.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal>
                <div className="glass rounded-2xl p-6 border border-eagle-gold/10">
                  <h3 className="text-white font-bold font-[var(--font-outfit)] mb-6">📍 Informations</h3>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0"><Phone size={18} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-xs">Téléphone</p><p className="text-white font-medium text-sm">{COMPANY.phone}</p></div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0"><Mail size={18} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-xs">Email</p><p className="text-white font-medium text-sm">{COMPANY.email}</p></div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0"><MapPin size={18} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-xs">Adresse</p><p className="text-white font-medium text-sm">{COMPANY.address}</p></div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-eagle-gold/10 flex items-center justify-center flex-shrink-0"><Clock size={18} className="text-eagle-gold" /></div>
                      <div><p className="text-white/40 text-xs">Horaires</p><p className="text-white font-medium text-sm">{COMPANY.hours}</p></div>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="glass rounded-2xl p-6 border border-eagle-gold/10">
                  <h3 className="text-white font-bold font-[var(--font-outfit)] mb-4">💬 Réseaux Sociaux</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((s) => (
                      <motion.a key={s.label} href={s.href} whileHover={{ scale: 1.2, y: -3 }} whileTap={{ scale: 0.9 }} className="w-10 h-10 rounded-full bg-white/5 border border-eagle-gold/10 flex items-center justify-center text-white/50 hover:text-eagle-gold hover:border-eagle-gold/30 hover:bg-eagle-gold/10 transition-all" aria-label={s.label}>
                        <s.icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6 hover:bg-[#25D366]/20 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0"><MessageCircle size={22} className="text-white" /></div>
                  <div><p className="text-white font-semibold text-sm">Contactez-nous sur WhatsApp</p><p className="text-white/40 text-xs">{COMPANY.phone} • Réponse rapide</p></div>
                </a>
              </ScrollReveal>

              {/* Map placeholder */}
              <ScrollReveal delay={0.3}>
                <div className="glass rounded-2xl overflow-hidden border border-eagle-gold/10 h-48 relative">
                  <div className="absolute inset-0 bg-eagle-dark flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={32} className="text-eagle-gold mx-auto mb-2" />
                      <p className="text-white/50 text-sm font-medium">Kinshasa, RDC</p>
                      <p className="text-white/30 text-xs">Boulevard du 30 Juin</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <div className="glass rounded-3xl p-8 md:p-10 border border-eagle-gold/10">
                  {!submitted ? (
                    <>
                      <h3 className="text-white text-xl font-bold font-[var(--font-outfit)] mb-2">✉️ Demandez un devis gratuit</h3>
                      <p className="text-white/40 text-sm mb-8">Remplissez le formulaire et nous vous répondrons sous 24h.</p>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-white/50 text-xs mb-1.5 block">Nom complet *</label>
                            <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Votre nom" className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/50 transition-colors" required />
                          </div>
                          <div>
                            <label className="text-white/50 text-xs mb-1.5 block">Email *</label>
                            <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="votre@email.com" className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/50 transition-colors" required />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-white/50 text-xs mb-1.5 block">Téléphone</label>
                            <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+243..." className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/50 transition-colors" />
                          </div>
                          <div>
                            <label className="text-white/50 text-xs mb-1.5 block">Service souhaité</label>
                            <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white/50 focus:outline-none focus:border-eagle-gold/50 transition-colors">
                              <option value="">Sélectionnez un service</option>
                              <option value="photo">Photographie</option>
                              <option value="video">Vidéographie</option>
                              <option value="pub">Publicité & TV</option>
                              <option value="comm">Communication</option>
                              <option value="digital">Social Media & Digital</option>
                              <option value="branding">Branding</option>
                              <option value="event">Événementiel</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="text-white/50 text-xs mb-1.5 block">Budget estimé</label>
                          <select value={formData.budget} onChange={(e) => setFormData({...formData, budget: e.target.value})} className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white/50 focus:outline-none focus:border-eagle-gold/50 transition-colors">
                            <option value="">Sélectionnez votre budget</option>
                            <option value="small">Moins de 500$</option>
                            <option value="medium">500$ - 2,000$</option>
                            <option value="large">2,000$ - 5,000$</option>
                            <option value="enterprise">Plus de 5,000$</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-white/50 text-xs mb-1.5 block">Votre message *</label>
                          <textarea value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Décrivez votre projet..." rows={5} className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-eagle-gold/50 transition-colors resize-none" required />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold py-4 rounded-xl text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 flex items-center justify-center gap-2">
                          <Send size={16} /> Envoyer ma demande
                        </button>
                      </form>
                    </>
                  ) : (
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-16">
                      <div className="w-20 h-20 rounded-full bg-eagle-gold/20 flex items-center justify-center mx-auto mb-6"><CheckCircle size={40} className="text-eagle-gold" /></div>
                      <h3 className="text-white text-2xl font-bold font-[var(--font-outfit)] mb-3">Message envoyé !</h3>
                      <p className="text-white/50">Merci pour votre demande. Notre équipe vous répondra sous 24 heures.</p>
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
