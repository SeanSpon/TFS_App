import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Tax Feeder Software"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold text-white tracking-tight">
                Tax Feeder<span className="text-gold"> Software</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional tax preparation software built for tax offices, preparers, and service bureaus nationwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/software" className="hover:text-gold transition-colors">Software</Link></li>
              <li><Link href="/features" className="hover:text-gold transition-colors">Features</Link></li>
              <li><Link href="/reseller" className="hover:text-gold transition-colors">Become a Reseller</Link></li>
              <li><Link href="/support" className="hover:text-gold transition-colors">Support</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Book a Demo</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+15022378401" className="hover:text-gold transition-colors">(502) 237-8401</a>
              </li>
              <li>
                <a href="mailto:support@taxfeedersoftware.com" className="hover:text-gold transition-colors">
                  support@taxfeedersoftware.com
                </a>
              </li>
              <li>12100 River Beauty Loop</li>
              <li>Prospect, KY 40059</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support Hours</h4>
            <ul className="space-y-2 text-sm">
              <li>Monday &ndash; Friday</li>
              <li>10:00 AM &ndash; 6:00 PM EST</li>
              <li className="pt-2 text-gold text-xs font-medium">Extended hours during tax season</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} TaxFeeder Software. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gold transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-gold transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
