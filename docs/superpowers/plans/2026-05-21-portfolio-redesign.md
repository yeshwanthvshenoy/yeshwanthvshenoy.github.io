# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the generic BootstrapMade template with a dark hacker-terminal portfolio — fixed sidebar nav, scrollable content pane, four sections (About / Skills / Experience / Contact).

**Architecture:** Single `index.html` with inline section structure. `style.css` is a full rewrite using CSS custom properties. `main.js` uses vanilla IntersectionObserver for fade-in animations and active nav highlighting plus Typed.js for the hero typing effect. No jQuery, no Bootstrap JS — Bootstrap CSS kept only for its normalize/reset.

**Tech Stack:** Bootstrap 5 CSS (CDN/local), Boxicons (social icons), Typed.js (hero typing), JetBrains Mono + Inter (Google Fonts), vanilla JS (IntersectionObserver, mobile toggle)

---

## File Structure

| File | Action | Purpose |
|---|---|---|
| `index.html` | Full rewrite | Single-page HTML — sidebar + 4 sections |
| `assets/css/style.css` | Full rewrite | All custom styles, CSS variables, responsive |
| `assets/js/main.js` | Full rewrite | Typed.js init, IntersectionObserver, mobile menu |
| `assets/vendor/bootstrap/css/` | Keep `bootstrap.min.css` only | CSS normalize/reset |
| `assets/vendor/boxicons/` | Keep | Social icon font |
| `assets/vendor/typed.js/typed.min.js` | Keep | Typing animation |
| `assets/vendor/jquery/` | Delete | Unused |
| `assets/vendor/jquery.easing/` | Delete | Unused |
| `assets/vendor/php-email-form/` | Delete | Unused |
| `assets/vendor/owl.carousel/` | Delete | Unused |
| `assets/vendor/venobox/` | Delete | Unused |
| `assets/vendor/isotope-layout/` | Delete | Unused |
| `assets/vendor/counterup/` | Delete | Unused |
| `assets/vendor/waypoints/` | Delete | Unused |
| `assets/vendor/icofont/` | Delete | Replaced by boxicons |
| `assets/vendor/remixicon/` | Delete | Replaced by boxicons |
| `.gitignore` | Update | Add `.superpowers/` |

---

## Task 1: Vendor Cleanup + .gitignore

**Files:**
- Delete: `assets/vendor/jquery/`, `assets/vendor/jquery.easing/`, `assets/vendor/php-email-form/`, `assets/vendor/owl.carousel/`, `assets/vendor/venobox/`, `assets/vendor/isotope-layout/`, `assets/vendor/counterup/`, `assets/vendor/waypoints/`, `assets/vendor/icofont/`, `assets/vendor/remixicon/`
- Modify: `.gitignore`

- [ ] **Step 1: Delete unused vendor directories**

Run in PowerShell from the repo root:
```powershell
Remove-Item -Recurse -Force assets/vendor/jquery
Remove-Item -Recurse -Force assets/vendor/jquery.easing
Remove-Item -Recurse -Force assets/vendor/php-email-form
Remove-Item -Recurse -Force "assets/vendor/owl.carousel"
Remove-Item -Recurse -Force assets/vendor/venobox
Remove-Item -Recurse -Force "assets/vendor/isotope-layout"
Remove-Item -Recurse -Force assets/vendor/counterup
Remove-Item -Recurse -Force assets/vendor/waypoints
Remove-Item -Recurse -Force assets/vendor/icofont
Remove-Item -Recurse -Force assets/vendor/remixicon
```

- [ ] **Step 2: Verify only expected vendor dirs remain**

```powershell
Get-ChildItem assets/vendor -Directory | Select-Object Name
```

Expected output — exactly these three:
```
bootstrap
boxicons
typed.js
```

- [ ] **Step 3: Update .gitignore**

Replace `.gitignore` contents with:
```
.DS_Store
.superpowers/
```

- [ ] **Step 4: Commit**

```powershell
git add -A
git commit -m "chore: remove unused vendor libraries, update gitignore"
```

---

