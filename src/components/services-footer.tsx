import { Link } from "react-router-dom";

export default function ServicesFooter() {
  return (
    <footer className="bg-[#0a4a3e] px-[60px] pt-[70px]">
      <div className="flex gap-[60px] pb-[50px] border-b border-white/10">
        {/* Brand */}
        <div className="flex-none w-[280px]">
          <div className="flex items-center gap-[10px] mb-[18px]">
            <div className="w-[40px] h-[40px] rounded-full bg-white/15 flex items-center justify-center border-2 border-white/40">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                className="w-[22px] h-[22px]"
              >
                <path
                  d="M3 17l4-8 4 4 3-6 4 10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="19" cy="5" r="2" fill="white" stroke="none" />
              </svg>
            </div>
            <span className="text-white text-[20px] font-bold">Finwave</span>
          </div>
          <p className="text-[14px] text-white/60 leading-[1.7] mb-[24px]">
            Lorem ipsum dolor sitet ametconsectetur adipiscing elit. Mi augue
            viverra ac vitae comestmodo urna.
          </p>
          <div className="flex gap-[10px]">
            <a
              href="#"
              className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[16px] h-[16px]"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[16px] h-[16px]"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-[16px] h-[16px]"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[16px] h-[16px]"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="flex-1">
          <h4 className="text-white text-[16px] font-bold mb-[20px]">
            Company
          </h4>
          <ul className="list-none flex flex-col gap-[12px]">
            <li>
              <Link
                to="/"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                Service
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div className="flex-1">
          <h4 className="text-white text-[16px] font-bold mb-[20px]">
            Features
          </h4>
          <ul className="list-none flex flex-col gap-[12px]">
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                What's Included
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                Consulting
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white/65 text-[14px] hover:text-white transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Location */}
        <div className="flex-none w-[240px]">
          <h4 className="text-white text-[16px] font-bold mb-[16px]">
            Locations
          </h4>
          <p className="text-[14px] text-white/65 leading-[1.65] mb-[16px]">
            Middlest 2 East 42nd Streearket place
            <br />
            New York, NY 10017
          </p>
          <p className="text-[18px] font-bold text-white mb-[8px]">
            123(55)-90067990
          </p>
          <p className="text-[14px] text-white/65">info@example.com</p>
        </div>
      </div>

      <div className="py-[20px] text-center">
        <p className="text-[13px] text-white/45">
          Copyright© 2026 Finwave by RadiusTheme
        </p>
      </div>
    </footer>
  );
}
