"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Play } from "lucide-react";
import ScrollReveal from "../../components/ScrollReveal";
import { supabase } from "@/lib/supabase";

export default function BlogPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-eagle-black">
        <div className="w-12 h-12 border-4 border-eagle-gold border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1);

  const MediaPreview = ({ post, className = "" }: { post: any; className?: string }) => {
    if (!post.media_url) return <div className={`bg-eagle-gold/5 ${className}`} />;

    if (post.media_type === 'video') {
      return (
        <div className={`relative ${className} bg-black group-hover:scale-105 transition-transform duration-700`}>
          <video 
            src={post.media_url} 
            className="w-full h-full object-cover opacity-60"
            muted
            loop
            onMouseOver={e => e.currentTarget.play()}
            onMouseOut={e => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-eagle-gold/20 backdrop-blur-sm border border-eagle-gold/30 flex items-center justify-center text-eagle-gold">
              <Play size={24} fill="currentColor" />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`relative ${className} overflow-hidden`}>
        <Image
          src={post.media_url}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="relative font-black pt-32 pb-16 overflow-hidden">
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

      {posts.length === 0 ? (
        <section className="py-20 text-center">
          <p className="text-white/30 italic">Aucun article publié pour le moment.</p>
        </section>
      ) : (
        <>
          {/* Featured Post */}
          {featuredPost && (
            <section className="pb-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal>
                  <motion.article
                    whileHover={{ y: -5 }}
                    className="glass rounded-3xl overflow-hidden border border-eagle-gold/10 hover:border-eagle-gold/25 transition-all duration-500 cursor-pointer group"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <MediaPreview post={featuredPost} className="h-64 lg:h-auto min-h-[350px]" />
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                          <span className="flex items-center gap-1.5">
                            <Tag size={12} className="text-eagle-gold" />
                            {featuredPost.category}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            {new Date(featuredPost.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                          </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white font-[var(--font-outfit)] mb-4 group-hover:text-eagle-gold transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-white/50 leading-relaxed mb-6 whitespace-pre-wrap">
                          {featuredPost.content}
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
          )}

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
                      <MediaPreview post={post} className="h-52" />
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-3 text-white/30 text-[11px] mb-3">
                          <span className="flex items-center gap-1">
                            <Tag size={10} className="text-eagle-gold" />
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={10} />
                            {new Date(post.created_at).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                          </span>
                        </div>
                        <h3 className="text-white font-semibold font-[var(--font-outfit)] mb-3 group-hover:text-eagle-gold transition-colors leading-snug">
                          {post.title}
                        </h3>
                        <p className="text-white/40 text-xs leading-relaxed flex-1 mb-4 line-clamp-3">
                          {post.content}
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
      )}
    </>
  );
}

