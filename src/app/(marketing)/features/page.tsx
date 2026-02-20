import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Features | TaxFeeder Software",
  description:
    "Full feature breakdown of TaxFeeder — tax preparation tools, e-file, office management, reporting, support, and security. Desktop, Online & Hosted solutions.",
};

const featureCategories = [
  {
    title: "Tax Preparation Tools",
    description:
      "Comprehensive return preparation for individuals and businesses across all 50 states.",
    features: [
      "Individual returns (1040, 1040-NR, 1040-SS)",
      "Business returns (1120, 1120-S, 1120-H, 1065, 1041)",
      "Nonprofit returns (990 series)",
      "All individual and business state returns included",
      "Smart data entry with auto-calculations",
      "Desktop, Online & Hosted platform options",
    ],
  },
  {
    title: "E-File & Compliance",
    description:
      "Federal and state electronic filing with real-time tracking and built-in error prevention.",
    features: [
      "Federal and state e-file in one step",
      "Real-time acknowledgment tracking",
      "Built-in error checking before submission",
      "Amended return support",
      "Extension filing (4868, 7004)",
      "Desktop, Online & Hosted e-file options",
    ],
  },
  {
    title: "Data Conversions",
    description:
      "Seamless migration from competing software. We handle the data so you can focus on filing.",
    features: [
      "Drake & Drake Business conversion",
      "ProSeries & ProSeries Business conversion",
      "TaxSlayer & TaxSlayer Business conversion",
      "TaxWise & TaxWise Business conversion",
      "Prior-year client data import",
      "Seamless onboarding from competitor software",
    ],
  },
  {
    title: "Office Management",
    description:
      "Multi-preparer management, client tracking, and production reporting from one dashboard.",
    features: [
      "Multi-preparer user management",
      "Client database with search and filters",
      "Return status tracking dashboard",
      "Preparer production reports",
      "Multi-office support",
      "Role-based access controls",
    ],
  },
  {
    title: "Bank Products & Revenue",
    description:
      "Integrated bank products from leading partners to serve clients and grow revenue.",
    features: [
      "Refund Advantage integration",
      "Refundo integration",
      "Republic integration",
      "SBTPG integration",
      "Real-time bank product status tracking",
      "Revenue tracking per preparer",
    ],
  },
  {
    title: "Reporting & Exports",
    description:
      "Comprehensive reports that give you full visibility into production, revenue, and growth.",
    features: [
      "Return production reports",
      "Revenue and fee reports",
      "Client list exports",
      "E-file status reports",
      "Bank product volume tracking",
      "Season-over-season comparisons",
    ],
  },
  {
    title: "Support & Training",
    description:
      "Real people who answer the phone. Dedicated support when it matters most.",
    features: [
      "Phone support with live agents",
      "Extended hours during tax season",
      "Onboarding and setup assistance",
      "Training materials and walkthroughs",
      "Dedicated account representative",
      "Year-round availability",
    ],
  },
  {
    title: "Security & Compliance",
    description:
      "Enterprise-grade security to protect your data and keep you compliant with IRS requirements.",
    features: [
      "Data encryption in transit and at rest",
      "Multi-factor authentication",
      "IRS Publication 4557 compliant",
      "Automatic session timeouts",
      "Audit trail logging",
      "Regular security updates",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient wave-divider-white text-white py-20 md:py-28 pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">
                Features
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Everything{" "}
                <span className="text-gradient-gold">under the hood</span>
              </h1>
              <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                A detailed look at what TaxFeeder includes. Every feature is built to help you
                prepare returns faster, manage your office better, and grow your business.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Categories */}
      <div>
        {featureCategories.map((category, i) => {
          const isAlt = i % 2 === 1;
          return (
            <section
              key={category.title}
              className={`py-16 md:py-20 ${isAlt ? "bg-off-white bg-dots" : "bg-white"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <ScrollReveal delay={0} direction="left">
                    <div className="md:sticky md:top-24">
                      <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-4">
                        <span className="text-gold font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                        {category.title}
                      </h2>
                      <p className="text-slate text-sm leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </ScrollReveal>
                  <div className="md:col-span-2">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {category.features.map((feature, fi) => (
                        <ScrollReveal key={feature} delay={fi * 80}>
                          <div
                            className={`flex items-start gap-3 rounded-xl p-4 border card-hover ${
                              isAlt
                                ? "bg-white border-gray-100"
                                : "bg-off-white border-transparent"
                            }`}
                          >
                            <svg
                              className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-navy/80 font-medium">
                              {feature}
                            </span>
                          </div>
                        </ScrollReveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Platform Options */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Choose your platform
              </h2>
              <p className="text-white/60 max-w-2xl mx-auto">
                Every feature works across all three platform options. Pick what fits your
                operation best.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Desktop",
                desc: "Installed locally on your machine. Full-featured, fast, and works offline. Great for offices with reliable hardware.",
                delay: 0,
              },
              {
                title: "Online",
                desc: "Browser-based access from any device. No installation required. Ideal for remote preparers and multi-location teams.",
                delay: 150,
              },
              {
                title: "Hosted",
                desc: "Cloud-hosted desktop experience. Combines the familiar desktop interface with anywhere access. Best of both worlds.",
                delay: 300,
              },
            ].map((item) => (
              <ScrollReveal key={item.title} delay={item.delay}>
                <div className="partner-badge rounded-xl p-6 text-center h-full">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 bg-gold rounded-full" />
                  </div>
                  <h3 className="text-lg font-bold text-gold mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient text-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Have questions about a specific feature?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Our team can walk you through any part of the platform. Book a demo or give us a
              call.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors"
              >
                Talk to Our Team
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
