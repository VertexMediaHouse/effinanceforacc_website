import { useState } from "react";
import { Mail, Phone, ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
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
        <div className="mx-6 flex h-16 max-w-8xl xl:pl-24 items-center justify-between px-6 lg:px-20">
          <div className="flex items-center gap-4 divide-x divide-white/40">
            <a
              href="tel:+12377678889"
              className="flex items-center gap-2 text-base font-medium text-white"
            >
              <Phone className="h-5 w-5" strokeWidth={2} />
              <span>Call: +123-7767-8889</span>
            </a>

            <span className="hidden items-center gap-2 text-base sm:flex pl-4">
              <Mail className="h-5 w-5" strokeWidth={2} />
              <span>Mail: info@gmail.com</span>
            </span>
          </div>

          <div className="hidden md:flex items-center divide-x divide-white/40">
            <a href="#" aria-label="Facebook" className="px-3 transition-colors hover:text-white/80">
              <FaFacebook className="h-5 w-5" />
            </a>

            <a href="#" aria-label="Twitter" className="px-3 transition-colors hover:text-white/80">
              <FaTwitter className="h-5 w-5" />
            </a>

            <a href="#" aria-label="LinkedIn" className="px-3 transition-colors hover:text-white/80">
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a href="#" aria-label="Instagram" className="px-3 transition-colors hover:text-white/80">
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-20 flex h-20 max-w-8xl items-center justify-between px-6 lg:px-8">
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
              to="#"
              className="group flex items-center gap-3 rounded-md border border-[#392f83] py-2 pl-6 pr-2 text-[15px] font-semibold text-[#392f83] transition-all hover:bg-[#392f83] hover:text-white"
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