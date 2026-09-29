// ============================================================
// Swachh Mitra – Shared UI Helpers
// Navigation, toasts, modals, sidebar, icons, rendering utils
// ============================================================

// ── SVG Icon Library ──────────────────────────────────────────
const Icons = {
  dashboard: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
  bins:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/><path d="M10 11v5M14 11v5"/></svg>`,
  collection:`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 17H5a2 2 0 00-2 2v1h18v-1a2 2 0 00-2-2h-4"/><path d="M12 3v10M8 9l4 4 4-4"/></svg>`,
  rankings:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M8 21H4a2 2 0 01-2-2v-3a2 2 0 012-2h4v7zM14 21h-4V9a2 2 0 012-2h0a2 2 0 012 2v12zM22 21h-4V5a2 2 0 00-2-2h0"/></svg>`,
  simulator: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14M16.24 7.76a6 6 0 010 8.49M7.76 7.76a6 6 0 000 8.49"/></svg>`,
  settings:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>`,
  search:    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,
  bell:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
  user:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  menu:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>`,
  close:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
  alert:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  check:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`,
  arrow_r:   `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
  arrow_up:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>`,
  arrow_dn:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>`,
  truck:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  location:  `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0120 10.2C20 17.5 12 22 12 22z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
<<<<<<< HEAD
  leaf:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,

=======
  leaf:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 8C8 10 5.9 16.17 3.82 19.2A3 3 0 006.46 22a3 3 0 001.5-.4C9.4 20.4 12 18 13 14c5 1 6-2 6-2S17 12 17 8z"/><path d="M3.7 19.3L16 7"/></svg>`,
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
  star:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  plus:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>`,
  minus:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>`,
  refresh:   `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6"/><path d="M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>`,
  home:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  wifi:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
  chart:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  people:    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>`,
  eye:       `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  flag:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
  area:      `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>`,
  citizen:   `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
<<<<<<< HEAD
  logout:    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>`,
  complaint: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
  guide:     `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>`,
  trophy:    `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M8 21h8m-4-4v4M6 4h12v4a6 6 0 01-12 0V4zM4 6H2a2 2 0 000 4h2M20 6h2a2 2 0 010 4h-2"/></svg>`,
=======
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
};

// ── Navigation Config ──────────────────────────────────────────
const NAV_ITEMS = [
  // Citizen section
<<<<<<< HEAD
  { id: "citizen-dashboard", label: "Citizen Dashboard",  icon: "dashboard", href: "citizen-dashboard.html", section: "citizen" },
  { id: "area-dashboard",    label: "Check Your Area",     icon: "location",  href: "area-dashboard.html",    section: "citizen" },
  { id: "rankings",          label: "Area Rankings",       icon: "rankings",  href: "rankings.html",          section: "citizen" },
  { id: "complaints",        label: "Raise a Complaint",   icon: "complaint", href: "javascript:openComplaintModal()", section: "citizen" },
  { id: "waste-guide",       label: "Waste Guide",         icon: "guide",     href: "javascript:openGuideModal()",     section: "citizen" },
  // Municipal section
  { id: "dashboard",         label: "Dashboard",           icon: "dashboard", href: "dashboard.html",          section: "municipal" },
  { id: "bins",              label: "Smart Bins",          icon: "bins",       href: "bins.html",               section: "municipal" },
  { id: "collection",        label: "Collection Tasks",    icon: "collection", href: "collection.html",         section: "municipal" },
  { id: "rankings-muni",     label: "Area Rankings",       icon: "rankings",   href: "rankings.html",           section: "municipal" },
  { id: "settings",          label: "Settings",            icon: "settings",   href: "settings.html",           section: "municipal" },
=======
  { id: "area-dashboard", label: "Check Your Area",  icon: "area",       href: "area-dashboard.html", section: "citizen" },
  // Municipal section
  { id: "dashboard",      label: "Dashboard",         icon: "dashboard",  href: "dashboard.html",       section: "municipal" },
  { id: "bins",           label: "Smart Bins",         icon: "bins",       href: "bins.html",             section: "municipal" },
  { id: "collection",     label: "Collection",         icon: "collection", href: "collection.html",       section: "municipal" },
  { id: "rankings",       label: "Area Rankings",      icon: "rankings",   href: "rankings.html",         section: "municipal" },
  { id: "simulator",      label: "Sensor Simulator",   icon: "simulator",  href: "simulator.html",        section: "municipal" },
  { id: "settings",       label: "Settings",           icon: "settings",   href: "settings.html",         section: "municipal" },
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
];

