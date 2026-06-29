export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#392f83] pt-32 pb-10 rounded-t-2xl">
      {/* Background circles — same as original */}
      <div className="absolute -top-[400px] left-[15%] w-[900px] h-[900px] rounded-full border-[80px] border-[#2a2456] opacity-60" />
      <div className="absolute -top-[380px] left-[25%] w-[700px] h-[700px] rounded-full border-[80px] border-[#2a2456] opacity-60" />
      <div className="absolute -top-[360px] left-[35%] w-[500px] h-[500px] rounded-full border-[80px] border-[#2a2456] opacity-60" />

      <div className="relative z-10 px-6">
        {/* CTA */}
        <div className="text-center">
          <p className="uppercase tracking-[3px] text-[#cd753a] text-xs font-semibold mb-6">
            WE HELP YOU ON EVERY STEP OF THE JOURNEY
          </p>

          <h2 className="text-white text-5xl font-bold leading-tight mb-10">
            Get Started Today.
            <br />
            Boost Revenue With Finwave
          </h2>

          <button className="bg-[#cd753a] hover:bg-[#b86630] transition-all duration-300 text-white shadow-lg shadow-[#cd753a]/30 font-semibold px-8 py-4 rounded-lg inline-flex items-center gap-3">
            Get Started Today
            <span>→</span>
          </button>
        </div>

        {/* Footer Card — only color changed from bg-[#885b67] to bg-[#1a1630] */}
        <div className="mx-16 mt-8 bg-[#1a1630] rounded-[30px] px-32 py-24 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#cd753a] flex items-center justify-center text-white font-bold">
                  F
                </div>

                <span className="text-white text-3xl font-bold">
                  Finwave
                </span>
              </div>

              <p className="text-white/60 text-sm leading-7 mb-6">
                Middlest 2 East 42nd Streearket
                <br />
                place New York, NY 10017
              </p>

              <h4 className="text-white font-bold mb-3">
                123(55)-90067990
              </h4>

              <p className="text-white/60">
                info@example.com
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white text-xl font-bold mb-8">
                Company
              </h3>

              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Project</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-white text-xl font-bold mb-8">
                Features
              </h3>

              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors duration-200">What's Included</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Consulting</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-200">Contact</a></li>
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
                  <span className="text-white/60">09.00 AM - 21.00 PM</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Saturday</span>
                  <span className="text-white/60">09.00 AM - 21.00 PM</span>
                </div>

                <div className="flex justify-between border-b border-white/10 pb-3">
                  <span className="text-white">Sunday</span>
                  <span className="text-[#cd753a] font-semibold">Closed</span>
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