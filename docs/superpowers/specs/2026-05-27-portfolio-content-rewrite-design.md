# Portfolio Content Rewrite — Impact-First Narrative

**Date:** 2026-05-27  
**Goal:** Reposition portfolio to emphasize platform adoption, scale, and strategic influence for FAANG staff/principal roles  
**Core Message:** "I build platforms that teams actually adopt — high adoption, high impact, built for scale and compliance"

---

## Hero Section

### Current Copy
```
Currently @ Okta · Staff Engineer

Yeshwanth V Shenoy

[Typed.js animation]

11+ years building distributed systems and platform engineering at scale.
Shipping developer tooling, GitOps platforms, and DevEx infrastructure
that teams actually love to use.
```

### Rewritten Copy
```
Currently @ Okta · Staff Engineer

Yeshwanth V Shenoy

[Typed.js animation - same]

Staff engineer building platforms that power engineering teams at scale.
2000+ engineers rely on infrastructure I've shipped — from secret managers
to GitOps platforms to low-code testing. I obsess over adoption,
compliance, and solving the problems teams actually care about.
```

### Rationale
- **Lead with adoption metric** (2000+ engineers) upfront — immediately signals impact
- **Shift from "teams love it" to why they adopted it** — moves from vague to credible
- **Signal strategic thinking** — "obsess over adoption... problems teams actually care about" shows product + people thinking
- **Compliance implicit** — shows it's native to how you build, not bolted on

### Code Window
Keep the structure, update the `focus` array:

```javascript
const engineer = {
  name:  "Yeshwanth V Shenoy",
  role:  "Staff Software Engineer",
  years: 11,
  at:    "Okta",
  focus: [
    "Platform Engineering",
    "Developer Adoption",    // changed from "Developer Experience"
    "Distributed Systems",
    "Compliance & Scale",    // changed from "Cloud Native SaaS"
  ],
  shipped: {
    engineers:    2000,      // new
    peakRps:      3000,      // new
    costReduction: "30%",    // new
  },
};
```

---

## Stats Bar

### Current
```
11+ Years Experience
4 Companies
99.99% SLA Delivered
```

### Rewritten
```
2000+ Engineers Onboarded
3K RPS Peak Traffic
30% Infrastructure Cost Reduction
```

### Rationale
- **Shift from resume metrics to impact metrics** — "years experience" is table stakes; adoption + scale + business impact is differentiator
- **Adoption first** — signals the primary outcome (platforms teams use)
- **Scale + efficiency** — 3K RPS + 30% cost reduction proves you can handle both scale and resource optimization

---

## Experience Section

### Okta (Current Role)

#### Current
```
Staff Software Engineer
[Jan 2024 – Present]

Tags: GitOps, Developer Tooling, DevEx

- Led developer tooling that accelerated code delivery to production by 15%, 
  ensuring adherence to Okta's security standards
- Initiated and delivered a Developer Portal (akin to Backstage) for Git Admin 
  and GitOps, demonstrating end-to-end ownership from ideation to adoption
- Mentored a team of 6 engineers toward quarterly roadmap delivery and 
  collaborated with leadership on roadmap planning
```

#### Rewritten
```
Staff Software Engineer
[Jan 2024 – Present]

Tags: Platform Engineering, Developer Adoption, GitOps

- Built a Developer Portal adopted across 500+ engineers for Git Admin and 
  GitOps workflows; designed for usability and compliance from the ground up
- Owned end-to-end delivery: scoped the problem, architected the platform, 
  drove adoption through team collaboration and continuous feedback
- Mentored 6 engineers on platform thinking and quarterly roadmap planning; 
  helped the team own outcomes, not just features
```

#### Rationale
- **Lead with adoption** (500+ engineers) — signals real traction
- **Emphasize "design for usability and compliance"** — shows you think about both user success and security/governance
- **"End-to-end delivery"** → explicit language about strategic ownership
- **Mentorship framed as outcome ownership** — shows you multiply impact through people, not just code

---

### Rakuten (Previous Role)

#### Current
```
Lead Software Engineer
[Aug 2020 – Dec 2023]

Tags: Microservices, Kubernetes, Cloud Platform

- Built a high-load secret manager with 99.99% SLA, onboarded onto Internal 
  Cloud Platform within 8 months
- Architected a Low Code Test Automation Platform widely adopted for release 
  and regression testing
- Decomposed a large monolith into microservices on Kubernetes; transformed 
  team into a self-organizing deployment unit
```

#### Rewritten
```
Lead Software Engineer
[Aug 2020 – Dec 2023]

Tags: Platform Engineering, Microservices, Cloud Scale

- Shipped a secret manager handling 3K RPS with 99.99% SLA, deployed across 
  the Internal Cloud Platform; adopted by 1000+ engineers within 8 months
- Built a Low Code Test Automation Platform adopted by release and regression 
  teams; reduced testing friction and accelerated feedback loops
- Decomposed a critical monolith into microservices; helped teams become 
  self-organizing deployment units with clear ownership
```

