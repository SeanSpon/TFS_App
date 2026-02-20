/**
 * Neon Postgres Seed Script for TFS Admin Dashboard
 *
 * Usage (once you have a Neon database):
 *   1. npm install @neondatabase/serverless
 *   2. Set DATABASE_URL in .env.local
 *   3. npx tsx scripts/seed.ts
 *
 * This script creates tables and seeds them with the same mock data
 * used in the dashboard, so the transition from mock → live is seamless.
 */

// Uncomment when ready to connect:
// import { neon } from "@neondatabase/serverless";
// const sql = neon(process.env.DATABASE_URL!);

const SCHEMA = `
-- ══════════════════════════════════════════════════════════════
-- TFS Admin Dashboard — Neon Postgres Schema
-- ══════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS admin_users (
  id            SERIAL PRIMARY KEY,
  name          VARCHAR(100) NOT NULL,
  email         VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role          VARCHAR(20) NOT NULL DEFAULT 'manager',
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS leads (
  id                SERIAL PRIMARY KEY,
  date              DATE NOT NULL DEFAULT CURRENT_DATE,
  name              VARCHAR(100) NOT NULL,
  company           VARCHAR(200) NOT NULL,
  email             VARCHAR(255) NOT NULL,
  phone             VARCHAR(30),
  city              VARCHAR(100),
  state             VARCHAR(2),
  current_software  VARCHAR(50),
  num_returns       INTEGER,
  status            VARCHAR(20) NOT NULL DEFAULT 'new',
  source            VARCHAR(50),
  notes             TEXT,
  created_at        TIMESTAMPTZ DEFAULT NOW(),
  updated_at        TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_date   ON leads(date DESC);
CREATE INDEX IF NOT EXISTS idx_leads_source ON leads(source);

CREATE TABLE IF NOT EXISTS page_views (
  id         SERIAL PRIMARY KEY,
  date       DATE NOT NULL,
  page       VARCHAR(255) NOT NULL,
  views      INTEGER NOT NULL DEFAULT 0,
  avg_time   VARCHAR(10),
  bounce_rate DECIMAL(5,2),
  UNIQUE(date, page)
);

CREATE TABLE IF NOT EXISTS analytics_daily (
  id              SERIAL PRIMARY KEY,
  date            DATE UNIQUE NOT NULL,
  total_views     INTEGER NOT NULL DEFAULT 0,
  unique_visitors INTEGER NOT NULL DEFAULT 0,
  avg_session     VARCHAR(10),
  bounce_rate     DECIMAL(5,2)
);

CREATE TABLE IF NOT EXISTS referrers (
  id         SERIAL PRIMARY KEY,
  source     VARCHAR(50) UNIQUE NOT NULL,
  percentage DECIMAL(5,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS notification_settings (
  id          SERIAL PRIMARY KEY,
  user_id     INTEGER REFERENCES admin_users(id),
  setting_key VARCHAR(50) NOT NULL,
  enabled     BOOLEAN NOT NULL DEFAULT true,
  UNIQUE(user_id, setting_key)
);
`;

const SEED_USERS = `
INSERT INTO admin_users (name, email, password_hash, role) VALUES
  ('John Colver',    'john@taxfeedersoftware.com',  '$2b$10$placeholder_hash_john',  'admin'),
  ('Sarah Mitchell', 'sarah@taxfeedersoftware.com', '$2b$10$placeholder_hash_sarah', 'manager')
ON CONFLICT (email) DO NOTHING;
`;

