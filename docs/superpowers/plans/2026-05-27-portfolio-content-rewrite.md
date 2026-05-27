# Portfolio Content Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rewrite portfolio site copy to emphasize platform adoption, scale, and strategic influence — shift from "ships things at scale" to "builds platforms that 2000+ engineers adopt."

**Architecture:** Pure content rewrite of index.html. Update copy in hero section, stats bar, all four experience items, skills section header, and contact section. No structural changes, no new files, no CSS/JS changes.

**Tech Stack:** HTML only. No build step.

---

## Task 1: Update Hero Section Description

**Files:**
- Modify: `index.html:83-86`

- [ ] **Step 1: Locate hero description**

Open `index.html` and find the hero description paragraph (around line 83):
```html
<p class="hero-desc">
  11+ years building distributed systems and platform engineering at scale.
  Shipping developer tooling, GitOps platforms, and DevEx infrastructure
  that teams actually love to use.
</p>
```

- [ ] **Step 2: Replace with new copy**

```html
<p class="hero-desc">
  Staff engineer building platforms that power engineering teams at scale.
  2000+ engineers rely on infrastructure I've shipped — from secret managers
  to GitOps platforms to low-code testing. I obsess over adoption,
  compliance, and solving the problems teams actually care about.
</p>
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser and scroll to the hero section. Confirm the new text appears correctly and line breaks look good.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: rewrite hero description to emphasize adoption and scale"
```

---

## Task 2: Update Code Window Focus Array

**Files:**
- Modify: `index.html:128-133`

- [ ] **Step 1: Locate code window focus array**

Find the `focus` array in the code window (around line 128):
```javascript
focus: [
  "Platform Engineering",
  "Distributed Systems",
  "Cloud Native SaaS",
  "Developer Experience",
],
```

- [ ] **Step 2: Replace with new array**

```javascript
focus: [
  "Platform Engineering",
  "Developer Adoption",
  "Distributed Systems",
  "Compliance & Scale",
],
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser. The code window on the right side of the hero should show the updated focus items.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update code window focus to emphasize adoption and compliance"
```

---

## Task 3: Update Stats Bar

**Files:**
- Modify: `index.html:151-166`

- [ ] **Step 1: Locate stats bar**

Find the stats bar section (around line 151):
```html
<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-number">11+</span>
    <span class="stat-label">Years Experience</span>
  </div>
  <div class="stat-sep"></div>
  <div class="stat-item">
    <span class="stat-number">4</span>
    <span class="stat-label">Companies</span>
  </div>
  <div class="stat-sep"></div>
  <div class="stat-item">
    <span class="stat-number">99.99%</span>
    <span class="stat-label">SLA Delivered</span>
  </div>
</div>
```

- [ ] **Step 2: Replace with new stats**

```html
<div class="stats-grid">
  <div class="stat-item">
    <span class="stat-number">2000+</span>
    <span class="stat-label">Engineers Onboarded</span>
  </div>
  <div class="stat-sep"></div>
  <div class="stat-item">
    <span class="stat-number">3K</span>
    <span class="stat-label">RPS Peak Traffic</span>
  </div>
  <div class="stat-sep"></div>
  <div class="stat-item">
    <span class="stat-number">30%</span>
    <span class="stat-label">Infrastructure Cost Reduction</span>
  </div>
</div>
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser and scroll to the stats bar below the hero. Confirm it shows the new metrics: 2000+ / 3K / 30%.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update stats bar to show adoption, scale, and cost metrics"
```

---

## Task 4: Update Okta Experience Item

**Files:**
- Modify: `index.html:250-264`

- [ ] **Step 1: Locate Okta experience item**

Find the Okta timeline item (around line 247-266):
```html
<div class="timeline-item">
  <div class="timeline-marker"><div class="timeline-dot"></div></div>
  <div class="timeline-card">
    <div class="timeline-meta">
      <span class="timeline-company">Okta</span>
      <span class="timeline-dates">Jan 2024 – Present</span>
    </div>
    <div class="timeline-role">Staff Software Engineer</div>
    <div class="timeline-tags">
      <span class="tl-tag">GitOps</span>
      <span class="tl-tag">Developer Tooling</span>
      <span class="tl-tag">DevEx</span>
    </div>
    <ul class="timeline-bullets">
      <li>Led developer tooling that accelerated code delivery to production by 15%, ensuring adherence to Okta's security standards</li>
      <li>Initiated and delivered a Developer Portal (akin to Backstage) for Git Admin and GitOps, demonstrating end-to-end ownership from ideation to adoption</li>
      <li>Mentored a team of 6 engineers toward quarterly roadmap delivery and collaborated with leadership on roadmap planning</li>
    </ul>
  </div>
</div>
```

