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

              <p className="mb-6 text-md leading-7 text-white/60">
                Middlest 2 East 42nd Streearket
                <br />
                place New York, NY 10017
              </p>

              <h4 className="mb-3 text-lg font-bold text-white">
                123(55)-90067990
              </h4>

              <p className="text-md text-white/60">
                info@example.com
              </p>
            </div>

            {/* Right - Remaining Columns */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-0 mr-6 sm:divide-x sm:divide-white/10">
              {/* Company */}
              <div className="sm:px-8">
                <h3 className="mb-8 text-xl font-bold text-white">Company</h3>

                <ul className="space-y-4 text-white/60">
                  <li>
                    <a href="/" className="transition-colors hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                  </li>
                  <li>
                    <a href="/services" className="transition-colors hover:text-white">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="/industries" className="transition-colors hover:text-white">
                      Industries
                    </a>
                  </li>
                  <li>
                    <a href="/engagement-model" className="transition-colors hover:text-white">
                      Engagement Model
                    </a>
                  </li>
                </ul>
              </div>

              {/* Features */}
              <div className="sm:px-8">
                <h3 className="mb-8 text-xl font-bold text-white">Features</h3>

                <ul className="space-y-4 text-white/60">
                  <li>
                    <a href="/features" className="transition-colors hover:text-white">
                      What's Included
                    </a>
                  </li>
                  <li>
                    <a href="/consulting" className="transition-colors hover:text-white">
                      Consulting
                    </a>
                  </li>
                  <li>
                    <a href="/how-it-works" className="transition-colors hover:text-white">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="transition-colors hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="transition-colors hover:text-white">
                      Contact
                    </a>
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
              © 2026 Finwave by RadiusTheme. All rights reserved.
            </p>

            <p>
              Made with ❤️ by{" "}
              <span className="font-semibold text-[#cd753a]">
                <a href="https://vertexmediahouse.com" target="_blank">
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
