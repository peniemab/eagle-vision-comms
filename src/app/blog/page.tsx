"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPage() {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-eagle-gold/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-block text-eagle-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
                Blog & Actualités
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white font-[var(--font-outfit)]">
                Inspiration & <span className="text-gradient">Expertise</span>
              </h1>
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
                Découvrez nos articles, tendances et conseils pour booster votre communication.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <motion.article
              whileHover={{ y: -5 }}
              className="glass rounded-3xl overflow-hidden border border-eagle-gold/10 hover:border-eagle-gold/25 transition-all duration-500 cursor-pointer group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto min-h-[300px] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-eagle-gold text-eagle-black text-xs font-semibold px-3 py-1.5 rounded-full">
                      ⭐ Article vedette
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                    <span className="flex items-center gap-1.5">
                      <Tag size={12} className="text-eagle-gold" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {new Date(featuredPost.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-outfit)] mb-4 group-hover:text-eagle-gold transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/50 leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-eagle-gold text-sm font-medium group-hover:gap-3 transition-all">
                    Lire l&apos;article
                    <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </motion.article>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.08}>
                <motion.article
                  whileHover={{ y: -5 }}
                  className="glass rounded-2xl overflow-hidden border border-eagle-gold/10 hover:border-eagle-gold/25 transition-all duration-500 cursor-pointer group h-full flex flex-col"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-eagle-dark to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-eagle-gold/20 backdrop-blur-sm text-eagle-gold text-[10px] font-semibold px-3 py-1.5 rounded-full border border-eagle-gold/20">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-white/30 text-[11px] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {new Date(post.date).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold font-[var(--font-outfit)] mb-3 group-hover:text-eagle-gold transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-eagle-gold text-xs font-medium group-hover:gap-3 transition-all">
                      Lire la suite
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
