"use server";

import { supabase } from "@/lib/supabase";

export async function submitTestimonial(formData: {
  name: string;
  role?: string;
  company?: string;
  text: string;
  rating: number;
  service: string;
}) {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .insert([
        {
          name: formData.name,
          role: formData.role,
          company: formData.company,
          text: formData.text,
          rating: formData.rating,
          service: formData.service,
          is_approved: false, // Default to false for moderation
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Action error:", err);
    return { success: false, error: "Une erreur inattendue est survenue." };
  }
}

export async function getApprovedTestimonials() {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .eq("is_approved", true)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return [];
    }

    return data;
  } catch (err) {
    console.error("Action error:", err);
    return [];
  }
}