const SEED_LEADS = `
INSERT INTO leads (date, name, company, email, phone, city, state, current_software, num_returns, status, source, notes) VALUES
  ('2026-02-18', 'Marcus Johnson',          'Johnson Tax Services',      'marcus@johnsontax.com',       '(404) 555-0112', 'Atlanta',       'GA', 'Drake',     1200, 'new',       'Google',   'Interested in multi-office setup'),
  ('2026-02-17', 'Linda Tran',              'Tran & Associates',         'linda@tranassoc.com',         '(713) 555-0198', 'Houston',       'TX', 'TaxSlayer', 800,  'new',       'Google',   'Currently unhappy with support response times'),
  ('2026-02-17', 'David Washington',        'Capitol Tax Pros',          'david@capitoltax.com',        '(202) 555-0134', 'Washington',    'DC', 'ProSeries', 2200, 'contacted', 'LinkedIn', 'Wants bank product integration details'),
  ('2026-02-16', 'Rachel Kim',              'Kim Financial Group',       'rachel@kimfinancial.com',     '(312) 555-0167', 'Chicago',       'IL', 'TaxWise',   650,  'new',       'Facebook', 'Small office, price sensitive'),
  ('2026-02-16', 'James Okafor',            'Okafor Tax & Accounting',   'james@okaforcpa.com',         '(469) 555-0145', 'Dallas',        'TX', 'ATX',       3500, 'converted', 'Google',   'Signed 3-year reseller agreement'),
  ('2026-02-15', 'Maria Gonzalez',          'Gonzalez Tax Center',       'maria@gonzaleztax.com',       '(305) 555-0189', 'Miami',         'FL', 'Drake',     900,  'contacted', 'Google',   'Scheduled demo for next week'),
  ('2026-02-15', 'Robert Chen',             'Pacific Tax Solutions',     'robert@pacifictax.com',       '(415) 555-0123', 'San Francisco', 'CA', 'Lacerte',   4200, 'contacted', 'Referral', 'Referred by James Okafor'),
  ('2026-02-14', 'Patricia Williams',       'Williams & Sons Tax',       'patricia@williamstax.com',    '(615) 555-0156', 'Nashville',     'TN', 'TaxSlayer', 550,  'new',       'Google',   'Looking to switch before next season'),
  ('2026-02-14', 'Anthony Davis',           'Davis Tax Group',           'anthony@davistaxgroup.com',   '(504) 555-0178', 'New Orleans',   'LA', 'Drake',     1800, 'converted', 'Direct',   'Purchased Desktop + Online bundle'),
  ('2026-02-13', 'Jennifer Lopez-Martinez', 'Sol Tax Preparation',       'jennifer@soltaxprep.com',     '(602) 555-0191', 'Phoenix',       'AZ', 'TaxWise',   420,  'lost',      'Facebook', 'Went with competitor — price was deciding factor'),
  ('2026-02-13', 'William Brown',           'Brown''s Quick Tax',        'william@quicktax.com',        '(704) 555-0142', 'Charlotte',     'NC', 'ProSeries', 950,  'new',       'Google',   'Needs hosted solution for remote staff'),
  ('2026-02-12', 'Sandra Patel',            'Patel Tax Advisors',        'sandra@pateltax.com',         '(732) 555-0168', 'Edison',        'NJ', 'ATX',       1500, 'contacted', 'Google',   'Interested in service bureau program'),
  ('2026-02-12', 'Christopher Moore',       'Moore Tax & Bookkeeping',   'chris@mooretax.com',          '(901) 555-0115', 'Memphis',       'TN', 'Drake',     700,  'converted', 'Direct',   'Started with Desktop plan'),
  ('2026-02-11', 'Amanda Foster',           'Foster Financial Services', 'amanda@fosterfin.com',        '(503) 555-0187', 'Portland',      'OR', 'Lacerte',   2800, 'contacted', 'LinkedIn', 'Enterprise-level needs, multi-state'),
  ('2026-02-11', 'Daniel Rivera',           'Rivera Tax Express',        'daniel@riveratax.com',        '(210) 555-0139', 'San Antonio',   'TX', 'TaxSlayer', 380,  'new',       'Facebook', 'Single preparer office'),
  ('2026-02-10', 'Michelle Thompson',       'Thompson Tax Center',       'michelle@thompsontax.com',    '(314) 555-0154', 'St. Louis',     'MO', 'TaxWise',   1100, 'contacted', 'Google',   'Wants to see bank product comparison'),
  ('2026-02-10', 'Kevin Jackson',           'Jackson Accounting Group',  'kevin@jacksoncpa.com',        '(216) 555-0176', 'Cleveland',     'OH', 'ProSeries', 2000, 'lost',      'Google',   'Decided to stay with current provider'),
  ('2026-02-09', 'Lisa Chang',              'Chang Tax Pro',             'lisa@changtaxpro.com',        '(206) 555-0193', 'Seattle',       'WA', 'ATX',       600,  'new',       'Bing',     'Found us through search'),
  ('2026-02-09', 'Thomas Anderson',         'Anderson & Associates',     'thomas@andersontax.com',      '(303) 555-0121', 'Denver',        'CO', 'Drake',     3200, 'converted', 'Google',   'Multi-office reseller deal signed'),
  ('2026-02-08', 'Nancy White',             'White Tax & Financial',     'nancy@whitetax.com',          '(612) 555-0148', 'Minneapolis',   'MN', 'Lacerte',   1700, 'contacted', 'LinkedIn', 'Interested in pricing for 5 preparers'),
  ('2026-02-08', 'Steven Garcia',           'Garcia Tax Services',       'steven@garciatax.com',        '(702) 555-0165', 'Las Vegas',     'NV', 'TaxSlayer', 450,  'new',       'Direct',   'Walk-in referral from trade show'),
  ('2026-02-07', 'Karen Robinson',          'Robinson Tax Center',       'karen@robinsontax.com',       '(919) 555-0183', 'Raleigh',       'NC', 'Drake',     850,  'converted', 'Google',   'Online plan purchased'),
  ('2026-02-07', 'Jason Lee',               'Lee Accounting',            'jason@leeaccounting.com',     '(408) 555-0129', 'San Jose',      'CA', 'ProSeries', 5000, 'contacted', 'Referral', 'Large firm, needs enterprise demo'),
  ('2026-02-06', 'Donna Martinez',          'Martinez Quick Tax',        'donna@martineztax.com',       '(813) 555-0152', 'Tampa',         'FL', 'TaxWise',   320,  'lost',      'Facebook', 'Budget constraints, will reconsider next year'),
  ('2026-02-06', 'Brian Taylor',            'Taylor Tax Group',          'brian@taylortaxgroup.com',    '(317) 555-0174', 'Indianapolis',  'IN', 'ATX',       1400, 'new',       'Google',   'Requesting feature comparison sheet'),
  ('2026-02-05', 'Elizabeth Scott',         'Scott Financial Tax',       'elizabeth@scotttax.com',      '(480) 555-0196', 'Scottsdale',    'AZ', 'Lacerte',   2500, 'lost',      'LinkedIn', 'Chose UltimateTax instead'),
  ('2026-02-05', 'Mark Wilson',             'Wilson & Partners Tax',     'mark@wilsontax.com',          '(678) 555-0118', 'Marietta',      'GA', 'Drake',     1600, 'converted', 'Google',   'Reseller agreement, 3 offices'),
  ('2026-02-04', 'Susan Clark',             'Clark Tax Solutions',       'susan@clarktaxsolutions.com', '(502) 555-0141', 'Louisville',    'KY', 'TaxSlayer', 750,  'new',       'Direct',   'Local prospect, met at chamber event')
ON CONFLICT DO NOTHING;
`;

