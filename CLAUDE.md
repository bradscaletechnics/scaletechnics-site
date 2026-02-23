# CLAUDE.md — Scale Technics AI Solutions Website

## Project Overview
This is the production website for **Scale Technics AI Solutions** (scaletechnics.com), a Vancouver-based company that installs autonomous AI agent systems into business operations. The site markets the **24/7 Revenue System** — an integrated pipeline of AI agents that handle sales, follow-up, booking, ads, customer service, and outreach autonomously.

## Architecture
This is a static site deployed via **Netlify** with auto-deploy from this GitHub repo. Every push to `main` goes live within ~10 seconds.

```
scaletechnics-site/
├── index.html          # Main landing page
├── css/
│   └── main.css        # All styles (design tokens in :root variables)
├── js/
│   └── main.js         # Interactivity (scroll effects, animations, mobile nav)
├── images/             # Site images and assets
├── pages/              # Additional pages (case studies, blog posts, landing pages)
├── netlify.toml        # Netlify deploy config, redirects, headers
├── CLAUDE.md           # This file — project context for Claude Code
└── README.md           # Setup and deploy instructions
```

## Design System
- **Theme:** Dark mode, editorial/luxury tech aesthetic
- **Fonts:** Instrument Serif (display), DM Sans (body), JetBrains Mono (code/labels)
- **Colors:** Defined as CSS custom properties in `:root` in `css/main.css`
  - `--accent: #c8ff00` (electric lime green — primary brand color)
  - `--black: #0a0a0a` (background)
  - `--white: #f5f2ed` (warm off-white text)
  - `--gray-1` through `--gray-4` (UI layers)
  - `--green: #34c759` (status indicators)
- **Grain overlay:** SVG noise texture applied via `body::after`

## Key Sections (index.html)
1. **Hero** — "Your business never sleeps again" + CTA
2. **Ticker Bar** — Scrolling capabilities marquee
3. **Problem** — Pain points (speed-to-lead, follow-up failure, ad spend waste)
4. **Revenue System** — 5-step pipeline visualization (Capture → Qualify → Engage → Book → Nurture)
5. **Agents** — 6 agent cards (Sales, Ad/Campaign, Booking, Customer Service, Social Media, Outreach)
6. **Control** — iMessage/WhatsApp command interface with phone mockup
7. **Packages** — 3 tiers (Revenue Core, Full Autonomy, AI Intelligence Retainer)
8. **Stats** — Key metrics (60s response, 24/7, 0 dropped leads, ∞ follow-up)
9. **Why Now** — Timeline visualization showing AI adoption phases
10. **Vancouver** — Local market positioning with map
11. **CTA** — Final conversion section with booking link
12. **Footer** — Links, contact, social

## Deployment
- **Host:** Netlify (free tier)
- **Domain:** scaletechnics.com (DNS via GoDaddy, nameservers pointed to Netlify)
- **SSL:** Automatic via Netlify
- **Deploy:** Auto-deploy on push to `main` branch

### Deploy Commands (from this repo)
```bash
# Make changes, then:
git add .
git commit -m "description of change"
git push

# Site is live in ~10 seconds
```

### First-Time Netlify Setup
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Link this repo to Netlify (run from project root)
netlify init

# Or deploy manually once
netlify deploy --prod
```

## Common Tasks

### Update hero text
Edit `index.html`, find the `.hero` section. The headline is in `<h1>`, subtext in `.hero-sub`.

### Update package pricing
Edit `index.html`, find the `.packages` section. Each `.pkg-card` contains a tier.

### Add a new agent card
In `index.html`, add a new `.agent-card` div inside `.agents-grid`. Follow the existing card structure.

### Change brand colors
Edit `css/main.css`, modify the `:root` CSS custom properties at the top.

### Add a new page
Create an HTML file in `pages/` (e.g., `pages/case-study-plumber.html`). Link to it from the main site. Use the same CSS/JS paths: `../css/main.css` and `../js/main.js`.

### Add images
Place files in `images/`. Reference as `/images/filename.ext` in HTML.

## Business Context
- **Target verticals:** Home services, auto dealerships, real estate, med spas, law firms, accounting firms
- **Local market:** Vancouver, BC, Canada
- **Key differentiator:** AI agents installed into operations (not SaaS subscriptions), controllable via text/iMessage/WhatsApp
- **Founder:** Brad
- **CRM platform:** CaptivationHub
- **AI stack:** ClawdBot, Claude Code, Ollama (on-premise option with Mac Studio M4 Max)
- **Booking link:** [UPDATE: Add your Calendly or CaptivationHub booking URL]
- **Phone number:** [UPDATE: Add your actual business phone number]
