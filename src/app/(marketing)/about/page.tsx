import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us | Tax Feeder Software",
  description:
    "Founded by Jason Hawkins with 20+ years of tax industry experience. Tax Feeder Software supports 100+ locations and processes tens of thousands of returns annually.",
};

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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient wave-divider-white relative overflow-hidden text-white py-24 md:py-32 pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-gold font-semibold mb-4 text-sm uppercase tracking-[0.2em]">
                Our Story
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Built by someone who&apos;s been{" "}
                <span className="text-gradient-gold">in your shoes</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                Over 20 years of real-world tax industry experience, distilled
                into a platform built to help you grow.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-20">
            <div className="md:col-span-3">
              <ScrollReveal direction="left">
                <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                  About Tax Feeder Software
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8 leading-tight">
                  From banking to software to building a national operation
                </h2>

                <div className="text-slate leading-relaxed space-y-4 text-lg">
                  <p>
                    Tax Feeder Software was founded in 2019 by Jason Hawkins, a
                    seasoned tax industry professional with over 20 years of
                    experience spanning banking, tax software, retail tax
                    operations, and large-scale service bureau management.
                    Jason&apos;s journey through every layer of the industry
                    gives Tax Feeder Software a unique advantage &mdash; we
                    don&apos;t just understand the tax business, we&apos;ve lived
                    it.
                  </p>
                  <p>
                    Jason began his career on the banking side, gaining valuable
                    insight into financial systems and funding structures. He
                    later transitioned into tax software, operated a successful
                    retail tax office, and ultimately built one of the
                    industry&apos;s fastest-growing Service Bureau operations.
                    Today, Tax Feeder Software supports more than 100 locations
                    and processes tens of thousands of tax returns annually.
                  </p>
                </div>

                <div className="border-l-4 border-gold pl-6 py-3 mt-8">
                  <p className="text-navy text-xl md:text-2xl font-semibold italic leading-relaxed">
                    &ldquo;We don&apos;t just understand the tax business
                    &mdash; we&apos;ve lived it.&rdquo;
                  </p>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-2">
              <ScrollReveal direction="right">
                <div className="bg-off-white rounded-2xl p-8 border border-gray-100 sticky top-24">
                  <h3 className="text-lg font-bold text-navy mb-6">
                    Founder Background
                  </h3>
                  <ul className="space-y-4 text-slate text-sm">
                    {[
                      "20+ years in the tax industry",
                      "Banking & financial systems experience",
                      "Tax software development background",
                      "Operated retail tax offices",
                      "Built & scaled a national service bureau",
                      "Supports 100+ locations today",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <GoldCheck />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Model */}
      <section className="py-20 md:py-28 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-14">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                Our Model
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Built on a Plug-and-Play Growth Model
              </h2>
              <p className="text-slate text-lg leading-relaxed">
                Our business model is simple but powerful: we build the
                infrastructure so you can focus on growth. Tax Feeder Software
                invests heavily in systems, tools, compliance resources,
                operational frameworks, and strategic partnerships &mdash; and
                every one of our partners benefits from those investments.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-10 border border-gray-100 gold-glow text-center">
              <p className="text-navy text-2xl md:text-3xl font-bold italic leading-relaxed">
                &ldquo;When we innovate, you innovate.
                <br />
                When we grow, you grow.&rdquo;
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
                title: "We invest in infrastructure",
                desc: "Systems, tools, compliance, partnerships — we build it all so you don't have to.",
              },
              {
                title: "You plug in and grow",
                desc: "Instead of building everything yourself, tap into a proven, scalable ecosystem.",
              },
              {
                title: "Everyone benefits",
                desc: "Every improvement, every new feature, every partnership — it all flows through to you automatically.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-hover h-full">
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                  Our Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                  <span className="text-gradient-gold">Equip. Empower. Elevate.</span>
                </h2>
              </div>
              <p className="text-slate text-lg leading-relaxed mb-8 text-center">
                Our core focus is to equip, empower, and pour into the success
                of every partner tax office and Service Bureau we work with. We
                are committed to helping independent operators compete at a
                higher level by providing:
              </p>
              <ul className="space-y-4 max-w-xl mx-auto mb-10">
                {[
                  "Industry-leading software solutions",
                  "Strategic operational support",
                  "Revenue-enhancing service offerings",
                  "Ongoing innovation and infrastructure upgrades",
                  "A network of driven, growth-minded professionals",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <GoldCheck />
                    <span className="text-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate text-lg leading-relaxed text-center">
                We continuously evolve our services with one goal in mind:
                increasing revenue and strengthening the long-term value of your
                tax business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-dots" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
              {[
                { end: 7, suffix: "+", label: "Years in Business" },
                { end: 40000, suffix: "+", label: "Returns Processed" },
                { end: 100, suffix: "+", label: "Locations Supported" },
                { end: 50, suffix: "", label: "States Covered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
                    <AnimatedCounter
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={2200}
                    />
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

      {/* Partnership */}
      <section className="py-20 md:py-28 bg-off-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dots" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-semibold mb-3 text-sm uppercase tracking-wider">
                Partnership
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-8">
                A True Growth Partnership
              </h2>
              <p className="text-slate text-lg leading-relaxed mb-8">
                Tax Feeder Software embraces partnerships with industry leaders,
                operators, and hustlers who are always striving for improvement.
                We believe success is built through collaboration,
                accountability, and execution.
              </p>
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 gold-glow">
                <p className="text-navy text-xl md:text-2xl font-bold leading-relaxed">
                  There is no company more committed to the success of your tax
                  business or Service Bureau operation than Tax Feeder Software.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              If you&apos;re ready to scale smarter &mdash; we&apos;re ready to
              build with you.
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Increase revenue and plug into a proven system built by someone
              who understands every side of the industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-lg shadow-gold/20"
              >
                Get Started
              </Link>
              <a
                href="tel:+15022378401"
                className="border border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-lg transition-colors"
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