- [ ] **Step 2: Update tags**

Replace the tags:
```html
<div class="timeline-tags">
  <span class="tl-tag">Platform Engineering</span>
  <span class="tl-tag">Developer Adoption</span>
  <span class="tl-tag">GitOps</span>
</div>
```

- [ ] **Step 3: Update bullets**

Replace the three bullet points:
```html
<ul class="timeline-bullets">
  <li>Built a Developer Portal adopted across 500+ engineers for Git Admin and GitOps workflows; designed for usability and compliance from the ground up</li>
  <li>Owned end-to-end delivery: scoped the problem, architected the platform, drove adoption through team collaboration and continuous feedback</li>
  <li>Mentored 6 engineers on platform thinking and quarterly roadmap planning; helped the team own outcomes, not just features</li>
</ul>
```

- [ ] **Step 4: Verify in browser**

Open `index.html` in a browser, scroll to the Experience section, and confirm the Okta role shows the updated content with "500+ engineers" and emphasis on adoption.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: rewrite Okta experience to emphasize platform adoption and ownership"
```

---

## Task 5: Update Rakuten Experience Item

**Files:**
- Modify: `index.html:268-286`

- [ ] **Step 1: Locate Rakuten experience item**

Find the Rakuten timeline item (around line 268-287):
```html
<div class="timeline-item">
  <div class="timeline-marker"><div class="timeline-dot"></div></div>
  <div class="timeline-card">
    <div class="timeline-meta">
      <span class="timeline-company">Rakuten</span>
      <span class="timeline-dates">Aug 2020 – Dec 2023</span>
    </div>
    <div class="timeline-role">Lead Software Engineer</div>
    <div class="timeline-tags">
      <span class="tl-tag">Microservices</span>
      <span class="tl-tag">Kubernetes</span>
      <span class="tl-tag">Cloud Platform</span>
    </div>
    <ul class="timeline-bullets">
      <li>Built a high-load secret manager with 99.99% SLA, onboarded onto Internal Cloud Platform within 8 months</li>
      <li>Architected a Low Code Test Automation Platform widely adopted for release and regression testing</li>
      <li>Decomposed a large monolith into microservices on Kubernetes; transformed team into a self-organizing deployment unit</li>
    </ul>
  </div>
</div>
```

- [ ] **Step 2: Update tags**

Replace the tags:
```html
<div class="timeline-tags">
  <span class="tl-tag">Platform Engineering</span>
  <span class="tl-tag">Microservices</span>
  <span class="tl-tag">Cloud Scale</span>
</div>
```

- [ ] **Step 3: Update bullets**

Replace the three bullet points:
```html
<ul class="timeline-bullets">
  <li>Shipped a secret manager handling 3K RPS with 99.99% SLA, deployed across the Internal Cloud Platform; adopted by 1000+ engineers within 8 months</li>
  <li>Built a Low Code Test Automation Platform adopted by release and regression teams; reduced testing friction and accelerated feedback loops</li>
  <li>Decomposed a critical monolith into microservices; helped teams become self-organizing deployment units with clear ownership</li>
</ul>
```

- [ ] **Step 4: Verify in browser**

Open `index.html` in a browser, scroll to the Experience section, and confirm the Rakuten role shows "3K RPS" and "1000+ engineers" with emphasis on adoption.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: rewrite Rakuten experience to lead with adoption scale and impact"
```

---

## Task 6: Update Freshworks Experience Item

**Files:**
- Modify: `index.html:289-307`

- [ ] **Step 1: Locate Freshworks experience item**

