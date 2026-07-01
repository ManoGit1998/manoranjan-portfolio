# Manoranjan Nayak — Portfolio

A personal portfolio site built with React + Vite. Designed around a "production log / service architecture" theme to reflect a backend engineering background (Spring Boot, Kafka, microservices).

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Customize your content

All resume content lives in one file: `src/data/resumeData.js`.
Edit that file to update your name, experience, projects, skills, education, and contact links — no need to touch the components.

Also update:
- `profile.linkedin` and `profile.github` placeholder URLs in `resumeData.js`
- `index.html` `<title>` and meta description if desired

## Deploy to GitHub + Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign in with GitHub
   - Click **Add New → Project**
   - Select your repo
   - Framework preset: **Vite** (should auto-detect)
   - Build command: `npm run build`
   - Output directory: `dist`
   - Click **Deploy**

Vercel will give you a live URL, and every push to `main` will auto-redeploy.

## Tech stack

- React 18
- Vite
- Plain CSS with custom properties (no framework dependency)
