import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-[#0e6655] sticky top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 lg:px-[60px] h-[72px] max-w-[1600px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[10px]">
          <div className="w-[40px] h-[40px] rounded-full bg-white/15 flex items-center justify-center border-2 border-white/40">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-[22px] h-[22px]">
              <path d="M3 17l4-8 4 4 3-6 4 10" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="19" cy="5" r="2" fill="white" stroke="none" />
            </svg>
          </div>
          <span className="text-white text-[20px] font-bold tracking-[-0.3px]">Finwave</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-[36px]">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-[15px] font-medium transition-colors flex items-center gap-[4px] ${
                pathname === link.to
                  ? "text-[#f5a800]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className="w-[12px] h-[12px] opacity-70">
                <path d="M2 4l4 4 4-4" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-[24px]">
          <a href="tel:+1234567890" className="text-white/90 text-[15px] font-medium flex items-center gap-[6px] hover:text-white transition-colors">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-[16px] h-[16px]">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 5.18 2 2 0 014.95 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Contact Us
          </a>
          <Link
            to="/services"
            className="bg-[#f5a800] text-[#0d1b2a] px-[22px] py-[10px] rounded-[6px] text-[15px] font-semibold flex items-center gap-[8px] hover:bg-[#e09a00] transition-colors"
          >
            Get Started &nbsp;→
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0c5c4a] border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-[15px] font-medium py-2 border-b border-white/10 transition-colors ${
                pathname === link.to ? "text-[#f5a800]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/services"
            onClick={() => setMobileOpen(false)}
            className="mt-2 bg-[#f5a800] text-[#0d1b2a] px-6 py-3 rounded-[6px] text-[15px] font-semibold text-center hover:bg-[#e09a00] transition-colors"
          >
            Get Started →
          </Link>
        </div>
      )}
    </nav>
  );
}
