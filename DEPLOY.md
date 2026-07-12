# GSP Platform — Deployment Guide

## Quick Deploy to Render (Free Tier)

### Prerequisites
- [GitHub](https://github.com) account
- [Render](https://render.com) account (free, no credit card)

---

### Step 1: Push to GitHub

```bash
# In your project directory
git init
git add .
git commit -m "GSP Phase 2 — Auth + Role Dashboards"

# Create a new repo on GitHub (don't initialize with README)
# Then:
git remote add origin https://github.com/YOUR_USERNAME/gsp-platform.git
git branch -M main
git push -u origin main
```

---

### Step 2: Connect to Render

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **"New +"** → **"Blueprint"**
3. Connect your GitHub repo
4. Render reads `render.yaml` and sets everything up automatically

---

### Step 3: Set Environment Variables

In your Render dashboard for the `gsp-platform` service, go to **Environment** and add these:

| Variable | Value | Where to find |
|----------|-------|---------------|
| `APP_ID` | `REDACTED_APP_ID` | Your `.env` file |
| `APP_SECRET` | `REDACTED_APP_SECRET` | Your `.env` file |
| `DATABASE_URL` | `mysql://...` | Your `.env` file |
| `KIMI_AUTH_URL` | `https://auth.kimi.com` | Your `.env` file |
| `KIMI_OPEN_URL` | `https://open.kimi.com` | Your `.env` file |
| `OWNER_UNION_ID` | `REDACTED_OWNER_UNION_ID` | Your `.env` file |

**⚠️ Never commit `.env` to GitHub.** These values are already in your `.env` file — just copy them to Render.

---

### Step 4: Deploy

Render auto-deploys on every push to `main`. First deploy:

1. Click **"Manual Deploy"** → **"Clear build cache & deploy"**
2. Wait ~2-3 minutes
3. Click the URL (looks like `https://gsp-platform.onrender.com`)

---

### Step 5: Keep It Awake (Free Tier)

Render free tier sleeps after 15 min of inactivity. To prevent this:

1. Go to [uptimerobot.com](https://uptimerobot.com) (free)
2. Add a monitor:
   - Type: HTTP(s)
   - URL: `https://YOUR-URL.onrender.com/health`
   - Interval: 5 minutes
3. Done — your site stays awake 24/7

---

### What Gets Deployed

| Component | Path | Status |
|-----------|------|--------|
| Marketing site (`/`) | Static frontend | ✅ Live |
| Auth API (`/api/trpc`) | tRPC + Hono | ✅ Live |
| OAuth callback (`/api/oauth/callback`) | Kimi OAuth | ✅ Live |
| Database | Managed MySQL | ✅ Connected |
| All 6 dashboards (`/admin`, `/hr`, etc.) | Protected routes | ✅ Live |

---

### Troubleshooting

| Problem | Fix |
|---------|-----|
| "Build failed" | Check Render logs for the error |
| "Database connection refused" | Verify `DATABASE_URL` env var |
| "OAuth callback fails" | Make sure `KIMI_AUTH_URL` is set correctly |
| "404 on refresh" | Normal — SPA routing needs `index.html` fallback. Already handled in `api/lib/vite.ts` |
| Site is slow on first load | Free tier cold start — use UptimeRobot to keep it awake |

---

### Custom Domain (Later)

When you're ready:
1. In Render dashboard → **Settings** → **Custom Domain**
2. Add your domain (e.g., `app.globalstaffing.partners`)
3. Update DNS records as instructed
4. Update `OWNER_UNION_ID` if your OAuth app changes

---

### Upgrading from Free Tier

| When | Upgrade To | Cost |
|------|-----------|------|
| Cold starts annoy users | Render Starter ($7/mo) | $7/mo |
| Need more performance | Render Standard ($25/mo) | $25/mo |
| Multiple regions | Fly.io or Railway | $20-50/mo |
| Full control | VPS (DigitalOcean, Hetzner) | $5-20/mo |
