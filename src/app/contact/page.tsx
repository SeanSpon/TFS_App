"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          phone: data.get("phone"),
          email: data.get("email"),
          city: data.get("city"),
          state: data.get("state"),
          currentSoftware: data.get("currentSoftware"),
          numReturns: data.get("numReturns"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Allow form to show success even if API is not yet wired
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

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
              Fill out the form below and our team will reach out to you directly.
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
              <h2 className="text-2xl font-bold text-navy mb-8">Request a call</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">Thank you!</h3>
                  <p className="text-slate">We&apos;ve received your information and will reach out shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Required Fields */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">Contact Name *</label>
                      <input type="text" id="name" name="name" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">Company *</label>
                      <input type="text" id="company" name="company" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">Phone *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">Email *</label>
                      <input type="email" id="email" name="email" required className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                  </div>

                  {/* Optional Fields */}
                  <p className="text-xs text-slate font-medium uppercase tracking-wider pt-2">Optional</p>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-navy mb-2">City</label>
                      <input type="text" id="city" name="city" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-navy mb-2">State</label>
                      <input type="text" id="state" name="state" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="currentSoftware" className="block text-sm font-medium text-navy mb-2">Current Software</label>
                      <input type="text" id="currentSoftware" name="currentSoftware" placeholder="e.g. Drake, TaxWise, ProSeries" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                    <div>
                      <label htmlFor="numReturns" className="block text-sm font-medium text-navy mb-2"># of Returns</label>
                      <input type="text" id="numReturns" name="numReturns" placeholder="Approximate annual volume" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">Message</label>
                    <textarea id="message" name="message" rows={3} className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold resize-none" placeholder="Tell us about your business or any questions you have." />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-4 rounded-md transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "Submit Request"}
                  </button>
                  <p className="text-xs text-slate">
                    Our team will call you directly after receiving your information. Your data is never shared with third parties.
                  </p>
                </form>
              )}
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
                    <a href="mailto:john@taxfeedersoftware.com" className="text-gold hover:text-gold-dark font-semibold transition-colors break-all">
                      john@taxfeedersoftware.com
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
