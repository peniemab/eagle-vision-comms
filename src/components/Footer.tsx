"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
  Send,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Heart,
} from "lucide-react";
import { NAV_LINKS, COMPANY, SERVICES } from "@/lib/constants";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="relative bg-eagle-black border-t border-eagle-gold/10">
      {/* Newsletter Bar */}
      <div className="bg-gradient-to-r from-eagle-gold/10 via-eagle-yellow/5 to-eagle-gold/10 border-b border-eagle-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white font-bold text-lg font-[var(--font-outfit)]">
                Restez informé de nos <span className="text-gradient">dernières actualités</span>
              </h3>
              <p className="text-white/50 text-sm mt-1">
                Recevez nos conseils, tendances et offres exclusives directement dans votre boîte mail.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex w-full md:w-auto gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email..."
                className="flex-1 md:w-72 bg-white/5 border border-eagle-gold/20 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-eagle-gold/50 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-eagle-gold to-eagle-yellow text-eagle-black font-semibold px-6 py-3 rounded-full text-sm hover:shadow-lg hover:shadow-eagle-gold/30 transition-all duration-300 hover:scale-105 flex items-center gap-2 whitespace-nowrap"
              >
                {subscribed ? "Inscrit !" : <><Send size={14} /> S&apos;inscrire</>}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-eagle-gold to-eagle-yellow rounded-lg transform rotate-45" />
                <span className="relative text-eagle-black font-bold text-xl">E</span>
              </div>
              <div>
                <span className="text-white font-bold text-lg tracking-wider font-[var(--font-outfit)]">
                  EAGLE <span className="text-gradient">VISION</span>
                </span>
                <span className="block text-[10px] text-eagle-gold/70 tracking-[0.2em] -mt-1">
                  COMMS DRC
                </span>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {COMPANY.tagline}. Nous transformons vos visions en réalités visuelles percutantes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-white/5 border border-eagle-gold/10 flex items-center justify-center text-white/50 hover:text-eagle-gold hover:border-eagle-gold/30 hover:bg-eagle-gold/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 font-[var(--font-outfit)]">
              Navigation
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-eagle-gold text-sm flex items-center gap-2 transition-colors duration-300 group"
                  >
                    <ChevronRight size={12} className="text-eagle-gold/30 group-hover:text-eagle-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 font-[var(--font-outfit)]">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-white/50 hover:text-eagle-gold text-sm flex items-center gap-2 transition-colors duration-300 group"
                  >
                    <ChevronRight size={12} className="text-eagle-gold/30 group-hover:text-eagle-gold transition-colors" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6 font-[var(--font-outfit)]">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-eagle-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">{COMPANY.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-eagle-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">{COMPANY.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-eagle-gold mt-0.5 flex-shrink-0" />
                <span className="text-white/50 text-sm">{COMPANY.address}</span>
              </li>
            </ul>
            <div className="mt-6 p-4 rounded-xl bg-eagle-gold/5 border border-eagle-gold/10">
              <p className="text-eagle-gold/70 text-xs font-medium">🕐 Horaires</p>
              <p className="text-white/50 text-xs mt-1">{COMPANY.hours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-eagle-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Eagle Vision Comms DRC. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            Créé avec <Heart size={12} className="text-eagle-gold" /> à Kinshasa
          </p>
        </div>
      </div>
    </footer>
  );
}
