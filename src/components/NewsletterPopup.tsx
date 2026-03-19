"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Gift, Loader2 } from "lucide-react";
import { subscribeToNewsletter } from "../app/actions/newsletter";

export default function NewsletterPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const dismissed = sessionStorage.getItem("newsletter-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => {
      setShow(true);
    }, 30000); // 30 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setShow(false);
    sessionStorage.setItem("newsletter-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setErrorMsg("");

    const result = await subscribeToNewsletter(email, "popup");
    
    if (result.success) {
      setSubscribed(true);
      setTimeout(() => {
        handleDismiss();
      }, 2500);
    } else {
      setErrorMsg(result.message);
    }
    setIsSubmitting(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleDismiss} />
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 20, stiffness: 200 }}
            className="relative bg-eagle-dark border border-eagle-gold/20 rounded-2xl p-8 max-w-md w-full shadow-2xl shadow-eagle-gold/10"
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {!subscribed ? (
              <>
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-eagle-gold/20 to-eagle-yellow/10 border border-eagle-gold/20 mx-auto mb-6">
                  <Gift size={28} className="text-eagle-gold" />
                </div>
                <h3 className="text-white text-xl font-bold text-center font-[var(--font-outfit)] mb-2">
                  Ne manquez rien ! 🦅
                </h3>
                <p className="text-white/50 text-sm text-center mb-6">
                  Inscrivez-vous à notre newsletter et recevez en exclusivité nos conseils, tendances et offres spéciales.
                </p>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-eagle-gold/50 transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                  {errorMsg && <p className="text-red-400 text-xs text-center">{errorMsg}</p>}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold py-3 rounded-xl text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
                    Je m&apos;inscris gratuitement
                  </button>
                </form>
                <p className="text-white/30 text-xs text-center mt-4">
                  Pas de spam, promis. Désabonnement en un clic.
                </p>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-4"
              >
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-white text-xl font-bold font-[var(--font-outfit)] mb-2">
                  Bienvenue dans la famille !
                </h3>
                <p className="text-white/50 text-sm">
                  Merci pour votre inscription. À très bientôt !
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
