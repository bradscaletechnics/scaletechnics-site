# Scale Technics AI Solutions — Website

Production website for [scaletechnics.com](https://scaletechnics.com).

## One-Shot Setup (Do This Once)

### 1. Create the GitHub repo
```bash
# From your terminal, navigate to where you want the project
cd ~/Projects  # or wherever you keep code

# Clone this repo (after creating it on github.com)
git clone https://github.com/YOUR_USERNAME/scaletechnics-site.git
cd scaletechnics-site
```

### 2. Connect Netlify (auto-deploy)
```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize — select "Create & configure a new site"
# When asked for build command: leave blank (static site)
# When asked for publish directory: . (current directory)
netlify init

# Deploy immediately
netlify deploy --prod
```

### 3. Point your GoDaddy domain
1. Go to your Netlify dashboard → Site settings → Domain management
2. Click "Add custom domain" → enter `scaletechnics.com`
3. Netlify gives you nameservers (e.g., `dns1.p01.nsone.net`)
4. Go to GoDaddy → My Domains → scaletechnics.com → DNS → Nameservers
5. Change to "Custom" and enter the Netlify nameservers
6. Wait 15–30 minutes for DNS propagation
7. SSL activates automatically

### 4. Done. Your workflow is now:
```bash
# Tell Claude Code what to change, then:
git add .
git commit -m "what changed"
git push

# Live in ~10 seconds.
```

## Project Structure
```
├── index.html          # Main landing page
├── css/main.css        # All styles
├── js/main.js          # Interactivity
├── images/             # Site images
├── pages/              # Additional pages
├── netlify.toml        # Deploy config
├── CLAUDE.md           # Claude Code project context
└── README.md           # This file
```

## Making Changes with Claude Code
Open Claude Code in this directory and just describe what you want:
- "Update the hero headline to say X"
- "Add a testimonial section after the stats"
- "Create a landing page for plumbers"
- "Change the accent color to blue"

Claude Code reads `CLAUDE.md` automatically for project context.
