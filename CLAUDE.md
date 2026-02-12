# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

TaxFeeder Software marketing website — a 6-page MVP site for a professional tax preparation software company. Built to look competitive with sites like UltimateTax, Integrity Tax Software, and RightWay Tax Solutions.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build (use this to verify before pushing)
- `npm run lint` — ESLint
- No test suite configured yet

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS 4 (using `@theme inline` for custom tokens in globals.css)
- React Compiler enabled (`reactCompiler: true` in next.config.ts)
- Deployed via Vercel (auto-deploys from `main` branch)

## Architecture

**`src/app/`** — App Router pages. Each route is a directory with `page.tsx`:
- `/` — Home (hero, who it's for, benefits, how it works, reseller preview, trust stats)
- `/software` — Product overview
- `/features` — Detailed feature breakdown by category
- `/reseller` — Service bureau / reseller program (most important conversion page)
- `/support` — Contact methods, resources, FAQ
- `/contact` — Demo booking form + contact sidebar with Calendly link

**`src/components/`** — Shared layout components:
- `Navbar.tsx` — Client component (`"use client"`), sticky nav with mobile hamburger, uses `usePathname` for active state
- `Footer.tsx` — Server component, 4-column footer

**`src/app/layout.tsx`** — Root layout wraps all pages with Navbar + Footer.

## Design System

Colors defined as Tailwind tokens in `globals.css` via `@theme inline`:
- `navy` / `navy-light` / `navy-dark` — Primary brand blues
- `gold` / `gold-light` / `gold-dark` — Accent/CTA color
- `slate` / `slate-light` — Body text
- `off-white` — Section backgrounds

Use these as Tailwind classes: `bg-navy`, `text-gold`, `bg-off-white`, etc.

## Key Patterns

- Every page follows: Hero (navy bg) → Content sections (alternating white/off-white) → CTA (navy bg)
- CTAs always offer two options: primary gold button + secondary outline/phone button
- Path alias: `@/*` maps to `./src/*`
- All pages except Navbar are server components (no `"use client"`)
- The contact form currently has no backend — form submission needs to be wired up
- Calendly link: `https://calendly.com/john-jcolverconsulting/30min`
- TFS contact info: (502) 237-8401, support@taxfeedersoftware.com, Prospect KY 40059
