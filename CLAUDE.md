# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

TaxFeeder Software (TFS) — marketing website + admin dashboard for a professional tax preparation software company. Built to look competitive with sites like UltimateTax, Integrity Tax Software, and RightWay Tax Solutions.

## Commands

- `npm run dev` — Start dev server (Turbopack)
- `npm run build` — Production build (use this to verify before pushing)
- `npm run lint` — ESLint
- `npm run seed` — Seed the Neon Postgres database with initial data
- No test suite configured yet

## Stack

- Next.js 16 (App Router) with TypeScript
- Tailwind CSS 4 (using `@theme inline` for custom tokens in globals.css)
- React Compiler enabled (`reactCompiler: true` in next.config.ts)
- Neon Postgres (serverless) for admin dashboard data
- Deployed via Vercel (auto-deploys from `main` branch)

## Architecture

**`src/app/(marketing)/`** — Marketing pages with Navbar + Footer layout:
- `/` — Home (hero, who it's for, benefits, how it works, reseller preview, trust stats)
- `/software` — Product overview
- `/features` — Detailed feature breakdown by category
- `/reseller` — Service bureau / reseller program (most important conversion page)
- `/support` — Contact methods, resources, FAQ
- `/contact` — Demo booking form + contact sidebar with Calendly link
- `/about` — About page

**`src/app/admin/`** — Admin dashboard (separate layout, no Navbar/Footer):
- `/admin` — Dashboard overview with stat cards, charts, recent leads
- `/admin/leads` — Lead management with status filtering and search
- `/admin/analytics` — Page views, traffic sources, devices, conversion funnel
- `/admin/settings` — Profile, notifications, database connection
- `/admin/login` — Demo login (localStorage-based auth)

**`src/app/api/`** — API routes:
- `/api/contact` — Contact form submission
- `/api/admin/leads` — GET all leads, POST new lead (Neon DB)
- `/api/admin/leads/[id]` — PATCH lead status/notes (Neon DB)
- `/api/admin/stats` — GET dashboard stats (Neon DB)

**`src/components/`** — Shared layout components:
- `Navbar.tsx` — Client component, sticky nav with mobile hamburger
- `Footer.tsx` — Server component, 4-column footer

**`src/components/admin/`** — Admin dashboard components:
- `Sidebar.tsx`, `TopBar.tsx` — Admin layout shell
- `StatCard.tsx`, `BarChart.tsx`, `DonutChart.tsx`, `FunnelChart.tsx`, `MiniSparkline.tsx` — Data visualization (custom SVG, no chart library)
- `LeadsTable.tsx`, `StatusBadge.tsx` — Lead management UI

**`src/lib/`** — Utilities:
- `db.ts` — Neon serverless SQL connection
- `admin/auth.ts` — localStorage-based demo auth
- `admin/mock-data.ts` — Fallback mock data for client-side rendering
- `admin/types.ts` — TypeScript interfaces for admin data

## Database

Neon Postgres. Tables: `admin_users`, `leads`, `page_views`, `analytics_daily`, `referrers`, `notification_settings`.
Set `DATABASE_URL` in `.env.local` and on Vercel.

## Design System

Colors defined as Tailwind tokens in `globals.css` via `@theme inline`:
- `navy` / `navy-light` / `navy-dark` — Primary brand blues
- `gold` / `gold-light` / `gold-dark` — Accent/CTA color
- `slate` / `slate-light` — Body text
- `off-white` — Section backgrounds

## Key Patterns

- Marketing pages: Hero (navy bg) -> Content sections (alternating white/off-white) -> CTA (navy bg)
- CTAs always offer two options: primary gold button + secondary outline/phone button
- Path alias: `@/*` maps to `./src/*`
- Admin uses custom CSS classes: `admin-sidebar`, `admin-stat-card`, `admin-input`, `admin-btn-primary`
- TFS contact info: (502) 237-8401, support@taxfeedersoftware.com, Prospect KY 40059
- Calendly link: https://calendly.com/john-jcolverconsulting/30min
