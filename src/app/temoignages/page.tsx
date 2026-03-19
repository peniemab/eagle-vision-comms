"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, MessageSquare, Send, CheckCircle, User, Quote, ArrowRight } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import AnimatedCounter from "../../components/AnimatedCounter";
import { submitTestimonial, getApprovedTestimonials } from "../actions/testimonials";

const initialTestimonials = [
  {
    id: "st-1",
    name: "Marc Kabeya",
    role: "Directeur Marketing",
    company: "Vodacom RDC",
    text: "Une collaboration exceptionnelle. Eagle Vision a su capturer l'essence de notre marque avec une précision et une créativité rares.",
    rating: 5,
    service: "Publicité & TV",
    avatar: "MK",
  },
  {
    id: "st-2",
    name: "Sarah Mwamba",
    role: "Fondatrice",
    company: "L'Éclat Congolais",
    text: "Leur approche du branding est unique. Ils ne se contentent pas de créer un logo, ils construisent une véritable identité.",
    rating: 5,
    service: "Branding & Production",
    avatar: "SM",
  },
  {
    id: "st-3",
    name: "David Tshimanga",
    role: "Event Planner",
    company: "Kin events",
    text: "La couverture vidéo de nos événements est toujours impeccable. Professionnalisme et réactivité sont au rendez-vous.",
    rating: 5,
    service: "Vidéographie",
    avatar: "DT",
  },
];

