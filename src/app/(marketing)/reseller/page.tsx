import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Become a Reseller | TaxFeeder Software",
  description:
    "Start your own tax software brand with TaxFeeder. White-label software, multiple revenue streams, dedicated support. Apply to become a reseller.",
};

/* ------------------------------------------------------------------ */
/*  SVG helpers                                                        */
/* ------------------------------------------------------------------ */

function GoldCheck() {
  return (
    <svg
      className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`w-10 h-10 ${className}`}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const qualifiers = [
  "You\u2019re a tax professional paying for software and want to flip the script",
  "You want to build a business beyond just preparing returns",
  "You have a network of tax preparers who trust you",
  "You\u2019re an entrepreneur looking for recurring-revenue",
  "You want to offer software under your own brand",
];

const providerCards: { icon: React.ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25A2.25 2.25 0 015.25 3h13.5A2.25 2.25 0 0121 5.25z" />
      </svg>
    ),
    title: "Multiple Software Platform Options",
    desc: "Desktop, Online, and Hosted solutions so you can offer the right platform for every preparer in your network.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Co-Branding Solutions",
    desc: "Your brand on the software. Professional co-branding builds your identity and keeps your name in front of every preparer.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Customer Support for Reseller Subsites",
    desc: "Your subsites get dedicated support from our experienced team. We make you look great to the preparers you serve.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Coaching",
    desc: "Benefit from 20+ years of tax industry experience. We help you become a smarter operator and grow your bureau with confidence.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Transparent Accounting Data",
    desc: "Clear payout data so you always know what you\u2019ve earned. No guesswork, no surprises \u2014 just straightforward numbers.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Multiple Revenue Sources",
    desc: "Software sales margins, fee buckets, volume incentive programs, and ancillary revenue from Tradeline Services, lending, and more.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: "Unique Offerings",
    desc: "Tradeline Services, Small Business Lending, and other ancillary programs that set you apart from competing bureaus.",
  },
];