## Task 2: Write style.css

**Files:**
- Rewrite: `assets/css/style.css`

- [ ] **Step 1: Replace the entire contents of `assets/css/style.css` with the following**

```css
/* ── Design Tokens ─────────────────────────────────────────── */
:root {
  --bg:            #080808;
  --bg-secondary:  #0a0a0a;
  --accent:        #00ff88;
  --accent-dim:    rgba(0, 255, 136, 0.13);
  --accent-bg:     #0d1f14;
  --text-primary:  #f0f0f0;
  --text-muted:    #444;
  --text-ghost:    #1e1e1e;
  --border:        #111;
  --border-light:  #1a1a1a;
  --sidebar-width: 220px;
  --font-sans:     'Inter', -apple-system, sans-serif;
  --font-mono:     'JetBrains Mono', 'Fira Code', monospace;
}

/* ── Reset ─────────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.6;
  display: flex;
  height: 100vh;
  overflow: hidden;
}

a { color: inherit; text-decoration: none; }
ul { list-style: none; }

/* ── Scrollbar ──────────────────────────────────────────────── */
.content::-webkit-scrollbar { width: 4px; }
.content::-webkit-scrollbar-track { background: var(--bg); }
.content::-webkit-scrollbar-thumb {
  background: var(--border-light);
  border-radius: 2px;
}

/* ── Sidebar ────────────────────────────────────────────────── */
.sidebar {
  width: var(--sidebar-width);
  flex-shrink: 0;
  height: 100vh;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 36px 24px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
}

.sidebar-brand {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 40px;
}

.brand-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.2px;
}

.brand-role {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 0.3px;
}

/* Nav */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.15s;
}

.nav-item:hover { background: var(--border); }
.nav-item.active { background: #0d1a10; }

.nav-marker {
  width: 2px;
  height: 14px;
  border-radius: 1px;
  background: transparent;
  flex-shrink: 0;
  transition: background 0.15s;
}
.nav-item.active .nav-marker { background: var(--accent); }

.nav-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.5px;
  transition: color 0.15s;
}
.nav-item.active .nav-label,
.nav-item:hover .nav-label { color: var(--text-primary); }

/* Social icons */
.sidebar-social {
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.social-icon {
  width: 30px;
  height: 30px;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 14px;
  transition: border-color 0.15s, color 0.15s;
}

.social-icon:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ── Content Pane ───────────────────────────────────────────── */
.content {
  margin-left: var(--sidebar-width);
  flex: 1;
  height: 100vh;
  overflow-y: auto;
}

/* ── Sections ───────────────────────────────────────────────── */
.section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 72px;
  border-bottom: 1px solid var(--border);
}

.section-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-ghost);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 36px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.section-label::after {
  content: '';
  display: block;
  width: 60px;
  height: 1px;
  background: var(--border);
}

/* ── Fade-in ────────────────────────────────────────────────── */
.fade-in {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ── About ──────────────────────────────────────────────────── */
.hero-name {
  font-size: 56px;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -2.5px;
  line-height: 1;
  margin-bottom: 16px;
}

.hero-typing {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  margin-bottom: 28px;
  min-height: 20px;
}

.typed-cursor { color: var(--accent); }

.hero-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.8;
  max-width: 480px;
}

.stats-row {
  display: flex;
  gap: 48px;
  margin-top: 40px;
  padding-top: 32px;
  border-top: 1px solid var(--border);
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-family: var(--font-mono);
  font-size: 28px;
  font-weight: 500;
  color: var(--accent);
  letter-spacing: -1px;
  line-height: 1;
}

.stat-label {
  font-size: 9px;
  color: var(--text-ghost);
  letter-spacing: 2px;
  text-transform: uppercase;
}

/* ── Skills ─────────────────────────────────────────────────── */
.skills-grid {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.skill-category-label {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-ghost);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 3px;
  letter-spacing: 0.2px;
}

.tag-primary {
  background: var(--accent-bg);
  color: var(--accent);
  border: 1px solid var(--accent-dim);
}

.tag-secondary {
  background: var(--border);
  color: #555;
  border: 1px solid var(--border-light);
}

/* ── Experience ─────────────────────────────────────────────── */
.exp-list {
  display: flex;
  flex-direction: column;
}

.exp-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 32px;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
}

.exp-item:first-child { padding-top: 0; }
.exp-item:last-child { border-bottom: none; }

.exp-meta {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-top: 2px;
}

.exp-company {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--accent);
  letter-spacing: 0.5px;
}

.exp-dates {
  font-size: 10px;
  color: var(--text-ghost);
  letter-spacing: 0.3px;
}

.exp-title {
  font-size: 14px;
  font-weight: 600;
  color: #ccc;
  margin-bottom: 10px;
}

.exp-bullets {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.exp-bullets li {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.65;
  padding-left: 14px;
  position: relative;
}

.exp-bullets li::before {
  content: '›';
  position: absolute;
  left: 0;
  color: rgba(0, 255, 136, 0.35);
}

/* ── Contact ────────────────────────────────────────────────── */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  max-width: 520px;
  margin-bottom: 32px;
}

.contact-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 16px 20px;
  transition: border-color 0.2s;
  display: block;
}

.contact-card:hover { border-color: rgba(0, 255, 136, 0.25); }

.contact-card-label {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-ghost);
  letter-spacing: 2.5px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.contact-card-value {
  font-size: 12px;
  color: #666;
}

.resume-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border: 1px solid rgba(0, 255, 136, 0.3);
  color: var(--accent);
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 1px;
  border-radius: 3px;
  transition: background 0.15s, border-color 0.15s;
}

.resume-btn:hover {
  background: var(--accent-bg);
  border-color: var(--accent);
}

/* ── Mobile Header ──────────────────────────────────────────── */
.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 200;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 14px 20px;
  align-items: center;
  justify-content: space-between;
}

.mobile-brand {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  letter-spacing: 1px;
}

.menu-toggle {
  background: none;
  border: none;
  color: #888;
  font-size: 22px;
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

/* ── Responsive ─────────────────────────────────────────────── */
@media (max-width: 991px) {
  .mobile-header { display: flex; }

  body {
    overflow: auto;
    flex-direction: column;
    height: auto;
  }

  .sidebar {
    left: -100%;
    height: 100vh;
    width: 260px;
    transition: left 0.25s ease;
    padding-top: 72px;
  }

  .sidebar.mobile-open { left: 0; }

  .content {
    margin-left: 0;
    height: auto;
    overflow-y: visible;
    padding-top: 56px;
  }

  .section {
    padding: 60px 28px;
    min-height: auto;
  }

  .hero-name { font-size: 40px; letter-spacing: -1.5px; }

  .exp-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }

  .contact-grid { grid-template-columns: 1fr; }

  .stats-row { gap: 28px; }
}
```

