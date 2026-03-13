"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Globe, Users, Eye, TrendingUp, Zap } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

export default function VisitorCounter() {
  const [todayVisitors, setTodayVisitors] = useState(127);
  const [lastVisit, setLastVisit] = useState("il y a 2 minutes");

  const getRandomInterval = useCallback(() => {
    const intervals = [
      "il y a 1 minute",
      "il y a 2 minutes",
      "il y a 3 minutes",
      "il y a 5 minutes",
      "à l'instant",
    ];
    return intervals[Math.floor(Math.random() * intervals.length)];
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTodayVisitors((prev) => prev + Math.floor(Math.random() * 3));
      setLastVisit(getRandomInterval());
    }, 8000);
    return () => clearInterval(interval);
  }, [getRandomInterval]);

  const stats = [
    { icon: Globe, value: 12847, label: "Visiteurs uniques", suffix: "+" },
    { icon: Eye, value: 45329, label: "Visites totales", suffix: "+" },
    { icon: Users, value: todayVisitors, label: "Visiteurs aujourd'hui", suffix: "", live: true },
    { icon: TrendingUp, value: 98, label: "Taux de satisfaction", suffix: "%" },
  ];

  return (
    <section className="py-16 font-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-eagle-gold/10 border border-eagle-gold/20 rounded-full px-4 py-2 mb-4">
            <Zap size={14} className="text-eagle-gold" />
            <span className="text-eagle-gold text-xs font-medium tracking-wider uppercase">
              Notre Présence en Ligne
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-outfit)]">
            Un site qui <span className="text-gradient">vit et grandit</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center group hover:border-eagle-gold/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-eagle-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={22} className="text-eagle-gold" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white font-[var(--font-outfit)] mb-1">
                {stat.live ? (
                  <motion.span
                    key={stat.value}
                    initial={{ scale: 1.2, color: "#FFB800" }}
                    animate={{ scale: 1, color: "#FFFFFF" }}
                    transition={{ duration: 0.5 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.span>
                ) : (
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-white/50 text-xs">
                {stat.label}
              </p>
              {stat.live && (
                <div className="flex items-center justify-center gap-1.5 mt-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-[10px] font-medium">LIVE</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="text-white/30 text-xs flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Dernière visite : {lastVisit}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