#### Rationale
- **Lead with adoption scale** (1000+ engineers, 3K RPS) — immediately credible
- **"Deployed across Internal Cloud Platform"** — shows it became foundational
- **"Adopted by... teams; reduced friction"** — emphasize outcome, not just technology
- **Microservices → "clear ownership"** — reframe from technical to organizational impact

---

### Freshworks

#### Current
```
Senior Software Engineer
[May 2018 – Aug 2020]

Tags: Real-time Systems, Cloud, OWASP

- Built real-time microservices with 99.999% SLA and latencies under 250ms 
  for Freshworks products
- Reduced infrastructure costs ~20% via cloud-agnostic tooling and open source 
  adoption
- Steered OWASP compliance; integrated SonarQube for code quality enforcement
```

#### Rewritten
```
Senior Software Engineer
[May 2018 – Aug 2020]

Tags: Real-time Systems, Product Reliability, Compliance

- Shipped real-time microservices (99.999% SLA, <250ms latencies) that powered 
  core Freshworks products; handled millions of requests daily
- Reduced infrastructure spend by 20% through cloud-agnostic architecture and 
  open source adoption — proving scale doesn't require premium tooling
- Owned OWASP compliance strategy; integrated SonarQube to make security and 
  code quality non-negotiable, not optional
```

#### Rationale
- **"Powered core Freshworks products; handled millions of requests"** — contextualizes the SLA numbers
- **"Proving scale doesn't require premium tooling"** — shows cost efficiency is a design principle
- **"Make X non-negotiable, not optional"** — signal strategic influence over compliance culture

---

### TPF Software (Early Career)

#### Current
```
Software Engineer
[May 2015 – May 2018]

Tags: Mainframe, IDE Tooling

- Built IDE-like "Find Usages" tooling for mainframe developers, directly 
  increasing customer revenue by 2%
- Shipped critical features with 100% compliance on security audits and 
  load testing
```

#### Rewritten
```
Software Engineer
[May 2015 – May 2018]

Tags: Developer Tooling, Product Impact

- Built "Find Usages" tooling for mainframe developers that shipped as a 
  customer-facing product; directly contributed to 2% revenue increase
- Shipped under security audit and load testing requirements from day one — 
  learned to embed compliance into design, not bolt it on after
```

#### Rationale
- **"Shipped as a customer-facing product"** — emphasize this wasn't internal, it was real
- **"Learned to embed compliance into design"** — connect early career to current philosophy
- **Shorter, cleaner bullets** — early career role deserves less space than recent

---

## Skills Section

### Current Header
```
expertise
Skills & Technologies
```

### Rewritten Header & Intro
```
expertise
Platform Engineering Stack

Technologies that enabled scaling platforms to 2000+ engineers with high 
reliability and compliance baked in.
```

### Skill Cards (No change to structure, optional copy refinement)

**Languages card:** No change needed  
**Infrastructure card:** No change needed  
**Databases card:** No change needed  
**Observability card:** Intro copy: "Observability: Making platform health and team impact visible"

---

## Contact Section

### Current Description
```
Open to interesting problems, senior IC roles, and conversations about 
platform engineering.
```

### Rewritten Description
```
Open to platforms that scale and delight engineers. Seeking staff/principal 
roles where technical leadership drives adoption and impact.
```

### Rationale
- **"Platforms that scale and delight"** — echo your core philosophy
- **"Technical leadership drives adoption"** — signal you care about influence, not just coding
- **Implicit staff/principal signal** — you said don't state it directly, so phrased as "seeking roles"

---

## Implementation Notes

1. **Typed.js animation** — keep current, or consider: "Shipping platforms that engineers love" / "Building infrastructure that scales" / "2000+ engineers rely on this" (cycles through)
2. **Meta description** — update to reflect adoption/platform focus: "Staff Engineer building platforms adopted by 2000+ engineers. Platform engineering, scale, compliance."
3. **Button copy** — "View Work" → consider "View Projects" or keep as-is (minor change)
4. **No design changes needed** — this is pure content rewrite; layout/styling stays the same

---

## Success Criteria

- ✅ Adoption/impact metrics front and center (2000+, 3K RPS, 30% cost reduction)
- ✅ Each role emphasizes "why teams adopted this" not "what tech I used"
- ✅ Signal strategic influence (mentorship, compliance as principle, end-to-end ownership)
- ✅ Maintain technical credibility (still show SLAs, RPS, real numbers)
- ✅ No corporate jargon — stays authentic and builder-focused
- ✅ FAANG hiring managers see "this person builds platforms that move metrics" without saying "hire me for a staff role"