- [ ] **Step 2: Verify the file was written**

Open `assets/css/style.css` in an editor and confirm it starts with `/* ── Design Tokens` and contains `.resume-btn` near the end.

- [ ] **Step 3: Commit**

```powershell
git add assets/css/style.css
git commit -m "feat: rewrite style.css — hacker terminal design system"
```

---

## Task 3: Write index.html

**Files:**
- Rewrite: `index.html`

- [ ] **Step 1: Replace the entire contents of `index.html` with the following**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Yeshwanth V Shenoy</title>
  <meta name="description" content="Staff Software Engineer — Platform Engineering, Distributed Systems, Cloud Native SaaS">
  <link rel="icon" type="image/png" href="/favicon.png">

  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

  <!-- Vendor CSS -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet">

  <!-- Main CSS -->
  <link href="assets/css/style.css" rel="stylesheet">

  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-F35QEVNWJW"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-F35QEVNWJW');
  </script>
</head>
<body>

  <!-- Mobile header (hidden on desktop) -->
  <header class="mobile-header d-lg-none">
    <span class="mobile-brand">YVS</span>
    <button class="menu-toggle" aria-label="Toggle navigation">
      <i class="bx bx-menu"></i>
    </button>
  </header>

  <!-- Sidebar -->
  <aside class="sidebar">
    <div class="sidebar-brand">
      <span class="brand-name">Yeshwanth V Shenoy</span>
      <span class="brand-role">// staff_engineer</span>
    </div>

    <nav class="sidebar-nav">
      <a href="#about" class="nav-item active">
        <div class="nav-marker"></div>
        <span class="nav-label">about</span>
      </a>
      <a href="#skills" class="nav-item">
        <div class="nav-marker"></div>
        <span class="nav-label">skills</span>
      </a>
      <a href="#experience" class="nav-item">
        <div class="nav-marker"></div>
        <span class="nav-label">experience</span>
      </a>
      <a href="#contact" class="nav-item">
        <div class="nav-marker"></div>
        <span class="nav-label">contact</span>
      </a>
    </nav>

    <div class="sidebar-social">
      <a href="mailto:yeshwanthvshenoy@gmail.com" class="social-icon" title="Email" target="_blank">
        <i class="bx bx-mail-send"></i>
      </a>
      <a href="https://www.linkedin.com/in/yeshwanthvshenoy" class="social-icon" title="LinkedIn" target="_blank">
        <i class="bx bxl-linkedin"></i>
      </a>
      <a href="https://www.github.com/yeshwanthvshenoy" class="social-icon" title="GitHub" target="_blank">
        <i class="bx bxl-github"></i>
      </a>
      <a href="https://stackoverflow.com/u/12767234" class="social-icon" title="Stack Overflow" target="_blank">
        <i class="bx bxl-stack-overflow"></i>
      </a>
      <a href="https://medium.com/@yeshwanthvshenoy" class="social-icon" title="Medium" target="_blank">
        <i class="bx bxl-medium"></i>
      </a>
    </div>
  </aside>

  <!-- Main content -->
  <main class="content">

    <!-- About -->
    <section id="about" class="section">
      <div class="section-label">// about</div>
      <h1 class="hero-name">Yeshwanth<br>V Shenoy</h1>
      <div class="hero-typing"><span id="typed"></span></div>
      <p class="hero-desc">
        11+ years building distributed systems and platform engineering at scale.
        Currently at Okta — shipping developer tooling, Git Ops platforms, and DevEx infrastructure.
      </p>
      <div class="stats-row fade-in">
        <div class="stat-item">
          <span class="stat-number">11+</span>
          <span class="stat-label">Years Exp</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">4</span>
          <span class="stat-label">Companies</span>
        </div>
        <div class="stat-item">
          <span class="stat-number">99.99%</span>
          <span class="stat-label">SLA Delivered</span>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="section">
      <div class="section-label">// skills</div>
      <div class="skills-grid fade-in">
        <div class="skill-category">
          <div class="skill-category-label">languages</div>
          <div class="skill-tags">
            <span class="tag tag-primary">Java</span>
            <span class="tag tag-primary">Python</span>
            <span class="tag tag-primary">Go</span>
            <span class="tag tag-primary">TypeScript</span>
          </div>
        </div>
        <div class="skill-category">
          <div class="skill-category-label">infrastructure</div>
          <div class="skill-tags">
            <span class="tag tag-primary">Kubernetes</span>
            <span class="tag tag-primary">Docker</span>
            <span class="tag tag-secondary">Kafka</span>
            <span class="tag tag-secondary">gRPC</span>
            <span class="tag tag-secondary">GCP</span>
            <span class="tag tag-secondary">AWS</span>
          </div>
        </div>
        <div class="skill-category">
          <div class="skill-category-label">databases</div>
          <div class="skill-tags">
            <span class="tag tag-secondary">PostgreSQL</span>
            <span class="tag tag-secondary">MySQL</span>
            <span class="tag tag-secondary">MongoDB</span>
            <span class="tag tag-secondary">Redis</span>
          </div>
        </div>
        <div class="skill-category">
          <div class="skill-category-label">observability</div>
          <div class="skill-tags">
            <span class="tag tag-secondary">Prometheus</span>
            <span class="tag tag-secondary">Grafana</span>
            <span class="tag tag-secondary">Datadog</span>
            <span class="tag tag-secondary">PagerDuty</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section id="experience" class="section">
      <div class="section-label">// experience</div>
      <div class="exp-list fade-in">

        <div class="exp-item">
          <div class="exp-meta">
            <span class="exp-company">Okta</span>
            <span class="exp-dates">Jan 2024 – Present</span>
          </div>
          <div class="exp-body">
            <div class="exp-title">Staff Software Engineer</div>
            <ul class="exp-bullets">
              <li>Led developer tooling that accelerated code delivery to production by 15%, ensuring adherence to Okta's security standards</li>
              <li>Initiated and delivered a Developer Portal (akin to Backstage) for Git Admin and Git Ops, demonstrating end-to-end ownership from ideation to adoption</li>
              <li>Mentored a team of 6 engineers toward quarterly roadmap delivery and collaborated with leadership on roadmap planning</li>
            </ul>
          </div>
        </div>

        <div class="exp-item">
          <div class="exp-meta">
            <span class="exp-company">Rakuten</span>
            <span class="exp-dates">Aug 2020 – Dec 2023</span>
          </div>
          <div class="exp-body">
            <div class="exp-title">Lead Software Engineer</div>
            <ul class="exp-bullets">
              <li>Built a high-load secret manager with 99.99% SLA, onboarded onto Internal Cloud Platform within 8 months</li>
              <li>Architected a Low Code Test Automation Platform widely adopted for release and regression testing</li>
              <li>Decomposed a large monolith into microservices on Kubernetes; transformed team into a self-organizing deployment unit</li>
            </ul>
          </div>
        </div>

        <div class="exp-item">
          <div class="exp-meta">
            <span class="exp-company">Freshworks</span>
            <span class="exp-dates">May 2018 – Aug 2020</span>
          </div>
          <div class="exp-body">
            <div class="exp-title">Senior Software Engineer</div>
            <ul class="exp-bullets">
              <li>Built real-time microservices with 99.999% SLA and latencies under 250ms for Freshworks products</li>
              <li>Reduced infrastructure costs ~20% via cloud-agnostic tooling and open source adoption</li>
              <li>Steered OWASP compliance; integrated SonarQube for code quality enforcement</li>
            </ul>
          </div>
        </div>

        <div class="exp-item">
          <div class="exp-meta">
            <span class="exp-company">TPF Software</span>
            <span class="exp-dates">May 2015 – May 2018</span>
          </div>
          <div class="exp-body">
            <div class="exp-title">Software Engineer</div>
            <ul class="exp-bullets">
              <li>Built IDE-like "Find Usages" tooling for mainframe developers, directly increasing customer revenue by 2%</li>
              <li>Shipped critical features with 100% compliance on security audits and load testing</li>
            </ul>
          </div>
        </div>

      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="section">
      <div class="section-label">// contact</div>
      <div class="contact-grid fade-in">
        <a href="mailto:yeshwanthvshenoy@gmail.com" class="contact-card">
          <div class="contact-card-label">email</div>
          <div class="contact-card-value">yeshwanthvshenoy@gmail.com</div>
        </a>
        <a href="https://www.linkedin.com/in/yeshwanthvshenoy" target="_blank" class="contact-card">
          <div class="contact-card-label">linkedin</div>
          <div class="contact-card-value">in/yeshwanthvshenoy</div>
        </a>
        <a href="https://www.github.com/yeshwanthvshenoy" target="_blank" class="contact-card">
          <div class="contact-card-label">github</div>
          <div class="contact-card-value">github.com/yeshwanthvshenoy</div>
        </a>
        <a href="https://medium.com/@yeshwanthvshenoy" target="_blank" class="contact-card">
          <div class="contact-card-label">medium</div>
          <div class="contact-card-value">@yeshwanthvshenoy</div>
        </a>
      </div>
      <a href="https://drive.google.com/file/d/1qBiGAyf0xXheKbtoJrWGcVWLssAcLRdb/view?usp=sharing"
         target="_blank" class="resume-btn">
        ↗ view resume
      </a>
    </section>

  </main>

  <!-- Vendor JS -->
  <script src="assets/vendor/typed.js/typed.min.js"></script>

  <!-- Main JS -->
  <script src="assets/js/main.js"></script>

