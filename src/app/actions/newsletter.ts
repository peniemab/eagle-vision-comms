"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function subscribeToNewsletter(email: string, source: string = "general") {
  try {
    const { error } = await supabase
      .from("newsletter_subscriptions")
      .insert([
        { 
          email: email.toLowerCase(), 
          source: source 
        }
      ]);

    if (error) {
      if (error.code === "23505") {
        return { success: true, message: "Déjà inscrit !" };
      }
      throw error;
    }

    return { success: true, message: "Inscription réussie !" };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return { success: false, message: "Une erreur est survenue." };
  }
}