Find the Freshworks timeline item (around line 289-308):
```html
<div class="timeline-item">
  <div class="timeline-marker"><div class="timeline-dot"></div></div>
  <div class="timeline-card">
    <div class="timeline-meta">
      <span class="timeline-company">Freshworks</span>
      <span class="timeline-dates">May 2018 – Aug 2020</span>
    </div>
    <div class="timeline-role">Senior Software Engineer</div>
    <div class="timeline-tags">
      <span class="tl-tag">Real-time Systems</span>
      <span class="tl-tag">Cloud</span>
      <span class="tl-tag">OWASP</span>
    </div>
    <ul class="timeline-bullets">
      <li>Built real-time microservices with 99.999% SLA and latencies under 250ms for Freshworks products</li>
      <li>Reduced infrastructure costs ~20% via cloud-agnostic tooling and open source adoption</li>
      <li>Steered OWASP compliance; integrated SonarQube for code quality enforcement</li>
    </ul>
  </div>
</div>
```

- [ ] **Step 2: Update tags**

Replace the tags:
```html
<div class="timeline-tags">
  <span class="tl-tag">Real-time Systems</span>
  <span class="tl-tag">Product Reliability</span>
  <span class="tl-tag">Compliance</span>
</div>
```

- [ ] **Step 3: Update bullets**

Replace the three bullet points:
```html
<ul class="timeline-bullets">
  <li>Shipped real-time microservices (99.999% SLA, &lt;250ms latencies) that powered core Freshworks products; handled millions of requests daily</li>
  <li>Reduced infrastructure spend by 20% through cloud-agnostic architecture and open source adoption — proving scale doesn't require premium tooling</li>
  <li>Owned OWASP compliance strategy; integrated SonarQube to make security and code quality non-negotiable, not optional</li>
</ul>
```

- [ ] **Step 4: Verify in browser**

Open `index.html` in a browser, scroll to the Experience section, and confirm the Freshworks role shows the updated bullets emphasizing compliance as a principle.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: rewrite Freshworks experience to emphasize compliance principle and cost efficiency"
```

---

## Task 7: Update TPF Experience Item

**Files:**
- Modify: `index.html:310-325`

- [ ] **Step 1: Locate TPF experience item**

Find the TPF Software timeline item (around line 310-327):
```html
<div class="timeline-item">
  <div class="timeline-marker"><div class="timeline-dot"></div></div>
  <div class="timeline-card">
    <div class="timeline-meta">
      <span class="timeline-company">TPF Software</span>
      <span class="timeline-dates">May 2015 – May 2018</span>
    </div>
    <div class="timeline-role">Software Engineer</div>
    <div class="timeline-tags">
      <span class="tl-tag">Mainframe</span>
      <span class="tl-tag">IDE Tooling</span>
    </div>
    <ul class="timeline-bullets">
      <li>Built IDE-like "Find Usages" tooling for mainframe developers, directly increasing customer revenue by 2%</li>
      <li>Shipped critical features with 100% compliance on security audits and load testing</li>
    </ul>
  </div>
</div>
```

- [ ] **Step 2: Update tags**

Replace the tags:
```html
<div class="timeline-tags">
  <span class="tl-tag">Developer Tooling</span>
  <span class="tl-tag">Product Impact</span>
</div>
```

- [ ] **Step 3: Update bullets**

Replace the two bullet points:
```html
<ul class="timeline-bullets">
  <li>Built "Find Usages" tooling for mainframe developers that shipped as a customer-facing product; directly contributed to 2% revenue increase</li>
  <li>Shipped under security audit and load testing requirements from day one — learned to embed compliance into design, not bolt it on after</li>
</ul>
```

- [ ] **Step 4: Verify in browser**

Open `index.html` in a browser, scroll to the Experience section, and confirm the TPF role shows the updated, shorter bullets.

- [ ] **Step 5: Commit**

```bash
git add index.html
git commit -m "feat: rewrite TPF experience to emphasize product impact and compliance mindset"
```

---

## Task 8: Update Skills Section Header

**Files:**
- Modify: `index.html:174-176`

- [ ] **Step 1: Locate skills section header**

Find the skills section header (around line 174-177):
```html
<div class="section-header" data-animate>
  <div class="section-eyebrow">expertise</div>
  <h2 class="section-title">Skills &amp; Technologies</h2>
</div>
```

- [ ] **Step 2: Update section title and add description**

Replace the h2 and add a description paragraph after the h2:
```html
<div class="section-header" data-animate>
  <div class="section-eyebrow">expertise</div>
  <h2 class="section-title">Platform Engineering Stack</h2>
  <p class="section-desc">Technologies that enabled scaling platforms to 2000+ engineers with high reliability and compliance baked in.</p>
