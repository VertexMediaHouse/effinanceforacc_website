import { useState } from "react";
import { Mail, Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaInstagram, FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";

const NAV_ITEMS = [
  { label: "Home", href: "/", hasDropdown: false, active: true },
  { label: "Services", href: "/services", hasDropdown: false },
  { label: "Industries", href: "/industries", hasDropdown: false },
  { label: "Engagement", href: "/engagement-model", hasDropdown: false },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full font-sans text-[13px]">
      {/* Top utility bar */}
      <div className="bg-[#1a1630] text-white">
        <div className="mx-auto flex h-16 w-full max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-20 xl:pl-24">
          <div className="flex items-center gap-4 divide-x divide-white/40">
            <a
              href="tel:+919725946540"
              className="flex items-center gap-2 text-base font-medium text-white"
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
              <span>Call: +91 9725946540</span>
            </a>

            <a
              href="mailto:arpit@effinanceforacc.co"
              className="hidden items-center gap-2 text-base sm:flex pl-4">
              <Mail className="h-5 w-5" strokeWidth={2} />
              <span>Mail: arpit@effinanceforacc.co</span>
            </a>
          </div>

          <div className="hidden md:flex items-center divide-x divide-white/40">
            <a href="https://www.facebook.com/share/1H3Rvsi2Xr/" aria-label="Facebook" className="px-3 transition-colors hover:text-white/80">
              <FaFacebook className="h-5 w-5" />
            </a>

            <a href="https://linkedin.com/in/arpit-shah-us-cpa-licensed-montana-14883a1b1" aria-label="LinkedIn" className="px-3 transition-colors hover:text-white/80">
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a href="https://www.instagram.com/effinanceforacc?igsh=MjJtZHE4ZjJ0cHVu" aria-label="Instagram" className="px-3 transition-colors hover:text-white/80">
              <FaInstagram className="h-5 w-5" />
            </a>

            <a href="https://maps.app.goo.gl/bgxDwoJ7hD6d7JjH9" aria-label="Twitter" className="px-3 transition-colors hover:text-white/80">
              <FaMap className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex h-20 w-full max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="assets/logo.png"
              alt="logo"
              className="h-20 w-auto"
            />
            <span className="text-2xl font-bold text-gray-900">
              Effinanceforacc
            </span>
          </Link>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-10 ml-auto">
            {/* Desktop Nav */}
            <nav className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center gap-1 text-[16px] transition-colors hover:text-[#392f83] ${item.active
                    ? "font-semibold text-gray-900"
                    : "font-medium text-gray-600"
                    }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="h-4 w-4" strokeWidth={2} />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <Link
              to="https://calendar.zoho.in/zc/view/slot-booking/zz080212300905139a87ab803df20436f4911d04ceefa3183adefcd4f09ec9eb27daea5d3ef62d3881c9b57945d21e4ebe4197d04e"
              className="group flex items-center gap-3 rounded-md border border-[#392f83] py-2 pl-6 pr-2 text-[15px] font-semibold text-[#392f83] transition-all hover:bg-[#392f83] hover:text-white"
              target="_blank"
            >
              Free Consultation

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#392f83] text-white transition-colors group-hover:bg-white group-hover:text-[#392f83]">
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="text-gray-800 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="border-t border-gray-100 px-6 py-5 lg:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <Link to={item.href} key={item.label}>
                  <a className={`flex items-center justify-between text-[16px] ${item.active ? "font-semibold text-gray-900" : "font-medium text-gray-600"}`}>
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
                    )}
                  </a>
                </Link>
              ))}
            </nav>

            <a
              href="#"
              className="mt-6 flex items-center justify-center gap-3 rounded-md border border-[#392f83] py-2 text-[15px] font-semibold text-[#392f83]"
            >
              Free Consultation

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#392f83] text-white">
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}