import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo | TaxFeeder Software",
  description: "Book a free demo of TaxFeeder Software. See the platform in action and learn how it fits your tax business.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium mb-3 text-sm uppercase tracking-wider">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Let&apos;s talk. We&apos;ll show you exactly how TaxFeeder fits your business.
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Book a free demo, ask a question, or tell us what you need. We respond within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              <h2 className="text-2xl font-bold text-navy mb-8">Book a free demo</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">First Name *</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">Last Name *</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email *</label>
                    <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">Phone *</label>
                    <input type="tel" id="phone" name="phone" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-navy mb-2">I&apos;m interested in... *</label>
                  <select id="interest" name="interest" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold bg-white">
                    <option value="">Select an option</option>
                    <option value="software">Tax Preparation Software</option>
                    <option value="reseller">Reseller / Service Bureau Program</option>
                    <option value="support">Support for Existing Account</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">Message (optional)</label>
                  <textarea id="message" name="message" rows={4} className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none" placeholder="Tell us about your business, what software you're currently using, or any questions you have." />
                </div>
                <button type="submit" className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors">
                  Submit Request
                </button>
                <p className="text-xs text-slate">
                  We respond within 1 business day. Your information is never shared with third parties.
                </p>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="md:col-span-2">
              <div className="bg-off-white rounded-xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-navy mb-6">Contact info</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-navy mb-1">Phone</p>
                    <a href="tel:+15022378401" className="text-gold hover:text-gold-dark font-semibold transition-colors">
                      (502) 237-8401
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy mb-1">Email</p>
                    <a href="mailto:support@taxfeedersoftware.com" className="text-gold hover:text-gold-dark font-semibold transition-colors break-all">
                      support@taxfeedersoftware.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy mb-1">Office</p>
                    <p className="text-slate text-sm">
                      12100 River Beauty Loop<br />
                      Prospect, KY 40059
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-navy mb-1">Hours</p>
                    <p className="text-slate text-sm">
                      Monday &ndash; Friday<br />
                      10:00 AM &ndash; 6:00 PM EST
                    </p>
                    <p className="text-gold text-xs font-medium mt-1">Extended hours during tax season</p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm font-medium text-navy mb-3">Prefer to schedule directly?</p>
                  <a
                    href="https://calendly.com/john-jcolverconsulting/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-navy hover:bg-navy-light text-white font-semibold px-6 py-3 rounded-md text-sm transition-colors w-full text-center"
                  >
                    Schedule on Calendly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
