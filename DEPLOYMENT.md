# PsychroStudio — Phase 1 Deployment Guide

## What you're deploying
A complete Next.js platform that restructures psychrostudio.com from a single HTML file 
into a full product platform with a landing page, app suite, template library, and knowledge base.

---

## STEP 1 — Install Node.js (if you don't have it)

1. Go to https://nodejs.org
2. Download the LTS version (the one that says "Recommended for most users")
3. Install it with all default settings
4. To verify it worked: open Terminal (Mac) or Command Prompt (Windows) and type:
   node --version
   You should see something like: v20.x.x

---

## STEP 2 — Set up your project folder

1. Unzip the psychrostudio-phase1.zip file you downloaded
2. You should see a folder called "psychrostudio" with all the project files inside
3. Open your Terminal / Command Prompt
4. Navigate into the folder. For example:
   cd Downloads/psychrostudio

---

## STEP 3 — Add your PsychroFlow HTML file

1. Find your current psychroflow HTML file (the one you uploaded — psychroflow_23_.html)
2. Rename it to exactly: psychroflow.html
3. Copy it into the /public folder inside the psychrostudio project folder

The path should be: psychrostudio/public/psychroflow.html

---

## STEP 4 — Install project dependencies

In your Terminal (make sure you're inside the psychrostudio folder), run:

   npm install

This downloads all the required packages. It takes 1–2 minutes.
You'll see a lot of text scroll by — that's normal.

---

## STEP 5 — Test locally on your computer

Run:
   npm run dev

Then open your browser and go to: http://localhost:3000

You should see the new PsychroStudio landing page.
Test these URLs work:
  - http://localhost:3000 (landing page)
  - http://localhost:3000/apps/psychroflow (PsychroFlow info page)
  - http://localhost:3000/psychroflow.html (the actual app)
  - http://localhost:3000/templates (placeholder page)

Press Ctrl+C in Terminal to stop the local server when done.

---

## STEP 6 — Push to GitHub

You need a GitHub account. If you don't have one, sign up free at https://github.com

Option A — Using GitHub Desktop (easier, visual):
1. Download GitHub Desktop from https://desktop.github.com
2. Click "Add an Existing Repository from your Hard Drive"
3. Select your psychrostudio folder
4. It will ask you to initialise a repository — click "Initialize Repository"
5. Click "Publish repository" (set to Private)
6. Give it the name: psychrostudio

Option B — Using Terminal:
   git init
   git add .
   git commit -m "Initial platform build - Phase 1"
   
   Then go to github.com, create a new repository called "psychrostudio",
   and follow the instructions it gives you to push an existing repository.

---

## STEP 7 — Deploy to Vercel

1. Go to https://vercel.com and log in (you already have an account)
2. Click "Add New Project"
3. Click "Import Git Repository" and select your psychrostudio repo
4. Vercel will auto-detect it as a Next.js project
5. Leave all settings as default
6. Click "Deploy"

Vercel will build and deploy in about 60 seconds.
You'll get a URL like: psychrostudio-abc123.vercel.app

---

## STEP 8 — Connect your custom domain (psychrostudio.com)

1. In Vercel, go to your project → Settings → Domains
2. Type in: psychrostudio.com and click Add
3. Also add: www.psychrostudio.com
4. Vercel will show you DNS records to add
5. Go to wherever you registered psychrostudio.com (e.g. GoDaddy, Namecheap, or wherever)
6. Find the DNS settings and add the records Vercel shows you
7. Wait 10–30 minutes for DNS to propagate
8. Vercel will automatically issue a free SSL certificate (https)

---

## STEP 9 — Verify everything is live

Check these URLs on the live site:
  - https://psychrostudio.com  (landing page — this is the big change)
  - https://psychrostudio.com/apps/psychroflow  (app info page)
  - https://psychrostudio.com/psychroflow.html  (the actual app — same as before)
  - https://psychrostudio.com/templates  (coming soon placeholder)

---

## What comes next (Phase 1b)

Once Phase 1 is live, the next step is wiring up:
- Supabase (user accounts, authentication)
- Stripe (subscription payments)

These require creating accounts and getting API keys.
Wait for Phase 1b instructions before touching these.

---

## Troubleshooting

Problem: "npm: command not found"
Solution: Node.js wasn't installed. Repeat Step 1.

Problem: Blank page or error at localhost:3000
Solution: Make sure you ran "npm install" first. Check the Terminal for error messages.

Problem: psychroflow.html shows a 404
Solution: Make sure the file is named exactly "psychroflow.html" and is in the /public folder.

Problem: Build fails on Vercel
Solution: Send the error message to the chat and we'll fix it together.

---

## File structure reference

psychrostudio/
├── app/
│   ├── layout.js         ← Root layout, fonts, metadata
│   ├── page.js           ← Main landing page
│   ├── apps/psychroflow/ ← PsychroFlow info page
│   ├── templates/        ← Placeholder (Phase 2)
│   ├── articles/         ← Placeholder (Phase 3)
│   └── login/            ← Placeholder (Phase 1b)
├── components/
│   ├── Navbar.js         ← Top navigation
│   └── Footer.js         ← Site footer
├── public/
│   └── psychroflow.html  ← YOUR APP FILE (you add this)
├── package.json
├── tailwind.config.js
└── next.config.mjs