</body>
</html>
```

- [ ] **Step 2: Open `index.html` directly in a browser (double-click the file)**

Expected: Dark page with visible sidebar (name + `// staff_engineer` + nav items + social icons) and content pane showing the About section. No console errors about missing CSS files. The typing cursor is visible but stationary (JS not wired yet).

- [ ] **Step 3: Commit**

```powershell
git add index.html
git commit -m "feat: rewrite index.html — sidebar layout, four sections"
```

---

## Task 4: Write main.js

**Files:**
- Rewrite: `assets/js/main.js`

- [ ] **Step 1: Replace the entire contents of `assets/js/main.js` with the following**

```js
// Typed.js — hero typing animation
new Typed('#typed', {
  strings: [
    'Staff Software Engineer',
    'Platform Engineering',
    'DevEx',
    'Distributed Systems',
    'Cloud Native SaaS'
  ],
  typeSpeed: 80,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
});

// Fade-in on scroll — one-time trigger per element
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// Active nav highlight — updates as sections enter viewport
const navLinks = document.querySelectorAll('.nav-item');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-item[href="#${entry.target.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => navObserver.observe(section));

// Mobile sidebar toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    sidebar.classList.toggle('mobile-open');
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
      sidebar.classList.remove('mobile-open');
    }
  });

  // Close sidebar when a nav link is clicked on mobile
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
    });
  });
}
```