const SEED_REFERRERS = `
INSERT INTO referrers (source, percentage) VALUES
  ('Google',   45),
  ('Direct',   25),
  ('Facebook', 15),
  ('LinkedIn', 8),
  ('Referral', 5),
  ('Bing',     2)
ON CONFLICT (source) DO NOTHING;
`;

async function seed() {
  console.log("🌱 TFS Admin Dashboard — Database Seed Script");
  console.log("═══════════════════════════════════════════════\n");

  // Uncomment when Neon is connected:
  // console.log("Creating schema...");
  // await sql(SCHEMA);
  // console.log("✓ Schema created\n");

  // console.log("Seeding admin users...");
  // await sql(SEED_USERS);
  // console.log("✓ 2 admin users seeded\n");

  // console.log("Seeding leads...");
  // await sql(SEED_LEADS);
  // console.log("✓ 28 leads seeded\n");

  // console.log("Seeding referrers...");
  // await sql(SEED_REFERRERS);
  // console.log("✓ Referrer data seeded\n");

  // console.log("═══════════════════════════════════════════════");
  // console.log("✅ Database seeded successfully!");

  console.log("⚠️  Database not connected yet.");
  console.log("   To connect a Neon Postgres database:");
  console.log("   1. Create a project at https://neon.tech");
  console.log("   2. Copy the connection string");
  console.log("   3. Add DATABASE_URL to .env.local");
  console.log("   4. npm install @neondatabase/serverless");
  console.log("   5. Uncomment the code in this file");
  console.log("   6. Run: npx tsx scripts/seed.ts\n");
  console.log("   Schema and seed data are ready to go!");
  console.log("═══════════════════════════════════════════════\n");
  console.log("SQL Preview:\n");
  console.log(SCHEMA);
}

seed().catch(console.error);
