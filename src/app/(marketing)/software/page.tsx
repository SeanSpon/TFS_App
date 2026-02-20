import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Tax Preparation Software | TaxFeeder Software",
  description:
    "Professional tax preparation software with e-file, office management, and bank product integrations. Desktop, Online & Hosted solutions starting at $599.",
};

export default function SoftwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient wave-divider text-white py-20 md:py-28 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">
                Our Software
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Everything you need to{" "}
                <span className="text-gradient-gold">run a tax business</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-4">
                TaxFeeder offers Desktop, Online, and Hosted solutions — individual returns,
                business returns, all 50 states, e-file, office management, and bank products.
                One platform, no gaps.
              </p>
              <p className="text-sm text-white/50">
                Packages start at $599 with volume discounts available.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-off-white bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">
                  Built for the way tax pros actually work
                </h2>
                <p className="text-slate leading-relaxed mb-4">
                  TaxFeeder Software handles the full lifecycle of tax preparation — from
                  client intake and data entry to e-filing and bank product processing. The
                  interface is designed for speed: experienced preparers can move through
                  returns quickly, while built-in compliance checks catch errors before they
                  become problems.
                </p>
                <p className="text-slate leading-relaxed">
                  TaxFeeder offers Desktop, Online, and Hosted solutions &mdash; choose the
                  platform that works for your operation. And every package comes with the
                  support that matters most: real people who pick up the phone during tax
                  season.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              {/* Software mockup */}
              <div className="bg-navy rounded-2xl p-1 gold-glow">
                <div className="bg-navy-light rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-white/40 text-xs ml-2">TaxFeeder Pro</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                      <span className="text-white/60 text-sm">
                        Form 1040 — Individual Return
                      </span>
                      <span className="text-green-400 text-xs font-medium">
                        Ready to E-File
                      </span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                      <span className="text-white/60 text-sm">
                        Form 1120-S — S-Corp Return
                      </span>
                      <span className="text-gold text-xs font-medium">In Progress</span>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 flex items-center justify-between">
                      <span className="text-white/60 text-sm">
                        Form 1065 — Partnership Return
                      </span>
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                What&apos;s included
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Every TaxFeeder package includes the core tools you need. No nickel-and-diming
                on essential features.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Individual Returns",
                desc: "1040, 1040-NR, 1040-SS plus all individual state returns. Full coverage for individual tax preparation.",
                delay: 0,
              },
              {
                title: "Business Returns",
                desc: "1120, 1120-S, 1120-H, 1065, 1041, 990 plus all business state returns. Complete business filing support.",
                delay: 100,
              },
              {
                title: "Bank Product Integrations",
                desc: "Integrated with Refund Advantage, Refundo, Republic, and SBTPG for refund transfers, advances, and financial products.",
                delay: 200,
              },
              {
                title: "Data Conversions",
                desc: "Switch easily from Drake, ProSeries, TaxSlayer, or TaxWise — including their business variants. We handle the conversion.",
                delay: 300,
              },
              {
                title: "Office Management",
                desc: "Track preparers, manage clients, monitor return status, and run production reports from one dashboard.",
                delay: 400,
              },
              {
                title: "Multiple Platforms",
                desc: "Desktop, Online, and Hosted solutions. Choose the deployment that fits your office — or use all three.",
                delay: 500,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-hover card-hover-gold h-full">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-3 h-3 bg-gold rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Mention */}
      <section className="py-16 bg-off-white bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Packages start at <span className="text-gold font-bold">$599</span> with
                volume discounts available. You know what you&apos;re paying before the season
                starts — no surprise fees, no hidden add-ons.
              </p>
              <p className="text-slate-light text-sm">
                Contact us for a customized quote based on your business structure and size.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-8 py-4 rounded-md transition-colors"
                >
                  Get a Custom Quote
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who It's Built For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-10 text-center">
              Who TaxFeeder is built for
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Solo Preparers",
                desc: "You handle everything yourself. You need software that's fast, reliable, and doesn't require an IT team to set up.",
                delay: 0,
              },
              {
                title: "Multi-Preparer Offices",
                desc: "You manage a team. You need visibility into who's doing what, with controls and reporting to keep the office running smoothly.",
                delay: 150,
              },
              {
                title: "Multi-Location Firms",
                desc: "You run multiple offices. You need centralized management, consistent software across locations, and scalability.",
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 bg-gold rounded-full" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why TFS */}
      <section className="hero-gradient-alt text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why choose TaxFeeder
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Support that answers",
                desc: "Real phone support with real people. Extended hours during tax season when you need it most.",
                delay: 0,
              },
              {
                title: "No mid-season surprises",
                desc: "Transparent pricing. You know what you're paying before January, not after you're locked in.",
                delay: 100,
              },
              {
                title: "Everything included",
                desc: "Federal, state, e-file, bank products, and office tools. Not sold as separate add-on modules.",
                delay: 200,
              },
              {
                title: "Built to scale",
                desc: "Start as a solo preparer. Grow to multiple offices. Become a reseller. The software grows with you.",
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="flex gap-4">
                  <svg
                    className="w-6 h-6 text-gold flex-shrink-0 mt-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-navy mb-4">See it in action</h2>
            <p className="text-slate mb-8">
              Book a free demo and we&apos;ll walk you through the full platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors"
              >
                Book a Free Demo
              </Link>
              <a
                href="tel:+15022378401"
                className="border border-navy/30 hover:border-navy text-navy font-semibold px-8 py-4 rounded-md transition-colors"
              >
                Call (502) 237-8401
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
