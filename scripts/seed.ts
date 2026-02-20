/**
 * Neon Postgres Seed Script for TFS Admin Dashboard
 *
 * Usage:
 *   1. Set DATABASE_URL in .env.local
 *   2. npx tsx scripts/seed.ts
 */

import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);

async function seed() {
  console.log("TFS Admin Dashboard - Database Seed Script");
  console.log("===========================================\n");

  console.log("Creating schema...");

  await sql`CREATE TABLE IF NOT EXISTS admin_users (
    id            SERIAL PRIMARY KEY,
    name          VARCHAR(100) NOT NULL,
    email         VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role          VARCHAR(20) NOT NULL DEFAULT 'manager',
    created_at    TIMESTAMPTZ DEFAULT NOW()
  )`;

  await sql`CREATE TABLE IF NOT EXISTS leads (
    id                SERIAL PRIMARY KEY,
    date              DATE NOT NULL DEFAULT CURRENT_DATE,
    name              VARCHAR(100) NOT NULL,
    company           VARCHAR(200) NOT NULL,
    email             VARCHAR(255) NOT NULL,
    phone             VARCHAR(30),
    city              VARCHAR(100),
    state             VARCHAR(10),
    current_software  VARCHAR(50),
    num_returns       INTEGER,
    status            VARCHAR(20) NOT NULL DEFAULT 'new',
    source            VARCHAR(50),
    notes             TEXT,
    created_at        TIMESTAMPTZ DEFAULT NOW(),
    updated_at        TIMESTAMPTZ DEFAULT NOW()
  )`;

  await sql`CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_date   ON leads(date DESC)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source)`;

  await sql`CREATE TABLE IF NOT EXISTS page_views (
    id          SERIAL PRIMARY KEY,
    date        DATE NOT NULL,
    page        VARCHAR(255) NOT NULL,
    views       INTEGER NOT NULL DEFAULT 0,
    avg_time    VARCHAR(10),
    bounce_rate DECIMAL(5,2),
    UNIQUE(date, page)
  )`;

  await sql`CREATE TABLE IF NOT EXISTS analytics_daily (
    id              SERIAL PRIMARY KEY,
    date            DATE UNIQUE NOT NULL,
    total_views     INTEGER NOT NULL DEFAULT 0,
    unique_visitors INTEGER NOT NULL DEFAULT 0,
    avg_session     VARCHAR(10),
    bounce_rate     DECIMAL(5,2)
  )`;

  await sql`CREATE TABLE IF NOT EXISTS referrers (
    id         SERIAL PRIMARY KEY,
    source     VARCHAR(50) UNIQUE NOT NULL,
    percentage DECIMAL(5,2) NOT NULL
  )`;

  await sql`CREATE TABLE IF NOT EXISTS notification_settings (
    id          SERIAL PRIMARY KEY,
    user_id     INTEGER REFERENCES admin_users(id),
    setting_key VARCHAR(50) NOT NULL,
    enabled     BOOLEAN NOT NULL DEFAULT true,
    UNIQUE(user_id, setting_key)
  )`;

  console.log("  Schema created\n");

  console.log("Seeding admin users...");
  // Use individual inserts for ON CONFLICT support with tagged templates
  await sql`INSERT INTO admin_users (name, email, password_hash, role) VALUES
    ('John Colver', 'john@taxfeedersoftware.com', '$2b$10$placeholder_hash_john', 'admin')
    ON CONFLICT (email) DO NOTHING`;
  await sql`INSERT INTO admin_users (name, email, password_hash, role) VALUES
    ('Sarah Mitchell', 'sarah@taxfeedersoftware.com', '$2b$10$placeholder_hash_sarah', 'manager')
    ON CONFLICT (email) DO NOTHING`;
  console.log("  2 admin users seeded\n");

  console.log("Seeding leads...");
  const leadsData = [
    { date: "2026-02-18", name: "Marcus Johnson", company: "Johnson Tax Services", email: "marcus@johnsontax.com", phone: "(404) 555-0112", city: "Atlanta", state: "GA", currentSoftware: "Drake", numReturns: 1200, status: "new", source: "Google", notes: "Interested in multi-office setup" },
    { date: "2026-02-17", name: "Linda Tran", company: "Tran & Associates", email: "linda@tranassoc.com", phone: "(713) 555-0198", city: "Houston", state: "TX", currentSoftware: "TaxSlayer", numReturns: 800, status: "new", source: "Google", notes: "Currently unhappy with support response times" },
    { date: "2026-02-17", name: "David Washington", company: "Capitol Tax Pros", email: "david@capitoltax.com", phone: "(202) 555-0134", city: "Washington", state: "DC", currentSoftware: "ProSeries", numReturns: 2200, status: "contacted", source: "LinkedIn", notes: "Wants bank product integration details" },
    { date: "2026-02-16", name: "Rachel Kim", company: "Kim Financial Group", email: "rachel@kimfinancial.com", phone: "(312) 555-0167", city: "Chicago", state: "IL", currentSoftware: "TaxWise", numReturns: 650, status: "new", source: "Facebook", notes: "Small office, price sensitive" },
    { date: "2026-02-16", name: "James Okafor", company: "Okafor Tax & Accounting", email: "james@okaforcpa.com", phone: "(469) 555-0145", city: "Dallas", state: "TX", currentSoftware: "ATX", numReturns: 3500, status: "converted", source: "Google", notes: "Signed 3-year reseller agreement" },
    { date: "2026-02-15", name: "Maria Gonzalez", company: "Gonzalez Tax Center", email: "maria@gonzaleztax.com", phone: "(305) 555-0189", city: "Miami", state: "FL", currentSoftware: "Drake", numReturns: 900, status: "contacted", source: "Google", notes: "Scheduled demo for next week" },
    { date: "2026-02-15", name: "Robert Chen", company: "Pacific Tax Solutions", email: "robert@pacifictax.com", phone: "(415) 555-0123", city: "San Francisco", state: "CA", currentSoftware: "Lacerte", numReturns: 4200, status: "contacted", source: "Referral", notes: "Referred by James Okafor" },
    { date: "2026-02-14", name: "Patricia Williams", company: "Williams & Sons Tax", email: "patricia@williamstax.com", phone: "(615) 555-0156", city: "Nashville", state: "TN", currentSoftware: "TaxSlayer", numReturns: 550, status: "new", source: "Google", notes: "Looking to switch before next season" },
    { date: "2026-02-14", name: "Anthony Davis", company: "Davis Tax Group", email: "anthony@davistaxgroup.com", phone: "(504) 555-0178", city: "New Orleans", state: "LA", currentSoftware: "Drake", numReturns: 1800, status: "converted", source: "Direct", notes: "Purchased Desktop + Online bundle" },
    { date: "2026-02-13", name: "Jennifer Lopez-Martinez", company: "Sol Tax Preparation", email: "jennifer@soltaxprep.com", phone: "(602) 555-0191", city: "Phoenix", state: "AZ", currentSoftware: "TaxWise", numReturns: 420, status: "lost", source: "Facebook", notes: "Went with competitor" },
    { date: "2026-02-13", name: "William Brown", company: "Brown's Quick Tax", email: "william@quicktax.com", phone: "(704) 555-0142", city: "Charlotte", state: "NC", currentSoftware: "ProSeries", numReturns: 950, status: "new", source: "Google", notes: "Needs hosted solution for remote staff" },
    { date: "2026-02-12", name: "Sandra Patel", company: "Patel Tax Advisors", email: "sandra@pateltax.com", phone: "(732) 555-0168", city: "Edison", state: "NJ", currentSoftware: "ATX", numReturns: 1500, status: "contacted", source: "Google", notes: "Interested in service bureau program" },
    { date: "2026-02-12", name: "Christopher Moore", company: "Moore Tax & Bookkeeping", email: "chris@mooretax.com", phone: "(901) 555-0115", city: "Memphis", state: "TN", currentSoftware: "Drake", numReturns: 700, status: "converted", source: "Direct", notes: "Started with Desktop plan" },
    { date: "2026-02-11", name: "Amanda Foster", company: "Foster Financial Services", email: "amanda@fosterfin.com", phone: "(503) 555-0187", city: "Portland", state: "OR", currentSoftware: "Lacerte", numReturns: 2800, status: "contacted", source: "LinkedIn", notes: "Enterprise-level needs, multi-state" },
    { date: "2026-02-11", name: "Daniel Rivera", company: "Rivera Tax Express", email: "daniel@riveratax.com", phone: "(210) 555-0139", city: "San Antonio", state: "TX", currentSoftware: "TaxSlayer", numReturns: 380, status: "new", source: "Facebook", notes: "Single preparer office" },
    { date: "2026-02-10", name: "Michelle Thompson", company: "Thompson Tax Center", email: "michelle@thompsontax.com", phone: "(314) 555-0154", city: "St. Louis", state: "MO", currentSoftware: "TaxWise", numReturns: 1100, status: "contacted", source: "Google", notes: "Wants to see bank product comparison" },
    { date: "2026-02-10", name: "Kevin Jackson", company: "Jackson Accounting Group", email: "kevin@jacksoncpa.com", phone: "(216) 555-0176", city: "Cleveland", state: "OH", currentSoftware: "ProSeries", numReturns: 2000, status: "lost", source: "Google", notes: "Decided to stay with current provider" },
    { date: "2026-02-09", name: "Lisa Chang", company: "Chang Tax Pro", email: "lisa@changtaxpro.com", phone: "(206) 555-0193", city: "Seattle", state: "WA", currentSoftware: "ATX", numReturns: 600, status: "new", source: "Bing", notes: "Found us through search" },
    { date: "2026-02-09", name: "Thomas Anderson", company: "Anderson & Associates", email: "thomas@andersontax.com", phone: "(303) 555-0121", city: "Denver", state: "CO", currentSoftware: "Drake", numReturns: 3200, status: "converted", source: "Google", notes: "Multi-office reseller deal signed" },
    { date: "2026-02-08", name: "Nancy White", company: "White Tax & Financial", email: "nancy@whitetax.com", phone: "(612) 555-0148", city: "Minneapolis", state: "MN", currentSoftware: "Lacerte", numReturns: 1700, status: "contacted", source: "LinkedIn", notes: "Interested in pricing for 5 preparers" },
    { date: "2026-02-08", name: "Steven Garcia", company: "Garcia Tax Services", email: "steven@garciatax.com", phone: "(702) 555-0165", city: "Las Vegas", state: "NV", currentSoftware: "TaxSlayer", numReturns: 450, status: "new", source: "Direct", notes: "Walk-in referral from trade show" },
    { date: "2026-02-07", name: "Karen Robinson", company: "Robinson Tax Center", email: "karen@robinsontax.com", phone: "(919) 555-0183", city: "Raleigh", state: "NC", currentSoftware: "Drake", numReturns: 850, status: "converted", source: "Google", notes: "Online plan purchased" },
    { date: "2026-02-07", name: "Jason Lee", company: "Lee Accounting", email: "jason@leeaccounting.com", phone: "(408) 555-0129", city: "San Jose", state: "CA", currentSoftware: "ProSeries", numReturns: 5000, status: "contacted", source: "Referral", notes: "Large firm, needs enterprise demo" },
    { date: "2026-02-06", name: "Donna Martinez", company: "Martinez Quick Tax", email: "donna@martineztax.com", phone: "(813) 555-0152", city: "Tampa", state: "FL", currentSoftware: "TaxWise", numReturns: 320, status: "lost", source: "Facebook", notes: "Budget constraints" },
    { date: "2026-02-06", name: "Brian Taylor", company: "Taylor Tax Group", email: "brian@taylortaxgroup.com", phone: "(317) 555-0174", city: "Indianapolis", state: "IN", currentSoftware: "ATX", numReturns: 1400, status: "new", source: "Google", notes: "Requesting feature comparison sheet" },
    { date: "2026-02-05", name: "Elizabeth Scott", company: "Scott Financial Tax", email: "elizabeth@scotttax.com", phone: "(480) 555-0196", city: "Scottsdale", state: "AZ", currentSoftware: "Lacerte", numReturns: 2500, status: "lost", source: "LinkedIn", notes: "Chose UltimateTax instead" },
    { date: "2026-02-05", name: "Mark Wilson", company: "Wilson & Partners Tax", email: "mark@wilsontax.com", phone: "(678) 555-0118", city: "Marietta", state: "GA", currentSoftware: "Drake", numReturns: 1600, status: "converted", source: "Google", notes: "Reseller agreement, 3 offices" },
    { date: "2026-02-04", name: "Susan Clark", company: "Clark Tax Solutions", email: "susan@clarktaxsolutions.com", phone: "(502) 555-0141", city: "Louisville", state: "KY", currentSoftware: "TaxSlayer", numReturns: 750, status: "new", source: "Direct", notes: "Local prospect, met at chamber event" },
  ];

  for (const l of leadsData) {
    await sql`INSERT INTO leads (date, name, company, email, phone, city, state, current_software, num_returns, status, source, notes)
      VALUES (${l.date}, ${l.name}, ${l.company}, ${l.email}, ${l.phone}, ${l.city}, ${l.state}, ${l.currentSoftware}, ${l.numReturns}, ${l.status}, ${l.source}, ${l.notes})
      ON CONFLICT DO NOTHING`;
  }
  console.log("  28 leads seeded\n");

  console.log("Seeding referrers...");
  const refs = [
    { source: "Google", percentage: 45 },
    { source: "Direct", percentage: 25 },
    { source: "Facebook", percentage: 15 },
    { source: "LinkedIn", percentage: 8 },
    { source: "Referral", percentage: 5 },
    { source: "Bing", percentage: 2 },
  ];
  for (const r of refs) {
    await sql`INSERT INTO referrers (source, percentage) VALUES (${r.source}, ${r.percentage}) ON CONFLICT (source) DO NOTHING`;
  }
  console.log("  Referrer data seeded\n");

  console.log("===========================================");
  console.log("Database seeded successfully!");
}

seed().catch(console.error);