</div>
```

Note: The `section-desc` class likely already exists in the CSS. If it doesn't render properly, we can add CSS, but first verify the class is present by checking `style.css` for `.section-desc`.

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser, scroll to the Skills section, and confirm it shows "Platform Engineering Stack" with the new description underneath.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update skills section header to emphasize platform engineering"
```

---

## Task 9: Update Contact Section Description

**Files:**
- Modify: `index.html:336-340`

- [ ] **Step 1: Locate contact section header**

Find the contact section header (around line 336-341):
```html
<div class="section-header" data-animate>
  <div class="section-eyebrow">reach out</div>
  <h2 class="section-title">Get in Touch</h2>
  <p class="section-desc">Open to interesting problems, senior IC roles, and conversations about platform engineering.</p>
</div>
```

- [ ] **Step 2: Update description**

Replace the p.section-desc:
```html
<p class="section-desc">Open to platforms that scale and delight engineers. Seeking staff/principal roles where technical leadership drives adoption and impact.</p>
```

- [ ] **Step 3: Verify in browser**

Open `index.html` in a browser, scroll to the Contact section, and confirm it shows the updated description.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update contact section to signal platform focus and leadership"
```

---

## Task 10: Update Meta Description

**Files:**
- Modify: `index.html:7`

- [ ] **Step 1: Locate meta description**

Find the meta description tag (around line 7):
```html
<meta name="description" content="Staff Software Engineer — Platform Engineering, Distributed Systems, Cloud Native SaaS">
```

- [ ] **Step 2: Update meta description**

```html
<meta name="description" content="Staff Engineer building platforms adopted by 2000+ engineers. Platform engineering, scale, adoption, compliance.">
```

- [ ] **Step 3: Verify (no visual change)**

This is a meta tag, so it won't appear on the page visually. It's used by search engines and social media. No browser verification needed, but you can check the page source to confirm the change.

- [ ] **Step 4: Commit**

```bash
git add index.html
git commit -m "feat: update meta description to emphasize adoption and scale"
```

---

## Task 11: Full Browser Verification

**Files:**
- Test: `index.html` (visual verification)

- [ ] **Step 1: Open index.html in browser**

Open the file in your default browser (or use a local server):
```bash
# Option 1: Direct file
open index.html

# Option 2: Local server (if available)
python -m http.server 8080
# Then visit http://localhost:8080/
```

- [ ] **Step 2: Verify each section**

Scroll through the page and visually confirm:
- ✅ Hero description mentions "2000+ engineers"
- ✅ Stats bar shows "2000+ / 3K / 30%"
- ✅ Okta role shows "500+ engineers" and adoption-focused bullets
- ✅ Rakuten role shows "3K RPS" and "1000+ engineers"
- ✅ Freshworks role mentions "millions of requests daily"
- ✅ TPF role is shorter, emphasizes product impact
- ✅ Skills header is "Platform Engineering Stack"
- ✅ Contact section mentions "staff/principal roles"

- [ ] **Step 3: Check for any rendering issues**

Look for:
- Text overflow on smaller screens (responsive design)
- Line breaks in appropriate places
- No obvious typos or formatting errors

- [ ] **Step 4: Commit verification**

No commit needed for this task — verification is complete once visual check passes.

---

## Self-Review Checklist

✅ **Spec coverage:** 
- Hero section rewrite → Task 1, 2
- Stats bar → Task 3
- All four experience items → Tasks 4, 5, 6, 7
- Skills section header → Task 8
- Contact section → Task 9
- Meta description → Task 10
- Full verification → Task 11

✅ **No placeholders:** All code snippets are complete and exact

✅ **Type consistency:** HTML structure unchanged; all updates are text replacements

✅ **File paths exact:** All line numbers reference index.html with specific ranges

✅ **Commands exact:** Git commits include precise messages; no vague instructions

---

## Summary

11 bite-sized tasks to rewrite portfolio copy from "scale and reliability" to "adoption and impact." No structural changes, no new files, pure content rewrite. Each task is 2-5 minutes and includes exact code, verification steps, and commits.
