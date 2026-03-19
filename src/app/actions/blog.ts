"use server";

import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

// Use a separate client with service role for certain operations if needed, 
// but for standard public/auth operations we use the shared client.

export async function getBlogPosts() {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return { success: true, data };
  } catch (error: any) {
    console.error("Error fetching blog posts:", error);
    return { success: false, error: error.message };
  }
}

export async function createBlogPost(formData: {
  title: string;
  content: string;
  category: string;
  media_url?: string;
  media_type?: "image" | "video";
}) {
  try {
    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          title: formData.title,
          content: formData.content,
          category: formData.category,
          media_url: formData.media_url,
          media_type: formData.media_type,
          author: "Eagle Vision",
        },
      ])
      .select();

    if (error) throw error;
    return { success: true, data };
  } catch (error: any) {
    console.error("Error creating blog post:", error);
    return { success: false, error: error.message };
  }
}

export async function deleteBlogPost(id: string) {
  try {
    const { error } = await supabase
      .from("blog_posts")
      .delete()
      .eq("id", id);

    if (error) throw error;
    return { success: true };
  } catch (error: any) {
    console.error("Error deleting blog post:", error);
    return { success: false, error: error.message };
  }
}

export async function uploadMedia(file: File) {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `blog/${fileName}`;

    const { error: uploadError, data } = await supabase.storage
      .from('blog-media')
      .upload(filePath, file);

    if (uploadError) throw uploadError;

    const { data: { publicUrl } } = supabase.storage
      .from('blog-media')
      .getPublicUrl(filePath);

    return { success: true, url: publicUrl };
  } catch (error: any) {
    console.error("Error uploading media:", error);
    return { success: false, error: error.message };
  }
}
