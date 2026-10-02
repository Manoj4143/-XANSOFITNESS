-- ==============================================================================
-- Xanso Digital Yoga & Wellness Platform - Core Database Schema
-- Architecture & Security: Enforcing ARCHITECTURE.md and SECURITY.md
-- Engine: PostgreSQL 15+ (Supabase) with Row Level Security (RLS)
-- ==============================================================================

-- 1. Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 2. Profiles Table
-- Tracks member wellness goals, subscription tier, and gamified streak progression
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  avatar_url TEXT,
  wellness_goal TEXT DEFAULT 'Holistic Mobility & Breath' NOT NULL,
  experience_level TEXT DEFAULT 'All Levels' CHECK (experience_level IN ('Beginner', 'Intermediate', 'Advanced', 'All Levels')),
  subscription_status TEXT DEFAULT 'trial' CHECK (subscription_status IN ('trial', 'group', 'therapy_1on1', 'corporate', 'inactive')),
  streak_count INTEGER DEFAULT 0 NOT NULL,
  total_minutes_practiced INTEGER DEFAULT 0 NOT NULL,
  last_practice_date DATE,
  unlocked_badges TEXT[] DEFAULT ARRAY['Welcome Beacon']::TEXT[],
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 3. Programs Table (Sanctuary Video & Asana Library)
-- Publicly accessible class and practice metadata
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  instructor TEXT NOT NULL,
  duration_minutes INTEGER NOT NULL,
  intensity TEXT NOT NULL CHECK (intensity IN ('Gentle', 'Moderate', 'Vigorous')),
  focus TEXT NOT NULL CHECK (focus IN ('Mobility', 'Breath', 'Alignment', 'Stillness')),
  category TEXT NOT NULL CHECK (category IN ('Vinyasa Flow', 'Restorative Yin', 'Meditation', '1:1 Yoga', 'Desk Reset')),
  level TEXT DEFAULT 'All Levels' NOT NULL,
  thumbnail_url TEXT,
  video_playback_id TEXT, -- Mux or Daily.co stream asset identifier
  is_published BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 4. Practice Sessions Log
-- Tracks historical completions for streak calculations & audit compliance
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.practice_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  program_id UUID REFERENCES public.programs(id) ON DELETE SET NULL,
  duration_minutes INTEGER NOT NULL,
  completed_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 5. AI Chat History
-- Stores contextual dialogue between user and the Xanso Sanctuary Guide
-- ==============================================================================
CREATE TABLE IF NOT EXISTS public.ai_chat_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL CHECK (role IN ('user', 'assistant', 'system')),
  content TEXT NOT NULL,
  intent TEXT,
  recommended_program_id UUID REFERENCES public.programs(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 6. Row Level Security (RLS) Configuration
-- Strictly enforces SECURITY.md guidelines: zero client trust, database-level isolation
-- ==============================================================================

-- Enable RLS across all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.practice_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ai_chat_history ENABLE ROW LEVEL SECURITY;

-- 6.1 PROFILES POLICIES
-- Users can only read their own profile
CREATE POLICY "Users can read own profile"
  ON public.profiles
  FOR SELECT
  USING (auth.uid() = id);

-- Users can only update their own profile
CREATE POLICY "Users can update own profile"
  ON public.profiles
  FOR UPDATE
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 6.2 PROGRAMS POLICIES
-- Programs are publicly readable by all authenticated and unauthenticated guests
CREATE POLICY "Programs are publicly readable"
  ON public.programs
  FOR SELECT
  USING (is_published = true);

-- Program creation / updates restricted to Service Role / Admin
CREATE POLICY "Admins can manage programs"
  ON public.programs
  FOR ALL
  USING (auth.jwt() ->> 'role' = 'service_role');

-- 6.3 PRACTICE SESSIONS POLICIES
-- Users can only view their own completed sessions
CREATE POLICY "Users can view own practice sessions"
  ON public.practice_sessions
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own completed session
CREATE POLICY "Users can insert own practice session"
  ON public.practice_sessions
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- 6.4 AI CHAT HISTORY POLICIES
-- Users can only query their own AI concierge conversation history
CREATE POLICY "Users can read own chat history"
  ON public.ai_chat_history
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own conversation turns
CREATE POLICY "Users can insert own chat turn"
  ON public.ai_chat_history
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ==============================================================================
-- 7. Automated Profile Synchronization Trigger
-- Automatically bootstraps public.profiles whenever a new user signs up in auth.users
-- ==============================================================================
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, subscription_status)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url',
    'trial'
  );
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ==============================================================================
-- 8. Seed Initial Sanctuary Programs
-- ==============================================================================
INSERT INTO public.programs (slug, title, description, instructor, duration_minutes, intensity, focus, category, level)
VALUES
  ('morning-vinyasa-flow', 'Morning Vinyasa Flow', 'Dynamic sequences harmonizing continuous breath with fluid asana transitions.', 'Elena Rostova', 45, 'Vigorous', 'Mobility', 'Vinyasa Flow', 'All Levels'),
  ('deep-yin-release', 'Deep Yin Release', 'Restorative passive holds targeting connective fascial decompression.', 'Devan Nair', 60, 'Gentle', 'Stillness', 'Restorative Yin', 'Restorative'),
  ('desk-posture-reset', '15-Min Desk Posture Reset', 'Targeted ergonomic spine decompression for desk-bound professionals.', 'Maya Lin', 15, 'Moderate', 'Alignment', 'Desk Reset', 'Quick Practice'),
  ('chakra-meditation', 'Chakra Meditation', 'Centering pranayama breath control and tranquil meditative quietude.', 'Julian Vance', 30, 'Gentle', 'Breath', 'Meditation', 'Mindfulness')
ON CONFLICT (slug) DO NOTHING;
