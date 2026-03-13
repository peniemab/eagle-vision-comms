-- Eagle Vision Comms DRC - Supabase Setup Script

-- 1. Create table for contact messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service TEXT,
    budget TEXT,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived')),
    notes TEXT
);

-- 2. Create table for dynamic testimonials
CREATE TABLE IF NOT EXISTS public.testimonials (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    name TEXT NOT NULL,
    role TEXT,
    company TEXT,
    avatar TEXT,
    text TEXT NOT NULL,
    rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
    service TEXT,
    is_approved BOOLEAN DEFAULT false,
    is_featured BOOLEAN DEFAULT false
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies

-- Policies for contact_messages
-- Allow anyone to insert (anonymous contact form submissions)
CREATE POLICY "Allow anonymous insert for contact form" 
ON public.contact_messages FOR INSERT 
TO anon 
WITH CHECK (true);

-- Only authenticated admins can view/update messages
CREATE POLICY "Admins can view messages" 
ON public.contact_messages FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Admins can update messages" 
ON public.contact_messages FOR UPDATE 
TO authenticated 
USING (true);

-- Policies for testimonials
-- Allow anyone to insert an unapproved testimonial
CREATE POLICY "Allow anonymous insert for testimonials" 
ON public.testimonials FOR INSERT 
TO anon 
WITH CHECK (true);

-- Allow anyone to view approved testimonials
CREATE POLICY "Anyone can view approved testimonials" 
ON public.testimonials FOR SELECT 
TO anon 
USING (is_approved = true);

-- Only authenticated admins can manage testimonials
CREATE POLICY "Admins can view all testimonials" 
ON public.testimonials FOR SELECT 
TO authenticated 
USING (true);

CREATE POLICY "Admins can update testimonials" 
ON public.testimonials FOR UPDATE 
TO authenticated 
USING (true);

CREATE POLICY "Admins can delete testimonials" 
ON public.testimonials FOR DELETE 
TO authenticated 
USING (true);

-- 5. Helper comments
COMMENT ON TABLE public.contact_messages IS 'Stockage des messages envoyés via le formulaire de contact.';
COMMENT ON TABLE public.testimonials IS 'Stockage des avis clients déposés via le site.';
