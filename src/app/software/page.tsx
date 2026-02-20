import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tax Preparation Software | TaxFeeder Software",
  description: "Professional tax preparation software with e-file, office management, and bank product integrations. Built for tax preparers and offices.",
};

export default function SoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">Our Software</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Everything you need to run a tax business
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              TaxFeeder offers Desktop, Online, and Hosted solutions — individual returns, business
              returns, all 50 states, e-file, office management, and bank products. One platform, no gaps.
              Packages start at $599 with volume discounts available.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Built for the way tax pros actually work
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                TaxFeeder Software handles the full lifecycle of tax preparation — from client intake
                and data entry to e-filing and bank product processing. The interface is designed for
                speed: experienced preparers can move through returns quickly, while built-in compliance
                checks catch errors before they become problems.
              </p>
              <p className="text-slate leading-relaxed">
                TaxFeeder offers Desktop, Online, and Hosted solutions &mdash; choose the platform
                that works for your operation. And every package comes with the support
                that matters most: real people who pick up the phone during tax season.
              </p>
            </div>
            {/* Software mockup placeholder */}
            <div className="bg-navy rounded-2xl p-1">
              <div className="bg-navy-light rounded-xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="text-white/40 text-xs ml-2">TaxFeeder Pro</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <span className="text-white/60 text-sm">Form 1040 — Individual Return</span>
                    <span className="text-green-400 text-xs font-medium">Ready to E-File</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <span className="text-white/60 text-sm">Form 1120S — S-Corp Return</span>
                    <span className="text-gold text-xs font-medium">In Progress</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <span className="text-white/60 text-sm">Schedule C — Business Income</span>
                    <span className="text-green-400 text-xs font-medium">E-Filed</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                    <span className="text-white/60 text-sm">State Return — KY</span>
                    <span className="text-green-400 text-xs font-medium">E-Filed</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-white/40">
                  <span>4 returns this session</span>
                  <span>2 preparers active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What&apos;s included</h2>
            <p className="text-slate max-w-2xl mx-auto">Every TaxFeeder package includes the core tools you need. No nickel-and-diming on essential features.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Individual Returns", desc: "1040, 1040-NR, 1040-SS plus all individual state returns. Full coverage for individual tax preparation." },
              { title: "Business Returns", desc: "1120, 1120-S, 1120-H, 1065, 1041, 990 plus all business state returns. Complete business filing support." },
              { title: "Bank Product Integrations", desc: "Integrated with Refund Advantage, Refundo, Republic, and SBTPG for refund transfers, advances, and financial products." },
              { title: "Data Conversions", desc: "Switch easily from Drake, ProSeries, TaxSlayer, or TaxWise — including their business variants. We handle the conversion." },
              { title: "Office Management", desc: "Track preparers, manage clients, monitor return status, and run production reports from one dashboard." },
              { title: "Multiple Platforms", desc: "Desktop, Online, and Hosted solutions. Choose the deployment that fits your office — or use all three." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's Built For */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Who TaxFeeder is built for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Solo Preparers", desc: "You handle everything yourself. You need software that's fast, reliable, and doesn't require an IT team to set up." },
              { title: "Multi-Preparer Offices", desc: "You manage a team. You need visibility into who's doing what, with controls and reporting to keep the office running smoothly." },
              { title: "Multi-Location Firms", desc: "You run multiple offices. You need centralized management, consistent software across locations, and scalability." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-gold rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TFS */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why choose TaxFeeder</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: "Support that answers", desc: "Real phone support with real people. Extended hours during tax season when you need it most." },
              { title: "No mid-season surprises", desc: "Transparent pricing. You know what you're paying before January, not after you're locked in." },
              { title: "Everything included", desc: "Federal, state, e-file, bank products, and office tools. Not sold as separate add-on modules." },
              { title: "Built to scale", desc: "Start as a solo preparer. Grow to multiple offices. Become a reseller. The software grows with you." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="font-bold mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy mb-4">See it in action</h2>
          <p className="text-slate mb-8">Book a free demo and we&apos;ll walk you through the full platform.</p>
          <Link href="/contact" className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors">
            Book a Free Demo
          </Link>
        </div>
      </section>
    </>
  );
}
