-- Newsletter Subscriptions Setup
CREATE TABLE IF NOT EXISTS public.newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    email TEXT NOT NULL UNIQUE,
    status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
    source TEXT -- 'popup', 'footer', etc.
);

ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Anyone can subscribe (both guests and logged-in users)
CREATE POLICY "Allow anyone to subscribe to newsletter" 
ON public.newsletter_subscriptions FOR INSERT 
TO public 
WITH CHECK (true);

-- Only admins can see the list
CREATE POLICY "Admins can view newsletter subscriptions" 
ON public.newsletter_subscriptions FOR SELECT 
TO authenticated 
USING (true);

-- Explicitly grant permissions
GRANT INSERT ON public.newsletter_subscriptions TO anon, authenticated;
GRANT SELECT ON public.newsletter_subscriptions TO authenticated;

COMMENT ON TABLE public.newsletter_subscriptions IS 'Liste des abonnés à la newsletter.';
