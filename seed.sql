-- ============================================================
-- Swachh Mitra – Seed Data
-- Run AFTER schema.sql in: Supabase Dashboard → SQL Editor
-- This inserts the same 18 bins, 7 areas, 10 tasks from data.js
-- ============================================================

-- ── BINS ──────────────────────────────────────────────────────
INSERT INTO bins (bin_number, area_name, location, waste_type, fill_level, last_pickup_at) VALUES
  ('101', 'Gomti Nagar',  'Near Park Gate, Sector 2',    'Wet', 42, NOW() - INTERVAL '6 hours'),
  ('102', 'Aliganj',      'Main Market, Block C',         'Dry', 68, NOW() - INTERVAL '5 hours'),
  ('103', 'Indira Nagar', 'Community Centre Road',        'Wet', 91, NOW() - INTERVAL '21 hours'),
  ('104', 'Hazratganj',   'Hazratganj Chowk, Near GPO',  'Wet', 78, NOW() - INTERVAL '3 hours'),
  ('105', 'Alambagh',     'Bus Stand Approach Road',      'Dry', 55, NOW() - INTERVAL '6 hours'),
  ('106', 'Chowk',        'Old City Market, Aminabad',    'Wet', 87, NOW() - INTERVAL '20 hours'),
  ('107', 'Rajajipuram',  'Sector 7, Near School',        'Dry', 32, NOW() - INTERVAL '7 hours'),
  ('108', 'Gomti Nagar',  'Viram Khand, Block B',         'Wet', 74, NOW() - INTERVAL '4 hours'),
  ('109', 'Aliganj',      'Sector E, Near Temple',        'Dry', 20, NOW() - INTERVAL '2 hours'),
  ('110', 'Indira Nagar', 'Munshipulia, Ring Road',       'Wet', 83, NOW() - INTERVAL '19 hours'),
  ('111', 'Hazratganj',   'MG Road, Opp. HDFC Bank',     'Dry', 61, NOW() - INTERVAL '6 hours'),
  ('112', 'Alambagh',     'Prem Nagar, Near Clinic',      'Wet', 47, NOW() - INTERVAL '4 hours'),
  ('113', 'Chowk',        'Nakhas Market',                'Dry', 93, NOW() - INTERVAL '22 hours'),
  ('114', 'Rajajipuram',  'Rajajipuram Bus Stand',        'Wet', 38, NOW() - INTERVAL '5 hours'),
  ('115', 'Gomti Nagar',  'Vikas Nagar Chowk',            'Dry', 72, NOW() - INTERVAL '7 hours'),
  ('116', 'Aliganj',      'Block K, Main Road',           'Wet', 88, NOW() - INTERVAL '18 hours'),
  ('117', 'Indira Nagar', 'Sector 14, Near Park',         'Dry', 55, NOW() - INTERVAL '2 hours'),
  ('118', 'Hazratganj',   'Lalbagh Chowk',                'Wet', 87, NOW() - INTERVAL '20 hours');

-- ── AREAS ─────────────────────────────────────────────────────
INSERT INTO areas (name, ward, city, cleanliness_score, segregation_score, collection_score, overflow_score, open_dumping_score, trend, complaints_total, complaints_resolved, description, highlights) VALUES
  ('Gomti Nagar', 'Ward 12', 'Lucknow', 94, 96, 95, 92, 4,  'up',   48, 46,
   'Gomti Nagar is Lucknow''s premier residential and commercial hub, consistently ranking at the top for cleanliness and waste management practices.',
   ARRAY['Best segregation in city', 'Zero overflow incidents this week', '96% complaints resolved']),

  ('Aliganj', 'Ward 8', 'Lucknow', 91, 93, 90, 89, 6,  'up',   62, 58,
   'Aliganj is a densely populated residential area with active citizen participation in waste segregation and reporting.',
   ARRAY['Strong community participation', 'Improved segregation by 8% this month']),

  ('Indira Nagar', 'Ward 15', 'Lucknow', 89, 88, 91, 86, 8,  'down', 74, 68,
   'Indira Nagar is a large mixed-use neighbourhood with good collection efficiency but facing overflow pressure at peak times.',
   ARRAY['High collection efficiency (91%)', 'Slight decline due to festival waste']),

  ('Hazratganj', 'Ward 5', 'Lucknow', 86, 85, 87, 84, 10, 'up',   55, 49,
   'Hazratganj is Lucknow''s historic commercial heart. Higher footfall creates unique waste challenges that the team is actively addressing.',
   ARRAY['Improving weekly trend (+6 pts)', 'Commercial area under active monitoring']),

  ('Alambagh', 'Ward 18', 'Lucknow', 82, 80, 83, 81, 14, 'same', 80, 70,
   'Alambagh is a transit-heavy area with stable but stagnant performance. Community programs are being planned to push scores higher.',
   ARRAY['Stable performance', 'Open dumping reduction needed near bus stand']),

  ('Chowk', 'Ward 3', 'Lucknow', 74, 72, 76, 70, 22, 'down', 120, 98,
   'Chowk is Lucknow''s historic old city. Dense lanes and commercial activity make waste management challenging, but improvement programs are underway.',
   ARRAY['Old city area — complex logistics', 'Complaint resolution improving']),

  ('Rajajipuram', 'Ward 21', 'Lucknow', 69, 68, 71, 66, 28, 'up',   95, 76,
   'Rajajipuram is showing the strongest improvement trajectory this month. New waste collection routes and citizen drives are already showing results.',
   ARRAY['Strong upward trend (+7 pts)', 'New collection routes added this week']);