- [ ] **Step 2: Refresh `index.html` in the browser**

Expected:
- Typing animation starts in the hero section cycling through the five strings
- Stats row (`11+ / 4 / 99.99%`) fades in smoothly (it's visible immediately since About is the first section)
- No console errors

- [ ] **Step 3: Scroll through all four sections**

Expected:
- `// skills` — skills grid fades in as it enters the viewport
- `// experience` — experience list fades in
- `// contact` — contact cards fade in
- Active nav item in the sidebar updates its green left-bar indicator as each section crosses 50% of the viewport

- [ ] **Step 4: Commit**

```powershell
git add assets/js/main.js
git commit -m "feat: add main.js — Typed.js, IntersectionObserver, mobile nav"
```

---

## Task 5: Final Browser Verification

**Files:** None — verification only

- [ ] **Step 1: Open `index.html` in a browser, run through this checklist**

Desktop (viewport > 991px):
- [ ] Sidebar is visible and fixed on the left; content scrolls independently
- [ ] `// staff_engineer` label is green and monospaced
- [ ] Nav items show green left-bar on the active section as you scroll
- [ ] Typing animation cycles through all five strings in the hero
- [ ] Stats row shows `11+`, `4`, `99.99%` in green monospace
- [ ] Skills — four categories with green (primary) and gray (secondary) tags
- [ ] Experience — four jobs, 2-column meta+body layout, `›` bullet prefix in faint green
- [ ] Contact — 2×2 card grid, cards light up green border on hover
- [ ] Resume button `↗ view resume` is outlined in green and links correctly
- [ ] Social icons in sidebar border turns green on hover
- [ ] No favicon error in console (404 on `/favicon.png` is acceptable if file missing)

- [ ] **Step 2: Resize browser to < 992px width (mobile check)**

Expected:
- Mobile header bar appears with `YVS` logo and hamburger icon
- Sidebar is hidden
- Hamburger opens the sidebar as a drawer overlay
- Clicking a nav link closes the drawer and scrolls to the section
- All sections render correctly in single-column
- Experience items stack (meta above body)
- Contact grid is single-column

- [ ] **Step 3: Commit if any fixes were made, then push**

```powershell
git add -A
git commit -m "fix: post-verification polish"
git push origin master
```

Expected: GitHub Pages deploys automatically within ~60 seconds. Visit `https://yeshwanthvshenoy.github.io` to confirm the live site matches the local version.
