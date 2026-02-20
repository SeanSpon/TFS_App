import type {
  Lead,
  DailyPageViews,
  DailyLeads,
  ReferrerData,
  DeviceData,
  FunnelStep,
  PageMetric,
  AdminUser,
  NotificationSetting,
} from "./types";

// ── Admin Users ──────────────────────────────────────────────
export const adminUsers: AdminUser[] = [
  {
    id: 1,
    name: "John Colver",
    email: "john@taxfeedersoftware.com",
    role: "admin",
    avatar: "JC",
  },
  {
    id: 2,
    name: "Sarah Mitchell",
    email: "sarah@taxfeedersoftware.com",
    role: "manager",
    avatar: "SM",
  },
];

// ── 28 Leads ─────────────────────────────────────────────────
export const leads: Lead[] = [
  { id: 1, date: "2026-02-18", name: "Marcus Johnson", company: "Johnson Tax Services", email: "marcus@johnsontax.com", phone: "(404) 555-0112", city: "Atlanta", state: "GA", currentSoftware: "Drake", numReturns: 1200, status: "new", source: "Google", notes: "Interested in multi-office setup" },
  { id: 2, date: "2026-02-17", name: "Linda Tran", company: "Tran & Associates", email: "linda@tranassoc.com", phone: "(713) 555-0198", city: "Houston", state: "TX", currentSoftware: "TaxSlayer", numReturns: 800, status: "new", source: "Google", notes: "Currently unhappy with support response times" },
  { id: 3, date: "2026-02-17", name: "David Washington", company: "Capitol Tax Pros", email: "david@capitoltax.com", phone: "(202) 555-0134", city: "Washington", state: "DC", currentSoftware: "ProSeries", numReturns: 2200, status: "contacted", source: "LinkedIn", notes: "Wants bank product integration details" },
  { id: 4, date: "2026-02-16", name: "Rachel Kim", company: "Kim Financial Group", email: "rachel@kimfinancial.com", phone: "(312) 555-0167", city: "Chicago", state: "IL", currentSoftware: "TaxWise", numReturns: 650, status: "new", source: "Facebook", notes: "Small office, price sensitive" },
  { id: 5, date: "2026-02-16", name: "James Okafor", company: "Okafor Tax & Accounting", email: "james@okaforcpa.com", phone: "(469) 555-0145", city: "Dallas", state: "TX", currentSoftware: "ATX", numReturns: 3500, status: "converted", source: "Google", notes: "Signed 3-year reseller agreement" },
  { id: 6, date: "2026-02-15", name: "Maria Gonzalez", company: "Gonzalez Tax Center", email: "maria@gonzaleztax.com", phone: "(305) 555-0189", city: "Miami", state: "FL", currentSoftware: "Drake", numReturns: 900, status: "contacted", source: "Google", notes: "Scheduled demo for next week" },
  { id: 7, date: "2026-02-15", name: "Robert Chen", company: "Pacific Tax Solutions", email: "robert@pacifictax.com", phone: "(415) 555-0123", city: "San Francisco", state: "CA", currentSoftware: "Lacerte", numReturns: 4200, status: "contacted", source: "Referral", notes: "Referred by James Okafor" },
  { id: 8, date: "2026-02-14", name: "Patricia Williams", company: "Williams & Sons Tax", email: "patricia@williamstax.com", phone: "(615) 555-0156", city: "Nashville", state: "TN", currentSoftware: "TaxSlayer", numReturns: 550, status: "new", source: "Google", notes: "Looking to switch before next season" },
  { id: 9, date: "2026-02-14", name: "Anthony Davis", company: "Davis Tax Group", email: "anthony@davistaxgroup.com", phone: "(504) 555-0178", city: "New Orleans", state: "LA", currentSoftware: "Drake", numReturns: 1800, status: "converted", source: "Direct", notes: "Purchased Desktop + Online bundle" },
  { id: 10, date: "2026-02-13", name: "Jennifer Lopez-Martinez", company: "Sol Tax Preparation", email: "jennifer@soltaxprep.com", phone: "(602) 555-0191", city: "Phoenix", state: "AZ", currentSoftware: "TaxWise", numReturns: 420, status: "lost", source: "Facebook", notes: "Went with competitor — price was deciding factor" },
  { id: 11, date: "2026-02-13", name: "William Brown", company: "Brown's Quick Tax", email: "william@quicktax.com", phone: "(704) 555-0142", city: "Charlotte", state: "NC", currentSoftware: "ProSeries", numReturns: 950, status: "new", source: "Google", notes: "Needs hosted solution for remote staff" },
  { id: 12, date: "2026-02-12", name: "Sandra Patel", company: "Patel Tax Advisors", email: "sandra@pateltax.com", phone: "(732) 555-0168", city: "Edison", state: "NJ", currentSoftware: "ATX", numReturns: 1500, status: "contacted", source: "Google", notes: "Interested in service bureau program" },
  { id: 13, date: "2026-02-12", name: "Christopher Moore", company: "Moore Tax & Bookkeeping", email: "chris@mooretax.com", phone: "(901) 555-0115", city: "Memphis", state: "TN", currentSoftware: "Drake", numReturns: 700, status: "converted", source: "Direct", notes: "Started with Desktop plan" },
  { id: 14, date: "2026-02-11", name: "Amanda Foster", company: "Foster Financial Services", email: "amanda@fosterfin.com", phone: "(503) 555-0187", city: "Portland", state: "OR", currentSoftware: "Lacerte", numReturns: 2800, status: "contacted", source: "LinkedIn", notes: "Enterprise-level needs, multi-state" },
  { id: 15, date: "2026-02-11", name: "Daniel Rivera", company: "Rivera Tax Express", email: "daniel@riveratax.com", phone: "(210) 555-0139", city: "San Antonio", state: "TX", currentSoftware: "TaxSlayer", numReturns: 380, status: "new", source: "Facebook", notes: "Single preparer office" },
  { id: 16, date: "2026-02-10", name: "Michelle Thompson", company: "Thompson Tax Center", email: "michelle@thompsontax.com", phone: "(314) 555-0154", city: "St. Louis", state: "MO", currentSoftware: "TaxWise", numReturns: 1100, status: "contacted", source: "Google", notes: "Wants to see bank product comparison" },
  { id: 17, date: "2026-02-10", name: "Kevin Jackson", company: "Jackson Accounting Group", email: "kevin@jacksoncpa.com", phone: "(216) 555-0176", city: "Cleveland", state: "OH", currentSoftware: "ProSeries", numReturns: 2000, status: "lost", source: "Google", notes: "Decided to stay with current provider" },
  { id: 18, date: "2026-02-09", name: "Lisa Chang", company: "Chang Tax Pro", email: "lisa@changtaxpro.com", phone: "(206) 555-0193", city: "Seattle", state: "WA", currentSoftware: "ATX", numReturns: 600, status: "new", source: "Bing", notes: "Found us through search" },
  { id: 19, date: "2026-02-09", name: "Thomas Anderson", company: "Anderson & Associates", email: "thomas@andersontax.com", phone: "(303) 555-0121", city: "Denver", state: "CO", currentSoftware: "Drake", numReturns: 3200, status: "converted", source: "Google", notes: "Multi-office reseller deal signed" },
  { id: 20, date: "2026-02-08", name: "Nancy White", company: "White Tax & Financial", email: "nancy@whitetax.com", phone: "(612) 555-0148", city: "Minneapolis", state: "MN", currentSoftware: "Lacerte", numReturns: 1700, status: "contacted", source: "LinkedIn", notes: "Interested in pricing for 5 preparers" },
  { id: 21, date: "2026-02-08", name: "Steven Garcia", company: "Garcia Tax Services", email: "steven@garciatax.com", phone: "(702) 555-0165", city: "Las Vegas", state: "NV", currentSoftware: "TaxSlayer", numReturns: 450, status: "new", source: "Direct", notes: "Walk-in referral from trade show" },
  { id: 22, date: "2026-02-07", name: "Karen Robinson", company: "Robinson Tax Center", email: "karen@robinsontax.com", phone: "(919) 555-0183", city: "Raleigh", state: "NC", currentSoftware: "Drake", numReturns: 850, status: "converted", source: "Google", notes: "Online plan purchased" },
  { id: 23, date: "2026-02-07", name: "Jason Lee", company: "Lee Accounting", email: "jason@leeaccounting.com", phone: "(408) 555-0129", city: "San Jose", state: "CA", currentSoftware: "ProSeries", numReturns: 5000, status: "contacted", source: "Referral", notes: "Large firm, needs enterprise demo" },
  { id: 24, date: "2026-02-06", name: "Donna Martinez", company: "Martinez Quick Tax", email: "donna@martineztax.com", phone: "(813) 555-0152", city: "Tampa", state: "FL", currentSoftware: "TaxWise", numReturns: 320, status: "lost", source: "Facebook", notes: "Budget constraints, will reconsider next year" },
  { id: 25, date: "2026-02-06", name: "Brian Taylor", company: "Taylor Tax Group", email: "brian@taylortaxgroup.com", phone: "(317) 555-0174", city: "Indianapolis", state: "IN", currentSoftware: "ATX", numReturns: 1400, status: "new", source: "Google", notes: "Requesting feature comparison sheet" },
  { id: 26, date: "2026-02-05", name: "Elizabeth Scott", company: "Scott Financial Tax", email: "elizabeth@scotttax.com", phone: "(480) 555-0196", city: "Scottsdale", state: "AZ", currentSoftware: "Lacerte", numReturns: 2500, status: "lost", source: "LinkedIn", notes: "Chose UltimateTax instead" },
  { id: 27, date: "2026-02-05", name: "Mark Wilson", company: "Wilson & Partners Tax", email: "mark@wilsontax.com", phone: "(678) 555-0118", city: "Marietta", state: "GA", currentSoftware: "Drake", numReturns: 1600, status: "converted", source: "Google", notes: "Reseller agreement, 3 offices" },
  { id: 28, date: "2026-02-04", name: "Susan Clark", company: "Clark Tax Solutions", email: "susan@clarktaxsolutions.com", phone: "(502) 555-0141", city: "Louisville", state: "KY", currentSoftware: "TaxSlayer", numReturns: 750, status: "new", source: "Direct", notes: "Local prospect, met at chamber event" },
];

