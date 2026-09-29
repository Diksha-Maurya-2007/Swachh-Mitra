-- ============================================================
-- Swachh Mitra – Supabase Database Schema
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- ============================================================

-- TABLE 1: bins
-- Stores every community waste bin
CREATE TABLE IF NOT EXISTS bins (
  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  bin_number      TEXT NOT NULL UNIQUE,
  area_name       TEXT NOT NULL,
  location        TEXT NOT NULL,
  waste_type      TEXT NOT NULL CHECK (waste_type IN ('Wet', 'Dry')),
  fill_level      INTEGER NOT NULL DEFAULT 0 CHECK (fill_level >= 0 AND fill_level <= 100),
  last_pickup_at  TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT NOW()
);

-- TABLE 2: areas
-- Stores each neighbourhood/ward being ranked
CREATE TABLE IF NOT EXISTS areas (
  id                    BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name                  TEXT NOT NULL UNIQUE,
  ward                  TEXT NOT NULL,
  city                  TEXT NOT NULL DEFAULT 'Lucknow',
  cleanliness_score     INTEGER NOT NULL DEFAULT 0,
  segregation_score     INTEGER NOT NULL DEFAULT 0,
  collection_score      INTEGER NOT NULL DEFAULT 0,
  overflow_score        INTEGER NOT NULL DEFAULT 0,
  open_dumping_score    INTEGER NOT NULL DEFAULT 0,
  trend                 TEXT NOT NULL DEFAULT 'same' CHECK (trend IN ('up', 'down', 'same')),
  complaints_total      INTEGER NOT NULL DEFAULT 0,
  complaints_resolved   INTEGER NOT NULL DEFAULT 0,
  description           TEXT,
  highlights            TEXT[],          -- array of short highlight strings
  updated_at            TIMESTAMPTZ DEFAULT NOW()
);

-- TABLE 3: collection_tasks
-- Stores each pickup task
CREATE TABLE IF NOT EXISTS collection_tasks (
  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  bin_id          BIGINT NOT NULL REFERENCES bins(id) ON DELETE CASCADE,
  priority        TEXT NOT NULL DEFAULT 'Medium' CHECK (priority IN ('High', 'Medium', 'Low')),
  assigned_team   TEXT,                 -- null = unassigned
  status          TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Pending', 'In Progress', 'Completed')),
  reason          TEXT,
  created_at      TIMESTAMPTZ DEFAULT NOW(),
  completed_at    TIMESTAMPTZ          -- null until done
);

-- TABLE 4: collection_history
-- Permanent log of every bin collection event
CREATE TABLE IF NOT EXISTS collection_history (
  id                          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  bin_id                      BIGINT NOT NULL REFERENCES bins(id) ON DELETE CASCADE,
  collected_at                TIMESTAMPTZ DEFAULT NOW(),
  collected_by                TEXT,        -- team name
  fill_level_at_collection    INTEGER,     -- fill level before emptying
  task_id                     BIGINT REFERENCES collection_tasks(id)
);

-- TABLE 5: area_score_history
-- Daily snapshot of area cleanliness scores (powers the weekly trend chart)
CREATE TABLE IF NOT EXISTS area_score_history (
  id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  area_id             BIGINT NOT NULL REFERENCES areas(id) ON DELETE CASCADE,
  cleanliness_score   INTEGER NOT NULL,
  recorded_at         DATE NOT NULL DEFAULT CURRENT_DATE,
  UNIQUE(area_id, recorded_at)   -- one record per area per day
);

-- ── Indexes for common queries ─────────────────────────────────
CREATE INDEX IF NOT EXISTS idx_bins_area ON bins(area_name);
CREATE INDEX IF NOT EXISTS idx_bins_fill_level ON bins(fill_level);
CREATE INDEX IF NOT EXISTS idx_tasks_status ON collection_tasks(status);
CREATE INDEX IF NOT EXISTS idx_tasks_bin_id ON collection_tasks(bin_id);
CREATE INDEX IF NOT EXISTS idx_history_bin_id ON collection_history(bin_id);
CREATE INDEX IF NOT EXISTS idx_score_history_area ON area_score_history(area_id, recorded_at DESC);

-- ── Row Level Security (RLS) ───────────────────────────────────
-- For MVP: allow public read access to everything (no login required yet).
-- We will add proper auth-based policies when login is implemented.

ALTER TABLE bins                ENABLE ROW LEVEL SECURITY;
ALTER TABLE areas               ENABLE ROW LEVEL SECURITY;
ALTER TABLE collection_tasks    ENABLE ROW LEVEL SECURITY;
ALTER TABLE collection_history  ENABLE ROW LEVEL SECURITY;
ALTER TABLE area_score_history  ENABLE ROW LEVEL SECURITY;

-- Public read access (anon key can read all tables)
CREATE POLICY "Public read bins"              ON bins               FOR SELECT USING (true);
CREATE POLICY "Public read areas"             ON areas              FOR SELECT USING (true);
CREATE POLICY "Public read collection_tasks"  ON collection_tasks   FOR SELECT USING (true);
CREATE POLICY "Public read history"           ON collection_history FOR SELECT USING (true);
CREATE POLICY "Public read score_history"     ON area_score_history FOR SELECT USING (true);

-- Public write access for MVP (anon key can insert/update — lock down later with auth)
CREATE POLICY "Public write bins"             ON bins               FOR ALL    USING (true);
CREATE POLICY "Public write tasks"            ON collection_tasks   FOR ALL    USING (true);
CREATE POLICY "Public write history"          ON collection_history FOR ALL    USING (true);
CREATE POLICY "Public write score_history"    ON area_score_history FOR ALL    USING (true);
CREATE POLICY "Public write areas"            ON areas              FOR ALL    USING (true);
