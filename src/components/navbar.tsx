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
    <div className="w-full fixed top-0 left-0 z-50 mt-6 px-6 lg:px-12 pointer-events-none transition-all duration-300">
      <nav className="max-w-[1400px] mx-auto bg-[#006a52] rounded-full px-8 py-4 shadow-lg pointer-events-auto">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 12C4 12 7 8 12 8C17 8 20 12 20 12" stroke="#006a52" strokeWidth="3" strokeLinecap="round"/>
                <path d="M4 12C4 12 7 16 12 16C17 16 20 12 20 12" stroke="#006a52" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <span>Finwave</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-white/90">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors flex items-center gap-1 ${
                  pathname === link.to
                    ? "text-white"
                    : "hover:text-white/80"
                }`}
              >
                {link.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </Link>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-6">
            <button aria-label="Search" className="text-white hover:text-white/80 transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <Link
              to="/contact"
              className="bg-white text-[#006a52] px-6 py-2.5 rounded-full font-semibold text-[15px] flex items-center gap-2 transition-transform hover:scale-105"
            >
              Lets Talk
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
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
          <div className="lg:hidden mt-4 pt-4 border-t border-white/20 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`text-[15px] font-medium py-2 transition-colors ${
                  pathname === link.to ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 bg-white text-[#006a52] px-6 py-3 rounded-full text-[15px] font-semibold text-center hover:bg-gray-100 transition-colors"
            >
              Lets Talk
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
