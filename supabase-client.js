// ============================================================
// Swachh Mitra – Supabase Client Initialization
// ============================================================
// This file reads SUPABASE_URL and SUPABASE_ANON_KEY from
// supabase-config.js and initializes the Supabase client.
// If credentials are not configured, the app silently falls
// back to local demo data — no errors shown to the user.
// ============================================================

(function () {
  // Check if credentials have been filled in
  const configured =
    typeof SUPABASE_URL !== 'undefined' &&
    typeof SUPABASE_ANON_KEY !== 'undefined' &&
    SUPABASE_URL !== 'YOUR_PROJECT_URL' &&
    SUPABASE_ANON_KEY !== 'YOUR_ANON_KEY' &&
    SUPABASE_URL.startsWith('https://');

  if (!configured) {
    console.info(
      '%c[Swachh Mitra] Supabase not configured — using local demo data.',
      'color: #d97706; font-weight: bold;'
    );
    window._supabase = null;
    return;
  }

  // supabase global is provided by the CDN script loaded before this
  if (typeof supabase === 'undefined' || typeof supabase.createClient !== 'function') {
    console.warn('[Swachh Mitra] Supabase SDK not loaded. Check CDN script tag.');
    window._supabase = null;
    return;
  }

  try {
    window._supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.info(
      '%c[Swachh Mitra] Supabase client initialized ✓',
      'color: #16a34a; font-weight: bold;'
    );
  } catch (e) {
    console.error('[Swachh Mitra] Failed to initialize Supabase client:', e.message);
    window._supabase = null;
  }
})();