// ── 30 Days of Page Views ────────────────────────────────────
function generateDailyViews(): DailyPageViews[] {
  const data: DailyPageViews[] = [];
  const baseDate = new Date("2026-01-21");
  const pattern = [
    180, 210, 245, 290, 310, 120, 95,
    265, 305, 340, 380, 410, 150, 110,
    320, 365, 395, 430, 460, 170, 130,
    380, 420, 445, 475, 510, 190, 145,
    410, 450,
  ];
  for (let i = 0; i < 30; i++) {
    const d = new Date(baseDate);
    d.setDate(d.getDate() + i);
    data.push({
      date: d.toISOString().slice(0, 10),
      views: pattern[i],
    });
  }
  return data;
}

export const dailyPageViews: DailyPageViews[] = generateDailyViews();

// ── Leads per day (last 14 days) ─────────────────────────────
export const dailyLeads: DailyLeads[] = [
  { date: "2026-02-04", count: 1 },
  { date: "2026-02-05", count: 2 },
  { date: "2026-02-06", count: 2 },
  { date: "2026-02-07", count: 2 },
  { date: "2026-02-08", count: 2 },
  { date: "2026-02-09", count: 2 },
  { date: "2026-02-10", count: 2 },
  { date: "2026-02-11", count: 2 },
  { date: "2026-02-12", count: 2 },
  { date: "2026-02-13", count: 2 },
  { date: "2026-02-14", count: 2 },
  { date: "2026-02-15", count: 2 },
  { date: "2026-02-16", count: 2 },
  { date: "2026-02-17", count: 2 },
];

