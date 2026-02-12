import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">
              Professional Tax Software
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              The software your tax business{" "}
              <span className="text-gold">deserves.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl">
              TaxFeeder Software gives tax preparers, office owners, and service bureaus
              everything they need to file faster, earn more, and grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md text-center transition-colors"
              >
                Book a Free Demo
              </Link>
              <Link
                href="/reseller"
                className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md text-center transition-colors"
              >
                Become a Reseller
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Built for every level of tax professional
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Whether you prepare 50 returns or manage 50 offices, TaxFeeder scales with you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                ),
                title: "Tax Preparers",
                desc: "Fast, accurate software with all federal and state forms. E-file ready out of the box. Spend less time on software, more time with clients.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                  </svg>
                ),
                title: "Tax Office Owners",
                desc: "Manage multiple preparers, track returns, and run reports from a single dashboard. Built for offices that need visibility and control.",
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                ),
                title: "Service Bureaus & Resellers",
                desc: "White-label the software under your brand. Set your own pricing, earn on every return, and build a recurring revenue stream.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-slate leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What TFS Is */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium mb-2 text-sm uppercase tracking-wider">
                What is TaxFeeder?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Tax preparation software that just works
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                TaxFeeder is professional tax preparation software designed for people who do
                taxes for a living. It handles individual, corporate, and state returns
                with built-in e-file, compliance checks, and office management tools.
              </p>
              <p className="text-slate leading-relaxed">
                No complicated setup. No surprise fees mid-season. You get the software,
                the support, and the tools to run your tax business efficiently &mdash; whether
                you&apos;re a solo preparer or running a multi-location operation.
              </p>
            </div>
            <div className="bg-navy rounded-2xl p-8 md:p-12 text-white">
              <div className="space-y-6">
                {[
                  { num: "01", text: "Individual & corporate returns" },
                  { num: "02", text: "All 50 states supported" },
                  { num: "03", text: "Built-in e-file & compliance" },
                  { num: "04", text: "Office & preparer management" },
                  { num: "05", text: "Bank product integrations" },
                  { num: "06", text: "Year-round dedicated support" },
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-4">
                    <span className="text-gold font-mono text-sm font-bold">{item.num}</span>
                    <span className="text-white/80">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Benefits */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Why tax pros choose TaxFeeder
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fast Processing", desc: "Intuitive data entry and smart workflows that let you prepare returns in minutes, not hours." },
              { title: "E-File Ready", desc: "IRS-authorized e-file built in. Submit federal and state returns directly with real-time status tracking." },
              { title: "Dedicated Support", desc: "Real people who answer the phone. Year-round support with extended hours during tax season." },
              { title: "Scalable", desc: "From a single-preparer office to a multi-location firm. Add users, offices, and capacity as you grow." },
              { title: "Competitive Pricing", desc: "Transparent pricing with no hidden fees. Know exactly what you're paying before the season starts." },
              { title: "Bank Products", desc: "Integrated refund transfers and advance products that your clients need and that generate revenue for you." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-gold rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Get started in 4 steps
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Book a Demo", desc: "See the software in action. We'll walk you through everything." },
              { step: "2", title: "Get Set Up", desc: "Our team configures your account, imports your data, and gets you ready." },
              { step: "3", title: "Start Filing", desc: "Prepare and e-file returns with confidence. Support is a call away." },
              { step: "4", title: "Grow", desc: "Add preparers, open new offices, or become a reseller. Scale on your terms." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-navy text-gold font-bold text-xl rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller Preview */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-medium mb-2 text-sm uppercase tracking-wider">
                Reseller Program
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Build your own tax software brand
              </h2>
              <p className="text-white/70 leading-relaxed mb-6">
                The TaxFeeder Reseller Program lets you distribute tax software under your
                own brand. Set your own pricing, earn on every return filed through your
                network, and build a business that generates revenue year-round.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "White-label software with your branding",
                  "Set your own pricing and keep your margins",
                  "Earn service bureau fees on every bank product",
                  "Dedicated onboarding and training",
                  "Year-round support for you and your clients",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/reseller" className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors">
                Learn About the Reseller Program
              </Link>
            </div>
            <div className="bg-navy-light rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Reseller revenue streams</h3>
              <div className="space-y-4">
                {[
                  { stream: "Software License Sales", desc: "Sell software packages at your own price point" },
                  { stream: "Service Bureau Fees", desc: "Earn $50–$99 per funded bank product" },
                  { stream: "Renewal Revenue", desc: "Annual renewals from your preparer network" },
                  { stream: "Add-On Services", desc: "Training, support packages, and consulting" },
                ].map((item) => (
                  <div key={item.stream} className="bg-white/5 rounded-lg p-4">
                    <h4 className="font-semibold text-gold mb-1">{item.stream}</h4>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { stat: "IRS", label: "Authorized E-File Provider" },
              { stat: "50", label: "States Supported" },
              { stat: "24/7", label: "Peak Season Support" },
              { stat: "100%", label: "Cloud & Desktop Ready" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-4xl font-bold text-gold mb-2">{item.stat}</div>
                <p className="text-slate text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to see TaxFeeder in action?
          </h2>
          <p className="text-white/70 mb-10 text-lg">
            Book a free demo and we&apos;ll show you exactly how TaxFeeder fits your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors">
              Book a Free Demo
            </Link>
            <a href="tel:+15022378401" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors">
              Call (502) 237-8401
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
