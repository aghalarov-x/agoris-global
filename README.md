# Agoris Global Website

Premium nut exporter marketing site built with **Vite** and **Tailwind CSS**.

## Quick start

```bash
npm install
npm run download-images
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Contact form setup (Formspree)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint URL (e.g. `https://formspree.io/f/xxxxxxxx`)
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Paste your URL into `.env`:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
5. Restart the dev server (`npm run dev`)

Submissions will arrive in your Formspree inbox. To use a different service, edit `src/components/Contact.js` and change the `fetch` call in `initContactForm()`.

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

4. (Optional) Add environment variable for the contact form:
   - Name: `VITE_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/your-form-id`

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