const stats = [
  { label: "Satisfaction", value: 98, suffix: "%" },
  { label: "Projets Réalisés", value: 500, suffix: "+" },
  { label: "Avis Positifs", value: 200, suffix: "+" },
];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState("Tous");
  const [dynamicTestimonials, setDynamicTestimonials] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", company: "", text: "", rating: 5, service: "Photographie" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function loadTestimonials() {
      const approved = await getApprovedTestimonials();
      setDynamicTestimonials(approved || []);
    }
    loadTestimonials();
  }, []);

  const allTestimonials = [...initialTestimonials, ...dynamicTestimonials];
  const filteredTestimonials = filter === "Tous" ? allTestimonials : allTestimonials.filter(t => t.service === filter);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await submitTestimonial(formData);
    setIsSubmitting(false);
    
    if (result.success) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowForm(false);
        setFormData({ name: "", role: "", company: "", text: "", rating: 5, service: "Photographie" });
      }, 5000);
    }
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-eagle-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-24 text-center">
          <ScrollReveal>
            <span className="inline-block text-eagle-gold text-xs font-bold tracking-[0.4em] uppercase mb-6 bg-eagle-gold/5 px-4 py-2 rounded-full border border-eagle-gold/20">La voix de nos clients</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white font-[var(--font-outfit)] tracking-tight leading-tight">Ils nous font <span className="text-gradient">Confiance</span></h1>
            <p className="text-white/50 mt-8 max-w-3xl mx-auto text-lg md:text-xl font-light">Leur satisfaction est notre plus grande réussite. Découvrez pourquoi les leaders du marché choisissent Eagle Vision Comms DRC.</p>
          </ScrollReveal>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <ScrollReveal key={stat.label} delay={idx * 0.1}>
                <div className="glass p-8 rounded-3xl border border-eagle-gold/10 hover:border-eagle-gold/30 transition-all duration-500 group shadow-2xl">
                  <div className="text-4xl font-extrabold text-white mb-2 font-[var(--font-outfit)] group-hover:scale-110 transition-transform">
                    <AnimatedCounter end={stat.value} duration={2} />
                    <span className="text-eagle-gold">{stat.suffix}</span>
                  </div>
                  <p className="text-white/40 text-sm uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Filter & Action Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {["Tous", "Photographie", "Vidéographie", "Publicité & TV", "Branding & Production"].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all border ${
                  filter === category 
                    ? "bg-eagle-gold text-eagle-black border-eagle-gold shadow-[0_0_20px_rgba(212,175,55,0.2)]" 
                    : "bg-white/5 text-white/50 border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="group flex items-center gap-3 bg-white text-eagle-black px-8 py-4 rounded-2xl font-extrabold text-sm hover:bg-eagle-gold transition-all duration-500 shadow-xl"
          >
            <MessageSquare size={18} />
            {showForm ? "Fermer le formulaire" : "Laisser un avis professionnel"}
          </button>
        </div>

        {/* Review Submission Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-20"
            >
              <div className="glass rounded-[2.5rem] p-8 md:p-16 border border-eagle-gold/20 shadow-2xl max-w-4xl mx-auto">
                {!submitted ? (
                  <>
                    <div className="text-center mb-12">
                      <h3 className="text-white text-3xl font-bold font-[var(--font-outfit)] mb-4 italic">Votre avis <span className="text-eagle-gold">compte</span></h3>
                      <p className="text-white/40 text-base">Aidez-nous à nous améliorer et guidez les futurs clients.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-2">Nom complet *</label>
                          <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-eagle-gold/40 transition-all shadow-inner outline-none" required />
                        </div>
                        <div className="space-y-3">
                          <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-2">Service utilisé *</label>
                          <select value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-eagle-gold/40 transition-all appearance-none outline-none">
                            <option value="Photographie">Photographie</option>
                            <option value="Vidéographie">Vidéographie</option>
                            <option value="Publicité & TV">Publicité & TV</option>
                            <option value="Branding & Production">Branding & Production</option>
                            <option value="Événementiel">Événementiel</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-2">Poste / Titre</label>
                          <input type="text" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-eagle-gold/40 transition-all outline-none" placeholder="Ex: CEO" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-2">Entreprise</label>
                          <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full bg-white/5 border border-eagle-gold/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-eagle-gold/40 transition-all outline-none" placeholder="Ex: Eagle Corp" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-2">Note (Étoiles)</label>
                        <div className="flex gap-4">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button key={star} type="button" onClick={() => setFormData({...formData, rating: star})} className={`w-14 h-14 rounded-2xl border transition-all flex items-center justify-center ${formData.rating >= star ? "border-eagle-gold bg-eagle-gold/10 text-eagle-gold scale-110" : "border-white/10 text-white/20 hover:border-white/30"}`}>
                              <Star size={24} fill={formData.rating >= star ? "currentColor" : "none"} />
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-white/60 text-xs font-bold tracking-widest uppercase ml-2">Votre témoignage (Dites-le avec vos mots) *</label>
                        <textarea value={formData.text} onChange={(e) => setFormData({...formData, text: e.target.value})} rows={5} className="w-full bg-white/5 border border-eagle-gold/10 rounded-3xl px-6 py-5 text-white focus:outline-none focus:border-eagle-gold/40 transition-all resize-none outline-none" required />
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full h-16 bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-extrabold rounded-2xl text-lg hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50 group">
                        {isSubmitting ? <span className="w-6 h-6 border-3 border-eagle-black border-t-transparent rounded-full animate-spin" /> : <><Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Publier mon avis</>}
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20">
                    <div className="w-24 h-24 rounded-full bg-eagle-gold/20 flex items-center justify-center mx-auto mb-10 border border-eagle-gold/30">
                      <CheckCircle size={50} className="text-eagle-gold" />
                    </div>
                    <h3 className="text-white text-4xl font-extrabold font-[var(--font-outfit)] mb-4 italic">Merci infiniment !</h3>
                    <p className="text-white/50 text-xl font-light">Votre témoignage a été envoyé pour modération. <br/>Il sera publié sur cette page très prochainement.</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredTestimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative"
              >
                <div className="glass rounded-[2rem] p-10 h-full flex flex-col border border-eagle-gold/10 hover:border-eagle-gold/40 transition-all duration-700 shadow-2xl relative overflow-hidden group-hover:transform group-hover:scale-[1.02]">
                  {/* Decorative quote */}
                  <div className="absolute top-8 right-8 text-eagle-gold/10 group-hover:text-eagle-gold/20 transition-colors transform group-hover:scale-150 duration-700">
                    <Quote size={80} />
                  </div>
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={i < testimonial.rating ? "text-eagle-gold fill-eagle-gold" : "text-white/10"} />
                    ))}
                  </div>

                  <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed italic mb-10 relative z-10">&quot;{testimonial.text}&quot;</p>
                  
                  <div className="mt-auto flex items-center gap-5 pt-10 border-t border-white/5 group-hover:border-eagle-gold/10 transition-colors">
                    {testimonial.avatar ? (
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eagle-gold to-eagle-yellow flex items-center justify-center text-eagle-black font-extrabold text-xl shadow-lg border border-white/10 transform rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        {testimonial.avatar === "MK" || testimonial.avatar === "SM" || testimonial.avatar === "DT" ? testimonial.avatar : testimonial.avatar[0]}
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-eagle-gold border border-eagle-gold/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <User size={28} />
                      </div>
                    )}
                    <div>
                      <h4 className="text-white font-extrabold text-lg tracking-tight">{testimonial.name}</h4>
                      <p className="text-white/40 text-sm font-medium">{testimonial.role} <span className="text-eagle-gold uppercase text-[10px] ml-1 tracking-widest">{testimonial.company && `@ ${testimonial.company}`}</span></p>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-eagle-gold/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to Action */}
        <section className="mt-40 mb-12">
          <div className="relative glass rounded-[3rem] p-12 md:p-24 border border-eagle-gold/20 overflow-hidden text-center shadow-[0_0_100px_rgba(212,175,55,0.05)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-eagle-gold/10 blur-[120px] -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-eagle-yellow/5 blur-[120px] -ml-48 -mb-48" />
            
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 font-[var(--font-outfit)] leading-tight">Envie de raconter votre <br /><span className="text-gradient">propre succes story ?</span></h2>
              <p className="text-white/50 text-xl font-light mb-12 max-w-2xl mx-auto">Rejoignez le cercle prestigieux de nos partenaires et donnez une nouvelle impulsion à votre communication.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="/contact" className="px-10 py-5 bg-eagle-gold text-eagle-black rounded-2xl font-extrabold text-lg hover:bg-eagle-yellow transition-all flex items-center gap-3 shadow-2xl group">
                  Démarrer mon projet <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </div>
  );
}