// ── Referrer Breakdown ───────────────────────────────────────
export const referrerData: ReferrerData[] = [
  { source: "Google", percentage: 45, color: "#4285F4" },
  { source: "Direct", percentage: 25, color: "#0f1b2d" },
  { source: "Facebook", percentage: 15, color: "#1877F2" },
  { source: "LinkedIn", percentage: 8, color: "#0A66C2" },
  { source: "Referral", percentage: 5, color: "#c9a84c" },
  { source: "Bing", percentage: 2, color: "#008373" },
];

// ── Device Split ─────────────────────────────────────────────
export const deviceData: DeviceData[] = [
  { device: "Desktop", percentage: 62, color: "#0f1b2d" },
  { device: "Mobile", percentage: 31, color: "#c9a84c" },
  { device: "Tablet", percentage: 7, color: "#64748b" },
];

// ── Conversion Funnel ────────────────────────────────────────
export const funnelSteps: FunnelStep[] = [
  { label: "Site Visits", value: 2847, color: "#0f1b2d" },
  { label: "Contact Page Views", value: 634, color: "#1a2d4a" },
  { label: "Form Starts", value: 289, color: "#c9a84c" },
  { label: "Submissions", value: 142, color: "#b08f3a" },
  { label: "Converted", value: 28, color: "#2d6a4f" },
];

// ── Page Metrics ─────────────────────────────────────────────
export const pageMetrics: PageMetric[] = [
  { page: "/", views: 3240, avgTime: "2:45", bounceRate: 38 },
  { page: "/software", views: 1680, avgTime: "3:12", bounceRate: 32 },
  { page: "/features", views: 1120, avgTime: "4:05", bounceRate: 28 },
  { page: "/reseller", views: 890, avgTime: "5:18", bounceRate: 22 },
  { page: "/contact", views: 634, avgTime: "3:45", bounceRate: 45 },
  { page: "/support", views: 520, avgTime: "2:30", bounceRate: 55 },
  { page: "/about", views: 348, avgTime: "1:58", bounceRate: 62 },
];

// ── Notification Settings ────────────────────────────────────
export const defaultNotifications: NotificationSetting[] = [
  { id: "new_lead", label: "New Lead Alerts", description: "Get notified when a new lead submits the contact form", enabled: true },
  { id: "weekly_digest", label: "Weekly Digest", description: "Receive a weekly summary of leads and analytics", enabled: true },
  { id: "conversion_alert", label: "Conversion Alerts", description: "Get notified when a lead converts to a customer", enabled: false },
];

// ── Lead source breakdown (for donut chart) ──────────────────
export const leadSourceData: ReferrerData[] = [
  { source: "Google", percentage: 39, color: "#4285F4" },
  { source: "Direct", percentage: 18, color: "#0f1b2d" },
  { source: "Facebook", percentage: 14, color: "#1877F2" },
  { source: "LinkedIn", percentage: 14, color: "#0A66C2" },
  { source: "Referral", percentage: 7, color: "#c9a84c" },
  { source: "Bing", percentage: 7, color: "#008373" },
];
