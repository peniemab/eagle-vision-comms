"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}) {
  try {
    const { data, error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
      ]);

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
