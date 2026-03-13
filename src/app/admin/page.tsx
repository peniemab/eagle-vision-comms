"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Check, X, Mail, MessageSquare, Trash2, ShieldCheck, Eye, LogIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState<"messages" | "testimonials">("messages");
  const [messages, setMessages] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Simplified auth with password from env (check on client for demo)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin-eagle-vision-2026") {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert("Mot de passe incorrect");
    }
  };

  const fetchData = async () => {
    setLoading(true);
    const { data: msgs } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false });
    const { data: tstms } = await supabase.from("testimonials").select("*").order("created_at", { ascending: false });
    if (msgs) setMessages(msgs);
    if (tstms) setTestimonials(tstms);
    setLoading(false);
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
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-eagle-gold/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-eagle-gold/50"
            />
            <button type="submit" className="w-full bg-eagle-gold text-eagle-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-eagle-yellow transition-all">
              <LogIn size={18} /> Connexion
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
          </div>
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
              ) : (
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
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