// ── Sidebar Builder ────────────────────────────────────────────
function buildSidebar(activeId) {
<<<<<<< HEAD
  let auth = null;
  try {
    auth = JSON.parse(sessionStorage.getItem('sm_auth') || 'null');
  } catch(e) {}

  const isCitizen = auth && auth.role === 'user';
  const isMunicipal = auth && auth.role === 'municipal';
  const isLoggedIn = !!(auth && auth.loggedIn);

  const citizenLinks = [
    { id: "citizen-dashboard", label: "Dashboard",        icon: "dashboard", href: "citizen-dashboard.html" },
    { id: "area-dashboard",    label: "Check Your Area",  icon: "location",  href: "area-dashboard.html" },
    { id: "rankings",          label: "Area Rankings",    icon: "rankings",  href: "rankings.html" },
    { id: "complaints",        label: "Raise a Complaint",icon: "complaint", href: "javascript:openComplaintModal()" },
    { id: "waste-guide",       label: "Waste Guide",      icon: "guide",     href: "javascript:openGuideModal()" },
  ];

  const municipalLinks = [
    { id: "dashboard",      label: "Overview",         icon: "dashboard",  href: "dashboard.html" },
    { id: "bins",           label: "Smart Bins",       icon: "bins",       href: "bins.html" },
    { id: "collection",     label: "Collection Tasks", icon: "collection", href: "collection.html" },
    { id: "rankings",       label: "Area Rankings",    icon: "rankings",   href: "rankings.html" },
    { id: "settings",       label: "Settings",         icon: "settings",   href: "settings.html" },
  ];
=======
  const citizenLinks    = NAV_ITEMS.filter(i => i.section === 'citizen');
  const municipalLinks  = NAV_ITEMS.filter(i => i.section === 'municipal');
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94

  const renderLink = item => `
    <button
      class="sidebar-link ${item.id === activeId ? 'active' : ''}"
<<<<<<< HEAD
      onclick="${item.href.startsWith('javascript:') ? item.href.replace('javascript:','') : `navigate('${item.href}')`}"
=======
      onclick="navigate('${item.href}')"
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
      aria-label="${item.label}"
      aria-current="${item.id === activeId ? 'page' : 'false'}"
    >
      <span class="nav-icon">${Icons[item.icon]}</span>
      ${item.label}
    </button>
  `;

<<<<<<< HEAD
  let navBody = '';
  if (isCitizen) {
    navBody = `
      <div class="sidebar-section-label">Citizen Portal</div>
      ${citizenLinks.map(renderLink).join('')}
    `;
  } else if (isMunicipal) {
    navBody = `
      <div class="sidebar-section-label">Municipal Control</div>
      ${municipalLinks.map(renderLink).join('')}
    `;
  } else {
    // Guest or mixed
    navBody = `
      <div class="sidebar-section-label">Citizen</div>
      ${citizenLinks.map(renderLink).join('')}
      <div class="sidebar-section-label" style="margin-top:12px">Municipal</div>
      ${municipalLinks.map(renderLink).join('')}
    `;
  }

  const authFooter = isLoggedIn ? `
    <div style="padding:10px 12px;margin:8px 8px 4px;background:rgba(255,255,255,0.06);border-radius:var(--radius-sm);display:flex;align-items:center;justify-content:space-between;gap:8px">
      <div style="min-width:0;flex:1">
        <div style="font-size:0.78rem;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${auth.name || (isCitizen ? 'Citizen' : 'Municipal')}</div>
        <div style="font-size:0.68rem;color:#94a3b8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${isCitizen ? 'Citizen Account' : 'Municipal Staff'}</div>
      </div>
      <button onclick="smLogout()" title="Logout" style="background:none;border:none;color:#f87171;padding:4px;display:flex;align-items:center;border-radius:4px;cursor:pointer">
        ${Icons.logout}
      </button>
    </div>
    <button class="sidebar-link" onclick="smLogout()" aria-label="Logout" style="color:#fca5a5">
      <span class="nav-icon">${Icons.logout}</span>
      Logout
    </button>
  ` : `
    <button class="sidebar-link" onclick="navigate('login.html')" aria-label="Login">
      <span class="nav-icon">${Icons.user}</span>
      Sign In
    </button>
  `;

  return `
    <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">
      <div class="sidebar-logo" onclick="navigate('index.html')" style="cursor:pointer">
=======
  // Read auth state from sessionStorage
  let authChip = '';
  try {
    const auth = JSON.parse(sessionStorage.getItem('sm_auth') || 'null');
    if (auth && auth.loggedIn) {
      const roleLabel = auth.role === 'municipal' ? '🏛️ Municipal Corp' : '👤 Citizen';
      authChip = `
        <div style="margin-bottom:10px;padding:10px 12px;background:rgba(255,255,255,0.06);border-radius:8px;border:1px solid rgba(255,255,255,0.1)">
          <div style="font-size:0.7rem;color:var(--sidebar-text);opacity:0.65;margin-bottom:3px">Signed in as</div>
          <div style="font-size:0.78rem;font-weight:600;color:#fff;margin-bottom:1px">${roleLabel}</div>
          <div style="font-size:0.68rem;color:var(--sidebar-text);opacity:0.6;word-break:break-all">${auth.email}</div>
        </div>
        <button onclick="smLogout()" style="width:100%;padding:8px 12px;background:rgba(220,38,38,0.18);border:1px solid rgba(220,38,38,0.3);border-radius:6px;color:#fca5a5;font-size:0.78rem;font-weight:600;cursor:pointer;font-family:inherit;transition:background 0.2s;display:flex;align-items:center;gap:6px;justify-content:center"
          onmouseover="this.style.background='rgba(220,38,38,0.28)'" onmouseout="this.style.background='rgba(220,38,38,0.18)'"
          aria-label="Logout">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
          Logout
        </button>
      `;
    } else {
      authChip = `
        <a href="login.html" style="width:100%;padding:8px 12px;background:rgba(37,99,168,0.3);border:1px solid rgba(37,99,168,0.4);border-radius:6px;color:#93c5fd;font-size:0.78rem;font-weight:600;cursor:pointer;font-family:inherit;transition:background 0.2s;display:flex;align-items:center;gap:6px;justify-content:center;text-decoration:none;box-sizing:border-box"
          onmouseover="this.style.background='rgba(37,99,168,0.45)'" onmouseout="this.style.background='rgba(37,99,168,0.3)'"
          aria-label="Login">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/></svg>
          Login
        </a>
      `;
    }
  } catch(e) {}

  return `
    <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main navigation">
      <div class="sidebar-logo">
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
        <img src="logo.jpg" alt="Swachh Mitra Logo" class="sidebar-logo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="sidebar-logo-fallback" style="display:none;align-items:center;gap:10px">
          <div class="logo-icon">${Icons.leaf}</div>
          <div class="logo-text">
            <span class="logo-name">Swachh Mitra</span>
            <span class="logo-tagline">Smarter Waste. Cleaner Communities.</span>
          </div>
        </div>
      </div>
      <nav class="sidebar-nav">
<<<<<<< HEAD
        ${navBody}
        <div style="margin-top:auto;padding-top:12px;border-top:1px solid rgba(255,255,255,0.08)">
          ${authFooter}
        </div>
      </nav>
      <div class="sidebar-footer">
        <div style="font-weight:600;color:#f1f5f9">© 2026 Swachh Mitra</div>
=======
        <div class="sidebar-section-label">Citizen</div>
        ${citizenLinks.map(renderLink).join('')}
        <div class="sidebar-section-label" style="margin-top:12px">Municipal</div>
        ${municipalLinks.map(renderLink).join('')}
      </nav>
      <div class="sidebar-footer">
        ${authChip}
        <div class="mvp-badge" style="margin-top:10px">⬡ MVP PROTOTYPE</div>
        <div>© 2026 Swachh Mitra</div>
        <div style="margin-top:3px">Lucknow Municipal Corporation</div>
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
      </div>
    </aside>
    <div class="sidebar-overlay" id="sidebarOverlay"></div>
  `;
}

// ── Logout function (global) ───────────────────────────────────
function smLogout() {
  sessionStorage.removeItem('sm_auth');
  window.location.href = 'login.html';
}

<<<<<<< HEAD
// ── Header Builder ─────────────────────────────────────────────
function buildHeader({ title, subtitle, showSearch = false, searchPlaceholder = "Search...", customAction = null }) {
  let auth = null;
  try {
    auth = JSON.parse(sessionStorage.getItem('sm_auth') || 'null');
  } catch(e) {}
  const isCitizen = auth && auth.role === 'user';
  const avatarText = isCitizen ? 'CZ' : auth ? 'MC' : 'SM';

  const checkAreaBtn = `
    <a href="area-dashboard.html" class="btn btn-primary btn-sm" style="display:flex;align-items:center;gap:6px;font-size:0.8rem;padding:7px 14px;white-space:nowrap;box-shadow:var(--shadow-sm)">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0120 10.2C20 17.5 12 22 12 22z"/><circle cx="12" cy="10" r="3"/></svg>
      Check Your Area
    </a>
  `;

=======



// ── Header Builder ─────────────────────────────────────────────
function buildHeader({ title, subtitle, showSearch = false, searchPlaceholder = "Search..." }) {
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
  return `
    <header class="top-header">
      <button class="hamburger-btn" id="hamburgerBtn" aria-label="Open menu">
        ${Icons.menu}
      </button>
      <div class="header-titles">
        <div class="page-title">${title}</div>
        <div class="page-subtitle">${subtitle}</div>
      </div>
<<<<<<< HEAD
      <div class="header-actions" style="display:flex;align-items:center;gap:10px">
=======
      <div class="header-actions">
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
        ${showSearch ? `
          <div class="search-box" role="search">
            ${Icons.search}
            <input type="text" placeholder="${searchPlaceholder}" id="globalSearchInput" aria-label="Search">
          </div>
        ` : ''}
<<<<<<< HEAD
        ${customAction || checkAreaBtn}
        <button class="icon-btn" aria-label="Notifications" id="notifBtn" onclick="showToast('You have 2 new community cleanliness updates', 'default')">
          ${Icons.bell}
          <span class="notif-dot"></span>
        </button>
        <div class="user-avatar" role="button" tabindex="0" title="${auth ? auth.name : 'Swachh Mitra User'}" aria-label="User menu">${avatarText}</div>
=======
        <button class="icon-btn" aria-label="Notifications" id="notifBtn">
          ${Icons.bell}
          <span class="notif-dot"></span>
        </button>
        <div class="user-avatar" role="button" tabindex="0" aria-label="User menu">MS</div>
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
      </div>
    </header>
  `;
}

// ── Page Bootstrap ─────────────────────────────────────────────
<<<<<<< HEAD
function initPage({ activeNav, title, subtitle, showSearch = false, searchPlaceholder, customAction = null }) {
  // Auth guard for municipal pages
  const municipalPages = ['dashboard', 'bins', 'collection', 'settings'];
  if (municipalPages.includes(activeNav)) {
    try {
      const auth = JSON.parse(sessionStorage.getItem('sm_auth') || 'null');
      if (!auth || !auth.loggedIn || auth.role !== 'municipal') {
        window.location.href = 'login.html';
        return;
      }
    } catch (e) {
      window.location.href = 'login.html';
      return;
    }
  }

  // Auth guard for citizen dashboard
  const citizenProtectedPages = ['citizen-dashboard'];
  if (citizenProtectedPages.includes(activeNav)) {
    try {
      const auth = JSON.parse(sessionStorage.getItem('sm_auth') || 'null');
      if (!auth || !auth.loggedIn || auth.role !== 'user') {
        window.location.href = 'login.html';
        return;
      }
    } catch (e) {
      window.location.href = 'login.html';
      return;
    }
  }

=======
function initPage({ activeNav, title, subtitle, showSearch = false, searchPlaceholder }) {
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
  const shell = document.getElementById('app-shell');
  if (!shell) return;

  shell.innerHTML = `
    ${buildSidebar(activeNav)}
    <div class="main-content">
<<<<<<< HEAD
      ${buildHeader({ title, subtitle, showSearch, searchPlaceholder, customAction })}
=======
      ${buildHeader({ title, subtitle, showSearch, searchPlaceholder })}
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
      <div class="page-body" id="page-body">
        <!-- page content injected here -->
      </div>
    </div>
    ${buildToastContainer()}
    ${buildBinModal()}
    ${buildAssignModal()}
<<<<<<< HEAD
    ${buildComplaintModal()}
    ${buildGuideModal()}
=======
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
  `;

  initSidebarToggle();
}

// ── Sidebar Mobile Toggle ──────────────────────────────────────
function initSidebarToggle() {
  const btn     = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!btn || !sidebar || !overlay) return;

  btn.addEventListener('click', () => {
    sidebar.classList.toggle('mobile-open');
    overlay.classList.toggle('mobile-open');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('mobile-open');
  });
}

// ── Navigation ─────────────────────────────────────────────────
function navigate(href) {
  window.location.href = href;
}

// ── Status helpers ─────────────────────────────────────────────
function getStatusClass(fillLevel) {
  if (fillLevel >= 85) return 'danger';
  if (fillLevel >= 70) return 'warning';
  return 'normal';
}

function getStatusBadge(fillLevel) {
  const s = AppState.getStatus(fillLevel);
  const cls = s === 'Normal' ? 'badge-normal' : s === 'Nearly Full' ? 'badge-warning' : 'badge-danger';
  return `<span class="badge ${cls}"><span class="badge-dot"></span>${s}</span>`;
}

function getPriorityBadge(priority) {
  const map = { High: 'badge-danger', Medium: 'badge-warning', Low: 'badge-muted' };
  return `<span class="badge ${map[priority] || 'badge-muted'}">${priority}</span>`;
}

function getTaskStatusBadge(status) {
  const map = { Pending: 'badge-warning', 'In Progress': 'badge-info', Completed: 'badge-success' };
  return `<span class="badge ${map[status] || 'badge-muted'}">${status}</span>`;
}

function buildProgressBar(fillLevel) {
  const cls = getStatusClass(fillLevel);
  return `
    <div class="progress-bar-wrap" role="progressbar" aria-valuenow="${fillLevel}" aria-valuemin="0" aria-valuemax="100" aria-label="${fillLevel}% full">
      <div class="progress-bar-fill ${cls}" style="width:${fillLevel}%"></div>
    </div>
  `;
}

// ── Toast System ───────────────────────────────────────────────
function buildToastContainer() {
  return `<div class="toast-container" id="toastContainer" aria-live="polite"></div>`;
}

function showToast(message, type = 'default', duration = 3500) {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const id = 'toast-' + Date.now();
  const toast = document.createElement('div');
  toast.className = `toast ${type !== 'default' ? 'toast-' + type : ''}`;
  toast.setAttribute('role', 'alert');
  toast.id = id;
  toast.innerHTML = `${type === 'success' ? Icons.check : type === 'danger' ? Icons.alert : Icons.bell} ${message}`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(20px)'; toast.style.transition = '0.3s ease'; setTimeout(() => toast.remove(), 300); }, duration);
}

// ── Bin Detail Modal ───────────────────────────────────────────
function buildBinModal() {
  return `
    <div class="modal-overlay" id="binModal" role="dialog" aria-modal="true" aria-labelledby="binModalTitle">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title" id="binModalTitle">Bin Details</div>
          <button class="modal-close" onclick="closeBinModal()" aria-label="Close">${Icons.close}</button>
        </div>
        <div class="modal-body" id="binModalBody">
          <!-- populated dynamically -->
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline btn-sm" onclick="closeBinModal()">Close</button>
          <button class="btn btn-primary btn-sm" id="binModalPickupBtn">Create Pickup Task</button>
        </div>
      </div>
    </div>
  `;
}

function openBinModal(binId) {
  const bin = AppState.getBinById(binId);
  if (!bin) return;
  const status     = AppState.getStatus(bin.fillLevel);
  const statusCls  = getStatusClass(bin.fillLevel);
  const body       = document.getElementById('binModalBody');

  body.innerHTML = `
    <div class="detail-grid">
      <div class="detail-item">
        <span class="detail-label">Bin ID</span>
        <span class="detail-value font-bold">#${bin.binNumber}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Area</span>
        <span class="detail-value">${bin.area}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Location</span>
        <span class="detail-value">${bin.location}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Waste Type</span>
        <span class="detail-value">
          <span class="waste-type-badge ${bin.wasteType === 'Wet' ? 'waste-wet' : 'waste-dry'}">${bin.wasteType} Waste</span>
        </span>
      </div>
    </div>
    <div style="margin-bottom:16px">
      <div class="fill-label-row">
        <span class="detail-label">Fill Level</span>
        <span class="fill-pct ${statusCls}">${bin.fillLevel}%</span>
      </div>
      ${buildProgressBar(bin.fillLevel)}
    </div>
    <div class="detail-grid">
      <div class="detail-item">
        <span class="detail-label">Status</span>
        <span class="detail-value">${getStatusBadge(bin.fillLevel)}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Predicted Full</span>
        <span class="detail-value">${bin.predictedFullTime || '—'}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Last Pickup</span>
        <span class="detail-value">${bin.lastPickup}</span>
      </div>
    </div>
    <hr class="divider">
    <div class="section-title" style="margin-bottom:10px;font-size:0.85rem;">Collection History</div>
    <div class="history-list">
      ${bin.collectionHistory.map(h => `
        <div class="history-item">
          <span class="history-dot"></span>
          ${h}
        </div>
      `).join('')}
    </div>
  `;

  const pickupBtn = document.getElementById('binModalPickupBtn');
  if (pickupBtn) {
    if (status === 'Pickup Required' || status === 'Nearly Full') {
      pickupBtn.disabled = false;
      pickupBtn.onclick = () => { createPickupTask(binId); closeBinModal(); };
    } else {
      pickupBtn.disabled = true;
    }
  }

  document.getElementById('binModal').classList.add('open');
}

function closeBinModal() {
  document.getElementById('binModal')?.classList.remove('open');
}

// ── Assign Team Modal ──────────────────────────────────────────
function buildAssignModal() {
  return `
    <div class="modal-overlay" id="assignModal" role="dialog" aria-modal="true" aria-labelledby="assignModalTitle">
      <div class="modal" style="max-width:380px">
        <div class="modal-header">
          <div class="modal-title" id="assignModalTitle">Assign Team</div>
          <button class="modal-close" onclick="closeAssignModal()" aria-label="Close">${Icons.close}</button>
        </div>
        <div class="modal-body" id="assignModalBody">
          <label style="font-size:0.85rem;font-weight:600;color:var(--color-text-secondary);display:block;margin-bottom:8px" for="teamSelect">Select Collection Team</label>
          <select id="teamSelect" style="width:100%;padding:9px 12px;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;color:var(--color-text);background:var(--color-surface);outline:none;" aria-label="Select team">
            ${AppState.teams.map(t => `<option value="${t}">${t}</option>`).join('')}
          </select>
        </div>
        <div class="modal-footer">
          <button class="btn btn-outline btn-sm" onclick="closeAssignModal()">Cancel</button>
          <button class="btn btn-primary btn-sm" id="assignConfirmBtn">Assign</button>
        </div>
      </div>
    </div>
  `;
}

let _assignTaskId = null;
function openAssignModal(taskId) {
  _assignTaskId = taskId;
  document.getElementById('assignModal')?.classList.add('open');
  document.getElementById('assignConfirmBtn').onclick = () => {
    const team = document.getElementById('teamSelect').value;
    AppState.assignTeam(_assignTaskId, team);
    closeAssignModal();
    showToast(`${team} assigned successfully`, 'success');
    if (typeof renderCollectionPage === 'function') renderCollectionPage();
  };
}

function closeAssignModal() {
  document.getElementById('assignModal')?.classList.remove('open');
  _assignTaskId = null;
}

// ── Create Pickup Task ─────────────────────────────────────────
async function createPickupTask(binId) {
  const bin = AppState.getBinById(binId);
  if (!bin) return;
  const result = await AppState.createTask(binId);
  if (result === 'duplicate') {
    showToast(`Pickup task for Bin #${bin.binNumber} already exists`, 'warning');
  } else if (result) {
    showToast(`Pickup task created for Bin #${bin.binNumber}`, 'success');
  }
}


