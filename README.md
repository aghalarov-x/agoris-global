# Agoris Global Website

Premium nut exporter marketing site built with **Vite** and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run download-images
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Contact form

The contact form emails **ag@agorisglobal.com** using [FormSubmit](https://formsubmit.co) — no API key or Vercel env vars needed.

**Important (one-time):** After the site is live, submit a test inquiry once. FormSubmit will send an activation email to `ag@agorisglobal.com`. Open it and click **Confirm email**. After that, every submission arrives as a normal email.

To change the recipient address, edit `formRecipient` in `src/data/site.js`.

## Images

Temporary Google-hosted images are downloaded into `public/images/`:

```bash
npm run download-images
```

If any download fails, SVG placeholders are created automatically. Replace them with your own assets in `public/images/`.

## Build for production

```bash
npm run build
npm run preview
```

The static site is output to `dist/`.

## Deploy on Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. Vercel usually detects Vite automatically. Confirm these settings:

| Setting | Value |
|---------|--------|
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

4. (Optional) Contact form already sends to `ag@agorisglobal.com` via FormSubmit — no env vars required.
   After the first live submission, confirm the activation email FormSubmit sends to that inbox.

5. Click **Deploy**

A `vercel.json` file is included with the same build settings.

## Project structure

```
src/
  components/   # Page sections (Header, Hero, About, etc.)
  data/         # Content arrays (products, nav links, etc.)
  js/           # Mobile menu, scroll effects, animations
  styles/       # Tailwind + custom CSS
public/
  images/       # Local image assets
```

## Editing content

| What to change | File |
|----------------|------|
| Products | `src/data/products.js` |
| Nav links & contact info | `src/data/site.js` |
| Why Agoris features | `src/data/whyAgoris.js` |
| Logistics steps | `src/data/logistics.js` |
