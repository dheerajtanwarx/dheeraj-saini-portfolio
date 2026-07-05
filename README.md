# Dheeraj Tanwar — Portfolio

A professional, animated portfolio for a **Full Stack Web Developer**, with a real **3D hero**, scroll-reveal motion, and **dark + light** themes.

![tech](https://img.shields.io/badge/React-18-61dafb) ![vite](https://img.shields.io/badge/Vite-5-646cff) ![three](https://img.shields.io/badge/Three.js-R3F-8b5cf6)

## ✨ Features

- **3D hero** — glossy distorted icosahedron + orbital rings via `@react-three/fiber` + `drei` (lazy-loaded, WebGL fallback, respects reduced-motion)
- **Dark & light mode** — token-driven theming, toggle persisted to `localStorage`, follows system preference on first visit
- **Smooth scroll** — [Lenis](https://github.com/darkroomengineering/lenis) with anchor-link interception
- **Motion** — Framer Motion scroll reveals, staggered lists, count-up stats, animated skill bars, testimonial carousel, scroll-progress bar
- **Sections** — Hero · About + stats · Skills · Projects (hover overlays) · Testimonials · Contact form · Footer
- **Accessible & responsive** — semantic HTML, focus states, `aria-live` form feedback, mobile-first layout, `prefers-reduced-motion` support

## 🧱 Stack

React + TypeScript · Vite · Tailwind CSS · Framer Motion · React Three Fiber + drei · Lenis · lucide-react

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server → http://localhost:5173
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## 🎨 Make it yours

Almost everything lives in **`src/data.ts`** — edit one file to change:

- `profile` — name, role, tagline, email, phone, socials, résumé link
- `stats`, `skills`, `stack` — numbers and skill levels
- `services`, `projects`, `testimonials` — cards and content

**Theme colors** are CSS variables in `src/index.css` (`:root/.dark` and `.light`). Change `--accent` / `--accent-2` to rebrand the whole site.

**Résumé:** set `profile.resumeUrl` to your CV (e.g. a PDF in `/public`).

### Wire up the contact form

The form in `src/components/Contact.tsx` currently simulates a submit. To make it real, replace the `setTimeout` block in `submit()` with a call to a backend or a service like [Formspree](https://formspree.io), [Resend](https://resend.com), or [EmailJS](https://www.emailjs.com).

## ☁️ Deploy

Static build — deploy `/dist` to **Vercel**, **Netlify**, or **GitHub Pages**. On Vercel/Netlify just point at the repo; build command `npm run build`, output dir `dist`.

---

Reference screenshots used for inspiration are kept in `/reference`.
# dheeraj-saini-portfolio
