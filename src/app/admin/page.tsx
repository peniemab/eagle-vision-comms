"use client";

import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabase";
import { Check, X, Mail, MessageSquare, Trash2, ShieldCheck, Eye, LogIn, Users, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"messages" | "testimonials" | "newsletter" | "blog">("messages");
  const [messages, setMessages] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [subscriptions, setSubscriptions] = useState<any[]>([]);
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Blog Form State
  const [blogForm, setBlogForm] = useState({
    title: "",
    content: "",
    category: "Actualité",
    media_url: "",
    media_type: "image" as "image" | "video"
  });


  // Check for session on mount
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
        fetchData();
      }
    };
    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(`Erreur de connexion : ${error.message}`);
    } else if (data.session) {
      setIsAuthenticated(true);
      fetchData();
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const fetchData = async () => {
    setLoading(true);
    const { data: msgs } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    const { data: tstms } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    const { data: subs } = await supabase.from("newsletter_subscriptions").select("*").order("created_at", { ascending: false });
    const { data: bPosts } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false });

    if (msgs) setMessages(msgs);
    if (tstms) setTestimonials(tstms);
    if (subs) setSubscriptions(subs);
    if (bPosts) setBlogPosts(bPosts);
    setLoading(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `blog/${fileName}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('blog-media')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('blog-media')
        .getPublicUrl(filePath);

      setBlogForm(prev => ({
        ...prev,
        media_url: publicUrl,
        media_type: file.type.startsWith('video') ? 'video' : 'image'
      }));
    } catch (error) {
      alert("Erreur lors de l'upload");
    } finally {
      setUploading(false);
    }
  };

  const submitBlogPost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!blogForm.title || !blogForm.content) return;

    const { error } = await supabase.from("blog_posts").insert([
      { ...blogForm, author: "Eagle Vision" }
    ]);

    if (!error) {
      setBlogForm({ title: "", content: "", category: "Actualité", media_url: "", media_type: "image" });
      fetchData();
      alert("Félicitations ! Votre article a été publié.");
    } else {
      console.error("Publication error:", error);
      alert(`Erreur lors de la publication : ${error.message}`);
    }
  };


  const toggleApproval = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase.from("testimonials").update({ is_approved: !currentStatus }).eq("id", id);
    if (!error) fetchData();
  };

  const deleteItem = async (table: string, id: string) => {
    if (confirm("Supprimer définitivement ?")) {
      const { error } = await supabase.from(table).delete().eq("id", id);
      if (!error) fetchData();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-eagle-black flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass p-8 rounded-3xl w-full max-w-md border border-eagle-gold/10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-eagle-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-eagle-gold">
              <ShieldCheck size={32} />
            </div>
            <h1 className="text-2xl font-bold text-white font-[var(--font-outfit)]">EAGLE Admin</h1>
            <p className="text-white/40 text-sm mt-2">Zone d&apos;accès restreinte</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email (ex: [EMAIL_ADDRESS])"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-eagle-gold/50"
              required
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-eagle-gold/50"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-eagle-gold text-eagle-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-eagle-yellow transition-all disabled:opacity-50"
            >
              <LogIn size={18} /> {loading ? "Connexion..." : "Connexion"}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-eagle-black pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-white font-[var(--font-outfit)]">Tableau de Bord <span className="text-gradient">Admin</span></h1>
            <p className="text-white/40 text-sm">Gérez vos messages et témoignages clients</p>
          </div>
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
            <button onClick={() => setActiveTab("messages")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "messages" ? "bg-eagle-gold text-eagle-black" : "text-white/60 hover:text-white"}`}>
              <Mail size={16} /> Messages ({messages.length})
            </button>
            <button onClick={() => setActiveTab("testimonials")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "testimonials" ? "bg-eagle-gold text-eagle-black" : "text-white/60 hover:text-white"}`}>
              <MessageSquare size={16} /> Avis ({testimonials.length})
            </button>
            <button onClick={() => setActiveTab("newsletter")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "newsletter" ? "bg-eagle-gold text-eagle-black" : "text-white/60 hover:text-white"}`}>
              <Users size={16} /> Newsletter ({subscriptions.length})
            </button>
            <button onClick={() => setActiveTab("blog")} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === "blog" ? "bg-eagle-gold text-eagle-black" : "text-white/60 hover:text-white"}`}>
              <Eye size={16} /> Blog ({blogPosts.length})
            </button>
          </div>

          <button onClick={handleLogout} className="text-white/40 hover:text-red-500 transition-colors flex items-center gap-2 text-sm font-medium">
            <LogOut size={16} /> Déconnexion
          </button>
        </div>

        <div className="glass rounded-3xl border border-eagle-gold/10 overflow-hidden min-h-[500px]">
          {loading ? (
            <div className="flex items-center justify-center h-[500px]">
              <div className="w-8 h-8 border-4 border-eagle-gold border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="p-6">
              {activeTab === "messages" ? (
                <div className="space-y-4">
                  {messages.length === 0 ? <p className="text-white/20 text-center py-20">Aucun message pour le moment</p> :
                    messages.map((msg) => (
                      <div key={msg.id} className="bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col md:flex-row gap-4 justify-between group">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-white font-bold">{msg.name}</h3>
                            <span className="text-eagle-gold/50 text-xs px-2 py-0.5 bg-eagle-gold/10 rounded-full border border-eagle-gold/20 uppercase tracking-tighter">{msg.service || "Général"}</span>
                          </div>
                          <p className="text-white/50 text-sm">{msg.email} {msg.phone && `• ${msg.phone}`}</p>
                          <p className="text-white/80 text-sm mt-3 pt-3 border-t border-white/5">{msg.message}</p>
                          {msg.budget && <p className="text-eagle-gold text-xs font-semibold mt-2">Budget: {msg.budget}</p>}
                          <p className="text-white/20 text-[10px] mt-2 italic">{new Date(msg.created_at).toLocaleString('fr-FR')}</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <button onClick={() => deleteItem("contact_messages", msg.id)} className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ) : activeTab === "testimonials" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {testimonials.length === 0 ? <p className="text-white/20 text-center py-20 col-span-2">Aucun avis soumis</p> :
                    testimonials.map((t) => (
                      <div key={t.id} className="bg-white/5 border border-white/5 p-5 rounded-2xl flex flex-col justify-between group">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-eagle-gold/20 flex items-center justify-center text-eagle-gold font-bold">{t.name[0]}</div>
                              <div>
                                <h3 className="text-white font-bold text-sm">{t.name}</h3>
                                <p className="text-white/40 text-[10px]">{t.role} {t.company && `@ ${t.company}`}</p>
                              </div>
                            </div>
                            <div className="flex gap-1">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={`text-xs ${i < t.rating ? "text-eagle-gold" : "text-white/10"}`}>★</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-white/70 text-sm italic">&quot;{t.text}&quot;</p>
                          <p className="text-eagle-gold/50 text-xs mt-3 bg-eagle-gold/5 px-2 py-1 rounded-md inline-block uppercase tracking-widest">{t.service}</p>
                        </div>
                        <div className="flex gap-2 mt-6 pt-4 border-t border-white/5">
                          <button onClick={() => toggleApproval(t.id, t.is_approved)} className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${t.is_approved ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-eagle-gold/10 text-eagle-gold border border-eagle-gold/20"}`}>
                            {t.is_approved ? <><Eye size={14} /> En ligne</> : <><ShieldCheck size={14} /> Approuver</>}
                          </button>
                          <button onClick={() => deleteItem("testimonials", t.id)} className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all border border-red-500/20">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))
                  }
                </div>
              ) : activeTab === "newsletter" ? (
                <div className="space-y-4">
                  {subscriptions.length === 0 ? <p className="text-white/20 text-center py-20">Aucun abonné pour le moment</p> :
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-white/10">
                            <th className="py-4 px-4 text-eagle-gold text-xs uppercase tracking-widest font-bold">Email</th>
                            <th className="py-4 px-4 text-eagle-gold text-xs uppercase tracking-widest font-bold">Source</th>
                            <th className="py-4 px-4 text-eagle-gold text-xs uppercase tracking-widest font-bold">Inscrit le</th>
                            <th className="py-4 px-4 text-eagle-gold text-xs uppercase tracking-widest font-bold text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {subscriptions.map((sub) => (
                            <tr key={sub.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                              <td className="py-4 px-4">
                                <span className="text-white font-medium">{sub.email}</span>
                              </td>
                              <td className="py-4 px-4">
                                <span className="text-white/40 text-xs px-2 py-1 bg-white/5 rounded-full border border-white/10 border-white/10 uppercase tracking-tighter">
                                  {sub.source || "inconnu"}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-white/40 text-xs">
                                {new Date(sub.created_at).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                              </td>
                              <td className="py-4 px-4 text-right">
                                <button
                                  onClick={() => deleteItem("newsletter_subscriptions", sub.id)}
                                  className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all ml-auto focus:outline-none"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  }
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Blog Post Form */}
                  <div className="bg-white/5 border border-eagle-gold/20 p-6 rounded-2xl">
                    <h3 className="text-white font-bold mb-4">Nouvelle Publication</h3>
                    <form onSubmit={submitBlogPost} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Titre de l'article"
                          value={blogForm.title}
                          onChange={e => setBlogForm({ ...blogForm, title: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white"
                          required
                        />
                        <select
                          value={blogForm.category}
                          onChange={e => setBlogForm({ ...blogForm, category: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white"
                        >
                          <option value="Actualité">Actualité</option>
                          <option value="Projet">Projet</option>
                          <option value="Conseil">Conseil</option>
                          <option value="Coulisses">Coulisses</option>
                        </select>
                      </div>
                      <textarea
                        placeholder="Description / Contenu (comme sur Facebook)"
                        value={blogForm.content}
                        onChange={e => setBlogForm({ ...blogForm, content: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white h-32"
                        required
                      />
                      <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="relative w-full md:w-auto">
                          <input
                            type="file"
                            accept="image/*,video/*"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="blog-upload"
                          />
                          <label
                            htmlFor="blog-upload"
                            className="flex items-center justify-center gap-2 px-6 py-2 bg-white/5 border border-eagle-gold/30 rounded-xl text-white cursor-pointer hover:bg-eagle-gold/10 transition-all"
                          >
                            {uploading ? "Téléversement..." : "Ajouter Image/Vidéo"}
                          </label>
                        </div>
                        {blogForm.media_url && (
                          <div className="text-green-500 text-xs flex items-center gap-1">
                            <Check size={14} /> Fichier prêt
                          </div>
                        )}
                        <button
                          type="submit"
                          disabled={uploading || !blogForm.title}
                          className="w-full md:w-auto md:ml-auto bg-eagle-gold text-eagle-black font-bold px-8 py-2 rounded-xl hover:bg-eagle-yellow disabled:opacity-50"
                        >
                          Publier maintenant
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Blog Posts List */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    {blogPosts.length === 0 ? <p className="text-white/20 text-center py-20 col-span-2">Aucun article publié</p> :
                      blogPosts.map((post) => (
                        <div key={post.id} className="bg-white/5 border border-white/5 p-4 rounded-2xl group relative">
                          <div className="flex gap-4">
                            {post.media_url && (
                              <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-black">
                                {post.media_type === 'video' ? (
                                  <div className="w-full h-full flex items-center justify-center bg-eagle-gold/10"><Eye className="text-eagle-gold" /></div>
                                ) : (
                                  <img src={post.media_url} alt="" className="w-full h-full object-cover" />
                                )}
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <span className="text-[10px] text-eagle-gold uppercase font-bold tracking-widest">{post.category}</span>
                              <h4 className="text-white font-bold truncate">{post.title}</h4>
                              <p className="text-white/40 text-xs line-clamp-2 mt-1">{post.content}</p>
                              <p className="text-white/20 text-[9px] mt-2 italic">{new Date(post.created_at).toLocaleDateString()}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => deleteItem("blog_posts", post.id)}
                            className="absolute top-2 right-2 w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500 hover:text-white"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
