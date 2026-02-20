import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support | TaxFeeder Software",
  description: "Get help with TaxFeeder Software. Phone support, training resources, onboarding, and FAQ.",
};

const faqs = [
  { q: "How do I get started with TaxFeeder?", a: "Fill out our contact form and our team will call you directly. We'll walk you through the software, set up your account, and handle any data conversions so you're ready to file." },
  { q: "What forms does TaxFeeder support?", a: "For individuals: 1040, 1040-NR, 1040-SS plus all individual state returns. For business: 1120, 1120-S, 1120-H, 1065, 1041, 990 plus all business state returns." },
  { q: "Can I import data from my current software?", a: "Yes. Tax Feeder provides data conversions for Drake, Drake Business, ProSeries, ProSeries Business, TaxSlayer, TaxSlayer Business, TaxWise, and TaxWise Business." },
  { q: "What are the support hours?", a: "Standard support hours are Monday–Friday, 10am–6pm EST. During tax season (January–April), we offer extended hours including weekends." },
  { q: "Is TaxFeeder cloud-based or desktop?", a: "TaxFeeder offers Desktop, Online, and Hosted solutions — choose the platform that works best for your operation, or use multiple options." },
  { q: "What bank products are available?", a: "TaxFeeder integrates with Refund Advantage, Refundo, Republic, and SBTPG for refund transfers, refund advance products, and other financial products." },
  { q: "How does the reseller program work?", a: "As a reseller (service bureau), you get co-branded software, multiple revenue streams including software margins, flexible fee buckets, volume incentives, and ancillary programs like Tradeline Services and Small Business Lending. Visit our Reseller page for full details." },
  { q: "What does TaxFeeder cost?", a: "Packages start at $599 with volume discounts available. Contact us for a customized quote based on your business structure and size." },
  { q: "Is my client data secure?", a: "Yes. TaxFeeder uses encryption for data in transit and at rest, multi-factor authentication, automatic session timeouts, and complies with IRS Publication 4557 security requirements." },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">Support</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We&apos;re here when you need us
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Real support from real people. Whether you&apos;re onboarding for the first time or
              troubleshooting during peak season, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Phone Support",
                desc: "Talk to a real person. No phone trees, no chatbots. Call us and get help.",
                detail: "(502) 237-8401",
                link: "tel:+15022378401",
                linkText: "Call Now",
              },
              {
                title: "Email Support",
                desc: "Send us a detailed message and we'll get back to you within one business day.",
                detail: "support@taxfeedersoftware.com",
                link: "mailto:support@taxfeedersoftware.com",
                linkText: "Send Email",
              },
              {
                title: "Support Hours",
                desc: "Monday–Friday, 10am–6pm EST. Extended hours and weekends during tax season.",
                detail: "Jan–Apr: Extended Hours",
                link: "/contact",
                linkText: "Contact Us",
              },
            ].map((item) => (
              <div key={item.title} className="bg-off-white rounded-xl p-8 text-center">
                <div className="w-14 h-14 bg-navy rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-5 h-5 bg-gold rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm mb-3">{item.desc}</p>
                <p className="text-navy font-semibold text-sm mb-4">{item.detail}</p>
                <a href={item.link} className="text-gold hover:text-gold-dark font-medium text-sm transition-colors">
                  {item.linkText} &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">Resources to get you started</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Onboarding Walkthrough", desc: "Step-by-step guidance to set up your account, import data, and file your first return." },
              { title: "Software Training", desc: "Video tutorials and documentation covering every feature of the TaxFeeder platform." },
              { title: "E-File Guide", desc: "How to submit federal and state returns electronically, track acknowledgments, and resolve rejections." },
              { title: "Bank Product Setup", desc: "Get your bank product integrations configured and start offering refund transfers and advances." },
              { title: "Office Management", desc: "Learn how to add preparers, set permissions, and use the dashboard to manage your office." },
              { title: "Reseller Quick Start", desc: "For new resellers: how to set up your branded software, add your first preparers, and start earning." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-navy mb-2">{faq.q}</h3>
                <p className="text-slate text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-white/70 mb-8">Our team is standing by. Give us a call or send a message.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors">
              Contact Our Team
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
