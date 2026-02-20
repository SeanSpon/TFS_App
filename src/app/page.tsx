import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ---------- SVG icon helpers (inlined for zero-dep server rendering) ---------- */

function IconUser({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}

function IconBuilding({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function IconChart({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  );
}

function IconBolt({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function IconCloud({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.338-2.32 3 3 0 013.523 3.94A3.75 3.75 0 0118 19.5H6.75z" />
    </svg>
  );
}

function IconHeadset({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  );
}

function IconScale({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
  );
}

function IconTag({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  );
}

function IconBank({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
    </svg>
  );
}

function IconCheck({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function IconQuote({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" opacity={0.6}>
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  );
}

function IconArrowConvert({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

/* ========================================================================== */
/*  HOME PAGE                                                                 */
/* ========================================================================== */

export default function Home() {
  return (
    <>
      {/* ================================================================ */}
      {/*  1. HERO                                                         */}
      {/* ================================================================ */}
      <section className="hero-gradient wave-divider wave-divider-white relative overflow-hidden">
        {/* Decorative radial gold glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-[-10%] -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-36 lg:py-44 pb-32 md:pb-40">
          <div className="max-w-3xl">
            <p className="text-gold font-semibold mb-4 text-xs uppercase tracking-[0.25em]">
              Equip. Empower. Elevate.
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white">
              The software your tax business{" "}
              <span className="text-gradient-gold">deserves.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-3 leading-relaxed max-w-2xl">
              Tax Feeder gives tax preparers, office owners, and service bureaus everything
              they need to file faster, earn more, and grow with confidence.
              Available as Desktop, Online &amp; Hosted solutions.
            </p>
            <p className="text-sm text-white/50 mb-10 font-medium">
              Packages start at $599 &mdash; volume discounts available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-lg text-center transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30"
              >
                Get Started
              </Link>
              <Link
                href="/reseller"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-center transition-all duration-200"
              >
                Become a Reseller
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  2. PARTNER LOGOS STRIP                                          */}
      {/* ================================================================ */}
      <section className="bg-white py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="fade">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate mb-8">
              Integrated Bank Product Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              {[
                "Refund Advantage",
                "Refundo",
                "Republic",
                "SBTPG",
              ].map((partner) => (
                <div
                  key={partner}
                  className="px-6 py-3 rounded-full border border-gray-200 bg-off-white text-navy font-semibold text-sm tracking-wide hover:border-gold/40 transition-colors duration-200"
                >
                  {partner}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  3. ANIMATED STATS BAR                                           */}
      {/* ================================================================ */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-dots" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <ScrollReveal direction="up">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { end: 7, suffix: "+", label: "Years in Business" },
                { end: 40000, suffix: "+", label: "Returns Processed" },
                { end: 100, suffix: "+", label: "Locations Supported" },
                { end: 50, suffix: "", label: "States Covered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2200} />
                  </div>
                  <p className="text-white/70 text-sm font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  4. WHO IT'S FOR                                                */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-xs uppercase tracking-[0.2em]">
                Who it&apos;s for
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
                Built for every level of tax professional
              </h2>
              <p className="text-slate max-w-2xl mx-auto text-lg">
                Whether you prepare 50 returns or manage 50 offices, Tax Feeder scales with you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <IconUser className="w-8 h-8 text-gold" />,
                title: "Tax Preparers",
                desc: "Fast, accurate software with all federal and state forms. E-file ready out of the box. Spend less time fighting software, more time serving clients.",
                delay: 0,
              },
              {
                icon: <IconBuilding className="w-8 h-8 text-gold" />,
                title: "Tax Office Owners",
                desc: "Manage multiple preparers, track returns, and run reports from a single dashboard. Built for offices that need visibility, control, and growth tools.",
                delay: 150,
              },
              {
                icon: <IconChart className="w-8 h-8 text-gold" />,
                title: "Service Bureaus & Resellers",
                desc: "White-label the software under your brand. Set your own pricing, earn on every return, and build a recurring revenue stream with full support behind you.",
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay} direction="up">
                <div className="card-hover card-hover-gold bg-white rounded-2xl p-8 border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-slate leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  5. WHAT IS TAXFEEDER                                           */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-gold font-semibold mb-3 text-xs uppercase tracking-[0.2em]">
                  What is Tax Feeder?
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                  Tax preparation software that{" "}
                  <span className="animated-underline">just works</span>
                </h2>
                <p className="text-slate leading-relaxed mb-4 text-lg">
                  Tax Feeder is professional tax preparation software designed for people who do
                  taxes for a living. Available as Desktop, Online, and Hosted solutions, it handles
                  individual, business, and state returns with built-in e-file, compliance checks,
                  and office management tools.
                </p>
                <p className="text-slate leading-relaxed text-lg">
                  No complicated setup. No surprise fees mid-season. You get the software,
                  the support, and the tools to run your tax business efficiently &mdash; whether
                  you&apos;re a solo preparer or running a multi-location operation.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-navy rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <div className="space-y-5">
                  {[
                    { num: "01", text: "Individual returns (1040, 1040-NR, 1040-SS) + all states" },
                    { num: "02", text: "Business returns (1120, 1120-S, 1120-H, 1065, 1041, 990) + states" },
                    { num: "03", text: "Desktop, Online & Hosted platforms" },
                    { num: "04", text: "Office & preparer management" },
                    { num: "05", text: "Bank products via Refund Advantage, Refundo, Republic & SBTPG" },
                    { num: "06", text: "Data conversions from Drake, ProSeries, TaxSlayer & TaxWise" },
                  ].map((item) => (
                    <div key={item.num} className="flex items-start gap-4 group">
                      <span className="text-gold font-mono text-sm font-bold mt-0.5 shrink-0 group-hover:text-gold-light transition-colors">
                        {item.num}
                      </span>
                      <span className="text-white/80 leading-relaxed">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  6. DATA CONVERSIONS                                            */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 mb-5">
                <IconArrowConvert className="w-7 h-7 text-gold" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
                Switch with confidence
              </h2>
              <p className="text-slate max-w-xl mx-auto text-lg">
                We handle the data conversion. You keep filing.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              "Drake",
              "Drake Business",
              "ProSeries",
              "ProSeries Business",
              "TaxSlayer",
              "TaxSlayer Business",
              "TaxWise",
              "TaxWise Business",
            ].map((name, i) => (
              <ScrollReveal key={name} delay={i * 80} direction="up">
                <div className="px-5 py-3.5 rounded-xl border border-gray-200 bg-off-white text-navy font-semibold text-sm text-center hover:border-gold/40 hover:bg-gold/5 transition-all duration-200">
                  {name}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  7. CORE BENEFITS                                               */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-xs uppercase tracking-[0.2em]">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                Why tax pros choose Tax Feeder
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <IconBolt className="w-6 h-6 text-gold" />,
                title: "Fast Processing",
                desc: "Intuitive data entry and smart workflows that let you prepare returns in minutes, not hours.",
                delay: 0,
              },
              {
                icon: <IconCloud className="w-6 h-6 text-gold" />,
                title: "E-File Ready",
                desc: "IRS-authorized e-file built in. Submit federal and state returns directly with real-time status tracking.",
                delay: 100,
              },
              {
                icon: <IconHeadset className="w-6 h-6 text-gold" />,
                title: "Dedicated Support",
                desc: "Real people who answer the phone. Year-round support with extended hours during tax season.",
                delay: 200,
              },
              {
                icon: <IconScale className="w-6 h-6 text-gold" />,
                title: "Scalable",
                desc: "From a single-preparer office to a multi-location firm. Add users, offices, and capacity as you grow.",
                delay: 300,
              },
              {
                icon: <IconTag className="w-6 h-6 text-gold" />,
                title: "Competitive Pricing",
                desc: "Starting at $599/year with no hidden fees. Know exactly what you're paying before the season starts.",
                delay: 400,
              },
              {
                icon: <IconBank className="w-6 h-6 text-gold" />,
                title: "Bank Products",
                desc: "Integrated refund transfers and advance products that your clients need and that generate revenue for you.",
                delay: 500,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay} direction="up">
                <div className="card-hover bg-white rounded-2xl p-7 border border-gray-100 h-full">
                  <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  8. TESTIMONIALS                                                */}
      {/* ================================================================ */}
      <section className="hero-gradient py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-50" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-xs uppercase tracking-[0.2em]">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                What our partners say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0} direction="left">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                <IconQuote className="w-10 h-10 text-gold mb-4" />
                <blockquote className="text-white/80 italic leading-relaxed mb-6 flex-1">
                  &ldquo;Tax Feeder Software has been an essential part of growing my service bureau.
                  They&apos;ve provided great coaching and support plus I&apos;ve been able to take
                  advantage of different programs they offer to make money and help my business like
                  Tradeline Services and their small business lending on top of the tax software
                  offerings. Relationships and experience. Tax Feeder Software is my partner for my
                  reseller business because I&apos;ve built strong relationships with their team and
                  I&apos;ve benefited from their years of tax industry experience that have helped me
                  be a better operator and let me focus on the things I do best. I would recommend
                  them to anyone.&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="text-white font-bold text-lg">Joanesa</p>
                  <p className="text-white/50 text-sm">Mcdonough, GA</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wide">
                    Service Bureau Reseller
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150} direction="right">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 h-full flex flex-col">
                <IconQuote className="w-10 h-10 text-gold mb-4" />
                <blockquote className="text-white/80 italic leading-relaxed mb-6 flex-1">
                  &ldquo;Tax Feeder Software is easy to use and to train my preparers on. Plus,
                  I&apos;m always able to get in touch with someone knowledgeable anytime I have
                  questions or need help. I&apos;ve grown my business from 50 returns to more than
                  1,000 returns with the help of Tax Feeder Software. They provide great advice,
                  tools and customer service that have been essential to the growth of my business.
                  In addition to great software and service, I have a relationship with Tax Feeder
                  Software and trust them as a partner in my success. They&apos;re transparent and
                  I receive my add-on fees and incentives when promised.&rdquo;
                </blockquote>
                <div className="mt-auto">
                  <p className="text-white font-bold text-lg">Andrey</p>
                  <p className="text-white/50 text-sm">El Paso, TX</p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wide">
                    Tax Office Owner
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  9. PRICING SECTION                                             */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-xs uppercase tracking-[0.2em]">
                Pricing
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy">
                Transparent Pricing
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="up">
            <div className="max-w-lg mx-auto">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                {/* Gold top border accent */}
                <div className="h-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

                <div className="p-8 md:p-10 text-center">
                  <p className="text-slate text-sm uppercase tracking-wider font-medium mb-2">
                    Starting at
                  </p>
                  <div className="flex items-baseline justify-center gap-1 mb-1">
                    <span className="text-navy text-lg font-semibold">$</span>
                    <span className="text-5xl md:text-6xl font-bold text-navy">
                      <AnimatedCounter end={599} duration={1800} />
                    </span>
                    <span className="text-slate text-lg font-medium">/year</span>
                  </div>

                  <div className="w-12 h-px bg-gold/30 mx-auto my-6" />

                  <ul className="space-y-3.5 text-left max-w-xs mx-auto mb-8">
                    {[
                      "All federal & state forms",
                      "Bank product integrations",
                      "Data conversions included",
                      "Office management tools",
                      "Dedicated support",
                      "Desktop, Online & Hosted",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <IconCheck className="w-5 h-5 text-green-accent shrink-0" />
                        <span className="text-navy text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-block w-full bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-lg text-center transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30"
                  >
                    Get Started
                  </Link>

                  <p className="text-slate text-sm mt-4">
                    Volume discounts available.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  10. RESELLER PREVIEW                                           */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <p className="text-gold font-semibold mb-3 text-xs uppercase tracking-[0.2em]">
                  Reseller Program
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                  Build your own tax software brand
                </h2>
                <p className="text-slate leading-relaxed mb-8 text-lg">
                  The Tax Feeder Reseller Program lets you distribute tax software under your
                  own brand. Set your own pricing, earn on every return filed through your
                  network, and build a business that generates revenue year-round.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Co-branded software with your branding",
                    "Multiple revenue streams — software, fees & incentives",
                    "Coaching, support & transparent accounting",
                    "Ancillary programs: Tradeline Services, Small Business Lending & more",
                    "Clear and transparent payout data",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <IconCheck className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-navy font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/reseller"
                  className="inline-block bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30"
                >
                  Learn About the Reseller Program
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-navy rounded-2xl p-8 md:p-10 text-white shadow-xl">
                <h3 className="text-xl font-bold mb-6">Reseller revenue streams</h3>
                <div className="space-y-4">
                  {[
                    {
                      stream: "Software Sales Margins",
                      desc: "Aggressive pricing lets you earn on every software sale",
                    },
                    {
                      stream: "Flexible Fee Buckets",
                      desc: "Service Bureau, Transmitter, E-File & Tech Fees — $25-$75+ per return",
                    },
                    {
                      stream: "Volume Incentive Programs",
                      desc: "Earn more as your network grows with volume-based programs",
                    },
                    {
                      stream: "Ancillary Programs",
                      desc: "AuditAllies, iPROTECT, Tradeline Services & Small Business Lending",
                    },
                  ].map((item) => (
                    <div key={item.stream} className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-white/10 transition-colors">
                      <h4 className="font-semibold text-gold mb-1">{item.stream}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  11. FOUNDER SECTION                                            */}
      {/* ================================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal direction="up">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold font-semibold mb-3 text-xs uppercase tracking-[0.2em]">
                  Our Story
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight">
                  Built by someone who&apos;s been in your shoes
                </h2>
              </div>

              <div className="text-slate leading-relaxed space-y-4 text-lg mb-8">
                <p>
                  Tax Feeder Software was founded in 2019 by Jason Hawkins, who brings more than
                  20 years of experience spanning banking, tax software, retail tax operations,
                  and large-scale service bureau management. Under his leadership, the company
                  has grown to support 100+ locations and tens of thousands of tax returns.
                </p>
                <p>
                  The mission is simple: <strong className="text-navy">Equip, Empower, and Elevate</strong> tax
                  professionals at every level so they can build thriving businesses with the
                  right software, support, and partnership behind them.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6 py-2">
                <p className="text-navy text-xl md:text-2xl font-semibold italic leading-relaxed">
                  &ldquo;When we innovate, you innovate. When we grow, you grow.&rdquo;
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  12. BOTTOM CTA                                                 */}
      {/* ================================================================ */}
      <section className="hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-40" aria-hidden="true" />
        {/* Decorative glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-20 md:py-28 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to see Tax Feeder in action?
            </h2>
            <p className="text-white/70 mb-10 text-lg max-w-xl mx-auto">
              Book a free demo and we&apos;ll show you exactly how Tax Feeder fits your business
              &mdash; or give us a call to talk through your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-lg text-center transition-all duration-200 shadow-lg shadow-gold/20 hover:shadow-gold/30"
              >
                Get Started
              </Link>
              <a
                href="tel:+15022378401"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg text-center transition-all duration-200"
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