<<<<<<< HEAD
// ── Complaint Modal (Citizen) ──────────────────────────────────
function buildComplaintModal() {
  const areaOptions = (typeof AppState !== 'undefined' && AppState.areas)
    ? AppState.areas.map(a => `<option value="${a.name}">${a.name} (${a.ward})</option>`).join('')
    : `
      <option value="Gomti Nagar">Gomti Nagar (Ward 12)</option>
      <option value="Aliganj">Aliganj (Ward 8)</option>
      <option value="Indira Nagar">Indira Nagar (Ward 15)</option>
      <option value="Hazratganj">Hazratganj (Ward 5)</option>
      <option value="Alambagh">Alambagh (Ward 18)</option>
      <option value="Chowk">Chowk (Ward 3)</option>
      <option value="Rajajipuram">Rajajipuram (Ward 21)</option>
    `;

  return `
    <div class="modal-overlay" id="complaintModal" role="dialog" aria-modal="true" aria-labelledby="complaintModalTitle">
      <div class="modal" style="max-width:520px;max-height:90vh;overflow-y:auto">
        <div class="modal-header">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:8px;background:#fee2e2;color:#dc2626;display:flex;align-items:center;justify-content:center">
              ${Icons.complaint}
            </div>
            <div>
              <div class="modal-title" id="complaintModalTitle">Raise a Community Complaint</div>
              <div style="font-size:0.75rem;color:var(--color-text-muted)">Report waste overflow, damaged bins, or illegal dumping</div>
            </div>
          </div>
          <button class="modal-close" onclick="closeComplaintModal()" aria-label="Close">${Icons.close}</button>
        </div>
        <form id="complaintForm" onsubmit="submitComplaint(event)">
          <div class="modal-body" style="padding:16px 20px;display:flex;flex-direction:column;gap:14px">
            <div>
              <label style="font-size:0.82rem;font-weight:600;color:var(--color-text-secondary);display:block;margin-bottom:6px" for="cmpArea">Select Area / Ward *</label>
              <select id="cmpArea" required style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;background:var(--color-surface);color:var(--color-text)">
                ${areaOptions}
              </select>
            </div>

            <div>
              <label style="font-size:0.82rem;font-weight:600;color:var(--color-text-secondary);display:block;margin-bottom:6px" for="cmpCategory">Issue Category *</label>
              <select id="cmpCategory" required style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;background:var(--color-surface);color:var(--color-text)">
                <option value="Bin Overflow">🗑️ Bin Overflow (Full capacity)</option>
                <option value="Illegal Dumping">⚠️ Open / Illegal Dumping Spot</option>
                <option value="Damaged Bin / Sensor">🔧 Damaged Smart Bin / Sensor</option>
                <option value="Missed Garbage Collection">🚛 Missed Regular Collection</option>
                <option value="Foul Odor / Sanitation">💨 Severe Odor / Sanitation Issue</option>
              </select>
            </div>

            <div>
              <label style="font-size:0.82rem;font-weight:600;color:var(--color-text-secondary);display:block;margin-bottom:6px" for="cmpLocation">Exact Landmark / Street Address *</label>
              <input type="text" id="cmpLocation" placeholder="e.g., Near Sector 4 Community Park Gate" required style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;background:var(--color-surface);color:var(--color-text)">
            </div>

            <div>
              <label style="font-size:0.82rem;font-weight:600;color:var(--color-text-secondary);display:block;margin-bottom:6px" for="cmpDesc">Issue Description *</label>
              <textarea id="cmpDesc" rows="3" placeholder="Describe the issue (e.g. wet waste spilling onto road for 2 days)..." required style="width:100%;padding:10px 12px;border:1px solid var(--color-border);border-radius:var(--radius-sm);font-size:0.875rem;background:var(--color-surface);color:var(--color-text);resize:vertical"></textarea>
            </div>

            <div>
              <label style="font-size:0.82rem;font-weight:600;color:var(--color-text-secondary);display:block;margin-bottom:6px">Attach Photo (Optional)</label>
              <div style="border:1.5px dashed var(--color-border-strong);border-radius:var(--radius-sm);padding:14px;text-align:center;background:var(--color-bg);cursor:pointer" onclick="document.getElementById('cmpPhoto').click()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" width="22" height="22" style="margin:0 auto 6px;color:var(--color-text-muted)"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                <div style="font-size:0.8rem;color:var(--color-text-secondary);font-weight:500" id="photoUploadLabel">Click to upload photo evidence</div>
                <div style="font-size:0.7rem;color:var(--color-text-muted)">JPG, PNG up to 5MB</div>
                <input type="file" id="cmpPhoto" accept="image/*" style="display:none" onchange="handlePhotoSelect(this)">
              </div>
            </div>
          </div>
          <div class="modal-footer" style="padding:14px 20px;display:flex;justify-content:flex-end;gap:10px">
            <button type="button" class="btn btn-outline btn-sm" onclick="closeComplaintModal()">Cancel</button>
            <button type="submit" class="btn btn-danger btn-sm" id="cmpSubmitBtn" style="display:flex;align-items:center;gap:6px">
              ${Icons.complaint} Submit Complaint
            </button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function handlePhotoSelect(input) {
  const label = document.getElementById('photoUploadLabel');
  if (input.files && input.files[0]) {
    label.textContent = `📷 ${input.files[0].name} selected`;
    label.style.color = 'var(--color-normal)';
  }
}

function openComplaintModal(prefilledArea) {
  const modal = document.getElementById('complaintModal');
  if (!modal) return;
  if (prefilledArea) {
    const select = document.getElementById('cmpArea');
    if (select) select.value = prefilledArea;
  }
  modal.classList.add('open');
}

function closeComplaintModal() {
  document.getElementById('complaintModal')?.classList.remove('open');
}

function submitComplaint(e) {
  e.preventDefault();
  const area     = document.getElementById('cmpArea').value;
  const category = document.getElementById('cmpCategory').value;
  const location = document.getElementById('cmpLocation').value.trim();
  const desc     = document.getElementById('cmpDesc').value.trim();

  const ticketId = 'CMP-' + (Math.floor(1000 + Math.random() * 9000));
  const newComplaint = {
    id: ticketId,
    area,
    category,
    location,
    desc,
    status: 'In Progress',
    createdAt: 'Just now',
    priority: category === 'Bin Overflow' ? 'High' : 'Medium'
  };

  // Store in sessionStorage so it persists in the session
  try {
    const list = JSON.parse(sessionStorage.getItem('sm_user_complaints') || '[]');
    list.unshift(newComplaint);
    sessionStorage.setItem('sm_user_complaints', JSON.stringify(list));
  } catch(e) {}

  closeComplaintModal();
  document.getElementById('complaintForm')?.reset();
  const photoLabel = document.getElementById('photoUploadLabel');
  if (photoLabel) photoLabel.textContent = 'Click to upload photo evidence';

  showToast(`Complaint #${ticketId} submitted! Municipal team notified.`, 'success', 4500);

  if (typeof renderCitizenComplaints === 'function') {
    renderCitizenComplaints();
  }
}

