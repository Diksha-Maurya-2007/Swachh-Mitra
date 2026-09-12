// ============================================================
// Swachh Mitra – Centralized Data Store
// ============================================================
// HOW THIS WORKS:
// 1. AppState starts immediately with local demo data (no blank screens)
// 2. AppState.init() tries to load real data from Supabase in background
// 3. When Supabase data arrives, state arrays are updated in-place and
//    a 'data-loaded' event fires so pages re-render automatically
// 4. All write actions (markCollected, assignTeam, etc.) update local
//    state immediately AND persist to Supabase asynchronously
// 5. If Supabase is not configured, everything works exactly as before
//    using the local demo data below
// ============================================================

const AppState = (() => {

  // ── LOCAL FALLBACK DATA ─────────────────────────────────────
  // Used immediately on page load and as fallback when Supabase
  // is not configured. Replace with real data via Supabase.

  const LOCAL_BINS = [
    { id: 1,  binNumber: '101', area: 'Gomti Nagar',  location: 'Near Park Gate, Sector 2',     wasteType: 'Wet', fillLevel: 42, lastPickup: 'Today, 08:15 AM', predictedFullTime: null,          collectionHistory: ['Yesterday, 07:00 AM', '2 days ago, 08:30 AM', '3 days ago, 07:45 AM'] },
    { id: 2,  binNumber: '102', area: 'Aliganj',      location: 'Main Market, Block C',          wasteType: 'Dry', fillLevel: 68, lastPickup: 'Today, 09:00 AM', predictedFullTime: '4 hr 10 min', collectionHistory: ['Yesterday, 09:00 AM', '2 days ago, 08:00 AM'] },
    { id: 3,  binNumber: '103', area: 'Indira Nagar', location: 'Community Centre Road',         wasteType: 'Wet', fillLevel: 91, lastPickup: 'Yesterday, 06:30 PM', predictedFullTime: 'Overdue',  collectionHistory: ['2 days ago, 06:30 PM', '3 days ago, 07:00 PM'] },
    { id: 4,  binNumber: '104', area: 'Hazratganj',   location: 'Hazratganj Chowk, Near GPO',   wasteType: 'Wet', fillLevel: 78, lastPickup: 'Today, 10:30 AM', predictedFullTime: '1 hr 20 min', collectionHistory: ['Yesterday, 10:30 AM', '2 days ago, 11:00 AM'] },
    { id: 5,  binNumber: '105', area: 'Alambagh',     location: 'Bus Stand Approach Road',       wasteType: 'Dry', fillLevel: 55, lastPickup: 'Today, 07:45 AM', predictedFullTime: '6 hr 30 min', collectionHistory: ['Yesterday, 08:00 AM'] },
    { id: 6,  binNumber: '106', area: 'Chowk',        location: 'Old City Market, Aminabad',     wasteType: 'Wet', fillLevel: 87, lastPickup: 'Yesterday, 04:00 PM', predictedFullTime: '30 min',  collectionHistory: ['2 days ago, 04:00 PM'] },
    { id: 7,  binNumber: '107', area: 'Rajajipuram',  location: 'Sector 7, Near School',         wasteType: 'Dry', fillLevel: 32, lastPickup: 'Today, 11:00 AM', predictedFullTime: null,          collectionHistory: ['Yesterday, 11:00 AM'] },
    { id: 8,  binNumber: '108', area: 'Gomti Nagar',  location: 'Viram Khand, Block B',          wasteType: 'Wet', fillLevel: 74, lastPickup: 'Today, 09:30 AM', predictedFullTime: '2 hr 45 min', collectionHistory: ['Yesterday, 09:30 AM'] },
    { id: 9,  binNumber: '109', area: 'Aliganj',      location: 'Sector E, Near Temple',         wasteType: 'Dry', fillLevel: 20, lastPickup: 'Today, 12:00 PM', predictedFullTime: null,          collectionHistory: ['Yesterday, 12:00 PM'] },
    { id: 10, binNumber: '110', area: 'Indira Nagar', location: 'Munshipulia, Ring Road',        wasteType: 'Wet', fillLevel: 83, lastPickup: 'Yesterday, 05:00 PM', predictedFullTime: '50 min',  collectionHistory: ['2 days ago, 05:00 PM'] },
    { id: 11, binNumber: '111', area: 'Hazratganj',   location: 'MG Road, Opp. HDFC Bank',       wasteType: 'Dry', fillLevel: 61, lastPickup: 'Today, 08:00 AM', predictedFullTime: '5 hr 00 min', collectionHistory: ['Yesterday, 08:00 AM'] },
    { id: 12, binNumber: '112', area: 'Alambagh',     location: 'Prem Nagar, Near Clinic',       wasteType: 'Wet', fillLevel: 47, lastPickup: 'Today, 10:00 AM', predictedFullTime: null,          collectionHistory: ['Yesterday, 10:00 AM'] },
    { id: 13, binNumber: '113', area: 'Chowk',        location: 'Nakhas Market',                 wasteType: 'Dry', fillLevel: 93, lastPickup: 'Yesterday, 02:00 PM', predictedFullTime: 'Overdue',  collectionHistory: ['2 days ago, 02:00 PM'] },
    { id: 14, binNumber: '114', area: 'Rajajipuram',  location: 'Rajajipuram Bus Stand',         wasteType: 'Wet', fillLevel: 38, lastPickup: 'Today, 09:15 AM', predictedFullTime: null,          collectionHistory: ['Yesterday, 09:15 AM'] },
    { id: 15, binNumber: '115', area: 'Gomti Nagar',  location: 'Vikas Nagar Chowk',             wasteType: 'Dry', fillLevel: 72, lastPickup: 'Today, 07:00 AM', predictedFullTime: '3 hr 00 min', collectionHistory: ['Yesterday, 07:00 AM'] },
    { id: 16, binNumber: '116', area: 'Aliganj',      location: 'Block K, Main Road',            wasteType: 'Wet', fillLevel: 88, lastPickup: 'Yesterday, 06:00 PM', predictedFullTime: '25 min',  collectionHistory: ['2 days ago, 06:00 PM'] },
    { id: 17, binNumber: '117', area: 'Indira Nagar', location: 'Sector 14, Near Park',          wasteType: 'Dry', fillLevel: 55, lastPickup: 'Today, 11:30 AM', predictedFullTime: null,          collectionHistory: ['Yesterday, 11:30 AM'] },
    { id: 18, binNumber: '118', area: 'Hazratganj',   location: 'Lalbagh Chowk',                 wasteType: 'Wet', fillLevel: 87, lastPickup: 'Yesterday, 03:30 PM', predictedFullTime: '35 min',  collectionHistory: ['2 days ago, 03:30 PM'] },
  ];

  const LOCAL_AREAS = [
    { id: 1, name: 'Gomti Nagar',  ward: 'Ward 12', cleanlinessScore: 94, segregationScore: 96, collectionScore: 95, overflowScore: 92, openDumpingScore: 4,  trend: 'up',   city: 'Lucknow',
      weeklyScores: [87,89,90,91,92,93,94], complaintsTotal: 48,  complaintsResolved: 46, complaintsRate: 96,
      binsTotal: 4, binsNormal: 3, nearlyFull: 1, pickupRequired: 0,
      highlights: ['Best segregation in city', 'Zero overflow incidents this week', '96% complaints resolved'],
      description: "Gomti Nagar is Lucknow's premier residential and commercial hub, consistently ranking at the top for cleanliness and waste management practices.",
    },
    { id: 2, name: 'Aliganj',      ward: 'Ward 8',  cleanlinessScore: 91, segregationScore: 93, collectionScore: 90, overflowScore: 89, openDumpingScore: 6,  trend: 'up',   city: 'Lucknow',
      weeklyScores: [84,85,87,88,89,90,91], complaintsTotal: 62,  complaintsResolved: 58, complaintsRate: 94,
      binsTotal: 3, binsNormal: 2, nearlyFull: 0, pickupRequired: 1,
      highlights: ['Strong community participation', 'Improved segregation by 8% this month'],
      description: 'Aliganj is a densely populated residential area with active citizen participation in waste segregation and reporting.',
    },
    { id: 3, name: 'Indira Nagar', ward: 'Ward 15', cleanlinessScore: 89, segregationScore: 88, collectionScore: 91, overflowScore: 86, openDumpingScore: 8,  trend: 'down', city: 'Lucknow',
      weeklyScores: [91,90,91,90,89,89,89], complaintsTotal: 74,  complaintsResolved: 68, complaintsRate: 92,
      binsTotal: 3, binsNormal: 1, nearlyFull: 1, pickupRequired: 1,
      highlights: ['High collection efficiency (91%)', 'Slight decline due to festival waste'],
      description: 'Indira Nagar is a large mixed-use neighbourhood with good collection efficiency but facing overflow pressure at peak times.',
    },
    { id: 4, name: 'Hazratganj',   ward: 'Ward 5',  cleanlinessScore: 86, segregationScore: 85, collectionScore: 87, overflowScore: 84, openDumpingScore: 10, trend: 'up',   city: 'Lucknow',
      weeklyScores: [80,81,82,83,84,85,86], complaintsTotal: 55,  complaintsResolved: 49, complaintsRate: 89,
      binsTotal: 3, binsNormal: 0, nearlyFull: 1, pickupRequired: 2,
      highlights: ['Improving weekly trend (+6 pts)', 'Commercial area under active monitoring'],
      description: "Hazratganj is Lucknow's historic commercial heart. Higher footfall creates unique waste challenges that the team is actively addressing.",
    },
    { id: 5, name: 'Alambagh',     ward: 'Ward 18', cleanlinessScore: 82, segregationScore: 80, collectionScore: 83, overflowScore: 81, openDumpingScore: 14, trend: 'same', city: 'Lucknow',
      weeklyScores: [82,81,82,82,81,82,82], complaintsTotal: 80,  complaintsResolved: 70, complaintsRate: 88,
      binsTotal: 2, binsNormal: 2, nearlyFull: 0, pickupRequired: 0,
      highlights: ['Stable performance', 'Open dumping reduction needed near bus stand'],
      description: 'Alambagh is a transit-heavy area with stable but stagnant performance. Community programs are being planned to push scores higher.',
    },
    { id: 6, name: 'Chowk',        ward: 'Ward 3',  cleanlinessScore: 74, segregationScore: 72, collectionScore: 76, overflowScore: 70, openDumpingScore: 22, trend: 'down', city: 'Lucknow',
      weeklyScores: [78,77,76,75,74,74,74], complaintsTotal: 120, complaintsResolved: 98, complaintsRate: 82,
      binsTotal: 2, binsNormal: 0, nearlyFull: 0, pickupRequired: 2,
      highlights: ['Old city area — complex logistics', 'Complaint resolution improving'],
      description: "Chowk is Lucknow's historic old city. Dense lanes and commercial activity make waste management challenging, but improvement programs are underway.",
    },
    { id: 7, name: 'Rajajipuram',  ward: 'Ward 21', cleanlinessScore: 69, segregationScore: 68, collectionScore: 71, overflowScore: 66, openDumpingScore: 28, trend: 'up',   city: 'Lucknow',
      weeklyScores: [62,63,64,66,67,68,69], complaintsTotal: 95,  complaintsResolved: 76, complaintsRate: 80,
      binsTotal: 2, binsNormal: 2, nearlyFull: 0, pickupRequired: 0,
      highlights: ['Strong upward trend (+7 pts)', 'New collection routes added this week'],
      description: 'Rajajipuram is showing the strongest improvement trajectory this month. New waste collection routes and citizen drives are already showing results.',
    },
  ];

  const LOCAL_TASKS = [
    { id: 1,  binId: 3,  priority: 'High',   assignedTeam: 'Team A', status: 'Pending',     createdAt: '2026-09-11T11:00:00', reason: 'Critical fill level' },
    { id: 2,  binId: 6,  priority: 'High',   assignedTeam: 'Team B', status: 'In Progress', createdAt: '2026-09-11T11:15:00', reason: 'Predicted overflow in 30 min' },
    { id: 3,  binId: 13, priority: 'High',   assignedTeam: null,     status: 'Pending',     createdAt: '2026-09-11T10:45:00', reason: 'Critical fill level' },
    { id: 4,  binId: 4,  priority: 'Medium', assignedTeam: 'Team C', status: 'In Progress', createdAt: '2026-09-11T11:30:00', reason: 'Predicted overflow in 1 hr 20 min' },
    { id: 5,  binId: 18, priority: 'High',   assignedTeam: null,     status: 'Pending',     createdAt: '2026-09-11T11:45:00', reason: 'Predicted overflow in 35 min' },
    { id: 6,  binId: 10, priority: 'Medium', assignedTeam: 'Team A', status: 'Pending',     createdAt: '2026-09-11T12:00:00', reason: 'Predicted overflow in 50 min' },
    { id: 7,  binId: 16, priority: 'High',   assignedTeam: 'Team B', status: 'In Progress', createdAt: '2026-09-11T12:10:00', reason: 'Predicted overflow in 25 min' },
    { id: 8,  binId: 8,  priority: 'Low',    assignedTeam: null,     status: 'Pending',     createdAt: '2026-09-11T12:30:00', reason: 'Predicted overflow in 2 hr 45 min' },
    { id: 9,  binId: 2,  priority: 'Low',    assignedTeam: 'Team D', status: 'Completed',   createdAt: '2026-09-11T09:00:00', reason: 'Scheduled pickup', completedAt: '2026-09-11T09:45:00' },
    { id: 10, binId: 5,  priority: 'Low',    assignedTeam: 'Team C', status: 'Completed',   createdAt: '2026-09-11T08:00:00', reason: 'Scheduled pickup', completedAt: '2026-09-11T08:40:00' },
  ];

  // ── Live state (start with local data, updated from Supabase) ─
  const bins            = LOCAL_BINS.map(b => ({ ...b }));
  const areas           = LOCAL_AREAS.map(a => ({ ...a }));
  const collectionTasks = LOCAL_TASKS.map(t => ({ ...t }));
  const teams           = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'];

  // ── Event bus ─────────────────────────────────────────────────
  const _listeners = {};
  function _notify(event, data) { (_listeners[event] || []).forEach(fn => fn(data)); }
  function on(event, fn)  { if (!_listeners[event]) _listeners[event] = []; _listeners[event].push(fn); }
  function off(event, fn) { if (!_listeners[event]) return; _listeners[event] = _listeners[event].filter(f => f !== fn); }

  // ── Supabase accessor ──────────────────────────────────────────
  function db() { return window._supabase || null; }

  // ── Time formatter (for Supabase timestamps → human strings) ──
  function formatRelativeTime(isoString) {
    if (!isoString) return '—';
    try {
      const date = new Date(isoString);
      const now   = new Date();
      const diffMs  = now - date;
      const diffHrs = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);
      const timeStr  = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
      if (diffHrs < 1)   return 'Just now';
      if (diffDays === 0) return `Today, ${timeStr}`;
      if (diffDays === 1) return `Yesterday, ${timeStr}`;
      return `${diffDays} days ago, ${timeStr}`;
    } catch { return '—'; }
  }

  // ── DB row → JS object mappers ────────────────────────────────
  function mapBin(row) {
    const fillLevel = row.fill_level ?? 0;
    return {
      id:               row.id,
      binNumber:        row.bin_number,
      area:             row.area_name,
      location:         row.location,
      wasteType:        row.waste_type,
      fillLevel,
      lastPickup:       formatRelativeTime(row.last_pickup_at),
      predictedFullTime:computePrediction(fillLevel),
      collectionHistory:[], // loaded separately if needed
    };
  }

  function mapArea(row) {
    const history  = (row.area_score_history || [])
      .sort((a, b) => new Date(a.recorded_at) - new Date(b.recorded_at))
      .map(h => h.cleanliness_score);
    const weeklyScores = history.length >= 7
      ? history.slice(-7)
      : [...Array(7 - history.length).fill(row.cleanliness_score), ...history];

    const complaintsRate = row.complaints_total > 0
      ? Math.round((row.complaints_resolved / row.complaints_total) * 100)
      : 0;

    // Derive bin counts for this area from the live bins array
    const areaBins      = bins.filter(b => b.area === row.name);
    const binsTotal     = areaBins.length;
    const binsNormal    = areaBins.filter(b => getStatus(b.fillLevel) === 'Normal').length;
    const nearlyFull    = areaBins.filter(b => getStatus(b.fillLevel) === 'Nearly Full').length;
    const pickupRequired= areaBins.filter(b => getStatus(b.fillLevel) === 'Pickup Required').length;

    return {
      id:                row.id,
      name:              row.name,
      ward:              row.ward,
      city:              row.city || 'Lucknow',
      cleanlinessScore:  row.cleanliness_score,
      segregationScore:  row.segregation_score,
      collectionScore:   row.collection_score,
      overflowScore:     row.overflow_score,
      openDumpingScore:  row.open_dumping_score,
      trend:             row.trend,
      complaintsTotal:   row.complaints_total,
      complaintsResolved:row.complaints_resolved,
      complaintsRate,
      description:       row.description || '',
      highlights:        row.highlights || [],
      weeklyScores,
      binsTotal, binsNormal, nearlyFull, pickupRequired,
    };
  }

  function mapTask(row) {
    return {
      id:           row.id,
      binId:        row.bin_id,
      priority:     row.priority,
      assignedTeam: row.assigned_team || null,
      status:       row.status,
      reason:       row.reason || '',
      createdAt:    row.created_at,
      completedAt:  row.completed_at || null,
    };
  }

  // ── Async init — loads data from Supabase ──────────────────────
  async function init() {
    const client = db();
    if (!client) return; // not configured — keep local data

    try {
      // Load bins
      const { data: binsData, error: binsErr } = await client.from('bins').select('*').order('id');
      if (!binsErr && binsData && binsData.length > 0) {
        bins.splice(0, bins.length, ...binsData.map(mapBin));
      }

      // Load areas (with score history joined)
      const { data: areasData, error: areasErr } = await client
        .from('areas')
        .select('*, area_score_history(cleanliness_score, recorded_at)')
        .order('cleanliness_score', { ascending: false });
      if (!areasErr && areasData && areasData.length > 0) {
        areas.splice(0, areas.length, ...areasData.map(mapArea));
      }

      // Load collection tasks
      const { data: tasksData, error: tasksErr } = await client
        .from('collection_tasks')
        .select('*')
        .order('created_at', { ascending: false });
      if (!tasksErr && tasksData && tasksData.length > 0) {
        collectionTasks.splice(0, collectionTasks.length, ...tasksData.map(mapTask));
      }

      _notify('data-loaded', null);
      console.info('[Swachh Mitra] ✓ Loaded from Supabase');
    } catch (err) {
      console.warn('[Swachh Mitra] Supabase unavailable — using local data.', err.message);
    }
  }

  // ── Core helpers ───────────────────────────────────────────────
  function getStatus(fillLevel) {
    if (fillLevel >= 85) return 'Pickup Required';
    if (fillLevel >= 70) return 'Nearly Full';
    return 'Normal';
  }

  function getBinById(id)      { return bins.find(b => b.id === id); }
  function getBinByNumber(num) { return bins.find(b => b.binNumber === String(num)); }
  function getAreaById(id)     { return areas.find(a => a.id === id); }
  function getTasksByStatus(s) { return collectionTasks.filter(t => t.status === s); }

  function computePrediction(fillLevel) {
    if (fillLevel >= 100) return 'Overdue';
    if (fillLevel >= 85)  return 'Pickup Required';
    const remaining = 100 - fillLevel;
    const hours     = Math.floor(remaining / 15);
    const mins      = Math.round(((remaining / 15) - hours) * 60);
    if (hours === 0) return `${mins} min`;
    if (mins  === 0) return `${hours} hr`;
    return `${hours} hr ${mins} min`;
  }

  // ── Write: Update bin fill level ──────────────────────────────
  function updateBinFillLevel(binId, newLevel) {
    const bin = getBinById(binId);
    if (!bin) return;
    bin.fillLevel = Math.max(0, Math.min(100, newLevel));
    bin.predictedFullTime = computePrediction(bin.fillLevel);
    _notify('bin-update', bin);

    // Persist to Supabase (fire and forget — non-blocking)
    const client = db();
    if (client) {
      client.from('bins')
        .update({ fill_level: bin.fillLevel })
        .eq('id', binId)
        .then(({ error }) => {
          if (error) console.warn('[Swachh Mitra] Error updating bin fill level:', error.message);
        });
    }
  }

  // ── Write: Mark task collected ────────────────────────────────
  async function markCollected(taskId) {
    const task = collectionTasks.find(t => t.id === taskId);
    if (!task) return;

    // 1. Update local state immediately
    task.status      = 'Completed';
    task.completedAt = new Date().toISOString();
    const bin = getBinById(task.binId);
    if (bin) {
      bin.fillLevel          = 0;
      bin.lastPickup         = 'Just now';
      bin.predictedFullTime  = null;
    }
    _notify('task-update', task);
    _notify('bin-update', bin);

    // 2. Persist to Supabase
    const client = db();
    if (client) {
      // Update task status
      const { error: taskErr } = await client
        .from('collection_tasks')
        .update({ status: 'Completed', completed_at: task.completedAt })
        .eq('id', taskId);
      if (taskErr) console.warn('[Swachh Mitra] Error completing task:', taskErr.message);

      // Reset bin fill level + last pickup time
      if (bin) {
        const { error: binErr } = await client
          .from('bins')
          .update({ fill_level: 0, last_pickup_at: new Date().toISOString() })
          .eq('id', bin.id);
        if (binErr) console.warn('[Swachh Mitra] Error resetting bin:', binErr.message);
      }

      // Insert collection history record
      const { error: histErr } = await client
        .from('collection_history')
        .insert({
          bin_id:                     task.binId,
          collected_at:               task.completedAt,
          collected_by:               task.assignedTeam || 'Unknown',
          fill_level_at_collection:   bin ? 0 : null,
          task_id:                    taskId,
        });
      if (histErr) console.warn('[Swachh Mitra] Error inserting history:', histErr.message);
    }
  }

  // ── Write: Assign team to task ────────────────────────────────
  function assignTeam(taskId, teamName) {
    const task = collectionTasks.find(t => t.id === taskId);
    if (!task) return;

    // 1. Update local state immediately
    task.assignedTeam = teamName;
    task.status       = 'In Progress';
    _notify('task-update', task);

    // 2. Persist to Supabase
    const client = db();
    if (client) {
      client.from('collection_tasks')
        .update({ assigned_team: teamName, status: 'In Progress' })
        .eq('id', taskId)
        .then(({ error }) => {
          if (error) console.warn('[Swachh Mitra] Error assigning team:', error.message);
        });
    }
  }

  // ── Write: Create new pickup task ─────────────────────────────
  async function createTask(binId) {
    const bin = getBinById(binId);
    if (!bin) return null;

    // Prevent duplicates
    const existing = collectionTasks.find(t => t.binId === binId && t.status !== 'Completed');
    if (existing) return 'duplicate';

    const newTask = {
      id:           collectionTasks.length + 1,
      binId,
      priority:     bin.fillLevel >= 85 ? 'High' : 'Medium',
      assignedTeam: null,
      status:       'Pending',
      createdAt:    new Date().toISOString(),
      reason:       'Manual pickup request',
    };

    // 1. Add to local state immediately
    collectionTasks.push(newTask);
    _notify('task-update', newTask);

    // 2. Persist to Supabase
    const client = db();
    if (client) {
      const { data, error } = await client
        .from('collection_tasks')
        .insert({
          bin_id:       binId,
          priority:     newTask.priority,
          assigned_team:null,
          status:       'Pending',
          reason:       'Manual pickup request',
          created_at:   newTask.createdAt,
        })
        .select()
        .single();

      if (error) {
        console.warn('[Swachh Mitra] Error creating task:', error.message);
      } else if (data) {
        // Update local task with real Supabase-generated ID
        newTask.id = data.id;
      }
    }

    return newTask;
  }

  // ── Dashboard stats ────────────────────────────────────────────
  function getDashboardStats() {
    const total    = bins.length;
    const normal   = bins.filter(b => getStatus(b.fillLevel) === 'Normal').length;
    const nearFull = bins.filter(b => getStatus(b.fillLevel) === 'Nearly Full').length;
    const pickup   = bins.filter(b => getStatus(b.fillLevel) === 'Pickup Required').length;
    const predicted = bins.filter(b => b.predictedFullTime && b.predictedFullTime !== 'Overdue' && getStatus(b.fillLevel) !== 'Pickup Required').length;
    return { total, normal, nearFull, pickup, predicted };
  }

  // ── Citizen-facing helpers ─────────────────────────────────────
  function getAreaByName(name) {
    const q = name.toLowerCase().trim();
    return areas.find(a => a.name.toLowerCase() === q) ||
           areas.find(a => a.name.toLowerCase().includes(q));
  }

  function getAreaRank(areaId) {
    const sorted = [...areas].sort((a, b) => b.cleanlinessScore - a.cleanlinessScore);
    return sorted.findIndex(a => a.id === areaId) + 1;
  }

  function getNearbyAreas(areaId) {
    const sorted = [...areas].sort((a, b) => b.cleanlinessScore - a.cleanlinessScore);
    const idx    = sorted.findIndex(a => a.id === areaId);
    const start  = Math.max(0, idx - 2);
    const end    = Math.min(sorted.length, idx + 3);
    return sorted.slice(start, end).map((a, i) => ({ ...a, rank: start + i + 1 }));
  }

  function searchAreas(query) {
    if (!query || query.length < 1) return areas.map((a, i) => ({ ...a, rank: i + 1 }));
    const q      = query.toLowerCase();
    const sorted = [...areas].sort((a, b) => b.cleanlinessScore - a.cleanlinessScore);
    return sorted
      .map((a, i) => ({ ...a, rank: i + 1 }))
      .filter(a =>
        a.name.toLowerCase().includes(q) ||
        a.ward.toLowerCase().includes(q) ||
        (a.city && a.city.toLowerCase().includes(q))
      );
  }

  return {
    // Data arrays (live references — update in-place via Supabase)
    bins, areas, collectionTasks, teams,

    // Init — call once per page after DOM ready
    init,

    // Read helpers
    getStatus, getBinById, getBinByNumber, getAreaById,
    getTasksByStatus, computePrediction, getDashboardStats,

    // Write actions (local + Supabase)
    updateBinFillLevel, markCollected, assignTeam, createTask,

    // Citizen-facing
    getAreaByName, getAreaRank, getNearbyAreas, searchAreas,

    // Event bus
    on, off, _notify,
  };
})();
