import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Support | TaxFeeder Software",
  description:
    "Get help with TaxFeeder Software. Phone support, training resources, onboarding, and FAQ. Real people, real answers.",
};

const faqs = [
  {
    q: "How do I get started with TaxFeeder?",
    a: "Fill out our contact form and our team will call you directly. We'll walk you through the software, set up your account, and handle any data conversions so you're ready to file.",
  },
  {
    q: "What forms does TaxFeeder support?",
    a: "For individuals: 1040, 1040-NR, 1040-SS plus all individual state returns. For business: 1120, 1120-S, 1120-H, 1065, 1041, 990 plus all business state returns.",
  },
  {
    q: "Can I import data from my current software?",
    a: "Yes. Tax Feeder provides data conversions for Drake, Drake Business, ProSeries, ProSeries Business, TaxSlayer, TaxSlayer Business, TaxWise, and TaxWise Business.",
  },
  {
    q: "What are the support hours?",
    a: "Standard support hours are Monday\u2013Friday, 10am\u20136pm EST. During tax season (January\u2013April), we offer extended hours including weekends.",
  },
  {
    q: "Is TaxFeeder cloud-based or desktop?",
    a: "TaxFeeder offers Desktop, Online, and Hosted solutions \u2014 choose the platform that works best for your operation, or use multiple options.",
  },
  {
    q: "What bank products are available?",
    a: "TaxFeeder integrates with Refund Advantage, Refundo, Republic, and SBTPG for refund transfers, refund advance products, and other financial products.",
  },
  {
    q: "How does the reseller program work?",
    a: "As a reseller (service bureau), you get co-branded software, multiple revenue streams including software margins, flexible fee buckets, volume incentives, and ancillary programs like Tradeline Services and Small Business Lending. Visit our Reseller page for full details.",
  },
  {
    q: "What does TaxFeeder cost?",
    a: "Packages start at $599 with volume discounts available. Contact us for a customized quote based on your business structure and size.",
  },
  {
    q: "Is my client data secure?",
    a: "Yes. TaxFeeder uses encryption for data in transit and at rest, multi-factor authentication, automatic session timeouts, and complies with IRS Publication 4557 security requirements.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient wave-divider-white text-white py-20 md:py-28 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">
                Support
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                We&apos;re here{" "}
                <span className="text-gradient-gold">when you need us</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Real support from real people. Whether you&apos;re onboarding for the first
                time or troubleshooting during peak season, our team is ready to help.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Phone Support",
                desc: "Talk to a real person. No phone trees, no chatbots. Call us and get help.",
                detail: "(502) 237-8401",
                link: "tel:+15022378401",
                linkText: "Call Now",
                icon: (
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                ),
                delay: 0,
              },
              {
                title: "Email Support",
                desc: "Send us a detailed message and we'll get back to you within one business day.",
                detail: "support@taxfeedersoftware.com",
                link: "mailto:support@taxfeedersoftware.com",
                linkText: "Send Email",
                icon: (
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                ),
                delay: 150,
              },
              {
                title: "Support Hours",
                desc: "Monday\u2013Friday, 10am\u20136pm EST. Extended hours and weekends during tax season.",
                detail: "Jan\u2013Apr: Extended Hours",
                link: "/contact",
                linkText: "Contact Us",
                icon: (
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
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="bg-off-white rounded-xl p-8 text-center card-hover h-full">
                  <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate text-sm mb-3">{item.desc}</p>
                  <p className="text-navy font-semibold text-sm mb-4">{item.detail}</p>
                  <a
                    href={item.link}
                    className="text-gold hover:text-gold-dark font-medium text-sm transition-colors animated-underline"
                  >
                    {item.linkText} &rarr;
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-off-white bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                Resources to get you started
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                From first-time setup to advanced features, we have guides for every step.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Onboarding Walkthrough",
                desc: "Step-by-step guidance to set up your account, import data, and file your first return.",
                delay: 0,
              },
              {
                title: "Software Training",
                desc: "Video tutorials and documentation covering every feature of the TaxFeeder platform.",
                delay: 100,
              },
              {
                title: "E-File Guide",
                desc: "How to submit federal and state returns electronically, track acknowledgments, and resolve rejections.",
                delay: 200,
              },
              {
                title: "Bank Product Setup",
                desc: "Get your Refund Advantage, Refundo, Republic, and SBTPG integrations configured and start offering refund products.",
                delay: 300,
              },
              {
                title: "Office Management",
                desc: "Learn how to add preparers, set permissions, and use the dashboard to manage your office.",
                delay: 400,
              },
              {
                title: "Reseller Quick Start",
                desc: "For new resellers: how to set up your branded software, add your first preparers, and start earning.",
                delay: 500,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-hover h-full">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-gold"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">
              Frequently asked questions
            </h2>
            <p className="text-slate text-center mb-10">
              Quick answers to the most common questions about TaxFeeder Software.
            </p>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 60}>
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-semibold text-navy mb-2 flex items-start gap-3">
                    <span className="text-gold font-bold text-sm mt-1 flex-shrink-0">
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed pl-7">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="py-16 bg-off-white bg-dots">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  label: "Platforms",
                  value: "Desktop, Online & Hosted",
                },
                {
                  label: "Starting Price",
                  value: "$599 with volume discounts",
                },
                {
                  label: "Bank Partners",
                  value: "Refund Advantage, Refundo, Republic, SBTPG",
                },
                {
                  label: "Data Conversions",
                  value: "Drake, ProSeries, TaxSlayer, TaxWise + business variants",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-5 border border-gray-100"
                >
                  <p className="text-gold font-bold text-xs uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  <p className="text-navy font-medium text-sm">{item.value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still need help?</h2>
            <p className="text-white/70 mb-8 text-lg">
              Our team is standing by. Give us a call or send a message.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors"
              >
                Contact Our Team
              </Link>
              <a
                href="tel:+15022378401"
                className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors"
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
