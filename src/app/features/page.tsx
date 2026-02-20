import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | TaxFeeder Software",
  description: "Full feature breakdown of TaxFeeder — tax preparation tools, e-file, office management, reporting, support, and security.",
};

const featureCategories = [
  {
    title: "Tax Preparation Tools",
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
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">Features</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Everything under the hood
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              A detailed look at what TaxFeeder includes. Every feature is built to help you
              prepare returns faster, manage your office better, and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {featureCategories.map((category, i) => (
              <div key={category.title} className={`grid md:grid-cols-3 gap-8 items-start ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="md:col-span-1">
                  <div className="sticky top-24">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-gold font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-navy">{category.title}</h2>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="grid sm:grid-cols-2 gap-3">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 bg-off-white rounded-lg p-4">
                        <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-navy/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold mb-4">Have questions about a specific feature?</h2>
          <p className="text-white/70 mb-8">Our team can walk you through any part of the platform. Book a demo or give us a call.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors">
              Talk to Our Team
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
