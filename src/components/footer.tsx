import { Link as RouterLink } from "react-router-dom";
import { HashLinkConditional } from "./HashLinkConditional";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Background circles — same as original */}
      <div className="relative">
        {/* Footer Card — only color changed from bg-[#885b67] to bg-[#1a1630] */}
        <div className="bg-[#1a1630] rounded-t-[30px] px-32 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[40%_60%]">
            {/* Left - Contact */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <a href="/" className="flex items-center gap-2">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-lg">
                    <img
                      src="assets/logo.png"
                      alt="logo"
                      className="h-14 w-14 object-contain"
                    />
                  </div>

                  <span className="text-2xl font-bold text-white/90">
                    Effinanceforacc
                  </span>
                </a>
              </div>

              <div>
                <div className="mb-6 flex items-start gap-3 text-white/60">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-md leading-7">
                    B-812, Titanium City Center, near Income Tax Building, <br/>Satellite, Ahmedabad, Gujarat 380015
                  </p>
                </div>

                <div className="mb-4 flex items-center gap-3 text-white">
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  <h4 className="text-lg font-bold">
                    +91 9725946540
                  </h4>
                </div>

                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  <p className="text-md">
                    arpit@effinanceforacc.co
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Remaining Columns */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0 mr-6 sm:divide-x sm:divide-white/10">
              {/* Company */}
              <div className="sm:px-8">
                <h3 className="mb-8 text-xl font-bold text-white">Company</h3>

                <ul className="space-y-4 text-white/60">
                  <li>
                    <RouterLink to="/" >
                      <a className="transition-colors hover:text-white">
                        Home
                      </a>
                    </RouterLink>
                  </li>
                  {/* Placeholder for potential future link */}
                  <li>
                    <RouterLink to="/services" >
                      <a className="transition-colors hover:text-white">
                        Services
                      </a>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/industries" >
                      <a className="transition-colors hover:text-white">
                        Industries
                      </a>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/engagement-model" >
                      <a className="transition-colors hover:text-white">
                        Engagement Model
                      </a>
                    </RouterLink>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="sm:px-8">
                <h3 className="mb-8 text-xl font-bold text-white">Features</h3>

                <ul className="space-y-4 text-white/60">
                  <li>
                    <HashLinkConditional to="#Services" className="transition-colors hover:text-white">
                      Our services
                    </HashLinkConditional>
                  </li>
                  <li>
                    <HashLinkConditional to="#Reviews" className="transition-colors hover:text-white">
                      Reviews
                    </HashLinkConditional>
                  </li>
                  <li>
                    <HashLinkConditional to="#WhyChooseUs" className="transition-colors hover:text-white">
                      Why Choose us
                    </HashLinkConditional>
                  </li>
                  <li>
                    <HashLinkConditional to="#Case-studies" className="transition-colors hover:text-white">
                      Case Studies
                    </HashLinkConditional>
                  </li>
                  <li>
                    <HashLinkConditional to="#Blogs" className="transition-colors hover:text-white">
                      Blogs
                    </HashLinkConditional>
                  </li>
                </ul>
              </div>

              {/* Business Hours */}
              <div className="sm:px-8">
                <h3 className="mb-8 text-xl font-bold text-white">Business Hours</h3>

                <div className="space-y-5">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white">Monday -<br />Friday</span>
                    <span className="text-white/60">09.00 - 06.00</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white">Saturday</span>
                    <span className="text-white/60">09.00 - 03.00</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-white">Sunday</span>
                    <span className="font-semibold text-[#cd753a]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
          <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white md:flex-row">
            <p>
              © 2026 Effianaceforacc. All rights reserved.
            </p>

            <p>
              Made with ❤️ by{" "}
              <span className="font-semibold text-[#cd753a]">
                <a href="https://vertexmediahouse.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                  Vertex Media House
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
