import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Reseller | TaxFeeder Software",
  description: "Start your own tax software brand with TaxFeeder. White-label software, multiple revenue streams, dedicated support. Apply to become a reseller.",
};

export default function ResellerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">Reseller Program</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Build your own tax software brand
            </h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              Tax Feeder Software provides resellers a suite of software tools and services, backed by an
              experienced team, to facilitate the growth of their service bureau. We invest in the
              infrastructure so you can focus on growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md text-center transition-colors">
                Apply to Become a Reseller
              </Link>
              <a href="tel:+15022378401" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md text-center transition-colors">
                Call to Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Reseller */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">What is a TaxFeeder Reseller?</h2>
              <p className="text-slate leading-relaxed mb-4">
                A TaxFeeder Reseller (Service Bureau) distributes tax preparation software to
                other tax preparers with co-branding solutions. We build the software, maintain the
                infrastructure, and provide the support &mdash; you build the business.
              </p>
              <p className="text-slate leading-relaxed mb-4">
                We help service bureaus in key areas: multiple software platform options, co-branding
                solutions, customer support for reseller subsites, coaching, and clear transparent
                accounting data to help with payouts.
              </p>
              <p className="text-slate leading-relaxed">
                Founded by Jason Hawkins with over 20 years of tax industry experience &mdash; from
                banking and software to running retail tax offices and scaling a successful service
                bureau operation &mdash; Tax Feeder Software supports more than 100 locations and
                processes tens of thousands of returns annually.
              </p>
            </div>
            <div className="bg-off-white rounded-2xl p-8">
              <h3 className="text-xl font-bold text-navy mb-6">This is for you if...</h3>
              <ul className="space-y-4">
                {[
                  "You're a tax professional already paying for software and want to flip the script",
                  "You want to build a business beyond just preparing returns",
                  "You have a network of tax preparers who trust your recommendations",
                  "You're an entrepreneur looking for a proven, recurring-revenue business model",
                  "You want to offer software under your own brand instead of someone else's",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Resellers Make Money */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How resellers make money</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Multiple revenue streams that generate income during tax season and beyond.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Software Sales Margins",
                amount: "You control the pricing",
                desc: "Aggressive software pricing allows you to earn revenue on your software sales margins. You set the price, you keep the spread.",
              },
              {
                title: "Flexible Fee Buckets",
                amount: "$25–$75+ per return",
                desc: "Multiple fee buckets available: Service Bureau, Transmitter, E-File, and Tech Fee — all customizable add-ons on subsite returns.",
              },
              {
                title: "Volume Incentive Programs",
                amount: "Scales with growth",
                desc: "Volume incentive programs reward you as your network grows. The more returns your subsites process, the more you earn.",
              },
              {
                title: "Ancillary Programs",
                amount: "Year-round income",
                desc: "Additional revenue through AuditAllies (Audit Assistance), iPROTECT (ID Theft Protection), Tradeline Services (Credit Boosting), and Small Business Lending.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gold font-semibold text-sm mb-3">{item.amount}</p>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gold/10 border border-gold/30 rounded-xl p-6 text-center max-w-3xl mx-auto">
            <p className="text-gold font-semibold text-lg mb-2">Your earnings, your way</p>
            <p className="text-white/70 text-sm">
              Each reseller is unique based on how they mix fees on subsite tax returns. The range can be
              broad, but <span className="text-gold font-bold">$25–$75+ per return is common</span> across fee
              buckets — before software margins, volume incentives, and ancillary program revenue.
              Tax Feeder never takes any percentage of your subsites&apos; tax prep fees.
            </p>
          </div>
        </div>
      </section>

      {/* What TFS Provides */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">What you get as a reseller</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Multiple Software Platforms", desc: "Desktop, Online, and Hosted solutions — choose the platform that fits your network best." },
              { title: "Co-Branding Solutions", desc: "Your brand on the software your subsites use. Professional co-branding that builds your business identity." },
              { title: "Customer Support for Subsites", desc: "Your subsites get dedicated customer support from our experienced team — making you look great." },
              { title: "Coaching & Guidance", desc: "Benefit from 20+ years of tax industry experience. We help you become a better operator and grow smarter." },
              { title: "Transparent Accounting", desc: "Clear and transparent accounting data to help you manage payouts and track every revenue stream." },
              { title: "Bank Product Integrations", desc: "Access to Refund Advantage, Refundo, Republic, and SBTPG — multiple bank partner options for your subsites." },
              { title: "Revenue-Enhancing Programs", desc: "AuditAllies, iPROTECT, Tradeline Services, and Small Business Lending — additional income streams beyond software." },
              { title: "Data Conversions", desc: "Bring subsites from Drake, ProSeries, TaxSlayer, TaxWise, and their business variants. Easy switching." },
              { title: "Scalable Growth Model", desc: "Our plug-and-play infrastructure means when we innovate, you innovate. When we grow, you grow." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-xl p-6 hover:border-gold/50 transition-colors">
                <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Placeholder */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">What our partners say</h2>
          <p className="text-slate mb-12 max-w-xl mx-auto">
            Tax professionals across the country are growing their businesses with Tax Feeder Software.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Tax Feeder Software has been an essential part of growing my service bureau. They've provided great coaching and support plus I've been able to take advantage of different programs they offer to make money and help my business like Tradeline Services and their small business lending on top of the tax software offerings. Relationships and experience. Tax Feeder Software is my partner for my reseller business because I've built strong relationships with their team and I've benefited from their years of tax industry experience that have helped me be a better operator and let me focus on the things I do best. I would recommend them to anyone.",
                name: "Joanesa",
                location: "Mcdonough, GA",
                type: "Service Bureau Reseller",
              },
              {
                quote: "Tax Feeder Software is easy to use and to train my preparers on. Plus, I'm always able to get in touch with someone knowledgeable anytime I have questions or need help. I've grown my business from 50 returns to more than 1,000 returns with the help of Tax Feeder Software. They provide great advice, tools and customer service that have been essential to the growth of my business. In addition to great software and service, I have a relationship with Tax Feeder Software and trust them as a partner in my success. They're transparent and I receive my add-on fees and incentives when promised.",
                name: "Andrey",
                location: "El Paso, TX",
                type: "Tax Office Owner",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-8 border border-gray-100 text-left">
                <svg className="w-8 h-8 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-navy/80 text-sm leading-relaxed mb-4 italic">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-navy font-semibold text-sm">{item.name}</p>
                <p className="text-slate text-xs">{item.location}</p>
                <p className="text-gold text-xs font-medium mt-1">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to build your brand?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Apply to the TaxFeeder Reseller Program or schedule a call to learn more about the opportunity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors">
              Apply to Become a Reseller
            </Link>
            <a href="tel:+15022378401" className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-md transition-colors">
              Schedule a Reseller Call
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