const revenueCards = [
  {
    title: "Software Sales Margins",
    desc: "Aggressive pricing lets you earn on every sale. You set the price, you keep the spread.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Flexible Fee Buckets",
    desc: "Service Bureau, Transmitter, E-File, Tech Fee \u2014 customizable add-ons on every subsite return.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: "Volume Incentive Programs",
    desc: "Earn more as your network grows. The more returns your subsites process, the more you earn.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Ancillary Programs",
    desc: "AuditAllies, iPROTECT, Tradeline Services, Small Business Lending \u2014 year-round revenue beyond software.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
];

const bankPartners = [
  "Refund Advantage",
  "Refundo",
  "Republic",
  "SBTPG",
];

const conversionPlatforms = [
  "Drake",
  "Drake Business",
  "ProSeries",
  "ProSeries Business",
  "TaxSlayer",
  "TaxSlayer Business",
  "TaxWise",
  "TaxWise Business",
];

const testimonials = [
  {
    quote:
      "Tax Feeder Software has been an essential part of growing my service bureau. They\u2019ve provided great coaching and support plus I\u2019ve been able to take advantage of different programs they offer to make money and help my business like Tradeline Services and their small business lending on top of the tax software offerings. Relationships and experience. Tax Feeder Software is my partner for my reseller business because I\u2019ve built strong relationships with their team and I\u2019ve benefited from their years of tax industry experience that have helped me be a better operator and let me focus on the things I do best. I would recommend them to anyone.",
    name: "Joanesa",
    location: "Mcdonough, GA",
    type: "Service Bureau Reseller",
  },
  {
    quote:
      "Tax Feeder Software is easy to use and to train my preparers on. Plus, I\u2019m always able to get in touch with someone knowledgeable anytime I have questions or need help. I\u2019ve grown my business from 50 returns to more than 1,000 returns with the help of Tax Feeder Software. They provide great advice, tools and customer service that have been essential to the growth of my business. In addition to great software and service, I have a relationship with Tax Feeder Software and trust them as a partner in my success. They\u2019re transparent and I receive my add-on fees and incentives when promised.",
    name: "Andrey",
    location: "El Paso, TX",
    type: "Tax Office Owner",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ResellerPage() {
  return (
    <>
      {/* ============================================================ */}
      {/*  1. HERO                                                      */}
      {/* ============================================================ */}
      <section className="hero-gradient wave-divider-white relative overflow-hidden">
        {/* Decorative gold glow */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.6) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-32 md:pt-32 md:pb-40">
          <div className="max-w-3xl">
            <ScrollReveal direction="fade">
              <p className="text-gold font-semibold mb-4 text-sm uppercase tracking-[0.2em]">
                Reseller Program
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                Build{" "}
                <span className="text-gradient-gold">your own</span>{" "}
                tax software brand
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                Tax Feeder Software provides resellers a suite of software tools
                and services, backed by an experienced team, to facilitate the
                growth of their service bureau.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md text-center transition-colors shadow-lg shadow-gold/20"
                >
                  Apply to Become a Reseller
                </Link>
                <a
                  href="tel:+15022378401"
                  className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md text-center transition-colors"
                >
                  Call (502) 237-8401
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2. WHAT IS A RESELLER                                        */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: explanation */}
            <ScrollReveal direction="left">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                What is a TaxFeeder Reseller?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                We build the software. You build the business.
              </h2>
              <p className="text-slate leading-relaxed mb-4">
                A TaxFeeder Reseller (Service Bureau) distributes tax
                preparation software to other tax preparers with co-branding
                solutions. We build the software, maintain the infrastructure,
                and provide the support &mdash; you focus on growing your
                network and earning revenue.
              </p>
              <p className="text-slate leading-relaxed mb-4">
                Think of it as your own tax software brand, powered by the full
                resources of Tax Feeder. Every platform improvement we make,
                every compliance update we ship, every feature we add &mdash;
                it all flows through to your subsites automatically.
              </p>
              <p className="text-slate leading-relaxed">
                You control the pricing. You own the client relationships. You
                build equity in your brand. We handle the heavy lifting behind
                the scenes so you can concentrate on what you do best.
              </p>
            </ScrollReveal>

            {/* Right: qualification card */}
            <ScrollReveal direction="right">
              <div className="bg-off-white rounded-2xl p-8 md:p-10 border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-6">
                  This is for you if...
                </h3>
                <ul className="space-y-5">
                  {qualifiers.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <GoldCheck />
                      <span className="text-slate leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3. KEY AREAS WE HELP                                         */}
      {/* ============================================================ */}
      <section className="py-20 md:py-28 bg-off-white bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                Your competitive advantage
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                What Tax Feeder provides
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Everything you need to launch, run, and scale a successful
                service bureau &mdash; all under one roof.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {providerCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 80}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-hover card-hover-gold h-full">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4. HOW RESELLERS MAKE MONEY                                  */}
      {/* ============================================================ */}
      <section className="hero-gradient-alt wave-divider text-white py-20 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-6">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                Revenue Model
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Multiple revenue streams
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg">
                Each reseller is unique. The range can be broad, but{" "}
                <span className="text-gold font-semibold">
                  $25&ndash;$75+ per return is common
                </span>{" "}
                across fee buckets &mdash; before software margins, volume
                incentives, and ancillary program revenue.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats row */}
          <ScrollReveal delay={100}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 my-12">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-1">
                  <AnimatedCounter end={4} suffix="+" />
                </div>
                <p className="text-white/50 text-sm">Revenue Streams</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-1">
                  $<AnimatedCounter end={75} suffix="+" />
                </div>
                <p className="text-white/50 text-sm">Per Return Potential</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gold mb-1">
                  <AnimatedCounter end={0} suffix="%" />
                </div>
                <p className="text-white/50 text-sm">Of Your Prep Fees Taken</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={150 + i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full backdrop-blur-sm">
                  <div className="mb-4">{card.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Important callout */}
          <ScrollReveal delay={600}>
            <div className="mt-12 bg-gold/10 border border-gold/30 rounded-xl p-6 md:p-8 text-center max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-3">
                <svg
                  className="w-6 h-6 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <p className="text-gold font-semibold text-lg">
                  Your earnings, your way
                </p>
              </div>
              <p className="text-white/70">
                Tax Feeder{" "}
                <span className="text-gold font-bold">
                  never takes any percentage
                </span>{" "}
                of your subsites&apos; tax prep fees. Your prep revenue is yours
                &mdash; period.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5. BANK PRODUCT PARTNERS                                     */}
      {/* ============================================================ */}
      <section className="py-20 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                Bank Product Partners
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Integrated bank product partners for your subsites
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Offer refund transfers, advances, and bank products your
                subsites&apos; clients need &mdash; with seamless in-software
                integration.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-wrap justify-center gap-6">
              {bankPartners.map((partner) => (
                <div
                  key={partner}
                  className="bg-white border border-gray-200 rounded-xl px-10 py-6 flex items-center justify-center min-w-[200px] card-hover"
                >
                  <span className="text-navy font-bold text-lg tracking-wide">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  6. DATA CONVERSIONS                                          */}
      {/* ============================================================ */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                Easy Switching
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Help your subsites switch easily
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Bring preparers from any of these platforms. Our data conversion
                tools make the transition smooth and painless.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="flex flex-wrap justify-center gap-4">
              {conversionPlatforms.map((platform) => (
                <div
                  key={platform}
                  className="bg-off-white border border-gray-200 rounded-lg px-6 py-3 text-navy font-semibold text-sm"
                >
                  {platform}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  7. TESTIMONIALS                                              */}
      {/* ============================================================ */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                Testimonials
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What our partners say
              </h2>
              <p className="text-white/50 max-w-xl mx-auto">
                Tax professionals across the country are growing their
                businesses with Tax Feeder Software.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 150} direction={i === 0 ? "left" : "right"}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm h-full flex flex-col">
                  <QuoteIcon className="text-gold/40 mb-5" />
                  <p className="text-white/80 leading-relaxed mb-8 italic flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-white/10 pt-5">
                    <p className="text-white font-bold text-lg">{t.name}</p>
                    <p className="text-white/50 text-sm">{t.location}</p>
                    <span className="inline-block mt-2 text-gold text-xs font-semibold uppercase tracking-wider bg-gold/10 px-3 py-1 rounded-full">
                      {t.type}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  8. FOUNDER CREDIBILITY                                       */}
      {/* ============================================================ */}
      <section className="py-20 md:py-24 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="border-l-4 border-gold pl-8 md:pl-10">
                <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                  Our Leadership
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6 leading-tight">
                  Led by{" "}
                  <span className="text-gradient-gold">20+ years</span> of tax
                  industry experience
                </h2>
                <p className="text-slate leading-relaxed mb-4">
                  Jason Hawkins founded Tax Feeder Software in 2019, bringing
                  decades of experience spanning banking, software, retail tax
                  offices, and service bureau operations. Today, Tax Feeder
                  supports{" "}
                  <span className="font-semibold text-navy">
                    100+ locations
                  </span>{" "}
                  and processes{" "}
                  <span className="font-semibold text-navy">
                    tens of thousands of returns
                  </span>{" "}
                  annually.
                </p>
                <p className="text-slate leading-relaxed mb-8">
                  We don&apos;t just understand the tax business &mdash;
                  we&apos;ve lived it. That real-world experience shapes every
                  decision we make and every tool we build for our resellers.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors group"
                >
                  Learn more about our story
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  9. BOTTOM CTA                                                */}
      {/* ============================================================ */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to build{" "}
              <span className="text-gradient-gold">your brand</span>?
            </h2>
            <p className="text-white/70 mb-10 text-lg max-w-xl mx-auto">
              Apply to the Tax Feeder Reseller Program or call us to learn more
              about the opportunity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-10 py-4 rounded-md transition-colors shadow-lg shadow-gold/20"
              >
                Apply to Become a Reseller
              </Link>
              <a
                href="tel:+15022378401"
                className="border border-white/30 hover:border-white text-white font-semibold px-10 py-4 rounded-md transition-colors"
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
