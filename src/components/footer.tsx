export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#055147] pt-32 pb-10 rounded-t-2xl">
      {/* Background circles */}
      <div className="absolute -top-[400px] left-[15%] w-[900px] h-[900px] rounded-full border-[80px] border-[#045b4c]" />
      <div className="absolute -top-[380px] left-[25%] w-[700px] h-[700px] rounded-full border-[80px] border-[#045b4c]" />
      <div className="absolute -top-[360px] left-[35%] w-[500px] h-[500px] rounded-full border-[80px] border-[#045b4c]" />

      <div className="relative z-10 px-6">
        {/* CTA */}
        <div className="text-center">
          <p className="uppercase tracking-[3px] text-white/70 text-xs font-semibold mb-6">
            WE HELP YOU ON EVERY STEP OF THE JOURNEY
          </p>

          <h2 className="text-white text-5xl font-bold leading-tight mb-10">
            Get Started Today.
            <br />
            Boost Revenue With Finwave
          </h2>

          <button className="bg-[#ffb800] hover:bg-[#ffca28] transition-all duration-300 text-black font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-3">
            Get Started Today
            <span>→</span>
          </button>
        </div>

        {/* Footer Card */}
        <div className="mx-16 mt-8 bg-[#006d5b] rounded-[30px] px-32 py-24 shadow-[0_20px_80px_rgba(0,0,0,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#007865] font-bold">
                  F
                </div>

                <span className="text-white text-3xl font-bold">
                  Finwave
                </span>
              </div>

              <p className="text-white/80 text-sm leading-7 mb-6">
                Middlest 2 East 42nd Streearket
                <br />
                place New York, NY 10017
              </p>

              <h4 className="text-white font-bold  mb-3">
                123(55)-90067990
              </h4>

              <p className="text-white/80">
                info@example.com
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-xl font-bold mb-8">
                Company
              </h3>

              <ul className="space-y-4 text-white/80">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white text-xl font-bold mb-8">
                Features
              </h3>

              <ul className="space-y-4 text-white/80">
                <li><a href="#">What's Included</a></li>
                <li><a href="#">Consulting</a></li>
                <li><a href="#">How It Works</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-white text-xl font-bold mb-8">
                Business Hours
              </h3>

              <div className="space-y-5">
                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Friday</span>
                  <span className="text-white/80">
                    09.00 AM - 21.00 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Saturday</span>
                  <span className="text-white/80">
                    09.00 AM - 21.00 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Sunday</span>
                  <span className="text-[#ffb800] font-semibold">
                    Closed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-x mt-12">
          Copyright© 2026 Finwave by RadiusTheme
        </div>
      </div>
    </footer>
  );
}