// ── Waste Guide Modal ──────────────────────────────────────────
function buildGuideModal() {
  return `
    <div class="modal-overlay" id="guideModal" role="dialog" aria-modal="true" aria-labelledby="guideModalTitle">
      <div class="modal" style="max-width:620px;max-height:90vh;overflow-y:auto">
        <div class="modal-header">
          <div style="display:flex;align-items:center;gap:10px">
            <div style="width:36px;height:36px;border-radius:8px;background:#dcfce7;color:#16a34a;display:flex;align-items:center;justify-content:center">
              ${Icons.leaf}
            </div>
            <div>
              <div class="modal-title" id="guideModalTitle">Waste Segregation Guide</div>
              <div style="font-size:0.75rem;color:var(--color-text-muted)">Guidelines for Source Segregation & Cleaner Neighbourhoods</div>
            </div>
          </div>
          <button class="modal-close" onclick="closeGuideModal()" aria-label="Close">${Icons.close}</button>
        </div>
        <div class="modal-body" style="padding:20px;display:flex;flex-direction:column;gap:16px">
          
          <div style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:var(--radius-md);padding:16px">
            <div style="display:flex;align-items:center;gap:8px;font-weight:750;color:#15803d;font-size:0.95rem;margin-bottom:6px">
              🟢 Green Bin — Wet / Organic Waste
            </div>
            <p style="font-size:0.83rem;color:#166534;margin-bottom:8px">Biodegradable kitchen and garden waste collected daily for composting.</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.78rem;color:#14532d">
              <div>✅ Vegetable & fruit peels</div>
              <div>✅ Cooked food & tea leaves</div>
              <div>✅ Eggshells & bones</div>
              <div>✅ Garden leaves & flowers</div>
            </div>
          </div>

          <div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:var(--radius-md);padding:16px">
            <div style="display:flex;align-items:center;gap:8px;font-weight:750;color:#1d4ed8;font-size:0.95rem;margin-bottom:6px">
              🔵 Blue Bin — Dry / Recyclable Waste
            </div>
            <p style="font-size:0.83rem;color:#1e40af;margin-bottom:8px">Clean and dry recyclables sent to municipal processing centres.</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.78rem;color:#1e3a8a">
              <div>✅ Paper, cardboard & cartons</div>
              <div>✅ Plastic bottles & containers</div>
              <div>✅ Metal cans & foils</div>
              <div>✅ Glass bottles & jars</div>
            </div>
          </div>

          <div style="background:#fef2f2;border:1px solid #fecaca;border-radius:var(--radius-md);padding:16px">
            <div style="display:flex;align-items:center;gap:8px;font-weight:750;color:#b91c1c;font-size:0.95rem;margin-bottom:6px">
              🔴 Red Bin — Domestic Hazardous & Sanitary
            </div>
            <p style="font-size:0.83rem;color:#991b1b;margin-bottom:8px">Safely wrap before disposal to protect sanitary workers.</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:0.78rem;color:#7f1d1d">
              <div>⚠️ Expired medicines</div>
              <div>⚠️ Used batteries & e-waste</div>
              <div>⚠️ Paint cans & chemicals</div>
              <div>⚠️ Sanitary pads & diapers (wrapped)</div>
            </div>
          </div>

        </div>
        <div class="modal-footer" style="padding:14px 20px;display:flex;justify-content:flex-end">
          <button class="btn btn-primary btn-sm" onclick="closeGuideModal()">Got It, Thanks!</button>
        </div>
      </div>
    </div>
  `;
}

function openGuideModal() {
  document.getElementById('guideModal')?.classList.add('open');
}

function closeGuideModal() {
  document.getElementById('guideModal')?.classList.remove('open');
}

// ── Modal close on overlay click ──────────────────────────────
document.addEventListener('click', (e) => {
  if (e.target.id === 'binModal')       closeBinModal();
  if (e.target.id === 'assignModal')    closeAssignModal();
  if (e.target.id === 'complaintModal') closeComplaintModal();
  if (e.target.id === 'guideModal')     closeGuideModal();
=======
// ── Modal close on overlay click ──────────────────────────────
document.addEventListener('click', (e) => {
  if (e.target.id === 'binModal')    closeBinModal();
  if (e.target.id === 'assignModal') closeAssignModal();
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
});

// ── Keyboard close ─────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
<<<<<<< HEAD
  if (e.key === 'Escape') {
    closeBinModal();
    closeAssignModal();
    closeComplaintModal();
    closeGuideModal();
  }
=======
  if (e.key === 'Escape') { closeBinModal(); closeAssignModal(); }
>>>>>>> 8035904576ca87829a8802f1424ca373cf153b94
});
