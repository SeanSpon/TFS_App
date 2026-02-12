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
              Stop paying for someone else&apos;s software. With the TaxFeeder Reseller Program, you
              distribute tax software under your own name, set your own prices, and keep the revenue.
              We build and maintain the software. You build the business.
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
                A TaxFeeder Reseller (also called a Service Bureau) is someone who distributes
                tax preparation software to other tax preparers under their own brand. Think of
                it like this: we build the software, you put your name on it and sell it.
              </p>
              <p className="text-slate leading-relaxed mb-4">
                Your clients see your brand, your logo, and your company name — not ours. You set
                the pricing. You control the relationships. And you earn revenue from every preparer
                in your network, on every return they file, year after year.
              </p>
              <p className="text-slate leading-relaxed">
                You don&apos;t need to be a developer, and you don&apos;t need a massive budget.
                You need drive, a network (or the ability to build one), and the TaxFeeder
                platform behind you.
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
                title: "Software Sales",
                amount: "You set the price",
                desc: "Sell software licenses to tax preparers at your own price. The spread between your cost and retail price is pure margin.",
              },
              {
                title: "Service Bureau Fees",
                amount: "$50–$99 / return",
                desc: "Every time a preparer in your network processes a bank product, a fee is paid directly to you — in real time.",
              },
              {
                title: "Annual Renewals",
                amount: "Recurring revenue",
                desc: "Your preparers renew every year. This isn't a one-time sale — it's a business that compounds.",
              },
              {
                title: "Add-On Revenue",
                amount: "Year-round income",
                desc: "Training packages, consulting, technology fees, and audit protection products generate off-season revenue.",
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
            <p className="text-gold font-semibold text-lg mb-2">Example scenario</p>
            <p className="text-white/70 text-sm">
              10 preparers in your network, each processing 100 returns with bank products at $75/return in
              service bureau fees = <span className="text-gold font-bold">$75,000 in fee revenue alone</span> — before software sales or renewals.
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
              { title: "White-Label Software", desc: "Your logo, your brand name, your colors. Clients see your company — not ours." },
              { title: "Reseller Dashboard", desc: "Track your preparers, monitor return volume, manage licenses, and view revenue — all in one place." },
              { title: "Onboarding & Setup", desc: "We handle the technical buildout. Your branded software is ready in days, not weeks." },
              { title: "Training & Resources", desc: "Training materials for you and your preparers. Get everyone up to speed fast." },
              { title: "Dedicated Support Line", desc: "A support phone line for your clients, staffed by our team. They call your branded number, we answer." },
              { title: "Pricing Control", desc: "You decide what to charge. Set your own software fees, service fees, and package prices." },
              { title: "Bank Product Access", desc: "Your preparers get full access to refund transfers, advances, and financial products." },
              { title: "Marketing Support", desc: "Templates, social media assets, and guidance to help you recruit and retain preparers." },
              { title: "No Per-Seat Limits", desc: "Add as many preparers to your network as you want. Your growth isn't capped by licensing." },
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
          <h2 className="text-3xl font-bold text-navy mb-4">Hear from our resellers</h2>
          <p className="text-slate mb-12 max-w-xl mx-auto">
            Tax professionals across the country are building their own software brands with TaxFeeder.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "I went from paying for software to selling it. The reseller program changed my entire business model.", name: "Reseller Testimonial", location: "Coming Soon" },
              { quote: "The support team makes it easy. My preparers call the branded line and get real help — that makes me look good.", name: "Reseller Testimonial", location: "Coming Soon" },
              { quote: "Between software sales and bank product fees, I made back my investment in the first month.", name: "Reseller Testimonial", location: "Coming Soon" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-100 text-left">
                <svg className="w-8 h-8 text-gold/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-navy/80 text-sm leading-relaxed mb-4 italic">&ldquo;{item.quote}&rdquo;</p>
                <p className="text-navy font-semibold text-sm">{item.name}</p>
                <p className="text-slate text-xs">{item.location}</p>
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