-- ── COLLECTION TASKS ──────────────────────────────────────────
-- Note: bin_ids 1-18 map to the bins inserted above in order
INSERT INTO collection_tasks (bin_id, priority, assigned_team, status, reason, created_at) VALUES
  (3,  'High',   'Team A', 'Pending',     'Critical fill level',                NOW() - INTERVAL '2 hours'),
  (6,  'High',   'Team B', 'In Progress', 'Predicted overflow in 30 min',        NOW() - INTERVAL '1 hour 45 min'),
  (13, 'High',   NULL,     'Pending',     'Critical fill level',                NOW() - INTERVAL '2 hours 15 min'),
  (4,  'Medium', 'Team C', 'In Progress', 'Predicted overflow in 1 hr 20 min',  NOW() - INTERVAL '1 hour 30 min'),
  (18, 'High',   NULL,     'Pending',     'Predicted overflow in 35 min',        NOW() - INTERVAL '1 hour 15 min'),
  (10, 'Medium', 'Team A', 'Pending',     'Predicted overflow in 50 min',        NOW() - INTERVAL '1 hour'),
  (16, 'High',   'Team B', 'In Progress', 'Predicted overflow in 25 min',        NOW() - INTERVAL '50 minutes'),
  (8,  'Low',    NULL,     'Pending',     'Predicted overflow in 2 hr 45 min',  NOW() - INTERVAL '30 minutes');

-- Completed tasks
INSERT INTO collection_tasks (bin_id, priority, assigned_team, status, reason, created_at, completed_at) VALUES
  (2,  'Low', 'Team D', 'Completed', 'Scheduled pickup', NOW() - INTERVAL '5 hours', NOW() - INTERVAL '4 hours 15 min'),
  (5,  'Low', 'Team C', 'Completed', 'Scheduled pickup', NOW() - INTERVAL '6 hours', NOW() - INTERVAL '5 hours 20 min');

-- ── AREA SCORE HISTORY (last 7 days for weekly chart) ─────────
-- Get area IDs first — they are inserted in order 1..7 above
-- Gomti Nagar (id=1): [87,89,90,91,92,93,94]
INSERT INTO area_score_history (area_id, cleanliness_score, recorded_at) VALUES
  (1, 87, CURRENT_DATE - 6), (1, 89, CURRENT_DATE - 5), (1, 90, CURRENT_DATE - 4),
  (1, 91, CURRENT_DATE - 3), (1, 92, CURRENT_DATE - 2), (1, 93, CURRENT_DATE - 1),
  (1, 94, CURRENT_DATE),
-- Aliganj (id=2): [84,85,87,88,89,90,91]
  (2, 84, CURRENT_DATE - 6), (2, 85, CURRENT_DATE - 5), (2, 87, CURRENT_DATE - 4),
  (2, 88, CURRENT_DATE - 3), (2, 89, CURRENT_DATE - 2), (2, 90, CURRENT_DATE - 1),
  (2, 91, CURRENT_DATE),
-- Indira Nagar (id=3): [91,90,91,90,89,89,89]
  (3, 91, CURRENT_DATE - 6), (3, 90, CURRENT_DATE - 5), (3, 91, CURRENT_DATE - 4),
  (3, 90, CURRENT_DATE - 3), (3, 89, CURRENT_DATE - 2), (3, 89, CURRENT_DATE - 1),
  (3, 89, CURRENT_DATE),
-- Hazratganj (id=4): [80,81,82,83,84,85,86]
  (4, 80, CURRENT_DATE - 6), (4, 81, CURRENT_DATE - 5), (4, 82, CURRENT_DATE - 4),
  (4, 83, CURRENT_DATE - 3), (4, 84, CURRENT_DATE - 2), (4, 85, CURRENT_DATE - 1),
  (4, 86, CURRENT_DATE),
-- Alambagh (id=5): [82,81,82,82,81,82,82]
  (5, 82, CURRENT_DATE - 6), (5, 81, CURRENT_DATE - 5), (5, 82, CURRENT_DATE - 4),
  (5, 82, CURRENT_DATE - 3), (5, 81, CURRENT_DATE - 2), (5, 82, CURRENT_DATE - 1),
  (5, 82, CURRENT_DATE),
-- Chowk (id=6): [78,77,76,75,74,74,74]
  (6, 78, CURRENT_DATE - 6), (6, 77, CURRENT_DATE - 5), (6, 76, CURRENT_DATE - 4),
  (6, 75, CURRENT_DATE - 3), (6, 74, CURRENT_DATE - 2), (6, 74, CURRENT_DATE - 1),
  (6, 74, CURRENT_DATE),
-- Rajajipuram (id=7): [62,63,64,66,67,68,69]
  (7, 62, CURRENT_DATE - 6), (7, 63, CURRENT_DATE - 5), (7, 64, CURRENT_DATE - 4),
  (7, 66, CURRENT_DATE - 3), (7, 67, CURRENT_DATE - 2), (7, 68, CURRENT_DATE - 1),
  (7, 69, CURRENT_DATE);
